import Image from "next/image";
import GuestName from "@/components/GuestName";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#f8f6f4]">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/image1.png"
          alt="Wedding Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Floating Bokeh */}
        <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-white/60 blur-sm" />
        <div className="absolute top-40 right-16 w-6 h-6 rounded-full bg-white/40 blur-sm" />
        <div className="absolute bottom-24 left-24 w-3 h-3 rounded-full bg-white/60 blur-sm" />
      </div>

      {/* Wave */}
      <div className="relative -mt-16">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#f8f6f4"
            d="M0,192L80,197.3C160,203,320,213,480,202.7C640,192,800,160,960,160C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-16 text-center">
        <p className="text-[#8a7666] text-xl mb-3">The Wedding Of</p>

        <h1 className="text-5xl md:text-7xl font-bold text-[#6b5647]">
          Dayu & Pandu
        </h1>

        <p className="mt-4 text-2xl text-[#7a6758]">30 Juni 2027</p>

        <div className="mt-8">
          <GuestName />
        </div>

        <a
          href="#quotesection"
          className="inline-block mt-8 px-8 py-3 rounded-full bg-[#6b5647] text-white hover:opacity-90 transition"
        >
          Buka Undangan
        </a>
      </div>
    </section>
  );
}
