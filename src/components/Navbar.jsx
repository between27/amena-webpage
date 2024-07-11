import { NavItem } from "./NavItem";

export function Navbar() {
    return(
    <nav className="flex justify-between items-center p-3">
    <div>
        <img src="logo.webp" className="w-16 rounded-full" alt="" />
    </div>
    <div>
        <ul className="flex gap-x-4 justify-between">
            <NavItem title="Home" />
            <NavItem title="About" />
            <NavItem title={"Contact Us"} />
        </ul>
    </div>
    <button className=" rounded-full border border-black w-[125px] h-[52px] hover:text-white hover:bg-black hover:scale-105 transition duration-150">
        Login
    </button>
    </nav>
    )
}
