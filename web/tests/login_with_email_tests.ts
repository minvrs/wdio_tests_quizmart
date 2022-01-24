import * as defaultPage from "../pageObjects/default_page"
import * as loginPage from '../pageObjects/login_page'
import * as userCredentials from '../utils/user_credentials'
import { expect } from "chai"
import { ValidationFieldMessages } from '../utils/validation_field_messages'

const incorrectPass = 'Incorrect'
const notRegisteredEmail = 'no@email.com'
const invalidEmails = ['invalidEmail.com', 'invalid@email', '@invalidEmail.com', '!Tº••…¬¬∫√%##%&~“π¬ª¶•.com', 'invalid.@email@invalidEmail.com']
const shortPass = '1234'
const longPass = Math.random().toString(16).repeat(10)
const longEmail = Math.random().toString(16).repeat(18) + '@mail.mail'
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

    //--Need test for successful login--//

    it('Incorrect Email message when logging in with unregistered email', async () => {
        await loginPage.signInWithEmail(notRegisteredEmail, userCredentials.user.password)
        browser.pause(2000)
        await loginPage.clickSignInBtn()
        expect(await loginPage.getIncorrectEmailOrPassMsg()).equals(ValidationFieldMessages.incorrectEmailOrPassMsg)

    })

    it('Incorrect Password validation message', async () => {
        await loginPage.signInWithEmail(userCredentials.user.email, incorrectPass)
        browser.pause(2000)
        await loginPage.clickSignInBtn()
        expect(await loginPage.getIncorrectEmailOrPassMsg()).equals(ValidationFieldMessages.incorrectEmailOrPassMsg)

    })

    it('Invalid Emails validation message', async () => {
        for (const invalidEmail of invalidEmails) {
            await loginPage.enterEmailAndClickPassField(invalidEmail)
            expect(await loginPage.getInvalidEmailMsg()).equals(ValidationFieldMessages.invalidEmailMsg)
            browser.refresh()
        }
    })

    it('Long Email validation message', async () => {
        await loginPage.enterEmailAndClickPassField(longEmail)
        expect(await loginPage.getInvalidEmailMsg()).equals(ValidationFieldMessages.longEmailMsg)

    })

    it('Short Password validation message', async () => {
        await loginPage.enterPassAndClickEmailField(shortPass)
        expect(await loginPage.getInvalidPassdMsg()).equals(ValidationFieldMessages.shortPassMsg)

    })

    it('Long Password validation message', async () => {
        await loginPage.enterPassAndClickEmailField(longPass)
        expect(await loginPage.getInvalidPassdMsg()).equals(ValidationFieldMessages.longPassMsg)

    })

    it('Email and Password required message', async () => {
        await loginPage.clickSignInBtn()
        expect(await loginPage.getInvalidEmailMsg()).equals(ValidationFieldMessages.RequireMsg)
        expect(await loginPage.getInvalidPassdMsg()).equals(ValidationFieldMessages.RequireMsg)

    })

    it('Open Create Account link', async () => {
        await loginPage.clickCreateAccountLink()
        expect(await loginPage.getPageHeaderText()).equals(registerPageHeader)
        await browser.back()

    })

    it('Open Forgot Password link', async () => {
        await loginPage.clickForgotPassLink()
        expect(await loginPage.getPageHeaderText()).equals(forgotPassHeader)

    })

})