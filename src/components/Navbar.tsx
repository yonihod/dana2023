import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/static/logo.png";
import Image from "next/image";
import React from "react";

const routes = {
  "/": "עבודות",
  "/about": "אודות",
} as const;

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-center p-4 navbar">
      <div className="left-2 z-10 absolute logo">
        <a href="/">
          <Image src={Logo} alt="Galiko Design" height={40} width={40} />
        </a>
      </div>
      <ul className="z-30 flex gap-x-12 px-1 menu menu-horizontal">
        {Object.entries(routes).map(([route, routeName], index) => (
          <li key={index} className="navitem">
            {" "}
            <Link href={route}> {routeName} </Link>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
