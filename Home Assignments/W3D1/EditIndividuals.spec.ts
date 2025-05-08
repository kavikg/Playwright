import test, { expect } from "@playwright/test";
test('Edit Individuals', async ({ page }) => {
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
    await page.locator("//input[@placeholder='Search this list...']").fill("Kavitha");
    await page.press("//input[@placeholder='Search this list...']", 'Enter');
    await page.click(`text='Kavitha'`);
    await page.waitForTimeout(2000);
    await page.locator("//div[@title='Edit']").click();
    await page.locator("(//a[@class='select'])[1]").click();
    await page.locator("(//div[@class='select-options'])[2]//li[4]/a").click();
    await page.locator("//input[@placeholder='First Name']").fill("Hello");
    await page.locator("//button[@title='Save']").click();
    const individual = await page.locator("(//span[@class='uiOutputText'])[1]").innerText();
    console.log("IndividualName:" + individual);
    await page.waitForTimeout(3000);
    await expect(individual).toContain('Hello');
})
