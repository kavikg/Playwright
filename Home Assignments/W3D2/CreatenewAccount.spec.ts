import test, { expect } from "@playwright/test";
test ('Create Account',async ({page}) => {
    await page.goto("https://login.salesforce.com/");
    await page.getByLabel('username').fill('majay3574@gmail.com');
    await page.getByLabel('password').fill('Ajaymichael@321'); 
    await page.locator("//input[@id='Login']").click();
    const url = page.url();
    console.log('Current page URL:', url);
    await expect(page).toHaveURL("https://qeagle8-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");
    await expect(page).toHaveTitle("Home | Salesforce");
    await page.locator(".slds-icon-waffle").click();
    await page.getByText('View All').click();
    await page.getByPlaceholder('Search apps or items...').fill("Service");
    await page.locator("(//mark[text()='Service'])[1]").click();
    await page.waitForTimeout(3000);
    //await page.locator(".slds-truncate").click();
    await page.click(`text='Accounts'`)
    await page.getByRole('button', { name: 'New' }).click();
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='Name']").fill("TestLeaf");
    await page.locator("//button[@name='SaveEdit']").click();
    const account = await page.locator("//lightning-formatted-text[@slot='primaryField']").innerText();
    await expect(account).toContain("TestLeaf");
    await page.waitForTimeout(3000);
})
