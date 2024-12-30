const { By } = require('selenium-webdriver');

class LoginPage {
    constructor(driver){
        this.driver = driver;
        this.usernameInput = By.id('user-name');
        this.passwordInput = By.xpath("//input[@id='password']");
        this.loginButton = By.xpath("//input[@id='login-button']");
        this.errorMessage = By.xpath("//h3[.='Epic sadface: Username and password do not match any user in this service']");

    }

    async navigate(){
        await this.driver.get("https://www.saucedemo.com");

    }

    async login(username, password){
        await this.driver.findElement(this.usernameInput).sendKeys(username);
        await this.driver.findElement(this.passwordInput).sendKeys(password);
        await this.driver.findElement(this.loginButton).click();
    }

    async getErrorMessage (){
        try {
            const errorElement = await this.driver.findElement(this.errorMessage);
            return await errorElement.getText();
        } catch (err) {
            return null; //no message
        }
    }

}

module.exports = LoginPage;