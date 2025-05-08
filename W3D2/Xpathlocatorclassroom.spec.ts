import test from "playwright/test";
test('Xpath Locator Classroom activity', async ({page}) => {
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.locator("//input[@id='username']").fill("vidyar@testleaf.com");
    await page.locator("//input[contains(@class,'password')]").fill("Sales@123");
    await page.locator("//input[@name='Login']").click();
    await page.waitForTimeout(5000);
})