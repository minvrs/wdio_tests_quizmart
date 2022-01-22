import * as defaultPage from "../pageObjects/default_page"

const signInHeader = '//main//h1'
const btnSignIn = '//main//button[@type="submit"]'
const enterEmailField = '//main//input[@name="email"]'
const enterPassField = '//main//input[@name="password"]'

const incorrectEmailOrPassMsg = '//main//form//h3'
const emailValidationMsg = '//main//div//form//div//div[1]//h3'
const passValidationMsg = '//main/div/form/div/div[2]/h3'

const correctEmail = 'mindaugas.verseckas+quiz@telesoftas.com'
const correctPass = 'Secret123'
const incorectEmail = 'indaugas.verseckas+quiz@telesoftas.com'
const incorectPass = 'ecret123'
const invalidEmail = 'qwerty'
const shortPass = '1234'


export async function getSingInHeaderText(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(signInHeader)

}

export async function enterEmail(): Promise<void> {
    await defaultPage.enterTextByLocator(enterEmailField, correctEmail)

}

export async function enterPass(): Promise<void> {
    await defaultPage.enterTextByLocator(enterPassField, incorectPass)

}

export async function clickSignInBtn(): Promise<void> {
    await defaultPage.clickByLocator(btnSignIn)

}

export async function getIncorrectEmailOrPassMsg(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(incorrectEmailOrPassMsg)

}

export async function getInvalidEmailMsg(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(emailValidationMsg)
}

export async function getInvalidPassdMsg(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(passValidationMsg)

}

export async function enterInvalidEmail(): Promise<void> {
    await defaultPage.enterTextByLocator(enterEmailField, invalidEmail)

}

export async function enterShortPass(): Promise<void> {
    await defaultPage.enterTextByLocator(enterPassField, shortPass)

}