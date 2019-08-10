const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const [page] = await browser.pages();
  await page.goto('https://www.google.com');

  // get promise based message from web page
  const promiseBasedMessage = await page.evaluate(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve('Hi from webpage 5 seconds after page load');
      }, 5000);
    });
  });
  console.log(promiseBasedMessage);

  // get data from web page
  const pageContent = await page.evaluate(() => {
    return document.documentElement.innerHTML;
  });
  console.log(pageContent);
})();
