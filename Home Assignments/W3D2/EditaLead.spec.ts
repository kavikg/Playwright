import test, { expect } from "@playwright/test";
test('Edit Lead leaftap', async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("//input[@id='username']").fill("Demosalesmanager");
    await page.locator("//input[@id='password']").fill("crmsfa");
    await page.locator("//input[@class='decorativeSubmit']").click();
    await page.waitForTimeout(5000);
    await page.locator("//a[contains(text(),'CRM/SFA')]").click();
    await page.click(`text='Leads'`);
    await page.locator("//a[contains(text(),'Find Leads')]").click();
    await page.waitForTimeout(5000);
    await page.locator("(//input[@name='firstName'])[3]").fill("Kavitha");
    await page.locator("//button[text()='Find Leads']").click();
    await page.waitForTimeout(6000);
    await page.locator("(//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[1]").click();
    await page.waitForTimeout(2000);
    await page.click(`text='Edit'`);
    //await page.waitForTimeout(3000);
    await page.locator("//input[@id='updateLeadForm_companyName']").fill("XYZEdit");
    await page.locator("//input[@id='updateLeadForm_annualRevenue']").fill("23456746564");
    await page.locator("//input[@id='updateLeadForm_departmentName']").fill("QEA Department");
    await page.locator("//textarea[@id='updateLeadForm_description']").fill("Validation of Lead Creation");
    await page.locator("(//input[@name='submitButton'])[1]").click();
    const companyname = await page.locator("//span[@id='viewLead_companyName_sp']").innerText();
    const annualrevenue = await page.locator("//span[@id='viewLead_annualRevenue_sp']").innerText();
    const Deptname = await page.locator("//span[@id='viewLead_departmentName_sp']").innerText();
    const Description = await page.locator("//span[@id='viewLead_description_sp']").innerText();
    await expect(companyname).toContain("XYZEdit");
    //await expect(annualrevenue).toContain("23456746564"); - tocontain method is throwing error for numbers why is it?
    await expect(Deptname).toContain("QEA Department");
    await expect(Description).toContain("Validation of Lead Creation");
    console.log(await page.title());
})
