import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="bg-[#F5F1EF] py-20 px-6" id="quotesection">
      <div className="max-w-4xl mx-auto text-center">
        {/* Foto */}
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/image5.png"
            alt="Dayu & Pandu"
            width={1200}
            height={800}
            className="w-full object-cover"
          />
        </div>

        {/* Ornamen */}
        {/* <div className="flex justify-center mt-10">
          <Image
            src="/images/floral-line.png"
            alt="Ornament"
            width={80}
            height={80}
          />
        </div> */}

        {/* Quote */}
        <div className="mt-8">
          <p className="text-[#7B6758] italic text-xl md:text-3xl leading-relaxed max-w-3xl mx-auto">
            Pernikahan yang hebat bukanlah ketika pasangan sempurna bersatu.
            Tetapi disaat pasangan yang tidak sempurna belajar untuk menikmati
            perbedaan mereka.
          </p>
        </div>

        {/* Inisial */}
        <div className="flex items-center justify-center mt-16">
          <span className="text-7xl md:text-9xl text-[#7B6758]">D</span>

          <div className="h-32 md:h-40 w-[2px] bg-[#7B6758] mx-8" />

          <span className="text-7xl md:text-9xl text-[#7B6758]">P</span>
        </div>
      </div>
    </section>
  );
}
