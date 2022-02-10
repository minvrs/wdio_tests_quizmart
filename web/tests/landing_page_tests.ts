import * as defaultPage from "../pageObjects/default_page"
import * as landingPage from "../pageObjects/landing_page"
import * as signInPage from "../pageObjects/sign_in_with_email_page"
import * as registerPage from "../pageObjects/register_with_email_page"
import { expect } from "chai"
import { Headers } from "../utils/enums"

describe('Landing page test cases', () => {

    beforeEach(async function () {
        await defaultPage.openURL()
    })

    it('Open Sign In with Email page', async () => {
        await landingPage.waitUntilBtnSingInWithEmailIsVisible()
        await landingPage.clickBtnSingInWithEmail()
        await signInPage.waitUntilBtnSignInIsVisible()
        expect(await signInPage.getPageHeaderText()).equals(Headers.signInHeaderText)

    })

    it('Open Register with Email page', async () => {
        await landingPage.waitUntilBtnSingInWithEmailIsVisible()
        await landingPage.clickBtnRegister()
        await landingPage.clickBtnRegisterWithEmail()
        await registerPage.waitUntilBtnSignUpIsVisible()
        expect(await registerPage.getPageHeaderText()).equals(Headers.registerPageHeader)
    })
})