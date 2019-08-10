const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const [page] = await browser.pages();
  // page.setViewport({
  //   width: 1440,
  //   height: 900
  // });
  page.setViewport({
    width: 1920,
    height: 1080
  });
  page.goto('https://www.instagram.com');
})();
