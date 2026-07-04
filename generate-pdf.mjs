import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const url = process.argv[2] || 'http://localhost:3456/';
const outDir = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(outDir, 'docs', 'ManhKhieuVu.pdf');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

// Set viewport to match PDF content width (960 - 80px margins)
await page.setViewport({ width: 880, height: 800 });
await page.goto(url, { waitUntil: 'networkidle0' });

// Hide download button
await page.evaluate(() => {
  const btn = document.querySelector('.btn-download');
  if (btn) btn.style.display = 'none';
});

// Measure actual content height at this width
const contentHeight = await page.evaluate(() => {
  return document.documentElement.scrollHeight;
});

await page.emulateMediaType('screen');

await page.pdf({
  path: outPath,
  width: '960px',
  height: `${contentHeight}px`,
  printBackground: true,
  preferCSSPageSize: false,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
});

await browser.close();
console.log(`PDF saved: ${outPath}`);
