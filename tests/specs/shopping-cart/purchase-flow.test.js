import Pages from '../../pages/index';
import utils from '../../utils/generate-test-data';

describe('Feature: Shopping Cart', function () {
  it('validates that an standard user can complete a purchase flow', async function () {
    this.profile = utils.generateUserInformation();
    await Pages.loginPage.open();
    await Pages.loginPage.login(
      this.profile.standard.username,
      this.profile.standard.password,
    );
    // TODO continue with the user flow
  });
});
