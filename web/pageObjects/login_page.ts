import * as defaultPage from "../pageObjects/default_page"

const pageHeaders = '//main//h1'
const enterEmailField = '//main//input[@name="email"]'
const enterPassField = '//main//input[@name="password"]'
const btnSignIn = '//main//button[@type="submit"]'
const linkCreateAccount = '//main//a[@href="/sign-up"]'
const linkForgotPass = '//main//form/a[@href="/reset-password"]'
const incorrectEmailOrPassMsg = '//main//form//h3'
const emailValidationMsg = '//main//div//form//div//div[1]//h3'
const passValidationMsg = '//main/div/form/div/div[2]/h3'


//----------Actions----------//

export async function signInWithEmail(email: string, pass: string) {
    await defaultPage.enterTextByLocator(enterEmailField, email)
    await defaultPage.enterTextByLocator(enterPassField, pass)
    await defaultPage.clickByLocator(btnSignIn)

}

export async function enterEmailAndClickPassField(email: string): Promise<void> {
    await defaultPage.enterTextByLocator(enterEmailField, email)
    await defaultPage.clickByLocator(enterPassField)

}

export async function enterPassAndClickEmailField(pass: string): Promise<void> {
    await defaultPage.enterTextByLocator(enterPassField, pass)
    await defaultPage.clickByLocator(enterEmailField)

}

export async function clickSignInBtn(): Promise<void> {
    await defaultPage.clickByLocator(btnSignIn)

}

export async function clickCreateAccountLink(): Promise<void> {
    await defaultPage.clickByLocator(linkCreateAccount)

}

export async function clickForgotPassLinl(): Promise<void> {
    await defaultPage.clickByLocator(linkForgotPass)

}

//----------Gets----------//

export async function getSingInHeaderText(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(pageHeaders)

}

export async function getInvalidEmailMsg(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(emailValidationMsg)
}

export async function getInvalidPassdMsg(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(passValidationMsg)

}

export async function getIncorrectEmailOrPassMsg(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(incorrectEmailOrPassMsg)

}