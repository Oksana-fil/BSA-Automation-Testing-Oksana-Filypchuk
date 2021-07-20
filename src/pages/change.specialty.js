const { Button, Input } = require('../elements');

class ChangePage {
    constructor() {
        this.emailField = new Input('input[name="email"]');
        this.passwordField = new Input('input[name="password"]');
        this.signInButton = new Button('button');

        this.profileLink = new Button('a[href="/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265"]');

        this.specialtyDdl = new Button('div.selectStyles__control', 0);
        this.clinicDdl = new Button('div.selectStyles__control', 1);

        this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
        this.saveSpecialtyButton = new Button('button[type="submit"]', 0);
        this.saveClinicButton = new Button('button[type="submit"]', 1);
  }

  async register({ email, password, specialty, clinic }) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.signInButton.click();

    await this.profileLink.click();

    await this.specialtyDdl.click();
    await this.ddlOption.clickByText(specialty);
    await this.saveSpecialtyButton.click();

    await this.clinicDdl.click();
    await this.ddlOption.clickByText(clinic);
    await this.saveClinicButton.click();

  }
}

module.exports = { ChangePage };