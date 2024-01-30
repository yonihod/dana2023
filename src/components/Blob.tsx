"use client"

import { useEffect, useRef } from "react"

export default function Blob() {
    const initBlob = (blob: HTMLDivElement) => {
        window.onpointermove = event => {
            const { clientX, clientY } = event;
            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 3000, fill: "forwards" });
        }
    }

    const blob = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (blob.current) {
            initBlob(blob.current)
        }

    }, [blob])
    return (
        <>
            <div id="blob" ref={blob} className="-z-20 absolute" />
            <div id="blur" className="absolute top-0 left-0 w-full h-full -z-10" />
        </>
    )
}