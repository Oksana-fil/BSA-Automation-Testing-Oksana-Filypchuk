const { expect } = require('chai');

const { App } = require('../src/pages');

const app = new App();

describe('Edit profile:', function () {
  beforeEach(async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('http://46.101.234.121/sign-in');
  });


  afterEach(async function () {
    await browser.reloadSession();
  });

  it('should be able to update profile', async function () {
    await app.editPage.register({
      email: `jane123smith@gmail.com`,
      password: 'Pa55word',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const mySurname = $('input[name="surname"]');
    expect(mySurname).toHaveValueContaining('Watson');

    await browser.reloadSession();
  });
});