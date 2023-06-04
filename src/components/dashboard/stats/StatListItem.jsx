import { Lato, Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ['latin'], weight: ["300", "400", "700"] });

const lato = Lato({ subsets: ['latin'], weight: ["100", "300", "400", "700", "900"] })

const StatListItem = ({ icon, heading, number, colorClass }) => {

    return (
        <div className={`${colorClass}  py-5 px-6 flex flex-col min-w-[13.75rem] rounded-[1.25rem]`}>
            <div className="text-2xl flex justify-end">
                {icon}
            </div>
            <div className="flex flex-col">
                <p className={`text-sm ${lato.className}`}>{heading}</p>
                <p className={`text-2xl font-bold ${openSans.className}`}>{heading === "Revenue" && "$"}{number}</p>
            </div>
        </div>
    )
}

export default StatListItem;