const { expect } = require('chai');

//Go to wesite (url)
//Sing-in to acount
//Click on "My Profile"
//Click on "Select specialty" dropdown button
//Select specialty (Dentist)
//Click on "Save" button
//Click on "Select clinic" dropdown button
//Select clinic (Cleveland clinic)
//Click on "Save" button
//Compare result

describe('Change specialty and clinic:', function () {
    it('should be able to change specialty and clinic', async function () {

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


        const ddls = await $$('div.selectStyles__control');

        const specialtyDdl = ddls[0];
        const clinicDdl = ddls[1];

        const dantistOption = await $('div.selectStyles__option=Dentist');
        const clevelandOption = await $('div.selectStyles__option=Cleveland Clinic');

        const saveSpecialtyButton = await $('button[class="styles_btn___s1BB styles_without-border__3Vbp3 styles_primary-dark__1WnyR"]');
        const saveClinicButton = await $('button[class="styles_btn___s1BB styles_without-border__3Vbp3 styles_primary-dark__1WnyR"]');

        await specialtyDdl.waitForDisplayed({ timeout: 5000 });
        await specialtyDdl.click();

        await dantistOption.waitForDisplayed({ timeout: 5000 });
        await dantistOption.click();

        await saveSpecialtyButton.waitForDisplayed({ timeout: 5000 });
        await saveSpecialtyButton.click();

        await clinicDdl.waitForDisplayed({ timeout: 5000 });
        await clinicDdl.click();

        await clevelandOption.waitForDisplayed({ timeout: 5000 });
        await clevelandOption.click();

        await saveClinicButton.waitForDisplayed({ timeout: 5000 });
        await saveClinicButton.click();




        //const surname = await usernameField;
        //expect(surname).to.be.eql(NewName)

        await browser.reloadSession();

    });
});