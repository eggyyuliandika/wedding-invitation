"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-08-25T11:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="countdown" className=" bg-[#f8f6f4]">
      <h2 className="text-center text-3xl font-bold text-[#6b5647] mb-10">
        Menuju Hari Bahagia
      </h2>

      <div className="flex justify-center gap-3 px-4">
        {[
          ["Hari", timeLeft.days],
          ["Jam", timeLeft.hours],
          ["Menit", timeLeft.minutes],
          ["Detik", timeLeft.seconds],
        ].map(([label, value]) => (
          <div
            key={label}
            className="bg-[#6b5647] rounded-2xl w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center shadow-md"
          >
            <div className="text-2xl md:text-3xl font-bold text-white">
              {String(value).padStart(2, "0")}
            </div>
            <div className="text-white/70 text-xs mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
