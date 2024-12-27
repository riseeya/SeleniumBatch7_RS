const { Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

async function LoginSauceDemoTest(){
    //Create connection with Browser Driver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.saucedemo.com');
        
        // Action Step
        //1. Login with username & password
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.xpath("//input[@id='password']")).sendKeys('secret_sauce');
        
        //2. Click button Login
        await driver.findElement(By.xpath("//input[@id='login-button']")).click();
        
        // Expected Result
        //1. Success login
        //2. Direct to "Swag Lab" page
        let titleText = await driver.findElement(By.xpath("//div[@class='app_logo']")).getText();
        assert.strictEqual(titleText.includes('Swag Labs'), true, "Title does not include 'Swag Labs'");

        //3. Can see hamburger button
        let menuButton = await driver.findElement(By.xpath("//button[@id='react-burger-menu-btn']"));
        assert.strictEqual(await menuButton.isDisplayed(), true, "Menu Button is not visible");


    } finally {
        await driver.quit();

    }
}

LoginSauceDemoTest();