import Dashboard from "@/app/dashboard/page";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { LuCalendarClock, LuSettings } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import SidebarListItem from "@/components/dashboard/sidebar/SidebarListItem";

const SidebarList = () => {

    const listItems = [
        {
            "icon": <AiOutlinePieChart />,
            "linkText": "Dashboard"
        },
        {
            "icon": <BsTags />,
            "linkText": "Transactions"
        },
        {
            "icon": <LuCalendarClock />,
            "linkText": "Schedules"
        },
        {
            "icon": <FaRegUserCircle />,
            "linkText": "Users"
        },
        {
            "icon": <LuSettings />,
            "linkText": "Settings"
        },
    ]

    return (
        <div>
            {listItems.map(ele => (
                <SidebarListItem key={ele.linkText} icon={ele.icon} linkText={ele.linkText} />
            ))}
        </div>

    )
}

export default SidebarList;