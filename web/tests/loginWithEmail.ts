import * as defaultPage from "../pageObjects/default_page"
import * as loginPage from '../pageObjects/login_page'
import { expect } from "chai"

const expectedHeaderText = 'Sign in'
const expectedIncorrectEmailOrPassMsg = 'The email address or password is incorrect'
const expectedEmailOrPassRequireMsg = 'Required'
const expectedInvalidEmailMsg = 'Must be valid email'
const expectedShortPassMsg = 'Password must be at least of 6 characters in length'


describe('Login with email', () => {

    it('Open Sign In with Email page', async () => {
        await defaultPage.openURL()
        await browser.pause(1000)
        await loginPage.clickSingInWithEmailBtn()
        await browser.pause(2000)
        expect(await loginPage.getSingInHeaderText()).equals(expectedHeaderText)

    })

    it('Inccorect email or password message', async () => {
        await loginPage.enterEmail()
        await loginPage.enterPass()
        await loginPage.clickSignInBtn()
        expect(await loginPage.getIncorrectEmailOrPassMsg()).equals(expectedIncorrectEmailOrPassMsg)

    })

    it('Email and Password required message', async () => {
        browser.refresh()
        await loginPage.clickSignInBtn()
        expect(await loginPage.getInvalidEmailMsg()).equals(expectedEmailOrPassRequireMsg)
        expect(await loginPage.getInvalidPassdMsg()).equals(expectedEmailOrPassRequireMsg)

    })

    it('Invalid Email message', async () => {
        browser.refresh()
        await loginPage.enterInvalidEmail()
        await loginPage.clickSignInBtn()
        expect(await loginPage.getInvalidEmailMsg()).equals(expectedInvalidEmailMsg)

    })

    it('Short Password message', async () => {
        browser.refresh()
        await loginPage.enterShortPass()
        await loginPage.clickSignInBtn()
        expect(await loginPage.getInvalidPassdMsg()).equals(expectedShortPassMsg)

    })

})
