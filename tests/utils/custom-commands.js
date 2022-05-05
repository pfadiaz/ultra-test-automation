const addBrowserCustomCommands = async function () {
  await browser.addCommand(
    'clickOn',
    async function () {
      await this.waitForDisplayed();
      await this.click();
    },
    true,
  );

  await browser.addCommand(
    'type',
    async function (text) {
      await this.waitForDisplayed();
      await this.click();
      await this.setValue(text);
    },
    true,
  );

  // WAIT UTILS

  await browser.addCommand('waitUntilPageFullyLoaded', async function (url) {
    this.waitUntil(
      async () => {
        const pageState = await browser.execute(() => {
          return 'complete' === document.readyState;
        });
        const currentUrl = await browser.getUrl();

        return true === pageState && currentUrl.includes(url);
      },
      { timeoutMsg: `Expected page was not Loaded: ${url}` },
    );
  });
};

module.exports = { addBrowserCustomCommands };
