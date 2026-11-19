import Link from "next/link";
import Image from "next/image";
import { NAV } from "@/lib/data";
import { SITE } from "@/lib/site";
import Icon from "./Icons";

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
            <ul className="foot-contact">
              <li><span className="ci"><Icon name="pin" size={18} /></span><p>{SITE.address}</p></li>
              <li><span className="ci"><Icon name="mail" size={18} /></span><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><span className="ci"><Icon name="phone" size={18} /></span><a href={SITE.phoneHref}>{SITE.phone}</a></li>
            </ul>
            <div className="socials">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><Icon name="instagram" size={20} /></a>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><Icon name="linkedin" size={20} /></a>
              <a href={SITE.gmb} target="_blank" rel="noreferrer" aria-label="Google Business Profile" title="Google Business Profile"><Icon name="store" size={20} /></a>
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
