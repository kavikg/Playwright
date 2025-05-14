import test from "@playwright/test"

test("Learn Alerts",async ({page}) => {
    page.goto("https://www.leafground.com/alert.xhtml")
//simple accept
await page.locator("//span[text()='Show']").click();
await page.waitForTimeout(3000);

//confirmation 
await page.locator("//span[text()='Show']").nth[1].click();
await page.waitForTimeout(2000);
})

test('Handling alert with Event Listeners with page.on',async({page})=>{


    page.on('dialog',alertType =>{
        const typeofAlert=alertType.type()
        console.log(typeofAlert)
        const msg=alertType.message() // print message from dialog box
        console.log(msg)
        if(typeofAlert=="confirm"){
        alertType.accept()
        }else{
            alertType.dismiss()
        }
    })
    await page.goto("https://www.leafground.com/alert.xhtml")
    //simple -> accpect
    await page.locator("//span[text()='Show']").first().click() //accept
    await page.locator("//span[text()='Show']").nth(1).click() //accept
    await page.waitForTimeout(4000)
})