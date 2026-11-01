"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { NAV } from "@/lib/data";

export default function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hide, setHide] = useState(false);
  const [open, setOpen] = useState(false);
  const last = useRef(0);

  useEffect(() => {
    const on = () => {
      const y = scrollY;
      setScrolled(y > 20);
      setHide(y > 400 && y > last.current + 4 && !open);
      if (y < last.current - 4) setHide(false);
      last.current = y;
    };
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, [open]);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""} ${hide ? "hide" : ""}`}>
        <div className="wrap header-in">
          <Logo />
          <nav className="nav" aria-label="Primary">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={`link ${path.startsWith(n.href) ? "active" : ""}`}>{n.label}</Link>
            ))}
            <Link href="/contact" className="btn btn-outline sm">Get Started</Link>
          </nav>
          <button className={`burger ${open ? "open" : ""}`} aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className={path.startsWith(n.href) ? "active" : ""} onClick={() => setOpen(false)}>{n.label}</Link>
        ))}
        <Link href="/contact" className="btn btn-gold" style={{ marginTop: 24, alignSelf: "flex-start" }} onClick={() => setOpen(false)}>Get Started</Link>
      </div>
    </>
  );
}
