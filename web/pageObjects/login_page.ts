import * as defaultPage from "../pageObjects/default_page"

const btnSignInWithEmail = '//main//button[text()="Sign in with email"]'
const signInHeader = '//main//h1'
const btnSignIn = '//main//button[@type="submit"]'
const enterEmailField = '//main//input[@name="email"]'
const enterPassField = '//main//input[@name="password"]'

const incorrectEmailOrPassMsg = '//main//div//form//h3'
const enterEmailMsg = '//main//div//form//div//div[1]//h3'
const enterPassMsg = '//main/div/form/div/div[2]/h3'

const correctEmail = 'mindaugas.verseckas+quiz@telesoftas.com'
const correctPass = 'Secret123'
const incorectEmail = 'indaugas.verseckas+quiz@telesoftas.com'
const incorectPass = 'ecret123'


export async function clickSingInWithEmailBtn(): Promise<void> {
    await defaultPage.clickByLocator(btnSignInWithEmail)

}

export async function getSingInHeaderText(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(signInHeader)

}

export async function clickEnterEmail(): Promise<void> {
    await defaultPage.clickByLocator(enterEmailField)
    
}

export async function enterEmail(): Promise<void> {
    await defaultPage.enterTextByLocator(enterEmailField, correctEmail)
    
}

export async function clickEnterPass(): Promise<void> {
    await defaultPage.clickByLocator(enterPassField)
    
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

export async function getEmailRequiredMsg(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(enterEmailMsg)
    
}

export async function getPassRequiredMsg(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(enterPassMsg)
    
}