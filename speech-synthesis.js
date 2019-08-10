const puppeteer = require('puppeteer');
const device = require('puppeteer/DeviceDescriptors')['iPhone X'];

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const [page] = await browser.pages();

  await page.evaluate(() => {
    //   To simulate speech in default voice
    const msg1 = new SpeechSynthesisUtterance('Hello World');
    window.speechSynthesis.speak(msg1);
  });
})();
