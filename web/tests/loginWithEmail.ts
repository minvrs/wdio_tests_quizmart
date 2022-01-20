import * as defaultPage from "../pageObjects/default_page"
import * as loginPage from '../pageObjects/login_page';
import { expect } from "chai"

const expectedHeaderTaxt = 'Sign in'


describe('Login with email', () => {

    it('Open Sign In with Email page', async () => {
        browser.maximizeWindow();
        await defaultPage.openURL();
        await browser.pause(1000);
        await loginPage.clickSingInWithEmailBtn()
        await browser.pause(2000);
        expect(await loginPage.getSingInHeaderText()).equals(expectedHeaderTaxt)
        await browser.pause(2000);


    });
});


// await LoginPage.login('mindaugas.verseckas+quiz@telesoftas.com', 'Secret123');