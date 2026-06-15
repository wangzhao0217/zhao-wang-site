/* site-i18n.jsx — bilingual plumbing (EN / 中文) */

const LangContext = React.createContext({ lang: "en", setLang: () => {} });
window.LangContext = LangContext;

/** Read the active language code ("en" | "zh"). */
function useLang() { return React.useContext(LangContext).lang; }
window.useLang = useLang;

/** Resolve a possibly-bilingual value: { en, zh } → string; passthrough otherwise. */
function tx(v, lang) {
  if (v == null) return "";
  if (typeof v === "object" && !Array.isArray(v) && ("en" in v || "zh" in v)) {
    return v[lang] != null ? v[lang] : (v.en != null ? v.en : "");
  }
  return v;
}
window.tx = tx;

/** Segmented EN / 中 switch. */
function LangToggle({ compact }) {
  const { lang, setLang } = React.useContext(LangContext);
  const opt = (code, label) => {
    const active = lang === code;
    return (
      <button
        key={code}
        onClick={() => setLang(code)}
        aria-pressed={active}
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "var(--text-xs)",
          fontWeight: 700,
          letterSpacing: "0.02em",
          padding: compact ? "0.2rem 0.55rem" : "0.3rem 0.7rem",
          border: "none",
          borderRadius: "var(--radius-pill)",
          cursor: "pointer",
          background: active ? "var(--clay)" : "transparent",
          color: active ? "#fff" : "var(--text-muted)",
          transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
        }}
      >
        {label}
      </button>
    );
  };
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "2px",
      padding: "3px", borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-strong)", background: "var(--surface-card)",
    }}>
      {opt("en", "EN")}
      {opt("zh", "中")}
    </div>
  );
}
window.LangToggle = LangToggle;

/* ---- Theme (light / dark) ---- */
const ThemeContext = React.createContext({ theme: "light", setTheme: () => {} });
window.ThemeContext = ThemeContext;

/** Round icon button toggling light ↔ dark. */
function ThemeToggle() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const dark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      style={{
        width: 34, height: 34, flex: "0 0 auto",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: "var(--radius-pill)", cursor: "pointer",
        border: "1px solid var(--border-strong)", background: "var(--surface-card)",
        color: "var(--text-body)", fontSize: "1rem",
        transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--clay-600)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-body)"; }}
    >
      <i className={`bi ${dark ? "bi-sun" : "bi-moon-stars"}`} aria-hidden="true"></i>
    </button>
  );
}
window.ThemeToggle = ThemeToggle;
