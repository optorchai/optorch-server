import { jsx as r, jsxs as s } from "react/jsx-runtime";
import { useState as u, useEffect as A } from "react";
import { u as D } from "../../_assets/PromptContext-B3ty8AnH.js";
function E(a) {
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
  version: p,
  currency: g,
  refreshInterval: v = 30,
  timeWindow: N = "30d"
}) {
  const x = D(), i = f || x?.promptName, n = p || x?.version, l = E(N), [e, y] = u(null), [C, m] = u(!0), [h, c] = u(null), w = (o) => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: g,
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
  }).format(o);
  A(() => {
    const o = async () => {
      if (!i) {
        c("No prompt selected"), m(!1);
        return;
      }
      try {
        m(!0);
        const t = n ? `&version=${encodeURIComponent(n)}` : "", d = await fetch(`${a}/analytics/prompts/${encodeURIComponent(i)}/performance?days=${l}${t}`);
        if (!d.ok) throw new Error(`HTTP ${d.status}`);
        const b = await d.json();
        y(b), c(null);
      } catch (t) {
        c(t instanceof Error ? t.message : "Failed to fetch");
      } finally {
        m(!1);
      }
    };
    if (i) {
      o();
      const t = setInterval(o, v * 1e3);
      return () => clearInterval(t);
    }
  }, [a, i, n, v, l]);
  const $ = e?.versions.length ? e.versions.reduce((o, t) => o + t.avg_cost, 0) / e.versions.length : 0;
  return C && !e ? /* @__PURE__ */ r("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ r("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" }) }) : h ? /* @__PURE__ */ s("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ r("div", { className: "text-sm font-medium text-muted-foreground", children: "Avg Cost" }),
    /* @__PURE__ */ s("div", { className: "mt-2 text-sm text-red-500", children: [
      "Error: ",
      h
    ] })
  ] }) : !e || !e.versions || e.versions.length === 0 ? /* @__PURE__ */ s("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ r("div", { className: "text-sm font-medium text-muted-foreground", children: "Avg Cost" }),
    /* @__PURE__ */ r("div", { className: "mt-2 text-sm text-muted-foreground", children: "No data" })
  ] }) : /* @__PURE__ */ s("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ r("div", { className: "text-sm font-medium text-muted-foreground", children: "Avg Cost per Call" }),
    /* @__PURE__ */ r("div", { className: "mt-2 text-3xl font-bold", children: w($) }),
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
      l,
      " days"
    ] })
  ] });
}
export {
  P as default
};
