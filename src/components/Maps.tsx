import { MapPin } from "lucide-react";

const location = {
  venue: "Taman Prakerthi Bhuana  ",
  address: "Beng, Kec. Gianyar, Kabupaten Gianyar, Bali 80513",
  mapUrl: "https://maps.app.goo.gl/CHWEGT8hnrh3kwzj7",
};

export default function Maps() {
  return (
    <section id="location" className="bg-[#f3efef] py-20 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Quote */}
        <div className="text-center mb-16">
          <div className="text-5xl mb-6">❀</div>

          <p className="text-[#7a6758] italic text-lg md:text-3xl leading-relaxed max-w-4xl mx-auto">
            "Ya Tuhanku Yang Maha Pengasih, anugrahkanlah kepada pasangan ini
            senantiasa kebahagiaan, kesehatan, tetap bersatu dan tidak pernah
            terpisahkan, panjang umur dan tinggal di rumah yang penuh
            kegembiraan bersama seluruh keturunannya"
          </p>

          <h3 className="mt-8 text-[#6b5647] text-2xl md:text-4xl font-bold">
            - Rg Veda X.85.42 -
          </h3>
        </div>

        {/* Maps */}
        <div className="relative">
          <div className="overflow-hidden rounded-[24px] shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Griya%20Taman%20Prakerthi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[350px] md:h-[500px]"
              loading="lazy"
            />
          </div>

          {/* Floating Card */}
          <div className="bg-[#f8f6f4] rounded-[28px] shadow-xl p-8 md:p-10 max-w-4xl mx-auto relative z-10 -mt-12">
            <div className="flex flex-col items-end">
              <h2 className="text-3xl md:text-5xl font-semibold text-[#7a6758]">
                LOKASI
              </h2>

              <div className="w-24 md:w-32 h-[1px] bg-[#7a6758] mt-3 mb-8" />
            </div>

            <div className="text-center">
              <h3 className="text-xl md:text-3xl font-semibold text-[#6b5647] mb-4">
                {location.venue}
              </h3>

              <p className="text-[#7a6758] text-lg md:text-2xl leading-relaxed">
                {location.address}
              </p>

              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-[#8b7263] text-white text-lg md:text-xl hover:opacity-90 transition"
              >
                <MapPin size={22} />
                Open Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
