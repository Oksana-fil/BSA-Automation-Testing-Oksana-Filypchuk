const { Button, Input } = require('../elements');

class ChangePage {
    constructor() {
        this.emailField = new Input('input[name="email"]');
        this.passwordField = new Input('input[name="password"]');
        this.signInButton = new Button('button');

        this.profileLink = new Button('a[href="/user-profile/10b17307-24a9-4893-a841-4f3b5a0899e2"]');

        this.specialtyDdl = new Button('div.selectStyles__control', 0);
        this.clinicDdl = new Button('div.selectStyles__control', 1);

        this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
        this.saveSpecialtyButton = new Button('button');
        this.saveClinicButton = new Button('button');
  }

  async register({ email, password, surname }) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.signInButton.click();

    await this.profileLink.click();

    await this.specialtyDdl.click();
    await this.ddlOption.clickByText(specialtyDdl);
    await this.saveSpecialtyButton.click();

    await this.clinicDdl.click();
    await this.ddlOption.clickByText(clinicDdl);
    await this.saveClinicButton.click();

  }
}

module.exports = { ChangePage };