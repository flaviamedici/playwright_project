class pageLogin {
    constructor(page) {
        this.page = page
        //Deifne Xpath as properties here
        this.buttonLoginHeader = "//span[text()='Log In']";
        this.fieldEmail = "//input[@type='email']";
        this.fieldPassword = "//input[@type='password']"
    }
}

export {pageLogin};