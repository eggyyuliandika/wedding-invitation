"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Props {
  guestName?: string;
}

export default function Hero({ guestName }: Props) {
  const [opened, setOpened] = useState(false);

  // Guard: kalau guestName kosong, null, atau literally string "undefined"/"null"
  const displayName =
    guestName && guestName !== "undefined" && guestName !== "null"
      ? guestName
      : "Tamu Undangan";

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#f8f6f4] overflow-hidden"
    >
      {/* Hero Image */}
      <div
        className={`relative w-full overflow-hidden transition-all duration-700 ease-in-out ${
          opened ? "h-[62vh]" : "h-screen"
        }`}
      >
        <Image
          src="/images/image1.png"
          alt="Wedding Hero"
          fill
          priority
          className="object-cover object-top scale-105"
        />

        {/* Gradient overlay — lebih halus & natural */}
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            opened
              ? "bg-gradient-to-t from-black/10 via-transparent to-transparent"
              : "bg-gradient-to-b from-black/50 via-black/20 to-black/60"
          }`}
        />

        {/* Floating Bokeh */}
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-white/50 blur-sm animate-pulse" />
        <div className="absolute top-40 right-16 w-6 h-6 rounded-full bg-white/30 blur-sm animate-pulse [animation-delay:0.5s]" />
        <div className="absolute bottom-24 left-24 w-3 h-3 rounded-full bg-white/50 blur-sm animate-pulse [animation-delay:1s]" />

        {/* Cover content */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-500 ${
            opened ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Ornamen garis kecil di atas */}
          <div className="w-10 h-[1px] bg-white/60 mb-5" />

          <p className="text-white/80 text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
            Kepada Bapak/Ibu/Saudara/i
          </p>

          <h2 className="text-3xl sm:text-4xl font-serif italic text-white drop-shadow-lg mb-4 px-4">
            {displayName}
          </h2>

          <p className="text-white/70 text-xs sm:text-sm mb-10 max-w-xs leading-relaxed">
            Mohon maaf apabila ada kesalahan penulisan nama/gelar
          </p>

          <button
            onClick={() => {
              setOpened(true);
              window.dispatchEvent(new Event("invitation:opened"));
            }}
            className="group relative flex items-center justify-center gap-2 bg-transparent hover:bg-[#c9a87c] text-white font-semibold px-10 py-4 rounded-full text-sm tracking-[0.15em] uppercase transition-all duration-500 shadow-lg w-full max-w-xs border-2 border-white/70 backdrop-blur-md active:scale-95"
          >
            <span>Buka Undangan</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Wave */}
      <div
        className={`relative -mt-16 transition-opacity duration-700 ${
          opened ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#f8f6f4"
            d="M0,192L80,197.3C160,203,320,213,480,202.7C640,192,800,160,960,160C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content bawah */}
      <div
        className={`relative z-10 px-6 pb-16 text-center transition-opacity duration-700 delay-300 ${
          opened ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-10 h-[1px] bg-[#c9a87c] mx-auto mb-4" />
        <p className="text-[#8a7666] text-lg sm:text-xl tracking-[0.15em] uppercase mb-3">
          The Wedding of
        </p>
        <h1 className="text-4xl md:text-7xl font-bold text-[#6b5647] font-serif italic leading-tight">
          Dayu Sintya <br />
          <span className="text-2xl md:text-4xl not-italic font-normal text-[#c9a87c]">
            &
          </span>{" "}
          <br />
          Pandu Satya
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-[#7a6758] tracking-wide">
          25 Agustus 2026
        </p>
        <div className="w-10 h-[1px] bg-[#c9a87c] mx-auto mt-5" />
      </div>
    </section>
  );
}
