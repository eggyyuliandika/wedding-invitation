import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Event from "@/components/Event";
import Maps from "@/components/Maps";
// import RSVP from "@/components/RSVP";
// import Wishes from "@/components/Wishes";
import MusicPlayer from "@/components/MusicPlayer";
import QuoteSection from "@/components/QuoteSection";
import Gallery from "@/components/Gallery";
import Gift from "@/components/Gift";
import FloatingNav from "@/components/FloatingNav";
import Couple from "@/components/Couple";
import GuestBook from "@/components/GuestBook";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuoteSection />
      <Couple />
      <Event />
      <Gallery />
      <Maps />
      <Gift />
      <Countdown />
      <GuestBook />
      {/* <RSVP />
      <Wishes /> */}
      <MusicPlayer />
      <FloatingNav />
    </main>
  );
}
