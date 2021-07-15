const assert = require('assert');

//Go to wesite (url)
//Enter valide data in boxes
//Click on "Sing in" button
//Compare result

describe('Sample:', function() {
    /*xit('WDIO Test', async function () {
        await browser.url('http://46.101.234.121/sign-in');
 
        const title = await BhxBrowser.gerTitle();

        assert.strictEqual(
            title,
            'WebdriverIO - Next-gen browser and mobile automation test framework for Node.js | WebdriverIO',
        );
    });*/
   
    it('WDIO test', async function () {
        await browser.url('http://46.101.234.121/sign-in');
        const emailField = await $('input[name="email"]');
        await emailField.setValue('test');
        await browser.pause(5000);
    });
});

