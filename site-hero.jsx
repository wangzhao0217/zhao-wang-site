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
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.2rem" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--sage)", boxShadow: "0 0 0 4px var(--success-soft)" }} />
            <span style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-muted)" }}>
              {t(S.ui.hero.status)}
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2.6rem, 6vw, 4rem)", lineHeight: 1.02, margin: "0 0 0.4rem", letterSpacing: "-0.025em" }}>
            {lang === "zh" ? p.nameZh : p.name}
          </h1>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2.4vw, 1.55rem)", lineHeight: 1.25, color: "var(--clay-600)", margin: "0 0 0.5rem", fontWeight: 500 }}>
            {t(p.role)}
          </p>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-sm)", color: "var(--text-muted)", margin: "0 0 1.4rem", fontWeight: 600 }}>
            {t(p.affiliation)}
          </p>
          <p style={{ fontSize: "var(--text-md)", color: "var(--text-body)", maxWidth: "46ch", margin: "0 0 2rem", lineHeight: "var(--leading-relaxed)" }}>
            {t(p.tagline)}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <Button variant="primary" size="lg" href="#work" iconRight={<Icon name="arrow-right" />}>{t(S.ui.hero.seeWork)}</Button>
            <Button variant="secondary" size="lg" href={p.links.github} icon={<Icon name="github" />}>GitHub</Button>
            <Button variant="ghost" size="lg" href={p.links.scholar} icon={<Icon name="mortarboard-fill" />}>{t(S.ui.hero.scholar)}</Button>
          </div>
        </div>

        <figure style={{ margin: 0, position: "relative" }}>
          <div style={{
            borderRadius: "var(--radius-xl)", overflow: "hidden",
            border: "1px solid var(--border-color)", boxShadow: "var(--shadow-lg)",
            background: "var(--surface-card)", transform: "rotate(-1.2deg)",
          }}>
            <img src="assets/npt-scotland.png" alt="Cycle route network coloured by flow, Edinburgh"
                 style={{ width: "100%", display: "block" }} />
          </div>
          <figcaption style={{
            position: "absolute", bottom: "-0.9rem", left: "1rem",
            display: "flex", alignItems: "center", gap: "0.5rem",
            background: "var(--surface-card)", border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-pill)", padding: "0.4rem 0.9rem", boxShadow: "var(--shadow-md)",
          }}>
            <span style={{ width: 14, height: 14, borderRadius: 3, background: "var(--flow-gradient)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
              {lang === "zh" ? "苏格兰国家路网规划平台" : "Network Planning Tool · Scotland"}
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
