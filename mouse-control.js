const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    // devtools: true,
    slowMo: 1000,
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const [page] = await browser.pages();
  // page.setViewport({
  //   width: 1440,
  //   height: 900
  // });
  await page.goto('http://127.0.0.1:5500/index.html', { waitUntil: 'networkidle0' });
  await page.mouse.move(425, 133);
  await page.mouse.down();
  await page.mouse.move(500, 200);
  await page.mouse.up();
})();
