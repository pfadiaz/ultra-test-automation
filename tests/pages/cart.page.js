import Page from './page';

class CartPage extends Page {
  get url() {
    return '/cart.html';
  }

  /**
   * Selectors for the cart page
   */
  get lblInventoryItemName() {
    return $('.inventory_item_name');
  }

  get lblCartQuantity() {
    return $('.cart_quantity');
  }

  get lblInvetoryItemPrice() {
    return $('.inventory_item_price');
  }

  get btnCheckout() {
    return $('[data-test="checkout"]');
  }

  // check if the items in the cart are correct based on the initial selection
  async validateShoppingCartItems(item) {
    const currentShoppingQuantityFromCart = await this.lblCartQuantity.getText();
    const currentItemInCart = await this.lblInventoryItemName.getText();
    const currentPriceTag = await this.lblInvetoryItemPrice.getText();

    await expect(currentShoppingQuantityFromCart).toBe('1');
    await expect(currentItemInCart).toBe(item.name);
    await expect(currentPriceTag).toBe(item.price);
  }

  // navegates to the checkout steps
  async goToCheckOut() {
    await this.btnCheckout.clickOn();
  }
}

export default new CartPage();
