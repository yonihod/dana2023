"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import GalleryItem from "./GalleryItem";

const initGallery = (track: HTMLDivElement) => {

    const handleOnDown = (e: MouseEvent | Touch) => {
        track!.dataset.mouseDownAt = e.clientX.toString();
    };

    const handleOnUp = () => {
        document.body.style.cursor = "default"
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
            maxPercentage = -100 * ((track.children.length - 1) / 6),
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 50), maxPercentage),
            nextPercentageObjectPosition = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)

        track.dataset.percentage = nextPercentage.toString();
        track.animate(
            {
                transform: `translateX(${nextPercentage}%)`,
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
    const track = React.useRef<HTMLDivElement>(null);
    const [imageReady, setImageReady] = React.useState(false);
    const [item, setItem] = React.useState(null);
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
        if (track?.current) {
            track.current.setAttribute('data-mouse-down-at', '0');
            track.current.setAttribute('data-prev-percentage', '0');
            initGallery(track.current);
            () => {
                setImageReady(false);
                window.onmousedown = null;
                window.ontouchstart = null;
                window.onmouseup = null;
                window.ontouchend = null;
                window.onmousemove = null;
                window.ontouchmove = null;
            }
        }
    }, [path, track])

    const onLoadCallBack = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setImageReady(true)
    }

    return (
        <>
            <div id="image-track" ref={track} data-mouse-down-at="0" data-prev-percentage="0" className={`${imageReady ? '' : 'loading'}`}>
                {Array.from({ length: 10 }).map((_, i) => (
                    <Image
                        style={{
                            transitionDelay: `${i * 0.2}s`,
                        }}
                        width={1000}
                        height={400}
                        key={`image-${i}`}
                        className="image transition-opacity duration-500 ease-in-out cursor-pointer"
                        src={`https://picsum.photos/1000/400?random=${i}`}
                        alt="image"
                        draggable="false"
                        onLoad={onLoadCallBack}
                        onClick={() => {
                            setItem(`https://picsum.photos/1000/400?random=${i}`);
                            setShow(true);
                        }}
                    />
                ))}
            </div>
            <GalleryItem item={item} show={show} setShow={setShow} />
        </>
    );
}