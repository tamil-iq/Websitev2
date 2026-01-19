import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureCard() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Mobile portrait format - 4:5 ratio works better for WhatsApp image sharing
  await page.setViewport({
    width: 1080,
    height: 1350,
    deviceScaleFactor: 1
  });

  // Navigate to the card
  await page.goto('http://localhost:5173/sankranti-greeting.html', {
    waitUntil: 'networkidle0'
  });

  // Wait for fonts to load
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Capture full page (card will be centered)
  await page.screenshot({
    path: path.join(__dirname, 'public', 'sankranti-card.png'),
    type: 'png'
  });

  console.log('Card captured successfully!');
  console.log('Saved to: public/sankranti-card.png');
  console.log('Size: 1080x1350 (4:5 portrait - WhatsApp optimized)');

  await browser.close();
}

captureCard().catch(console.error);
