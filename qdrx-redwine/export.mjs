// 섹션별 PNG + 전체 미리보기 내보내기: node export.mjs [scale]
import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const scale = Number(process.argv[2] || 1);
const out = path.join(dir, 'out', scale === 1 ? 'sections' : `sections@${scale}x`);
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 860, height: 1200 }, deviceScaleFactor: scale });
await page.goto('file://' + path.join(dir, 'index.html'));
await page.evaluate(() => document.fonts.ready);
await page.waitForLoadState('networkidle');

for (const el of await page.$$('section.sec')) {
  const name = await el.getAttribute('data-name');
  await el.screenshot({ path: path.join(out, `${name}.png`) });
  console.log(name);
}
if (scale === 1) await page.locator('.page').screenshot({ path: path.join(dir, 'out', 'full_preview.jpg'), quality: 82, type: 'jpeg' });
await browser.close();
