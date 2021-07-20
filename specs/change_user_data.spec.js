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

    await app.loginPage.register({
      email: `jane123smith@gmail.com`,
      password: 'Pa55word',
    });

    await app.editPage.changeSurname({
      surname: 'Watson',
    });

    
    //const mySurnameSpan = await $('span.styles_name__2vTNE');

    // expect(mySurnameSpan).to.include('Watson');

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/user-profile/10b17307-24a9-4893-a841-4f3b5a0899e2';
      },
      { timeout: 5000 },
    );
    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/user-profile/10b17307-24a9-4893-a841-4f3b5a0899e2');
  });
});