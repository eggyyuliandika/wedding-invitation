"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2027-06-30T09:00:00").getTime();

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
    <section id="countdown" className="py-20 bg-[#f3efef]">
      <h2 className="text-center text-3xl font-bold mb-10">
        Menuju Hari Bahagia
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto px-4">
        {[
          ["Hari", timeLeft.days],
          ["Jam", timeLeft.hours],
          ["Menit", timeLeft.minutes],
          ["Detik", timeLeft.seconds],
        ].map(([label, value]) => (
          <div
            key={label}
            className="bg-white shadow-lg rounded-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold">{value}</div>

            <div className="text-gray-500">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
