import { jsx as e, jsxs as a } from "react/jsx-runtime";
import { useState as N, useEffect as L } from "react";
import { u as P } from "../../_assets/PromptContext-B3ty8AnH.js";
import { R as k, P as W, a as R, C as D, T as V, B as T, b as I, X as K, Y as M, c as O } from "../../_assets/recharts-DIry_fx1.js";
const r = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D", "#FFC658", "#FF6B9D"];
function S(c) {
  return {
    "1h": 1,
    "6h": 1,
    "24h": 1,
    "7d": 7,
    "30d": 30,
    all: 365
  }[c] || 30;
}
function q({
  apiBaseUrl: c,
  promptName: b,
  currency: j,
  visualizationType: w = "list",
  showLegend: B = !0,
  refreshInterval: C = 30,
  timeWindow: z = "30d",
  showCallCount: d = !0,
  showTokenCount: m = !0,
  showLatency: h = !0,
  showSuccessRate: x = !0
}) {
  const A = P(), f = b || A?.promptName, o = S(z), [l, H] = N(null), [i, u] = N(!0), [F, v] = N(null);
  L(() => {
    const t = async () => {
      if (!f) {
        v("No prompt selected"), u(!1);
        return;
      }
      try {
        u(!0);
        const s = await fetch(`${c}/analytics/prompts/${encodeURIComponent(f)}/performance?days=${o}`);
        if (!s.ok) throw new Error(`HTTP ${s.status}`);
        const g = await s.json();
        H(g), v(null);
      } catch (s) {
        v(s instanceof Error ? s.message : "Failed to fetch");
      } finally {
        u(!1);
      }
    };
    if (f) {
      t();
      const s = setInterval(t, C * 1e3);
      return () => clearInterval(s);
    }
  }, [c, f, C, o]);
  const p = (t) => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: j,
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
  }).format(t);
  if (i && !l)
    return /* @__PURE__ */ e("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ e("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" }) });
  if (F)
    return /* @__PURE__ */ a("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-muted-foreground", children: "Cost by Version" }),
      /* @__PURE__ */ a("div", { className: "mt-2 text-sm text-red-500", children: [
        "Error: ",
        F
      ] })
    ] });
  if (!l || !l.versions || l.versions.length === 0)
    return /* @__PURE__ */ a("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-medium text-muted-foreground", children: "Cost by Version" }),
      /* @__PURE__ */ e("div", { className: "mt-2 text-sm text-muted-foreground", children: "No data available" })
    ] });
  const $ = l.versions.reduce((t, s) => t + s.avg_cost * s.total_calls, 0), n = l.versions.map((t) => ({
    name: t.version,
    value: t.avg_cost * t.total_calls,
    cost: p(t.avg_cost * t.total_calls),
    percentage: $ > 0 ? t.avg_cost * t.total_calls / $ * 100 : 0
  })), E = (t) => {
    const { payload: s } = t;
    return /* @__PURE__ */ e("div", { className: "space-y-2", style: { maxHeight: "100%", overflowY: "auto" }, children: s.map((g, _) => {
      const y = n[_];
      return /* @__PURE__ */ a("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: "w-3 h-3 rounded-full flex-shrink-0",
              style: { backgroundColor: g.color }
            }
          ),
          /* @__PURE__ */ e("span", { className: "text-sm font-medium", children: y.name })
        ] }),
        /* @__PURE__ */ a("div", { className: "text-sm text-muted-foreground whitespace-nowrap", children: [
          y.cost,
          " (",
          y.percentage.toFixed(1),
          "%)"
        ] })
      ] }, `legend-${_}`);
    }) });
  };
  return w === "pie" ? /* @__PURE__ */ a("div", { className: "flex flex-col h-full relative", children: [
    i && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex justify-end pointer-events-none", style: { padding: "4px" }, children: /* @__PURE__ */ a("svg", { className: "animate-spin h-3 w-3 text-gray-400", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
      /* @__PURE__ */ e("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
    ] }) }),
    /* @__PURE__ */ a("div", { className: "text-sm font-medium text-muted-foreground mb-2", children: [
      "Cost by Version ",
      /* @__PURE__ */ a("span", { className: "font-normal text-xs", children: [
        "(Last ",
        o,
        " days)"
      ] })
    ] }),
    /* @__PURE__ */ a("div", { style: { opacity: i ? 0.5 : 1, transition: "opacity 0.2s" }, className: "flex-1 flex flex-wrap items-end gap-4 min-h-0", children: [
      /* @__PURE__ */ e("div", { className: "flex-1 min-w-[300px] min-h-0", children: /* @__PURE__ */ e("div", { style: { width: "100%", height: "100%", aspectRatio: "1/1", maxHeight: "100%", maxWidth: "350px", margin: "0 auto" }, children: /* @__PURE__ */ e(k, { width: "100%", height: "100%", children: /* @__PURE__ */ a(W, { children: [
        /* @__PURE__ */ e(
          R,
          {
            data: n,
            cx: "50%",
            cy: "50%",
            innerRadius: "55%",
            outerRadius: "85%",
            fill: "#8884d8",
            dataKey: "value",
            children: n.map((t, s) => /* @__PURE__ */ e(D, { fill: r[s % r.length] }, `cell-${s}`))
          }
        ),
        /* @__PURE__ */ e(V, { formatter: (t) => t !== void 0 ? p(t) : "" })
      ] }) }) }) }),
      B && /* @__PURE__ */ e("div", { className: "flex-shrink-0 min-w-[250px] w-64 flex flex-col justify-end", children: E({ payload: n.map((t, s) => ({ color: r[s % r.length] })) }) })
    ] })
  ] }) : w === "bar" ? /* @__PURE__ */ a("div", { className: "flex flex-col h-full relative", children: [
    i && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex justify-end pointer-events-none z-10", style: { padding: "4px" }, children: /* @__PURE__ */ a("svg", { className: "animate-spin h-3 w-3 text-gray-400", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
      /* @__PURE__ */ e("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
    ] }) }),
    /* @__PURE__ */ a("div", { className: "text-sm font-medium text-muted-foreground mb-2", children: [
      "Cost by Version ",
      /* @__PURE__ */ a("span", { className: "font-normal text-xs", children: [
        "(Last ",
        o,
        " days)"
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1", style: { minHeight: "300px", opacity: i ? 0.5 : 1, transition: "opacity 0.2s" }, children: /* @__PURE__ */ e(k, { width: "100%", height: "100%", children: /* @__PURE__ */ a(T, { data: n, children: [
      /* @__PURE__ */ e(I, { strokeDasharray: "3 3" }),
      /* @__PURE__ */ e(K, { dataKey: "name", height: 60 }),
      /* @__PURE__ */ e(M, {}),
      /* @__PURE__ */ e(V, { formatter: (t) => t !== void 0 ? p(t) : "" }),
      /* @__PURE__ */ e(O, { dataKey: "value", fill: "#8884d8", children: n.map((t, s) => /* @__PURE__ */ e(D, { fill: r[s % r.length] }, `cell-${s}`)) })
    ] }) }) })
  ] }) : /* @__PURE__ */ a("div", { className: "flex flex-col h-full relative", children: [
    i && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex justify-end pointer-events-none z-10", style: { padding: "4px" }, children: /* @__PURE__ */ a("svg", { className: "animate-spin h-3 w-3 text-gray-400", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ e("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
      /* @__PURE__ */ e("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
    ] }) }),
    /* @__PURE__ */ a("div", { className: "text-sm font-medium text-muted-foreground mb-2", children: [
      "Cost by Version ",
      /* @__PURE__ */ a("span", { className: "font-normal text-xs", children: [
        "(Last ",
        o,
        " days)"
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1 overflow-auto", style: { opacity: i ? 0.5 : 1, transition: "opacity 0.2s" }, children: /* @__PURE__ */ a("div", { className: "space-y-1", children: [
      /* @__PURE__ */ a("div", { className: "grid gap-2 py-2 border-b border-border text-xs font-medium text-muted-foreground", style: {
        gridTemplateColumns: `auto ${d ? "80px" : ""} ${m ? "90px" : ""} ${h ? "90px" : ""} ${x ? "80px" : ""} 90px`
      }, children: [
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e("div", { className: "w-3" }),
          /* @__PURE__ */ e("span", { children: "Version" })
        ] }),
        d && /* @__PURE__ */ e("div", { className: "text-right", children: "Calls" }),
        m && /* @__PURE__ */ e("div", { className: "text-right", children: "Tokens" }),
        h && /* @__PURE__ */ e("div", { className: "text-right", children: "Latency" }),
        x && /* @__PURE__ */ e("div", { className: "text-right", children: "Success" }),
        /* @__PURE__ */ e("div", { className: "text-right", children: "Avg Cost" })
      ] }),
      l.versions.map((t, s) => /* @__PURE__ */ a("div", { className: "grid gap-2 py-2 border-b border-border last:border-0 hover:bg-muted/50", style: {
        gridTemplateColumns: `auto ${d ? "80px" : ""} ${m ? "90px" : ""} ${h ? "90px" : ""} ${x ? "80px" : ""} 90px`
      }, children: [
        /* @__PURE__ */ a("div", { className: "flex items-center gap-2 min-w-0", children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: "w-3 h-3 rounded-full flex-shrink-0",
              style: { backgroundColor: r[s % r.length] }
            }
          ),
          /* @__PURE__ */ e("div", { className: "text-sm font-medium truncate", children: t.version })
        ] }),
        d && /* @__PURE__ */ e("div", { className: "text-sm text-right", children: t.total_calls.toLocaleString() }),
        m && /* @__PURE__ */ e("div", { className: "text-sm text-right", children: t.total_tokens.toLocaleString() }),
        h && /* @__PURE__ */ a("div", { className: "text-sm text-right", children: [
          t.avg_latency_ms.toFixed(0),
          "ms"
        ] }),
        x && /* @__PURE__ */ a("div", { className: "text-sm text-right", children: [
          t.success_rate.toFixed(1),
          "%"
        ] }),
        /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-right", children: p(t.avg_cost) })
      ] }, t.version))
    ] }) })
  ] });
}
export {
  q as default
};
