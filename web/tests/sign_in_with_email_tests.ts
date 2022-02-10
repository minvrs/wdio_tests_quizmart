import * as defaultPage from "../pageObjects/default_page"
import * as signInPage from '../pageObjects/sign_in_with_email_page'
import * as discoverPage from '../pageObjects/discover_page'
import * as userCredentials from '../utils/user_credentials'
import { expect } from "chai"
import { ValidationFieldMessages } from '../utils/validation_field_messages'
import { Headers } from "../utils/enums"

describe('Login with email tests', () => {

    beforeEach(async function () {
        await defaultPage.openSigInPageURL()

    })

    it('Successful sign in', async () => {
        await signInPage.signInWithEmail(userCredentials.user.email, userCredentials.user.password)
        await discoverPage.waitUntilBtnSortQuizesIsVisible(6000)
        expect(await discoverPage.getPageHeaderText()).equal(Headers.discoverPageHeader)

    })

    it('Incorrect Email message when logging in with unregistered email', async () => {
        await signInPage.signInWithEmail(userCredentials.invalidInputs.notRegisteredEmail, userCredentials.user.password)
        expect(await signInPage.getIncorrectEmailOrPassMsg()).equals(ValidationFieldMessages.incorrectEmailOrPassMsg)

    })

    it('Incorrect Password massage when logging in', async () => {
        await signInPage.signInWithEmail(userCredentials.user.email, userCredentials.invalidInputs.incorrectPass)
        expect(await signInPage.getIncorrectEmailOrPassMsg()).equals(ValidationFieldMessages.incorrectEmailOrPassMsg)

    })

    it('Incorrect Emails validation message', async () => {
        for (const invalidEmail of userCredentials.invalidInputs.invalidEmails) {
            await signInPage.enterEmailAndClickPassField(invalidEmail)
            expect(await signInPage.getInvalidEmailMsg()).equals(ValidationFieldMessages.invalidEmailMsg)
            await browser.refresh()
        }
    })

    it('Long Email validation message', async () => {
        await signInPage.enterEmailAndClickPassField(userCredentials.invalidInputs.longEmail)
        expect(await signInPage.getInvalidEmailMsg()).equals(ValidationFieldMessages.longEmailMsg)

    })

    it('Short and Long Password validation message', async () => {
        await signInPage.enterPassAndClickEmailField(userCredentials.invalidInputs.shortPass)
        expect(await signInPage.getInvalidPassdMsg()).equals(ValidationFieldMessages.shortPassMsg)
        await signInPage.enterPassAndClickEmailField(userCredentials.invalidInputs.longPass)
        expect(await signInPage.getInvalidPassdMsg()).equals(ValidationFieldMessages.longPassMsg)

    })

    it('Email and Password required message', async () => {
        await signInPage.clickSignInBtn()
        expect(await signInPage.getInvalidEmailMsg()).equals(ValidationFieldMessages.requiredMsg)
        expect(await signInPage.getInvalidPassdMsg()).equals(ValidationFieldMessages.requiredMsg)

    })

    it('Open Create Account link', async () => {
        await signInPage.clickCreateAccountLink()
        expect(await signInPage.getPageHeaderText()).equals(Headers.registerPageHeader)

    })

    it('Open Forgot Password link', async () => {
        await signInPage.clickForgotPassLink()
        expect(await signInPage.getPageHeaderText()).equals(Headers.forgotPassHeader)

    })

})