class pageMyAccount {
    constructor(page) {
        this.page = page;
        //Define XPath properties here
        this.buttonMyAccount = "xpath=//div[@class='ukB2Bd']";
        this.buttonMyAddress = "xpath=//span[text()='My Addresses']";
        this.iframeMyAddress = "xpath=//iframe[@title='My Addresses']";
        this.buttonAddNewAddress = "xpath=//div[@class='_10o0_ _26mkp hidden-mobile']//button[@class='_172js' and text()='Add New Address']";

        this.iframeNewAddress = "xpath=/html/body/div[1]/div/div[4]/iframe";
        this.fieldFirstName = "xpath=//input[@name='firstName']";
        this.fieldLastName = "xpath=//input[@name='lastName']";
        this.fieldCompanyName = "xpath=//input[@name='company']";
        this.fieldAddress = "xpath=//input[@name='addressLine1']";
        this.fieldAddressLine2 = "xpath=//input[@name='addressLine2']";
        this.fieldCity = "xpath=//input[@name='city']";
        this.dropdownCountry = "xpath=//input[@name='country']";
        this.dropdownOption = '//*[@data-hook="dropdown-item-CAN"]';
        this.dropdownProvince = "xpath=//input[@name='subdivision']";
        this.dropdownProvOption = "xpath=//*[@data-hook='dropdown-item-ON']"
        this.fieldZipCode = "xpath=//input[@name='zipCode']";
        this.fieldPhone = "xpath=//input[@name='phone']";
        this.buttonAddAddress = "xpath=//button[@data-hook='submit-add-address']"
    } 
}

export {pageMyAccount}