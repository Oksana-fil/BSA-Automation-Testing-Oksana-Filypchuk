const { expect } = require('chai');

//Go to wesite (url)
//Enter valide data in boxes
//Click on "Sing in" button
//Compare result

describe('Sing-in:', function () {

    it('should be able to sing in', async function () {

        await browser.setWindowSize(1440, 960);
        await browser.url('http://46.101.234.121/sign-in');

        const emailField = await $('input[name="email"]');
        const passwordField = await $('input[name="password"]');

        const signInButton = await $('button');

        await emailField.waitForDisplayed({ timeout: 5000 });
        await emailField.setValue('john_admin1@admin.com');

        await passwordField.waitForDisplayed({ timeout: 5000 });
        await passwordField.setValue('Pa55word');

        await signInButton.waitForDisplayed({ timeout: 5000 });
        await signInButton.click();

        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url === 'http://46.101.234.121/doctors';
            },
            { timeout: 5000 },
        );

        const url = await browser.getUrl();
        expect(url).to.be.eql('http://46.101.234.121/doctors')

        await browser.reloadSession();
    });
});