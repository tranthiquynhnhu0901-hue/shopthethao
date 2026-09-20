function hashText(text = '') {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function svgToDataUri(svg) {
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function makeSportImage({ title, subtitle = '', seed = 1, kind = 'product', icon = 'SPORT' }) {
  const h = hashText(title + seed + kind);
  const hue1 = h % 360;
  const hue2 = (hue1 + 55 + (seed * 17) % 100) % 360;
  const hue3 = (hue1 + 180) % 360;
  const angle = 20 + (h % 120);
  const stripe = 18 + (h % 22);
  const cx = 120 + (h % 500);
  const cy = 90 + ((h >> 8) % 260);
  const safeTitle = String(title).replace(/[&<>]/g, '');
  const safeSubtitle = String(subtitle).replace(/[&<>]/g, '');
  const label = kind === 'blog' ? 'SPORT KNOWLEDGE' : 'SPORT GEAR';
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="hsl(${hue1} 72% 16%)"/>
        <stop offset="0.55" stop-color="hsl(${hue2} 78% 22%)"/>
        <stop offset="1" stop-color="hsl(${hue3} 70% 10%)"/>
      </linearGradient>
      <linearGradient id="neon" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#c8ff00"/>
        <stop offset="1" stop-color="#7dffcc"/>
      </linearGradient>
      <filter id="blur"><feGaussianBlur stdDeviation="24"/></filter>
    </defs>
    <rect width="1200" height="800" fill="url(#g)"/>
    <circle cx="${cx}" cy="${cy}" r="210" fill="hsl(${hue2} 90% 60% / .16)" filter="url(#blur)"/>
    <circle cx="${1000 - (h % 240)}" cy="${620 - (h % 130)}" r="170" fill="#c8ff00" opacity=".08" filter="url(#blur)"/>
    <g opacity=".12" transform="rotate(${angle} 600 400)">
      ${Array.from({length: 18}, (_,i)=>`<rect x="${-200 + i*stripe*2}" y="-100" width="${stripe}" height="1100" fill="#fff"/>`).join('')}
    </g>
    <rect x="60" y="58" width="230" height="44" rx="22" fill="#071015" opacity=".75"/>
    <text x="82" y="87" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#c8ff00">${label}</text>
    <g transform="translate(790 140)">
      <circle cx="150" cy="150" r="135" fill="none" stroke="url(#neon)" stroke-width="18" opacity=".85"/>
      <circle cx="150" cy="150" r="88" fill="none" stroke="#fff" stroke-width="3" opacity=".45"/>
      <path d="M62 185 C120 70, 210 75, 248 150 C210 245, 120 258, 62 185Z" fill="#071015" opacity=".76" stroke="#c8ff00" stroke-width="5"/>
      <text x="150" y="169" text-anchor="middle" font-family="Arial, sans-serif" font-size="38" font-weight="900" fill="#fff">${icon}</text>
    </g>
    <text x="70" y="530" font-family="Arial, sans-serif" font-size="27" font-weight="700" fill="#c8ff00">SPORT<span fill="#fff">HUB</span></text>
    <foreignObject x="68" y="555" width="780" height="180">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Arial,sans-serif;color:#fff;font-weight:900;font-size:54px;line-height:1.05;letter-spacing:-1px;">${safeTitle}</div>
    </foreignObject>
    <foreignObject x="70" y="710" width="850" height="60">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Arial,sans-serif;color:#b9c5ca;font-size:22px;">${safeSubtitle}</div>
    </foreignObject>
  </svg>`;
  return svgToDataUri(svg);
}
