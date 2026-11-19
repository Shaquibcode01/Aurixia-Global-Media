import Icon from "./Icons";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";

export default function MapSection() {
  const q = encodeURIComponent("808B, DLF Prime Tower, Pocket F, Okhla Phase I, Okhla Industrial Estate, New Delhi 110020");
  return (
    <section className="map-sec">
      <div className="wrap">
        <div className="map-head">
          <div>
            <span className="eyebrow">Find us</span>
            <h2 className="h2" style={{ marginTop: 14 }}>Visit our office</h2>
          </div>
          <div className="cta-row">
            <a className="btn btn-gold sm" href={SITE.gmb} target="_blank" rel="noreferrer"><Icon name="store" size={16} /> View on Google</a>
            <a className="btn btn-outline sm" href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noreferrer"><Icon name="pin" size={16} /> Get directions</a>
          </div>
        </div>
        <Reveal dir="scale">
          <div className="map-frame">
            <iframe
              title="Aurixia Global Media office location on Google Maps"
              src={`https://www.google.com/maps?q=${q}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="map-addr"><Icon name="pin" size={16} /> {SITE.address}</p>
        </Reveal>
      </div>
    </section>
  );
}
