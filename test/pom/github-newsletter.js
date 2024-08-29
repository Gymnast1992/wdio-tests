class NewsletterPage {
    get header1() {return $('#hero-section-brand-heading')}
    get textContainer() {return $('#hero-section-brand-heading')}
    get emailInput() {return $('[type="email"]')}
    get countryInputUkraine() {return $('//*[text()="Ukraine"]')}
    get checkmark() {return $('[type="checkbox"]')}
    get subscribeBtn() {return $('[type="submit"]')}

}

export default new NewsletterPage()