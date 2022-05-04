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
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

  open() {
    return super.open('/');
  }
}

export default new LoginPage();
