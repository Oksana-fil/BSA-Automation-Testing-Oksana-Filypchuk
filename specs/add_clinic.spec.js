/*const { expect } = require('chai');

//Go to wesite (url)
//Sing-in to acount
//Click on "Clinic"
//Click on "Add" button
//Enter valid name in "Name" box
//Enter valid address in "Address" box
//Select Status (State)
//Select City (Baltimore, MN)
//Click on "Add" button
//Compare result

describe('Add clinic:', function () {
    it('should be able to add clinic', async function () {

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

        await browser.url('http://46.101.234.121/clinics');

        const addButton = await $('button[class="styles_btn___s1BB styles_without-border__3Vbp3 styles_primary-dark__1WnyR"]');

        const nameField = await $('input[name="name"]');
        const addressField = await $('input[name="address"]');

        const ddls = await $$('div.selectStyles__control');

        const statusDdl = ddls[0];
        const cityDdl = ddls[1];

        const statusOption = await $('div.selectStyles__option=state');
        const cityOption = await $('div.selectStyles__option=Boston, MA');

        const saveAddedClinic = await $('div[class="styles_submitBtn__jK6DU"]');

        await addButton.waitForDisplayed({ timeout: 3000 });
        await addButton.click();

        await nameField.waitForDisplayed({ timeout: 5000 });
        await nameField.setValue('New clinic');

        await addressField.waitForDisplayed({ timeout: 5000 });
        await addressField.setValue('West Ave 44');

        await statusDdl.waitForDisplayed({ timeout: 5000 });
        await statusDdl.click();

        await statusOption.waitForDisplayed({ timeout: 5000 });
        await statusOption.click();

        await cityDdl.waitForDisplayed({ timeout: 5000 });
        await cityDdl.click();

        await cityOption.waitForDisplayed({ timeout: 5000 });
        await cityOption.click();

        await saveAddedClinic.waitForDisplayed({ timeout: 5000 });
        await saveAddedClinic.click();

        await browser.reloadSession();

    });
});*/