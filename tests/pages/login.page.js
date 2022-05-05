import Page from './page';

class LoginPage extends Page {
  /**
   * Selectors for the login page
   */
  get inputUsername() {
    return $('[data-test="username"]');
  }

  get inputPassword() {
    return $('[data-test="password"]');
  }

  get btnLogin() {
    return $('[data-test="login-button"]');
  }

  // Fill out the login page
  async login(username, password) {
    await this.inputUsername.type(username);
    await this.inputPassword.type(password);
    await this.btnLogin.click();
  }

  async open() {
    await super.open('/');
  }
}

export default new LoginPage();
