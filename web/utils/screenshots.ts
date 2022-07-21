import { Context as MochaContext } from 'mocha'
import path = require('path')


export async function takeScreenshot(context: MochaContext): Promise<void> {
    const test = context.currentTest!
    const title = test.title.split(' ').join('_')
    if (test.state === 'passed') {
        await browser.saveScreenshot(path.join(__dirname, `../../screenshots/passed_${title}.png`))
    }
    else
        await browser.saveScreenshot(path.join(__dirname, `../../screenshots/failed_${title}.png`))




}