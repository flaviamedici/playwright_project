import { test, expect } from '@playwright/test';

test.only('End-to-End Purchase Flow with the Xpath locators', async ({ page }) => {
test.setTimeout(50000);  
// Navigate to the Testing101 website
await page.goto('https://www.testing101.net/category/all-products');
await page.waitForTimeout(5000);

//Click on the Sorting option of the FIlter tab
const buttonSorting = page.locator("xpath=//span[text()='Sorting']");
await buttonSorting.click();
await page.waitForTimeout(5000);
//Click on the Add To Cart button on the Americano product
const buttonAddToCartPLP = page.locator("xpath=//div[@data-slug='americano']//span[text()='Add to Cart']");
await buttonAddToCartPLP.waitFor();
await buttonAddToCartPLP.click();

//Start interacting with the iframe
const iframeMinicart = page.frameLocator('xpath=//iframe[contains(@class, "U73P_q")]');
const buttonViewCart = iframeMinicart.locator('xpath=//footer//span[text()="View Cart"]');
await buttonViewCart.waitFor();
await buttonViewCart.click();

//Cart Assertion
const assertionEmptyCart = page.locator('xpath=//h3[@data-hook="EmptyState.title"]');
await expect(assertionEmptyCart).not.toBeVisible();

//Click on the checkout button on the My Cart page
const buttonCheckout = page.locator('xpath=//span[text()="Checkout"]');
await buttonCheckout.waitFor();
await buttonCheckout.click();   

await page.pause();

});