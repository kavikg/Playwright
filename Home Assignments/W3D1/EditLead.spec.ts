import test from "@playwright/test"
test ('Edit Lead',async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill('Demosalesmanager');
    await page.locator("#password").fill('crmsfa');
    await page.locator(".decorativeSubmit").click();
    await page.locator("//a[contains(text(),'CRM/SFA')]").click();
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("//input[@id='createLeadForm_companyName']").fill("XYZ");
    await page.locator("//input[@id='createLeadForm_firstName']").fill("Kavitha");
    await page.locator("//input[@id='createLeadForm_lastName']").fill("K G");
    await page.locator("//input[@name='submitButton']").click();
    await page.waitForTimeout(5000);
    await page.locator("//a[text()='Edit']").click();
    await page.locator("//input[@id='updateLeadForm_companyName']").fill("XYZEdit");
    await page.locator("//input[@value='Update']").click();
    await page.waitForTimeout(3000);
})
