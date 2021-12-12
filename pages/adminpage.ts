import {By, WebDriver, Locator} from "selenium-webdriver";
import BasePage from "./basepage";

class AdminPage extends BasePage{

    constructor(driver: WebDriver){
        super(driver);
    }

  
    async go_to_admin_jobgrades(){
        
        await this.driver.findElement(By.id("menu_admin_Job")).click();
        await this.driver.findElement(By.id("menu_admin_viewPayGrades")).click();
    }
}

export default AdminPage;