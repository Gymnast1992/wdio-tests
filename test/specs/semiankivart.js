
import { expect } from '@wdio/globals'
import HomePage from "../pom/home-page"


describe("My website homework tests", () => {
    it("should be able to click on the Read More button", async () => {
        await browser.url(`https://semiankiv.art/`)
        await browser.pause(2000)

        await HomePage.clickOnReadMoreBtn()
        await browser.pause(2000)

    })

    xit("The links section should contains the text Now Available", async () => {
        await browser.url(`https://semiankiv.art/`)
        await browser.pause(2000)


        const theText = await $('[data-id="2f694763"]')
        console.log("The link section contains the text: " + await theText.getText())
        
    })

    xit("The links section should contains the text Now Available", async () => {
        await browser.url(`https://semiankiv.art/`)
        await browser.pause(2000)


        const buttonLearnMore = await $('//*[text()="Learn More"]')
        console.log("The button Learn More is clickable: " + await buttonLearnMore.isClickable())
        
    })

})