/* site-record.jsx — About, Education, Publications */
const REC_NS = window.ZhaoWangResearchDesignSystem_65eff9;

function About() {
  const { Callout, Badge, Avatar } = REC_NS;
  const S = window.SITE;
  const lang = window.useLang();
  const t = (v) => window.tx(v, lang);
  const focus = [
    { en: "Transport data science", zh: "交通数据科学" },
    { en: "Route-network generation", zh: "路网生成" },
    { en: "GIS & spatial analysis", zh: "GIS 与空间分析" },
    { en: "Machine / deep learning", zh: "机器学习 / 深度学习" },
    { en: "Remote sensing", zh: "遥感" },
    { en: "R · Python · Rust", zh: "R · Python · Rust" },
  ];
  const calloutTitle = { en: "How I work", zh: "工作方式" };
  const calloutBody = {
    en: "Reproducible by default — every figure and tool regenerates from open data and version-controlled pipelines, so the work stays auditable and reusable.",
    zh: "默认可复现——每一张图、每一个工具都基于开放数据与版本受控的流程自动生成，确保工作可审计、可复用。",
  };

  return (
    <Section id="about" eyebrow={t(S.ui.sections.aboutEyebrow)} title={t(S.ui.sections.aboutTitle)}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 0.9fr)", gap: "clamp(2rem, 5vw, 4rem)", alignItems: "start" }} className="about-grid">
        <div>
          {S.about.map((para, i) => (
            <p key={i} style={{ fontSize: "var(--text-md)", color: "var(--text-body)", marginBottom: "1.1rem", lineHeight: "var(--leading-relaxed)" }}>{t(para)}</p>
          ))}
          <Callout type="tip" title={t(calloutTitle)}>{t(calloutBody)}</Callout>
        </div>
        <aside style={{ background: "var(--surface-card)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <Avatar name="Zhao Wang" size="lg" ring />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", color: "var(--text-heading)" }}>{lang === "zh" ? "王曌" : "Zhao Wang"}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{t(S.person.location)}</div>
            </div>
          </div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-2xs)", fontWeight: 700, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-subtle)", marginBottom: "0.8rem" }}>
            {lang === "zh" ? "研究方向" : "Focus areas"}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
            {focus.map((f, i) => <Badge key={i} tone={["slate", "sage", "kraft", "heather"][i % 4]} variant="soft">{t(f)}</Badge>)}
          </div>
        </aside>
      </div>
    </Section>
  );
}
window.About = About;

function Publications() {
  const { PublicationItem } = REC_NS;
  const S = window.SITE;
  const lang = window.useLang();
  const t = (v) => window.tx(v, lang);
  const [filter, setFilter] = React.useState("All");
  const filters = [["All", S.ui.pubs.all], ["Journal", S.ui.pubs.journal], ["Conference", S.ui.pubs.conference]];
  const list = S.publications.filter((p) => filter === "All" || p.type === filter);

  return (
    <Section id="publications" eyebrow={t(S.ui.sections.pubsEyebrow)} title={t(S.ui.sections.pubsTitle)} intro={t(S.ui.sections.pubsIntro)}>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
        {filters.map(([key, label]) => {
          const active = filter === key;
          const count = key === "All" ? S.publications.length : S.publications.filter((p) => p.type === key).length;
          return (
            <button key={key} onClick={() => setFilter(key)} style={{
              fontFamily: "var(--font-ui)", fontSize: "var(--text-sm)", fontWeight: 600,
              padding: "0.4rem 0.95rem", borderRadius: "var(--radius-pill)", cursor: "pointer",
              border: `1px solid ${active ? "var(--clay)" : "var(--border-strong)"}`,
              background: active ? "var(--clay)" : "transparent",
              color: active ? "#fff" : "var(--text-body)",
              transition: "all var(--dur-fast) var(--ease-out)",
            }}>
              {t(label)} <span style={{ opacity: 0.7 }}>· {count}</span>
            </button>
          );
        })}
      </div>
      <div>
        {list.map((p, i) => {
          const links = p.doi
            ? [{ label: t(S.ui.pubs.doi), href: `https://doi.org/${p.doi}`, icon: <Icon name="link-45deg" /> }]
            : [{ label: t(S.ui.pubs.find), href: `https://scholar.google.com/scholar?q=${encodeURIComponent(p.title)}`, icon: <Icon name="search" /> }];
          const typeLabel = p.type === "Conference" ? t(S.ui.pubs.conference) : t(S.ui.pubs.journal);
          return (
            <PublicationItem key={i} year={p.year} authors={p.authors} title={p.title} venue={p.venue}
              badge={{ tone: p.best ? "clay" : (p.type === "Conference" ? "heather" : "slate"), label: p.best ? t(S.ui.pubs.best) : typeLabel }}
              links={links} />
          );
        })}
      </div>
    </Section>
  );
}
window.Publications = Publications;

function Education() {
  const S = window.SITE;
  const lang = window.useLang();
  const t = (v) => window.tx(v, lang);
  return (
    <Section id="education" eyebrow="cat education.txt" title={t(S.ui.sections.eduTitle)} tint="var(--surface-raised)">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
        {S.education.map((ed, i) => (
          <div key={i} style={{ background: "var(--surface-card)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-lg)", padding: "var(--space-5)", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--clay-600)", marginBottom: "0.5rem" }}>{ed.year}</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", color: "var(--text-heading)", lineHeight: 1.25, marginBottom: "0.3rem" }}>{t(ed.degree)}</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-sm)", color: "var(--text-muted)", fontWeight: 600 }}>{t(ed.school)}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
window.Education = Education;
