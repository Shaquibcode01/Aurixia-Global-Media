"use client";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(t);
  }, [paused]);
  return (
    <div className="testi" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="testi-stage" aria-live="polite">
        {TESTIMONIALS.map((t, k) => (
          <figure key={k} className={`testi-item ${k === i ? "on" : ""}`}>
            <q>&ldquo;{t.quote}&rdquo;</q>
            <cite>{t.name} · {t.org}</cite>
          </figure>
        ))}
      </div>
      <div className="dots">
        {TESTIMONIALS.map((_, k) => <button key={k} className={k === i ? "on" : ""} aria-label={`Testimonial ${k + 1}`} onClick={() => setI(k)} />)}
      </div>
    </div>
  );
}
