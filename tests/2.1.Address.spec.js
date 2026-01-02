

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

// Assertion: Check if 'andriitest7799 account menu' is visible after login
await expect(page.getByLabel('andriitest7799 account name')).toBeVisible();

//Click on account menu on the header
await page.getByLabel('andriitest7799 account name').click();
//Click on My Addresses In the navigation menu
await page.getByRole('link', { name: 'My Addresses' }).click();
//Click on the Add New Address button
await page.frameLocator('iframe[title="My Addresses]').getByRole('button', { name: 'Add New Address' }).click();
});