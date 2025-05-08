import test from "playwright/test";

test('Learn Basic Locators',async ({page}) => {
    
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager")
	await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click();
    await page.click(`text='CRM/SFA'`)
    // can use backtick instead of text='CRM/SFA'
    const titlepage = await page.title()
    console.log(titlepage);

})


test ('Handle Dropdown using Select tag',async ({page}) => {
    
    await page.goto("http://leafground.com/select.xhtml");
   //await page.selectOption(".ui-selectonemenu",{index:2})
   await page.selectOption(".ui-selectonemenu",{label:'Cypress'})

   await page.waitForTimeout(3000);
   await page.selectOption(".ui-selectonemenu",{index:2})
   await page.waitForTimeout(2000);
})


test('Handle Drodown without Select tag',async ({page}) => {
    await page.goto("http://leafground.com/select.xhtml");
    await page.locator("[id='j_idt87:country_label']").click();
    await page.waitForTimeout(2000);
    await page.locator("[id='j_idt87:country_4']").click();
    await page.waitForTimeout(2000);
})

test.only('Learn Playwrightlocators',async ({page}) => {
    await page.goto("http://www.facebook.com");
    await page.locator("#email").fill("XYZ@gmail.com")
	await page.locator("#pass").fill("XYZ")
    await page.getByRole("button",{name:'Login'}).click();

})