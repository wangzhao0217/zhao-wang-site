/* site-app.jsx — Contact, Footer, language state & app composition */
const APP_NS = window.ZhaoWangResearchDesignSystem_65eff9;

function Contact() {
  const { Button } = APP_NS;
  const S = window.SITE;
  const p = S.person;
  const lang = window.useLang();
  const t = (v) => window.tx(v, lang);
  return (
    <section id="contact" style={{ background: "var(--surface-inverse)", color: "var(--ivory)" }}>
      <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto", padding: "clamp(3.5rem, 8vw, 6rem) var(--gutter)", textAlign: "center" }}>
        <div style={{ width: 44, height: 6, borderRadius: "var(--radius-pill)", background: "var(--flow-gradient)", margin: "0 auto 1.6rem" }} />
        <h2 style={{ color: "var(--cream)", fontSize: "clamp(2rem, 5vw, 3rem)", margin: "0 0 0.8rem" }}>{t(S.ui.contact.title)}</h2>
        <p style={{ color: "var(--ink-400)", fontSize: "var(--text-md)", maxWidth: "52ch", margin: "0 auto 2rem" }}>{t(S.ui.contact.body)}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
          <Button variant="primary" size="lg" href={`mailto:${p.email}`} icon={<Icon name="envelope-fill" />}>{p.email}</Button>
          <Button variant="onDark" size="lg" href={p.links.github} icon={<Icon name="github" />}>GitHub</Button>
          <Button variant="onDark" size="lg" href={p.links.scholar} icon={<Icon name="mortarboard-fill" />}>{t(S.ui.hero.scholar)}</Button>
          <Button variant="onDark" size="lg" href={p.links.linkedin} icon={<Icon name="linkedin" />}>LinkedIn</Button>
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;

function Footer() {
  const S = window.SITE;
  const lang = window.useLang();
  const t = (v) => window.tx(v, lang);
  return (
    <footer style={{ background: "var(--surface-inverse)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "1.6rem var(--gutter)", display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--ink-500)" }}>
          © {new Date().getFullYear()} {lang === "zh" ? "王曌" : "Zhao Wang"} · {t(S.person.location)}
        </span>
        <a href="#top" style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--ink-400)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
          {t(S.ui.contact.back)} <Icon name="arrow-up-short" />
        </a>
      </div>
    </footer>
  );
}
window.Footer = Footer;

function App() {
  const [lang, setLangState] = React.useState(() => {
    try { return localStorage.getItem("zw-site-lang") || "en"; } catch (e) { return "en"; }
  });
  const setLang = React.useCallback((next) => {
    setLangState(next);
    try { localStorage.setItem("zw-site-lang", next); } catch (e) {}
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  }, []);
  React.useEffect(() => { document.documentElement.lang = lang === "zh" ? "zh-CN" : "en"; }, [lang]);

  const [theme, setThemeState] = React.useState(() => {
    try { return localStorage.getItem("zw-site-theme") || "light"; } catch (e) { return "light"; }
  });
  const setTheme = React.useCallback((next) => {
    setThemeState(next);
    try { localStorage.setItem("zw-site-theme", next); } catch (e) {}
  }, []);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <window.ThemeContext.Provider value={{ theme, setTheme }}>
    <window.LangContext.Provider value={{ lang, setLang }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Career />
        <Publications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </window.LangContext.Provider>
    </window.ThemeContext.Provider>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
