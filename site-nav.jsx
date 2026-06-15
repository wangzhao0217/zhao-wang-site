/* site-nav.jsx — sticky top navigation */
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

  const linkStyle = {
    fontFamily: "var(--font-ui)",
    fontSize: "var(--text-sm)",
    fontWeight: "var(--weight-semibold)",
    color: "var(--text-body)",
    textDecoration: "none",
    padding: "0.4rem 0.2rem",
  };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "rgba(240,238,230,0.85)" : "transparent",
      backdropFilter: scrolled ? "saturate(160%) blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-color)" : "1px solid transparent",
      transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
    }}>
      <div style={{
        maxWidth: "var(--container-xl)", margin: "0 auto",
        padding: "0.85rem var(--gutter)",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem",
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <span style={{
            width: 34, height: 34, borderRadius: "var(--radius-pill)",
            background: "var(--clay)", color: "#fff",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16,
          }}>ZW</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-lg)", color: "var(--text-heading)", whiteSpace: "nowrap" }}>
            {lang === "zh" ? "王曌" : "Zhao Wang"}
          </span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: "1.4rem" }} className="nav-links">
          {sections.map(([label, id]) => (
            <a key={id} href={`#${id}`} style={linkStyle}
               onMouseEnter={(e) => (e.currentTarget.style.color = "var(--clay-600)")}
               onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-body)")}>
              {t(label)}
            </a>
          ))}
          <window.LangToggle />
          <Button variant="primary" size="sm" href="#contact" icon={<Icon name="envelope" />}>{t(S.ui.nav.contact)}</Button>
        </nav>
      </div>
    </header>
  );
}
window.Nav = Nav;
