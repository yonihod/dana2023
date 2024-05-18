"use client";
import Image from "next/image";
import { notFound, useSearchParams } from "next/navigation";

export default function ImagePreview() {
  const searchParams = useSearchParams();
  const img = searchParams.get("img");
  console.log("img");
  if (!img) {
    return notFound;
  }

  return (
    <main className="grid place-items-center px-4 md:px-24 pb-28 h-screen overflow-y-auto">
      <div className="p-8 bg-white">
        <Image alt="image-preview" src={img} width={600} height={600} />
      </div>
    </main>
  );
}
