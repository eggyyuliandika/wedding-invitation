"use client";

export default function Gift() {
  const copyAccount = async () => {
    await navigator.clipboard.writeText("1234567890");

    alert("Nomor rekening berhasil disalin");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">Amplop Digital</h2>

        <div className="bg-neutral-100 rounded-2xl p-8">
          <p className="font-semibold">Bank BCA</p>

          <h3 className="text-2xl font-bold my-4">6485292491</h3>

          <p>A/N I Nyoman Pandu Satya Narayana</p>

          <button
            onClick={copyAccount}
            className="mt-5 bg-black text-white px-5 py-3 rounded-xl"
          >
            Salin Rekening
          </button>
        </div>
      </div>
    </section>
  );
}
