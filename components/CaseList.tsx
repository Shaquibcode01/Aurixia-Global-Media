"use client";
import { useState } from "react";
import Icon from "./Icons";
import { CASES } from "@/lib/data";

const CATS = ["All", "SEO", "Performance Marketing", "Social Media", "Brand Identity", "Content"];

export default function CaseList() {
  const [cat, setCat] = useState("All");
  const list = CASES.filter((c) => cat === "All" || c.cat === cat);
  return (
    <>
      <div className="filter-bar">
        <div className="wrap filter" role="tablist">
          {CATS.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? "on" : ""} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
      </div>
      <div className="wrap" style={{ paddingTop: 56, paddingBottom: 96 }} key={cat}>
        {list.map((c, i) => (
          <article className="case case-enter" key={c.title} style={{ animationDelay: `${i * 110}ms` }}>
            <div className="case-main">
              <div className="case-meta">
                <span className="cat"><Icon name="tag" size={14} />{c.cat}</span>
                <span><Icon name="clock" size={14} />{c.duration}</span>
                <span>{c.industry}</span>
              </div>
              <div className="case-client">{c.client} · {c.industry}</div>
              <h3 className="h3">{c.title}</h3>
              <div className="case-cols">
                <div><h6>The challenge</h6><p>{c.challenge}</p></div>
                <div><h6>Our solution</h6><p>{c.solution}</p></div>
              </div>
              <div className="tags">{c.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
            <div className="case-res">
              <h6>Results</h6>
              {c.results.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
