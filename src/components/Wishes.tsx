"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Wishes() {
  const [wishes, setWishes] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const loadData = async () => {
    const { data } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    setWishes(data || []);
  };

  useEffect(() => {
    loadData();
  }, []);

  const submit = async () => {
    await supabase.from("wishes").insert({
      name,
      message,
    });

    setName("");
    setMessage("");

    loadData();
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Ucapan & Doa</h2>

        <input
          className="w-full border p-3 mb-3 rounded-xl"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          rows={4}
          className="w-full border p-3 mb-3 rounded-xl"
          placeholder="Ucapan"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={submit}
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          Kirim
        </button>

        <div className="mt-10 space-y-4">
          {wishes.map((wish) => (
            <div key={wish.id} className="bg-white rounded-xl p-4 shadow">
              <h3 className="font-semibold">{wish.name}</h3>

              <p className="text-gray-600">{wish.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
