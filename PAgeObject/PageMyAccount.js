class pageMyAccount {
    constructor(page) {
        this.page = page;
        //Define XPath properties here
        this.buttonMyAccount = "xpath=//div[@class='ukB2Bd']";
        this.buttonMyAddress = "xpath=//span[text()='My Addresses']";
        this.iframeMyAddress = "xpath=//iframe[@title='My Addresses']";
        this.buttonAddNewAddress = "xpath=//div[@class='_10o0_ _26mkp hidden-mobile']//button[@class='_172js' and text()='Add New Address']";

        this.iframeNewAddress = "xpath=/html/body/div[1]/div/div[4]/iframe"
        this.fieldFirstName = "xpath=//input[@name='firstName']"
    } 
}

export {pageMyAccount}