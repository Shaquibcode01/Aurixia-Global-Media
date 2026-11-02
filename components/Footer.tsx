import Link from "next/link";
import Image from "next/image";
import { NAV } from "@/lib/data";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Image className="footer-logo" src="/logo-crop.jpg" alt="Aurixia Global Media" width={900} height={640} />
            <p>Ideas that move brands forward. Digital marketing built for brands that refuse to blend in.</p>
          </div>
          <div>
            <h5>Navigate</h5>
            <ul>{NAV.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
          </div>
          <div>
            <h5>Connect</h5>
            <ul>
              <li><p>{SITE.address}</p></li>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
            </ul>
            <div className="socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://x.com" target="_blank" rel="noreferrer">Twitter / X</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Aurixia Global Media. All rights reserved.</span>
          <span>New Delhi · Digital Marketing Agency</span>
        </div>
      </div>
    </footer>
  );
}
