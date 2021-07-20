const { expect } = require('chai');

const { App } = require('../src/pages');

const app = new App();

describe('Add clinic:', function () {
  beforeEach(async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });


  afterEach(async function () {
    await browser.reloadSession();
  });

  it('should be able to add clinic', async function () {
    await app.addClinicPage.register({
      email: `john_admin1@admin.com`,
      password: 'Pa55word'
    });

    await app.addClinicPage.add({
      name: 'New clinic4',
      address: 'West, AVE4',
      status: 'state',
      city: 'Boston, MA'
    });

    await browser.waitUntil(
        async function () {
          const url = await browser.getUrl();
          return url === 'http://46.101.234.121/clinics';
        },
        { timeout: 5000 },
      );

      const url = await browser.getUrl();
      expect(url).to.be.eql('http://46.101.234.121/clinics'); // TODO::check
    });
});