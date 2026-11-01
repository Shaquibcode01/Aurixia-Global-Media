"use client";
import { useEffect, useState } from "react";
import { PROCESS, CHANNELS } from "@/lib/data";

export default function Process() {
  const [step, setStep] = useState(0);
  const [hover, setHover] = useState<string | null>(null);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % PROCESS.length), 4500);
    return () => clearTimeout(t);
  }, [step, auto]);

  const active = hover ?? PROCESS[step].channel;
  const activeCh = CHANNELS.find((c) => c.id === active)!;
  const R = 70, C = 2 * Math.PI * R;
  let acc = 0;

  return (
    <div className="proc-grid">
      <div>
        <span className="eyebrow">How we work</span>
        <h2 className="h2" style={{ marginTop: 14 }}>Our process</h2>
        <div className="steps">
          {PROCESS.map((p, i) => (
            <button key={p.n} className={`step ${step === i ? "on" : ""}`} onClick={() => { setStep(i); setAuto(false); }} aria-pressed={step === i}>
              <span className="step-n">{p.n}</span>
              <span>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </span>
              {auto && <span className="step-bar"><i /></span>}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="panel">
          <div className="panel-title">Channel mix</div>
          <div className="donut-wrap">
            <div className="donut">
              <svg viewBox="0 0 200 200">
                {CHANNELS.map((c) => {
                  const len = (c.value / 100) * C;
                  const el = (
                    <circle key={c.id} cx="100" cy="100" r={R} stroke={c.color}
                      strokeWidth={active === c.id ? 34 : 24}
                      opacity={active === c.id ? 1 : 0.55}
                      strokeDasharray={`${len - 2} ${C - len + 2}`}
                      strokeDashoffset={-acc}
                      onMouseEnter={() => setHover(c.id)} onMouseLeave={() => setHover(null)} />
                  );
                  acc += len;
                  return el;
                })}
              </svg>
              <div className="donut-center">
                <b>{activeCh.value}%</b>
                <span>{activeCh.label}</span>
              </div>
            </div>
            <div className="donut-legend">
              {CHANNELS.map((c) => (
                <button key={c.id} className={active === c.id ? "on" : ""} onMouseEnter={() => setHover(c.id)} onMouseLeave={() => setHover(null)}>
                  <i style={{ background: c.color }} />{c.label} {c.value}%
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-title">Conversion funnel</div>
          <div className="funnel">
            {[["Awareness", "100%", "#C5A042"], ["Interest", "78%", "#d1b05d"], ["Consideration", "56%", "#dcc07d"], ["Conversion", "34%", "#e3cfa0"]].map(([l, w, c]) => (
              <div key={l} className="funnel-row" style={{ ["--w" as string]: w, ["--c" as string]: c }}>{l}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
