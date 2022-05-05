import Page from '../page';

class CheckOutCompletedPage extends Page {
  get url() {
    return '/checkout-complete.html';
  }

  /**
   * Selectors for the checkout step two page
   */

  get containerThankYouMessage() {
    return $('#checkout_complete_container');
  }

  get btnBackHome() {
    return $('[data-test="back-to-products"]');
  }

  // runs assertions to check if the tajnk you page is displayed
  async validateOrderWasComplete(confirmationDetails) {
    const checkoutCompleteMessage = await this.containerThankYouMessage.getText();

    await expect(checkoutCompleteMessage).toContain(confirmationDetails.title);
    await expect(checkoutCompleteMessage).toContain(confirmationDetails.body);
    await this.btnBackHome.clickOn();
  }
}

export default new CheckOutCompletedPage();
