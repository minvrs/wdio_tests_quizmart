// import LoginPage from  '../pageObjects/login.page.ts';
// import SecurePage from '../../web/pageObjects/secure.page';

import * as LoginPage from "../pageObjects/login.page"

describe('Login with email', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.openURL();
        await browser.pause(500)
        

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});


