const { test, expect, describe, page } = require('@playwright/test');

test.describe('saucectl demo test', () => {
    test('should verify title of the page', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        expect(await page.title()).toBe('Swag Labs');
    });

});



// const { chromium, firefox, webkit } = require('playwright');

// (async () => {
//   const browser = await chromium.launch({headless: false});
//   const page = await browser.newPage();
//   await page.goto('https://www.bbc.com');
//   console.log(await page.title());
//   await browser.close();
// })();