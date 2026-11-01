import type { Metadata } from "next";
import CaseList from "@/components/CaseList";
import CtaBand from "@/components/CtaBand";
import { Counter, SplitText } from "@/components/Reveal";

export const metadata: Metadata = { title: "Portfolio", description: "Case studies and measurable results from brands we've grown." };

export default function Portfolio() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 72 }}>
        <div className="grid-bg" />
        <div className="wrap" style={{ position: "relative" }}>
          <span className="eyebrow">Our work</span>
          <SplitText as="h1" className="h1" text={"Results we're\n*proud of."} />
          <p className="lead rv in" style={{ ["--d" as string]: "500ms" }}>Every case study here represents a real brand, a real challenge, and a measurable outcome. No vanity metrics — just numbers that moved the needle.</p>
        </div>
      </section>
      <section className="stats" style={{ padding: "48px 0" }}>
        <div className="wrap stats-grid">
          <div className="stat"><Counter to={150} suffix="+" /><span>Brands grown</span></div>
          <div className="stat"><Counter to={200} prefix="₹" suffix="Cr+" /><span>Ad spend managed</span></div>
          <div className="stat"><Counter to={8} suffix="X" /><span>Average ROAS</span></div>
          <div className="stat"><Counter to={6} suffix=" YRS" /><span>In business</span></div>
        </div>
      </section>
      <CaseList />
      <CtaBand variant="portfolio" />
    </>
  );
}
