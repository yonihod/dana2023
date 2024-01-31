import Image from "next/image";
import React, { useEffect } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type Item = {
  meta: {
    title: string;
    description: string;
  };
  data: {
    resources: {
      asset_id: string;
      public_id: string;
      resoure_type: string;
      url: string;
    }[];
  };
};

export default function GalleryItem({
  item,
  setShow,
  show,
}: {
  item: Item;
  setShow: any;
  show: boolean;
}) {
  useEffect(() => {
    console.log("item", item);
    if (item) {
      console.log("item.data.resources", item.data.resources);
    }
  }, [item]);
  if (!item) return null;
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-80 text-white transition-opacity duration-300 ease-in-out ${
        show ? "z-10 opacity-100" : "opacity-0 -z-10"
      }`}
    >
      <div className="relative w-full h-full">
        <button
          className="absolute top-2 right-2 text-2xl z-40"
          onClick={() => setShow(false)}
        >
          x
        </button>
        <div
          id="black-gradient"
          className="z-20 absolute w-full h-full bg-gradient-to-br from-black to-transparent"
        />
        <div className="grid gallery-item-grid gap-4 h-full z-30 relative">
          <div className="p-8 text-white max-w-sm">
            <h1 className="text-4xl">{item.meta.title}</h1>
            <p className="text-xl mt-4">{item.meta.description}</p>
          </div>

          <div className="grid z-30 relative grid-cols-2 p-8 gap-2">
            {item.data.resources.map((resource, i) => (
              <Image
                src={resource.url}
                key={`image-${i}`}
                className="image transition-opacity duration-500 ease-in-out cursor-pointer"
                alt="Description of my image"
                height={200}
                width={400}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
