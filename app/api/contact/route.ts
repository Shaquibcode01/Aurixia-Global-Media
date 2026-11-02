import { NextResponse } from "next/server";

const clean = (v: unknown, max = 2000) => String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const lead = {
    name: clean(body?.name, 200),
    email: clean(body?.email, 200),
    phone: clean(body?.phone, 50),
    service: clean(body?.service, 200),
    budget: clean(body?.budget, 100),
    message: clean(body?.message),
  };
  if (!lead.name || !lead.email || !lead.message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const hook = process.env.SHEET_WEBHOOK_URL;
  if (!hook) {
    // Not configured yet — leads still show in Vercel → Project → Logs.
    console.log("[contact lead — SHEET_WEBHOOK_URL not set]", JSON.stringify(lead));
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" }, // avoids a CORS preflight on Apps Script
      body: JSON.stringify({ ...lead, secret: process.env.SHEET_WEBHOOK_SECRET ?? "", submittedAt: new Date().toISOString() }),
      redirect: "follow",
    });
    const out = await res.json().catch(() => null);
    if (!res.ok || !out?.ok) throw new Error(`Sheet webhook failed (${res.status})`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact lead — sheet error]", err, JSON.stringify(lead));
    return NextResponse.json({ ok: false, error: "Could not save" }, { status: 502 });
  }
}
