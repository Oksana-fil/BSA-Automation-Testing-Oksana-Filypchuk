const { Button, Input } = require('../elements');

class EditPage {
    constructor() {
        this.emailField = new Input('input[name="email"]');
        this.passwordField = new Input('input[name="password"]');
        this.signInButton = new Button('button');

        this.profileLink = new Button('a[href="/user-profile/10b17307-24a9-4893-a841-4f3b5a0899e2"]');

        this.editProfileButton = new Button('button[class="styles_btn___s1BB styles_medium-round__3KyFO styles_gray-light__3fTxu styles_edit__ftuHl"]');
        this.surnameField = new Input('input[name="surname"]');
        this.editButton = new Button('div.styles_editContainer__3utW5')

    }

    async register({ email, password, surname }) {
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.signInButton.click();

        await this.profileLink.click();

        await this.editProfileButton.click();
        await this.surnameField.setValue(surname);
        await this.editButton.click();
    }
}

module.exports = { EditPage };