const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const [page] = await browser.pages();
  await page.goto('https://www.google.com');
  await page.screenshot({ path: 'google.jpeg' });
})();
