"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

// Layout khusus untuk mobile (grid 3 kolom)
const layoutsMobile = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
];

// Layout untuk desktop (grid 4 kolom) — sama seperti sebelumnya
const layoutsDesktop = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const getRandomPhotos = () => {
    return [...photos].sort(() => Math.random() - 0.5).slice(0, 8);
  };

  const [displayPhotos, setDisplayPhotos] = useState(getRandomPhotos());
  const [visible, setVisible] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setDisplayPhotos(getRandomPhotos());
        setVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-20 bg-neutral-50" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#8a7666] text-xs sm:text-sm tracking-[0.2em] uppercase mb-2">
            Our Moments
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif italic text-[#6b5647]">
            Gallery
          </h2>
          <div className="w-10 h-[1px] bg-[#c9a87c] mx-auto mt-4" />
        </div>

        <div
          className={`
            grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4 auto-rows-[100px] sm:auto-rows-[120px]
            grid-flow-row-dense
            transition-all duration-500
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          {displayPhotos.map((photo, index) => (
            <button
              key={`${photo}-${index}`}
              onClick={() => setSelectedPhoto(photo)}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl ${layoutsMobile[index]} ${layoutsDesktop[index]}`}
            >
              <Image
                src={photo}
                alt="gallery"
                fill
                className="object-cover object-center group-hover:scale-110 transition duration-700"
                sizes="(max-width: 640px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center px-4 cursor-zoom-out"
        >
          <div className="relative w-full max-w-lg aspect-[3/4]">
            <Image
              src={selectedPhoto}
              alt="gallery preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
