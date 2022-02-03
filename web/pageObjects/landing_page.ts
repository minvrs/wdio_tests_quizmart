import * as defaultPage from "./default_page"

const btnSignInWithEmail = '//main//button[text()="Sign in with email"]'

//----------Actions----------//

export async function clickBtnSingInWithEmail(): Promise<void> {
    await defaultPage.clickByLocator(btnSignInWithEmail)

}

//----------Waits----------//

export async function waitUntilBtnSingInWithEmail(): Promise<void> {
    return await defaultPage.waitUntilElemantIsVisibleInViewportByLocator(btnSignInWithEmail)

}