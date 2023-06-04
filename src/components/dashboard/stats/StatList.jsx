import StatListItem from "@/components/dashboard/stats/StatListItem";
import { LuBanknote } from "react-icons/lu"
import { GoThumbsup } from "react-icons/go";
import { BsTags } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

const StatList = ({ data }) => {


    const statList = Object.keys(data);

    const colorList = ["bg-[#DDEFE0]", "bg-[#F4ECDD]", "bg-[#EFDADA]", "bg-[#DEE0EF]"]

    const iconList = [<LuBanknote />, <BsTags />, <GoThumbsup />, <FiUsers />]

    const statCardInfo = statList.map((ele, idx) => {
        return [ele, colorList[idx], iconList[idx]];
    })


    return (
        <div className="flex justify-between">
            {
                statCardInfo.map((ele) => {
                    return (<StatListItem key={ele[0]} icon={ele[2]} heading={ele[0]} number={data[ele[0]]} colorClass={ele[1]} />)
                })}
        </div>

    )
}

export default StatList;