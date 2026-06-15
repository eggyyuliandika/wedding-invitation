import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

async function getSheet() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!privateKey) throw new Error("GOOGLE_PRIVATE_KEY is missing");

  const formattedKey = privateKey
    .replace(/\\n/g, "\n")
    .replace(/"/g, "")
    .trim();

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: formattedKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  return sheets;
}

// GET — ambil semua ucapan dari sheet
export async function GET() {
  try {
    const sheets = await getSheet();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: "Sheet1!A:E",
    });

    const rows = response.data.values || [];

    // Skip baris pertama jika ada header
    const wishes = rows
      .filter((row) => row[2] && row[4]) // pastikan ada nama & ucapan
      .map((row, index) => ({
        id: index + 1,
        createdAt: row[0] || "",
        guestName: row[1] || "",
        name: row[2] || "",
        attendance:
          (row[3] as "hadir" | "tidak_hadir" | "masih_ragu") || "hadir",
        message: row[4] || "",
      }))
      .reverse(); // terbaru di atas

    return NextResponse.json({ success: true, wishes });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ success: false, wishes: [] }, { status: 500 });
  }
}

// POST — simpan ucapan baru ke sheet
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, message, attendance, guestName } = body;

    const sheets = await getSheet();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("id-ID"),
            guestName,
            name,
            attendance,
            message,
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 },
    );
  }
}
