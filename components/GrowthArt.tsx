/** Original brand illustration (no third-party imagery): rising bars, a trend line and orbiting coins. */
export default function GrowthArt() {
  const bars = [70, 105, 90, 150, 135, 205, 245];
  return (
    <div className="art">
      <svg viewBox="0 0 520 520" role="img" aria-label="Illustration of rising growth bars with a trend line and coins">
        <defs>
          <linearGradient id="gBar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#C5A042" stopOpacity=".55" />
            <stop offset="1" stopColor="#E3CFA0" />
          </linearGradient>
          <radialGradient id="gGlow" cx=".7" cy=".2" r=".8">
            <stop offset="0" stopColor="#C5A042" stopOpacity=".45" />
            <stop offset="1" stopColor="#C5A042" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="520" height="520" rx="28" fill="#000080" />
        <rect width="520" height="520" rx="28" fill="url(#gGlow)" />
        {[130, 210, 290, 370].map((y) => <line key={y} x1="48" x2="472" y1={y} y2={y} stroke="#fff" strokeOpacity=".08" />)}
        {bars.map((h, i) => (
          <rect key={i} className="art-bar" x={64 + i * 58} y={440 - h} width="36" height={h} rx="8" fill="url(#gBar)" style={{ animationDelay: `${i * 110}ms` }} />
        ))}
        <path className="art-line" d="M82 360 L140 330 L198 345 L256 280 L314 295 L372 215 L430 150" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {[[82, 360], [140, 330], [198, 345], [256, 280], [314, 295], [372, 215], [430, 150]].map(([x, y], i) => (
          <circle key={i} className="art-dot" cx={x} cy={y} r="7" fill="#000080" stroke="#C5A042" strokeWidth="3" style={{ animationDelay: `${600 + i * 110}ms` }} />
        ))}
        <g className="art-orbit">
          <circle cx="410" cy="92" r="26" fill="#C5A042" />
          <text x="410" y="102" textAnchor="middle" fontSize="28" fontWeight="700" fill="#000080" fontFamily="Georgia, serif">₹</text>
        </g>
        <g className="art-orbit slow">
          <circle cx="110" cy="110" r="16" fill="none" stroke="#E3CFA0" strokeWidth="3" />
          <circle cx="150" cy="70" r="8" fill="#E3CFA0" />
        </g>
        <text x="64" y="486" fill="#fff" fillOpacity=".7" fontSize="13" letterSpacing="3" fontFamily="system-ui, sans-serif">GROWTH · COMPOUNDED</text>
      </svg>
    </div>
  );
}
