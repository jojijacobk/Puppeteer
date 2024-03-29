const puppeteer = require('puppeteer');
const device = require('puppeteer/DeviceDescriptors')['iPhone X'];

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const [page] = await browser.pages();
  await page.emulate(device);
  await page.goto('https://www.google.com');
})();
