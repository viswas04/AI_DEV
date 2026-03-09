const colors = {
  background: "#FAFAFA",
  card: "#FFFFFF",
  foreground: "#111827",
  mutedForeground: "#6B7280",
  accent: "#2563EB",
  border: "#E5E7EB",
};

function hexToRgb(hex) {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = Number.parseInt(h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function rgbToHsl({ r, g, b }) {
  let rr = r / 255;
  let gg = g / 255;
  let bb = b / 255;
  const max = Math.max(rr, gg, bb);
  const min = Math.min(rr, gg, bb);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rr:
        h = (gg - bb) / d + (gg < bb ? 6 : 0);
        break;
      case gg:
        h = (bb - rr) / d + 2;
        break;
      case bb:
        h = (rr - gg) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

function fmt(x) {
  return Number.isFinite(x) ? x.toFixed(1).replace(/\.0$/, "") : String(x);
}

for (const [k, hex] of Object.entries(colors)) {
  const hsl = rgbToHsl(hexToRgb(hex));
  console.log(`${k} ${hex} => ${fmt(hsl.h)} ${fmt(hsl.s)}% ${fmt(hsl.l)}%`);
}
