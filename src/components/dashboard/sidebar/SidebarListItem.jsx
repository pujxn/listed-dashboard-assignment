import Link from 'next/link';

const SidebarListItem = ({ icon, linkText }) => {
    return (
        <Link className='flex items-center text-lg mb-5' href="">
            <span className="mr-5">{icon}</span><span className={linkText === 'Dashboard' && "font-bold"}>{linkText}</span>
        </Link>
    )
}

export default SidebarListItem;