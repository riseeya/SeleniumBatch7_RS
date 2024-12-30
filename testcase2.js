const { Builder } = require('selenium-webdriver');
const LoginPage = require('./WebComponent_RS/LoginPage');
const DashboardPage = require('./WebComponent_RS/DashboardPage');
const assert = require('assert');

describe('testcase1', function (){
    this.timeout(40000);
    let driver;

//run just once at the earliest while beginning the test
    before(async function (){
        driver = await new Builder().forBrowser('chrome').build();

    });

//Test suite    
    beforeEach(async function (){
        const loginPage = new LoginPage(driver);
        await loginPage.navigate();
        await loginPage.login('standart-user', 'secret-sauce');

    });

    //Assertion or validation
    it('Error message appears for invalid credential', async function (){
        const loginPage = new LoginPage(driver);
        const errorMessage = await loginPage.getErrorMessage();
        assert.strictEqual(errorMessage, 'Epic sadface: Username and password do not match any user in this service', 'Expected error not match');

    });

    after(async function (){
        await driver.quit();

    });

});
