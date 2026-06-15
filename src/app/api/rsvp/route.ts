import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

async function getSheet() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!privateKey) throw new Error("GOOGLE_PRIVATE_KEY is missing");

  // Fix format private key — handle berbagai format dari .env
  const formattedKey = privateKey
    .replace(/\\n/g, "\n") // ganti literal \n jadi newline
    .replace(/"/g, "") // hapus tanda kutip jika ada
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
    console.error("RSVP Error:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 },
    );
  }
}
