import * as defaultPage from "../pageObjects/default_page"
import * as signInPage from "../pageObjects/sign_in_with_email_page"
import * as registerPage from '../pageObjects/register_with_email_page'
import * as discoverPage from '../pageObjects/discover_page'
import * as landingPage from "../pageObjects/landing_page"
import * as userCredentials from '../utils/user_credentials'
import { expect } from "chai"
import { ValidationFieldMessages } from '../utils/validation_field_messages'
import { Headers } from "../utils/enums"

describe('Sign Up with email tests', () => {

    beforeEach(async function () {
        await defaultPage.openSignUpPageURL()

    })

    it('Successful registration', async () => {
        await registerPage.waitUntilBtnSignUpIsVisible()
        await registerPage.signUpWithEmail(userCredentials.user1.email, userCredentials.user1.password, userCredentials.user1.password)
        await discoverPage.waitUntilBtnSortQuizesIsVisible(10000)
        expect(await discoverPage.getPageHeaderText()).equal(Headers.discoverPageHeader)

    })

    it('Email already exists message', async () => {
        await registerPage.signUpWithEmail(userCredentials.user1.email, userCredentials.user1.password, userCredentials.user1.password)
        await registerPage.waitUntilEmailAlreadyExistsMsgIsVisible()
        expect(await registerPage.getEmailAlreadyExistsMsg()).equal(ValidationFieldMessages.emailAlreadyExistsMsg)

    })

    it('Incorrect Emails validation message', async () => {
        for (const invalidEmail of userCredentials.invalidInputs.invalidEmails) {
            await registerPage.enterEmailAndClickPassField(invalidEmail)
            expect(await registerPage.getInvalidEmailMsg()).equals(ValidationFieldMessages.invalidEmailMsg)
            await browser.refresh()

        }
    })

    it('Long Email validation message', async () => {
        await registerPage.enterEmailAndClickPassField(userCredentials.invalidInputs.longEmail)
        expect(await registerPage.getInvalidEmailMsg()).equals(ValidationFieldMessages.longEmailMsg)

    })

    it('Short and Long Password validation message', async () => {
        await registerPage.enterPassAndClickEmailField(userCredentials.invalidInputs.shortPass)
        expect(await registerPage.getInvalidPassdMsg()).equals(ValidationFieldMessages.shortPassMsg)
        await registerPage.enterPassAndClickEmailField(userCredentials.invalidInputs.longPass)
        expect(await registerPage.getInvalidPassdMsg()).equals(ValidationFieldMessages.longPassMsg)

    })

    it('Incorrect Repeat Password massage', async () => {
        await registerPage.enterPassAndClickEmailField(userCredentials.invalidInputs.incorrectPass)
        await registerPage.enterPassRepeatAndClickEmailField(userCredentials.invalidInputs.shortPass)
        expect(await registerPage.getInvalidPassRepeatMsg()).equals(ValidationFieldMessages.matchPassMsg)

    })

    it('Email and Password required message', async () => {
        await registerPage.clickSignUpBtn()
        expect(await registerPage.getInvalidEmailMsg()).equals(ValidationFieldMessages.requiredMsg)
        expect(await registerPage.getInvalidPassdMsg()).equals(ValidationFieldMessages.requiredMsg)
        expect(await registerPage.getInvalidPassRepeatMsg()).equals(ValidationFieldMessages.requiredMsg)

    })

    it('Open Privacy Policy link', async () => {
        await registerPage.clickPrivacyPolicyLink()
        await browser.pause(2000) // need to create wait function for Privacy policy page
        expect(await registerPage.getPrivacyPolicyHeaderText()).equals(Headers.privacyPolicyHeader)

    })

    it('Open Sign In link', async () => {
        await registerPage.clickSignInLink()
        expect(await signInPage.getPageHeaderText()).equals(Headers.signInHeaderText)

    })

    // this was created just to see if it works(sometimes not working as expected), but need different solution
    // maybe borrow from Egle, with random emails
    after(async function () {
        await signInPage.waitUntilBtnSignInIsVisible()
        await signInPage.signInWithEmail(userCredentials.user1.email, userCredentials.user1.password)
        await discoverPage.waitUntilBtnSortQuizesIsVisible(6000)
        await discoverPage.clickProfileDropMenuBtn()
        await discoverPage.clickProfileSettingsBtn()
        await discoverPage.clickDeleteAccountBtn()
        await discoverPage.clickDeleteAnywayBtn()
        await landingPage.waitUntilBtnSingInWithEmailIsVisible(6000)
    })

})