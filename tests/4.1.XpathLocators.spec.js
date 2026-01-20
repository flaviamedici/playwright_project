const { test, expect } = require('@playwright/test');
const {URLs} = require('../Common/URLs');

test('XPath Playwright Locators', async ({ page }) => {
// Navigate to the Testing101 website
await page.goto(URLs.pageLinkPlaywrightLocators);
await page.waitForTimeout(5000);

//XPath Locators


//button element can be written in different ways using xpath
//await page.getByTestId('buttonElement').click();
//await page.locator('xpath=//button[@data-testid="buttonElement"]').click();
//await page.locator('xpath=//span[text()="Submit"]').click();
//await page.locator('xpath=//select').click();
//await page.locator('xpath=//*[id="input_comp-llcdvbb8" or @name="first-name"]').fill('Mary');   
//await page.locator('xpath=//*[contains(text(), "terms")]').click();
//await page.locator('xpath=//*[contains(@class, "T6F83Z")]').click();
await page.locator('xpath=//button//span[text()="Submit"]').click();
await page.pause();
});