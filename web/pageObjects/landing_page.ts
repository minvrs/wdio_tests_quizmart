import * as defaultPage from "./default_page"

const btnSignInWithEmail = '//main//button[text()="Sign in with email"]'

export async function clickSingInWithEmailBtn(): Promise<void> {
    await defaultPage.clickByLocator(btnSignInWithEmail)

}