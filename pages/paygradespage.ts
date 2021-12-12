import { expect } from "chai";
import {By, WebDriver, error} from "selenium-webdriver";
import {elementLocated} from "selenium-webdriver/lib/until";
import BasePage from "./basepage";

class PayGradePage extends BasePage{
    

    constructor(driver: WebDriver){
        super(driver);
    }

    async add_grade(grdn: string, curr: string, min: string, max: string){
        await this.driver.findElement(By.id("btnAdd")).click();
        await this.driver.findElement(By.id("payGrade_name")).sendKeys(grdn);
        await this.driver.findElement(By.id("btnSave")).click();
        await this.driver.findElement(By.id("btnAddCurrency")).click();
        await this.driver.findElement(By.id("payGradeCurrency_currencyName")).sendKeys(curr);
        await this.driver.findElement(By.id("payGradeCurrency_minSalary")).sendKeys(min);
        await this.driver.findElement(By.id("payGradeCurrency_maxSalary")).sendKeys(max);
        await this.driver.findElement(By.id("btnSaveCurrency")).click();
        await this.driver.findElement(By.id("menu_admin_Job")).click();
        await this.driver.findElement(By.id("menu_admin_viewPayGrades")).click();
      
        await this.driver.sleep(2000);
    }


    // async search_check_grade(grdn: string, curr: string){
        
    //     await this.driver.findElement(By.linkText(grdn)).click();
    //     await this.check_grade(grdn, curr);
    //     await this.driver.sleep(2000);

    // }

    // async check_grade(grdn: string){
    //     try{
    //     const row =  await this.get_row(grdn);
    //     if (!row) {return false};
    //     if (row == null) {return false};
    //     if ((await row.findElement(By.xpath('td[2]')).getText()) == grdn) return true;
    //     return false;
    //     }
    //     catch(err){return false}}
         
    async check_grade(grdn: string){
        var existed = await this.driver.findElement(By.linkText(grdn)).then(function(){
            return true;
        }, function(err) { if (err instanceof error.NoSuchElementError){
            return false;}})  
        if(existed) return true;
        return false;
    }

    async get_row(grdn: string){
        try{
            return await this.driver.findElement(By.xpath(`//td[@class='left']/a[text()='${grdn}']`)).findElement(By.xpath("./../.."));
        }
        catch(err){
            return null;
        }
    }
    


    

    async delete_grade(grdn: string){
        const row =  await this.get_row(grdn);
        if(!row) return false;
        await row.findElement(By.xpath('td[1]/input')).click(); 
    
        await this.driver.findElement(By.id("btnDelete")).click();
        await this.driver.findElement(By.id("dialogDeleteBtn")).click();
        await this.driver.sleep(15000);
    }
}

export default PayGradePage;