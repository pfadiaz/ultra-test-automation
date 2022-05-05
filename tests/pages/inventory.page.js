import Page from './page';

class InventoryPage extends Page {
  get url() {
    return '/inventory.html';
  }

  /**
   * Selectors for the invetory page
   */
  get btnBackpackAddToCart() {
    return $('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  get btnBackpackRemoveFromCart() {
    return $('[data-test="remove-sauce-labs-backpack"]');
  }

  get btnBikeLightAddToCart() {
    return $('[data-test="add-to-cart-sauce-labs-bike-light"]');
  }

  get btnBikeLightRemoveFromCart() {
    return $('[data-test="remove-sauce-labs-bike-light"]');
  }

  get btnBoltTshirtAddToCart() {
    return $('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  }

  get btnBoltTshirtRemoveFromCart() {
    return $('[data-test="remove-sauce-labs-bolt-t-shirt"]');
  }

  get btnFleeceAddToCart() {
    return $('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
  }

  get btnFleeceRemoveFromCart() {
    return $('[data-test="remove-sauce-labs-fleece-jacket"]');
  }

  get btnOnesieAddToCart() {
    return $('[data-test="add-to-cart-sauce-labs-onesie"]');
  }

  get btnOnesieRemoveFromCart() {
    return $('[data-test="remove-sauce-labs-onesie"]');
  }

  get btnTestAllThingsAddToCart() {
    return $('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
  }

  get btnTestAllThingsRemoveFromCart() {
    return $('[data-test="remove-test.allthethings()-t-shirt-(red)"]');
  }

  // Dynamic method to retrieve any price tag
  lblItemPrice(itemToBuy) {
    return itemToBuy.parentElement().$('.inventory_item_price');
  }

  get lnkShoppingCart() {
    return $('#shopping_cart_container');
  }

  get btnLogin() {
    return $('[data-test="login-button"]');
  }

  /**
   * Aliases that return an object to pick
   */
  inventoryItems() {
    return {
      'Sauce Labs Backpack': {
        add: this.btnBackpackAddToCart,
        remove: this.btnBackpackRemoveFromCart,
      },
      'Sauce Labs Bike Light': {
        add: this.btnBikeLightAddToCart,
        remove: this.btnBikeLightRemoveFromCart,
      },
      'Sauce Labs Bolt T-Shirt': {
        add: this.btnBoltTshirtAddToCart,
        remove: this.btnBoltTshirtRemoveFromCart,
      },
      'Sauce Labs Fleece Jacket': {
        add: this.btnFleeceAddToCart,
        remove: this.btnFleeceRemoveFromCart,
      },
      'Sauce Labs Onesie': {
        add: this.btnOnesieAddToCart,
        remove: this.btnOnesieRemoveFromCart,
      },
      'Test.allTheThings() T-Shirt (Red)': {
        add: this.btnTestAllThingsAddToCart,
        remove: this.btnTestAllThingsRemoveFromCart,
      },
    };
  }

  // Add an item to the cart
  async addToShoppingCart(item) {
    await this.inventoryItems()[item].add.clickOn();
  }

  // this method extracts the text from the price tag and returns an object along side price
  async getItemsDetails(item) {
    const priceTag = await this.lblItemPrice(this.inventoryItems()[item].remove).getText();
    const itemName = item;

    return {
      price: priceTag,
      name: itemName,
    };
  }

  // Open the shopping cart
  async openShoppingCart() {
    await this.lnkShoppingCart.clickOn();
  }
}

export default new InventoryPage();
