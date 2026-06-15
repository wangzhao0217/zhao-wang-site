/* site-motifs.jsx — per-project animated motifs (terminal / Monokai).
   window.ProjectMotif({ motif, image, alt }) returns a 16:9 media node:
   - if `image` is set → the screenshot with a live-scan overlay
   - else → a bespoke animated SVG that reflects what the project does
   All motion is CSS-driven and themed via tokens. */

(function () {
  const VB = "0 0 320 180";

  const wrap = (children, extra) => (
    <div style={{
      position: "relative", aspectRatio: "16 / 9", overflow: "hidden",
      background: "var(--surface-sunken)", borderBottom: "1px solid var(--border-color)",
      ...extra,
    }}>{children}</div>
  );

  const Grid = () => (
    <defs>
      <pattern id="zwm-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M20 0H0V20" fill="none" stroke="var(--border-color)" strokeWidth="1" opacity="0.45" />
      </pattern>
    </defs>
  );

  // ---- FE / truss stress sweep ----
  function Fea() {
    const xs = [30, 67, 104, 141, 178, 215, 252, 289];
    const top = 64, bot = 132;
    const members = [];
    for (let i = 0; i < xs.length - 1; i++) {
      members.push([xs[i], top, xs[i + 1], top]);
      members.push([xs[i], bot, xs[i + 1], bot]);
      members.push([xs[i], top, xs[i], bot]);
      members.push([xs[i], (i % 2 ? top : bot), xs[i + 1], (i % 2 ? bot : top)]);
    }
    members.push([xs[xs.length - 1], top, xs[xs.length - 1], bot]);
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        {members.map((m, i) => (
          <line key={i} x1={m[0]} y1={m[1]} x2={m[2]} y2={m[3]}
            stroke="var(--flow-3)" strokeWidth="2.4" strokeLinecap="round"
            className="zwm-stress" style={{ animationDelay: `${(m[0] / 320) * 1.4}s` }} />
        ))}
        {xs.map((x, i) => (
          <g key={`n${i}`}>
            <circle cx={x} cy={top} r="3.2" fill="var(--surface-card)" stroke="var(--clay)" strokeWidth="1.6" />
            <circle cx={x} cy={bot} r="3.2" fill="var(--surface-card)" stroke="var(--clay)" strokeWidth="1.6" />
          </g>
        ))}
        {[104, 178, 252].map((x, i) => (
          <g key={`ld${i}`} className="zwm-bob" style={{ animationDelay: `${i * 0.3}s` }}>
            <line x1={x} y1="34" x2={x} y2="54" stroke="var(--flow-4)" strokeWidth="2" />
            <path d={`M${x - 4},48 L${x},56 L${x + 4},48`} fill="var(--flow-4)" />
          </g>
        ))}
      </svg>
    );
  }

  // ---- AI crack detection scan ----
  function Crack() {
    const d = "M36,44 L70,60 L92,52 L120,82 L150,72 L176,104 L208,96 L236,128 L268,120 L292,146";
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        <path d={d} fill="none" stroke="var(--ink-600)" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
        <path d={d} fill="none" stroke="var(--flow-3)" strokeWidth="2.4" strokeLinecap="round"
          className="zwm-flow" strokeDasharray="7 9" />
        <rect className="zwm-detect" x="138" y="58" width="56" height="40" rx="2"
          fill="none" stroke="var(--clay)" strokeWidth="1.8" />
        <rect className="zwm-sweepx" x="0" y="0" width="22" height="180"
          fill="var(--slate)" opacity="0.16" />
      </svg>
    );
  }

  // ---- Dataset alignment (GDMS ⇄ Confirm) ----
  function Align() {
    const xs = [40, 86, 132, 178, 224, 270];
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        {xs.map((x, i) => (
          <line key={`c${i}`} x1={x} y1="64" x2={x} y2="116" stroke="var(--term-prompt)" strokeWidth="2"
            strokeDasharray="3 4" className="zwm-blink" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
        <g className="zwm-align">
          {xs.map((x, i) => (
            <rect key={`a${i}`} x={x - 11} y="52" width="22" height="14" rx="2" fill="var(--slate)" />
          ))}
        </g>
        {xs.map((x, i) => (
          <rect key={`b${i}`} x={x - 11} y="114" width="22" height="14" rx="2" fill="var(--flow-3)" />
        ))}
        <text x="160" y="28" textAnchor="middle" fill="var(--term-prompt)"
          style={{ font: "700 12px var(--font-mono)" }} className="zwm-blink">✓ aligned</text>
      </svg>
    );
  }

  // ---- corenet: growing/prioritised network ----
  function Corenet() {
    const N = [[48,60],[120,40],[196,64],[268,48],[84,118],[160,128],[232,116],[292,96]];
    const E = [[0,1],[1,2],[2,3],[0,4],[4,5],[1,5],[5,6],[2,6],[6,7],[3,7]];
    const core = new Set([1, 4, 6, 7]); // prioritised edges
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        {E.map((e, i) => {
          const a = N[e[0]], b = N[e[1]]; const isCore = core.has(i);
          return <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]}
            stroke={isCore ? "var(--clay)" : "var(--flow-0)"} strokeWidth={isCore ? 3 : 1.8}
            strokeLinecap="round" className="zwm-flow" strokeDasharray="6 8"
            style={{ animationDelay: `${i * 0.12}s`, opacity: isCore ? 0.95 : 0.6 }} />;
        })}
        {N.map((n, i) => (
          <circle key={i} cx={n[0]} cy={n[1]} r="4.5" fill="var(--surface-card)"
            stroke="var(--clay)" strokeWidth="2" className="zwm-pulse"
            style={{ animationDelay: `${(i % 4) * 0.4}s` }} />
        ))}
      </svg>
    );
  }

  // ---- parenx/anime: network simplification (complex → simple) ----
  function Simplify() {
    const complex = "M30,150 L60,90 L80,130 L110,60 L130,120 L160,50 L185,110 L210,70 L240,120 L270,64 L292,110 M40,60 L90,150 L150,80 L210,150 L280,90";
    const simple = "M34,140 Q120,40 170,90 T292,86";
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        <path className="zwm-fadeA" d={complex} fill="none" stroke="var(--ink-500)" strokeWidth="1.4" strokeLinecap="round" />
        <path className="zwm-fadeB" d={simple} fill="none" stroke="var(--clay)" strokeWidth="3.2" strokeLinecap="round"
          strokeDasharray="6 8" />
        <path className="zwm-fadeB zwm-flow" d={simple} fill="none" stroke="var(--flow-1)" strokeWidth="3.2" strokeLinecap="round"
          strokeDasharray="6 8" />
      </svg>
    );
  }

  // ---- EV: route + moving vehicle + charging battery ----
  function Ev() {
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        <path id="zwm-evroute" d="M28,140 Q90,140 120,96 T210,70 Q260,58 296,92" fill="none"
          stroke="var(--flow-1)" strokeWidth="2.4" strokeDasharray="6 8" className="zwm-flow" opacity="0.8" />
        <circle r="5.5" fill="var(--clay)" className="zwm-ev" />
        {/* charging stations */}
        {[[120,96],[296,92]].map((p,i)=>(
          <circle key={i} cx={p[0]} cy={p[1]} r="4" fill="none" stroke="var(--term-prompt)" strokeWidth="2"
            className="zwm-pulse" style={{ animationDelay: `${i*0.5}s` }} />
        ))}
        {/* battery */}
        <g transform="translate(26,28)">
          <rect x="0" y="0" width="46" height="20" rx="3" fill="none" stroke="var(--ink-600)" strokeWidth="2" />
          <rect x="46" y="6" width="4" height="8" rx="1" fill="var(--ink-600)" />
          <rect x="3" y="3" width="40" height="14" rx="1.5" fill="var(--term-prompt)" className="zwm-charge" />
        </g>
        <text x="84" y="42" fill="var(--term-prompt)" style={{ font: "700 11px var(--font-mono)" }} className="zwm-blink">⚡ charging</text>
      </svg>
    );
  }

  const MOTIFS = { fea: Fea, crack: Crack, align: Align, corenet: Corenet, simplify: Simplify, ev: Ev };

  function ImageScan({ image, alt }) {
    const Bracket = (pos) => (
      <span style={{
        position: "absolute", width: 14, height: 14, borderColor: "var(--clay)", borderStyle: "solid",
        borderWidth: pos.bw, ...pos.css,
      }} />
    );
    return wrap(
      <React.Fragment>
        <img src={image} alt={alt || ""} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div className="zwm-scan" aria-hidden="true" style={{
          position: "absolute", left: 0, right: 0, top: 0, height: "32%",
          background: "linear-gradient(180deg, color-mix(in srgb, var(--clay) 45%, transparent), transparent)",
          mixBlendMode: "screen",
        }} />
        {Bracket({ bw: "2px 0 0 2px", css: { top: 8, left: 8 } })}
        {Bracket({ bw: "2px 2px 0 0", css: { top: 8, right: 8 } })}
        {Bracket({ bw: "0 0 2px 2px", css: { bottom: 8, left: 8 } })}
        {Bracket({ bw: "0 2px 2px 0", css: { bottom: 8, right: 8 } })}
        <span style={{
          position: "absolute", top: 8, left: 26, display: "inline-flex", alignItems: "center", gap: "0.3rem",
          fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em",
          color: "#fff", background: "rgba(0,0,0,0.45)", padding: "1px 6px", borderRadius: 2,
        }}>
          <span className="zwm-blink" style={{ color: "#27C93F" }}>●</span> LIVE
        </span>
      </React.Fragment>,
      { background: "var(--ink-900)" }
    );
  }

  function ProjectMotif({ motif, image, alt }) {
    return (
      <React.Fragment>
        <style>{`
          @keyframes zwm-flow { to { stroke-dashoffset: -28; } }
          @keyframes zwm-scan { 0% { transform: translateY(-110%);} 100% { transform: translateY(360%);} }
          @keyframes zwm-blink { 0%,49%{opacity:1} 50%,100%{opacity:.18} }
          @keyframes zwm-sweepx { 0%{transform:translateX(-30px)} 100%{transform:translateX(320px)} }
          @keyframes zwm-stress { 0%,100%{opacity:.22} 50%{opacity:1} }
          @keyframes zwm-pulse { 0%,100%{ r:4; opacity:1 } 50%{ r:7; opacity:.5 } }
          @keyframes zwm-bob { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(5px) } }
          @keyframes zwm-align { 0%,18%{ transform: translateX(16px) } 50%,68%{ transform: translateX(0) } 100%{ transform: translateX(16px) } }
          @keyframes zwm-fadeA { 0%,40%{opacity:.85} 55%,95%{opacity:0} 100%{opacity:.85} }
          @keyframes zwm-fadeB { 0%,40%{opacity:0} 55%,95%{opacity:1} 100%{opacity:0} }
          @keyframes zwm-charge { 0%{ width:4px } 70%,100%{ width:40px } }
          @keyframes zwm-ev {
            0%{ transform: translate(28px,140px) } 30%{ transform: translate(120px,96px) }
            65%{ transform: translate(210px,70px) } 100%{ transform: translate(296px,92px) }
          }
          .zwm-flow   { animation: zwm-flow 1.1s linear infinite; }
          .zwm-scan   { animation: zwm-scan 2.6s ease-in-out infinite; }
          .zwm-blink  { animation: zwm-blink 1.1s steps(1) infinite; }
          .zwm-sweepx { animation: zwm-sweepx 2.8s linear infinite; }
          .zwm-stress { animation: zwm-stress 2.2s ease-in-out infinite; }
          .zwm-pulse  { animation: zwm-pulse 3s ease-in-out infinite; }
          .zwm-bob    { animation: zwm-bob 1.8s ease-in-out infinite; }
          .zwm-align  { animation: zwm-align 5s ease-in-out infinite; }
          .zwm-fadeA  { animation: zwm-fadeA 6s ease-in-out infinite; }
          .zwm-fadeB  { animation: zwm-fadeB 6s ease-in-out infinite; }
          .zwm-detect { animation: zwm-blink 1.4s steps(1) infinite; }
          .zwm-charge { animation: zwm-charge 3.2s ease-in-out infinite; }
          .zwm-ev     { animation: zwm-ev 5.5s ease-in-out infinite; }
        `}</style>
        {image ? <ImageScan image={image} alt={alt} /> : (MOTIFS[motif] ? React.createElement(MOTIFS[motif]) : null)}
      </React.Fragment>
    );
  }

  window.ProjectMotif = ProjectMotif;
})();
