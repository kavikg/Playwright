import test from "playwright/test";
test('Locator Classroom activity', async ({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.locator("#username").fill("vidyar@testleaf.com");
    await page.locator("#password").fill("Sales@123");
    await page.locator("#Login").click();
    console.log(await page.title());  
    await page.waitForTimeout(5000);
})

test.only('Locator Dropdown activity', async ({page}) => {
    await page.goto("https://www.telerik.com/contact");
    await page.selectOption("[id='Dropdown-1']",{value:"Account activation"});
    await page.waitForTimeout(2000);
    await page.selectOption("[id='Dropdown-2']",{label:"UI Accelerator"});
    await page.waitForTimeout(2000);
    await page.selectOption("[id='Country-1']",{index:4});
    await page.waitForTimeout(2000);
})