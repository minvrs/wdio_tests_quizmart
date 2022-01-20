import * as defaultPage from "../pageObjects/default_page"
import * as loginPage from '../pageObjects/login_page';
import { expect } from "chai"

const expectedHeaderTaxt = 'Sign in'
const expectedIncorrectEmailOrPassMsg = 'The email address or password is incorrect'
const expectedEmailOrPassRequireMsg = 'Required'


describe('Login with email', () => {

    it('Open Sign In with Email page', async () => {
        browser.maximizeWindow();
        await defaultPage.openURL();
        await browser.pause(1000);
        await loginPage.clickSingInWithEmailBtn()
        await browser.pause(2000);
        expect(await loginPage.getSingInHeaderText()).equals(expectedHeaderTaxt)
        await browser.pause(1000);


    });

    it('Inccorect email or password message', async () => {
        await loginPage.clickEnterEmail();
        await loginPage.enterEmail();
        await loginPage.clickEnterPass();
        await loginPage.enterPass();
        await loginPage.clickSignInBtn();
        expect(await loginPage.getIncorrectEmailOrPassMsg()).equals(expectedIncorrectEmailOrPassMsg);

    });

    it('Email and Password required', async () => {
        browser.refresh();
        await loginPage.clickSignInBtn();
        expect(await loginPage.getEmailRequiredMsg()).equals(expectedEmailOrPassRequireMsg);
        expect(await loginPage.getPassRequiredMsg()).equals(expectedEmailOrPassRequireMsg);

    })


});
