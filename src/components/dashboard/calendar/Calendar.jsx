import CalendarList from "@/components/dashboard/calendar/CalendarList";

const Calendar = () => {


    const calendarData = [
        {
            colorClass: "bg-[#9BDD7C]",
            title: "Meeting with suppliers from Kuta Bali",
            time: "14.00-15.00",
            venue: "at Sunset Road, Kuta, Bali"
        },
        {
            colorClass: "bg-[#6972C3]",
            title: "Check operation at Giga Factory 1",
            time: "18.00-20.00",
            venue: "at Central Jakarta"
        }
    ]

    return (
        <div className="py-[1.875rem] px-10 flex flex-col  h-full">
            <div className="flex justify-between mb-5">
                <span className="text-lg font-bold">Today&apos;s schedule</span>
                <a href="" className="text-[#999999] text-xs">See all &gt;</a>
            </div>
            <div>
                {calendarData.map(ele =>
                    <CalendarList key={ele.time} colorClass={ele.colorClass} time={ele.time} venue={ele.venue} title={ele.title} />
                )}
            </div>
        </div>
    )
}

export default Calendar;