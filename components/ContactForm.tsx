"use client";
import { useState } from "react";
import Icon from "./Icons";
import { SERVICES } from "@/lib/data";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "fail">("idle");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const errs: Errors = {};
    if (!data.name?.trim()) errs.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email ?? "")) errs.email = "Enter a valid email address.";
    if (!data.message?.trim() || data.message.trim().length < 10) errs.message = "A few words about your brand helps us prepare.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setState("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setState("done");
    } catch {
      setState("fail");
    }
  };

  if (state === "done")
    return (
      <div className="form-card form-done">
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" /><path className="draw" d="m8 12.5 3 3 5-6" />
        </svg>
        <h2 className="h2">Message received</h2>
        <p style={{ color: "#555", marginTop: 12 }}>Thanks — a strategist will get back to you within one business day.</p>
      </div>
    );

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <h2 className="h3" style={{ fontSize: 40 }}>Send us a message</h2>
      <p>We typically respond within one business day.</p>
      <div className="row2">
        <div className={`f ${errors.name ? "err" : ""}`}>
          <label htmlFor="name">Full name <em>*</em></label>
          <input id="name" name="name" placeholder="Rahul Sharma" autoComplete="name" />
          {errors.name && <div className="msg">{errors.name}</div>}
        </div>
        <div className={`f ${errors.email ? "err" : ""}`}>
          <label htmlFor="email">Email address <em>*</em></label>
          <input id="email" name="email" type="email" placeholder="rahul@company.com" autoComplete="email" />
          {errors.email && <div className="msg">{errors.email}</div>}
        </div>
      </div>
      <div className="f">
        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" autoComplete="tel" />
      </div>
      <div className="row2">
        <div className="f">
          <label htmlFor="service">Service interested in</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>Select a service…</option>
            {SERVICES.map((s) => <option key={s.id}>{s.title}</option>)}
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="f">
          <label htmlFor="budget">Monthly budget</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="" disabled>Select a range…</option>
            <option>Under ₹50,000</option><option>₹50,000 – ₹1,50,000</option>
            <option>₹1,50,000 – ₹5,00,000</option><option>₹5,00,000+</option>
          </select>
        </div>
      </div>
      <div className={`f ${errors.message ? "err" : ""}`}>
        <label htmlFor="message">Tell us about your brand <em>*</em></label>
        <textarea id="message" name="message" placeholder="What's your biggest marketing challenge right now? What have you tried? What does success look like?" />
        {errors.message && <div className="msg">{errors.message}</div>}
      </div>
      <button className="btn btn-gold" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send message"} <Icon name="arrow" size={18} />
      </button>
      {state === "fail" && <p style={{ color: "#c0392b", marginTop: 14 }}>Something went wrong. Please email hello@aurixia.com directly.</p>}
    </form>
  );
}
