import * as defaultPage from "./default_page"

const btnSignInWithEmail = '//main//button[text()="Sign in with email"]'
const signInForm = '//main/div/form//button[text()="Sign in"]'

export async function clickSingInWithEmailBtn(): Promise<void> {
    await defaultPage.clickByLocator(btnSignInWithEmail)

}
