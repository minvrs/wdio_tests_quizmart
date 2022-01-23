import * as defaultPage from "../pageObjects/default_page"
import * as loginPage from '../pageObjects/login_page'
import * as userCredentials from '../utils/user_credentials'
import { expect } from "chai"
import { validationFieldMessages } from '../utils/validation_field_messages'

const incorectPass = 'ecret123'
const notRegisteredEmail = 'no@email.com'
const invalidEmails = ['invalidEmail.com', 'invalid@email', '@invalidEmail.com', '!Tº••…¬¬∫√%##%&~“π¬ª¶•.com', 'invalid.@email@invalidEmail.com']
const shortPass = '1234'
const longPass = Math.random().toString(16).repeat(10)
const longEmail = Math.random().toString(16).repeat(18) + '@a.a'
//--Maybe need to move to other place--//
const registerPageHeader = 'Register'
const forgotPassHeader = 'Reset your password'


describe('Login with email tests', () => {

    before(async function () {
        await defaultPage.openSigInPageURL()

    })

    beforeEach(async function () {
        await browser.refresh()

    })

    //--Need test for succesful login--//

    it('Inccorect Email validation message', async () => {
        await loginPage.signInWithEmail(notRegisteredEmail, userCredentials.user.password)
        browser.pause(2000)
        await loginPage.clickSignInBtn()
        expect(await loginPage.getIncorrectEmailOrPassMsg()).equals(validationFieldMessages.incorrectEmailOrPassMsg)

    })

    it('Inccorect Password validation message', async () => {
        await loginPage.signInWithEmail(userCredentials.user.email, incorectPass)
        browser.pause(2000)
        await loginPage.clickSignInBtn()
        expect(await loginPage.getIncorrectEmailOrPassMsg()).equals(validationFieldMessages.incorrectEmailOrPassMsg)

    })

    it('Invalid Emails validation message', async () => {
        for (const invalidEmail of invalidEmails) {
            await loginPage.enterEmailAndClickPassField(invalidEmail)
            expect(await loginPage.getInvalidEmailMsg()).equals(validationFieldMessages.invalidEmailMsg)
            browser.refresh()
        }
    })

    it('Long Email validation message', async () => {
        await loginPage.enterEmailAndClickPassField(longEmail)
        expect(await loginPage.getInvalidEmailMsg()).equals(validationFieldMessages.longEmailMsg)

    })

    it('Short Password validation message', async () => {
        await loginPage.enterPassAndClickEmailField(shortPass)
        expect(await loginPage.getInvalidPassdMsg()).equals(validationFieldMessages.shortPassMsg)

    })

    it('Long Password validation message', async () => {
        await loginPage.enterPassAndClickEmailField(longPass)
        expect(await loginPage.getInvalidPassdMsg()).equals(validationFieldMessages.longPassMsg)

    })

    it('Email and Password required message', async () => {
        await loginPage.clickSignInBtn()
        expect(await loginPage.getInvalidEmailMsg()).equals(validationFieldMessages.RequireMsg)
        expect(await loginPage.getInvalidPassdMsg()).equals(validationFieldMessages.RequireMsg)

    })

    it('Open Create Account link', async () => {
        await loginPage.clickCreateAccountLink()
        expect(await loginPage.getPageHeaderText()).equals(registerPageHeader)
        await browser.back()

    })

    it('Open Forgot Password link', async () => {
        await loginPage.clickForgotPassLinl()
        expect(await loginPage.getPageHeaderText()).equals(forgotPassHeader)

    })

})