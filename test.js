const { Builder, By, Key, until} = require('selenium-webdriver');
async function exampleTest() {
    //Create connection with Browser Driver
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        await driver.get('http://google.com');

        //Try to search
        let searchBox = await driver.findElement(By.name('q'));

        //Simulate for typing 'Hello World'
        await searchBox.sendKeys('Hello World!', Key.RETURN);
        await driver.wait (until.elementLocated(By.id('result-stats')), 10000);
        
        let title = await driver.getTitle();
        console.log('Page title is : ${title}');

    } finally {
        await driver.quit();
    }
}