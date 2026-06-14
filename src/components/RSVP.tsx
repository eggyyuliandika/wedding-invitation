// "use client";

// import { useState } from "react";
// import { supabase } from "@/lib/supabase";

// export default function RSVP() {
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     attendance: "Hadir",
//     guest_count: 1,
//     message: "",
//   });

//   const submit = async () => {
//     setLoading(true);

//     const { error } = await supabase.from("rsvp").insert(form);

//     setLoading(false);

//     if (error) {
//       alert(error.message);
//       return;
//     }

//     alert("Konfirmasi berhasil dikirim");

//     setForm({
//       name: "",
//       attendance: "Hadir",
//       guest_count: 1,
//       message: "",
//     });
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-10">RSVP</h2>

//         <div className="space-y-4">
//           <input
//             className="w-full border p-3 rounded-xl"
//             placeholder="Nama"
//             value={form.name}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 name: e.target.value,
//               })
//             }
//           />

//           <select
//             className="w-full border p-3 rounded-xl"
//             value={form.attendance}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 attendance: e.target.value,
//               })
//             }
//           >
//             <option>Hadir</option>
//             <option>Tidak Hadir</option>
//             <option>Masih Ragu</option>
//           </select>

//           <input
//             type="number"
//             min={1}
//             className="w-full border p-3 rounded-xl"
//             value={form.guest_count}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 guest_count: Number(e.target.value),
//               })
//             }
//           />

//           <textarea
//             rows={4}
//             className="w-full border p-3 rounded-xl"
//             placeholder="Pesan"
//             value={form.message}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 message: e.target.value,
//               })
//             }
//           />

//           <button
//             onClick={submit}
//             disabled={loading}
//             className="w-full bg-black text-white py-3 rounded-xl"
//           >
//             {loading ? "Mengirim..." : "Kirim RSVP"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
