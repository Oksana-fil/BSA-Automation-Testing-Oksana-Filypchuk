/*const { expect } = require('chai');

//Go to wesite (url)
//Enter invalide data in boxes
//Click on "Sing in" button
//Compare result

describe('Sign in:', function () {
  it('Should error on invalid data', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('http://46.101.234.121/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('john_admin@admin.com');

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    const result = await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );


    const url = await browser.getUrl();
    expect(url).to.not.eql('http://46.101.234.121/doctors');
    expect(url).to.be.eql('http://46.101.234.121/sign-in');

    await browser.reloadSession();
  });
});*/