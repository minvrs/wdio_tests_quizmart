import * as defaultPage from "./default_page"

const btnRegister = '//main//button[text()="Register"]'
const btnRegisterWithEmail = '//main//button[text()="Register with email"]'
const btnSignInWithEmail = '//main//button[text()="Sign in with email"]'

//----------Actions----------//

export async function clickBtnSingInWithEmail(): Promise<void> {
    await defaultPage.clickByLocator(btnSignInWithEmail)

}

export async function clickBtnRegister(): Promise<void> {
    await defaultPage.clickByLocator(btnRegister)
    
}

export async function clickBtnRegisterWithEmail(): Promise<void> {
    await defaultPage.clickByLocator(btnRegisterWithEmail)
    
}

//----------Waits----------//

export async function waitUntilBtnSingInWithEmailIsVisible(customTimeout?: number): Promise<void> {
    return await defaultPage.waitUntilElementIsVisibleInViewportByLocator(btnSignInWithEmail, customTimeout)

}