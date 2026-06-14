"use client";

import { useSearchParams } from "next/navigation";

export default function GuestName() {
  const searchParams = useSearchParams();

  const guest = searchParams.get("to") || "Bapak/Ibu/Saudara/i";

  return (
    <div>
      <p className="text-gray-500">Kepada Yth.</p>

      <h2 className="text-2xl font-semibold text-[#6b5647] mt-2">{guest}</h2>
    </div>
  );
}
