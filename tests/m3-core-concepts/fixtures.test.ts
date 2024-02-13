import { test, chromium } from "@playwright/test";


test('Test with Page Fixture', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    console.log("Text content: ", await page.title());
});


test('Other fixtures', async ({ browserName, browser, context, page }) => {

    const page1 = await browser.newPage();
    const page2 = await browser.newPage();
});
