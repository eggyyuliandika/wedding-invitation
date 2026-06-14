"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
  "/images/image5.png",
  "/images/image6.png",
  "/images/image7.png",
  "/images/image8.png",
  "/images/image9.png",
  "/images/image10.png",
];

const layouts = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
];

export default function Gallery() {
  const getRandomPhotos = () => {
    return [...photos].sort(() => Math.random() - 0.5).slice(0, 8);
  };

  const [displayPhotos, setDisplayPhotos] = useState(getRandomPhotos());

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setDisplayPhotos(getRandomPhotos());
        setVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-neutral-50" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-12">Gallery</h2>

        <div
          className={`
            grid grid-cols-4 gap-4 auto-rows-[120px]
            transition-all duration-500
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          {displayPhotos.map((photo, index) => (
            <div
              key={`${photo}-${index}`}
              className={`relative overflow-hidden rounded-2xl ${
                layouts[index]
              }`}
            >
              <Image
                src={photo}
                alt="gallery"
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
