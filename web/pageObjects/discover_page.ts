import * as defaultPage from "../pageObjects/default_page"

const discoverPageHeader = '//h1'
const btnSortQuizzes = '//input[@value="Popular"]'
const btnProfileDropMenu = '//div/div[1]/button/div[text()="U"]'
const btnProfileSettings = '//a[2][@href="/profile"]'

//----------Actions----------//

export async function clickProfileDropMenuBtn(): Promise<void> {
    await defaultPage.clickByLocator(btnProfileDropMenu)

}

export async function clickProfileSettingsBtn(): Promise<void> {
    await defaultPage.clickByLocator(btnProfileSettings)

}

//----------Gets----------//

export async function getPageHeaderText(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(discoverPageHeader)

}

//----------Waits----------//

export async function waitUntilBtnSortQuizesIsVisible(customTimeout?: number): Promise<void> {
    return await defaultPage.waitUntilElementIsVisibleInViewportByLocator(btnSortQuizzes, customTimeout)

}

//-----Probably will need to move to Profile page

const btnDeleteAccount = '//button[text()="Delete Account"]'
const btnDeleteAnyway = '//button[text()="Delete anyway"]'

export async function clickDeleteAccountBtn(): Promise<void> {
    await defaultPage.clickByLocator(btnDeleteAccount)

}

export async function clickDeleteAnywayBtn(): Promise<void> {
    await defaultPage.clickByLocator(btnDeleteAnyway)

}