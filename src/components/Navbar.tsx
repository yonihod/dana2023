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
    <nav className="relative md:flex items-center justify-center p-8 navbar">
      <div className="left-0 top-0 p-8 z-20 md:absolute logo flex justify-center">
        <a href="/">
          <Image src={Logo} alt="Galiko Design" width={120} />
        </a>
      </div>
      <ul className="z-30 gap-x-12 px-1 flex justify-center">
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
