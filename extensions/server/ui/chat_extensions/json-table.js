/**
 * JSON Table Extension
 *
 * Transforms JSON code blocks in assistant messages into readable tables.
 * Flat objects/arrays → clean table. Nested objects → table with expandable cells.
 */

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function isFlat(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj))
    return false;
  return Object.values(obj).every((v) => v === null || typeof v !== "object");
}

function isArrayOfFlat(arr) {
  return Array.isArray(arr) && arr.length > 0 && arr.every(isFlat);
}

function fmtValue(v) {
  if (v === null) return '<span class="json-null">null</span>';
  if (typeof v === "boolean") return `<span class="json-bool">${v}</span>`;
  if (typeof v === "number") return `<span class="json-num">${v}</span>`;
  return esc(String(v));
}

function objectTable(obj) {
  const rows = Object.entries(obj)
    .map(
      ([k, v]) =>
        `<tr><td class="json-key">${esc(k)}</td><td class="json-val">${fmtValue(v)}</td></tr>`,
    )
    .join("");
  return `<table class="json-table"><tbody>${rows}</tbody></table>`;
}

function arrayTable(arr) {
  const keys = Object.keys(arr[0]);
  const head = `<thead><tr>${keys.map((k) => `<th>${esc(k)}</th>`).join("")}</tr></thead>`;
  const body = `<tbody>${arr
    .map(
      (row) =>
        `<tr>${keys.map((k) => `<td class="json-val">${fmtValue(row[k] ?? null)}</td>`).join("")}</tr>`,
    )
    .join("")}</tbody>`;
  return `<table class="json-table">${head}${body}</table>`;
}

function anyTable(parsed, depth) {
  depth = depth || 0;
  if (typeof parsed !== "object" || parsed === null) return null;

  if (Array.isArray(parsed)) {
    if (isArrayOfFlat(parsed)) return arrayTable(parsed);
    // array of complex items — numbered expandable rows
    const rows = parsed
      .map((item, i) => {
        const inner =
          typeof item === "object" && item !== null
            ? (anyTable(item, depth + 1) ??
              `<pre>${esc(JSON.stringify(item, null, 2))}</pre>`)
            : fmtValue(item);
        return `<tr><td class="json-key">${i + 1}</td><td class="json-val"><details><summary class="json-expand">[${
          Array.isArray(item)
            ? item.length + " items"
            : typeof item === "object" && item !== null
              ? Object.keys(item).length + " fields"
              : ""
        }]</summary>${inner}</details></td></tr>`;
      })
      .join("");
    return `<table class="json-table"><tbody>${rows}</tbody></table>`;
  }

  if (isFlat(parsed)) return objectTable(parsed);

  const rows = Object.entries(parsed)
    .map(([k, v]) => {
      if (v === null || typeof v !== "object") {
        return `<tr><td class="json-key">${esc(k)}</td><td class="json-val">${fmtValue(v)}</td></tr>`;
      }
      const summary = Array.isArray(v)
        ? `${v.length} item${v.length !== 1 ? "s" : ""}`
        : `${Object.keys(v).length} field${Object.keys(v).length !== 1 ? "s" : ""}`;
      const inner =
        depth < 2
          ? (anyTable(v, depth + 1) ??
            `<pre>${esc(JSON.stringify(v, null, 2))}</pre>`)
          : `<pre>${esc(JSON.stringify(v, null, 2))}</pre>`;
      return `<tr><td class="json-key">${esc(k)}</td><td class="json-val"><details><summary class="json-expand">[${summary}]</summary>${inner}</details></td></tr>`;
    })
    .join("");
  return `<table class="json-table"><tbody>${rows}</tbody></table>`;
}

function toBlock(raw) {
  try {
    const parsed = JSON.parse(raw.trim());
    if (typeof parsed !== "object" || parsed === null) return null;
    const table = anyTable(parsed, 0);
    if (!table) return null;
    return `<div class="json-block">${table}<details class="json-raw"><summary>View raw JSON</summary><pre><code class="language-json">${esc(raw)}</code></pre></details></div>`;
  } catch {
    return null;
  }
}

export default {
  id: "json-table",
  name: "JSON Table Renderer",

  canHandle: () => false,

  transformContent: (content) => {
    let result = content.replace(
      /<pre><code class="language-json">([\s\S]*?)<\/code><\/pre>/g,
      (_match, escaped) => {
        const raw = escaped
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'");
        return toBlock(raw.trim()) ?? _match;
      },
    );

    // bare JSON — LLM skips fences, marked wraps in <p>
    result = result.replace(
      /<p>(\{[\s\S]*?\}|\[[\s\S]*?\])<\/p>/g,
      (_match, escaped) => {
        const raw = escaped
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'");
        return toBlock(raw.trim()) ?? _match;
      },
    );

    return result;
  },
};
