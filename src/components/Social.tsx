"use client";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    name: "whatsapp",
    href: "https://wa.me/+972542445659",
    icon: <FaWhatsapp />,
  },
  {
    name: "email",
    href: "mailto:danagaliko@gmaoil.com",
    icon: <FaEnvelope />,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/dana-galiko-6b5a4b1b0/",
    icon: <FaLinkedin />,
  },
];

export default function Social() {
  return (
    <div className="fixed backdrop-blur-sm bg-black/15 bottom-0 left-0 right-0 flex justify-center gap-3 py-2">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`md:text-2xl text-white fade-in-15 animate-in animate transition-opacity duration-500 ease-in-out delay-200`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
