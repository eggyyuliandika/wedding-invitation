"use client";

import { useState, useEffect } from "react";

type Wish = {
  id: number;
  name: string;
  message: string;
  attendance: "hadir" | "tidak_hadir" | "masih_ragu";
  createdAt: string;
};

const attendanceOptions = [
  { value: "hadir", label: "✅ Hadir (Accept with pleasure)" },
  { value: "tidak_hadir", label: "❌ Tidak Hadir (Decline with regret)" },
  { value: "masih_ragu", label: "🤔 Masih Ragu (Still unsure)" },
];

const attendanceBadge = (attendance: Wish["attendance"]) => {
  const styles: Record<string, string> = {
    hadir: "bg-[#6b5647] text-white",
    tidak_hadir: "bg-[#a0856e]/30 text-[#6b5647]",
    masih_ragu: "bg-[#c8b49a]/40 text-[#7a6758]",
  };
  const labels: Record<string, string> = {
    hadir: "✅ Hadir",
    tidak_hadir: "❌ Tidak Hadir",
    masih_ragu: "🤔 Masih Ragu",
  };
  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full ${styles[attendance]}`}
    >
      {labels[attendance]}
    </span>
  );
};

interface Props {
  guestName?: string;
}

export default function GuestBook({ guestName = "-" }: Props) {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState<Wish["attendance"]>("hadir");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingWishes, setLoadingWishes] = useState(true);
  const [error, setError] = useState("");

  // Load data dari Google Sheets saat pertama buka
  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const res = await fetch("/api/rsvp");
        const data = await res.json();
        if (data.success) {
          setWishes(data.wishes);
        }
      } catch (err) {
        console.error("Gagal load ucapan:", err);
      } finally {
        setLoadingWishes(false);
      }
    };

    fetchWishes();
  }, []);

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) {
      setError("Nama dan ucapan wajib diisi.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          message: message.trim(),
          attendance,
          guestName,
        }),
      });

      // Tambahkan ke list lokal langsung tanpa reload
      const newWish: Wish = {
        id: Date.now(),
        name: name.trim(),
        message: message.trim(),
        attendance,
        createdAt: "Baru saja",
      };
      setWishes([newWish, ...wishes]);
      setName("");
      setMessage("");
      setAttendance("hadir");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError("Gagal mengirim ucapan. Coba lagi.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="guestbook" className="bg-[#f8f6f4] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#a0856e] text-sm tracking-widest uppercase mb-2 font-medium">
            Buku Tamu
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#6b5647] mb-3">
            Ucapan & Doa
          </h2>
          <p className="text-[#8a7666] text-sm md:text-base leading-relaxed max-w-md mx-auto">
            Kepada Bapak/Ibu/Saudara/i yang ingin memberikan ucapan kepada kami
            dapat dituliskan di bawah ini
          </p>
        </div>

        {/* Wish Count */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#6b5647] font-semibold text-base">
            {loadingWishes ? "Memuat..." : `${wishes.length} Ucapan`}
          </span>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#e8ddd5] p-6 mb-8">
          <input
            type="text"
            placeholder="Nama (name)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-[#ddd3c9] rounded-xl px-4 py-3 text-[#6b5647] placeholder-[#c0aa98] text-sm focus:outline-none focus:ring-2 focus:ring-[#6b5647]/30 mb-4 bg-[#fdfcfb] transition"
          />

          <textarea
            placeholder="Ucapan (wishes)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full border border-[#ddd3c9] rounded-xl px-4 py-3 text-[#6b5647] placeholder-[#c0aa98] text-sm focus:outline-none focus:ring-2 focus:ring-[#6b5647]/30 mb-4 bg-[#fdfcfb] resize-none transition"
          />

          <select
            value={attendance}
            onChange={(e) =>
              setAttendance(e.target.value as Wish["attendance"])
            }
            className="w-full border border-[#ddd3c9] rounded-xl px-4 py-3 text-[#6b5647] text-sm focus:outline-none focus:ring-2 focus:ring-[#6b5647]/30 mb-4 bg-[#fdfcfb] appearance-none cursor-pointer transition"
          >
            {attendanceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          {error && <p className="text-red-400 text-xs mb-3">{error}</p>}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full sm:w-auto bg-[#6b5647] hover:bg-[#5a4639] active:scale-95 disabled:opacity-60 text-white font-semibold px-8 py-3 rounded-xl text-sm transition-all duration-200"
          >
            {loading
              ? "Mengirim..."
              : submitted
                ? "✓ Terkirim!"
                : "Kirim (Send)"}
          </button>

          {submitted && (
            <p className="text-[#8a7666] text-xs mt-3">
              Terima kasih atas ucapan dan doamu 🙏
            </p>
          )}
        </div>

        {/* Wishes List */}
        {loadingWishes ? (
          <div className="text-center py-10">
            <p className="text-[#a0856e] text-sm animate-pulse">
              Memuat ucapan...
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {wishes.length === 0 ? (
              <p className="text-center text-[#a0856e] text-sm py-6">
                Belum ada ucapan. Jadilah yang pertama! 🙏
              </p>
            ) : (
              wishes.map((wish) => (
                <div
                  key={wish.id}
                  className="bg-white rounded-2xl border border-[#e8ddd5] px-6 py-5 shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-[#6b5647] text-sm md:text-base">
                      {wish.name}
                    </span>
                    {attendanceBadge(wish.attendance)}
                  </div>
                  <p className="text-[#a0856e] text-xs flex items-center gap-1 mb-3">
                    🕐 {wish.createdAt}
                  </p>
                  <p className="text-[#5c4b3d] text-sm leading-relaxed">
                    {wish.message}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
