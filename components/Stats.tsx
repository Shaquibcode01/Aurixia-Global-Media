import { Counter } from "./Reveal";

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap stats-grid">
        <div className="stat"><Counter to={150} suffix="+" /><span>Brands scaled</span></div>
        <div className="stat"><Counter to={8} suffix="X" /><span>Avg. ROI delivered</span></div>
        <div className="stat"><Counter to={200} prefix="₹" suffix="Cr+" /><span>Revenue generated</span></div>
        <div className="stat"><Counter to={6} /><span>Years of excellence</span></div>
      </div>
    </section>
  );
}
