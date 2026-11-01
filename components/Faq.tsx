"use client";
import { useState } from "react";
import Icon from "./Icons";
import { FAQ } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq">
      <h3 className="h3">Common questions</h3>
      {FAQ.map((f, i) => (
        <div key={f.q} className={`faq-item ${open === i ? "on" : ""}`}>
          <button className="faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
            {f.q}<Icon name="down" size={20} />
          </button>
          <div className="faq-a"><div><p>{f.a}</p></div></div>
        </div>
      ))}
    </div>
  );
}
