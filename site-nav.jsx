/* site-nav.jsx — terminal title-bar navigation */
const NS = window.ZhaoWangResearchDesignSystem_65eff9;

function Icon({ name, style }) {
  return <i className={`bi bi-${name}`} style={style} aria-hidden="true"></i>;
}
window.Icon = Icon;

function Nav() {
  const { Button } = NS;
  const S = window.SITE;
  const lang = window.useLang();
  const t = (v) => window.tx(v, lang);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = [
    [S.ui.nav.about, "about"],
    [S.ui.nav.work, "work"],
    [S.ui.nav.publications, "publications"],
  ];

  const dot = (c) => (
    <span style={{ width: 12, height: 12, borderRadius: "50%", background: c, display: "inline-block" }} />
  );

  const linkStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: "var(--text-sm)",
    fontWeight: "var(--weight-medium)",
    color: "var(--text-body)",
    textDecoration: "none",
    padding: "0.2rem 0.1rem",
    whiteSpace: "nowrap",
  };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "var(--nav-scrim)",
      backdropFilter: "saturate(140%) blur(10px)",
      borderBottom: "1px solid var(--border-strong)",
      boxShadow: scrolled ? "var(--shadow-sm)" : "none",
    }}>
      <div style={{
        maxWidth: "var(--container-xl)", margin: "0 auto",
        padding: "0.55rem var(--gutter)",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem",
      }}>
        {/* traffic lights + path prompt */}
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: "0.7rem", textDecoration: "none", minWidth: 0 }}>
          <span style={{ display: "inline-flex", gap: "0.45rem" }} className="nav-lights">
            {dot("#FF5F56")}{dot("#FFBD2E")}{dot("#27C93F")}
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            <span style={{ color: "var(--term-prompt)" }}>zhao@leeds</span>:<span style={{ color: "var(--slate)" }}>~</span>{lang === "zh" ? "/王曌" : ""}$ <span style={{ color: "var(--text-heading)", fontWeight: 700 }}>portfolio</span>
          </span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: "1.2rem" }} className="nav-links">
          {sections.map(([label, id]) => (
            <a key={id} href={`#${id}`} style={linkStyle}
               onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clay)")}
               onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-body)")}>
              <span style={{ color: "var(--ink-500)" }}>./</span>{t(label)}
            </a>
          ))}
          <window.LangToggle />
          <window.ThemeToggle />
          <Button variant="primary" size="sm" href="#contact" icon={<Icon name="envelope" />}>{t(S.ui.nav.contact)}</Button>
        </nav>
      </div>
    </header>
  );
}
window.Nav = Nav;
