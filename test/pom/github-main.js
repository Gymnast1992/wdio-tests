class GitHubMainPage {
    get btnStartTrial() { return $('[data-test-selector="start-trial-button"]') }
    get btnSubscibe() {return $('[class="btn-mktg mb-4 btn-muted-mktg"]')}
    get h1SubscribePage() {return $('[data-testid="Grid-:Rgn6:"]')}
    get emailInput() {return $('#email')}
    get emailContinueBtn() {return $('#email-container button')}
    get passwordInput() {return $('#password')}
    get passwordContinueBtn() {return $('#password-container .signup-continue-button')}
    get usernameInput() {return $('#login')}
    get usernameContinueBtn() {return $('[data-continue-to="opt-in-container"]')}
    get checkmarkPreferences() {return $('#opt_in')}
    get preferencesContinueBtn() {return $('[data-continue-to="captcha-and-submit-container"]')}
    get header2() {return $('[class="h2-mktg mb-5"]')}
    get btnSignUp() {return $('.HeaderMenu-link--sign-up')}
    get btnSearch() {return $('[class="search-input"]')}
    get inputSearch() {return $('#query-builder-test')}
    get btnSubmitSearch() {return $('[class="ActionListItem-descriptionWrap"]')}

    // async function() {
        
    // }

}

export default new GitHubMainPage()