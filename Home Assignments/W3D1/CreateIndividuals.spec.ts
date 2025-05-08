import test, { expect } from "@playwright/test";
test ('Create Individuals',async ({page}) => {
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("majay3574@gmail.com");
    await page.locator("#password").fill("Ajaymichael@321");   
    await page.locator("#Login").click();
    await page.waitForTimeout(5000);
    await page.locator(".slds-icon-waffle").click();
    await page.click(`text='View All'`);
    await page.waitForTimeout(8000);
    await page.click(`text='All Apps'`);
    await page.waitForTimeout(6000);
    await page.click(`text='Individuals'`);
    await page.locator("//a/div[text()='New']").click();
    await page.locator("//input[@placeholder='Last Name']").fill("Kavitha");
    //const lastname = await page.locator("//input[@placeholder='Last Name']").innerText();  - Can you please explain why it is not printing any text , whereas same method is working in create leads
    //console.log("LastName:" +lastname);
    await page.locator("//button[@title='Save']").click();
    const individual = await page.locator("(//span[@class='uiOutputText'])[1]").innerText();
    console.log("IndividualName:" +individual);
    await expect(individual).toContain('Kavitha'); //await is showing with 3 dots( why it has not effect in this statement?)
    // if(individual === lastname){
    //     console.log("Individual creation is success");
    // }
    // else{
    //     console.log("Individual creation is not success");
    // }
    // await page.waitForTimeout(5000);
})