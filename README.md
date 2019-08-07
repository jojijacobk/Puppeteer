- Puppeteer is a Node library to control Chrome or Chromium over DevTools Protocol
- It can run headless or non-headless
- Most things that you can do manually in browser can be done via puppeteer as well
- **puppeteer** version is tightly coupled with Chromium version. So, when you install puppeteer, the tied together version of chromium also gets installed. But, if you want to control an already installed Chrome, that is possible with **puppeteer-core**

### Puppeteer sample codes
- Open browser and go to page google.com, and search for flowers.

```javascript
const puppeteer = require('puppeteer');

puppeteer
  .launch({
    defaultViewPort: null,
    headless: false
  })
  .then(async browser => {
    const pages = await browser.pages();
    const page = pages[0];
    await page.goto('https://www.google.com');
    await page.evaluate(() => {
      document.querySelector('input.gLFyf.gsfi').value = 'flowers';
      document.querySelectorAll('input[value="Google Search"')[1].click();
    });
  });
```
