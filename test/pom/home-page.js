class HomePage {
    get btnReadMore() { return $('//*[text()="Read more"]') }

    async clickOnReadMoreBtn() {
        await this.btnReadMore.click()
    }

}

export default new HomePage()