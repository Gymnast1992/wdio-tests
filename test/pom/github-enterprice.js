class EnterpricePage {
    get btnStartAFreeTrial() { return $('//*[text()="Start a free trial"]') }
    get btnEnterpriceCloud() {return $('//*[text()="Enterprise Cloud"]')}
    get header1() {return $('.mb-4.container-xl')}
    
}

export default new EnterpricePage()