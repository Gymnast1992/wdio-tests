import { expect } from '@wdio/globals'
import GitHubMainPage from '../pom/github-main'
import EnterpricePage from '../pom/github-enterprice'
import PricingPage from '../pom/github-pricing'
import NewsletterPage from '../pom/github-newsletter'

describe('GitHub main page', () => {
    it('should be able to sign up', async () => {

        let email = "semiankiv12345@gmail.com";
        let password = "Semiankiv123"
        let username = "Gymnast1234"
        let text = "Verify your account"
        let container = await $('[id="captcha-and-submit-container"]')

        await browser.url(`https://github.com/`);

        await GitHubMainPage.btnSignUp.click()

        await GitHubMainPage.emailInput.setValue(email)
        await browser.pause(2000)
        await GitHubMainPage.emailContinueBtn.click()

        await GitHubMainPage.passwordInput.setValue(password)
        await browser.pause(2000)
        await GitHubMainPage.passwordContinueBtn.click()


        await GitHubMainPage.usernameInput.setValue(username)
        await browser.pause(2000)
        await GitHubMainPage.usernameContinueBtn.click()

        await GitHubMainPage.checkmarkPreferences.click()
        await GitHubMainPage.preferencesContinueBtn.click()
        await browser.pause(2000)

        console.log("The text is: " + container.getText())
        await expect(container).toHaveText(text)
        await browser.pause(2000)

        });

        xit('should be able to navigate to Enterprise Cloud', async () => {

            await browser.url(`https://github.com/enterprise`);
    
            await EnterpricePage.btnStartAFreeTrial.click()
            await EnterpricePage.btnEnterpriceCloud.click()

        }); 

        xit('should navigate to the pricing page and click on Join for free plan', async () => {
    
            await browser.url(`https://github.com/pricing`);
    
            await PricingPage.btnJoinForFree.click()

        }); 

        xit('should verify the text', async () => {

            let text = "Over 100 million developers call GitHub home3"
    
            await browser.url(`https://github.com/`);
    
            await GitHubMainPage.header2.scrollIntoView()
            await expect(GitHubMainPage.header2).toHaveText(text)

        });

        xit('should verify the text2 after clicking on Start a free enterprice trial', async () => {
    
            await browser.url(`https://github.com/`);

            await GitHubMainPage.btnStartTrial.scrollIntoView()
            await GitHubMainPage.btnStartTrial.click()

            let text2 = "Pick your trial plan"

            console.log("The text is: " + EnterpricePage.header1.getText())
            await expect(EnterpricePage.header1).toHaveText(text2)

        });

        xit('', async () => {
    
            await browser.url(`https://github.com/`);

            await GitHubMainPage.btnSubscibe.scrollIntoView()
            await GitHubMainPage.btnSubscibe.click()

            // let newUrl = 'https://resources.github.com/newsletter/'
            // console.log(await expect(newUrl).isDisplayed())

            let text3 = "Subscribe to our developer newsletter"
            
            console.log("The text is: " + NewsletterPage.header1.getText())
            await expect(NewsletterPage.header1).toHaveText(text3)
            await browser.pause(2000)

            let email = 'test@gmail.com'

            await NewsletterPage.emailInput.setValue(email)
            await NewsletterPage.countryInputUkraine.click()
            await NewsletterPage.checkmark.click()
            await NewsletterPage.subscribeBtn.click()
            await browser.pause(2000)
            
            console.log(NewsletterPage.textContainer.getText())
            await expect(NewsletterPage.textContainer).toHaveText("Thanks for subscribing!")

        });
});
