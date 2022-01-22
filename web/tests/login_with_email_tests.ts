import * as defaultPage from "../pageObjects/default_page"
import * as loginPage from '../pageObjects/login_page'
import * as userCredentials from '../utils/user_credentials'
import { expect } from "chai"
import { validationFieldMessages } from '../utils/validation_field_messages'

const incorectPass = 'ecret123'
const invalidEmail = 'qwerty'
const shortPass = '1234'


describe('Login with email tests', () => {

    before(async function () {
        await defaultPage.openSigInPageURL()

    })

    it('Inccorect email or password message', async () => {
        await loginPage.signInWithEmail(userCredentials.user.email, incorectPass)
        browser.pause(2000)
        await loginPage.clickSignInBtn()
        expect(await loginPage.getIncorrectEmailOrPassMsg()).equals(validationFieldMessages.incorrectEmailOrPassMsg)

    })

    it('Email and Password required message', async () => {
        browser.refresh()
        await loginPage.clickSignInBtn()
        expect(await loginPage.getInvalidEmailMsg()).equals(validationFieldMessages.RequireMsg)
        expect(await loginPage.getInvalidPassdMsg()).equals(validationFieldMessages.RequireMsg)

    })

    it('Invalid Email message', async () => {
        browser.refresh()
        await loginPage.enterEmailAndClickPassField(invalidEmail)
        expect(await loginPage.getInvalidEmailMsg()).equals(validationFieldMessages.invalidEmailMsg)

    })

    it('Short Password message', async () => {
        browser.refresh()
        await loginPage.enterPassAndClickEmailField(shortPass)
        expect(await loginPage.getInvalidPassdMsg()).equals(validationFieldMessages.shortPassMsg)

    })

})