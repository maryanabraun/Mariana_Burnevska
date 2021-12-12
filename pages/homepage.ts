import {Builder, By, WebDriver} from "selenium-webdriver";
import BasePage from "./basepage";

class HomePage extends BasePage {
    
    constructor(driver: WebDriver){ 
        super(driver);
    }

    async go_to_admin_menu(){
        
        await this.driver.findElement(By.id("menu_admin_viewAdminModule")).click();
    }

}
export default HomePage;



