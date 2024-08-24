import { expect } from '@wdio/globals'

describe('Webdriverio main page', () => {
    // it('should have correct title', async () => {
    //     await browser.url(`https://webdriver.io/`);

    //     const title = await browser.getTitle()
    //     console.log(title);

    //     await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    // });
    //------------------------------------------------------------


    // it("should show addValue command", async () => {
    //     await browser.url(`https://the-internet.herokuapp.com/login`);

    //     let input = await $("#username")
    //     await input.addValue("hello")
    //     await browser.pause(2000)

    //     await input.addValue(123)
    //     await browser.pause(2000)

    //     await expect(input).toHaveValue("hello123")
    // });
    //------------------------------------------------------------


    // it("should show setValue command", async () => {
    //     await browser.url(`https://the-internet.herokuapp.com/login`);

    //     let input = await $("#username")
    //     await input.setValue("world")
    //     await browser.pause(2000)
    //     await input.setValue("hello")
    //     await browser.pause(2000)

    //     console.log(await input.getValue())
    //     await expect(input).toHaveValue("hello")
    // });
    //------------------------------------------------------------


    // it("should show click command", async () => {
    //     await browser.url(`https://the-internet.herokuapp.com/login`);

    //     let loginButton = await $('.radius')
    //     await browser.pause(2000)
    //     await loginButton.click()
    //     await browser.pause(4000)

    //     let inputUsername = await $("#username")
    //     await inputUsername.addValue("tomsmith")
    //     await browser.pause(2000)

    //     let inputPassword = await $('[type="password"]')
    //     await inputPassword.addValue("SuperSecretPassword")
    //     await browser.pause(2000)

    //     await loginButton.click()
    //     await browser.pause(4000)
    // });
    //------------------------------------------------------------


    // it("should show getAttribute command", async () => {
    //     await browser.url(`https://dou.ua/search`);

    //     let inputSearch = await $('#gsc-i-id1')
    //     let attr = await inputSearch.getAttribute("aria-label")
    //     console.log("Placeholder attribute is: " + attr)// output: search

    //     await inputSearch.setValue("Cat")
    //     attr = await inputSearch.getValue()
    //     await browser.pause(2000)
    //     console.log("Value attribute is: " + attr)// output cat
    // });
    //------------------------------------------------------------


    // it("should show getLocation command", async () => {
    //     await browser.url(`https://dou.ua`);

    //     let inputSearch = await $('#txtGlobalSearch')
    //     let location = await inputSearch.getLocation()
    //     console.log("Location is: " + location)// output: x, y

    //     let xLocation = await inputSearch.getLocation("x")
    //     console.log("Location by x is: " + xLocation)// output: x
    // });
    //------------------------------------------------------------


    // it("should show getText command", async () => {
    //     await browser.url(`https://webdriver.io`);

    //     let subtitle = await $(`.hero__subtitle`)
    //     console.log("Subtitle text is: " + await subtitle.getText())// output: Next-gen browser..
    // })
    //-----------------------------------------------------------------
    //Homework


    // it("should show getText command", async () => {
    //     await browser.url(`https://webdriver.io`);

    //     let apiButton = await $('//a[text()="API"]');
    //     await apiButton.click();

    //     // let text = await $('//header[text()="Introduction"]');//Introduction
    //     // console.log("The text is: " + await text.getText());
    //     // await expect(text).toHaveValue("Introduction");

    //     let wdButton = await $('//a[text()="WebDriver"]');
    //     await wdButton.getValue('//h1');
    //     await expect(wdButton).toHaveValue(`href="/docs/api/webdriver"`);
    //     // $(selector).getHTML({ includeSelectorTag, pierceShadowRoot, removeCommentNodes, prettify })


    //     //let subtitle = await $(`.hero__subtitle`)
    //     //console.log("Subtitle text is: " + await subtitle.getText())// output: Next-gen browser..
    // })
    //------------------------------------------------------------
    // it("should show if an element is clickable", async () => {
    //     await browser.url(`https://webdriver.io`);

    //     const blogButton = await $(`.button[href="/docs/gettingstarted"]`)
    //     let clickable = await blogButton.isClickable();
    //     console.log("Is clickable: " + clickable)
    // })
    //----------------------------------------------------------- 
    // it("should show if an element is displayed", async () => {
    //     await browser.url(`https://webdriver.io`);
        
    //     const blogButton = await $(`.button[href="/docs/gettingstarted"]`);
    //     let displayed = await blogButton.isDisplayed();
    //     console.log("Is displayed: " + displayed)
    // })

    //_________________________________________________________

    //        H A V E  T O  W O R K  O N  I T

    // it("should show if an element is visible", async () => {  
    //     await browser.url(`https://webdriver.io`);

    //     const blogButton = await $(`.button[href="/docs/gettingstarted"]`);
    //     let displayedInViewport = await blogButton.isDisplayedInViewport()
    //     console.log("Is blog button displayed in viewport: " + displayedInViewport)     

    //     const footer = await $('.footer__link-item[href="/docs/gettingstarted"]')
    //     let footerIsDisplayedInViewport = await footer.isDisplayedInViewport()
    //     console.log("Is footer displayed in viewport: " + footerIsDisplayedInViewport)
    // })

    // it("should show if an element is enabled", async () => {
    //     await browser.url(`https://webdriver.io`);

    //     const getStartedButton = await $(`.button[href="/docs/gettingstarted"]`)
    //     let isEnabled = await getStartedButton.isEnabled()
    //     console.log("Is get started button enable: " + isEnabled)

    // })

    // it("should show is an element is focused", async () => {
    //     await browser.url(`https://webdriver.io`);

    //     const getStartedButton = await $(`.button[href="/docs/gettingstarted"]`)
    //     let isFocused = await getStartedButton.isFocused()
    //     console.log("Is get started button focused before click" + isFocused)

    //     await browser.pause(2000)
    //     await getStartedButton.click()
    //     console.log("Is get started button focused after click" + isFocused)
    //     await browser.pause(2000)

    // })
    
});
