import chai = require('chai')
import chaiHttp = require('chai-http')
chai.use(chaiHttp)

const namespace = 'rbu55'
const apiKey = '70c49109-bbf0-467a-8a42-c94d0cb0bf32'
const tag = 'hello'

export async function getEmails(tag: string): Promise<string> {

    let attempts = 1

    while (attempts < 10) {

        const response = await chai.request('https://api.testmail.app/api/json')
            .get('')
            .query({ 'apikey': apiKey, 'namespace': namespace, 'pretty': 'true' })
        console.log(response.body)

        const emailConfirmRegex = /(Email confirmation)/
        const emailVerificationLink = /(?<=href=")(.*)(?=" target=")/
        const emails = response.body.emails

        for (const email of emails) {
            if (email.subject != null) {
                if (email.subject.match(emailConfirmRegex)) {
                    const foundVerificationLink = email.html.match(emailVerificationLink)[0]
                    console.log(foundVerificationLink)
                    return foundVerificationLink
                }
                else {
                    await browser.pause(1000)
                    attempts++



                }
            }
        }
    }
}
