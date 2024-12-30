const { Builder } = require('selenium-webdriver');
const LoginPage = require('./WebComponent_RS/LoginPage');
const DashboardPage = require('./WebComponent_RS/DashboardPage');
const assert = require('assert');

describe('testcase3', function (){
    this.timeout(40000);
    let driver;

//run just once at the earliest while beginning the test
before(async function (){
    driver = await new Builder().forBrowser('chrome').build();

});

(async function addToCart() {

    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open the webapp
        await driver.get('https://www.saucedemo.com');

        let addToCartButton = await driver.wait(until.elementLocated(By.xpath("//button[@id='add-to-cart-sauce-labs-bike-light']")), 10000);
        await addToCartButton.click();

        let confirmationMessage = await driver.wait(until.elementLocated(By.xpath("//div[@id='shopping_cart_container']/a[1]")), 10000);
        console.log('Success add to cart');

    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    } finally {
        await driver.quit();
    }
})();
