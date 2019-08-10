const puppeteer = require('puppeteer');
const device = require('puppeteer/DeviceDescriptors')['iPhone X'];

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const [page] = await browser.pages();
  await page.goto('https://www.google.com');
  // search for flowers
  await page.evaluate(() => {
    document.querySelector('[aria-label="Search"').value = 'flowers';
    document.querySelector('[aria-label="Google Search"').click();
  });
  //   return title of first flower element
  await page.waitForNavigation();
  const flowerTitle = await page.evaluate(() => {
    return document.querySelector('#search img').getAttribute('title');
  });
  console.log(flowerTitle);

  //   return first flower element itself
  const flowerElement = await page.evaluateHandle(() => {
    return document.querySelector('#search img');
  });
  console.log(flowerElement);
})();
