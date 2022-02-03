import * as defaultPage from "../pageObjects/default_page"

const discoverPageHeader = '//h1'
const btnSortQuizzes = '//input[@value="Popular"]'


//----------Gets----------//

export async function getPageHeaderText(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(discoverPageHeader)

}

//----------Waits----------//

export async function waitUntilBtnSortQuizesIsVisible(): Promise<void> {
    return await defaultPage.waitUntilElemantIsVisibleInViewportByLocator(btnSortQuizzes)
    
}