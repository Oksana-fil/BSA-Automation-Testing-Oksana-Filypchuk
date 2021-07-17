const { expect } = require('chai');

//Go to wesite (url)
//Sing-in to acount
//Click on "My Profile"
//Click on "Edit" button next to Profile 
//Change data to new
//Click on "Edit" button
//Compare result

describe('Sing-in:', function () {

    it('should be able to sing in', async function () {

        await browser.setWindowSize(1440, 960);
        await browser.url('http://46.101.234.121/sign-in');

        const emailField = await $('input[name="email"]');
        const passwordField = await $('input[name="password"]');

        const signInButton = await $('button');

        await emailField.waitForDisplayed({ timeout: 3000 });
        await emailField.setValue('john_admin1@admin.com');

        await passwordField.waitForDisplayed({ timeout: 3000 });
        await passwordField.setValue('Pa55word');

        await signInButton.waitForDisplayed({ timeout: 3000 });
        await signInButton.click();
        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url === 'http://46.101.234.121/doctors';
            },
            { timeout: 3000 },
        );
        await browser.pause(5000);

        await browser.url('http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265');

        await browser.pause(5000);

        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url === 'http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265';
            },
            { timeout: 8000 },
        );

        const editProfileButton = await $('button[class="styles_btn___s1BB styles_medium-round__3KyFO styles_gray-light__3fTxu styles_edit__ftuHl"]')
        const usernameField = await $('input[name="surname"]');
        const saveEditButton = await $('button[class="styles_btn___s1BB styles_without-border__3Vbp3 styles_primary-dark__1WnyR"]');

        await editProfileButton.waitForDisplayed({ timeout: 5000 });
        await editProfileButton.click();

        await usernameField.waitForDisplayed({ timeout: 5000 });
        await usernameField.setValue('NewName');

        await editButton.waitForDisplayed({ timeout: 5000 });
        await saveEditButton.click();



        const surname = await usernameField;
        expect(surname).to.be.eql(NewName)

        await browser.reloadSession();
    });
});