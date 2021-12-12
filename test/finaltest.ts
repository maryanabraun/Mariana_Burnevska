import { expect } from 'chai';
import 'mocha';
import { Builder, WebDriver } from 'selenium-webdriver';

import LoginPage from '../pages/loginpage';
import HomePage from '../pages/homepage';
import AdminPage from '../pages/adminpage';
import PayGradePage from '../pages/paygradespage';


describe('Test test', ()=> {

    let driver: WebDriver;
    let loginpage: LoginPage;
    let homepage: HomePage;
    let adminpage: AdminPage;
    let paygradepage: PayGradePage;

    before(async()=> {
        driver = await new Builder().forBrowser('chrome').build();
        loginpage = await new LoginPage(driver);
        homepage = await new HomePage(driver);
        adminpage = await new AdminPage(driver);
        paygradepage = await new PayGradePage(driver);
    });

    it('login test', async()=> {
        var url: string = 'https://opensource-demo.orangehrmlive.com/';
        await loginpage.go_to_URL(url);
        await loginpage.login_into('Admin', 'admin123');
        expect(await loginpage.get_URL()).to.equal("https://opensource-demo.orangehrmlive.com/index.php/dashboard");
    }).timeout(10000);

    it('open admin page test', async()=> {
        await homepage.go_to_admin_menu();
        expect(await homepage.get_URL()).to.equal("https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers");
    }).timeout(15000);

    it('open grade page test', async()=> {
        await adminpage.go_to_admin_jobgrades();
        expect(await adminpage.get_URL()).to.equal("https://opensource-demo.orangehrmlive.com/index.php/admin/viewPayGrades");
    }).timeout(15000);


    it('check add grade test', async()=> {
        var grdn =  'Grade 8';
        var curr = 'USD - United States Dollar';
        var min = '1500';
        var max = '4500';
        await paygradepage.add_grade(grdn, curr, min, max);
        expect(await paygradepage.check_grade(grdn)).to.equal(true);
    }).timeout(5000);

    // it('check grade test', async()=> {
    //     var grdn =  'Grade 8';
    //     var curr = 'USD - United States Dollar';
    //     await paygradepage.check_grade(grdn, curr);
    //     expect(await paygradepage.check_grade(grdn, curr)).to.equal(true);
    // }).timeout(5000);

    
    it('check delete grade test', async()=> {
        var homeurl = 'https://opensource-demo.orangehrmlive.com/index.php/admin/viewPayGrades';
        await paygradepage.chech_is_URL(homeurl);
        var grdn =  'Grade 8';
        var curr = 'USD - United States Dollar';
        await paygradepage.delete_grade(grdn);
        expect(await paygradepage.check_grade(grdn)).to.equal(false);
    }).timeout(20000);

    after(async()=> {
        await driver.quit();
    });

});
