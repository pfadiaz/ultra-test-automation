const merge = require('deepmerge');

const wdioConf = require('./main.conf');

exports.config = merge(wdioConf.config, {
  // Server Configurations:
  hostname: 'localhost',
  port: 4444,
  path: '/',
  capabilities: [
    {
      maxInstances: 2,
      browserName: 'chrome',
      // 'goog:chromeOptions': {
      //     args: ['--headless']
      // },
      acceptInsecureCerts: true,
    },
    {
      maxInstances: 2,
      browserName: 'firefox',
      // 'moz:firefoxOptions': {
      //     args: ['-headless']
      // },
      acceptInsecureCerts: true,
    },
    {
      maxInstances: 2,
      browserName: 'MicrosoftEdge',
      // 'moz:firefoxOptions': {
      //     args: ['-headless']
      // },
      acceptInsecureCerts: true,
    },
  ],
  services: ['docker'],
});
