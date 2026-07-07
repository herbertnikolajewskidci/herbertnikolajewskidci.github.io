const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <rect x="80" y="80" width="1040" height="470" rx="24" fill="#111111" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
  <text x="120" y="240" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="72" font-weight="700" fill="#e8e8e8">Herbert Nikolajewski</text>
  <text x="120" y="330" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="40" font-weight="500" fill="#c9a227">Software Engineer &amp; DevOps</text>
  <text x="120" y="410" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" fill="#949494">TypeScript · Kubernetes · Terraform · Ansible</text>
  <text x="120" y="490" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" fill="#7a7a7a">herbertnikolajewskidci.github.io</text>
</svg>
`;

const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(() => console.log('Generated OG image at', outputPath))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
