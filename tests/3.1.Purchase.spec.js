const { test, expect } = require('@playwright/test');

// Please note that the locator for the account button in the video differs from the current one,
// as Wix has since updated it. We have made the necessary changes in the file accordingly.

test.only('End-to-End Purchase Flow for a Single Product', async ({ page }) => {
// Navigate to the Testing101 website
await page.goto('https://www.testing101.net/category/all-products');
await page.waitForTimeout(5000);
//Click on the Consent button on Cookie pop-up
//await page.getByLabel('Consent', { exact: true }).click();

//Click on the Sorting option of the FIlter tab
await page.getByRole('link', { name: 'Sorting' }).click();
await page.waitForTimeout(5000);
//Click on the Add To Cart button on the Americano product
await page.getByLabel('Americano gallery').getByLabel('Add to Cart').click();


//Click on the View Cart button on the Cart sidebar
await page.getByRole('button', { name: 'View Cart' }).click();


//Cart Assertion
await expect(page.locator('h3[data-hook="EmptyState.title]')).not.toBeVisible(); 

await page.pause();
});