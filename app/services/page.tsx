import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icons";
import CtaBand from "@/components/CtaBand";
import { Reveal, SplitText } from "@/components/Reveal";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = { title: "Services", description: "SEO, performance marketing, social media, content, brand identity and web analytics from a Delhi NCR growth agency." };

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="grid-bg" /><div className="glow" style={{ left: "85%", top: "30%" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <span className="eyebrow">What we do</span>
          <SplitText as="h1" className="h1" text={"Services built\n*to perform."} />
          <p className="lead rv in" style={{ ["--d" as string]: "500ms" }}>From search to social, strategy to execution — every service we offer is engineered to move the needle for your brand.</p>
        </div>
      </section>
      <nav className="quick-nav" aria-label="Services">
        <div className="wrap">{SERVICES.map((s) => <a key={s.id} href={`#${s.id}`}>{s.title}</a>)}</div>
      </nav>
      <section className="section" style={{ paddingTop: 56 }}>
        <div className="wrap">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id}>
              <article className="svc-row" id={s.id}>
                <div className="svc-main">
                  <div className="svc-top">
                    <div className="icon-box"><Icon name={s.icon} size={28} /></div>
                    <div><small>0{i + 1}</small><h2 className="h3" style={{ fontSize: 40 }}>{s.title}</h2><div className="tag">{s.tagline}</div></div>
                  </div>
                  <p>{s.body}</p>
                  <h6>What&apos;s included</h6>
                  <ul className="svc-list">{s.items.map((it) => <li key={it}><Icon name="check" size={18} />{it}</li>)}</ul>
                </div>
                <div className="svc-side">
                  <b>{s.stat}</b><span>{s.statLabel}</span>
                  <Link href="/contact" className="link-arrow">Get started <Icon name="arrow" size={16} /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand variant="audit" />
    </>
  );
}
