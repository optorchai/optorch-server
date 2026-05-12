import { jsx as n, jsxs as s } from "react/jsx-runtime";
import { useState as u, useEffect as $ } from "react";
import { u as A } from "../../_assets/PromptContext-B3ty8AnH.js";
function E(o) {
  return {
    "1h": 1,
    "6h": 1,
    "24h": 1,
    "7d": 7,
    "30d": 30,
    all: 365
  }[o] || 30;
}
function P({
  apiBaseUrl: o,
  promptName: f,
  version: p,
  refreshInterval: v = 30,
  timeWindow: g = "30d"
}) {
  const x = A(), a = f || x?.promptName, r = p || x?.version, i = E(g), [e, N] = u(null), [y, c] = u(!0), [h, d] = u(null);
  $(() => {
    const l = async () => {
      if (!a) {
        d("No prompt selected"), c(!1);
        return;
      }
      try {
        c(!0);
        const t = r ? `&version=${encodeURIComponent(r)}` : "", m = await fetch(`${o}/analytics/prompts/${encodeURIComponent(a)}/performance?days=${i}${t}`);
        if (!m.ok) throw new Error(`HTTP ${m.status}`);
        const w = await m.json();
        N(w), d(null);
      } catch (t) {
        d(t instanceof Error ? t.message : "Failed to fetch");
      } finally {
        c(!1);
      }
    };
    if (a) {
      l();
      const t = setInterval(l, v * 1e3);
      return () => clearInterval(t);
    }
  }, [o, a, r, v, i]);
  const L = e?.versions.length ? e.versions.reduce((l, t) => l + t.avg_latency_ms, 0) / e.versions.length : 0;
  return y && !e ? /* @__PURE__ */ n("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ n("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" }) }) : h ? /* @__PURE__ */ s("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ n("div", { className: "text-sm font-medium text-muted-foreground", children: "Avg Latency" }),
    /* @__PURE__ */ s("div", { className: "mt-2 text-sm text-red-500", children: [
      "Error: ",
      h
    ] })
  ] }) : !e || !e.versions || e.versions.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ n("div", { className: "text-sm font-medium text-muted-foreground", children: "Avg Latency" }),
    /* @__PURE__ */ n("div", { className: "mt-2 text-sm text-muted-foreground", children: "No data" })
  ] }) : /* @__PURE__ */ s("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ n("div", { className: "text-sm font-medium text-muted-foreground", children: "Avg Latency" }),
    /* @__PURE__ */ s("div", { className: "mt-2 text-3xl font-bold", children: [
      L.toFixed(0),
      "ms"
    ] }),
    r && e.versions.length > 0 && /* @__PURE__ */ s("div", { className: "mt-1 text-xs text-muted-foreground", children: [
      "Version: ",
      r
    ] }),
    !r && e.versions.length > 0 && /* @__PURE__ */ s("div", { className: "mt-1 text-xs text-muted-foreground", children: [
      "Across ",
      e.versions.length,
      " version(s)"
    ] }),
    /* @__PURE__ */ s("div", { className: "mt-1 text-xs text-muted-foreground", children: [
      "Last ",
      i,
      " days"
    ] })
  ] });
}
export {
  P as default
};
