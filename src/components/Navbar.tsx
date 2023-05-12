"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Logo from '@/static/logo.png'
import Image from "next/image";
import { Context } from "@/app/context/ContextProvider";
import React from "react";

const routes = {
    "/": {
        en: 'Work',
        he: 'עבודות'
    },
    "/about": {
        en: 'About',
        he: 'אודות'
    }
} as const

type Routes = keyof typeof routes

const Navbar = () => {
    const path = usePathname();
    const { toggleLanguage, language } = React.useContext(Context);
    const renderRoutes = () => {
        return (
            <>
                {Object.keys(routes).map((route, index) => {
                    const pathName = route as Routes
                    return (
                        <li key={index} className={`navitem ${path === route ? 'active' : ''}`}>
                            <Link href={route}>{routes[pathName][language]}</Link>
                        </li>

                    )
                })}
            </>
        )
    }

    const LanguageIcon = () => {
        return (
            <div className="bg-slate-500 p-1 text-sm rounded-full">
                <Link href="#" onClick={() => toggleLanguage(language)}>{language.toUpperCase()}</Link>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </div>
        )
    }

    return (
        <nav className="p-4 flex justify-center navbar z-20">
            <div className="logo absolute top-2 left-2">
                <Image src={Logo} alt="Galiko Design" height={40} width={40} />
            </div>
            <div className="logo absolute top-2 right-2 text-white">
                <LanguageIcon />
            </div>
            <ul className="menu menu-horizontal px-1 flex gap-x-12">
                {
                    renderRoutes()
                }
            </ul>
        </nav>
    );
};

export default Navbar;
