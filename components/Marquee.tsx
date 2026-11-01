import { MARQUEE } from "@/lib/data";

export default function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...row, ...row].map((t, i) => <span className="marquee-item" key={i}>{t}</span>)}
      </div>
    </div>
  );
}
