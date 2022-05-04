const merge = require('deepmerge');

const wdioConf = require('./main.conf');

const browserOptions = 'Yes' === process.env.HEADLESS ? ['--headless'] : [];

exports.config = merge(wdioConf.config, {
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: [...browserOptions, '--disable-gpu', '--window-size=1920,1080'],
      },
    },
  ],
});
