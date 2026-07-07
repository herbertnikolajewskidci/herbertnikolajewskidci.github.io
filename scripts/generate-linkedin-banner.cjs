const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const width = 1584;
const height = 396;

const mono = "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace";

const termX = 840;
const termY = 12;
const termW = 640;
const termH = 372;
const headerH = 56;
const bodyX = termX + 32;
const bodyStartY = termY + headerH + 36;
const lineHeight = 44;
const fontSize = 20;

const scaleFactor = 2;

const svg = `
<svg width="${width * scaleFactor}" height="${height * scaleFactor}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="#f5f5f5"/>

  <!-- Terminal window -->
  <rect x="${termX}" y="${termY}" width="${termW}" height="${termH}" rx="18" fill="#ffffff" stroke="rgba(0,0,0,0.08)" stroke-width="2"/>
  <rect x="${termX}" y="${termY}" width="${termW}" height="${headerH}" rx="18" fill="rgba(0,0,0,0.03)"/>
  <rect x="${termX}" y="${termY + headerH - 18}" width="${termW}" height="18" fill="rgba(0,0,0,0.03)"/>
  <line x1="${termX}" y1="${termY + headerH}" x2="${termX + termW}" y2="${termY + headerH}" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>

  <!-- Window controls -->
  <circle cx="${termX + 32}" cy="${termY + 28}" r="9" fill="#ff5f57"/>
  <circle cx="${termX + 62}" cy="${termY + 28}" r="9" fill="#febc2e"/>
  <circle cx="${termX + 92}" cy="${termY + 28}" r="9" fill="#28c840"/>

  <!-- Terminal title -->
  <text x="${termX + termW / 2}" y="${termY + 33}" font-family="${mono}" font-size="16" fill="#5a5a5a" text-anchor="middle">status</text>

  <!-- Terminal body -->
  <text x="${bodyX}" y="${bodyStartY}" font-family="${mono}" font-size="${fontSize}" fill="#5a5a5a"><tspan fill="#b8860b">$</tspan> whoami</text>
  <text x="${bodyX + 26}" y="${bodyStartY + lineHeight}" font-family="${mono}" font-size="${fontSize}" fill="#1a1a1a">herbert_nikolajewski</text>

  <text x="${bodyX}" y="${bodyStartY + lineHeight * 2.2}" font-family="${mono}" font-size="${fontSize}" fill="#5a5a5a"><tspan fill="#b8860b">$</tspan> current_focus</text>
  <text x="${bodyX + 26}" y="${bodyStartY + lineHeight * 3.2}" font-family="${mono}" font-size="${fontSize}" fill="#1a1a1a">self-hosted infrastructure, k8s, terraform</text>

  <text x="${bodyX}" y="${bodyStartY + lineHeight * 4.4}" font-family="${mono}" font-size="${fontSize}" fill="#5a5a5a"><tspan fill="#b8860b">$</tspan> location</text>
  <text x="${bodyX + 26}" y="${bodyStartY + lineHeight * 5.4}" font-family="${mono}" font-size="${fontSize}" fill="#1a1a1a">regensburg, germany · remote/hybrid</text>
</svg>
`;

const outputPath = path.join(__dirname, '..', 'public', 'linkedin-banner.png');

sharp(Buffer.from(svg))
  .resize(width, height, { fit: 'fill', kernel: 'lanczos3' })
  .png()
  .toFile(outputPath)
  .then(() => console.log('Generated LinkedIn banner at', outputPath))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
