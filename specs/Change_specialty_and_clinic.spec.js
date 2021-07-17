const { expect } = require('chai');

//Go to wesite (url)
//Sing-in to acount
//Click on "Edit" button 
//Enter invalide data in boxes
//Click on "Sing in" button
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

        
        const ddls = await $$('div.selectStyles__control')

        const specialtyDdl = ddls[0];
        const clinicDdl = ddls[1];

        const doctorOption = await $('div.selectStyles__option=No Options');
        const doctorOption = await $('div.selectStyles__option=Cleveland Clinic');

        await specialtyDdl.waitForDisplayed({ timeout: 5000 });
        await specialtyDdl.setValue('Surgery');

        await clinicDdl.waitForDisplayed({ timeout: 5000 });
        await clinicDdl.click();

        await doctorOption.waitForDisplayed({ timeout: 5000 });
        await doctorOption.click();
    });
});
