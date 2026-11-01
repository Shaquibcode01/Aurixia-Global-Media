"use client";
import Link from "next/link";
import Icon from "./Icons";
import { Reveal } from "./Reveal";
import { SERVICES } from "@/lib/data";

export default function ServiceCards() {
  const move = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--sx", `${px * 100}%`);
    el.style.setProperty("--sy", `${py * 100}%`);
    el.style.transform = `perspective(900px) rotateY(${(px - 0.5) * 8}deg) rotateX(${(0.5 - py) * 8}deg) translateY(-6px)`;
  };
  return (
    <div className="svc-grid">
      {SERVICES.map((s, i) => (
        <Reveal key={s.id} delay={(i % 3) * 100}>
          <Link href={`/services#${s.id}`} className="svc-card" onMouseMove={move} onMouseLeave={(e) => (e.currentTarget.style.transform = "")}>
            <span className="svc-num">0{i + 1}</span>
            <div className="icon-box"><Icon name={s.icon} size={26} /></div>
            <h3 className="h3">{s.title}</h3>
            <p>{s.short}</p>
            <span className="svc-more">Explore <Icon name="arrow" size={16} /></span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
