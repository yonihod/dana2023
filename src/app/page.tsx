import Hero from "@/components/Hero";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { covers } from "@/data";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default async function Home() {
  return (
    <main className="relative w-screen pt-14 overflow-x-hidden">
      <h1 className="text-white font-serif text-7xl text-center">
        <span className="font-extrabold">Hi</span>
        <span className="font-extrabold text-yellow-600">,</span>
        <span className="block md:inline">
          <span className="ml-4">I</span>
          <span className="font-extrabold text-orange-600">&apos;</span>
          <span>m</span>
          <span className="font-extrabold text-slate-100 ml-4">Dana</span>
        </span>
      </h1>
      <Hero />
    </main>
  );
}
