"use client";
import React, { useEffect, useState } from 'react'
import AppLogo from '../widgets/AppLogo'
import Link from 'next/link'
import menu from '@/constants/menu'
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TopNav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    const scrollNavEffect = () => {
        setScrolled(window.scrollY > 0);
    }

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
    }

    useEffect(() => {
        document.addEventListener("scroll", scrollNavEffect);
        return () => {
            document.removeEventListener("scroll", scrollNavEffect);
        }
    }, []);

    return (
        <>
            <nav className={`sticky top-0 transition-all duration-200 ease-in-out z-20 bg-white ${scrolled ? "shadow-md shadow-zinc-400/5" : ""}`.trim()}>
                <div className="flex justify-between items-center px-3 lg:px-0 lg:max-w-6xl mx-auto">
                    <div className="flex-grow">
                        <AppLogo />
                    </div>
                    <div className="flex-shrink-0">
                        <ul className="items-center hidden lg:flex gap-x-1">
                            {menu?.map((item, index) => (
                                <NavLink key={index} {...item} scrolled={scrolled} />
                            ))}
                        </ul>
                        <button type="button" className="flex relative lg:hidden p-2 rounded-lg hover:bg-zinc-100 transition-all duration-200 ease-in-out items-center justify-center" onClick={toggleDrawer}>
                            <motion.span
                                animate={showDrawer ? "open" : "close"}
                                initial="open"
                                variants={{
                                    close: { opacity: 1, x: 0, position: "static" },
                                    open: { opacity: 0, x: -5, position: "absolute" }
                                }}
                            >
                                <CiMenuFries size={24} />
                            </motion.span>
                            <motion.span
                                animate={showDrawer ? "open" : "close"}
                                initial="close"
                                variants={{
                                    close: { opacity: 0, x: 5, position: "absolute" },
                                    open: { opacity: 1, x: 0, position: "static" }
                                }}
                            >
                                <LiaTimesSolid size={24} />
                            </motion.span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar Drawer Navigation */}
            <aside id="mobile-drawer" className={`block lg:hidden fixed top-14 transition-all duration-200 ease-in-out ${showDrawer ? "-left-0" : "-left-full"} z-30 bg-white w-full h-full p-2`}>
                <ul className="flex lg:hidden flex-col">
                    {menu?.map((item, index) => (
                        <NavLink key={index} {...item} toggleDrawer={toggleDrawer} />
                    ))}
                </ul>
            </aside>
        </>
    )
}

const NavLink = ({ path, label, toggleDrawer = () => null }) => {
    const pathname = usePathname();
    const isActive = pathname === path;

    return (
        <li className="block" onClick={toggleDrawer}>
            <Link href={path} className={`top-nav-link ${isActive ? "active" : ""}`}>
                {label}
            </Link>
        </li>
    )
}

export default TopNav