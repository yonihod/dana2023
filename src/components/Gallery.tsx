"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { covers } from "@/data";
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { twJoin, twMerge } from "tailwind-merge";

const initGallery = (track: HTMLDivElement) => {
  const numberOfImages = track.children.length;
  const imgWidth = track.children[0].clientWidth;
  const numberOfImagesOnScreen = Math.floor(window.innerWidth / imgWidth);
  const numberOfScreens = Math.ceil(numberOfImages / numberOfImagesOnScreen);
  const handleOnDown = (e: MouseEvent | Touch) => {
    track!.dataset.mouseDownAt = e.clientX.toString();
  };

  const handleOnUp = () => {
    document.body.style.cursor = "default";
    track!.dataset.mouseDownAt = "0";
    if (track!.dataset.percentage)
      track!.dataset.prevPercentage = track!.dataset.percentage;
  };

  const handleOnMove = (e: MouseEvent | Touch) => {
    if (track!.dataset.mouseDownAt === "0") return;
    if (!track!.dataset.prevPercentage) track!.dataset.prevPercentage = "0";
    if (!track!.dataset.percentage) track!.dataset.percentage = "0";
    if (!track!.dataset.mouseDownAt) track!.dataset.mouseDownAt = "0";
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(track.dataset.prevPercentage) + percentage,
      maxPercentage =
        -75 * ((track.children.length - 1) / numberOfImagesOnScreen),
      nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        maxPercentage
      ),
      nextPercentageObjectPosition = Math.max(
        Math.min(nextPercentageUnconstrained / numberOfScreens, 0),
        -100
      );

    track.dataset.percentage = nextPercentage.toString();
    track.animate(
      {
        transform: `translateX(${nextPercentage + 25}%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentageObjectPosition}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  /* -- Had to add extra lines for touch events -- */

  window.onmousedown = (e) => handleOnDown(e);

  window.ontouchstart = (e) => handleOnDown(e.touches[0]);

  window.onmouseup = (e) => handleOnUp();

  window.ontouchend = (e) => handleOnUp();

  window.onmousemove = (e) => handleOnMove(e);

  window.ontouchmove = (e) => handleOnMove(e.touches[0]);
};

export default function Gallery() {
  const path = usePathname();
  const router = useRouter();
  const track = useRef<HTMLDivElement>(null);
  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    if (track?.current) {
      track.current.setAttribute("data-mouse-down-at", "0");
      track.current.setAttribute("data-prev-percentage", "0");
      initGallery(track.current);
      () => {
        setImageReady(false);
        window.onmousedown = null;
        window.ontouchstart = null;
        window.onmouseup = null;
        window.ontouchend = null;
        window.onmousemove = null;
        window.ontouchmove = null;
      };
    }
  }, [path, track]);

  const onLoadCallBack = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageReady(true);
  };

  const onClick = (link: string) => {
    router.push(link);
  };

  return (
    <>
      <div
        dir="ltr"
        id="image-track"
        ref={track}
        data-mouse-down-at="0"
        data-prev-percentage="0"
        className={`${imageReady ? "" : "loading"} hidden md:flex`}
      >
        {covers.map(({ id, cover, title, coverBackground, link }, i) => (
          <HoverCard key={`hover-card-${id}-${i}`}>
            <HoverCardTrigger asChild>
              <Image
                style={{
                  transitionDelay: `${i * 0.2}s`,
                }}
                width={1000}
                height={400}
                key={`image-${i}`}
                className={twMerge(
                  `image fade-in-15 animate-in animate transition-opacity my-24
                            glow duration-500 ease-in-out cursor-pointer
                            object-cover`,
                  coverBackground
                )}
                src={cover}
                alt="image"
                draggable="false"
                onLoad={onLoadCallBack}
                onClick={() => onClick(link)}
              />
            </HoverCardTrigger>
            <HoverCardContent side="top" className="w-80">
              <h4 className="text-center font-serif font-semibold">{title}</h4>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
      <div className="overflow-hidden">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full h-full max-w-sm p-4 md:hidden mx-auto"
        >
          <CarouselContent className="h-[550px]">
            {covers.map(({ id, cover, coverBackground, title, link }, i) => (
              <CarouselItem
                className="basis-1/2"
                key={`carousel-item-${id}-${i}`}
                onClick={() => onClick(link)}
              >
                <div className="h-full pt-6">
                  <h4 className="text-center font-serif font-semibold text-white">
                    {title}
                  </h4>
                  <Image
                    alt="image"
                    className={twJoin(
                      `w-full h-full object-cover rounded-lg bg-white`,
                      coverBackground
                    )}
                    src={cover}
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
    </>
  );
}
