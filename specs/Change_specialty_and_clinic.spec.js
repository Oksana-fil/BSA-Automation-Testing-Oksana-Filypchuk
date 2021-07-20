/*const { expect } = require('chai');

const { App } = require('../src/pages');

const app = new App();

describe('Change specialty and clinic:', function () {
  beforeEach(async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('http://46.101.234.121/sign-in');
  });


  afterEach(async function () {
    await browser.reloadSession();
  });

  it('should be able to change specialty and clinic', async function () {
    await app.editPage.register({
      email: `john_admin1@admin.com`,
      password: 'Pa55word',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    await browser.waitUntil(
        async function () {
          const url = await browser.getUrl();
          return url === 'http://46.101.234.121/user-profile/10b17307-24a9-4893-a841-4f3b5a0899e2';
        },
        { timeout: 5000 },
      );

    await app.editPage.register({
        specialty: 'Dentist',
        clinic: 'Cleveland Clinic',
    });

  });
});
*/