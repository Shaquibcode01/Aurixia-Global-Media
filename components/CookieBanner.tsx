"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem("aurixia-cookie")) setTimeout(() => setShow(true), 1200);
    } catch { /* storage unavailable */ }
  }, []);
  const choose = (v: string) => {
    try { localStorage.setItem("aurixia-cookie", v); } catch { /* ignore */ }
    setShow(false);
  };
  return (
    <div className={`cookie ${show ? "on" : ""}`} role="dialog" aria-label="Cookie consent" aria-hidden={!show}>
      <div className="wrap cookie-in">
        <div>
          <h6>Cookie Consent</h6>
          <p>We use cookies to enable essential functionality and to understand how visitors interact with our site. By clicking Accept, you agree to our use of these tools for analytics and support.</p>
        </div>
        <div className="cookie-btns">
          <button className="btn btn-ghost sm" onClick={() => choose("declined")}>Decline</button>
          <button className="btn btn-gold sm" onClick={() => choose("accepted")}>Accept</button>
        </div>
      </div>
    </div>
  );
}
