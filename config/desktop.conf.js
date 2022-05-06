const merge = require('deepmerge');

const wdioConf = require('./main.conf');
// variable to return the capabilities
let browserCapabilities;

// variable to return the headless flag for Edge and Chrome
const chromiumBrowserOptions = 'Yes' === process.env.HEADLESS ? '--headless' : '';

// variable to return the headless flag for Firefox
const firefoxBrowserOptions = 'Yes' === process.env.HEADLESS ? '-headless' : '';
const Chrome = {
  maxInstances: 3,
  browserName: 'chrome',
  acceptInsecureCerts: true,
  'goog:chromeOptions': {
    args: [chromiumBrowserOptions, '--disable-gpu', '--window-size=1920,1080'],
  },
};

const FireFox = {
  maxInstances: 3,
  browserName: 'firefox',
  'moz:firefoxOptions': {
    args: [firefoxBrowserOptions],
  },
};

const MicrosoftEdge = {
  maxInstances: 3,
  browserName: 'MicrosoftEdge',
  'ms:edgeOptions': {
    args: [chromiumBrowserOptions, '--disable-gpu', '--window-size=1920,1080'],
  },
};

const AllBrowsers = [MicrosoftEdge, Chrome, FireFox];

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
  default:
    browserCapabilities = AllBrowsers;
}

exports.config = merge(wdioConf.config, {
  capabilities: browserCapabilities,
  // Test runner services
  services: [['selenium-standalone', { drivers: { firefox: 'latest', chrome: true, chromiumedge: 'latest' } }]],
});
