"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icons";

/** Scroll progress bar + back-to-top + custom cursor, all in one client shell. */
export default function Effects() {
  const bar = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
      setTop(scrollY > 800);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (matchMedia("(pointer: coarse)").matches) return;
    let x = 0, y = 0, rx = 0, ry = 0, raf = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      ring.current?.classList.add("on");
      dot.current?.classList.add("on");
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
      const hot = (e.target as Element | null)?.closest("a, button, input, select, textarea, [data-hot]");
      ring.current?.classList.toggle("big", !!hot);
    };
    const loop = () => {
      rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => { removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div className="progress" ref={bar} />
      <div className="cursor" ref={ring} />
      <div className="cursor-dot" ref={dot} />
      <button className={`to-top ${top ? "on" : ""}`} aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
        <Icon name="up" />
      </button>
    </>
  );
}
