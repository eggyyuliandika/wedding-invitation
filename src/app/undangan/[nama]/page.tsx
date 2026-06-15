import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Couple from "@/components/Couple";
import Event from "@/components/Event";
import Gallery from "@/components/Gallery";
import Gift from "@/components/Gift";
import GuestBook from "@/components/GuestBook";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingNav from "@/components/FloatingNav";
import QuoteSection from "@/components/QuoteSection";
import { Suspense } from "react";
import { use } from "react";

type Props = {
  params: Promise<{ nama: string }>;
};

export default function UndanganPage({ params }: Props) {
  const { nama } = use(params);
  const guestName = decodeURIComponent(nama).replace(/-/g, " ");

  return (
    <main>
      <Suspense fallback={null}>
        <Hero guestName={guestName} />
      </Suspense>
      <QuoteSection />
      <Couple />
      <Countdown />
      <Event />
      <Gallery />
      <Gift />
      <GuestBook guestName={guestName} />
      <FloatingNav />
      <MusicPlayer />
    </main>
  );
}
