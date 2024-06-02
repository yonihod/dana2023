"use client";
import { notFound, useRouter } from "next/navigation";
import { categoryMap } from "@/data";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Project({ params }: { params: { id: string } }) {
  const router = useRouter();
  const category = categoryMap.get(params?.id);
  if (!params?.id || !category) {
    return notFound;
  }

  const onClick = (link: string) => {
    router.push(link);
  };

  return (
    <main className="flex flex-col items-center justify-between px-4 md:px-24 pb-28 h-screen overflow-y-auto">
      <div
        className={
          "relative bg-cover bg-center shadow-2xl shadow-white/15 w-full md:aspect-w-16 md:aspect-h-9 text-left"
        }
        style={{
          backgroundImage: category.cover ? `url(${category.cover})` : "none",
        }}
      >
        <div className="z-10 absolute bg-gradient-to-r from-black/80 via-black-60 to-transparent w-full h-full" />
        <div className="relative z-20 flex flex-col px-4 py-8 md:p-24 w-full h-full">
          <h1 className="pb-4 md:pb-16 font-semibold font-serif text-6xl text-white">
            {category.title}
          </h1>
        </div>
      </div>
      <div className="grid max-w-4xl md:grid-cols-4 grid-cols-1 justify-start mt-10 mb-auto ">
        {category.images.map(({ link, img }, index) => (
          <div
            className={`${
              index % 3 === 0 ? "row-span-2 col-span-2" : "row-span-1"
            } opacity-0 animate animate-fadeIn`}
            style={{
              animationDelay: `${index * 0.2}s`,
              animationDirection: "normal",
              animationFillMode: "forwards",
            }}
            key={index}
          >
            <Image
              onClick={() => onClick(link ?? `/image?img=${img}`)}
              alt="image"
              className="object-center hidden md:block cursor-pointer bg-white"
              src={img}
              width={index % 4 === 0 ? 650 : 450}
              height={index % 4 === 0 ? 650 : 450}
            />
            <Image
              onClick={() => onClick(link ?? `/image?img=${img}`)}
              alt="image"
              className="object-center md:hidden cursor-pointer bg-white"
              src={img}
              width={450}
              height={450}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
