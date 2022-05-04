const addBrowserCustomCommands = function () {
  browser.addCommand(
    'clickOn',
    function () {
      this.waitForDisplayed();
      this.click();
    },
    true,
  );

  browser.addCommand(
    'type',
    function (text) {
      this.waitForDisplayed();
      this.click();
      this.setValue(text);
    },
    true,
  );

  // WAIT UTILS

  browser.addCommand('waitUntilPageFullyLoaded', function (url) {
    this.waitUntil(
      () => {
        const pageState = browser.execute(() => {
          return 'complete' === document.readyState;
        });
        const currentUrl = browser.getUrl();

        return true === pageState && currentUrl.includes(url);
      },
      { timeoutMsg: `Expected page was not Loaded: ${url}` },
    );
  });
};

module.exports = { addBrowserCustomCommands };
