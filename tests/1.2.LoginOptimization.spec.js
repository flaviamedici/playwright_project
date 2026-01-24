import {test, expect} from '@playwright/test';
import {URLs} from '../Common/URLs' 
import { pageLogin } from '../PageObject/PageLogin';
import {pageSignup} from '../PageObject/PageSignUp';
import { testData } from '../Common/TestData';


test.only('Login with valid credentials', async({page}) => {
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
});

test.only('Login with empty fields of the Login form', async({page}) => {
    await page.goto(URLs.pageLinkHomePage)
    await page.waitForTimeout(5000);
    const loginPage = new pageLogin(page);
    const buttonLoginHeader = page.locator(loginPage.buttonLoginHeader);
    await buttonLoginHeader.click();
    const signupPage = new pageSignup(page)
    const buttonLoginSignUp = page.locator(signupPage.buttonLoginSignUp);
    await buttonLoginSignUp.click()
    const buttonLoginPage = page.locator(loginPage.buttonLoginPage);
    await buttonLoginPage.click();

    // Assertion: Check if 'andriitest7799 account menu' is visible after login
    await expect(page.getByText('Email cannot be blank')).toBeVisible();
    await expect(page.getByText('Make sure to enter a password.')).toBeVisible();
});


test.only('Login with empty Email field of the Login form', async({page}) => {
    await page.goto(URLs.pageLinkHomePage)
    await page.waitForTimeout(5000);
    const loginPage = new pageLogin(page);
    const buttonLoginHeader = page.locator(loginPage.buttonLoginHeader);
    await buttonLoginHeader.click();
    const signupPage = new pageSignup(page)
    const buttonLoginSignUp = page.locator(signupPage.buttonLoginSignUp);
    await buttonLoginSignUp.click()
    const fieldPassword = page.locator(loginPage.fieldPassword);
    await fieldPassword.fill(testData.userLogin.passwordValid);
    const buttonLoginPage = page.locator(loginPage.buttonLoginPage);
    await buttonLoginPage.click();

    // Assertion: Check if 'andriitest7799 account menu' is visible after login
    await expect(page.getByText('Email cannot be blank')).toBeVisible();

});

test.only('Login with empty Password field of the Login form', async({page}) => {
    await page.goto(URLs.pageLinkHomePage)
    await page.waitForTimeout(5000);
    const loginPage = new pageLogin(page);
    const buttonLoginHeader = page.locator(loginPage.buttonLoginHeader);
    await buttonLoginHeader.click();
    const signupPage = new pageSignup(page)
    const buttonLoginSignUp = page.locator(signupPage.buttonLoginSignUp);
    await buttonLoginSignUp.click()
    const fieldEmail = page.locator(loginPage.fieldEmail);
    await fieldEmail.fill(testData.userLogin.emailValid);
    const buttonLoginPage = page.locator(loginPage.buttonLoginPage);
    await buttonLoginPage.click();

    // Assertion: Check if 'andriitest7799 account menu' is visible after login
    await expect(page.getByText('Make sure to enter a password.')).toBeVisible();

});

test.only('Login with invalid format of the email', async({page}) => {
    await page.goto(URLs.pageLinkHomePage)
    await page.waitForTimeout(5000);
    const loginPage = new pageLogin(page);
    const buttonLoginHeader = page.locator(loginPage.buttonLoginHeader);
    await buttonLoginHeader.click();
    const signupPage = new pageSignup(page);
    const buttonLoginSignUp = page.locator(signupPage.buttonLoginSignUp);
    await buttonLoginSignUp.click();
    const fieldEmail = page.locator(loginPage.fieldEmail);
    await fieldEmail.fill(testData.userLogin.emailInvalidFormat);
    const fieldPassword = page.locator(loginPage.fieldPassword);
    await fieldPassword.fill(testData.userLogin.passwordValid);
    const buttonLoginPage = page.locator(loginPage.buttonLoginPage);
    await buttonLoginPage.click();

    // Assertion: Check if 'andriitest7799 account menu' is visible after login
    await expect(page.getByTestId('handle-button')).toBeVisible();
});

test.only('Login with invalid password', async({page}) => {
    await page.goto(URLs.pageLinkHomePage)
    await page.waitForTimeout(5000);
    const loginPage = new pageLogin(page);
    const buttonLoginHeader = page.locator(loginPage.buttonLoginHeader);
    await buttonLoginHeader.click();
    const signupPage = new pageSignup(page);
    const buttonLoginSignUp = page.locator(signupPage.buttonLoginSignUp);
    await buttonLoginSignUp.click();
    const fieldEmail = page.locator(loginPage.fieldEmail);
    await fieldEmail.fill(testData.userLogin.emailValid);
    const fieldPassword = page.locator(loginPage.fieldPassword);
    await fieldPassword.fill(testData.userLogin.passwordInvalid);
    const buttonLoginPage = page.locator(loginPage.buttonLoginPage);
    await buttonLoginPage.click();

    // Assertion: Check if 'andriitest7799 account menu' is visible after login
    await expect(page.getByText('Wrong email or password')).toBeVisible();
});

test.only('Login with non-existent user email', async({page}) => {
    await page.goto(URLs.pageLinkHomePage)
    await page.waitForTimeout(5000);
    const loginPage = new pageLogin(page);
    const buttonLoginHeader = page.locator(loginPage.buttonLoginHeader);
    await buttonLoginHeader.click();
    const signupPage = new pageSignup(page);
    const buttonLoginSignUp = page.locator(signupPage.buttonLoginSignUp);
    await buttonLoginSignUp.click();
    const fieldEmail = page.locator(loginPage.fieldEmail);
    await fieldEmail.fill(testData.userLogin.emailUnexistent);
    const fieldPassword = page.locator(loginPage.fieldPassword);
    await fieldPassword.fill(testData.userLogin.passwordValid);
    const buttonLoginPage = page.locator(loginPage.buttonLoginPage);
    await buttonLoginPage.click();

    // Assertion: Check if 'andriitest7799 account menu' is visible after login
    await expect(page.getByText("This email doesn't match any account. Try again")).toBeVisible();
});