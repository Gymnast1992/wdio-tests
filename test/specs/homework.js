
// import { expect } from '@wdio/globals'


// describe("WebdriverIO homework", () => {
//     xit("should be able to click on the API button", async () => {
//         await browser.url(`https://webdriver.io/`)
//         await browser.pause(2000)


//         let buttonAPI = await $('nav [href="/docs/api"]')
//         await buttonAPI.click()
//         await browser.pause(2000)

//     })

//     xit("should scroll to the footer blog button", async () => {
//         await browser.url(`https://webdriver.io`);
        
//         const buttonBlog = await $(`.footer__link-item[href="/blog"]`)
//         await browser.pause(2000)
//         await buttonBlog.scrollIntoView()
//         await browser.pause(2000)
        
//     })

//     xit("the link `becoming a sponsor` should be displayed", async () => {
//         await browser.url(`https://webdriver.io`);

//         const theLink = await $('p [href="/docs/sponsor"]')
//         let isDisplayed = await theLink.isDisplayed()
//         console.log("The link `becoming a sponsor` is displayed: " + isDisplayed)

//     })

//     xit("the link should be clickable ", async () => {
//         await browser.url(`https://webdriver.io`);

//         const theLink = await $('p [href="/docs/sponsor"]')
//         let isClickable = await theLink.isClickable()
//         console.log("The link `becoming a sponsor` is clickable: " + isClickable)
//         await theLink.click()
//         await browser.pause(2000)
        
//     })

//     xit("should get html for the link `becoming a sponsor`", async () => {
//         await browser.url(`https://webdriver.io`);

//         const HTML = await $('p [href="/docs/sponsor"]').getHTML()
//         console.log("The `becoming a sponsor` link HTML is: " + HTML)

//     })

//     xit("should waitUntil ", async () => {
//         await browser.url(`https://webdriver.io/docs/sponsor/`);

//         await browser.waitUntil(async () => {
//             return $('[id="how-to-sponsor"]').isDisplayed();
//         }, 5000, "The text `How to sponsor` is not displayed")
//     })
// })