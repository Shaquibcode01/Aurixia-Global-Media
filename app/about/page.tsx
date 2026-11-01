import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import Stats from "@/components/Stats";
import { Reveal, SplitText } from "@/components/Reveal";

export const metadata: Metadata = { title: "About", description: "The story, values and people behind Aurixia Global Media." };

const VALUES = [
  ["01", "Science", "Every decision is backed by data. We test, measure and iterate until the numbers prove it."],
  ["02", "Craft", "Great marketing is made, not generated. We obsess over creative quality and detail."],
  ["03", "Ownership", "Your growth is our growth. We act like founders — transparent, accountable, relentless."],
];
const TIMELINE = [
  ["2020", "Founded in Delhi NCR with a single belief: marketing is equal parts science and craft."],
  ["2021", "Crossed 25 brands and launched our performance marketing practice."],
  ["2023", "Passed ₹100 Cr in managed ad spend with an average 8X return."],
  ["2025", "150+ brands scaled across D2C, real estate, EdTech and SaaS — with global ambitions."],
];

export default function About() {
  return (
    <>
      <section className="page-hero center">
        <div className="grid-bg" /><div className="glow" style={{ left: "50%", top: "20%" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <span className="eyebrow">Our story</span>
          <SplitText as="h1" className="h1" text={"We don't just\n*market. We build."} />
          <p className="lead rv in" style={{ ["--d" as string]: "500ms" }}>Aurixia Global Media was founded on a single belief — that great digital marketing is equal parts science and craft. We combine data rigour with creative ambition to build brands that last.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap about-split">
          <Reveal dir="left">
            <div className="logo-stage">
              <Image src="/logo-crop.jpg" alt="Aurixia Global Media logo — a tree of coins held in open hands" width={900} height={640} priority />
            </div>
          </Reveal>
          <Reveal dir="right">
            <span className="eyebrow">The mark</span>
            <h2 className="h2" style={{ margin: "14px 0 22px" }}>A tree of growth, <span className="gold">held in open hands.</span></h2>
            <p className="lead" style={{ marginBottom: 18 }}>Our logo says what we do. Open hands nurture a tree whose fruit is value — every coin a result earned through patient, careful cultivation.</p>
            <p className="lead">Navy for trust and depth. Gold for the returns we deliver. Together, they&apos;re the promise behind every campaign: your growth, cared for like our own.</p>
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">What drives us</span>
          <SplitText as="h2" className="h2" text="Our values" />
          <div className="vals">
            {VALUES.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 120}><div className="val"><b>{n}</b><h3 className="h3">{t}</h3><p>{d}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap">
          <span className="eyebrow">Our journey</span>
          <SplitText as="h2" className="h2" text="Six years of compounding" />
          <div className="timeline">
            {TIMELINE.map(([y, t]) => (
              <Reveal key={y}><div className="tl-item"><b>{y}</b><p>{t}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
