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

const buttonViewCart = page.locator('xpath=//button//span[text()="View Cart"]');
await buttonViewCart.waitFor();
await buttonViewCart.click();

//Cart Assertion
const assertionEmptyCart = page.locator('xpath=//h3[@data-hook="EmptyState.title"]');
await expect(assertionEmptyCart).not.toBeVisible();

//Click on the checkout button on the My Cart page
const buttonCheckout = page.locator('xpath=//span[text()="Checkout"]');
await buttonCheckout.waitFor();
await buttonCheckout.click();

//Checkout step 1
const fieldEmail = page.locator("xpath=//input[@aria-label='Email']");
await fieldEmail.fill('test@email.com');
const fieldFirstName = page.locator("xpath=//input[@aria-label='First name']")
await fieldFirstName.fill('Mary');
const fieldLastName = page.locator("xpath=//input[@aria-label='Last name']")
await fieldLastName.fill('Smith');
const fieldPhone = page.locator("xpath=//input[@aria-label='Phone']")
await fieldPhone.fill('123-456-7890');

//Locate country dropdown input
const dropdownCountryRegion = page.locator("xpath=//div[@data-hook='form-field-country']");
await dropdownCountryRegion.click();
const dropdownOption = page.locator("xpath=//div[text()='Canada']");
await dropdownOption.click();

const fieldAddress = page.locator("xpath=//div[@data-hook='form-field-address_line']//input[@role='combobox']");
await fieldAddress.fill('123 Maple Street')

const fieldCity = page.locator("xpath=//input[@aria-label='City']");
await fieldCity.fill('Toronto');

const dropdownProvince = page.locator("xpath=//*[@id='form-field-input-104cd079-756e-4fa1-6f33-07f1a9969567-TPAMultiSection_ltbvfekh-eb42bc72']")
await dropdownProvince.click();
const dropdownProvinceOption = page.locator("xpath=//div[text()='Ontario']");
await dropdownProvinceOption.click();

const fieldZipCode = page.locator("xpath=//input[@aria-label='Zip / Postal Code']");
await fieldZipCode.fill('M4B 1B3');

const buttonContinueCheckout = page.locator("xpath=//span[text()='Continue']");
await buttonContinueCheckout.click();

const buttonContinueCheckout2 = page.locator("xpath=//span[text()='Continue']");
await buttonContinueCheckout2.click();

const buttonPlaceOrder = page.locator("xpath=//span[text()='Place Order & Pay']");
await buttonPlaceOrder.click();

});