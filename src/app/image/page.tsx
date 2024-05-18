"use client";

import Image from "next/image";
import { notFound, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { TrophySpin } from "react-loading-indicators";

function ImageElement() {
  const searchParams = useSearchParams();
  const img = searchParams.get("img");
  if (!img) {
    return notFound();
  }

  return <Image alt="image-preview" src={img} width={600} height={600} />;
}

export default function ImagePreviewPage() {
  return (
    <main className="grid place-items-center px-4 md:px-24 pb-28 h-screen overflow-y-auto">
      <div className="p-8 bg-white">
        <Suspense
          fallback={
            <TrophySpin color="#318acc" size="medium" text="" textColor="" />
          }
        >
          <ImageElement />
        </Suspense>
      </div>
    </main>
  );
}
