const { AuthPage } = require('./auth.page');
const { LoginPage } = require('./login.page');
const { EditPage } = require('./profile.editing');

class App {
  constructor() {
    this.authPage = new AuthPage();
    this.loginPage = new LoginPage();
    this.editPge = new EditPage();
  }
}

module.exports = { App };
