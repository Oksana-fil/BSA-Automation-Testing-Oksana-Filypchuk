const { expect } = require('chai');

const { App } = require('../src/pages');

const app = new App();

describe('Change specialty and clinic:', function () {
  beforeEach(async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });


  afterEach(async function () {
    await browser.reloadSession();
  });

  it('should be able to change specialty and clinic', async function () {
    await app.changePage.register({
      email: `john_admin1@admin.com`,
      password: 'Pa55word',
      specialty: 'dentist',
      clinic: 'Cleveland Clinic',
    });

    await browser.waitUntil(
        async function () {
          const url = await browser.getUrl();
          return url === 'http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265';
        },
        { timeout: 5000 },
      );

      const url = await browser.getUrl();
      expect(url).to.be.eql('http://46.101.234.121/user-profile/aa5058a3-3e09-4db4-b8fb-2232cc612265');

  });
});