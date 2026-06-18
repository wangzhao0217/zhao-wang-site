/* site-network.jsx — hero showpiece: a slideshow of REAL paper figures.
   Pulls every paper figure out of window.SITE (one slide per paper that
   carries an `img`), round-robins across projects so consecutive slides
   come from different research threads, and advances every 3 s with a
   crossfade. The active "command" is published via onScene so the terminal
   title bar stays in sync; each slide is captioned with the paper title +
   venue. Click the left/right of the frame to step; hover pauses; honours
   prefers-reduced-motion (no auto-advance, no transition). No fixed limit
   on the number of figures — it grows with the data. */

(function () {
  const SLIDE_MS = 3000;
  const FADE_MS = 360;

  // Collect figures grouped by project, then interleave round-robin so the
  // slideshow alternates themes (concrete → seismic → roads → networks …).
  function collectFigures() {
    const S = (typeof window !== "undefined" && window.SITE) || {};
    const groups = [];
    (S.parts || []).forEach((part) =>
      (part.projects || []).forEach((pr) => {
        const ps = (pr.papers || [])
          .filter((p) => p && p.img)
          .map((p) => {
            const file = (p.img.split("/").pop() || "");
            const slug = file.replace(/-1\.[a-z]+$/i, "").replace(/\.[a-z]+$/i, "");
            return { src: p.img, slug, emoji: p.emoji || "", title: p.title, venue: p.venue, year: p.year, imgAlt: p.imgAlt };
          });
        if (ps.length) groups.push(ps);
      })
    );
    const out = [];
    let k = 0, more = true;
    while (more) {
      more = false;
      groups.forEach((g) => { if (g[k]) { out.push(g[k]); more = true; } });
      k++;
    }
    return out;
  }

  function NetworkHero({ onScene }) {
    const lang = (typeof window !== "undefined" && window.useLang) ? window.useLang() : "en";
    const t = (v) => (window.tx ? window.tx(v, lang) : v);
    const figs = React.useMemo(collectFigures, []);
    const n = figs.length;

    const [idx, setIdx] = React.useState(0);
    const [show, setShow] = React.useState(true);
    const [paused, setPaused] = React.useState(false);
    const reduce = !!(typeof window !== "undefined" && window.matchMedia
      && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const cur = figs[idx] || {};
    const cmd = cur.slug ? `feh ~/papers/${cur.slug}.png` : "feh ~/papers";

    const go = React.useCallback((next) => {
      if (n < 1) return;
      const target = ((next % n) + n) % n;
      if (reduce) { setIdx(target); return; }
      setShow(false);
      setTimeout(() => { setIdx(target); setShow(true); }, FADE_MS);
    }, [n, reduce]);

    // keep the terminal title bar in sync with the current figure
    React.useEffect(() => { onScene && onScene(cmd); }, [cmd, onScene]);

    // preload the next image so the crossfade is seamless
    React.useEffect(() => {
      if (n < 2) return;
      const nx = figs[(idx + 1) % n];
      if (nx && nx.src) { const im = new Image(); im.src = nx.src; }
    }, [idx, n, figs]);

    // auto-advance every 3 s (paused on hover). Under reduced motion the swap
    // is instant (no crossfade, see go()) but still honours the 3 s cadence.
    React.useEffect(() => {
      if (paused || n < 2) return;
      const tmr = setTimeout(() => go(idx + 1), SLIDE_MS);
      return () => clearTimeout(tmr);
    }, [idx, paused, n, go]);

    if (!n) return null;

    return (
      <div
        style={{ position: "relative", width: "100%", lineHeight: 0, background: "var(--surface-sunken)" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <style>{`
          @keyframes zwhFill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
          .zwh-img { transition: opacity ${FADE_MS}ms var(--ease-out); }
          .zwh-bar { transform-origin: left center; animation: zwhFill ${SLIDE_MS}ms linear forwards; }
          @media (prefers-reduced-motion: reduce) {
            .zwh-img { transition: none; }
            .zwh-bar { animation: none; transform: scaleX(1); }
          }
        `}</style>

        {/* fixed-aspect stage; figures shown in full (contain) on a neutral ground */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "62 / 48", overflow: "hidden" }}>
          <img
            key={idx}
            src={cur.src}
            alt={t(cur.imgAlt) || t(cur.title) || "paper figure"}
            loading="eager"
            className="zwh-img"
            style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "contain", padding: "12px",
              opacity: show ? 1 : 0, background: "var(--surface-sunken)",
            }}
          />

          {/* navigation zones — click left to step back, right to step forward */}
          <button aria-label={lang === "zh" ? "上一张" : "previous figure"} onClick={() => go(idx - 1)}
            style={{ position: "absolute", left: 0, top: 0, bottom: 46, width: "38%", border: 0, background: "transparent", cursor: "pointer", padding: 0 }} />
          <button aria-label={lang === "zh" ? "下一张" : "next figure"} onClick={() => go(idx + 1)}
            style={{ position: "absolute", right: 0, top: 0, bottom: 46, width: "62%", border: 0, background: "transparent", cursor: "pointer", padding: 0 }} />

          {/* slide index (top-right) */}
          <span style={{
            position: "absolute", top: 8, right: 10, fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)",
            color: "#fff", background: "rgba(0,0,0,0.5)", padding: "1px 7px", borderRadius: 4, letterSpacing: "0.04em",
          }}>
            {String(idx + 1).padStart(2, "0")} <span style={{ opacity: 0.6 }}>/ {n}</span>
          </span>

          {/* caption — paper title + venue, over a dark scrim for legibility on any figure */}
          <figcaption style={{
            position: "absolute", left: 0, right: 0, bottom: 0, padding: "1.6rem 0.9rem 0.7rem",
            background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.82))",
            display: "flex", flexDirection: "column", gap: "0.15rem", pointerEvents: "none",
          }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>
              {cur.emoji ? cur.emoji + "  " : ""}{t(cur.title)}
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.72)" }}>
              {t(cur.venue)}
            </span>
          </figcaption>
        </div>

        {/* 3-second progress bar (restarts each slide; full + static when paused / reduced motion) */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 3, background: "var(--border-color)" }}>
          <div
            key={`${idx}-${paused ? "p" : "r"}`}
            className={paused || reduce ? "" : "zwh-bar"}
            style={{ height: "100%", width: "100%", background: "var(--clay)", transform: (paused || reduce) ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left center" }}
          />
        </div>
      </div>
    );
  }

  window.NetworkHero = NetworkHero;
})();
