const { test, expect } = require('@playwright/test');

// Please note that the locator for the account button in the video differs from the current one,
// as Wix has since updated it. We have made the necessary changes in the file accordingly.

test.only('End-to-End Purchase Flow for a Single Product', async ({ page }) => {
  test.setTimeout(50000);  
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
await expect(page.locator('h3[data-hook="EmptyState.title"]')).not.toBeVisible(); 

await page.getByRole('button', { name: 'Checkout' }).click();
await page.waitForTimeout(5000);

await page.getByRole('textbox', { name: 'Email' }).fill('test@example.com');
await page.getByRole('textbox', { name: 'First name' }).fill('Mary');
await page.getByRole('textbox', { name: 'Last name' }).fill('Smith');
await page.getByRole('textbox', { name: 'Phone' }).fill('+1234567890');

await page.getByRole('combobox', { name: 'Country/Region' }).click();
await page.getByText('Canada').click();

await page.getByRole('combobox', { name: 'Address' }).fill('123 Maple Street');
await page.getByRole('textbox', { name: 'City' }).fill('Toronto');
await page.getByRole('combobox', { name: 'Province' }).click();
await page.getByText('Ontario').click();
await page.getByRole('textbox', { name: 'Zip / Postal code' }).fill('M4B 1B3');

// Click the Continue button
await page.getByRole('button', { name: 'Continue' }).click();

// Click the Continue button again in the Checkout page
await page.getByRole('button', { name: 'Continue' }).click();

//Click the button to place an order and pay
await page.getByRole('button', { name: 'Place Order & Pay' }).click();
await page.waitForTimeout(10000);
// Assertion: Check for order confirmation message
await expect(page.locator('div').filter({ hasText: /^You'll receive a confirmation email soon\.$/ })).toBeVisible(
    {
        message: 'Error: Purchase confirmation message was not displayed'
    }
);


});