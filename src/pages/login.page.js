const { Button, Input } = require('../elements');

class LoginPage {
  constructor() {
    this.emailField = new Input('input[name="email"]');
    this.passwordField = new Input('input[name="password"]');

    this.signInButton = new Button('button');
  }

  async register({ email, password }) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);

    await this.signInButton.click();
  }
}

module.exports = { LoginPage };