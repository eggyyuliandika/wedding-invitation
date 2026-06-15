"use client";

import Image from "next/image";
import { useState } from "react";
// import GuestName from "@/components/GuestName";

export default function Hero() {
  const [opened, setOpened] = useState(false);

  return (
    <section id="home" className="relative min-h-screen bg-[#f8f6f4]">
      {/* Hero Image — full screen saat belum dibuka, 60vh setelah dibuka */}
      <div
        className={`relative w-full overflow-hidden transition-all duration-700 ${
          opened ? "h-[60vh]" : "h-screen"
        }`}
      >
        <Image
          src="/images/image1.png"
          alt="Wedding Hero"
          fill
          priority
          className="object-cover object-top"
        />

        {/* Overlay — gelap sebelum dibuka, hilang setelah dibuka */}
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            opened ? "bg-black/0" : "bg-black/40"
          }`}
        />

        {/* Floating Bokeh */}
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-white/60 blur-sm" />
        <div className="absolute top-40 right-16 w-6 h-6 rounded-full bg-white/40 blur-sm" />
        <div className="absolute bottom-24 left-24 w-3 h-3 rounded-full bg-white/60 blur-sm" />

        {/* Cover content — muncul sebelum dibuka, di bagian bawah foto */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-end pb-16 px-6 text-center transition-all duration-500 ${
            opened ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <p className="text-white/80 text-sm tracking-wide mb-2">
            Kepada Bapak/Ibu/Saudara/i
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg mb-3">
            {/* <GuestName /> */}Surya
          </h2>

          <p className="text-white/70 text-sm mb-8 max-w-xs leading-relaxed">
            Mohon maaf apabila ada kesalahan penulisan nama/gelar
          </p>

          <button
            onClick={() => setOpened(true)}
            className="flex items-center gap-2 bg-[#c9a87c]/80 hover:bg-[#c9a87c] active:scale-95 backdrop-blur-sm text-white font-semibold px-10 py-3 rounded-xl text-sm transition-all duration-200 shadow-lg w-full max-w-xs justify-center"
          >
            Buka Undangan
          </button>
        </div>
      </div>

      {/* Wave — muncul setelah dibuka */}
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

      {/* Content bawah — muncul setelah dibuka */}
      <div
        className={`relative z-10 px-6 pb-16 text-center transition-opacity duration-700 delay-300 ${
          opened ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-[#8a7666] text-xl mb-3">The Wedding of</p>
        <h1 className="text-4xl md:text-7xl font-bold text-[#6b5647] font-serif italic">
          Dayu Sintya <br />&
          <br />
          Pandu Satya
        </h1>
        <p className="mt-4 text-xl text-[#7a6758]">25 Agustus 2026</p>
      </div>
    </section>
  );
}
