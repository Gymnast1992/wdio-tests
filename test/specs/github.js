import { expect } from '@wdio/globals'

describe('GitHub main page', () => {
    it('should be able to sign up', async () => {

        let email = "semiankiv12345@gmail.com";
        let password = "Semiankiv123"
        let username = "Gymnast1234"
        let text = "Welcome to GitHub!"

        await browser.url(`https://github.com/`);

        await $('.HeaderMenu-link--sign-up').click()

        await $('#email').setValue(email)
        await $('#email-container button').click()

        await $('#password').setValue(password)
        await $('[data-continue-to="username-container"]').click()


        await $('#login').setValue(username)
        await $('[data-continue-to="opt-in-container"]').click()

        await $('#opt_in').click()
        await $('[data-continue-to="captcha-and-submit-container"]').click()

        await expect('[class="text-mono text-gray-light-mktg"]').toHaveText(text)
        await browser.pause(2000)

        });

        xit('should be able to navigate to Enterprise Cloud', async () => {
    
            await browser.url(`https://github.com/enterprise`);
    
            await $('//*[text()="Start a free trial"]').click()
            await $('//*[text()="Enterprise Cloud"]').click()

        }); 

        xit('should navigate to the pricing page and click on Join for free plan', async () => {
    
            await browser.url(`https://github.com/pricing`);
    
            await $('//*[text()="Join for free"]').click()

        }); 
});
