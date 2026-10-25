// Sanity checks for series.js: run with `node scripts/validate.js`
const path = require("path");
global.window = {};
require(path.join(__dirname, "..", "series.js"));
const S = window.SERIES;
const errs = [], ids = new Map(), codes = new Map(), keys = new Set();
for (const s of S) {
  if (keys.has(s.key)) errs.push(`duplicate series key ${s.key}`); keys.add(s.key);
  for (const k of ["key", "name", "set", "source", "checked"]) if (!s[k]) errs.push(`${s.key}: missing ${k}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s.checked || "")) errs.push(`${s.key}: checked must be YYYY-MM-DD`);
  for (const f of s.figures) {
    if (ids.has(f.id)) errs.push(`duplicate figure id ${f.id}`); ids.set(f.id, 1);
    if (!f.codes.length) errs.push(`${f.id}: no codes`);
    for (const c of f.codes) {
      if (!/^\d{7}$/.test(c)) errs.push(`${f.id}: bad code ${c}`);
      if (codes.has(c)) errs.push(`code ${c} used by ${codes.get(c)} and ${f.id}`);
      codes.set(c, f.id);
    }
  }
}
console.log(`${S.length} series, ${ids.size} figures, ${codes.size} codes`);
if (errs.length) { console.error(errs.join("\n")); process.exit(1); }
console.log("OK");
