/* @ds-bundle: {"format":3,"namespace":"ZhaoWangResearchDesignSystem_65eff9","components":[{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"PublicationItem","sourcePath":"components/content/PublicationItem.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"TimelineItem","sourcePath":"components/content/TimelineItem.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"}],"sourceHashes":{"components/content/Callout.jsx":"c88d8bc5bfb2","components/content/ProjectCard.jsx":"de19bac0912e","components/content/PublicationItem.jsx":"99c77aef0549","components/content/Stat.jsx":"5f893069aa36","components/content/TimelineItem.jsx":"e0ef6a4ce125","components/core/Avatar.jsx":"f8534ec59cff","components/core/Badge.jsx":"0cdf46783b81","components/core/Button.jsx":"461903881657","components/core/Card.jsx":"d9a934c82bcf","ui_kits/personal-site/site-app.jsx":"2d81f55ac316","ui_kits/personal-site/site-data.js":"039896bd9b68","ui_kits/personal-site/site-hero.jsx":"7478b9505b57","ui_kits/personal-site/site-i18n.jsx":"b6df0ef6c352","ui_kits/personal-site/site-nav.jsx":"2f1f1ffba803","ui_kits/personal-site/site-projects.jsx":"85900b3a64c9","ui_kits/personal-site/site-record.jsx":"b38da7d1915f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZhaoWangResearchDesignSystem_65eff9 = window.ZhaoWangResearchDesignSystem_65eff9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Callout — Quarto-style annotated note block (note / tip / warning /
 * important / caution). Left accent rule, soft tinted ground, icon.
 */
function Callout({
  children,
  type = "note",
  title,
  icon,
  style,
  ...rest
}) {
  const types = {
    note: {
      accent: "var(--clay)",
      soft: "var(--note-soft)",
      bi: "bi-info-circle-fill",
      label: "Note"
    },
    tip: {
      accent: "var(--sage)",
      soft: "var(--success-soft)",
      bi: "bi-lightbulb-fill",
      label: "Tip"
    },
    important: {
      accent: "var(--heather)",
      soft: "#efe6ef",
      bi: "bi-star-fill",
      label: "Important"
    },
    warning: {
      accent: "var(--color-warning)",
      soft: "var(--warning-soft)",
      bi: "bi-exclamation-triangle-fill",
      label: "Warning"
    },
    caution: {
      accent: "var(--color-danger)",
      soft: "var(--danger-soft)",
      bi: "bi-exclamation-octagon-fill",
      label: "Caution"
    }
  };
  const t = types[type] || types.note;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "note",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      background: t.soft,
      borderRadius: "var(--radius-md)",
      borderLeft: `4px solid ${t.accent}`,
      padding: "var(--space-4) var(--space-5)",
      color: "var(--text-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: t.accent,
      fontSize: "1.1rem",
      lineHeight: 1.4,
      flex: "0 0 auto"
    }
  }, icon || /*#__PURE__*/React.createElement("i", {
    className: `bi ${t.bi}`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-sm)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: t.accent,
      marginBottom: "0.25rem"
    }
  }, title || t.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)"
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — a single headline metric: large serif figure over a label.
 * For "15 journal articles", "4 open-source packages", etc.
 */
function Stat({
  value,
  label,
  sublabel,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-3xl)",
      fontWeight: "var(--weight-medium)",
      lineHeight: 1,
      color: "var(--clay-600)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-heading)",
      marginTop: "0.4rem"
    }
  }, label), sublabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      marginTop: "0.15rem"
    }
  }, sublabel) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/content/TimelineItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TimelineItem — one entry in a vertical career / education timeline.
 * Marker dot on a connecting rule, then role, organisation, dates,
 * and free-form children (bullets / prose).
 */
function TimelineItem({
  role,
  org,
  period,
  location,
  children,
  current = false,
  last = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-4)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: "var(--radius-pill)",
      background: current ? "var(--clay)" : "var(--surface-card)",
      border: `2px solid ${current ? "var(--clay)" : "var(--border-strong)"}`,
      boxShadow: current ? "0 0 0 4px var(--clay-100)" : "none",
      marginTop: "0.35rem",
      flex: "0 0 auto"
    }
  }), !last ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 2,
      background: "var(--divider)",
      marginTop: 4
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: last ? 0 : "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "baseline",
      gap: "0 0.6rem"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-medium)",
      margin: 0,
      color: "var(--text-heading)"
    }
  }, role), current ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-2xs)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--clay-700)",
      background: "var(--clay-100)",
      padding: "0.1rem 0.45rem",
      borderRadius: "var(--radius-pill)"
    }
  }, "Current") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      fontWeight: "var(--weight-semibold)",
      marginTop: "0.1rem"
    }
  }, org), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      marginTop: "0.15rem"
    }
  }, period, location ? ` · ${location}` : ""), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      marginTop: "0.6rem",
      lineHeight: "var(--leading-normal)"
    }
  }, children) : null));
}
Object.assign(__ds_scope, { TimelineItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TimelineItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular portrait or monogram. Falls back to initials
 * on a warm clay wash when no `src` is given.
 */
function Avatar({
  src,
  alt = "",
  name = "",
  size = "md",
  ring = false,
  style,
  ...rest
}) {
  const sizes = {
    sm: 36,
    md: 52,
    lg: 84,
    xl: 132
  };
  const px = sizes[size] || sizes.md;
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase()).join("");
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: px,
      height: px,
      borderRadius: "var(--radius-pill)",
      overflow: "hidden",
      flex: "0 0 auto",
      background: "var(--clay-100)",
      color: "var(--clay-700)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-medium)",
      fontSize: px * 0.42,
      letterSpacing: "0.01em",
      boxShadow: ring ? "0 0 0 3px var(--surface-page), 0 0 0 4px var(--clay-200)" : "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, initials || "?"));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — compact label for topics (GIS, R, Machine Learning),
 * venues, and statuses. `tone` selects a colour from the palette;
 * `variant` selects soft / solid / outline treatment.
 */
function Badge({
  children,
  tone = "clay",
  variant = "soft",
  size = "md",
  icon,
  style,
  ...rest
}) {
  const tones = {
    clay: {
      solid: "var(--clay)",
      soft: "var(--clay-100)",
      text: "var(--clay-700)",
      on: "#fff"
    },
    slate: {
      solid: "var(--slate)",
      soft: "var(--info-soft)",
      text: "#3c4a63",
      on: "#fff"
    },
    sage: {
      solid: "var(--sage)",
      soft: "var(--success-soft)",
      text: "#46543c",
      on: "#fff"
    },
    heather: {
      solid: "var(--heather)",
      soft: "#efe6ef",
      text: "#5e4860",
      on: "#fff"
    },
    kraft: {
      solid: "var(--kraft)",
      soft: "#f3e7d8",
      text: "#7a5736",
      on: "#fff"
    },
    ink: {
      solid: "var(--ink-800)",
      soft: "var(--ivory-200)",
      text: "var(--ink-800)",
      on: "var(--ivory)"
    }
  };
  const t = tones[tone] || tones.clay;
  const sizes = {
    sm: {
      padding: "0.12rem 0.5rem",
      font: "var(--text-2xs)"
    },
    md: {
      padding: "0.22rem 0.65rem",
      font: "var(--text-xs)"
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    soft: {
      background: t.soft,
      color: t.text,
      border: "1px solid transparent"
    },
    solid: {
      background: t.solid,
      color: t.on,
      border: "1px solid transparent"
    },
    outline: {
      background: "transparent",
      color: t.text,
      border: `1px solid ${t.solid}`
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.35em",
      fontFamily: "var(--font-ui)",
      fontWeight: "var(--weight-semibold)",
      fontSize: s.font,
      lineHeight: 1.4,
      letterSpacing: "var(--tracking-wide)",
      padding: s.padding,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...(variants[variant] || variants.soft),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex"
    }
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/PublicationItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PublicationItem — one academic reference. Authors (self emphasised),
 * title, venue, year, optional topic/venue badge, and action links
 * (DOI, PDF, code). Designed for dense, scannable publication lists.
 */
function PublicationItem({
  authors,
  title,
  venue,
  year,
  badge,
  // { tone, label }
  links = [],
  // [{ label, href, icon }]
  highlightAuthor = "Wang, Z",
  style,
  ...rest
}) {
  // Bold the site owner within the author string.
  const renderAuthors = () => {
    if (!authors) return null;
    if (!highlightAuthor || !authors.includes(highlightAuthor)) return authors;
    const parts = authors.split(highlightAuthor);
    return parts.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, p, i < parts.length - 1 ? /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-heading)",
        fontWeight: "var(--weight-bold)"
      }
    }, highlightAuthor) : null));
  };
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "0 var(--space-4)",
      padding: "var(--space-5) 0",
      borderBottom: "1px solid var(--divider)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--clay-600)",
      paddingTop: "0.15rem",
      whiteSpace: "nowrap"
    }
  }, year), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-medium)",
      lineHeight: "var(--leading-snug)",
      margin: "0 0 0.3rem",
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 0.35rem",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, renderAuthors()), venue ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 0.6rem",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("em", {
    style: {
      fontFamily: "var(--font-display)",
      color: "var(--text-body)"
    }
  }, venue)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      alignItems: "center"
    }
  }, badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badge.tone || "slate",
    size: "sm"
  }, badge.label) : null, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.3rem",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-link)",
      textDecoration: "none",
      padding: "0.18rem 0.5rem",
      border: "1px solid var(--border-color)",
      borderRadius: "var(--radius-pill)"
    }
  }, l.icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, l.icon) : null, l.label)))));
}
Object.assign(__ds_scope, { PublicationItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PublicationItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary call-to-action and navigation control.
 * Warm, flat, gently rounded. Renders as <button> or, when `href`
 * is set, as <a> (so it works for "Read paper", "View code", etc.).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconRight,
  fullWidth = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: "0.4rem 0.8rem",
      font: "var(--text-sm)",
      gap: "0.4rem"
    },
    md: {
      padding: "0.6rem 1.15rem",
      font: "var(--text-base)",
      gap: "0.5rem"
    },
    lg: {
      padding: "0.85rem 1.6rem",
      font: "var(--text-md)",
      gap: "0.6rem"
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    fontFamily: "var(--font-ui)",
    fontWeight: "var(--weight-semibold)",
    fontSize: s.font,
    lineHeight: 1.1,
    padding: s.padding,
    borderRadius: "var(--radius-pill)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? "100%" : "auto",
    textDecoration: "none",
    transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    transform: active && !disabled ? "translateY(1px)" : "none",
    letterSpacing: "var(--tracking-snug)"
  };
  const variants = {
    primary: {
      background: hover ? "var(--color-primary-hover)" : "var(--color-primary)",
      color: "var(--color-on-primary)",
      boxShadow: hover ? "var(--shadow-clay)" : "var(--shadow-xs)"
    },
    secondary: {
      background: hover ? "var(--surface-sunken)" : "transparent",
      color: "var(--text-heading)",
      borderColor: "var(--border-strong)"
    },
    ghost: {
      background: hover ? "var(--surface-subtle)" : "transparent",
      color: "var(--text-link)"
    },
    onDark: {
      background: hover ? "var(--ivory)" : "var(--cream)",
      color: "var(--ink-900)"
    }
  };
  const styleObj = {
    ...base,
    ...(variants[variant] || variants.primary),
    ...style
  };
  const Tag = href && !disabled ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    style: styleObj,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      fontSize: "1.05em"
    }
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      fontSize: "1.05em"
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — warm surface container with soft border and shadow.
 * Set `interactive` for a hover lift (links, project tiles).
 * Optional `media` renders flush at the top (image/video).
 */
