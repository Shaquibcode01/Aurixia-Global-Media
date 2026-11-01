import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import ServiceCards from "@/components/ServiceCards";
import Process from "@/components/Process";
import RoiCalculator from "@/components/RoiCalculator";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icons";
import { Reveal, SplitText, Counter } from "@/components/Reveal";
import { WHY } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">What we do</span>
              <SplitText as="h2" className="h2" text="Our services" />
            </div>
            <Link href="/services" className="link-arrow">View all <Icon name="arrow" size={18} /></Link>
          </div>
          <ServiceCards />
        </div>
      </section>

      <section className="section bg-cream"><div className="wrap"><Process /></div></section>

      <section className="section roi"><div className="wrap"><RoiCalculator /></div></section>

      <section className="section">
        <div className="wrap why-grid">
          <div>
            <span className="eyebrow">Why Aurixia</span>
            <SplitText as="h2" className="h2" text={"Built different.\n*Built to win."} />
            <div className="check-list">
              {WHY.map((w, i) => (
                <Reveal key={w} delay={i * 90}>
                  <div className="check"><Icon name="check" size={22} /><span>{w}</span></div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal dir="scale">
            <div className="rings">
              <div className="ring r1"><i className="orb" /></div>
              <div className="ring r2"><i className="orb" /></div>
              <div className="ring r3" />
              <div className="rings-core"><Counter to={150} suffix="+" /><span>Brands scaled</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap center">
          <span className="eyebrow">Kind words</span>
          <h2 className="h2" style={{ margin: "14px 0 48px" }}>Brands that grew with us</h2>
          <Testimonials />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
