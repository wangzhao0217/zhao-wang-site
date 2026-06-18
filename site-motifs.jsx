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

  // Shared building blocks — one consistent visual language across every motif.
  // node: small filled circle, surface-card fill + clay stroke.
  const Node = ({ x, y, r = 4.5, sw = 2, cls, style }) => (
    <circle cx={x} cy={y} r={r} fill="var(--surface-card)" stroke="var(--clay)"
      strokeWidth={sw} className={cls} style={style} />
  );

  // caption: small mono label, bottom-left by default.
  const Caption = ({ x = 22, y = 170, anchor = "start", fill = "var(--text-subtle)", children, cls }) => (
    <text x={x} y={y} textAnchor={anchor} fill={fill} className={cls}
      style={{ font: "600 9px var(--font-mono)" }}>{children}</text>
  );

  // small flow legend chip (green→deep-teal gradient bar + label).
  const FlowLegend = ({ x = 20, y = 160, label = "flow" }) => (
    <g transform={`translate(${x},${y})`}>
      <rect x="0" y="0" width="92" height="7" rx="3.5" fill="url(#zwm-legend)" />
      <text x="100" y="7" fill="var(--text-muted)" style={{ font: "600 9px var(--font-mono)" }}>{label}</text>
    </g>
  );

  const LegendDefs = () => (
    <defs>
      <linearGradient id="zwm-legend" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="var(--flow-0)" />
        <stop offset="0.5" stopColor="var(--flow-3)" />
        <stop offset="1" stopColor="var(--flow-6)" />
      </linearGradient>
    </defs>
  );

  // ---- Concrete constitutive modelling + FE simulation ----
  // (FRP-confined & rubberised concrete; 9 m drop / near-field blast.)
  function Fea() {
    const cols = 7, rows = 5, x0 = 26, y0 = 66, cw = 16, ch = 15;
    const cells = [];
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      // stress concentration radiates from the top-centre impact point
      const dx = (c - (cols - 1) / 2) / 2;
      const dy = r * 0.9;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const lvl = Math.max(0, 6 - Math.round(dist * 1.6));
      cells.push({ x: x0 + c * cw, y: y0 + r * ch, lvl, d: dist * 0.18 });
    }
    const bw = cols * cw, bh = rows * ch;
    const cxTop = x0 + bw / 2;
    // stress–strain curve: rise, peak, post-peak softening (concrete).
    const curve = "M0,46 C7,32 12,14 20,9 C27,5 31,17 38,27 C45,35 52,40 62,42";
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        {/* meshed specimen with stress contour (flow scale) */}
        {cells.map((c, i) => (
          <rect key={i} x={c.x} y={c.y} width={cw} height={ch}
            fill={`var(--flow-${c.lvl})`} stroke="var(--surface-card)" strokeWidth="0.8"
            className="zwm-fea" style={{ animationDelay: `${c.d}s` }} />
        ))}
        <rect x={x0} y={y0} width={bw} height={bh} fill="none" stroke="var(--ink-700)" strokeWidth="1.5" />
        {/* impact / load arrows on top */}
        {[-1, 0, 1].map((k, i) => {
          const x = cxTop + k * 22;
          return (
            <g key={`l${i}`} className="zwm-bob" style={{ animationDelay: `${i * 0.22}s` }}>
              <line x1={x} y1="40" x2={x} y2={y0 - 4} stroke="var(--clay)" strokeWidth="2.2" />
              <path d={`M${x - 4},${y0 - 10} L${x},${y0 - 3} L${x + 4},${y0 - 10}`} fill="var(--clay)" />
            </g>
          );
        })}
        {/* fixed support hatching at base */}
        <line x1={x0 - 4} y1={y0 + bh + 3} x2={x0 + bw + 4} y2={y0 + bh + 3} stroke="var(--ink-600)" strokeWidth="2" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1={x0 + i * (bw / 7)} y1={y0 + bh + 3} x2={x0 + i * (bw / 7) - 6} y2={y0 + bh + 11} stroke="var(--ink-600)" strokeWidth="1.4" />
        ))}
        {/* inset σ–ε curve (constitutive model) */}
        <g transform="translate(206,92)">
          <rect x="-8" y="-6" width="86" height="66" rx="3" fill="var(--surface-card)" stroke="var(--border-color)" strokeWidth="1" />
          <line x1="0" y1="50" x2="66" y2="50" stroke="var(--ink-500)" strokeWidth="1.2" />
          <line x1="0" y1="50" x2="0" y2="2" stroke="var(--ink-500)" strokeWidth="1.2" />
          <path d={curve} fill="none" stroke="var(--clay)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle r="2.8" fill="var(--clay)" className="zwm-dot" />
          <text x="33" y="58" textAnchor="middle" fill="var(--text-subtle)" style={{ font: "600 7px var(--font-mono)" }}>σ–ε model</text>
        </g>
        <Caption>fe stress field</Caption>
        <Caption x={298} anchor="end" fill="var(--text-muted)">9 m drop · blast</Caption>
      </svg>
    );
  }

  // ---- Structural assessment + AI crack detection ----
  // crack path + phase-field smeared band + scanning detection box.
  function Crack() {
    const d = "M40,46 L72,62 L96,54 L122,84 L152,74 L178,104 L208,96 L236,128 L266,120 L290,144";
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        {/* phase-field smeared band (soft halo around the crack) */}
        <path d={d} fill="none" stroke="var(--flow-3)" strokeWidth="13" strokeLinecap="round"
          strokeLinejoin="round" opacity="0.16" className="zwm-soft" />
        <path d={d} fill="none" stroke="var(--flow-3)" strokeWidth="7" strokeLinecap="round"
          strokeLinejoin="round" opacity="0.26" />
        {/* the discrete crack — base + animated flow */}
        <path d={d} fill="none" stroke="var(--ink-600)" strokeWidth="2.6" strokeLinecap="round" opacity="0.5" />
        <path d={d} fill="none" stroke="var(--flow-4)" strokeWidth="2.2" strokeLinecap="round"
          className="zwm-flow" strokeDasharray="6 9" />
        {/* AI detection box riding the crack */}
        <g className="zwm-scanbox">
          <rect x="-26" y="-20" width="52" height="40" rx="2" fill="none"
            stroke="var(--clay)" strokeWidth="1.8" />
          <line x1="-26" y1="-12" x2="-20" y2="-12" stroke="var(--clay)" strokeWidth="1.8" />
          <line x1="-26" y1="-20" x2="-26" y2="-14" stroke="var(--clay)" strokeWidth="1.8" />
          <line x1="20" y1="14" x2="26" y2="14" stroke="var(--clay)" strokeWidth="1.8" />
          <line x1="26" y1="8" x2="26" y2="14" stroke="var(--clay)" strokeWidth="1.8" />
        </g>
        {/* left-to-right sweep tint */}
        <rect className="zwm-sweepx" x="0" y="0" width="20" height="180" fill="var(--clay-100)" opacity="0.5" />
        <Caption fill="var(--clay)">ai · crack detect</Caption>
        <Caption x={298} anchor="end" fill="var(--text-muted)">phase-field</Caption>
      </svg>
    );
  }

  // ---- Dataset alignment (GDMS ⇄ Confirm) ----
  // two offset rows snap into vertical alignment; −99% deviation.
  function Align() {
    const xs = [44, 90, 136, 182, 228, 274];
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        {/* row labels */}
        <text x="20" y="62" fill="var(--slate)" style={{ font: "700 9px var(--font-mono)" }}>GDMS</text>
        <text x="20" y="128" fill="var(--flow-1)" style={{ font: "700 9px var(--font-mono)" }}>Confirm</text>
        {/* alignment connectors — blink in once aligned */}
        {xs.map((x, i) => (
          <line key={`c${i}`} x1={x} y1="72" x2={x} y2="108" stroke="var(--sage)" strokeWidth="1.8"
            strokeDasharray="3 4" className="zwm-blink" style={{ animationDelay: `${i * 0.12}s` }} />
        ))}
        {/* top row slides into alignment */}
        <g className="zwm-align">
          {xs.map((x, i) => (
            <rect key={`a${i}`} x={x - 11} y="58" width="22" height="14" rx="2"
              fill="var(--surface-card)" stroke="var(--slate)" strokeWidth="1.6" />
          ))}
        </g>
        {/* bottom row fixed */}
        {xs.map((x, i) => (
          <rect key={`b${i}`} x={x - 11} y="108" width="22" height="14" rx="2"
            fill="var(--surface-card)" stroke="var(--flow-1)" strokeWidth="1.6" />
        ))}
        <text x="160" y="30" textAnchor="middle" fill="var(--sage)"
          style={{ font: "700 12px var(--font-mono)" }} className="zwm-blink">✓ aligned</text>
        <Caption x={298} anchor="end" fill="var(--text-muted)">−99% deviation</Caption>
      </svg>
    );
  }

  // ---- corenet: a prioritised "core" network over a fuller graph ----
  function Corenet() {
    // a fuller candidate street grid with the prioritised "core" network on top
    const cols = [40, 96, 152, 208, 264], rows = [50, 96, 142];
    const full = [];
    rows.forEach((y) => { for (let i = 0; i < cols.length - 1; i++) full.push([cols[i], y, cols[i + 1], y]); });
    cols.forEach((x) => { for (let j = 0; j < rows.length - 1; j++) full.push([x, rows[j], x, rows[j + 1]]); });
    const core = ["M40,96 L96,96 L96,50 L208,50 L208,142 L264,142", "M152,50 L152,96"];
    const coreNodes = [[40, 96], [96, 96], [96, 50], [152, 50], [208, 50], [264, 142], [208, 142], [152, 96]];
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        {/* fuller candidate network (faint) */}
        {full.map((e, i) => (
          <line key={`f${i}`} x1={e[0]} y1={e[1]} x2={e[2]} y2={e[3]}
            stroke="var(--ink-500)" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
        ))}
        {/* prioritised core — white casing + clay + animated flow */}
        {core.map((d, i) => (<path key={`cc${i}`} d={d} fill="none" stroke="var(--surface-card)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />))}
        {core.map((d, i) => (<path key={`cs${i}`} d={d} fill="none" stroke="var(--clay)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />))}
        {core.map((d, i) => (
          <path key={`cf${i}`} d={d} fill="none" stroke="var(--clay)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="4 12" className="zwm-flow" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
        {coreNodes.map((n, i) => (<Node key={i} x={n[0]} y={n[1]} r={4.6} sw={2.2} />))}
        <text x="22" y="166" fill="var(--text-subtle)" style={{ font: "600 9px var(--font-mono)" }}>
          <tspan fill="var(--ink-500)">··· full</tspan><tspan fill="var(--clay)" dx="12">— core</tspan>
        </text>
        <Caption x={298} anchor="end" fill="var(--text-muted)">corenet · 188×</Caption>
      </svg>
    );
  }

  // ---- parenx: braided road + roundabout  →  one clean centreline ----
  function Simplify() {
    const tangle = [
      "M24,72 L64,72 L92,56 L150,56",
      "M24,84 L66,84 L94,68 L150,68",
      "M24,96 L68,96 L96,80 L150,80",
    ];
    const out = "M186,68 L214,68 L240,92 L300,92";
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        {/* LEFT — tangled parallel carriageways */}
        {tangle.map((d, i) => (
          <path key={`t${i}`} d={d} fill="none" stroke="var(--ink-600)" strokeWidth="2" strokeLinecap="round"
            strokeDasharray="7 6" className="zwm-flow" style={{ animationDelay: `${i * 0.25}s` }} />
        ))}
        {/* a roundabout with three stubs (complex junction) */}
        <circle cx="70" cy="124" r="11" fill="none" stroke="var(--ink-600)" strokeWidth="2" />
        <line x1="70" y1="113" x2="70" y2="100" stroke="var(--ink-600)" strokeWidth="2" strokeLinecap="round" />
        <line x1="59" y1="124" x2="42" y2="124" stroke="var(--ink-600)" strokeWidth="2" strokeLinecap="round" />
        <line x1="81" y1="124" x2="100" y2="124" stroke="var(--ink-600)" strokeWidth="2" strokeLinecap="round" />
        {/* simplify arrow */}
        <line x1="156" y1="80" x2="178" y2="80" stroke="var(--clay)" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M172,75 L180,80 L172,85" fill="none" stroke="var(--clay)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        {/* RIGHT — single clean centreline (casing + clay) */}
        <path d={out} fill="none" stroke="var(--surface-card)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d={out} fill="none" stroke="var(--clay)" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
        <Node x={186} y={68} r={4.4} /><Node x={300} y={92} r={4.4} />
        <text x="20" y="150" fill="var(--ink-600)" style={{ font: "600 9px var(--font-mono)" }}>tangled</text>
        <text x="248" y="118" fill="var(--clay)" style={{ font: "700 9px var(--font-mono)" }}>centreline</text>
        <Caption x={298} anchor="end" fill="var(--text-muted)">parenx</Caption>
      </svg>
    );
  }

  // ---- EV: charging stations sited on a route + travelling EV + battery ----
  function Ev() {
    const route = "M28,140 Q90,140 120,96 T210,72 Q260,60 296,94";
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        {/* faint branch roads (network context) */}
        <path d="M120,96 L120,150" stroke="var(--ink-500)" strokeWidth="1.6" opacity="0.4" strokeLinecap="round" />
        <path d="M210,72 L252,116" stroke="var(--ink-500)" strokeWidth="1.6" opacity="0.4" strokeLinecap="round" />
        {/* the route — casing + flow */}
        <path d={route} fill="none" stroke="var(--surface-card)" strokeWidth="6.5" strokeLinecap="round" />
        <path d={route} fill="none" stroke="var(--flow-1)" strokeWidth="3" strokeLinecap="round" />
        <path d={route} fill="none" stroke="var(--flow-1)" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 10" className="zwm-flow" />
        {/* charging stations sited on the network */}
        {[[120,96],[210,72],[296,94]].map((p,i)=>(
          <g key={i}>
            <circle cx={p[0]} cy={p[1]} r="4" fill="none" stroke="var(--sage)" strokeWidth="2"
              className="zwm-ring" style={{ animationDelay: `${i*0.55}s` }} />
            <circle cx={p[0]} cy={p[1]} r="3" fill="var(--sage)" stroke="var(--surface-card)" strokeWidth="1.2" />
          </g>
        ))}
        {/* origin + travelling EV */}
        <Node x={28} y={140} r={4.4} />
        <circle r="5.5" fill="var(--surface-card)" stroke="var(--clay)" strokeWidth="2.4" className="zwm-ev" />
        {/* filling battery */}
        <g transform="translate(24,26)">
          <rect x="0" y="0" width="46" height="20" rx="3" fill="var(--surface-card)" stroke="var(--ink-600)" strokeWidth="2" />
          <rect x="46" y="6" width="4" height="8" rx="1" fill="var(--ink-600)" />
          <rect x="3" y="3" width="40" height="14" rx="1.5" fill="var(--sage)" className="zwm-charge" />
        </g>
        <text x="82" y="40" fill="var(--sage)" style={{ font: "700 10px var(--font-mono)" }} className="zwm-blink">⚡ charging</text>
        <Caption x={298} anchor="end" fill="var(--text-muted)">ev · charge network</Caption>
      </svg>
    );
  }

  // ---- Unpaved-road multimodal AI: satellite + sensor + VLM → ML core → classes ----
  function Multimodal() {
    const mods = [
      { y: 44, c: "var(--slate)", label: "SAT" },
      { y: 90, c: "var(--sage)", label: "SENSOR" },
      { y: 136, c: "var(--heather)", label: "VLM" },
    ];
    const cx = 190, cy = 90;
    const classes = [
      { x: 240, lvl: 0, label: "good" },
      { x: 258, lvl: 2, label: "fair" },
      { x: 276, lvl: 3, label: "poor" },
      { x: 294, lvl: 4, label: "bad" },
    ];
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        {/* input → core flow lines */}
        {mods.map((m, i) => (
          <path key={`l${i}`} d={`M100,${m.y} C140,${m.y} ${cx - 40},${cy} ${cx - 18},${cy}`}
            fill="none" stroke={m.c} strokeWidth="2" strokeDasharray="6 7" className="zwm-flow"
            style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
        {/* input modalities */}
        {mods.map((m, i) => (
          <g key={`m${i}`}>
            <rect x="22" y={m.y - 14} width="78" height="28" rx="4" fill="var(--surface-card)" stroke={m.c} strokeWidth="1.6" />
            <circle cx="39" cy={m.y} r="4.5" fill={m.c} className="zwm-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
            <text x="52" y={m.y + 4} fill="var(--text-body)" style={{ font: "700 10px var(--font-mono)" }}>{m.label}</text>
          </g>
        ))}
        {/* ML core */}
        <circle cx={cx} cy={cy} r="16" fill="none" stroke="var(--clay)" strokeWidth="1.5" className="zwm-ring" />
        <circle cx={cx} cy={cy} r="17" fill="var(--clay-100)" stroke="var(--clay)" strokeWidth="2" />
        <text x={cx} y={cy + 4} textAnchor="middle" fill="var(--clay)" style={{ font: "700 10px var(--font-mono)" }}>ML</text>
        {/* core → output */}
        <line x1={cx + 17} y1={cy} x2="232" y2={cy} stroke="var(--clay)" strokeWidth="2" strokeDasharray="6 7" className="zwm-flow" />
        {/* road-condition classes */}
        <text x="267" y="58" textAnchor="middle" fill="var(--text-muted)" style={{ font: "600 9px var(--font-mono)" }}>condition</text>
        {classes.map((c, i) => (
          <rect key={`c${i}`} x={c.x} y="74" width="14" height="36" rx="2" className="zwm-class"
            style={{ animationDelay: `${i * 0.5}s` }} fill={`var(--flow-${c.lvl})`} />
        ))}
        <Caption fill="var(--clay)">multimodal ml</Caption>
        <Caption x={298} anchor="end" fill="var(--sage)" cls="zwm-blink">93.2% acc</Caption>
      </svg>
    );
  }

  // ---- GIS + AI flood-risk over a road ----
  function FloodGis() {
    const road = "M10,108 Q90,96 160,100 T310,92";
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        {/* rising flood water */}
        <g className="zwm-tide">
          <rect x="0" y="120" width="320" height="80" fill="var(--slate)" opacity="0.22" />
          <path className="zwm-wave" d="M-80,120 q20,-6 40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0" fill="none" stroke="var(--slate)" strokeWidth="2" opacity="0.6" />
        </g>
        {/* road over the water */}
        <path d={road} fill="none" stroke="var(--ink-600)" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
        <path d={road} fill="none" stroke="var(--kraft)" strokeWidth="1.6" strokeDasharray="8 8" className="zwm-flow" />
        {/* risk markers (warning diamonds) along the road */}
        {[[74, 99], [156, 100], [240, 96]].map((p, i) => (
          <g key={i} className="zwm-pulse" style={{ transformOrigin: `${p[0]}px ${p[1]}px`, animationDelay: `${i * 0.5}s` }}>
            <path d={`M${p[0]},${p[1] - 8} L${p[0] + 7},${p[1]} L${p[0]},${p[1] + 8} L${p[0] - 7},${p[1]} Z`}
              fill="var(--surface-card)" stroke="var(--flow-4)" strokeWidth="2" />
            <line x1={p[0]} y1={p[1] - 4} x2={p[0]} y2={p[1] + 1} stroke="var(--flow-4)" strokeWidth="1.6" />
            <circle cx={p[0]} cy={p[1] + 4} r="0.9" fill="var(--flow-4)" />
          </g>
        ))}
        {/* GIS·AI tag */}
        <g transform="translate(20,22)">
          <rect x="0" y="0" width="48" height="20" rx="3" fill="var(--clay-100)" stroke="var(--clay)" strokeWidth="1.5" />
          <text x="24" y="14" textAnchor="middle" fill="var(--clay)" style={{ font: "700 10px var(--font-mono)" }}>GIS·AI</text>
        </g>
        <text x="304" y="30" textAnchor="end" fill="var(--flow-4)" style={{ font: "700 10px var(--font-mono)" }} className="zwm-blink">⚠ flood risk</text>
      </svg>
    );
  }

  // ---- NPT Scotland: a small road network coloured by flow ----
  function NptMap() {
    // simplified city network drawn as an octolinear metro / transit diagram
    const lines = [
      { d: "M24,96 L108,96 L132,72 L192,72 L288,72", c: 2 },            // cyan spine
      { d: "M108,24 L108,96 L84,120 L84,168", c: 4 },                   // orange N–S
      { d: "M192,168 L192,72 L240,24 L288,24", c: 5 },                  // purple
      { d: "M24,120 L84,120 L108,96 L156,96 L180,120 L264,120", c: 0 }, // green cross-town
    ];
    const stops = [
      [24, 96, 2], [288, 72, 2], [156, 72, 2], [252, 72, 2],
      [108, 24, 4], [84, 168, 4],
      [192, 168, 5], [288, 24, 5],
      [24, 120, 0], [264, 120, 0],
    ];
    const interchange = [[108, 96], [192, 72], [192, 120]];
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        {/* metro lines — white casing gives clean over/under at crossings */}
        {lines.map((l, i) => (
          <g key={`l${i}`}>
            <path d={l.d} fill="none" stroke="var(--surface-card)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d={l.d} fill="none" stroke={`var(--flow-${l.c})`} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        ))}
        {/* a small service pip running along each line */}
        {lines.map((l, i) => (
          <path key={`p${i}`} d={l.d} fill="none" stroke={`var(--flow-${l.c})`} strokeWidth="5"
            strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1.5 24"
            className="zwm-flow" style={{ animationDelay: `${i * 0.25}s` }} />
        ))}
        {/* regular stops (line-coloured ticks) */}
        {stops.map((s, i) => (
          <circle key={`s${i}`} cx={s[0]} cy={s[1]} r="3" fill="var(--surface-card)"
            stroke={`var(--flow-${s[2]})`} strokeWidth="1.8" />
        ))}
        {/* interchange stations (white disc + clay ring) */}
        {interchange.map((p, i) => (
          <Node key={`x${i}`} x={p[0]} y={p[1]} r={6} sw={3} />
        ))}
        <Caption x={298} anchor="end" fill="var(--text-muted)">npt · scotland</Caption>
      </svg>
    );
  }

  // ---- stplanr: straight origin→destination desire line vs the actual route ----
  function Desire() {
    const O = [56, 148], D = [248, 52];
    const hs = [52, 84, 116, 148], vs = [56, 104, 152, 200, 248];
    const route = "M56,148 L104,148 L104,84 L200,84 L200,52 L248,52";
    const desire = `M${O[0]},${O[1]} L${D[0]},${D[1]}`;
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        {/* faint street grid */}
        {hs.map((y, i) => (<line key={`h${i}`} x1="30" y1={y} x2="290" y2={y} stroke="var(--ink-500)" strokeWidth="1" opacity="0.3" />))}
        {vs.map((x, i) => (<line key={`v${i}`} x1={x} y1="36" x2={x} y2="156" stroke="var(--ink-500)" strokeWidth="1" opacity="0.3" />))}

        {/* straight desire line — as the crow flies */}
        <path d={desire} fill="none" stroke="var(--heather)" strokeWidth="2.4" strokeDasharray="7 6" strokeLinecap="round" />
        <text x="150" y="116" textAnchor="middle" fill="var(--heather)" style={{ font: "700 9px var(--font-mono)" }}>desire</text>

        {/* actual route along the streets — casing + bold animated flow */}
        <path d={route} fill="none" stroke="var(--surface-card)" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d={route} fill="none" stroke="var(--flow-4)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
        <path d={route} fill="none" stroke="var(--flow-4)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="5 11" className="zwm-flow" />
        <text x="214" y="46" textAnchor="middle" fill="var(--flow-4)" style={{ font: "700 9px var(--font-mono)" }}>route</text>

        {/* origin + destination */}
        <circle cx={O[0]} cy={O[1]} r="5.5" fill="var(--sage)" stroke="var(--surface-card)" strokeWidth="2" />
        <circle cx={D[0]} cy={D[1]} r="5.5" fill="var(--clay)" stroke="var(--surface-card)" strokeWidth="2" />
        <text x={O[0]} y={O[1] + 16} textAnchor="middle" fill="var(--sage)" style={{ font: "700 10px var(--font-mono)" }}>O</text>
        <text x={D[0]} y={D[1] - 9} textAnchor="middle" fill="var(--clay)" style={{ font: "700 10px var(--font-mono)" }}>D</text>

        <Caption x={298} anchor="end" fill="var(--text-muted)">stplanr · od → route</Caption>
      </svg>
    );
  }

  // ---- anime: line-segment overlap matching (mirrors paper figure) ----
  function Match() {
    // two near-parallel road networks matched vertex-to-vertex (integration + enrichment)
    const target = "M40,58 L110,70 L180,62 L250,82";
    const source = "M44,80 L114,92 L184,84 L254,104";
    const links = [[40, 58, 44, 80], [110, 70, 114, 92], [180, 62, 184, 84], [250, 82, 254, 104]];
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />
        {/* match connectors linking corresponding vertices */}
        {links.map((l, i) => (
          <line key={`k${i}`} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="var(--sage)"
            strokeWidth="1.8" strokeDasharray="2 3" className="zwm-blink" style={{ animationDelay: `${i * 0.18}s` }} />
        ))}
        {/* target network (slate) */}
        <path d={target} fill="none" stroke="var(--slate)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d={target} fill="none" stroke="var(--slate)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 10" className="zwm-flow" />
        {/* source network (orange) */}
        <path d={source} fill="none" stroke="var(--book-cloth)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d={source} fill="none" stroke="var(--book-cloth)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 10" className="zwm-flow" style={{ animationDelay: "0.4s" }} />
        {/* vertices */}
        {[[40, 58], [110, 70], [180, 62], [250, 82]].map((p, i) => (<circle key={`tv${i}`} cx={p[0]} cy={p[1]} r="3.4" fill="var(--slate)" />))}
        {[[44, 80], [114, 92], [184, 84], [254, 104]].map((p, i) => (<circle key={`sv${i}`} cx={p[0]} cy={p[1]} r="3.4" fill="var(--book-cloth)" />))}
        <text x="40" y="48" fill="var(--slate)" style={{ font: "700 10px var(--font-mono)" }}>target</text>
        <text x="258" y="118" textAnchor="end" fill="var(--book-cloth)" style={{ font: "700 10px var(--font-mono)" }}>source</text>
        <text x="150" y="140" textAnchor="middle" fill="var(--sage)" style={{ font: "700 9px var(--font-mono)" }} className="zwm-blink">⇄ matched</text>
        <Caption x={298} anchor="end" fill="var(--text-muted)">anime · 1000×</Caption>
      </svg>
    );
  }

  // ---- Seismic & geotechnical: benched rock slope on a shaking table ----
  function Seismic() {
    // benched / stepped rock slope (descending steps, left→right)
    const slope = "M52,140 L96,140 L96,118 L132,118 L132,96 L168,96 L168,74 L204,74 L204,52 L248,52";
    // accelerometer positions climbing the slope
    const acc = [[96,118],[132,96],[168,74],[204,52]];
    return wrap(
      <svg viewBox={VB} width="100%" style={{ display: "block" }}>
        <Grid /><rect width="320" height="180" fill="url(#zwm-grid)" />

        {/* shaking-table platform (oscillates horizontally) */}
        <g className="zwm-shake">
          {/* rock-slope body */}
          <path d={`${slope} L248,152 L52,152 Z`} fill="var(--surface-card)" stroke="var(--ink-700)" strokeWidth="1.5" strokeLinejoin="round" />
          {/* bench risers (flow-tinted strata hints) */}
          <line x1="96" y1="118" x2="96" y2="140" stroke="var(--flow-3)" strokeWidth="2" opacity="0.55" />
          <line x1="132" y1="96" x2="132" y2="118" stroke="var(--flow-3)" strokeWidth="2" opacity="0.55" />
          <line x1="168" y1="74" x2="168" y2="96" stroke="var(--flow-4)" strokeWidth="2" opacity="0.55" />
          <line x1="204" y1="52" x2="204" y2="74" stroke="var(--flow-4)" strokeWidth="2" opacity="0.55" />

          {/* crest failure / displacement — a sliding wedge at the top */}
          <path d="M204,52 L248,52 L248,46 L210,40 Z" fill="var(--flow-4)" opacity="0.35"
            className="zwm-slip" style={{ transformOrigin: "226px 49px" }} />
          <path d="M204,52 L210,40" stroke="var(--flow-4)" strokeWidth="1.6" strokeDasharray="3 3" opacity="0.8" />

          {/* accelerometer dots up the slope */}
          {acc.map((p, i) => (
            <Node key={i} x={p[0]} y={p[1] - 4} r={3.6} sw={1.8} cls="zwm-pulse"
              style={{ animationDelay: `${i * 0.35}s` }} />
          ))}

          {/* table deck */}
          <rect x="40" y="152" width="220" height="8" rx="2" fill="var(--surface-raised)" stroke="var(--ink-600)" strokeWidth="1.5" />
        </g>

        {/* support feet (fixed) + base */}
        <line x1="36" y1="168" x2="264" y2="168" stroke="var(--ink-600)" strokeWidth="2" />
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1={48 + i * 34} y1="168" x2={42 + i * 34} y2="176" stroke="var(--ink-600)" strokeWidth="1.4" />
        ))}

        {/* seismic wave input arrow (sine pulse → table) */}
        <g className="zwm-seis">
          <path d="M276,160 q6,-10 12,0 t12,0 t12,0" fill="none" stroke="var(--clay)" strokeWidth="2" />
          <path d="M276,160 L268,160 M268,160 L272,156 M268,160 L272,164" stroke="var(--clay)" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
        <text x="300" y="146" textAnchor="end" fill="var(--clay)" style={{ font: "700 9px var(--font-mono)" }}>input</text>

        <Caption y={14} fill="var(--text-subtle)">shaking table</Caption>
        <Caption x={298} y={14} anchor="end" fill="var(--text-muted)">rock slope</Caption>
      </svg>
    );
  }

  const MOTIFS = {
    fea: Fea, crack: Crack, align: Align, corenet: Corenet, simplify: Simplify,
    ev: Ev, multimodal: Multimodal, floodgis: FloodGis, nptmap: NptMap, desire: Desire,
    match: Match, seismic: Seismic,
  };

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
          @keyframes zwm-sweepx { 0%{transform:translateX(-24px)} 100%{transform:translateX(320px)} }
          @keyframes zwm-pulse { 0%,100%{ r:3.6; opacity:1 } 50%{ r:6; opacity:.55 } }
          @keyframes zwm-bob { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(5px) } }
          @keyframes zwm-align { 0%,16%{ transform: translateY(8px) translateX(14px) } 50%,70%{ transform: translateY(0) translateX(0) } 100%{ transform: translateY(8px) translateX(14px) } }
          @keyframes zwm-charge { 0%{ width:4px } 70%,100%{ width:40px } }
          @keyframes zwm-ev {
            0%{ transform: translate(28px,140px) } 30%{ transform: translate(120px,96px) }
            65%{ transform: translate(210px,72px) } 100%{ transform: translate(296px,94px) }
          }
          @keyframes zwm-class { 0%{ opacity:.35 } 50%{ opacity:1 } 100%{ opacity:.35 } }
          @keyframes zwm-ring { 0%{ r: 4; opacity: .7 } 100%{ r: 16; opacity: 0 } }
          @keyframes zwm-tide { 0%,100%{ transform: translateY(14px) } 50%{ transform: translateY(2px) } }
          @keyframes zwm-wave { 0%{ transform: translateX(0) } 100%{ transform: translateX(80px) } }
          @keyframes zwm-overlap { 0%,100%{ opacity:.12 } 50%{ opacity:.32 } }
          @keyframes zwm-fea { 0%,100%{ opacity:.35 } 50%{ opacity:1 } }
          @keyframes zwm-soft { 0%,100%{ opacity:.1 } 50%{ opacity:.22 } }
          @keyframes zwm-scanbox {
            0%{ transform: translate(60px,54px) } 50%{ transform: translate(208px,112px) } 100%{ transform: translate(60px,54px) }
          }
          @keyframes zwm-collapse { 0%,100%{ transform: scaleY(1) } 50%{ transform: scaleY(0.42) } }
          @keyframes zwm-shake { 0%,100%{ transform: translateX(-2.5px) } 50%{ transform: translateX(2.5px) } }
          @keyframes zwm-slip { 0%,55%{ transform: translate(0,0) } 80%,100%{ transform: translate(5px,4px) } }
          @keyframes zwm-seis { 0%,100%{ opacity:.4 } 50%{ opacity:1 } }
          @keyframes zwm-dotmove {
            0%{ offset-distance: 0%; opacity: 0 } 6%{ opacity: 1 }
            65%{ offset-distance: 100%; opacity: 1 } 80%,100%{ offset-distance: 100%; opacity: 0 }
          }
          .zwm-flow    { animation: zwm-flow 1.1s linear infinite; }
          .zwm-scan    { animation: zwm-scan 2.6s ease-in-out infinite; }
          .zwm-blink   { animation: zwm-blink 1.1s steps(1) infinite; }
          .zwm-sweepx  { animation: zwm-sweepx 2.8s linear infinite; }
          .zwm-pulse   { animation: zwm-pulse 3s ease-in-out infinite; }
          .zwm-bob     { animation: zwm-bob 1.8s ease-in-out infinite; }
          .zwm-align   { animation: zwm-align 5s ease-in-out infinite; }
          .zwm-charge  { animation: zwm-charge 3.2s ease-in-out infinite; }
          .zwm-ev      { animation: zwm-ev 5.5s ease-in-out infinite; }
          .zwm-class   { animation: zwm-class 3s ease-in-out infinite; }
          .zwm-ring    { animation: zwm-ring 2.2s ease-out infinite; }
          .zwm-tide    { animation: zwm-tide 4.5s ease-in-out infinite; }
          .zwm-wave    { animation: zwm-wave 2s linear infinite; }
          .zwm-overlap { animation: zwm-overlap 2.4s ease-in-out infinite; }
          .zwm-fea     { animation: zwm-fea 2.6s ease-in-out infinite; }
          .zwm-soft    { animation: zwm-soft 2.6s ease-in-out infinite; }
          .zwm-scanbox { animation: zwm-scanbox 4.4s ease-in-out infinite; }
          .zwm-collapse{ animation: zwm-collapse 4s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
          .zwm-shake   { animation: zwm-shake 0.5s ease-in-out infinite; }
          .zwm-slip    { animation: zwm-slip 3.4s ease-in-out infinite; transform-box: fill-box; }
          .zwm-seis    { animation: zwm-seis 1.4s ease-in-out infinite; }
          .zwm-dot     { offset-path: path('M0,46 C7,32 12,14 20,9 C27,5 31,17 38,27 C45,35 52,40 62,42'); animation: zwm-dotmove 3s ease-in-out infinite; }
          @media (prefers-reduced-motion: reduce) {
            .zwm-flow, .zwm-scan, .zwm-blink, .zwm-sweepx, .zwm-pulse, .zwm-bob, .zwm-align,
            .zwm-charge, .zwm-ev, .zwm-class, .zwm-ring, .zwm-tide, .zwm-wave, .zwm-overlap,
            .zwm-fea, .zwm-soft, .zwm-scanbox, .zwm-collapse, .zwm-shake, .zwm-slip, .zwm-seis,
            .zwm-dot {
              animation: none !important;
            }
          }
        `}</style>
        {image ? <ImageScan image={image} alt={alt} /> : (MOTIFS[motif] ? React.createElement(MOTIFS[motif]) : null)}
      </React.Fragment>
    );
  }

  window.ProjectMotif = ProjectMotif;
})();
