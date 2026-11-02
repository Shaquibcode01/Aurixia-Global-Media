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
      const mobile = innerWidth <= 900;
      setHide(!mobile && y > 400 && y > last.current + 4 && !open);
      if (y < last.current - 4) setHide(false);
      last.current = y;
    };
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, [open]);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const resize = () => innerWidth > 900 && setOpen(false);
    addEventListener("keydown", esc);
    addEventListener("resize", resize);
    return () => { removeEventListener("keydown", esc); removeEventListener("resize", resize); };
  }, []);
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
          <button type="button" className={`burger ${open ? "open" : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open} onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
        <span className="menu-top">AURIXIA</span>
        <button type="button" className="menu-close" aria-label="Close menu" onClick={() => setOpen(false)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 5l14 14M19 5L5 19" /></svg>
        </button>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className={path.startsWith(n.href) ? "active" : ""} onClick={() => setOpen(false)}>{n.label}</Link>
        ))}
        <Link href="/contact" className="btn btn-gold" onClick={() => setOpen(false)}>Get Started</Link>
      </div>
    </>
  );
}
