"use client";
import { useEffect, useRef, useState } from "react";
import MagneticLink from "./Magnetic";
import Icon from "./Icons";
import { SplitText } from "./Reveal";

const METRICS = {
  Traffic: { unit: "k visits", before: [12, 14, 13, 15, 16], after: [22, 34, 47, 61, 78] },
  Leads: { unit: " leads", before: [180, 190, 175, 200, 210], after: [320, 470, 640, 810, 1040] },
  Revenue: { unit: "L ₹", before: [8, 9, 8, 10, 11], after: [15, 26, 38, 52, 71] },
} as const;
type K = keyof typeof METRICS;
const MONTHS = ["Jan", "Mar", "May", "Jul", "Sep"];

export default function Hero() {
  const [k, setK] = useState<K>("Traffic");
  const [ready, setReady] = useState(false);
  const root = useRef<HTMLElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const m = METRICS[k];
  const max = Math.max(...m.after);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(t);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const r = root.current!.getBoundingClientRect();
    root.current!.style.setProperty("--mx", `${e.clientX - r.left}px`);
    root.current!.style.setProperty("--my", `${e.clientY - r.top}px`);
    const c = card.current;
    if (c) {
      const cr = c.getBoundingClientRect();
      const px = (e.clientX - cr.left) / cr.width - 0.5;
      const py = (e.clientY - cr.top) / cr.height - 0.5;
      c.style.transform = `perspective(1000px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`;
    }
  };

  return (
    <section className="hero" ref={root} onMouseMove={onMove} onMouseLeave={() => card.current && (card.current.style.transform = "")}>
      <div className="grid-bg" />
      <div className="glow" />
      <div className="wrap hero-grid">
        <div>
          <span className="pill rv in"><i /> Delhi NCR · Digital Marketing Agency</span>
          <h1 className="h1">
            <SplitText as="span" text={"We build\nbrands\n*that move."} base={150} />
          </h1>
          <p className="lead rv in" style={{ ["--d" as string]: "700ms" }}>
            Aurixia Global Media is a Delhi NCR digital marketing agency that turns ambitious brands into category leaders — through strategy, creativity, and relentless execution.
          </p>
          <div className="cta-row rv in" style={{ ["--d" as string]: "850ms" }}>
            <MagneticLink href="/contact" className="btn btn-gold">Start your growth <Icon name="arrow" size={18} /></MagneticLink>
            <MagneticLink href="/portfolio" className="btn btn-ghost">See our work</MagneticLink>
          </div>
        </div>

        <div className="rv rv-right in" style={{ ["--d" as string]: "500ms", position: "relative" }}>
          <div className="chart-card" ref={card}>
            <div className="float-badge fb-roi"><b>8X</b><span>Avg. ROI</span></div>
            <div className="chart-head">
              <span className="chart-title">Client growth — 2024</span>
              <div className="tabs" role="tablist">
                {(Object.keys(METRICS) as K[]).map((key) => (
                  <button key={key} role="tab" aria-selected={k === key} className={k === key ? "on" : ""} onClick={() => setK(key)}>{key}</button>
                ))}
              </div>
            </div>
            <div className="bars">
              {MONTHS.map((mo, i) => (
                <div className="bar-group" key={mo} data-hot>
                  <div className="bar-tip">{mo}: {m.before[i]} → <b>{m.after[i]}</b>{m.unit}</div>
                  <div className="bar before" style={{ height: ready ? `${(m.before[i] / max) * 100}%` : 0, ["--bd" as string]: `${i * 90}ms` }} />
                  <div className="bar after" style={{ height: ready ? `${(m.after[i] / max) * 100}%` : 0, ["--bd" as string]: `${i * 90 + 120}ms` }} />
                </div>
              ))}
            </div>
            <div className="bar-labels">{MONTHS.map((mo) => <span key={mo}>{mo}</span>)}</div>
            <div className="legend">
              <span><i style={{ background: "#dedad2" }} />Before</span>
              <span><i style={{ background: "var(--gold)" }} />After Aurixia</span>
            </div>
            <div className="float-badge fb-brands"><b>150+</b><span>Brands scaled</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
