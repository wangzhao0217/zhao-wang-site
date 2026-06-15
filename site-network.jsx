/* site-network.jsx — animated route-network hero showpiece.
   Stylised cycle/transport network: curved routes coloured by the
   flow scale, with trip-dots travelling along them (declarative SVG
   animateMotion) and gently pulsing nodes. Adapts to light/dark via
   tokens. Decorative dash-flow + pulse honour reduced-motion; the
   trip-dots (the data-viz payload) keep moving. */

(function () {
  const VIEW_W = 620, VIEW_H = 480;

  const NODES = [
    [80, 150], [205, 80], [355, 120], [500, 70], [560, 200],
    [150, 270], [300, 230], [445, 280], [110, 390], [265, 370],
    [415, 410], [545, 360],
  ];

  // [d-path, flow level 1..6]
  const ROUTES = [
    ["M80,150 Q150,90 205,80",        3],
    ["M205,80 Q290,80 355,120",       5],
    ["M355,120 Q440,150 500,70",      2],
    ["M500,70 Q545,120 560,200",      3],
    ["M80,150 Q110,210 150,270",      4],
    ["M205,80 Q190,170 150,270",      2],
    ["M355,120 Q330,180 300,230",     5],
    ["M150,270 Q225,250 300,230",     6],
    ["M300,230 Q375,250 445,280",     4],
    ["M445,280 Q510,250 560,200",     3],
    ["M150,270 Q120,330 110,390",     4],
    ["M110,390 Q190,375 265,370",     5],
    ["M300,230 Q280,300 265,370",     2],
    ["M265,370 Q340,385 415,410",     6],
    ["M445,280 Q430,345 415,410",     3],
    ["M415,410 Q490,385 545,360",     4],
    ["M560,200 Q560,285 545,360",     2],
  ];

  const fv = (lvl) => `var(--flow-${lvl})`;

  function NetworkHero() {
    // Build trip-dots: busier routes carry more, travel faster.
    const dots = React.useMemo(() => {
      const list = [];
      ROUTES.forEach((r, ri) => {
        const level = r[1];
        const count = level >= 5 ? 3 : level >= 3 ? 2 : 1;
        const dur = 9 - level * 0.7;            // seconds per lap (busier = quicker)
        for (let k = 0; k < count; k++) {
          list.push({
            route: ri,
            dur: dur,
            begin: -(dur * (k / count + Math.random() * 0.25)), // stagger along path
            radius: 2.6 + level * 0.25,
            color: fv(Math.min(6, level + 1)),
          });
        }
      });
      return list;
    }, []);

    return (
      <div style={{ position: "relative", width: "100%", lineHeight: 0 }}>
        <style>{`
          @keyframes zwFlow { to { stroke-dashoffset: -28; } }
          @keyframes zwPulse { 0%,100% { r: 5; opacity: 0.85; } 50% { r: 9; opacity: 0.4; } }
          .zw-route { stroke-dasharray: 6 8; animation: zwFlow 1.1s linear infinite; }
          .zw-node-ring { animation: zwPulse 3.2s ease-in-out infinite; }
          @media (prefers-reduced-motion: reduce) {
            .zw-route, .zw-node-ring { animation: none; }
          }
        `}</style>
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          width="100%"
          role="img"
          aria-label="Animated transport route network with trips flowing between intersections"
          style={{ display: "block", background: "var(--surface-card)" }}
        >
          <defs>
            <pattern id="zwgrid" width="34" height="34" patternUnits="userSpaceOnUse">
              <path d="M34 0H0V34" fill="none" stroke="var(--border-color)" strokeWidth="1" opacity="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="url(#zwgrid)" />

          {/* route casings + animated dash, paths carry ids for mpath */}
          {ROUTES.map((r, i) => (
            <path key={`base-${i}`} id={`zwroute-${i}`} d={r[0]} fill="none"
              stroke={fv(r[1])} strokeWidth={2 + r[1] * 0.7}
              strokeLinecap="round" opacity="0.28" />
          ))}
          {ROUTES.map((r, i) => (
            <path key={`flow-${i}`} className="zw-route" d={r[0]} fill="none"
              stroke={fv(Math.min(6, r[1] + 1))} strokeWidth={1.4 + r[1] * 0.35}
              strokeLinecap="round" opacity="0.85" />
          ))}

          {/* travelling trip dots via SMIL animateMotion */}
          {dots.map((d, i) => (
            <circle key={`dot-${i}`} r={d.radius} fill={d.color}>
              <animateMotion dur={`${d.dur}s`} begin={`${d.begin}s`} repeatCount="indefinite"
                calcMode="linear" rotate="0">
                <mpath href={`#zwroute-${d.route}`} xlinkHref={`#zwroute-${d.route}`} />
              </animateMotion>
            </circle>
          ))}

          {/* nodes */}
          {NODES.map((n, i) => (
            <g key={`node-${i}`} transform={`translate(${n[0]},${n[1]})`}>
              <circle className="zw-node-ring" r="5" fill="var(--clay)" opacity="0.18"
                style={{ animationDelay: `${(i % 5) * 0.4}s` }} />
              <circle r="3.4" fill="var(--surface-card)" stroke="var(--clay)" strokeWidth="1.8" />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  window.NetworkHero = NetworkHero;
})();
