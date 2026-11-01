import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Icon from "@/components/Icons";
import { SplitText } from "@/components/Reveal";

export const metadata: Metadata = { title: "Contact", description: "Talk to Aurixia Global Media about your growth goals. Most clients start with a free audit." };

const INFO = [
  ["pin", "4th Floor, Tower B, Cyber Hub, DLF Cyber City, Gurugram, Haryana 122002"],
  ["phone", "+91 98765 43210"],
  ["mail", "hello@aurixia.com"],
  ["clock", "Mon – Fri, 9:30 AM – 7:00 PM IST"],
];

export default function Contact() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 56 }}>
        <div className="grid-bg" /><div className="glow" style={{ left: "85%", top: "30%" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <span className="eyebrow">Get in touch</span>
          <SplitText as="h1" className="h1" text={"Let's talk\n*about growth."} />
          <p className="lead rv in" style={{ ["--d" as string]: "500ms" }}>Whether you have a brief, a budget, or just a challenge — we&apos;d love to hear from you. Most clients start with a free audit.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap contact-grid">
          <ContactForm />
          <aside>
            <div className="visit">
              <h3 className="h3">Visit us</h3>
              <ul>{INFO.map(([ic, t]) => <li key={t}><span className="ib"><Icon name={ic} size={18} /></span><span>{t}</span></li>)}</ul>
            </div>
            <Faq />
          </aside>
        </div>
      </section>
    </>
  );
}
