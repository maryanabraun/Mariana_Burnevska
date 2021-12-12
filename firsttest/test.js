const { Browser } = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
require("chromedriver");
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();

async function example(){
 
  
    let driver = await new Builder().forBrowser("chrome").build(); 
    try{
      await driver.get('https://opensource-demo.orangehrmlive.com');
          

      var title = await driver.getTitle();
      console.log('Title is:',title);
      await driver.findElement(By.id("txtUsername")).sendKeys("Admin", Key.ENTER);
      await driver.findElement(By.id("txtPassword")).sendKeys("admin123", Key.ENTER);

      await driver.findElement(By.id("menu_admin_viewAdminModule")).click();
      await driver.findElement(By.id("menu_admin_Job")).click();
      await driver.findElement(By.id("menu_admin_viewPayGrades")).click();
      
      await driver.findElement(By.id("btnAdd")).click();
      await driver.findElement(By.id("payGrade_name")).sendKeys("Grade 8");
      await driver.findElement(By.id("btnSave")).click();
      await driver.findElement(By.id("btnAddCurrency")).click();
      await driver.findElement(By.id("payGradeCurrency_currencyName")).sendKeys("USD - United States Dollar");
      await driver.findElement(By.id("payGradeCurrency_minSalary")).sendKeys("1500");
      await driver.findElement(By.id("payGradeCurrency_maxSalary")).sendKeys("4500")
      await driver.findElement(By.id("btnSaveCurrency")).click();


      await driver.findElement(By.id("menu_admin_Job")).click();
      await driver.findElement(By.id("menu_admin_viewPayGrades")).click();
  

      const el = await driver.findElement(By.xpath("//td[@class='left']/a[text()='Grade 8']"));
      const row = await el.findElement(By.xpath("./../.."));

      await row.findElement(By.xpath('td[text()="Grade 8"]'));
      await row.findElement(By.xpath('td[text()="United States Dollar"]'));
      await row.findElement(By.xpath('td[1]/input')).click();

   
      await driver.findElement(By.id("btnDelete")).click();
      await driver.findElement(By.id("dialogDeleteBtn")).click();

      await driver.findElement(By.id("menu_admin_Job")).click();
      await driver.findElement(By.id("menu_admin_viewPayGrades")).click();
      
      
    }
    finally{
      await driver.quit();
    }
    

}

example()