"use client"

import Calendar from "@/components/dashboard/calendar/Calendar";
import Header from "@/components/dashboard/Header";
import LineChart from "@/components/dashboard/charts/LineChart";
import PieChart from "@/components/dashboard/charts/PieChart";
import SidebarList from "@/components/dashboard/sidebar/SidebarList";
import StatList from "@/components/dashboard/stats/StatList";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react"



const Dashboard = () => {

    const [singleInstanceData, setSingleInstanceData] = useState({
        "Revenue": null,
        "Transactions": null,
        "Likes": null,
        "Users": null,
    })

    const [guestData, setGuestData] = useState({
        "W11": null,
        "W2": null,
        "W3": null,
        "W4": null,
    })

    const [userData, setUserData] = useState({
        "w1": null,
        "w2": null,
        "w3": null,
        "w4": null,
    })

    const [productData, setProductData] = useState({
        "Basic Tees": null,
        "Custom Short Pants": null,
        "Super Hoodies": null
    })

    const [isLoading, setIsLoading] = useState(true);

    console.log(singleInstanceData)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setIsLoading(false);
                let currEle = json[0];
                setSingleInstanceData({
                    "Revenue": currEle["price"],
                    "Transactions": currEle["rating"]["count"],
                    "Likes": currEle["rating"]["count"] + 60,
                    "Users": currEle["rating"]["count"] + 100,
                });
                setUserData({
                    "W1": json[1]["price"],
                    "W2": json[2]["price"],
                    "W3": json[3]["price"],
                    "W4": json[4]["price"],
                });
                setGuestData({
                    "W1": json[5]["price"],
                    "W2": json[6]["price"],
                    "W3": json[7]["price"],
                    "W4": json[8]["price"],
                });
                setProductData({
                    "Basic Tees": json[9]["price"],
                    "Custom Short Pants": json[10]["price"],
                    "Super Hoodies": json[11]["price"]
                })
            })
    }, []);


    const { data: session, status } = useSession()


    if (status != "authenticated") {
        return <p> You are not signed in, please click here to<Link href="/" className="text-[#346BD4]"> Sign in</Link></p>
    }


    if (isLoading) {
        return <p>Loading...</p>
    }


    return (
        <div className=" bg-whitesmoke pl-10 pr-[3.75rem] py-10 ">
            <div className=" flex">
                <div className="bg-black min-w-[17.5rem] rounded-[1.875rem] py-[3.75rem] text-white mr-[3.75rem]">
                    <div className="h-full  pl-[3.125rem]  flex flex-col justify-between">
                        <div>
                            <p className="text-4xl mb-[3.75rem] font-bold">Board.</p>
                            <div>
                                <SidebarList />
                            </div>
                        </div>
                        <div className="text-sm flex flex-col">
                            <Link href="" className="mb-5">Help</Link>
                            <Link href="">Contact us</Link>
                        </div>
                    </div>
                </div>
                <div className="  w-full pt-5 pb-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <Header className="mb-10" />
                        </div>
                        <div>
                            <StatList data={singleInstanceData} />
                        </div>
                        <div className="bg-white rounded-[1.25rem] py-[1.875rem] px-10">
                            <p className="text-lg font-bold">Activities</p>
                            <a href="" className="text-sm text-[#999999]">May-June 2021 &#9660;</a>
                            <LineChart userData={userData} guestData={guestData} />
                        </div>
                        <div className="flex justify-between">
                            <div className="w-[30rem] bg-white rounded-[1.25rem]">
                                <PieChart productData={productData} />
                            </div>
                            <div className=" w-[30rem] bg-white rounded-[1.25rem]">
                                <Calendar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard;