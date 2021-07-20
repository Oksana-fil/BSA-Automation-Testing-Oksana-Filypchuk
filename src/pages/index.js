const { AuthPage } = require('./auth.page');
const { LoginPage } = require('./login.page');
const { EditPage } = require('./profile.editing');
const { ChangePage } = require('./change.specialty');


class App {
  constructor() {
    this.authPage = new AuthPage();
    this.loginPage = new LoginPage();
    this.editPge = new EditPage();
    this.changePage = new ChangePage();
  }
}

module.exports = { App };
