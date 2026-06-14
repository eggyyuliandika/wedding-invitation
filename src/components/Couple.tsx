import Image from "next/image";

export default function Couple() {
  return (
    <section id="couple" className="bg-[#f8f6f4] py-20 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="italic text-[#8a7666] text-2xl mb-4">Om Swastiastu,</p>

          <p className="text-[#7a6758] leading-relaxed max-w-3xl mx-auto">
            Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang
            Maha Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara
            Manusa Yadnya Pawiwahan (Pernikahan) kami.
          </p>
        </div>

        {/* Groom */}
        <div className="mb-24">
          <div className="relative">
            <div className="relative h-[500px] md:h-[650px] overflow-hidden rounded-[30px]">
              <Image
                src="/images/groom.png"
                alt="Groom"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="relative md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2 bg-[#f4f2f1] rounded-[28px] shadow-lg p-8 md:p-10 w-full md:max-w-[650px] mt-[-70px] md:mt-0">
              <h2 className="text-center text-3xl md:text-5xl font-bold text-[#6b5647] mb-6">
                I Nyoman
                <br />
                Pandu Satya
              </h2>

              <p className="text-center text-[#7a6758] text-lg">
                Putra Kedua dari pasangan
              </p>

              <div className="mt-4 text-center text-[#7a6758]">
                <p>I Putu Eka Putra</p>

                <p className="italic text-2xl my-2">&</p>

                <p>Putu Astri</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bride */}
        <div>
          <div className="relative">
            <div className="relative h-[500px] md:h-[650px] overflow-hidden rounded-[30px]">
              <Image
                src="/images/bride.png"
                alt="Bride"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="relative md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2 bg-[#f4f2f1] rounded-[28px] shadow-lg p-8 md:p-10 w-full md:max-w-[650px] mt-[-70px] md:mt-0">
              <h2 className="text-center text-3xl md:text-5xl font-bold text-[#6b5647] mb-6">
                Ida Ayu
                <br />
                Sintya Pradistya
              </h2>

              <p className="text-center text-[#7a6758] text-lg">
                Putri Pertama dari pasangan
              </p>

              <div className="mt-4 text-center text-[#7a6758]">
                <p>Ida Bagus Anom Pradnya Wira Putra</p>

                <p className="italic text-2xl my-2">&</p>

                <p>Ni Putu Eni Astiarini</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