function Card({
  children,
  media,
  interactive = false,
  padding = "lg",
  as = "div",
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = {
    none: "0",
    sm: "var(--space-4)",
    md: "var(--space-5)",
    lg: "var(--space-6)"
  };
  const Tag = href ? "a" : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      position: "relative",
      background: "var(--surface-card)",
      border: "1px solid var(--border-color)",
      borderRadius: "var(--radius-lg)",
      boxShadow: interactive && hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      overflow: "hidden",
      textDecoration: "none",
      color: "inherit",
      transform: interactive && hover ? "translateY(-3px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), media ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      lineHeight: 0
    }
  }, media) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pads[padding] || pads.lg
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
/**
 * ProjectCard — a research project / software tile: cover image,
 * title, blurb, topic tags and links. Composes Card + Badge.
 */
function ProjectCard({
  image,
  imageAlt = "",
  title,
  blurb,
  tags = [],
  // [{ tone, label }] or [string]
  links = [],
  // [{ label, href, icon }]
  meta,
  // small line, e.g. "R package · 2025"
  style
}) {
  const norm = t => typeof t === "string" ? {
    label: t
  } : t;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: "none",
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      ...style
    },
    media: image ? /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: "16 / 9",
        overflow: "hidden",
        background: "var(--surface-sunken)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: imageAlt,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })) : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "0.6rem",
      flex: 1
    }
  }, meta ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      letterSpacing: "var(--tracking-snug)"
    }
  }, meta) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--text-xl)",
      fontWeight: "var(--weight-medium)"
    }
  }, title), blurb ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      lineHeight: "var(--leading-normal)"
    }
  }, blurb) : null, tags.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.4rem",
      marginTop: "0.15rem"
    }
  }, tags.map((t, i) => {
    const n = norm(t);
    return /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      key: i,
      tone: n.tone || "kraft",
      size: "sm"
    }, n.label);
  })) : null, links.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.9rem",
      marginTop: "auto",
      paddingTop: "0.5rem"
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.35rem",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-link)",
      textDecoration: "none"
    }
  }, l.icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, l.icon) : null, l.label))) : null));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/site-app.jsx
