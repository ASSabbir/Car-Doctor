import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import './nav.css'
import { IoSearchOutline } from "react-icons/io5";

import { PiHandbag } from "react-icons/pi";


const Nav = () => {
    const navlink = <>
        <li><Link>Home</Link></li>
        <li><Link>Home</Link></li>
        <li><Link>Home</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                <a className=" text-xl "><img src={logo} alt="" className="h-16" /> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end gap-2 flex items-center">
                <div className="flex items-center gap-2 text-xl ">
                    <PiHandbag className="hover:text-primary duration-100"/>
                    <IoSearchOutline className="hover:text-primary duration-100"/>
                </div>
                <a className="input-button-js px-5 py-2 text-primary cursor-pointer  border-primary">Appointment</a>
            </div>
        </div>
    );
};

export default Nav;