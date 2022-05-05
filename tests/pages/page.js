export default class Page {
  // // These are shared selectors
  // get lblInventoryItemName() {
  //   return $('.inventory_item_name');
  // }

  // get lblCartQuantity() {
  //   return $('.cart_quantity');
  // }

  // get lblInvetoryItemPrice() {
  //   return $('.inventory_item_price');
  // }

  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  async open(path) {
    await browser.url(path);
    await browser.waitUntilPageFullyLoaded(path);
  }

  // async validateShoppingCartItems(itemToBuy, priceTag) {
  //   const currentShoppingQuantityFromCart = await this.lblCartQuantity.getText();
  //   const currentItemInCart = await this.lblInventoryItemName.getText();
  //   const currentPriceTag = await this.lblInvetoryItemPrice.getText();

  //   await expect(currentShoppingQuantityFromCart).toBe('1');
  //   await expect(currentItemInCart).toBe(itemToBuy);
  //   await expect(currentPriceTag).toBe(priceTag);
  // }
}
