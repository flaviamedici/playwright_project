import {test, expect} from '@playwright/test';
import {URLs} from '../Common/URLs' 
import { pageLogin } from '../PageObject/PageLogin';
import {pageSignup} from '../PageObject/PageSignUp';
import { testData } from '../Common/TestData';


test('Login with valid credentials', async({page}) => {
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
});

