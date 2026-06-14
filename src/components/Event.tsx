import Image from "next/image";

const events = [
  {
    title: "Pawiwahan",
    date: "Kamis, 07 Mei 2026",
    time: "08:00 - 15:00 WITA",
  },
  {
    title: "Resepsi",
    date: "Jumat, 08 Mei 2026",
    time: "17:00 WITA - Selesai",
  },
];

export default function Event() {
  return (
    <section
      id="event"
      className="bg-[#f3efef] py-20 px-5 md:px-10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-right text-4xl md:text-6xl font-semibold text-[#7a6758] mb-6">
            Acara Kami
          </h2>

          <p className="text-right text-[#7a6758] text-lg md:text-2xl leading-relaxed max-w-3xl ml-auto">
            Merupakan suatu kehormatan dan kebahagiaan kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu pada acara
            bahagia kami.
          </p>
        </div>

        {/* Card Pawiwahan */}
        <div className="bg-[#f8f6f4] rounded-[28px] shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-end text-right">
            <h3 className="text-3xl md:text-5xl font-semibold text-[#7a6758]">
              {events[0].title}
            </h3>

            <div className="w-24 md:w-32 h-[1px] bg-[#7a6758] mt-4 mb-8" />

            <h4 className="text-3xl md:text-5xl font-bold text-[#6b5647]">
              {events[0].date}
            </h4>

            <p className="text-[#7a6758] text-xl md:text-3xl mt-4">
              {events[0].time}
            </p>
          </div>
        </div>

        {/* Foto */}
        <div className="relative z-10 max-w-[92%] mx-auto -mt-4">
          <div className="relative h-[260px] md:h-[520px] overflow-hidden rounded-[24px] shadow-xl">
            <Image
              src="/images/image5.png"
              alt="Wedding Event"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Card Resepsi */}
        <div className="relative z-20 bg-[#f8f6f4] rounded-[28px] shadow-lg p-8 md:p-12 max-w-[92%] mx-auto -mt-10">
          <h3 className="text-3xl md:text-5xl font-semibold text-[#7a6758]">
            {events[1].title}
          </h3>

          <div className="w-24 md:w-32 h-[1px] bg-[#7a6758] mt-4 mb-8" />

          <h4 className="text-3xl md:text-5xl font-bold text-[#6b5647]">
            {events[1].date}
          </h4>

          <p className="text-[#7a6758] text-xl md:text-3xl mt-4">
            {events[1].time}
          </p>
        </div>
      </div>
    </section>
  );
}
