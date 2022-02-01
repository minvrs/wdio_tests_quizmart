import * as defaultPage from "../pageObjects/default_page"

const discoverPageHeaders = '//h1'


//----------Gets----------//

export async function getPageHeaderText(): Promise<string> {
    return await defaultPage.getElementsTextByLocator(discoverPageHeaders)

}