try { (() => {
/* site-app.jsx — Contact, Footer, language state & app composition */
const APP_NS = window.ZhaoWangResearchDesignSystem_65eff9;
function Contact() {
  const {
    Button
  } = APP_NS;
  const S = window.SITE;
  const p = S.person;
  const lang = window.useLang();
  const t = v => window.tx(v, lang);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: "var(--surface-inverse)",
      color: "var(--ivory)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "clamp(3.5rem, 8vw, 6rem) var(--gutter)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 6,
      borderRadius: "var(--radius-pill)",
      background: "var(--flow-gradient)",
      margin: "0 auto 1.6rem"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "var(--cream)",
      fontSize: "clamp(2rem, 5vw, 3rem)",
      margin: "0 0 0.8rem"
    }
  }, t(S.ui.contact.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-400)",
      fontSize: "var(--text-md)",
      maxWidth: "52ch",
      margin: "0 auto 2rem"
    }
  }, t(S.ui.contact.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: `mailto:${p.email}`,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "envelope-fill"
    })
  }, p.email), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    href: p.links.github,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "github"
    })
  }, "GitHub"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    href: p.links.scholar,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "mortarboard-fill"
    })
  }, t(S.ui.hero.scholar)))));
}
window.Contact = Contact;
function Footer() {
  const S = window.SITE;
  const lang = window.useLang();
  const t = v => window.tx(v, lang);
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-inverse)",
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "1.6rem var(--gutter)",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--ink-500)"
    }
  }, "\xA9 ", new Date().getFullYear(), " ", lang === "zh" ? "王曌" : "Zhao Wang", " \xB7 ", t(S.person.location)), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      fontWeight: 600,
      color: "var(--ink-400)",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem"
    }
  }, t(S.ui.contact.back), " ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-short"
  }))));
}
window.Footer = Footer;
function App() {
  const [lang, setLangState] = React.useState(() => {
    try {
      return localStorage.getItem("zw-site-lang") || "en";
    } catch (e) {
      return "en";
    }
  });
  const setLang = React.useCallback(next => {
    setLangState(next);
    try {
      localStorage.setItem("zw-site-lang", next);
    } catch (e) {}
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  }, []);
  React.useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);
  return /*#__PURE__*/React.createElement(window.LangContext.Provider, {
    value: {
      lang,
      setLang
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Career, null), /*#__PURE__*/React.createElement(Publications, null), /*#__PURE__*/React.createElement(Education, null), /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/site-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/site-data.js
try { (() => {
/* ============================================================
   site-data.js — content for the personal-site UI kit.
   Bilingual (EN / 中文). Structured around the three career
   parts from Zhao Wang's interview deck. Content drawn from the
   CV (zhao_wang_cv_Academic.qmd) and Presentation_ZH.html.

   Bilingual fields are { en, zh }; plain strings are shared.
   Read them with the tx(value, lang) helper. Exposed as window.SITE.
   ============================================================ */
window.SITE = {
  ui: {
    nav: {
      about: {
        en: "About",
        zh: "简介"
      },
      work: {
        en: "Career",
        zh: "工作经历"
      },
      talks: {
        en: "Talks",
        zh: "演讲"
      },
      publications: {
        en: "Publications",
        zh: "论文发表"
      },
      contact: {
        en: "Get in touch",
        zh: "联系我"
      }
    },
    hero: {
      status: {
        en: "Open to collaboration",
        zh: "欢迎合作交流"
      },
      seeWork: {
        en: "See my work",
        zh: "查看工作经历"
      },
      scholar: {
        en: "Scholar",
        zh: "学术主页"
      }
    },
    sections: {
      aboutEyebrow: {
        en: "About",
        zh: "简介"
      },
      aboutTitle: {
        en: "Research that ships as software",
        zh: "把研究转化为可用的软件"
      },
      workEyebrow: {
        en: "Career in three parts",
        zh: "三段工作经历"
      },
      workTitle: {
        en: "Ten years across structures, infrastructure & transport AI",
        zh: "十年：从结构工程到基础设施与交通AI"
      },
      workIntro: {
        en: "From civil & structural engineering, to national infrastructure data and AI, to open-source transport-network science.",
        zh: "从土木与结构工程，到国家级基础设施数据与人工智能，再到开源交通网络科学。"
      },
      talksEyebrow: {
        en: "Talks & demos",
        zh: "演讲与演示"
      },
      talksTitle: {
        en: "Watch the research in action",
        zh: "研究成果实录"
      },
      talksIntro: {
        en: "How satellite imagery and machine learning can map road conditions where survey data doesn't exist.",
        zh: "如何用卫星影像与机器学习，在缺乏实地调查数据的地区评估路况。"
      },
      pubsEyebrow: {
        en: "Publications",
        zh: "论文发表"
      },
      pubsTitle: {
        en: "Selected publications",
        zh: "代表性论文"
      },
      pubsIntro: {
        en: "18 peer-reviewed journal papers and selected conference papers. Full citations on Google Scholar.",
        zh: "18 篇同行评审期刊论文及代表性会议论文。完整引用见 Google Scholar。"
      },
      eduTitle: {
        en: "Education",
        zh: "教育背景"
      },
      rolesLabel: {
        en: "Roles",
        zh: "职位"
      }
    },
    pubs: {
      all: {
        en: "All",
        zh: "全部"
      },
      journal: {
        en: "Journal",
        zh: "期刊"
      },
      conference: {
        en: "Conference",
        zh: "会议"
      },
      best: {
        en: "Best Paper",
        zh: "最佳论文"
      },
      doi: {
        en: "DOI",
        zh: "DOI"
      },
      find: {
        en: "Find paper",
        zh: "查找论文"
      }
    },
    contact: {
      title: {
        en: "Let's build something useful",
        zh: "让我们一起做点有用的东西"
      },
      body: {
        en: "Open to research collaborations, tool development and consulting on transport data, GIS and machine learning.",
        zh: "欢迎在交通数据、GIS 与机器学习方向的科研合作、工具开发与咨询。"
      },
      back: {
        en: "Back to top",
        zh: "回到顶部"
      }
    }
  },
  person: {
    name: "Zhao Wang",
    nameZh: "王曌",
    role: {
      en: "Transport Data Scientist & GIS Researcher",
      zh: "交通数据科学家 & GIS 研究员"
    },
    affiliation: {
      en: "Institute for Transport Studies · University of Leeds",
      zh: "交通研究所 · 英国利兹大学"
    },
    tagline: {
      en: "I build open-source tools that turn messy spatial data into route networks planners can act on — across cycling, road safety and resilient infrastructure.",
      zh: "我开发开源工具，把杂乱的空间数据转化为规划者可直接使用的交通路网——涵盖骑行、道路安全与韧性基础设施。"
    },
    email: "wangzhao0217@gmail.com",
    location: {
      en: "Leeds, UK",
      zh: "英国 · 利兹"
    },
    links: {
      github: "https://github.com/wangzhao0217",
      scholar: "https://scholar.google.com/scholar?q=Zhao+Wang+transport+network+rubberised+concrete"
    }
  },
  stats: [{
    value: "18",
    label: {
      en: "Journal articles",
      zh: "期刊论文"
    },
    sublabel: {
      en: "peer-reviewed",
      zh: "同行评审"
    }
  }, {
    value: "6",
    label: {
      en: "Open-source packages",
      zh: "开源软件包"
    },
    sublabel: {
      en: "R · Python · Rust",
      zh: "R · Python · Rust"
    }
  }, {
    value: "5",
    label: {
      en: "Conference papers",
      zh: "会议论文"
    },
    sublabel: {
      en: "incl. Best Paper",
      zh: "含最佳论文奖"
    }
  }, {
    value: "10yr",
    label: {
      en: "Research & practice",
      zh: "科研与工程"
    },
    sublabel: {
      en: "UK · EU",
      zh: "英国 · 欧盟"
    }
  }],
  about: [{
    en: "I'm a transport data scientist with a Ph.D. in Civil & Structural Engineering and over six years of experience in geospatial analysis, network modelling and spatial database design.",
    zh: "我是一名交通数据科学家，拥有土木与结构工程博士学位，在地理空间分析、网络建模与空间数据库设计领域拥有六年以上经验。"
  }, {
    en: "My work bridges academic research and national infrastructure practice — from open-source R, Python and Rust packages adopted by UK government transport agencies, to machine learning for infrastructure condition assessment.",
    zh: "我的工作连接学术研究与国家基础设施实践——从被英国政府交通机构采用的开源 R、Python 与 Rust 软件包，到面向基础设施状态评估的机器学习。"
  }],
  // ---- Three career parts (mirrors the interview deck) ----
  parts: [{
    num: "PART 1",
    title: {
      en: "Civil & Structural Engineering",
      zh: "土木与结构工程"
    },
    period: "2015 – 2022",
    roles: [{
      en: "Ph.D., Civil & Structural Engineering — University of Sheffield",
      zh: "土木与结构工程博士 — 英国谢菲尔德大学"
    }, {
      en: "Research Associate — Nuclear AMRC, University of Sheffield",
      zh: "研究助理 — 英国先进制造研究中心 Nuclear AMRC"
    }, {
      en: "Structural Engineer — Waterman Group",
      zh: "结构工程师 — 英国 Waterman Group"
    }],
    blurb: {
      en: "Material constitutive modelling, large-scale nonlinear FE dynamics and special-structure assessment.",
      zh: "材料本构建模、大型非线性有限元动力学与特种结构评估。"
    },
    projects: [{
      title: {
        en: "Concrete constitutive modelling & FE simulation",
        zh: "混凝土本构与有限元仿真"
      },
      image: null,
      blurb: {
        en: "Constitutive models for high-performance & rubberised concrete; 3D nonlinear FE dynamics for a 9 m drop and near-field blast on nuclear decommissioning containers (DCC).",
        zh: "高性能与橡胶混凝土本构模型；核退役容器（DCC）9 米极限跌落与近场爆炸的三维非线性有限元动力仿真。"
      },
      tags: [{
        tone: "kraft",
        label: {
          en: "FEA",
          zh: "有限元"
        }
      }, {
        tone: "slate",
        label: {
          en: "Concrete",
          zh: "混凝土"
        }
      }],
      links: []
    }, {
      title: {
        en: "Structural assessment & AI crack detection",
        zh: "结构评估与 AI 智能检测"
      },
      image: null,
      blurb: {
        en: "CS454 CAT-2 assessment of Greys Bridge; Drax FGD steel-structure stability; AI image-based concrete crack monitoring.",
        zh: "Greys 大桥 CS454 CAT-2 评估；Drax 电厂 FGD 钢结构稳定性分析；AI 图像混凝土裂缝智能监测。"
      },
      tags: [{
        tone: "slate",
        label: {
          en: "Assessment",
          zh: "结构评估"
        }
      }, {
        tone: "heather",
        label: "AI"
      }],
      links: []
    }]
  }, {
    num: "PART 2",
    title: {
      en: "National Highways & TRL",
      zh: "英国国家公路局 & 英国交通研究所"
    },
    period: "2020 – present",
    roles: [{
      en: "Senior Asset Data & Intelligence Analyst — National Highways",
      zh: "高级资产数据与智能分析师 — 英国国家公路局"
    }, {
      en: "Researcher — Transport Research Laboratory (TRL)",
      zh: "研究员 — 英国交通研究所 (TRL)"
    }],
    blurb: {
      en: "Infrastructure data governance and transport AI at national scale.",
      zh: "国家级基础设施数据治理与交通人工智能。"
    },
    projects: [{
      title: {
        en: "Unpaved Road Condition Analysis",
        zh: "未铺装路网 AI 评估"
      },
      image: "../../assets/unpaved-roads-ml.jpg",
      imageAlt: {
        en: "Multimodal machine-learning architecture diagram",
        zh: "多模态机器学习神经网络架构图"
      },
      meta: {
        en: "TRL · Python · multimodal ML",
        zh: "TRL · Python · 多模态机器学习"
      },
      blurb: {
        en: "Assessing unpaved roads from satellite imagery with multimodal ML and a fine-tuned LLaVA vision-language model — cut survey cost to €22/km, deployed in Tanzania & Madagascar. Best Paper, ITS Asia-Pacific.",
        zh: "用多模态机器学习与微调的 LLaVA 视觉大模型评估未铺装道路，将调查成本降至约 €22/km，应用于坦桑尼亚与马达加斯加；获 ITS 亚太会议最佳论文奖。"
      },
      tags: [{
        tone: "kraft",
        label: "Python"
      }, {
        tone: "heather",
        label: {
          en: "Deep learning",
          zh: "深度学习"
        }
      }, {
        tone: "slate",
        label: {
          en: "Remote sensing",
          zh: "遥感"
        }
      }],
      links: [{
        label: "GitHub",
        href: "https://github.com/wangzhao0217/satellite-unpaved-roads",
        icon: "github"
      }, {
        label: "DOI",
        href: "https://doi.org/10.1016/j.jtrangeo.2025.104525",
        icon: "link-45deg"
      }]
    }, {
      title: {
        en: "National asset data alignment: GDMS ⇄ Confirm",
        zh: "国家级资产数据空间对齐：GDMS ⇄ Confirm"
      },
      image: null,
      meta: {
        en: "National Highways · Python · ArcPy",
        zh: "英国国家公路局 · Python · ArcPy"
      },
      blurb: {
        en: "Rebuilt the spatial-matching engine in Python/ArcPy to reconcile two national drainage-asset datasets across the Strategic Road Network — cut data deviation by 99% and manual review by 85%, now deployed nationwide.",
        zh: "用 Python/ArcPy 重构空间匹配引擎，对齐国家级路网两大排水资产数据库，数据偏差降低 99%、人工复审减少 85%，并已在全国推广部署。"
      },
      tags: [{
        tone: "slate",
        label: "ArcGIS Pro"
      }, {
        tone: "kraft",
        label: "Python"
      }, {
        tone: "sage",
        label: {
          en: "ETL",
          zh: "数据管线"
        }
      }],
      links: []
    }, {
      title: {
        en: "Road safety & flood-risk intelligence",
        zh: "道路安全与防汛风险智能分析"
      },
      image: "../../assets/flood-checker.png",
      imageAlt: {
        en: "Flood-event image checker beside a road-asset map",
        zh: "防汛事件图像核查工具与路网资产地图"
      },
      meta: {
        en: "TRL / National Highways · ML · GIS",
        zh: "TRL / 国家公路局 · 机器学习 · GIS"
      },
      blurb: {
        en: "Skid-resistance forecasting from climate data; a collision-risk model for Ireland's roads; PointCNN LiDAR asset extraction; and STATS19 collision clustering to prioritise the Road Liable to Flooding programme.",
        zh: "基于气候数据的路面抗滑预测；为爱尔兰道路开发的碰撞风险模型；PointCNN 激光雷达资产提取；以及基于 STATS19 碰撞聚类的易涝路段防汛优先级排序。"
      },
      tags: [{
        tone: "heather",
        label: {
          en: "ML",
          zh: "机器学习"
        }
      }, {
        tone: "slate",
        label: {
          en: "LiDAR",
          zh: "激光雷达"
        }
      }, {
        tone: "clay",
        label: {
          en: "Flood risk",
          zh: "防汛"
        }
      }],
      links: []
    }]
  }, {
    num: "PART 3",
    title: {
      en: "University of Leeds — ITS",
      zh: "英国利兹大学 · 交通研究所"
    },
    period: "2023 – present",
    roles: [{
      en: "Research Fellow — Institute for Transport Studies (Horizon Europe)",
      zh: "研究员 — 交通研究所（欧盟 Horizon Europe 项目）"
    }],
    blurb: {
      en: "National transport-network modelling and high-performance open-source GIS.",
      zh: "国家级交通网络建模与高性能开源 GIS。"
    },
    projects: [{
      title: {
        en: "Network Planning Tool for Scotland",
        zh: "苏格兰国家自行车路网规划平台 (NPT)"
      },
      image: "../../assets/npt-scotland.png",
      imageAlt: {
        en: "Cycle route network coloured by flow, Edinburgh",
        zh: "爱丁堡自行车路网按流量着色"
      },
      meta: {
        en: "Lead developer · R · live tool",
        zh: "主要开发者 · R · 在线平台"
      },
      blurb: {
        en: "A national, open cycle-network planning tool used by all 32 Scottish local authorities to estimate cycle uptake and prioritise investment (NPT & NPW).",
        zh: "国家级开源自行车路网规划平台（NPT 与 NPW），已被苏格兰全部 32 个地方政府用于估算骑行需求并辅助投资决策。"
      },
      tags: [{
        tone: "slate",
        label: "R"
      }, {
        tone: "sage",
        label: {
          en: "Route networks",
          zh: "路网"
        }
      }],
      links: [{
        label: "GitHub",
        href: "https://github.com/nptscot/npt",
        icon: "github"
      }, {
        label: {
          en: "Live tool",
          zh: "在线平台"
        },
        href: "https://nptscot.github.io",
        icon: "box-arrow-up-right"
      }]
    }, {
      title: {
        en: "stplanr",
        zh: "stplanr"
      },
      image: "../../assets/od-desire-lines.png",
      imageAlt: {
        en: "Origin–destination desire lines across a region",
        zh: "区域起讫点（OD）期望线"
      },
      meta: {
        en: "Contributor · R · 50,000+ downloads",
        zh: "贡献者 · R · 下载量 5 万+"
      },
      blurb: {
        en: "Sustainable transport planning with R: desire lines, routing and travel-flow aggregation. An rOpenSci package in production use by UK government transport agencies.",
        zh: "R 语言可持续交通规划包：期望线、路径计算与流量聚合。rOpenSci 旗下软件包，被英国政府交通机构投入实际使用。"
      },
      tags: [{
        tone: "slate",
        label: "R"
      }, {
        tone: "heather",
        label: "rOpenSci"
      }],
      links: [{
        label: "GitHub",
        href: "https://github.com/ropensci/stplanr",
        icon: "github"
      }, {
        label: "DOI",
        href: "https://doi.org/10.32614/RJ-2018-053",
        icon: "link-45deg"
      }]
    }, {
      title: {
        en: "corenet",
        zh: "corenet"
      },
      image: null,
      meta: {
        en: "First author · R · J. Transport Geography 2026",
        zh: "第一作者 · R · 《Journal of Transport Geography》2026"
      },
      blurb: {
        en: "A flexible framework for generating and prioritising 'core' cycle network designs, combining diverse datasets with user requirements — used by Transport Scotland and DfT.",
        zh: "一套灵活的框架，结合多源数据与用户需求生成并优选『核心』自行车路网，已应用于苏格兰交通局与英国交通部。"
      },
      tags: [{
        tone: "slate",
        label: "R"
      }, {
        tone: "sage",
        label: {
          en: "Networks",
          zh: "路网"
        }
      }, {
        tone: "clay",
        label: {
          en: "Optimisation",
          zh: "优化"
        }
      }],
      links: [{
        label: "GitHub",
        href: "https://github.com/nptscot/corenet",
        icon: "github"
      }, {
        label: "DOI",
        href: "https://doi.org/10.1016/j.jtrangeo.2025.104549",
        icon: "link-45deg"
      }]
    }, {
      title: {
        en: "parenx & anime — network simplification",
        zh: "parenx 与 anime — 路网简化与匹配"
      },
      image: null,
      meta: {
        en: "Python · R · Rust",
        zh: "Python · R · Rust"
      },
      blurb: {
        en: "parenx simplifies complex networks via image skeletonisation; anime is a Rust-accelerated route-matching engine (built with Esri engineers) delivering up to 1000× speed-ups on large-scale spatial computation.",
        zh: "parenx 基于图像骨架化简化复杂路网；anime 是与 Esri 工程师合作、用 Rust 重构的路网匹配引擎，在大规模空间计算中实现最高 1000 倍提速。"
      },
      tags: [{
        tone: "kraft",
        label: "Python"
      }, {
        tone: "heather",
        label: "Rust"
      }],
      links: [{
        label: "parenx",
        href: "https://pypi.org/project/parenx/",
        icon: "box-arrow-up-right"
      }, {
        label: "anime",
        href: "https://github.com/JosiahParry/anime",
        icon: "github"
      }]
    }, {
      title: {
        en: "Horizon Europe — ZEV-UP · ePowerMove · WibiCharge",
        zh: "欧盟 Horizon Europe — ZEV-UP · ePowerMove · WibiCharge"
      },
      image: null,
      meta: {
        en: "Lead researcher (Leeds) · EV systems",
        zh: "利兹大学项目负责人 · 新能源交通"
      },
      blurb: {
        en: "Leading Leeds' work on EU EV projects: feasibility & life-cycle assessment for frugal EVs (ZEV-UP), smart-charging network planning (ePowerMove) and wireless-charging infrastructure siting (WibiCharge).",
        zh: "负责利兹大学在欧盟新能源汽车项目中的工作：低成本电动车可行性与全生命周期评估（ZEV-UP）、智能充电网络规划（ePowerMove）与无线充电基础设施选址（WibiCharge）。"
      },
      tags: [{
        tone: "sage",
        label: {
          en: "EV",
          zh: "电动车"
        }
      }, {
        tone: "slate",
        label: {
          en: "Optimisation",
          zh: "优化"
        }
      }],
      links: []
    }]
  }],
  education: [{
    degree: {
      en: "Ph.D., Civil & Structural Engineering",
      zh: "土木与结构工程 博士"
    },
    school: {
      en: "University of Sheffield",
      zh: "英国谢菲尔德大学"
    },
    year: "2015 – 2019"
  }, {
    degree: {
      en: "MSc, Civil Engineering (Distinction)",
      zh: "土木工程 硕士（优异）"
    },
    school: {
      en: "Cardiff University",
      zh: "英国卡迪夫大学"
    },
    year: "2013 – 2014"
  }, {
    degree: {
      en: "BSc, Civil Engineering",
      zh: "土木工程 学士"
    },
    school: {
      en: "Shijiazhuang Railway University",
      zh: "石家庄铁道大学"
    },
    year: "2008 – 2012"
  }],
  talk: {
    title: {
      en: "Assessment of Unpaved Road Networks using Satellite Imagery & Machine Learning",
      zh: "基于卫星影像与机器学习的未铺装路网评估"
    },
    venue: {
      en: "Intelligent Transport Systems Asia-Pacific, Chengdu — Best Paper Award",
      zh: "智能交通系统亚太会议，成都 — 最佳论文奖"
    },
    poster: "../../assets/unpaved-roads-ml.jpg",
    youtubeId: "",
    // ← set your own talk/demo recording id
    note: {
      en: "Drop in your own talk or demo recording — set talk.youtubeId in site-data.js.",
      zh: "在 site-data.js 中设置 talk.youtubeId，即可嵌入你的演讲或演示录像。"
    }
  },
  // Academic titles/venues stay in English (papers are published in English).
  publications: [{
    year: "2026",
    type: "Journal",
    authors: "Wang, Z., Hu, H., Mahfouz, H., Fonseca-Zamora, J.P., Lucas-Smith, M., Carlino, D., Calder, A., Hu, C., Davis, M., Talbot, J., Lovelace, R.",
    title: "Corenet: a flexible framework for generating and prioritising core cycle network designs",
    venue: "Journal of Transport Geography, 131, 104549",
    doi: "10.1016/j.jtrangeo.2025.104549"
  }, {
    year: "2026",
    type: "Journal",
    authors: "Wang, Z., Xin, C., Workman, R., Hu, H., Yu, X., Tian, Y., Lovelace, R., Zhang, J., Chen, H.",
    title: "Advancing unpaved road assessment in Africa: leveraging multimodal machine learning and large language-and-vision assistants across satellite imagery resolutions",
    venue: "Journal of Transport Geography, 131, 104525",
    doi: "10.1016/j.jtrangeo.2025.104525"
  }, {
    year: "2025",
    type: "Journal",
    authors: "Deakin, W., Wang, Z., Parry, J., Lovelace, R.",
    title: "Route network simplification for transport planning",
    venue: "Environment and Planning B: Urban Analytics and City Science",
    doi: "10.1177/23998083251387986"
  }, {
    year: "2025",
    type: "Conference",
    authors: "Lovelace, R., Wang, Z., Mahfouz, H.",
    title: "Mapping, classifying, and integrating diverse street network datasets: new methods and open source tools for active travel planning",
    venue: "33rd GIS Research UK Conference (GISRUK), Bristol, UK"
  }, {
    year: "2025",
    type: "Journal",
    authors: "Feng, W.K., Xin, C.L., Wang, Z., Yu, X.Y.",
    title: "Design of a type of strike-slip active fault container for shaking table tests",
    venue: "Journal of Rock Mechanics and Geotechnical Engineering",
    doi: "10.1016/j.jrmge.2025.03.001"
  }, {
    year: "2025",
    type: "Journal",
    authors: "Fei, Y., Xin, C.L., Wang, Z., Yu, X.Y., Feng, W.K., Hu, Y.",
    title: "Investigating deformation and failure mechanisms of discontinuous anti-dip bench rock slopes through shaking table tests and numerical simulations",
    venue: "Rock Mechanics and Rock Engineering, 58, 5329–5361",
    doi: "10.1007/s00603-024-04346-y"
  }, {
    year: "2025",
    type: "Journal",
    authors: "Xin, C.L., Zeng, L., Wang, Z., Feng, W.K., Yu, X., Hajirasouliha, I.",
    title: "Characterizing dynamic responses of rock slopes to near-fault pulse-like ground motions: insights from shaking table tests and numerical analysis",
    venue: "Rock Mechanics and Rock Engineering",
    doi: "10.1007/s00603-025-04798-w"
  }, {
    year: "2025",
    type: "Journal",
    authors: "Xin, C.L., Li, W.H., Wang, Z., Feng, W.K., Yu, X., Hajirasouliha, I.",
    title: "Seismic stability evaluation of benched bedding rock slopes with varying landforms",
    venue: "Engineering Geology, 344, 108216",
    doi: "10.1016/j.enggeo.2025.108216"
  }, {
    year: "2025",
    type: "Journal",
    authors: "Xin, C.L., Yang, L.J., Wang, Z., Yu, X., Feng, W.K.",
    title: "Seismic resilience analysis of high-speed railway tunnels across fault zones using ensemble learning approach",
    venue: "Underground Space",
    doi: "10.1016/j.undsp.2025.04.011"
  }, {
    year: "2024",
    type: "Journal",
    authors: "Wang, Z., Hu, H., Papastergiou, P., Angelakopoulos, H., Guadagnini, M., Pilakoutas, K.",
    title: "Effect of fibre length on the mechanical properties of SFRC using recycled steel fibres",
    venue: "Construction and Building Materials, 415, 134890",
    doi: "10.1016/j.conbuildmat.2024.134890"
  }, {
    year: "2024",
    type: "Journal",
    authors: "Xin, C.L., Fei, Y., Feng, W.K., Wang, Z., Li, W.H.",
    title: "Seismic responses and shattering cumulative effects of bedding parallel stepped rock slope: model test and numerical simulation",
    venue: "Journal of Rock Mechanics and Geotechnical Engineering",
    doi: "10.1016/j.jrmge.2024.03.031"
  }, {
    year: "2024",
    type: "Journal",
    authors: "Xin, C.L., Li, W.H., Wang, Z., Feng, W.K., Hajirasouliha, I., Yu, X.Y.",
    title: "Shaking table tests on the stability of dip and anti-dip rock slopes with structural planes induced by seismic motions",
    venue: "Engineering Geology, 340, 107707",
    doi: "10.1016/j.enggeo.2024.107707"
  }, {
    year: "2024",
    type: "Conference",
    authors: "Lovelace, R., Wang, Z., Deakin, W., Parry, J.",
    title: "Reproducible methods for network simplification for data visualisation and transport planning",
    venue: "32nd GIS Research UK Conference (GISRUK), Leeds, UK",
    doi: "10.5281/zenodo.11077553"
  }, {
    year: "2023",
    type: "Journal",
    authors: "Workman, R., Wong, P., Wright, A., Wang, Z.",
    title: "Prediction of unpaved road conditions using high-resolution optical satellite imagery and machine learning",
    venue: "Remote Sensing, 15(16), 3985",
    doi: "10.3390/rs15163985"
  }, {
    year: "2023",
    type: "Journal",
    authors: "Chen, L., Wang, Z., Li, B., de Borst, R.",
    title: "Computation of the crack opening displacement in the phase-field model",
    venue: "International Journal of Solids and Structures, 283, 112496",
    doi: "10.1016/j.ijsolstr.2023.112496"
  }, {
    year: "2022",
    type: "Journal",
    authors: "Xin, C.L., Wang, Z., Hajirasouliha, I., Chen, T., Gao, B.",
    title: "Seismic response mechanisms of casing-shape composite tunnel lining: theoretical analysis and shaking table test verification",
    venue: "Soil Dynamics and Earthquake Engineering, 162, 107440",
    doi: "10.1016/j.soildyn.2022.107440"
  }, {
    year: "2022",
    type: "Conference",
    authors: "Wang, Z., Workman, R.",
    title: "Assessment of unpaved road network using satellite imagery and machine learning",
    venue: "Intelligent Transport Systems Asia-Pacific, Chengdu, China",
    best: true
  }, {
    year: "2020",
    type: "Journal",
    authors: "Wang, Z., Hajirasouliha, I., Guadagnini, M., Pilakoutas, K.",
    title: "Axial behaviour of FRP-confined concrete columns: an experimental investigation",
    venue: "Construction and Building Materials, 263, 121023",
    doi: "10.1016/j.conbuildmat.2020.121023"
  }, {
    year: "2020",
    type: "Journal",
    authors: "Wang, Z., Hu, H., Guadagnini, M., Pilakoutas, K.",
    title: "Tensile stress-strain characteristics of rubberised concrete from flexural tests",
    venue: "Construction and Building Materials, 236, 117591",
    doi: "10.1016/j.conbuildmat.2019.117591"
  }, {
    year: "2019",
    type: "Journal",
    authors: "Wang, Z., Chen, L., Guadagnini, M., Pilakoutas, K.",
    title: "Shear behaviour model for confined and unconfined rubberised concrete",
    venue: "Journal of Composites for Construction",
    doi: "10.1061/(ASCE)CC.1943-5614.0000962"
  }, {
    year: "2018",
    type: "Journal",
    authors: "Hu, H., Wang, Z., Figueiredo, F.P., Papastergiou, P., Guadagnini, M., Pilakoutas, K.",
    title: "Post-cracking tensile behaviour of blended steel fibre reinforced concrete",
    venue: "Structural Concrete",
    doi: "10.1002/suco.201800100"
  }, {
    year: "2017",
    type: "Conference",
    authors: "Wang, Z., Margarit, D.E., Guadagnini, M., Pilakoutas, K.",
    title: "Shear behaviour of confined and unconfined rubberised concrete",
    venue: "1st Int. Conf. on Construction Materials for Sustainable Future, Zadar, Croatia"
  }, {
    year: "2017",
    type: "Conference",
    authors: "Margarit, D.E., Wang, Z., Guadagnini, M., Pilakoutas, K.",
    title: "Proof-of-concept testing of FRP confined rubberised concrete coupling beams",
    venue: "Advanced Composites in Construction (ACIC), Sheffield, UK"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/site-data.js", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/site-hero.jsx
try { (() => {
/* site-hero.jsx — hero + stats band */
const HERO_NS = window.ZhaoWangResearchDesignSystem_65eff9;
function Hero() {
  const {
    Button,
    Stat
  } = HERO_NS;
  const S = window.SITE;
  const p = S.person;
  const lang = window.useLang();
  const t = v => window.tx(v, lang);
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(120% 80% at 85% -10%, var(--clay-100) 0%, transparent 55%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "clamp(3rem, 8vw, 6rem) var(--gutter) clamp(2.5rem, 5vw, 4rem)",
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
      gap: "clamp(2rem, 5vw, 4rem)",
      alignItems: "center"
    },
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.6rem",
      marginBottom: "1.2rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--sage)",
      boxShadow: "0 0 0 4px var(--success-soft)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, t(S.ui.hero.status))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(2.6rem, 6vw, 4rem)",
      lineHeight: 1.02,
      margin: "0 0 0.4rem",
      letterSpacing: "-0.025em"
    }
  }, lang === "zh" ? p.nameZh : p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(1.2rem, 2.4vw, 1.6rem)",
      color: "var(--clay-600)",
      margin: "0 0 0.4rem",
      fontWeight: 500
    }
  }, t(p.role)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      margin: "0 0 1.4rem",
      fontWeight: 600
    }
  }, t(p.affiliation)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--text-body)",
      maxWidth: "46ch",
      margin: "0 0 2rem",
      lineHeight: "var(--leading-relaxed)"
    }
  }, t(p.tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#work",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, t(S.ui.hero.seeWork)), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    href: p.links.github,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "github"
    })
  }, "GitHub"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    href: p.links.scholar,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "mortarboard-fill"
    })
  }, t(S.ui.hero.scholar)))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      border: "1px solid var(--border-color)",
      boxShadow: "var(--shadow-lg)",
      background: "var(--surface-card)",
      transform: "rotate(-1.2deg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/npt-scotland.png",
    alt: "Cycle route network coloured by flow, Edinburgh",
    style: {
      width: "100%",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: "absolute",
      bottom: "-0.9rem",
      left: "1rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      background: "var(--surface-card)",
      border: "1px solid var(--border-color)",
      borderRadius: "var(--radius-pill)",
      padding: "0.4rem 0.9rem",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 3,
      background: "var(--flow-gradient)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, lang === "zh" ? "苏格兰国家路网规划平台" : "Network Planning Tool · Scotland")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-color)",
      borderBottom: "1px solid var(--border-color)",
      background: "var(--surface-raised)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "1.75rem var(--gutter)",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "1.5rem"
    },
    className: "stats-grid"
  }, S.stats.map((s, i) => /*#__PURE__*/React.createElement(Stat, {
    key: i,
    value: s.value,
    label: t(s.label),
    sublabel: t(s.sublabel)
  })))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/site-hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/site-i18n.jsx
