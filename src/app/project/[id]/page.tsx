"use client";
import { notFound, useRouter } from "next/navigation";
import { projectMap } from "@/data";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Project({ params }: { params: { id: string } }) {
  const router = useRouter();
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
      <div className="flex md:flex-row justify-start flex-wrap gap-4 md:gap-4 mt-10 mb-auto ">
        {project.images.map((img, index) => (
          <div className="md:basis-1/3" key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image
                  onClick={() => router.push(`/image?img=${img}`)}
                  alt="image"
                  className="object-center cursor-pointer"
                  src={img}
                  width={450}
                  height={450}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
}
