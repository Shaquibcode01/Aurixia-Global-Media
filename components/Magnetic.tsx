"use client";
import { useRef, type ReactNode } from "react";
import Link from "next/link";

/** Link that gently pulls toward the cursor. */
export default function MagneticLink({ href, className = "", children }: { href: string; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.22;
    const y = (e.clientY - r.top - r.height / 2) * 0.32;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <Link ref={ref} href={href} className={className} onMouseMove={move} onMouseLeave={leave} style={{ transition: "transform .25s var(--ease), color .35s, background .35s" }}>
      {children}
    </Link>
  );
}
