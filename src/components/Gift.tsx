"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gift() {
  const [copied, setCopied] = useState(false);

  const copyAccount = async () => {
    await navigator.clipboard.writeText("6485292491");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-[#f8f6f4] px-4">
      <div className="max-w-md mx-auto text-center">
        {/* Title */}
        <p className="text-right font-bold text-2xl text-[#6b5647] mb-6">
          Amplop Digital
        </p>

        {/* Description */}
        <p className="text-[#8a7666] text-sm leading-relaxed mb-8">
          Bagi bapak/ibu/saudara/i yang ingin mengirimkan hadiah pernikahan
          secara non-tunai dapat dilakukan melalui rekening di bawah ini:
        </p>

        {/* Card */}
        <div className="relative bg-white rounded-3xl shadow-md px-6 py-7 text-left">
          {/* Chip */}
          <div className="w-10 h-7 rounded-md bg-gradient-to-br from-[#d4b483] to-[#c9a96e] mb-6 flex items-center justify-center">
            <div className="w-7 h-5 rounded-sm border border-[#b8923a]/40 grid grid-cols-2 gap-px p-px">
              <div className="bg-[#c9a96e]/60 rounded-sm" />
              <div className="bg-[#c9a96e]/60 rounded-sm" />
              <div className="bg-[#c9a96e]/60 rounded-sm" />
              <div className="bg-[#c9a96e]/60 rounded-sm" />
            </div>
          </div>

          {/* BCA Logo Image */}
          <div className="absolute top-6 right-6">
            <Image
              src="/images/bca.png"
              alt="BCA"
              width={60}
              height={30}
              className="object-contain"
            />
          </div>

          {/* Account name */}
          <p className="text-[#8a7666] text-xs mb-1">a.n.</p>
          <p className="text-[#4a3728] font-semibold text-sm mb-6 uppercase tracking-wide">
            I Nyoman Pandu Satya Narayana
          </p>

          {/* Account number + copy button */}
          <button
            onClick={copyAccount}
            className="flex items-center gap-2 bg-[#f0ebe6] hover:bg-[#e8e0d8] active:scale-95 transition-all duration-200 px-4 py-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#6b5647]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <span className="text-[#6b5647] font-semibold text-sm tracking-wider">
              {copied ? "Tersalin! ✓" : "6485292491"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
