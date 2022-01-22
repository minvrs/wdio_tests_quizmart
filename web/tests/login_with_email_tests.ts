import * as landingPage from "../pageObjects/landing_page"
import * as defaultPage from "../pageObjects/default_page"
import * as loginPage from '../pageObjects/login_page'
import { expect } from "chai"


const expectedIncorrectEmailOrPassMsg = 'The email address or password is incorrect'
const expectedEmailOrPassRequireMsg = 'Required'
const expectedInvalidEmailMsg = 'Must be valid email'
const expectedShortPassMsg = 'Password must be at least of 6 characters in length'


describe('Login with email tests', () => {

    before(async function () {
        await defaultPage.openSigInPageURL()

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
