/* site-hero.jsx — hero + stats band */
const HERO_NS = window.ZhaoWangResearchDesignSystem_65eff9;

function Hero() {
  const { Button, Stat } = HERO_NS;
  const S = window.SITE;
  const p = S.person;
  const lang = window.useLang();
  const t = (v) => window.tx(v, lang);

  return (
    <section id="top" style={{ position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(120% 80% at 85% -10%, var(--clay-100) 0%, transparent 55%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "relative", maxWidth: "var(--container-xl)", margin: "0 auto",
        padding: "clamp(3rem, 8vw, 6rem) var(--gutter) clamp(2.5rem, 5vw, 4rem)",
        display: "grid", gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
        gap: "clamp(2rem, 5vw, 4rem)", alignItems: "center",
      }} className="hero-grid">
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text-muted)", marginBottom: "0.9rem" }}>
            <span style={{ color: "var(--term-prompt)", fontWeight: 700 }}>zhao@leeds</span>:<span style={{ color: "var(--slate)" }}>~</span>$ whoami
          </div>

          <h1 style={{ fontSize: "clamp(2.4rem, 5.5vw, 3.6rem)", lineHeight: 1.05, margin: "0 0 0.5rem", letterSpacing: "-0.02em" }}>
            {lang === "zh" ? p.nameZh : p.name}
            <span className="zw-caret" aria-hidden="true" style={{
              display: "inline-block", width: "0.6ch", height: "1em", marginLeft: "0.15em",
              background: "var(--term-cursor)", transform: "translateY(0.12em)",
            }} />
          </h1>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.05rem, 2.2vw, 1.4rem)", lineHeight: 1.3, color: "var(--clay)", margin: "0 0 0.6rem", fontWeight: 600 }}>
            {t(p.role)}
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", lineHeight: 1.4, color: "var(--text-muted)", margin: "0 0 1.4rem", fontWeight: 500 }}>
            <span style={{ color: "var(--ink-500)" }}># </span>{t(p.affiliation)}
          </p>
          <p style={{ fontSize: "var(--text-md)", color: "var(--text-body)", maxWidth: "52ch", margin: "0 0 1.2rem", lineHeight: "var(--leading-relaxed)" }}>
            <span style={{ color: "var(--term-prompt)", fontWeight: 700 }}>$</span> <span style={{ color: "var(--ink-500)" }}>cat bio.txt</span><br />
            {t(p.tagline)}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.4rem" }}>
            <Button variant="primary" size="lg" href="#work" iconRight={<Icon name="arrow-right" />}>{t(S.ui.hero.seeWork)}</Button>
            <Button variant="secondary" size="lg" href={p.links.github} icon={<Icon name="github" />}>GitHub</Button>
            <Button variant="ghost" size="lg" href={p.links.scholar} icon={<Icon name="mortarboard-fill" />}>{t(S.ui.hero.scholar)}</Button>
          </div>
        </div>

        <figure style={{ margin: 0, position: "relative" }}>
          <div style={{
            borderRadius: "var(--radius-lg)", overflow: "hidden",
            border: "1px solid var(--border-strong)", boxShadow: "var(--shadow-lg)",
            background: "var(--surface-card)",
          }}>
            {/* terminal pane title bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 0.8rem", borderBottom: "1px solid var(--border-color)", background: "var(--surface-raised)" }}>
              <span style={{ display: "inline-flex", gap: "0.4rem" }}>
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F56" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FFBD2E" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#27C93F" }} />
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", marginLeft: "0.4rem" }}>
                {lang === "zh" ? "rnet --watch ~/路网" : "rnet --watch ~/network"}
              </span>
            </div>
            <window.NetworkHero />
          </div>
          <figcaption style={{
            position: "absolute", bottom: "-0.8rem", left: "0.9rem",
            display: "flex", alignItems: "center", gap: "0.5rem",
            background: "var(--surface-card)", border: "1px solid var(--border-strong)",
            borderRadius: "var(--radius-sm)", padding: "0.35rem 0.8rem", boxShadow: "var(--shadow-md)",
          }}>
            <span style={{ width: 14, height: 10, borderRadius: 2, background: "var(--flow-gradient)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
              {lang === "zh" ? "路网流量 · 实时" : "route flow · live"}
            </span>
          </figcaption>
        </figure>
      </div>

      <div style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", background: "var(--surface-raised)" }}>
        <div style={{
          maxWidth: "var(--container-xl)", margin: "0 auto", padding: "1.75rem var(--gutter)",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem",
        }} className="stats-grid">
          {S.stats.map((s, i) => <Stat key={i} value={s.value} label={t(s.label)} sublabel={t(s.sublabel)} />)}
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
