/* site-projects.jsx — shared Section header, Career (3 parts), Talks video */
const PROJ_NS = window.ZhaoWangResearchDesignSystem_65eff9;

function Section({ id, eyebrow, title, intro, children, tint }) {
  return (
    <section id={id} style={{ background: tint || "transparent" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "clamp(3rem, 7vw, 5.5rem) var(--gutter)" }}>
        <div style={{ maxWidth: "var(--container-md)", marginBottom: "2.5rem" }}>
          {eyebrow ? (
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", marginBottom: "0.9rem", color: "var(--text-muted)" }}>
              <span style={{ color: "var(--term-prompt)", fontWeight: 700 }}>❯</span>{" "}
              <span style={{ color: "var(--text-body)" }}>{eyebrow}</span>
            </div>
          ) : null}
          <h2 style={{ fontSize: "clamp(1.7rem, 3.6vw, 2.4rem)", margin: "0 0 0.6rem", letterSpacing: "-0.01em" }}>
            <span style={{ color: "var(--clay)" }}># </span>{title}
          </h2>
          {intro ? <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", margin: 0, maxWidth: "64ch" }}>
            <span style={{ color: "var(--ink-500)" }}>{"// "}</span>{intro}
          </p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
window.Section = Section;

/* shared open/close state for the project detail modal */
const ProjectModalContext = React.createContext({ open: () => {} });
window.ProjectModalContext = ProjectModalContext;

function ProjectTile({ pr }) {
  const { Card, Badge } = PROJ_NS;
  const lang = window.useLang();
  const t = (v) => window.tx(v, lang);
  const { open } = React.useContext(ProjectModalContext);
  const activate = () => open(pr);

  return (
    <Card interactive padding="none"
      style={{ display: "flex", flexDirection: "column", height: "100%", cursor: "pointer" }}
      role="button" tabIndex={0}
      aria-label={t(pr.title)}
      onClick={activate}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); } }}
      media={<window.ProjectMotif motif={pr.motif} image={pr.image} alt={t(pr.imageAlt)} />}>
      <div style={{ padding: "var(--space-5)", display: "flex", flexDirection: "column", gap: "0.6rem", flex: 1 }}>
        {pr.meta ? (
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
            <span style={{ color: "var(--term-prompt)" }}>$</span> {t(pr.meta)}
          </div>
        ) : null}
        <h3 style={{ margin: 0, fontSize: "var(--text-lg)", fontWeight: "var(--weight-medium)" }}>{t(pr.title)}</h3>
        {pr.blurb ? (
          <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: "var(--leading-normal)" }}>{t(pr.blurb)}</p>
        ) : null}
        {(pr.tags || []).length ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.15rem" }}>
            {pr.tags.map((tg, i) => <Badge key={i} tone={tg.tone || "kraft"} size="sm">{t(tg.label)}</Badge>)}
          </div>
        ) : null}
        <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginTop: "auto", paddingTop: "0.6rem", flexWrap: "wrap" }}>
          {(pr.links || []).map((l, i) => (
            <a key={i} href={l.href} onClick={(e) => e.stopPropagation()}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem",
                fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)",
                color: "var(--text-link)", textDecoration: "none" }}>
              <Icon name={l.icon} />{t(l.label)}
            </a>
          ))}
          <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "0.3rem",
            fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--term-prompt)", fontWeight: 700 }}>
            {lang === "zh" ? "详情" : "details"} <Icon name="arrows-fullscreen" />
          </span>
        </div>
      </div>
    </Card>
  );
}
window.ProjectTile = ProjectTile;

