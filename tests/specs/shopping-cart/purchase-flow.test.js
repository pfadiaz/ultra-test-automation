import Pages from '../../pages/index';

describe('Feature: Shopping Cart', () => {
  it('validates that an standard user can complete a purchase flow', async () => {
    await Pages.loginPage.open();
    await Pages.loginPage.login();
    // TODO continue with the user flow
  });
});
