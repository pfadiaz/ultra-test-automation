const merge = require('deepmerge');

const wdioConf = require('./main.conf');
// variable to return the capabilities
let browserCapabilities;

// variable to return the headless flag for Edge and Chrome
const chromiumBrowserOptions = 'Yes' === process.env.HEADLESS ? ['--headless'] : [];

// variable to return the headless flag for Firefox
const firefoxBrowserOptions = 'Yes' === process.env.HEADLESS ? ['-headless'] : [];
const Chrome = {
  maxInstances: 3,
  browserName: 'chrome',
  acceptInsecureCerts: true,
  'goog:chromeOptions': {
    args: chromiumBrowserOptions,
  },
};

const FireFox = {
  maxInstances: 3,
  browserName: 'firefox',
  'moz:firefoxOptions': {
    args: firefoxBrowserOptions,
  },
};

const MicrosoftEdge = {
  maxInstances: 3,
  browserName: 'MicrosoftEdge',
  'ms:edgeOptions': {
    args: chromiumBrowserOptions,
  },
};

// Runs all browsers
const AllBrowsers = [MicrosoftEdge, Chrome, FireFox];

// Runs just in Chrome and Firefox GH Actions
const ChromeFireFox = [Chrome, FireFox];

// Evaluation to determine where to run the test and if it is headless or not
switch (process.env.BROWSER) {
  case 'Chrome':
    browserCapabilities = [Chrome];
    break;
  case 'Firefox':
    browserCapabilities = [FireFox];
    break;
  case 'MicrosoftEdge':
    browserCapabilities = [MicrosoftEdge];
    break;
  case 'ChromeFireFox':
    browserCapabilities = ChromeFireFox;
    break;
  default:
    browserCapabilities = AllBrowsers;
}

exports.config = merge(wdioConf.config, {
  capabilities: browserCapabilities,
  // Test runner services
  services: [['selenium-standalone', { drivers: { firefox: 'latest', chrome: true, chromiumedge: 'latest' } }]],
});
