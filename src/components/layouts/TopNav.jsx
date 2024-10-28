"use client";
import React, { useEffect, useState } from 'react'
import AppLogo from '../widgets/AppLogo'
import Link from 'next/link'
import menu from '@/constants/menu'
import { CiMenuFries } from "react-icons/ci";

const TopNav = () => {
    const [scrolled, setScrolled] = useState(false);

    const scrollNavEffect = () => {
        setScrolled(window.scrollY > 0);
    }

    useEffect(() => {
        document.addEventListener("scroll", scrollNavEffect);
        return () => {
            document.removeEventListener("scroll", scrollNavEffect);
        }
    }, []);

    return (
        <nav className={`sticky top-0 transition-all duration-200 ease-in-out ${scrolled ? "bg-white shadow-lg shadow-zinc-700/5" : ""}`.trim()}>
            <div className="flex justify-between items-center px-3 lg:px-0 lg:max-w-7xl mx-auto">
                <div className="flex-grow">
                    <AppLogo />
                </div>
                <div className="flex-shrink-0">
                    <ul className="items-center hidden lg:flex">
                        {menu?.map((item, index) => (
                            <NavLink key={index} {...item} />
                        ))}
                    </ul>
                    <button type="button" className="flex lg:hidden p-2 rounded-lg hover:bg-zinc-100 transition-all duration-200 ease-in-out">
                        <CiMenuFries size={24} />
                    </button>
                </div>
            </div>
        </nav>
    )
}

const NavLink = ({ path, label }) => {
    return (
        <li>
            <Link href={path} className="p-4 text-zinc-500 hover:text-zinc-900">
                {label}
            </Link>
        </li>
    )
}

export default TopNav