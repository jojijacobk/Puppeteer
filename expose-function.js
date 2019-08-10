/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const [page] = await browser.pages();
  await page.goto('https://www.google.com');

  await page.exposeFunction('readFile', function(filename) {
    return function(filename) {
      return fs.readFileSync(filename).toString();
    };
  });

  const result = await page.evaluate(() => {
    return readFile('README.md');
  });

  console.log(result);
})();
