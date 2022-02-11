import * as defaultPage from "./default_page"

const pageHeader = '//main//h1'
const privacyPolicyHeader = '//main//h1[1]'
const enterEmailField = '//main//input[@name="email"]'
const enterPassField = '//main//input[@name="password"]'
const enterPassRepeatField = '//main//input[@name="passwordRepeat"]'
const btnSignUp = '//main//button[@type="submit"]'
const emailAlreadyExistsMsg = '//main//form//h3'
const emailValidationMsg = '//main//form//div//div[1]//h3'
const passValidationMsg = '//main//form//div[2]/h3'
const passRepeatValidationMsg = '//main//form//div[3]/h3'
const linkSignIn = '//main//a[@href="/sign-in"]'
const linkPrivacyPolicy = '//main//a[text()="communications"]'

//----------Actions----------//

export async function signUpWithEmail(email: string, pass: string, repeatPass: string) {
    await defaultPage.enterTextByLocator(enterEmailField, email)
    await defaultPage.enterTextByLocator(enterPassField, pass)
    await defaultPage.enterTextByLocator(enterPassRepeatField, repeatPass)
    await clickSignUpBtn()

}

export async function enterEmailAndClickPassField(email: string): Promise<void> {
    await defaultPage.enterTextByLocator(enterEmailField, email)
    await defaultPage.clickByLocator(enterPassField)

}

export async function enterPassAndClickEmailField(pass: string): Promise<void> {
    await defaultPage.enterTextByLocator(enterPassField, pass)
    await defaultPage.clickByLocator(enterEmailField)

}

export async function enterPassRepeatAndClickEmailField(pass: string): Promise<void> {
    await defaultPage.enterTextByLocator(enterPassRepeatField, pass)
    await defaultPage.clickByLocator(enterEmailField)

}

export async function clickSignUpBtn(): Promise<void> {
    await defaultPage.clickByLocator(btnSignUp)

}

export async function clickSignInLink(): Promise<void> {
    await defaultPage.clickByLocator(linkSignIn)

}

export async function clickPrivacyPolicyLink(): Promise<void> {
    await defaultPage.clickByLocator(linkPrivacyPolicy)

}

//----------Gets----------//

export async function getPageHeaderText(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(pageHeader)

}

export async function getEmailAlreadyExistsMsg(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(emailAlreadyExistsMsg)

}

export async function getInvalidEmailMsg(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(emailValidationMsg)
}

export async function getInvalidPassdMsg(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(passValidationMsg)

}

export async function getInvalidPassRepeatMsg(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(passRepeatValidationMsg)

}

export async function getPrivacyPolicyHeaderText(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(privacyPolicyHeader)

}

//----------Waits----------//

export async function waitUntilBtnSignUpIsVisible(customTimeout?: number): Promise<void> {
    return await defaultPage.waitUntilElementIsVisibleInViewportByLocator(btnSignUp, customTimeout)

}

export async function waitUntilEmailAlreadyExistsMsgIsVisible(customTimeout?: number): Promise<void> {
    return await defaultPage.waitUntilElementIsVisibleInViewportByLocator(emailAlreadyExistsMsg, customTimeout)
}