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
    <nav className="p-4 flex justify-center navbar relative">
      <div className="logo absolute top-2 left-2 z-10">
        <a href="/">
          <Image src={Logo} alt="Galiko Design" height={40} width={40} />
        </a>
      </div>
      <ul className="menu menu-horizontal px-1 flex gap-x-12 z-30">
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
