'use client'
import Link from "next/link";
import { useState } from "react";
import { PrimaryButton } from "../ui/Buttons";
import Container from "../ui/Container";

const MainNav = () => {

    const navItems =
        <>
            <li><Link href='/'>Home</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/tours'}>Tours</Link></li>
        </>


    const [user, setUser] = useState(true)
    return (
        <div className="sticky top-0  shadow-md z-50 ">
            <Container className=" ">
                <div className="navbar ">
                    <div className="navbar-start" >
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-52 list-none ">
                                {navItems}
                            </ul>
                        </div>
                        <a href='/' className="btn btn-ghost  text-xl font-bold 
                ">
                            SHakeeb
                        </a>
                    </div>
                    <div className=" w-full flex justify-end  gap-8 ">
                        <div className="hidden lg:flex gap-3 list-none ">
                            {navItems}
                        </div>
                        <div className="flex items-center gap-2">
                            <p>user</p>
                            {!user ?
                                <PrimaryButton link='/login' className=''>
                                    login
                                </PrimaryButton> :
                                <button className=" btn btn-sm rounded-xl text-xs">
                                    Logout
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default MainNav;