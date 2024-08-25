
import { expect } from '@wdio/globals'


describe("WebdriverIO homework", () => {
    it("should be able to click on the API button", async () => {
        await browser.url(`https://webdriver.io/`)
        await browser.pause(2000)


        let buttonAPI = await $('nav [href="/docs/api"]')
        await buttonAPI.click()
        await browser.pause(2000)

        
    })
})