import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  // TODO: forward to your CRM / email provider (Resend, SendGrid, HubSpot…).
  // Until then, leads are visible in Vercel → Project → Logs.
  console.log("[contact lead]", JSON.stringify(body));
  return NextResponse.json({ ok: true });
}
