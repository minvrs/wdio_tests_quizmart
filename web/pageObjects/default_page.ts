//----------General----------//

export async function openURL(): Promise<void> {
    await browser.maximizeWindow()
    await browser.url('')

}

export async function openSigInPageURL(): Promise<void> {
    await browser.maximizeWindow()
    await browser.url('/sign-in')

}

//----------Gets----------//

export async function getElementsByLocator(locator: string) {
    return await (browser).$(locator)

}

export async function getElementsTextByLocator(locator: string): Promise<string> {
    return await (await getElementsByLocator(locator)).getText()

}

//----------Action----------//

export async function clickByLocator(locator: string): Promise<void> {
    await (await getElementsByLocator(locator)).click()

}

export async function enterTextByLocator(locator: string, text: string): Promise<void> {
    await clickByLocator(locator)
    await (await getElementsByLocator(locator)).keys(text)

}

//----------Waits----------//

let defaultTimeuot: number = 10000

export async function waitUntilElementIsVisibleInViewportByLocator(locator: string, customTimeout?: number): Promise<void> {
    const timeoutMessage = `${locator} element still invisible after ${defaultTimeuot} ms`
    await browser.waitUntil(async function () {
        return (await getElementsByLocator(locator)).isDisplayedInViewport()
    },
        {
            timeout: defaultTimeuot,
            timeoutMsg: timeoutMessage
        })

}