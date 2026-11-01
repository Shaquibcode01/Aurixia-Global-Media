"use client";
import { useRef } from "react";
import MagneticLink from "./Magnetic";
import Icon from "./Icons";
import { SplitText } from "./Reveal";

export default function CtaBand({ variant = "center" }: { variant?: "center" | "audit" | "portfolio" }) {
  const ref = useRef<HTMLElement>(null);
  const move = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    ref.current!.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };
  if (variant === "audit")
    return (
      <section className="cta" ref={ref} onMouseMove={move}>
        <div className="wrap cta-split">
          <div>
            <span className="eyebrow">Free Audit</span>
            <SplitText as="h2" className="h2" text={"Not sure which\n*service you need?"} />
            <p>Most clients start with a free audit. We&apos;ll tell you exactly where the opportunity is.</p>
          </div>
          <div className="cta-row">
            <MagneticLink href="/contact" className="btn btn-gold">Get a free audit <Icon name="arrow" size={18} /></MagneticLink>
            <a href="tel:+919876543210" className="btn btn-ghost"><Icon name="phone" size={18} /> Call us</a>
          </div>
        </div>
      </section>
    );
  const portfolio = variant === "portfolio";
  return (
    <section className="cta" ref={ref} onMouseMove={move}>
      <div className="wrap">
        <span className="eyebrow">{portfolio ? "Work with us" : "Let's work together"}</span>
        <SplitText as="h2" className="h2" text={portfolio ? "Your brand\n*could be next." : "Ready to dominate\n*your market?"} />
        <p>{portfolio ? "Tell us your challenge. We'll show you how we'd solve it." : "Let's build something that moves."}</p>
        <MagneticLink href="/contact" className="btn btn-gold">{portfolio ? "Start a conversation" : "Talk to us"} <Icon name="arrow" size={18} /></MagneticLink>
      </div>
    </section>
  );
}
