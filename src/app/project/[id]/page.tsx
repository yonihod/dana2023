"use client";
import { notFound } from "next/navigation";
import { projectMap } from "@/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Project({ params }: { params: { id: string } }) {
  const project = projectMap.get(params?.id);
  if (!params?.id || !project) {
    return notFound;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <div
        className="aspect-w-16 aspect-h-9 shadow-white/15 shadow-2xl w-full bg-cover bg-center relative text-left flex flex-col p-24"
        style={{
          backgroundImage: `linear-gradient(
            to right, 
            rgba(0, 0, 0, 0.4) 40%,  /* start with semi-transparent black */
            rgba(0, 0, 0, 0)     /* end with transparent black */
        ), url(${project.cover})`,
        }}
      >
        <h1 className="text-6xl text-white font-semibold font-serif pb-16">
          {project.title}
        </h1>
        <h4 className="text-3xl text-white font-semibold font-serif pb-16">
          {project.subtitle}
        </h4>
      </div>
      <div className="flex mb-auto gap-12 mt-10">
        <p className="text-xl leading-8 text-white max-w-xl">
          {project.description}
        </p>
        <Carousel className="w-full max-w-sm">
          <CarouselContent>
            {project.images.map((img, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="shadow shadow-white">
                  <Image
                    alt="image"
                    className="w-full h-full object-cover rounded-lg"
                    src={img}
                    width={350}
                    height={350}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
