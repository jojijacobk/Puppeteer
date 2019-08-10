const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  // get default browser context
  const browserContext = await browser.defaultBrowserContext();
  // get incognito browser context
  const context = await browser.createIncognitoBrowserContext();
  const incognitoPage = await context.newPage();
  await incognitoPage.goto('https://www.instagram.com');
})();
