import Link from "next/link";

export default function FloatingNav() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white shadow-xl rounded-full px-6 py-3 flex gap-6">
        <Link href="#home">Home</Link>

        <Link href="#event">Acara</Link>

        <Link href="#gallery">Galeri</Link>

        <Link href="#guestbook">RSVP</Link>
      </div>
    </div>
  );
}