function ProjectModal({ pr, onClose }) {
  const { Badge } = PROJ_NS;
  const lang = window.useLang();
  const t = (v) => window.tx(v, lang);
  const [maxd, setMaxd] = React.useState(false);
  React.useEffect(() => { setMaxd(false); }, [pr]);

  React.useEffect(() => {
    if (!pr) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prevOverflow; };
  }, [pr, onClose]);

  if (!pr) return null;
  const fname = (pr.slug || (t(pr.title) || "project").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")) + ".md";
  const details = pr.details || {};
  const highlights = details.highlights || [];

  const Light = ({ color, glyph, label, onClick }) => (
    <button onClick={onClick} aria-label={label} title={label} className="zw-light"
      style={{ width: 12, height: 12, borderRadius: "50%", background: color,
        border: "0.5px solid rgba(0,0,0,0.12)", cursor: "pointer", padding: 0,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        color: "rgba(0,0,0,0.5)", fontSize: 9, fontWeight: 700, lineHeight: 1 }}>
      <span className="zw-light-glyph" aria-hidden="true">{glyph}</span>
    </button>
  );

  return (
    <div onClick={onClose} className="zw-modal-overlay" style={{
      position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center",
      padding: "clamp(0.75rem, 4vw, 2.5rem)", background: "color-mix(in srgb, var(--ink-900) 62%, transparent)",
      backdropFilter: "blur(6px)",
    }}>
      <style>{`.zw-light{transition:filter .12s} .zw-light .zw-light-glyph{opacity:0;transition:opacity .1s} .zw-light-row:hover .zw-light-glyph{opacity:1} .zw-light:active{filter:brightness(0.85)}`}</style>
      <div onClick={(e) => e.stopPropagation()} className="zw-modal-panel" role="dialog" aria-modal="true" aria-label={t(pr.title)}
        style={{ width: maxd ? "min(1080px, 100%)" : "min(760px, 100%)", maxHeight: maxd ? "96vh" : "92vh",
          display: "flex", flexDirection: "column",
          background: "var(--surface-card)", border: "1px solid var(--border-strong)",
          borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)",
          transition: "width var(--dur-base) var(--ease-out), max-height var(--dur-base) var(--ease-out)" }}>
        {/* title bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.62rem 0.85rem",
          borderBottom: "1px solid var(--border-color)", background: "var(--surface-raised)", flex: "0 0 auto" }}>
          <span className="zw-light-row" style={{ display: "inline-flex", gap: "8px", alignItems: "center" }}>
            <Light color="#FF5F57" glyph="✕" label="Close" onClick={onClose} />
            <Light color="#FEBC2E" glyph="−" label="Minimise" onClick={onClose} />
            <Light color="#28C840" glyph={maxd ? "❐" : "⤢"} label={maxd ? "Restore" : "Maximise"} onClick={() => setMaxd((m) => !m)} />
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", marginLeft: "0.5rem" }}>
            <span style={{ color: "var(--term-prompt)" }}>~/projects/</span>{fname}
          </span>
        </div>

        {/* scroll body */}
        <div style={{ overflowY: "auto", padding: 0 }}>
          <div style={{ borderBottom: "1px solid var(--border-color)" }}>
            <window.ProjectMotif motif={pr.motif} image={pr.image} alt={t(pr.imageAlt)} />
          </div>
          <div style={{ padding: "clamp(1.25rem, 3vw, 2rem)", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {pr.meta ? (
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                <span style={{ color: "var(--term-prompt)" }}>$</span> {t(pr.meta)}
              </div>
            ) : null}
            <h3 style={{ margin: 0, fontSize: "clamp(1.4rem, 3vw, 1.9rem)", lineHeight: 1.15 }}>
              <span style={{ color: "var(--clay)" }}># </span>{t(pr.title)}
            </h3>
            {pr.blurb ? (
              <p style={{ margin: 0, fontSize: "var(--text-base)", color: "var(--text-body)", lineHeight: "var(--leading-relaxed)" }}>{t(pr.blurb)}</p>
            ) : null}
            {details.body ? (
              <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: "var(--leading-relaxed)" }}>{t(details.body)}</p>
            ) : null}

            {highlights.length ? (
              <div style={{ marginTop: "0.3rem" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-subtle)", marginBottom: "0.55rem" }}>
                  <span style={{ color: "var(--term-prompt)", fontWeight: 700 }}>❯</span> {lang === "zh" ? "亮点" : "highlights"}
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {highlights.map((h, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.55rem", alignItems: "flex-start", fontSize: "var(--text-sm)", color: "var(--text-body)", lineHeight: "var(--leading-normal)" }}>
                      <span aria-hidden="true" style={{ color: "var(--term-prompt)", marginTop: "0.05rem" }}>✓</span>
                      <span>{t(h)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {(pr.papers || []).length ? (
              <div style={{ marginTop: "0.3rem" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-subtle)", marginBottom: "0.55rem" }}>
                  <span style={{ color: "var(--term-prompt)", fontWeight: 700 }}>❯</span> {lang === "zh" ? "相关论文" : "related papers"}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "0.8rem" }}>
                  {pr.papers.map((p, i) => {
                    const venue = t(p.venue) || "";
                    const showYear = p.year && !String(venue).includes(String(p.year));
                    return (
                      <div key={i} style={{ background: "var(--surface-raised)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-md)", padding: "0.65rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                        {p.img ? (
                          <img src={p.img} alt={t(p.imgAlt)} loading="lazy"
                            style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: "var(--radius-sm)" }} />
                        ) : null}
                        <div style={{ display: "flex", gap: "0.4rem", alignItems: "flex-start", fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--text-body)", lineHeight: "var(--leading-normal)" }}>
                          <span aria-hidden="true">{p.emoji}</span>
                          <span>{t(p.title)}</span>
                        </div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                          {venue}{showYear ? " " + p.year : ""}
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.35rem" }}>
                          {p.role === "first" ? (
                            <Badge tone="clay" size="sm">{lang === "zh" ? "第一作者" : "1st author"}</Badge>
                          ) : p.role === "co" ? (
                            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", color: "var(--text-subtle)" }}>{lang === "zh" ? "合作" : "co-author"}</span>
                          ) : null}
                          {p.metric ? (
                            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", fontWeight: 600, color: "var(--clay-700)", background: "var(--clay-100)", border: "1px solid var(--clay)", borderRadius: "var(--radius-pill)", padding: "0.1rem 0.45rem" }}>{t(p.metric)}</span>
                          ) : null}
                        </div>
                        {p.contribution ? (
                          <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", lineHeight: "var(--leading-normal)" }}>{t(p.contribution)}</div>
                        ) : null}
                        {p.doi ? (
                          <a href={"https://doi.org/" + p.doi} target="_blank" rel="noopener noreferrer"
                            style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-link)", textDecoration: "none" }}>
                            <Icon name="link-45deg" />DOI
                          </a>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {(pr.tags || []).length ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.3rem" }}>
                {pr.tags.map((tg, i) => <Badge key={i} tone={tg.tone || "kraft"} size="md">{t(tg.label)}</Badge>)}
              </div>
            ) : null}

            {(pr.links || []).length ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", marginTop: "0.5rem", paddingTop: "0.9rem", borderTop: "1px solid var(--divider)" }}>
                {pr.links.map((l, i) => (
                  <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem",
                      fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", fontWeight: 600,
                      color: i === 0 ? "var(--color-on-primary)" : "var(--text-link)",
                      background: i === 0 ? "var(--clay)" : "transparent",
                      border: i === 0 ? "1px solid var(--clay)" : "1px solid var(--border-strong)",
                      borderRadius: "var(--radius-sm)", padding: "0.4rem 0.85rem", textDecoration: "none" }}>
                    <Icon name={l.icon} />{t(l.label)}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
window.ProjectModal = ProjectModal;

function PartBlock({ part, index }) {
  const lang = window.useLang();
  const t = (v) => window.tx(v, lang);
  const S = window.SITE;

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
        {part.projects.map((pr, i) => <ProjectTile key={i} pr={pr} />)}
      </div>
    </div>
  );
}

function Career() {
  const S = window.SITE;
  const lang = window.useLang();
  const t = (v) => window.tx(v, lang);
  const [active, setActive] = React.useState(null);
  const open = React.useCallback((pr) => setActive(pr), []);
  const close = React.useCallback(() => setActive(null), []);
  return (
    <window.ProjectModalContext.Provider value={{ open }}>
      <Section id="work" eyebrow={t(S.ui.sections.workEyebrow)} title={t(S.ui.sections.workTitle)} intro={t(S.ui.sections.workIntro)}>
        {S.parts.map((part, i) => <PartBlock key={i} part={part} index={i} />)}
      </Section>
      <window.ProjectModal pr={active} onClose={close} />
    </window.ProjectModalContext.Provider>
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
