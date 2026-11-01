"use client";
import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

export function Reveal({
  children, delay = 0, dir = "up", as: Tag = "div", className = "",
}: { children: ReactNode; delay?: number; dir?: "up" | "left" | "right" | "scale"; as?: ElementType; className?: string }) {
  const [ref, seen] = useInView<HTMLElement>();
  const cls = dir === "left" ? "rv-left" : dir === "right" ? "rv-right" : dir === "scale" ? "rv-scale" : "";
  return (
    <Tag ref={ref} className={`rv ${cls} ${seen ? "in" : ""} ${className}`} style={{ ["--d" as string]: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

/** Word-by-word masked headline reveal. Wrap gold words with *asterisks*. */
export function SplitText({
  text, as: Tag = "h2", className = "", base = 0,
}: { text: string; as?: ElementType; className?: string; base?: number }) {
  const [ref, seen] = useInView<HTMLElement>(0.2);
  let i = 0;
  const lines = text.split("\n");
  return (
    <Tag ref={ref} className={`split ${seen ? "in" : ""} ${className}`} style={{ ["--base" as string]: `${base}ms` }}>
      {lines.map((line, li) => {
        const gold = line.startsWith("*");
        const words = line.replace(/^\*/, "").split(" ");
        return (
          <span key={li} className={gold ? "gold" : ""} style={{ display: "block" }}>
            {words.map((w, wi) => (
              <span key={wi}>
                <span className="w"><span style={{ ["--i" as string]: i++ }}>{w}</span></span>{" "}
              </span>
            ))}
          </span>
        );
      })}
    </Tag>
  );
}

export function Counter({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [ref, seen] = useInView<HTMLElement>(0.4);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setV(to); return; }
    let raf = 0;
    const t0 = performance.now();
    const dur = 1800;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      setV(to * (1 - Math.pow(1 - p, 4)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return <b ref={ref as React.RefObject<HTMLElement>}>{prefix}{v.toFixed(decimals)}{suffix}</b>;
}
