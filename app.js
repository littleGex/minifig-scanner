(() => {
"use strict";

const SERIES = window.SERIES || [];
const FIGS = [];
SERIES.forEach(s => s.figures.forEach(f => FIGS.push({ ...f, series: s })));

// ---------- per-phone storage ----------
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
let states  = store.get("mf.states", { "s29-1": "want" });
let learned = store.get("mf.learned", {});
let log     = store.get("mf.log", []);

const $ = id => document.getElementById(id);
const esc = t => { const d = document.createElement("div"); d.textContent = t; return d.innerHTML; };
const resultEl = $("result");

function lookup(code) {
  if (learned[code]) return FIGS.find(f => f.id === learned[code]) || null;
  return FIGS.find(f => f.codes.includes(code)) || null;
}

// Data Matrix text looks like "6603331 245S3 13916839 000341"
function parse(raw) {
  const s = String(raw || "").trim();
  const m = s.match(/\d{7}/);
  const tok = s.split(/\s+/)[1] || "";
  let plant = null;
  if (/^[0-9A-Z]{5}$/i.test(tok)) plant = { S: "Czech Republic (EU/UK)", R: "Mexico (N. America)" }[tok[3].toUpperCase()] || null;
  return { code: m ? m[0] : null, plant, raw: s };
}

// ---------- rendering ----------
function showResult(p, opts = {}) {
  resultEl.hidden = false;
  resultEl.className = "result";
  if (!p.code) {
    resultEl.innerHTML = `<span class="tag unk">No code found</span><div class="fname">Couldn't read that</div>
      <p class="hint">Try again closer, with the square sharp and filling the frame, or type the first 7 digits.</p>`;
    return;
  }
  const f = lookup(p.code);
  const meta = `<div class="meta"><span>Code <b>${p.code}</b></span>${p.plant ? `<span>Made in ${esc(p.plant)}</span>` : ""}</div>`;
  if (!f) {
    resultEl.innerHTML = `<span class="tag unk">Unknown code</span><div class="fname">Not in the list</div>${meta}
      <p class="hint">Possibly a newer batch or a series that isn't added yet. Opened it? Tag what was inside and this phone will recognise the code next time.</p>
      <div class="learn"><select id="learnSel" aria-label="Figure inside">${FIGS.map(x => `<option value="${x.id}">${esc(x.name)} (${esc(x.series.name)})</option>`).join("")}</select>
      <button class="btn btn-ghost" id="learnBtn" type="button">Save</button></div>`;
    $("learnBtn").onclick = () => { learned[p.code] = $("learnSel").value; store.set("mf.learned", learned); addLog(p.code); showResult(p); };
    return;
  }
  const st = states[f.id];
  if (st === "want") resultEl.classList.add("want");
  const tag = st === "want" ? `<span class="tag want">On your want list</span>` : st === "have" ? `<span class="tag got">Already have</span>` : "";
  resultEl.innerHTML = `${opts.example ? `<span class="tag got">Example</span>` : ""}${tag}<div class="fname">${esc(f.name)}</div>
    <div class="meta"><span>${esc(f.series.name)} · ${esc(f.series.set)}</span><span>with ${esc(f.extra)}</span></div>${meta}
    ${st !== "have" && !opts.example ? `<div class="row"><button class="btn btn-ghost" id="markHave" type="button">Bought it, mark as have</button></div>` : ""}`;
  const mh = $("markHave");
  if (mh) mh.onclick = () => { states[f.id] = "have"; save(); showResult(p); };
}

function addLog(code) {
  log.unshift({ code, t: Date.now() });
  log = log.slice(0, 80);
  store.set("mf.log", log);
  renderLog();
}
function renderLog() {
  const ul = $("log"); ul.innerHTML = "";
  if (!log.length) { ul.innerHTML = `<li><span class="hint">Scanned boxes appear here so you can find the right one on the shelf.</span></li>`; return; }
  log.forEach((e, i) => {
    const f = lookup(e.code), li = document.createElement("li");
    if (f && states[f.id] === "want") li.className = "w";
    li.innerHTML = `<span>${log.length - i}. ${esc(f ? f.name : "Unknown")}</span><span class="c">${e.code}</span>`;
    ul.appendChild(li);
  });
}
function save() { store.set("mf.states", states); renderGrids(); renderLog(); }

function renderGrids() {
  const wrap = $("seriesWrap"); wrap.innerHTML = "";
  SERIES.forEach(s => {
    const sec = document.createElement("section");
    const have = s.figures.filter(f => states[f.id] === "have").length;
    const want = s.figures.filter(f => states[f.id] === "want").length;
    sec.innerHTML = `<div class="sechead"><h2>${esc(s.name)} · ${esc(s.set)}</h2><span class="count">${have}/${s.figures.length} have · ${want} wanted</span></div><div class="grid"></div>`;
    const g = sec.querySelector(".grid");
    s.figures.forEach(f => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "fig"; b.dataset.state = states[f.id] || "";
      b.innerHTML = `<i class="dot"></i><span>${esc(f.name)}</span>`;
      b.setAttribute("aria-label", `${f.name}: ${states[f.id] || "not marked"}`);
      b.onclick = () => {
        const cur = states[f.id];
        if (cur === "want") states[f.id] = "have"; else if (cur === "have") delete states[f.id]; else states[f.id] = "want";
        save();
      };
      g.appendChild(b);
    });
    wrap.appendChild(sec);
  });
}

// ---------- decoding ----------
let native = null;
(async () => {
  try {
    if ("BarcodeDetector" in window) {
      const fm = await BarcodeDetector.getSupportedFormats();
      if (fm.includes("data_matrix")) native = new BarcodeDetector({ formats: ["data_matrix"] });
    }
  } catch (e) {}
})();

const Z = window.ZXing;
const zReader = Z ? new Z.MultiFormatReader() : null;
const zHints = new Map();
if (Z) {
  zHints.set(Z.DecodeHintType.POSSIBLE_FORMATS, [Z.BarcodeFormat.DATA_MATRIX]);
  zHints.set(Z.DecodeHintType.TRY_HARDER, true);
  zReader.setHints(zHints);
}
function zDecode(canvas) {
  if (!zReader) return null;
  for (const Bin of [Z.HybridBinarizer, Z.GlobalHistogramBinarizer]) {
    try {
      const src = new Z.HTMLCanvasElementLuminanceSource(canvas);
      return zReader.decode(new Z.BinaryBitmap(new Bin(src)), zHints).getText();
    } catch (e) {}
  }
  return null;
}
async function decodeCanvas(canvas) {
  if (native) {
    try { const r = await native.detect(canvas); if (r.length) return r[0].rawValue; } catch (e) {}
  }
  return zDecode(canvas);
}
function crop(src, sw, sh, frac, target) {
  const side = Math.min(sw, sh) * frac, sx = (sw - side) / 2, sy = (sh - side) / 2;
  const sc = Math.min(1, target / side);
  const cv = document.createElement("canvas");
  cv.width = cv.height = Math.round(side * sc);
  cv.getContext("2d", { willReadFrequently: true }).drawImage(src, sx, sy, side, side, 0, 0, cv.width, cv.height);
  return cv;
}

function handleHit(raw) {
  const p = parse(raw);
  if (p.code && lookup(p.code)) addLog(p.code);
  showResult(p);
  if (navigator.vibrate) navigator.vibrate(p.code && lookup(p.code) && states[lookup(p.code).id] === "want" ? [80, 60, 80] : 60);
  return p;
}

// ---------- live camera ----------
let stream = null, running = false, lastCode = null, lastAt = 0, track = null;
const video = $("video");

async function startCam() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    showResult({ code: null }); $("subline").textContent = "This browser can't open the camera. Use 'take a photo' instead."; return;
  }
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { facingMode: { ideal: "environment" }, width: { ideal: 1920 }, height: { ideal: 1080 } }
    });
  } catch (e) {
    resultEl.hidden = false; resultEl.className = "result";
    resultEl.innerHTML = `<span class="tag unk">Camera blocked</span><p class="hint">Allow camera access for this site in your browser settings, or use 'take a photo' instead.</p>`;
    return;
  }
  video.srcObject = stream;
  await video.play().catch(() => {});
  track = stream.getVideoTracks()[0];
  try {
    const caps = track.getCapabilities ? track.getCapabilities() : {};
    const adv = {};
    if (caps.focusMode && caps.focusMode.includes("continuous")) adv.focusMode = "continuous";
    if (caps.zoom) adv.zoom = Math.min(caps.zoom.max, Math.max(caps.zoom.min, 2));
    if (Object.keys(adv).length) await track.applyConstraints({ advanced: [adv] });
    $("torch").hidden = !caps.torch;
  } catch (e) {}
  $("cam").hidden = false; $("startCam").hidden = true;
  running = true; loop();
}
function stopCam() {
  running = false;
  if (stream) stream.getTracks().forEach(t => t.stop());
  stream = null; track = null;
  $("cam").hidden = true; $("startCam").hidden = false;
  $("torch").setAttribute("aria-pressed", "false");
}
let flip = 0;
async function loop() {
  if (!running) return;
  if (video.readyState >= 2 && video.videoWidth) {
    // alternate between the framed square and a slightly wider crop
    const frac = (flip++ % 2) ? 0.55 : 0.8;
    const cv = crop(video, video.videoWidth, video.videoHeight, frac, 900);
    const txt = await decodeCanvas(cv);
    if (txt) {
      const p = parse(txt);
      const now = Date.now();
      if (p.code && (p.code !== lastCode || now - lastAt > 4000)) {
        lastCode = p.code; lastAt = now;
        handleHit(txt);
        $("frame").classList.add("hit");
        setTimeout(() => $("frame").classList.remove("hit"), 700);
        setTimeout(() => requestAnimationFrame(loop), 1200);
        return;
      }
    }
  }
  setTimeout(() => requestAnimationFrame(loop), native ? 120 : 220);
}
$("startCam").onclick = startCam;
$("stopCam").onclick = stopCam;
$("torch").onclick = async () => {
  if (!track) return;
  const on = $("torch").getAttribute("aria-pressed") !== "true";
  try { await track.applyConstraints({ advanced: [{ torch: on }] }); $("torch").setAttribute("aria-pressed", String(on)); } catch (e) {}
};
document.addEventListener("visibilitychange", () => { if (document.hidden && running) stopCam(); });

