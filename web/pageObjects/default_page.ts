export async function openURL():Promise <void> {
    await browser.url('')

}

export async function getElementsByLocator(locator:string) {
    return await (browser).$(locator)
    
}

export async function clickByLocator(locator:string): Promise<void> {
    await (await getElementsByLocator(locator)).click()
    
}

export async function getElementsTextByLocator(locator:string): Promise<string> {
    return await (await getElementsByLocator(locator)).getText()
    
}

export async function enterTextByLocator(locator:string, text:string): Promise<void> {
    await (await getElementsByLocator(locator)).keys(text)
    
}

