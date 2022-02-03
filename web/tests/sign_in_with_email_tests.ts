import * as defaultPage from "../pageObjects/default_page"
import * as loginPage from '../pageObjects/sign_in_with_email_page'
import * as discoverPage from '../pageObjects/discover_page'
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
const discoverPageHeader = 'Discover'
const registerPageHeader = 'Register'
const forgotPassHeader = 'Reset your password'


describe('Login with email tests', () => {

    beforeEach(async function () {
        await defaultPage.openSigInPageURL()

    })

    it.only('Successful sign in', async () => {
        await loginPage.signInWithEmail(userCredentials.user.email, userCredentials.user.password)
        await discoverPage.waitUntilBtnSortQuizesIsVisible()
        expect(await discoverPage.getPageHeaderText()).equal(discoverPageHeader)

    })

    it('Incorrect Email message when logging in with unregistered email', async () => {
        await loginPage.signInWithEmail(notRegisteredEmail, userCredentials.user.password)
        expect(await loginPage.getIncorrectEmailOrPassMsg()).equals(ValidationFieldMessages.incorrectEmailOrPassMsg)

    })

    it('Incorrect Password massage when logging in', async () => {
        await loginPage.signInWithEmail(userCredentials.user.email, incorrectPass)
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

    })

    it('Open Forgot Password link', async () => {
        await loginPage.clickForgotPassLink()
        expect(await loginPage.getPageHeaderText()).equals(forgotPassHeader)

    })

})