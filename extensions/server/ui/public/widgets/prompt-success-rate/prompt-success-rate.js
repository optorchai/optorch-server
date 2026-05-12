import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { useState as u, useEffect as C } from "react";
import { u as E } from "../../_assets/PromptContext-B3ty8AnH.js";
function S(a) {
  return {
    "1h": 1,
    "6h": 1,
    "24h": 1,
    "7d": 7,
    "30d": 30,
    all: 365
  }[a] || 30;
}
function P({
  apiBaseUrl: a,
  promptName: f,
  version: g,
  refreshInterval: x = 30,
  timeWindow: N = "30d"
}) {
  const h = E(), l = f || h?.promptName, n = g || h?.version, c = S(N), [e, y] = u(null), [w, i] = u(!0), [v, d] = u(null);
  C(() => {
    const r = async () => {
      if (!l) {
        d("No prompt selected"), i(!1);
        return;
      }
      try {
        i(!0);
        const t = n ? `&version=${encodeURIComponent(n)}` : "", m = await fetch(`${a}/analytics/prompts/${encodeURIComponent(l)}/performance?days=${c}${t}`);
        if (!m.ok) throw new Error(`HTTP ${m.status}`);
        const $ = await m.json();
        y($), d(null);
      } catch (t) {
        d(t instanceof Error ? t.message : "Failed to fetch");
      } finally {
        i(!1);
      }
    };
    if (l) {
      r();
      const t = setInterval(r, x * 1e3);
      return () => clearInterval(t);
    }
  }, [a, l, n, x, c]);
  const p = e?.versions.length ? e.versions.reduce((r, t) => r + t.success_rate, 0) / e.versions.length : 0, R = (r) => r >= 95 ? "text-green-600 dark:text-green-400" : r >= 80 ? "text-yellow-600 dark:text-yellow-400" : "text-red-600 dark:text-red-400";
  return w && !e ? /* @__PURE__ */ o("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ o("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" }) }) : v ? /* @__PURE__ */ s("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ o("div", { className: "text-sm font-medium text-muted-foreground", children: "Success Rate" }),
    /* @__PURE__ */ s("div", { className: "mt-2 text-sm text-red-500", children: [
      "Error: ",
      v
    ] })
  ] }) : !e || !e.versions || e.versions.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ o("div", { className: "text-sm font-medium text-muted-foreground", children: "Success Rate" }),
    /* @__PURE__ */ o("div", { className: "mt-2 text-sm text-muted-foreground", children: "No data" })
  ] }) : /* @__PURE__ */ s("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ o("div", { className: "text-sm font-medium text-muted-foreground", children: "Success Rate" }),
    /* @__PURE__ */ s("div", { className: `mt-2 text-3xl font-bold ${R(p)}`, children: [
      p.toFixed(1),
      "%"
    ] }),
    n && e.versions.length > 0 && /* @__PURE__ */ s("div", { className: "mt-1 text-xs text-muted-foreground", children: [
      "Version: ",
      n
    ] }),
    !n && e.versions.length > 0 && /* @__PURE__ */ s("div", { className: "mt-1 text-xs text-muted-foreground", children: [
      "Across ",
      e.versions.length,
      " version(s)"
    ] }),
    /* @__PURE__ */ s("div", { className: "mt-1 text-xs text-muted-foreground", children: [
      "Last ",
      c,
      " days"
    ] })
  ] });
}
export {
  P as default
};
