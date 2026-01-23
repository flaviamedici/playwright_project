import { test, expect } from '@playwright/test';
import {URLs} from '../Common/URLs';
import {pagePLP} from '../PageObject/PagePLP'
import { pageCartPage } from '../PageObject/PageCartPage';
import { pageCheckout } from '../PageObject/PageCheckout';
import { testData } from '../Common/TestData';

test('End-to-End Purchase Flow with the Xpath locators', async ({ page }) => {
test.setTimeout(50000);  
// Navigate to the Testing101 website
await page.goto(URLs.pageLinkCategoryAllProducts);
await page.waitForTimeout(5000);

const plpPage = new pagePLP(page);
//Click on the Sorting option of the FIlter tab
const buttonSorting = page.locator(plpPage.buttonSorting);
await buttonSorting.click();
await page.waitForTimeout(5000);
//Click on the Add To Cart button on the Americano product
const buttonAddToCartPLP = page.locator(plpPage.buttonAddToCartPLP);
await buttonAddToCartPLP.waitFor();
await buttonAddToCartPLP.click();

//Start interacting with the iframe
const cartPage = new pageCartPage(page);
const buttonViewCart = page.locator(cartPage.buttonViewCart);
await buttonViewCart.waitFor();
await buttonViewCart.click();

//Cart Assertion
const assertionEmptyCart = page.locator(cartPage.assertionEmptyCart);
await expect(assertionEmptyCart).not.toBeVisible();

//Click on the checkout button on the My Cart page
const buttonCheckout = page.locator(cartPage.buttonCheckout);
await buttonCheckout.waitFor();
await buttonCheckout.click();

//Checkout step 1
const checkoutPage = new pageCheckout(page);
const fieldEmail = page.locator(checkoutPage.fieldEmail);
await fieldEmail.fill(testData.checkoutCustomerDetails.email);
const fieldFirstName = page.locator(checkoutPage.fieldFirstName)
await fieldFirstName.fill(testData.checkoutCustomerDetails.firstName);
const fieldLastName = page.locator(checkoutPage.fieldLastName)
await fieldLastName.fill(testData.checkoutCustomerDetails.lastName);
const fieldPhone = page.locator(checkoutPage.fieldPhone)
await fieldPhone.fill(testData.checkoutCustomerDetails.phone);

//Locate country dropdown input
const dropdownCountryRegion = page.locator(checkoutPage.dropdownCountryRegion);
await dropdownCountryRegion.click();
const dropdownOption = page.locator(checkoutPage.dropdownOption);
await dropdownOption.click();

const fieldAddress = page.locator(checkoutPage.fieldAddress);
await fieldAddress.fill(testData.checkoutDeliveryDetails.address)

const fieldCity = page.locator(checkoutPage.fieldCity);
await fieldCity.fill(testData.checkoutDeliveryDetails.city);

const dropdownProvince = page.locator(checkoutPage.dropdownProvince)
await dropdownProvince.click();
const dropdownProvinceOption = page.locator(checkoutPage.dropdownProvinceOption);
await dropdownProvinceOption.click();

const fieldZipCode = page.locator(checkoutPage.fieldZipCode);
await fieldZipCode.fill(testData.checkoutDeliveryDetails.zipcode);

const buttonContinueCheckout = page.locator(checkoutPage.buttonContinueCheckout);
await buttonContinueCheckout.click();

const buttonContinueCheckout2 = page.locator(checkoutPage.buttonContinueCheckout2);
await buttonContinueCheckout2.click();

const buttonPlaceOrder = page.locator(checkoutPage.buttonPlaceOrder);
await buttonPlaceOrder.waitFor();
await buttonPlaceOrder.click();

await page.waitForTimeout(5000);

//Assertion
await expect(
page.locator('xpath=//span[text()="You\'ll receive a confirmation email soon."]')
).toBeVisible({
    message: 'Error: Purchase confirmation message was not displayed.'
});

});