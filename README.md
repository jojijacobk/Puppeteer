# Puppeteer
- Puppeteer is a Node library to control Chrome or Chromium over DevTools Protocol
- It can run headless or non-headless
- Most things that you can do manually in browser can be done via puppeteer as well
- **puppeteer** version is tightly coupled with Chromium version. So, when you install puppeteer, the tied together version of chromium also gets installed. But, if you want to control an already installed Chrome, that is possible with **puppeteer-core**

### Puppeteer demonstration codes
Run `npm install` before you try demo codes below
- [Open a webpage in browser](open-webpage.js)
- [Open a webpage incognito mode](incognito-browser.js)
- [Emulate a device](emulate-device.js)
- [Expose a backend function to frontend](expose-function.js)
- [Speech synthesis](speech-synthesis.js)
- [Pass DOM elements to backend](return-DOM-element.js)
- [Take a screenshot](screenshot.js)
- [Control screen dimension](viewport.js)
- [Automatically browse Instagram and download pictures](instagram/instagram-browse.js)
Note: For instagram crawl and download images script, to make the script simple, `user-data-dir` flag is set to a browser session which has logged in instagram user session.
### References
- https://flaviocopes.com/puppeteer/
- https://nitayneeman.com/posts/getting-to-know-puppeteer-using-practical-examples/
- [Chrome commandline args list](https://peter.sh/experiments/chromium-command-line-switches/#user-data-dir)
- [Device emulators in puppeteer](https://github.com/GoogleChrome/puppeteer/blob/master/lib/DeviceDescriptors.js)