"use client";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { covers } from "@/data";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const onClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className="hero flex md:flex-row flex-col md:gap-12 gap-4 mt-12 md:mt-0 w-full justify-center p-4">
      {covers.map(({ id, cover, title, coverBackground, link }, i) => (
        <HoverCard key={`hover-card-${id}-${i}`}>
          <HoverCardTrigger asChild>
            <>
              <div className="w-full md:hidden h-full bg-black/10">
                <p className="text-white text-center font-serif font-semibold text-4xl">
                  {title}
                </p>
              </div>
              <Image
                style={{
                  transitionDelay: `${i * 0.2}s`,
                }}
                width={600}
                height={1000}
                key={`image-${i}`}
                className={twMerge(
                  `image fade-in-15 animate-in animate transition-opacity md:my-24
                            glow duration-500 ease-in-out cursor-pointer
                            object-cover`,
                  coverBackground
                )}
                src={cover}
                alt="image"
                draggable="false"
                onClick={() => onClick(link)}
              />
            </>
          </HoverCardTrigger>
          <HoverCardContent side="top" className="w-80">
            <h4 className="text-center font-serif font-semibold">{title}</h4>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
