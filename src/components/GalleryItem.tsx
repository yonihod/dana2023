"use client"

import React from "react"

export default function GalleryItem({ item, setShow, show }: { item: any, setShow: any, show: boolean }) {
    console.log(item)
    console.log(show)
    return (
        <div className={`absolute top-0 left-0 h-full w-full bg-black bg-opacity-80 text-white transition-opacity duration-300 ease-in-out ${show ? 'z-10 opacity-100' : 'opacity-0 -z-10'}`}>
            <div className="relative w-full h-full">
                <button className="absolute top-2 right-2 text-2xl z-30" onClick={() => setShow(false)}>
                    x
                </button>
                <img className="absolute w-full h-full z-10" src={item} />
                <div id="black-gradient" className="z-20 absolute w-full h-full bg-gradient-to-br from-black to-transparent" />
                <div className="h-full z-30 p-8 text-white relative max-w-sm">
                    <h1 className="text-4xl">
                        Project Bilbo
                    </h1>
                    <p className="text-xl mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                        Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </p>
                </div>
            </div>

        </div>
    )

}