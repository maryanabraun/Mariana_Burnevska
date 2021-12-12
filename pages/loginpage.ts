import {By, WebDriver} from "selenium-webdriver";
import BasePage  from "./basepage";

class LoginPage extends BasePage {

    constructor(driver: WebDriver){
        super(driver);
    }

    async login_into(log: string, pass: string){
        await this.driver.findElement(By.id("txtUsername")).sendKeys(log);
        await this.driver.findElement(By.id("txtPassword")).sendKeys(pass);
        await this.driver.findElement(By.id("btnLogin")).click();

    }

}
export default LoginPage;