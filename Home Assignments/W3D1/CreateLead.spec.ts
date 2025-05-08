import test, { expect } from "@playwright/test";
test ('Create Lead',async ({page}) => {
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("majay3574@gmail.com");
    await page.locator("#password").fill("Ajaymichael@321");   
    await page.locator("#Login").click();
    await page.waitForTimeout(5000);
    await page.locator(".slds-icon-waffle").click();
    await page.click(`text='View All'`);
    await page.waitForTimeout(8000);
    await page.click(`text='Sales'`);
    await page.waitForTimeout(6000);
    await page.click(`text='Leads'`);
    await page.click(`text='New'`);
    await page.locator("#combobox-button-255").click();
    await page.locator("#combobox-button-255-3-255").click();
    //await page.locator("#input-1286").click();
    //await page.locator("#input-1286").fill("Kavitha");
    await page.locator("input[name='lastName']").fill("Kavitha");
    const lastname = await page.locator("input[name='lastName']").innerText();
    await page.locator("input[name='Company']").fill("XYZ");
    await page.click("button[name='SaveEdit']");
    console.log(page.title());
    const lead = await page.locator("lightning-formatted-name").innerText();
    //await expect(lead).toContain(lastname);
    if(lead === lastname){
        console.log("lead creation is success");
    }
    else{
        console.log("lead creation is not success");
    }
})
