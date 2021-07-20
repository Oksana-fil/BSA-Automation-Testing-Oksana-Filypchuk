const { AuthPage } = require('./auth.page');
const { LoginPage } = require('./login.page');
const { EditPage } = require('./profile.editing');
const { ChangePage } = require('./change.specialty');
const { AddClinicPage } = require('./add.clinic');


class App {
  constructor() {
    this.authPage = new AuthPage();
    this.loginPage = new LoginPage();
    this.editPage = new EditPage();
    this.changePage = new ChangePage();
    this.addClinicPage = new AddClinicPage();
  }
}

module.exports = { App };
