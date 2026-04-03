/**
 * Script to generate placeholder images for testing
 * Run with: node generate-placeholders.js
 */

const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "public", "images");

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate simple SVG placeholders that Next.js can use
const placeholders = [
  "cover",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
];

const gradients = [
  ["#1a1a2e", "#16213e"],
  ["#0f3460", "#533483"],
  ["#e94560", "#2c3e50"],
  ["#34495e", "#7f8c8d"],
  ["#2c2c54", "#474787"],
  ["#227093", "#218c74"],
  ["#b33939", "#cd6133"],
  ["#1a1a2e", "#0f3460"],
  ["#533483", "#e94560"],
  ["#2c3e50", "#34495e"],
  ["#7f8c8d", "#2c2c54"],
  ["#474787", "#227093"],
  ["#218c74", "#b33939"],
  ["#cd6133", "#1a1a2e"],
];

placeholders.forEach((name, i) => {
  const [color1, color2] = gradients[i % gradients.length];
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="1333" viewBox="0 0 2000 1333">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect fill="url(#grad)" width="2000" height="1333"/>
  <text x="50%" y="50%" fill="rgba(255,255,255,0.15)" font-family="system-ui, sans-serif" font-size="120" font-weight="200" text-anchor="middle" dominant-baseline="middle" letter-spacing="0.2em">
    ${name.toUpperCase()}
  </text>
</svg>`;

  // Save as .jpg (actually SVG, but Next.js will load it)
  // For production, replace with actual photographs
  const fileName = `${name}.jpg`;
  fs.writeFileSync(path.join(imagesDir, fileName), svg);
  console.log(`Created ${fileName}`);
});

console.log(`\n✅ Generated ${placeholders.length} placeholder images in ${imagesDir}`);
console.log("⚠️  Note: These are SVG placeholders saved as .jpg. Replace with actual photographs for production.");
