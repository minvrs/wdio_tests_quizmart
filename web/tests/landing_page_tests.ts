import * as defaultPage from "../pageObjects/default_page"
import * as landingPage from "../pageObjects/landing_page"
import * as loginPage from "../pageObjects/login_page"
import { expect } from "chai"

const expectedHeaderText = 'Sign in'

describe('Landing page test cases', () => {

    it.only('Open Sign In with Email page', async () => {
        await defaultPage.openURL()
        await browser.pause(1000)
        await landingPage.clickSingInWithEmailBtn()
        await browser.pause(2000)
        expect(await loginPage.getPageHeaderText()).equals(expectedHeaderText)

    })
})