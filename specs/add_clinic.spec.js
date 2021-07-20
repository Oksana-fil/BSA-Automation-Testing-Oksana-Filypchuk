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
      password: 'Pa55word',
      name: 'New clinic',
      address: 'West, AVE',
      status: 'State',
      city: 'Boston, MA',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === '/doctors';
      },
      { timeout: 5000 },
    );

    await browser.waitUntil(
        async function () {
          const url = await browser.getUrl();
          return url === '/clinics';
        },
        { timeout: 5000 },
      );
    });
});