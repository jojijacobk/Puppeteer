// Note: For instagram crawl and download images script, to make the script simple, `user-data-dir` flag is set to a browser session which has logged in instagram user session.
const puppeteer = require('puppeteer');
const request = require('request');
const fs = require('fs');
const path = require('path');

const counterFactory = (function counterFactory() {
  return {
    getNewCounterInstance() {
      return (function counter() {
        let _counter = 0;
        return {
          resetCounter: () => {
            _counter = 0;
            return _counter;
          },
          incrementCounter: () => {
            _counter += 1;
            return _counter;
          }
        };
      })();
    }
  };
})();
const downloadedImageCounter = counterFactory.getNewCounterInstance();
const maxPages = 10;
const waitBetweenPageScrolls = 10000; // milliseconds

async function extractImageURLs(page) {
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.KL4Bh > img')).map(img => {
      return img.src;
    });
  });
  return images;
}

async function download(imageURL) {
  const extn = path.extname(imageURL.split('?')[0]);
  const filename = `./downloads/${downloadedImageCounter.incrementCounter()}${extn}`;
  request(imageURL).pipe(fs.createWriteStream(filename));
  console.debug(`Saved: ${filename}`);
}

async function scrollToBottom(page) {
  await page.evaluate(() => {
    window.scrollTo(0, document.documentElement.scrollHeight);
  });
}

(async () => {
  const browser = await puppeteer.launch({
    slowMo: 100,
    // devtools: true,
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--user-data-dir=/Users/jojijaco/chrome-picasasword1']
  });
  const [page] = await browser.pages();
  await page.goto('https://www.instagram.com/');

  let iteration = 0;
  async function browseInstagram() {
    iteration += 1;
    console.log(`scrolled page - ${iteration}`);
    if (iteration >= maxPages) return;
    await scrollToBottom(page);
    await page.waitFor(waitBetweenPageScrolls);
    await browseInstagram();
  }
  await browseInstagram();

  const images = await extractImageURLs(page);
  console.log(`${images.length} images in download queue.`);
  images.forEach(imageURL => {
    download(imageURL);
  });
})();
