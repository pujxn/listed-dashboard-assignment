import { AiOutlineBell } from "react-icons/ai"
import { RxAvatar } from "react-icons/rx"
import { BiSearch } from "react-icons/bi"

const Header = () => {
    return (
        <div className="flex justify-between">
            <div>
                <p className="text-2xl font-bold">Dashboard</p>
            </div>
            <div className="flex items-center gap-[1.875rem]">
                <div className="flex items-center bg-white text-sm rounded-[0.625rem]">
                    <input type="text" placeholder="Search..." className="rounded-[0.625rem] px-1" />
                    <button><BiSearch /></button>
                </div>
                <AiOutlineBell className="text-lg" />
                <RxAvatar className="text-lg" />
            </div>
        </div>

    )
}

export default Header;