/**
 * JSON Table Extension
 *
 * Transforms flat JSON code blocks in assistant messages into readable tables.
 * Deeply nested JSON falls back to the raw code block.
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

function toBlock(raw) {
  try {
    const parsed = JSON.parse(raw.trim());
    if (!isFlat(parsed) && !isArrayOfFlat(parsed)) return null;
    const table = isFlat(parsed) ? objectTable(parsed) : arrayTable(parsed);
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
