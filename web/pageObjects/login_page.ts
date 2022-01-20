import * as defaultPage from "../pageObjects/default_page"

const btnSignInWithEmail = '//main//button[text()="Sign in with email"]'
const signInHeader = '//main//h1'


export async function clickSingInWithEmailBtn(): Promise<void> {
    await defaultPage.clickByLocator(btnSignInWithEmail)

}

export async function getSingInHeaderText(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(signInHeader)

}

