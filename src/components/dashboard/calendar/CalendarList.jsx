import { Lato, Open_Sans } from "next/font/google";

const lato = Lato({ subsets: ['latin'], weight: ["100", "300", "400", "700", "900"] })


const CalendarList = ({ colorClass, title, venue, time }) => {
    return (
        <div className={`flex mb-5 ${lato.className}`}>
            <div className={`w-1 ${colorClass} mr-1`}>
                &nbsp;
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-sm">{title}</p>
                <p className="text-[#999999] text-xs">{time}</p>
                <p className="text-[#999999] text-xs">{venue}</p>
            </div>
        </div>
    )
}

export default CalendarList;