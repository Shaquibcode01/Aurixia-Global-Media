"use client";
import { useMemo, useState } from "react";
import MagneticLink from "./Magnetic";
import Icon from "./Icons";

const CHANNELS = [
  { id: "seo", label: "SEO", x: 5.2 },
  { id: "paid", label: "Performance", x: 6.4 },
  { id: "social", label: "Social", x: 4.7 },
  { id: "full", label: "Full-funnel", x: 8 },
];
const inr = (n: number) => {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
};

export default function RoiCalculator() {
  const [budget, setBudget] = useState(150000);
  const [ch, setCh] = useState("full");
  const min = 25000, max = 1000000;
  const x = CHANNELS.find((c) => c.id === ch)!.x;
  const out = useMemo(() => {
    const monthly = budget * x;
    return { monthly, year: monthly * 12, leads: Math.round(budget / 420) };
  }, [budget, x]);

  return (
    <div className="roi-grid">
      <div>
        <span className="eyebrow">Growth calculator</span>
        <h2 className="h2" style={{ margin: "14px 0 20px" }}>What could <span className="gold">8X</span> look like for you?</h2>
        <p className="lead">Move the slider, pick a channel mix, and see an illustrative projection based on our average client returns.</p>
        <div className="roi-box" style={{ marginTop: 32 }}>
          <div className="field">
            <label htmlFor="budget">Monthly marketing budget <b>{inr(budget)}</b></label>
            <input id="budget" type="range" min={min} max={max} step={25000} value={budget}
              style={{ ["--p" as string]: `${((budget - min) / (max - min)) * 100}%` }}
              onChange={(e) => setBudget(+e.target.value)} />
          </div>
          <div className="field" style={{ marginBottom: 0 }}>
            <div className="roi-label">Channel focus</div>
            <div className="chips">
              {CHANNELS.map((c) => (
                <button key={c.id} className={`chip ${ch === c.id ? "on" : ""}`} onClick={() => setCh(c.id)}>{c.label}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="roi-out">
        <div className="roi-label" style={{ marginBottom: 0 }}>Projected monthly revenue</div>
        <div className="roi-big" aria-live="polite">{inr(out.monthly)}</div>
        <p style={{ color: "#cfd0e8" }}>at an estimated <b style={{ color: "var(--gold)" }}>{x}X</b> return on your spend</p>
        <div className="roi-meta">
          <div><b>{inr(out.year)}</b><span>12-month revenue</span></div>
          <div><b>{out.leads.toLocaleString("en-IN")}</b><span>Est. leads / month</span></div>
          <div><b>{x}X</b><span>Return on spend</span></div>
        </div>
        <div style={{ marginTop: 34 }}>
          <MagneticLink href="/contact" className="btn btn-gold">Get my real numbers <Icon name="arrow" size={18} /></MagneticLink>
        </div>
        <p className="roi-note">Illustrative estimate based on average client results. Actual outcomes vary by industry, offer and market.</p>
      </div>
    </div>
  );
}
