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
    <main className="flex flex-col items-center justify-between px-4 md:px-24 pb-28 h-screen overflow-y-auto">
      <div
        className={
          "relative bg-cover bg-center shadow-2xl shadow-white/15 w-full md:aspect-w-16 md:aspect-h-9 text-left"
        }
        style={{
          backgroundImage: `url(${project.cover})`,
        }}
      >
        <div className="z-10 absolute bg-gradient-to-r from-black/80 via-black-60 to-transparent w-full h-full" />
        <div className="relative z-20 flex flex-col px-4 py-8 md:p-24 w-full h-full">
          <h1 className="pb-4 md:pb-16 font-semibold font-serif text-6xl text-white">
            {project.title}
          </h1>
          <h4 className="md:pb-16 font-semibold font-serif text-3xl text-white">
            {project.subtitle}
          </h4>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-12 mt-10 mb-auto">
        <p className="max-w-xl text-white text-xl leading-8">
          {project.description}
        </p>
        <Carousel className="mx-auto w-9/12 md:w-full max-w-sm">
          <CarouselContent>
            {project.images.map((img, index) => (
              <CarouselItem
                key={index}
                className="h-full basis-full md:basis-1/2"
              >
                <div className="shadow shadow-white">
                  <Image
                    alt="image"
                    className="rounded-lg object-cover"
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
