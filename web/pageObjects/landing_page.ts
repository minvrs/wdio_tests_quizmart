import * as defaultPage from "./default_page"

const btnSignInWithEmail = '//main//button[text()="Sign in with email"]'

//----------Actions----------//

export async function clickBtnSingInWithEmail(): Promise<void> {
    await defaultPage.clickByLocator(btnSignInWithEmail)

}

//----------Waits----------//

export async function waitUntilBtnSingInWithEmailIsVisible(): Promise<void> {
    return await defaultPage.waitUntilElementIsVisibleInViewportByLocator(btnSignInWithEmail)

}