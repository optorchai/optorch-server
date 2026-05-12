import { jsx as s, jsxs as r } from "react/jsx-runtime";
import { useState as u, useEffect as w } from "react";
import { u as $ } from "../../_assets/PromptContext-B3ty8AnH.js";
function E(n) {
  return {
    "1h": 1,
    "6h": 1,
    "24h": 1,
    "7d": 7,
    "30d": 30,
    all: 365
  }[n] || 30;
}
function D({
  apiBaseUrl: n,
  promptName: f,
  version: p,
  refreshInterval: x = 30,
  timeWindow: N = "30d"
}) {
  const h = $(), l = f || h?.promptName, o = p || h?.version, i = E(N), [e, g] = u(null), [y, d] = u(!0), [v, m] = u(null);
  w(() => {
    const a = async () => {
      if (!l) {
        m("No prompt selected"), d(!1);
        return;
      }
      try {
        d(!0);
        const t = o ? `&version=${encodeURIComponent(o)}` : "", c = await fetch(`${n}/analytics/prompts/${encodeURIComponent(l)}/performance?days=${i}${t}`);
        if (!c.ok) throw new Error(`HTTP ${c.status}`);
        const T = await c.json();
        g(T), m(null);
      } catch (t) {
        m(t instanceof Error ? t.message : "Failed to fetch");
      } finally {
        d(!1);
      }
    };
    if (l) {
      a();
      const t = setInterval(a, x * 1e3);
      return () => clearInterval(t);
    }
  }, [n, l, o, x, i]);
  const C = e?.versions.reduce((a, t) => a + t.total_calls, 0) || 0;
  return y && !e ? /* @__PURE__ */ s("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ s("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" }) }) : v ? /* @__PURE__ */ r("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ s("div", { className: "text-sm font-medium text-muted-foreground", children: "Total Calls" }),
    /* @__PURE__ */ r("div", { className: "mt-2 text-sm text-red-500", children: [
      "Error: ",
      v
    ] })
  ] }) : !e || !e.versions || e.versions.length === 0 ? /* @__PURE__ */ r("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ s("div", { className: "text-sm font-medium text-muted-foreground", children: "Total Calls" }),
    /* @__PURE__ */ s("div", { className: "mt-2 text-sm text-muted-foreground", children: "No data" })
  ] }) : /* @__PURE__ */ r("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ s("div", { className: "text-sm font-medium text-muted-foreground", children: "Total Calls" }),
    /* @__PURE__ */ s("div", { className: "mt-2 text-3xl font-bold", children: C.toLocaleString() }),
    o && e.versions.length > 0 && /* @__PURE__ */ r("div", { className: "mt-1 text-xs text-muted-foreground", children: [
      "Version: ",
      o
    ] }),
    !o && e.versions.length > 0 && /* @__PURE__ */ r("div", { className: "mt-1 text-xs text-muted-foreground", children: [
      "All versions (",
      e.versions.length,
      ")"
    ] }),
    /* @__PURE__ */ r("div", { className: "mt-1 text-xs text-muted-foreground", children: [
      "Last ",
      i,
      " days"
    ] })
  ] });
}
export {
  D as default
};
