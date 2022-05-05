import Page from '../page';

class CheckOutStepTwoPage extends Page {
  get url() {
    return '/checkout-step-two.html';
  }

  /**
   * Selectors for the checkout step two page
   */
  get lblSubtotal() {
    return $('.summary_subtotal_label');
  }

  get lblTaxes() {
    return $('.summary_tax_label');
  }

  get lblSummaryTotalLabel() {
    return $('.summary_total_label');
  }

  get btnFinish() {
    return $('[data-test="finish"]');
  }

  // asserts that the values are coming up and matching the original price
  async validateCosts(item) {
    const itemSubTotal = await this.lblSubtotal.getText();
    const currentTax = await this.lblTaxes;
    const currentTotal = await this.lblSummaryTotalLabel;

    await expect(currentTax).toBeDisplayed();
    await expect(currentTotal).toBeDisplayed();
    await expect(itemSubTotal).toEqual(`Item total: ${item.price}`);
  }

  // navigates to the thank you page
  async completeCheckout() {
    await this.btnFinish.clickOn();
  }
}

export default new CheckOutStepTwoPage();
