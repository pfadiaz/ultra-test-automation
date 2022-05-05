import Page from '../page';

class CheckOutStepOnePage extends Page {
  get url() {
    return '/checkout-step-two.html';
  }

  /**
   * Selectors for the checkout step one page
   */
  get inputFirstName() {
    return $('[data-test="firstName"]');
  }

  get inputLastName() {
    return $('[data-test="lastName"]');
  }

  get inputPostalCode() {
    return $('[data-test="postalCode"]');
  }

  get btnContinue() {
    return $('[data-test="continue"]');
  }

  // completes the form with the info generate with faker
  async filloutTheCheckoutForm(userData) {
    await this.inputFirstName.type(userData.standard.firstName);
    await this.inputLastName.type(userData.standard.lastName);
    await this.inputPostalCode.type(userData.standard.postalCode);
    await this.btnContinue.clickOn();
  }
}

export default new CheckOutStepOnePage();
