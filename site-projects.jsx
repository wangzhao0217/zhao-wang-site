/* site-projects.jsx — shared Section header, Career (3 parts), Talks video */
const PROJ_NS = window.ZhaoWangResearchDesignSystem_65eff9;

function Section({ id, eyebrow, title, intro, children, tint }) {
  return (
    <section id={id} style={{ background: tint || "transparent" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "clamp(3rem, 7vw, 5.5rem) var(--gutter)" }}>
        <div style={{ maxWidth: "var(--container-md)", marginBottom: "2.5rem" }}>
          {eyebrow ? (
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.9rem" }}>
              <span style={{ width: 24, height: 2, background: "var(--clay)" }} />
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--clay-600)" }}>{eyebrow}</span>
            </div>
          ) : null}
          <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)", margin: "0 0 0.6rem" }}>{title}</h2>
          {intro ? <p style={{ fontSize: "var(--text-md)", color: "var(--text-muted)", margin: 0, maxWidth: "62ch" }}>{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
window.Section = Section;

function PartBlock({ part, index }) {
  const { ProjectCard } = PROJ_NS;
  const lang = window.useLang();
  const t = (v) => window.tx(v, lang);
  const S = window.SITE;
  const mapLinks = (links) => (links || []).map((l) => ({ label: t(l.label), href: l.href, icon: <Icon name={l.icon} /> }));
  const mapTags = (tags) => (tags || []).map((tg) => ({ tone: tg.tone, label: t(tg.label) }));

  return (
    <div style={{ marginTop: index === 0 ? 0 : "clamp(3rem, 6vw, 5rem)" }}>
      {/* Part header */}
      <div style={{
        display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
        gap: "clamp(1.5rem, 4vw, 3rem)", alignItems: "start",
        paddingBottom: "2rem", marginBottom: "2rem", borderBottom: "1px solid var(--divider)",
      }} className="about-grid">
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.9rem", flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", fontWeight: 700,
              letterSpacing: "var(--tracking-wide)", color: "#fff", background: "var(--clay)",
              padding: "0.25rem 0.6rem", borderRadius: "var(--radius-pill)",
            }}>{part.num}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{part.period}</span>
          </div>
          <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", margin: "0.8rem 0 0", lineHeight: 1.15 }}>{t(part.title)}</h3>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", margin: "0.6rem 0 0" }}>{t(part.blurb)}</p>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-2xs)", fontWeight: 700, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-subtle)", marginBottom: "0.8rem" }}>
            {t(S.ui.sections.rolesLabel)}
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {part.roles.map((r, i) => (
              <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontSize: "var(--text-sm)", color: "var(--text-body)" }}>
                <span aria-hidden="true" style={{ color: "var(--clay)", marginTop: "0.15rem" }}><Icon name="dot" /></span>
                <span>{t(r)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
        {part.projects.map((pr, i) => (
          <ProjectCard key={i} image={pr.image} imageAlt={t(pr.imageAlt)} title={t(pr.title)}
            meta={t(pr.meta)} blurb={t(pr.blurb)} tags={mapTags(pr.tags)} links={mapLinks(pr.links)} />
        ))}
      </div>
    </div>
  );
}

function Career() {
  const S = window.SITE;
  const lang = window.useLang();
  const t = (v) => window.tx(v, lang);
  return (
    <Section id="work" eyebrow={t(S.ui.sections.workEyebrow)} title={t(S.ui.sections.workTitle)} intro={t(S.ui.sections.workIntro)}>
      {S.parts.map((part, i) => <PartBlock key={i} part={part} index={i} />)}
    </Section>
  );
}
window.Career = Career;

function Talks() {
  const { Badge } = PROJ_NS;
  const S = window.SITE;
  const t = (v) => window.tx(v, window.useLang());
  const lang = window.useLang();
  const tk = S.talk;
  const [playing, setPlaying] = React.useState(false);
  const hasVideo = !!tk.youtubeId;

  return (
    <Section id="talks" eyebrow={t(S.ui.sections.talksEyebrow)} title={t(S.ui.sections.talksTitle)}
      tint="var(--surface-raised)" intro={t(S.ui.sections.talksIntro)}>
      <figure style={{ margin: 0, borderRadius: "var(--radius-xl)", overflow: "hidden", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-lg)", background: "#000" }}>
        <div style={{ position: "relative", aspectRatio: "16 / 9", background: "var(--ink-900)" }}>
          {playing && hasVideo ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${tk.youtubeId}?autoplay=1`}
              title={t(tk.title)}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button onClick={() => hasVideo && setPlaying(true)} aria-label="Play video"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, padding: 0, cursor: hasVideo ? "pointer" : "default", background: "transparent" }}>
              <img src={tk.poster} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
              <span aria-hidden="true" style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
                <span style={{ width: 76, height: 76, borderRadius: "50%", background: "var(--clay)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, boxShadow: "var(--shadow-clay)" }}>
                  <Icon name="play-fill" />
                </span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-xs)", color: "var(--ivory)", opacity: 0.85, maxWidth: "40ch", textAlign: "center", padding: "0 1rem" }}>
                  {hasVideo ? (lang === "zh" ? "播放演讲" : "Play talk") : t(tk.note)}
                </span>
              </span>
            </button>
          )}
        </div>
        <figcaption style={{ padding: "1.2rem 1.5rem", background: "var(--surface-card)", display: "flex", gap: "1rem", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ minWidth: 0 }}>
            <h3 style={{ margin: "0 0 0.3rem", fontSize: "var(--text-lg)" }}>{t(tk.title)}</h3>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{t(tk.venue)}</p>
          </div>
          <Badge tone="clay" icon={<Icon name="award-fill" />}>{t(S.ui.pubs.best)}</Badge>
        </figcaption>
      </figure>
    </Section>
  );
}
window.Talks = Talks;
