const { Button, Input } = require('../elements');

class AddClinicPage {
    constructor() {
        this.emailField = new Input('input[name="email"]');
        this.passwordField = new Input('input[name="password"]');
        this.signInButton = new Button('button');

        this.clinicsLink = new Button('a[href="/clinics"]');
        this.addClinicButton = new Button('button[class="styles_btn___s1BB styles_without-border__3Vbp3 styles_primary-dark__1WnyR"]', 0);
        
        this.nameField = new Input('input[name="name"]');
        this.addressField = new Input('input[name="address"]');

        this.statusDdl = new Button('div.selectStyles__control', 0);
        this.cityDdl = new Button('div.selectStyles__control', 1);

        this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
        this.addButton = new Button('button[type="submit"]');
    }

    async register({ email, password}) {
      await this.emailField.setValue(email);
      await this.passwordField.setValue(password);
      await this.signInButton.click();
      
      await this.clinicsLink.click();
    }

    async add({ name, address, status, city }) {
      await this.addClinicButton.click();

      await this.nameField.setValue(name);
      await this.addressField.setValue(address);
  
      await this.statusDdl.click();
      await this.ddlOption.clickByText(status);

      await this.cityDdl.click();
      await this.ddlOption.clickByText(city);
      await this.addButton.click();
  
    }
  }
    
    module.exports = { AddClinicPage };