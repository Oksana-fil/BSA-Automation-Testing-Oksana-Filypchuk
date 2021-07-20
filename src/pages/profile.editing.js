const { Button, Input } = require('../elements');

class EditPage {
    constructor() {

        this.profileLink = new Button('a[href="/user-profile/10b17307-24a9-4893-a841-4f3b5a0899e2"]');

        this.editProfileButton = new Button('button[class="styles_btn___s1BB styles_medium-round__3KyFO styles_gray-light__3fTxu styles_edit__ftuHl"]');
        this.surnameField = new Input('input[name="surname"]');
        this.submitButton = new Button('button[class="styles_btn___s1BB styles_without-border__3Vbp3 styles_primary-dark__1WnyR"]', 2)
    }

    async changeSurname({ surname }) {

        await this.profileLink.click();

        await this.editProfileButton.click();
        await this.surnameField.setValue(surname);
        await this.submitButton.click();

        await this.editProfileButton.click();
    }
}

module.exports = { EditPage };