// ---------- photo fallback ----------
function loadImage(file) {
  return new Promise((res, rej) => {
    const u = URL.createObjectURL(file), im = new Image();
    im.onload = () => res(im); im.onerror = () => rej(new Error("Couldn't open that image")); im.src = u;
  });
}
$("photo").addEventListener("change", async e => {
  const file = e.target.files && e.target.files[0]; e.target.value = "";
  if (!file) return;
  resultEl.hidden = false; resultEl.className = "result";
  resultEl.innerHTML = `<div class="busy"><span class="spin"></span>Reading the code…</div>`;
  await new Promise(r => setTimeout(r, 30));
  try {
    const img = await loadImage(file);
    const W = img.naturalWidth, H = img.naturalHeight;
    let txt = null;
    for (const [frac, target] of [[1, 1400], [1, 900], [1, 2000], [.6, 1200], [.4, 1000], [.25, 800]]) {
      txt = await decodeCanvas(crop(img, W, H, frac, target));
      if (txt) break;
    }
    if (txt) handleHit(txt); else showResult({ code: null });
  } catch (err) { showResult({ code: null }); }
});

// ---------- manual ----------
$("manualForm").addEventListener("submit", e => {
  e.preventDefault();
  const p = parse($("manual").value);
  if (p.code && lookup(p.code)) addLog(p.code);
  showResult(p);
});
$("clearLog").onclick = () => { log = []; store.set("mf.log", log); renderLog(); };

// ---------- boot ----------
$("subline").textContent = `Point the camera at the square code on the bottom of a box to see which figure is inside. Covers ${SERIES.map(s => `${s.name} (${s.set})`).join(", ")}.`;
$("foot").innerHTML = SERIES.map(s => `<span>${esc(s.name)}: ${esc(s.source)}</span>`).join("") +
  `<span>LEGO can change codes between batches. If a box isn't recognised, tag it once opened and this phone will know it.</span>`;
renderGrids(); renderLog();
showResult({ code: FIGS[0] ? FIGS[0].codes[0] : null }, { example: true });
})();
