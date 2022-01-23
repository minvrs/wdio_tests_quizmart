import * as defaultPage from "../pageObjects/default_page"
import * as loginPage from '../pageObjects/login_page'
import * as userCredentials from '../utils/user_credentials'
import { expect } from "chai"
import { validationFieldMessages } from '../utils/validation_field_messages'

const incorectPass = 'ecret123'
const invalidEmail = 'qwerty'
const shortPass = '1234'
const longPass = Math.random().toString(16).repeat(10)
const longEmail = Math.random().toString(16).repeat(18) + '@a.a'


describe('Login with email tests', () => {

    before(async function () {
        await defaultPage.openSigInPageURL()

    })

    beforeEach(async function () {
        await browser.refresh()

    })

    it('Inccorect email or password validation message', async () => {
        await loginPage.signInWithEmail(userCredentials.user.email, incorectPass)
        browser.pause(2000)
        await loginPage.clickSignInBtn()
        expect(await loginPage.getIncorrectEmailOrPassMsg()).equals(validationFieldMessages.incorrectEmailOrPassMsg)

    })

    it('Email and Password required message', async () => {
        await loginPage.clickSignInBtn()
        expect(await loginPage.getInvalidEmailMsg()).equals(validationFieldMessages.RequireMsg)
        expect(await loginPage.getInvalidPassdMsg()).equals(validationFieldMessages.RequireMsg)

    })

    it('Invalid Email validation message', async () => {
        await loginPage.enterEmailAndClickPassField(invalidEmail)
        expect(await loginPage.getInvalidEmailMsg()).equals(validationFieldMessages.invalidEmailMsg)

    })

    it('Short Password validation message', async () => {
        await loginPage.enterPassAndClickEmailField(shortPass)
        expect(await loginPage.getInvalidPassdMsg()).equals(validationFieldMessages.shortPassMsg)

    })

    it('Long Email validation message', async () => {
        await loginPage.enterEmailAndClickPassField(longEmail)
        expect(await loginPage.getInvalidEmailMsg()).equals(validationFieldMessages.longEmailMsg)

    })

    it('Long Password validation message', async () => {
        await loginPage.enterPassAndClickEmailField(longPass)
        expect(await loginPage.getInvalidPassdMsg()).equals(validationFieldMessages.longPassMsg)

    })

})