try { (() => {
/* site-i18n.jsx — bilingual plumbing (EN / 中文) */

const LangContext = React.createContext({
  lang: "en",
  setLang: () => {}
});
window.LangContext = LangContext;

/** Read the active language code ("en" | "zh"). */
function useLang() {
  return React.useContext(LangContext).lang;
}
window.useLang = useLang;

/** Resolve a possibly-bilingual value: { en, zh } → string; passthrough otherwise. */
function tx(v, lang) {
  if (v == null) return "";
  if (typeof v === "object" && !Array.isArray(v) && ("en" in v || "zh" in v)) {
    return v[lang] != null ? v[lang] : v.en != null ? v.en : "";
  }
  return v;
}
window.tx = tx;

/** Segmented EN / 中 switch. */
function LangToggle({
  compact
}) {
  const {
    lang,
    setLang
  } = React.useContext(LangContext);
  const opt = (code, label) => {
    const active = lang === code;
    return /*#__PURE__*/React.createElement("button", {
      key: code,
      onClick: () => setLang(code),
      "aria-pressed": active,
      style: {
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
        transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)"
      }
    }, label);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "2px",
      padding: "3px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-strong)",
      background: "var(--surface-card)"
    }
  }, opt("en", "EN"), opt("zh", "中"));
}
window.LangToggle = LangToggle;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/site-i18n.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/site-nav.jsx
try { (() => {
/* site-nav.jsx — sticky top navigation */
const NS = window.ZhaoWangResearchDesignSystem_65eff9;
function Icon({
  name,
  style
}) {
  return /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${name}`,
    style: style,
    "aria-hidden": "true"
  });
}
window.Icon = Icon;
function Nav() {
  const {
    Button
  } = NS;
  const S = window.SITE;
  const lang = window.useLang();
  const t = v => window.tx(v, lang);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const sections = [[S.ui.nav.about, "about"], [S.ui.nav.work, "work"], [S.ui.nav.publications, "publications"]];
  const linkStyle = {
    fontFamily: "var(--font-ui)",
    fontSize: "var(--text-sm)",
    fontWeight: "var(--weight-semibold)",
    color: "var(--text-body)",
    textDecoration: "none",
    padding: "0.4rem 0.2rem"
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: scrolled ? "rgba(240,238,230,0.85)" : "transparent",
      backdropFilter: scrolled ? "saturate(160%) blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-color)" : "1px solid transparent",
      transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "0.85rem var(--gutter)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.6rem",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--radius-pill)",
      background: "var(--clay)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 16
    }
  }, "ZW"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-lg)",
      color: "var(--text-heading)"
    }
  }, lang === "zh" ? "王曌" : "Zhao Wang")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "1.4rem"
    },
    className: "nav-links"
  }, sections.map(([label, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: `#${id}`,
    style: linkStyle,
    onMouseEnter: e => e.currentTarget.style.color = "var(--clay-600)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-body)"
  }, t(label))), /*#__PURE__*/React.createElement(window.LangToggle, null), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    href: "#contact",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "envelope"
    })
  }, t(S.ui.nav.contact)))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/site-nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/site-projects.jsx
