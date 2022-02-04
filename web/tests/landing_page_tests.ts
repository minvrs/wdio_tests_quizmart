import * as defaultPage from "../pageObjects/default_page"
import * as landingPage from "../pageObjects/landing_page"
import * as loginPage from "../pageObjects/sign_in_with_email_page"
import { expect } from "chai"
import { Headers } from "../utils/enums"

describe('Landing page test cases', () => {

    it.only('Open Sign In with Email page', async () => {
        await defaultPage.openURL()
        await landingPage.waitUntilBtnSingInWithEmailIsVisible()
        await landingPage.clickBtnSingInWithEmail()
        await loginPage.waitUntilBtnSignInIsVisible()
        expect(await loginPage.getPageHeaderText()).equals(Headers.signIndHeaderText)

    })
})