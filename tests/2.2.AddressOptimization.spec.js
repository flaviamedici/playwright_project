import {test, expect} from '@playwright/test';
import {URLs} from '../Common/URLs' 
import { pageLogin } from '../PageObject/PageLogin';
import {pageSignup} from '../PageObject/PageSignUp';
import { testData } from '../Common/TestData';
import { pageMyAccount } from '../PAgeObject/PageMyAccount';


test.only('Add a new Address in My Account', async({page}) => {
    await page.goto(URLs.pageLinkHomePage)
    await page.waitForTimeout(5000);
    const loginPage = new pageLogin(page);
    const buttonLoginHeader = page.locator(loginPage.buttonLoginHeader);
    await buttonLoginHeader.click();
    const signupPage = new pageSignup(page)
    const buttonLoginSignUp = page.locator(signupPage.buttonLoginSignUp);
    await buttonLoginSignUp.click()
    const fieldEmail = page.locator(loginPage.fieldEmail);
    await fieldEmail.fill(testData.userLogin.emailValid)
    const fieldPassword = page.locator(loginPage.fieldPassword);
    await fieldPassword.fill(testData.userLogin.passwordValid);
    const buttonLoginPage = page.locator(loginPage.buttonLoginPage);
    await buttonLoginPage.click();

    // Assertion: Check if 'andriitest7799 account menu' is visible after login
    await expect(page.getByTestId('handle-button')).toBeVisible();

    const myAccountPage = new pageMyAccount(page);
    const buttonMyAccount = page.locator(myAccountPage.buttonMyAccount);
    await buttonMyAccount.click();
    const buttonMyAddress = page.locator(myAccountPage.buttonMyAddress);
    await buttonMyAddress.click();

    const buttonAddNewAddress = page
    .frameLocator(myAccountPage.iframeMyAddress)
    .locator(myAccountPage.buttonAddNewAddress);
    await buttonAddNewAddress.click();

    const iframeNewAddress = page.frameLocator(myAccountPage.iframeNewAddress);
    const fieldFirstName = iframeNewAddress.locator(myAccountPage.fieldFirstName);
    await fieldFirstName.fill(testData.CustomerDetails.firstName);
    const fieldLastName = iframeNewAddress.locator(myAccountPage.fieldLastName);
    await fieldLastName.fill(testData.CustomerDetails.lastName);
    const fieldCompanyName = iframeNewAddress.locator(myAccountPage.fieldCompanyName);
    await fieldCompanyName.fill(testData.CustomerDetails.companyName);
    const fieldAddress = iframeNewAddress.locator(myAccountPage.fieldAddress);
    await fieldAddress.fill(testData.DeliveryDetails.address);
    //const fieldAddressLine2 = iframeNewAddress.locator(myAccountPage.fieldAddressLine2);
    //await fieldAddressLine2.fill(testData.DeliveryDetails.address);
    const fieldCity = iframeNewAddress.locator(myAccountPage.fieldCity);
    await fieldCity.fill(testData.DeliveryDetails.city);
    const dropdownCountry = iframeNewAddress.locator(myAccountPage.dropdownCountry);
    await dropdownCountry.click();
    const dropdownOption = iframeNewAddress.locator(myAccountPage.dropdownOption);
    await dropdownOption.click();
    const dropdownProvince = iframeNewAddress.locator(myAccountPage.dropdownProvince);
    await dropdownProvince.click();
    const dropdownProvinceOption = iframeNewAddress.locator(myAccountPage.dropdownProvOption);
    await dropdownProvinceOption.click();
    const fieldZipCode = iframeNewAddress.locator(myAccountPage.fieldZipCode);
    await fieldZipCode.fill(testData.DeliveryDetails.zipcode);
    const fieldPhone = iframeNewAddress.locator(myAccountPage.fieldPhone);
    await fieldPhone.fill(testData.CustomerDetails.phone);

    const buttonAddAddress = iframeNewAddress.locator(myAccountPage.buttonAddAddress);
    await buttonAddAddress.click();

    //Assertion
    const addressLocator = page.frameLocator('iframe[title="My Addresses"]')
        .locator('address[data-hook="formatted-address"]');

    await expect(addressLocator).toHaveText(`
        Mary Smith
    Amazon
    123 Maple Street
    Toronto, Ontario M4B 1B3
    Canada
    123-456-7890`)

});

