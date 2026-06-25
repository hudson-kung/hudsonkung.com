const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "dist");
const files = [
  "index.html",
  "builder.html",
  "dashboard.html",
  "examples.html",
  "about.html",
  "styles.css",
  "app.js",
  "dashboard.js",
  "favicon.svg"
];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(outDir, file));
}

console.log(`Built ${files.length} files into dist/`);
