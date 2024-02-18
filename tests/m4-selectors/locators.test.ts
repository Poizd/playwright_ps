import { test, expect } from "@playwright/test";


//pw locators
test('Recomended bult-in locators examples', async ({ page }) => {
    await page.goto('');


    const firstName = page.getByLabel("First name");
    await firstName.fill("Sofia");
    await firstName.clear();

    await page.getByLabel("First name").fill("Mykhailo");

    await page.getByRole("button", { name: "Register" }).click();

    const warning = page.getByText("Valid last name is required");
    await expect(warning).toBeVisible()
});

//css xpath locators
test('Recomended css/xpath locators examples', async ({ page }) => {
    await page.goto('');

    await page.locator(".needs-validation label[for='firstName']").fill("Sofia");
    await page.locator("//form//button[2]").click();

    await expect(page.getByText("Valid last name is required")).toBeVisible()
});

//locators filters

test('Filtering demo', async ({ page }) => {

    await await page.goto('/savings.html');

    const rows = page.getByRole("row");
    console.log(await rows.count());

    const row = page.getByRole("row").filter({ hasText: 'Competition' })
    console.log(await row.textContent());

    const cell = page.getByRole("row")
        .filter({ hasText: "Competition" })
        .getByRole("cell")
        .nth(1)

    console.log(await cell.textContent());
});