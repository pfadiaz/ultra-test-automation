import Pages from '../../pages/index';
import Utils from '../../utils/index';
import fixtures from '../../fixtures/complete-checkout.json';

describe('Feature: Shopping Cart', async function() {
  before(async function() {
    this.fixtures = fixtures;
    this.profile = await Utils.generateUserInformation();
    await Pages.loginPage.open();
    await Pages.loginPage.login(this.profile.standard.username, this.profile.standard.password);
    await browser.waitUntilPageFullyLoaded(Pages.inventoryPage.url);
  });

  it('TC-001 - validates that an standard user can complete a purchase flow', async function() {
    const itemToBuy = await Utils.pickRandomJSONEntry(Pages.inventoryPage.inventoryItems());

    await Pages.inventoryPage.addToShoppingCart(itemToBuy);
    this.itemInCart = await Pages.inventoryPage.getItemsDetails(itemToBuy);
    await Pages.inventoryPage.openShoppingCart();
    await browser.waitUntilPageFullyLoaded(Pages.cartPage.url);
    await Pages.cartPage.validateShoppingCartItems(this.itemInCart);
    await Pages.cartPage.goToCheckOut();
    await browser.waitUntilPageFullyLoaded(Pages.checkoutStepOnePage.url);
    await Pages.checkoutStepOnePage.filloutTheCheckoutForm(this.profile);
    await Pages.cartPage.validateShoppingCartItems(this.itemInCart);
    await Pages.checkoutStepTwoPage.validateCosts(this.itemInCart);
    await Pages.checkoutStepTwoPage.completeCheckout();
    await Pages.checkoutStepCompletePage.validateOrderWasComplete(this.fixtures);
    await browser.waitUntilPageFullyLoaded(Pages.inventoryPage.url);
  });
});
