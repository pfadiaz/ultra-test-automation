export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  async open(path) {
    await browser.url(path);
    await browser.waitUntilPageFullyLoaded(path);
  }
}
