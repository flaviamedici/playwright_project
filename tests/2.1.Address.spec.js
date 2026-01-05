const { test, expect } = require('@playwright/test');

test('Add a new address in my account', async ({ page }) => {
// Navigate to the Testing101 website
await page.goto('https://www.testing101.net/');
await page.waitForTimeout(5000);
//Click on the Consent button on Cookie pop-up
//await page.getByLabel('Consent', { exact: true }).click();
//Click on the Login button on the header
await page.getByRole('button', { name: 'Log In' }).click();
//Click on the Login button on the Signup page
await page.getByTestId('signUp.switchToSignUp').click();
//Input valid data into the Email field
await page.getByLabel('Email').fill('andriitest7799@gmail.com');
//Input valid data into the Password field
await page.getByLabel('Password').fill('Aa123_123');
//Click on the Login button of the Login form
await page.getByTestId('buttonElement').click();

//Click on Account menu on the Header
await page.getByTestId('handle-button').click();
//Click on My Addresses In the Navigation menu
await page.getByRole('menuitem', { name: 'My Addresses' }).click();
//Click on New Address button
await page.frameLocator('iframe[title="My Addresses"]').getByRole('button', { name: 'Add New Address' }).click();

//Start the interaction with the iframe
const frame = await page.frameLocator('iframe[name^="tpapopup-"]');
//Fill the First Name field
await frame.getByLabel('First Name').fill('Testing');
//Fill the Last Name field
await frame.getByLabel('Last Name').fill('101');
//FIll in Company Name field
await frame.getByLabel('Company Name').fill('Testing101');
//Fill in Address field
await frame.getByLabel('Address', {exact: true }).fill('Brazil Street');
//Fill in Address line 2 field
await frame.getByPlaceholder('Apartment, suite, floor').fill('101');
//Fill in Address City
await frame.getByLabel('City').fill('Rio de Janeiro');
//Open the Country dropdown
await frame.getByRole('img').nth(1).click();
//Choose Option on Drop-down menu
await frame.getByText('Brazil').click();
//Fill in zip code field
await frame.getByLabel('Zip / Postal code').fill('98101');
//Fill in phone
await frame.getByLabel('Phone').fill('+1234567890');
//Click on Add Address button
await frame.getByLabel('Add Address and close dialog').click();

});