try { (() => {
/* site-projects.jsx — shared Section header, Career (3 parts), Talks video */
const PROJ_NS = window.ZhaoWangResearchDesignSystem_65eff9;
function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tint
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: tint || "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "clamp(3rem, 7vw, 5.5rem) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-md)",
      marginBottom: "2.5rem"
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.6rem",
      marginBottom: "0.9rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 2,
      background: "var(--clay)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--clay-600)"
    }
  }, eyebrow)) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
      margin: "0 0 0.6rem"
    }
  }, title), intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--text-muted)",
      margin: 0,
      maxWidth: "62ch"
    }
  }, intro) : null), children));
}
window.Section = Section;
function PartBlock({
  part,
  index
}) {
  const {
    ProjectCard
  } = PROJ_NS;
  const lang = window.useLang();
  const t = v => window.tx(v, lang);
  const S = window.SITE;
  const mapLinks = links => (links || []).map(l => ({
    label: t(l.label),
    href: l.href,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: l.icon
    })
  }));
  const mapTags = tags => (tags || []).map(tg => ({
    tone: tg.tone,
    label: t(tg.label)
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: index === 0 ? 0 : "clamp(3rem, 6vw, 5rem)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
      gap: "clamp(1.5rem, 4vw, 3rem)",
      alignItems: "start",
      paddingBottom: "2rem",
      marginBottom: "2rem",
      borderBottom: "1px solid var(--divider)"
    },
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "0.9rem",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-wide)",
      color: "#fff",
      background: "var(--clay)",
      padding: "0.25rem 0.6rem",
      borderRadius: "var(--radius-pill)"
    }
  }, part.num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, part.period)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
      margin: "0.8rem 0 0",
      lineHeight: 1.15
    }
  }, t(part.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-muted)",
      margin: "0.6rem 0 0"
    }
  }, t(part.blurb))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-subtle)",
      marginBottom: "0.8rem"
    }
  }, t(S.ui.sections.rolesLabel)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.6rem"
    }
  }, part.roles.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "0.6rem",
      alignItems: "flex-start",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--clay)",
      marginTop: "0.15rem"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dot"
  })), /*#__PURE__*/React.createElement("span", null, t(r))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "1.5rem"
    }
  }, part.projects.map((pr, i) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: i,
    image: pr.image,
    imageAlt: t(pr.imageAlt),
    title: t(pr.title),
    meta: t(pr.meta),
    blurb: t(pr.blurb),
    tags: mapTags(pr.tags),
    links: mapLinks(pr.links)
  }))));
}
function Career() {
  const S = window.SITE;
  const lang = window.useLang();
  const t = v => window.tx(v, lang);
  return /*#__PURE__*/React.createElement(Section, {
    id: "work",
    eyebrow: t(S.ui.sections.workEyebrow),
    title: t(S.ui.sections.workTitle),
    intro: t(S.ui.sections.workIntro)
  }, S.parts.map((part, i) => /*#__PURE__*/React.createElement(PartBlock, {
    key: i,
    part: part,
    index: i
  })));
}
window.Career = Career;
function Talks() {
  const {
    Badge
  } = PROJ_NS;
  const S = window.SITE;
  const t = v => window.tx(v, window.useLang());
  const lang = window.useLang();
  const tk = S.talk;
  const [playing, setPlaying] = React.useState(false);
  const hasVideo = !!tk.youtubeId;
  return /*#__PURE__*/React.createElement(Section, {
    id: "talks",
    eyebrow: t(S.ui.sections.talksEyebrow),
    title: t(S.ui.sections.talksTitle),
    tint: "var(--surface-raised)",
    intro: t(S.ui.sections.talksIntro)
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      border: "1px solid var(--border-color)",
      boxShadow: "var(--shadow-lg)",
      background: "#000"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 9",
      background: "var(--ink-900)"
    }
  }, playing && hasVideo ? /*#__PURE__*/React.createElement("iframe", {
    src: `https://www.youtube-nocookie.com/embed/${tk.youtubeId}?autoplay=1`,
    title: t(tk.title),
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      border: 0
    },
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }) : /*#__PURE__*/React.createElement("button", {
    onClick: () => hasVideo && setPlaying(true),
    "aria-label": "Play video",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      border: 0,
      padding: 0,
      cursor: hasVideo ? "pointer" : "default",
      background: "transparent"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: tk.poster,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 76,
      height: 76,
      borderRadius: "50%",
      background: "var(--clay)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 30,
      boxShadow: "var(--shadow-clay)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play-fill"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      color: "var(--ivory)",
      opacity: 0.85,
      maxWidth: "40ch",
      textAlign: "center",
      padding: "0 1rem"
    }
  }, hasVideo ? lang === "zh" ? "播放演讲" : "Play talk" : t(tk.note))))), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: "1.2rem 1.5rem",
      background: "var(--surface-card)",
      display: "flex",
      gap: "1rem",
      alignItems: "flex-start",
      justifyContent: "space-between",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 0.3rem",
      fontSize: "var(--text-lg)"
    }
  }, t(tk.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, t(tk.venue))), /*#__PURE__*/React.createElement(Badge, {
    tone: "clay",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "award-fill"
    })
  }, t(S.ui.pubs.best)))));
}
window.Talks = Talks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/site-projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/site-record.jsx
try { (() => {
/* site-record.jsx — About, Education, Publications */
const REC_NS = window.ZhaoWangResearchDesignSystem_65eff9;
function About() {
  const {
    Callout,
    Badge,
    Avatar
  } = REC_NS;
  const S = window.SITE;
  const lang = window.useLang();
  const t = v => window.tx(v, lang);
  const focus = [{
    en: "Transport data science",
    zh: "交通数据科学"
  }, {
    en: "Route-network generation",
    zh: "路网生成"
  }, {
    en: "GIS & spatial analysis",
    zh: "GIS 与空间分析"
  }, {
    en: "Machine / deep learning",
    zh: "机器学习 / 深度学习"
  }, {
    en: "Remote sensing",
    zh: "遥感"
  }, {
    en: "R · Python · Rust",
    zh: "R · Python · Rust"
  }];
  const calloutTitle = {
    en: "How I work",
    zh: "工作方式"
  };
  const calloutBody = {
    en: "Reproducible by default — every figure and tool regenerates from open data and version-controlled pipelines, so the work stays auditable and reusable.",
    zh: "默认可复现——每一张图、每一个工具都基于开放数据与版本受控的流程自动生成，确保工作可审计、可复用。"
  };
  return /*#__PURE__*/React.createElement(Section, {
    id: "about",
    eyebrow: t(S.ui.sections.aboutEyebrow),
    title: t(S.ui.sections.aboutTitle)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 0.9fr)",
      gap: "clamp(2rem, 5vw, 4rem)",
      alignItems: "start"
    },
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", null, S.about.map((para, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: "var(--text-md)",
      color: "var(--text-body)",
      marginBottom: "1.1rem",
      lineHeight: "var(--leading-relaxed)"
    }
  }, t(para))), /*#__PURE__*/React.createElement(Callout, {
    type: "tip",
    title: t(calloutTitle)
  }, t(calloutBody))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-color)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-6)",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Zhao Wang",
    size: "lg",
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      color: "var(--text-heading)"
    }
  }, lang === "zh" ? "王曌" : "Zhao Wang"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, t(S.person.location)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-2xs)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-subtle)",
      marginBottom: "0.8rem"
    }
  }, lang === "zh" ? "研究方向" : "Focus areas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.45rem"
    }
  }, focus.map((f, i) => /*#__PURE__*/React.createElement(Badge, {
    key: i,
    tone: ["slate", "sage", "kraft", "heather"][i % 4],
    variant: "soft"
  }, t(f)))))));
}
window.About = About;
function Publications() {
  const {
    PublicationItem
  } = REC_NS;
  const S = window.SITE;
  const lang = window.useLang();
  const t = v => window.tx(v, lang);
  const [filter, setFilter] = React.useState("All");
  const filters = [["All", S.ui.pubs.all], ["Journal", S.ui.pubs.journal], ["Conference", S.ui.pubs.conference]];
  const list = S.publications.filter(p => filter === "All" || p.type === filter);
  return /*#__PURE__*/React.createElement(Section, {
    id: "publications",
    eyebrow: t(S.ui.sections.pubsEyebrow),
    title: t(S.ui.sections.pubsTitle),
    intro: t(S.ui.sections.pubsIntro)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0.5rem",
      marginBottom: "0.5rem",
      flexWrap: "wrap"
    }
  }, filters.map(([key, label]) => {
    const active = filter === key;
    const count = key === "All" ? S.publications.length : S.publications.filter(p => p.type === key).length;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => setFilter(key),
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: "var(--text-sm)",
        fontWeight: 600,
        padding: "0.4rem 0.95rem",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        border: `1px solid ${active ? "var(--clay)" : "var(--border-strong)"}`,
        background: active ? "var(--clay)" : "transparent",
        color: active ? "#fff" : "var(--text-body)",
        transition: "all var(--dur-fast) var(--ease-out)"
      }
    }, t(label), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.7
      }
    }, "\xB7 ", count));
  })), /*#__PURE__*/React.createElement("div", null, list.map((p, i) => {
    const links = p.doi ? [{
      label: t(S.ui.pubs.doi),
      href: `https://doi.org/${p.doi}`,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "link-45deg"
      })
    }] : [{
      label: t(S.ui.pubs.find),
      href: `https://scholar.google.com/scholar?q=${encodeURIComponent(p.title)}`,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "search"
      })
    }];
    const typeLabel = p.type === "Conference" ? t(S.ui.pubs.conference) : t(S.ui.pubs.journal);
    return /*#__PURE__*/React.createElement(PublicationItem, {
      key: i,
      year: p.year,
      authors: p.authors,
      title: p.title,
      venue: p.venue,
      badge: {
        tone: p.best ? "clay" : p.type === "Conference" ? "heather" : "slate",
        label: p.best ? t(S.ui.pubs.best) : typeLabel
      },
      links: links
    });
  })));
}
window.Publications = Publications;
function Education() {
  const S = window.SITE;
  const lang = window.useLang();
  const t = v => window.tx(v, lang);
  return /*#__PURE__*/React.createElement(Section, {
    id: "education",
    eyebrow: lang === "zh" ? "教育背景" : "Education",
    title: t(S.ui.sections.eduTitle),
    tint: "var(--surface-raised)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "1.5rem"
    }
  }, S.education.map((ed, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-color)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-5)",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--clay-600)",
      marginBottom: "0.5rem"
    }
  }, ed.year), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      color: "var(--text-heading)",
      lineHeight: 1.25,
      marginBottom: "0.3rem"
    }
  }, t(ed.degree)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, t(ed.school))))));
}
window.Education = Education;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/site-record.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.PublicationItem = __ds_scope.PublicationItem;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.TimelineItem = __ds_scope.TimelineItem;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

})();
