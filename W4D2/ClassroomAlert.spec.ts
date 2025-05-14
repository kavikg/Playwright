import test from "@playwright/test"
test('Prompt Alert', async ({ page }) => {
   
    page.on('dialog', alertType => { //instead of using alerttype arrow function , we can use general async arrow function like async({page}), ex: async(a)
        const typeofAlert = alertType.type();
        console.log(typeofAlert)
        const msg = alertType.message() // print message from dialog box
        console.log(msg)
        if (typeofAlert == 'prompt') {
            alertType.accept('Kavitha');
        } else {
            alertType.dismiss()
        }

    })
 await page.goto("https://www.leafground.com/alert.xhtml");
    //await page.locator("//button[@name='j_idt88:j_idt104']").click();
    await page.locator("//span[text()='Show']").nth(4).click();
})


test('Prompt', async ({ page }) => {
   
    page.on('dialog', async(a) => { //instead of using alerttype arrow function , we can use general async arrow function like async({page}), ex: async(a)
        const typeofAlert = a.type();
        console.log(typeofAlert)
        const msg = a.message() // print message from dialog box
        console.log(msg)
        if (typeofAlert == 'prompt') {
            a.accept('Kavitha');
        } else {
            a.dismiss();
        }

    })
 await page.goto("https://www.leafground.com/alert.xhtml");
    //await page.locator("//button[@name='j_idt88:j_idt104']").click();
    await page.locator("//span[text()='Show']").nth(4).click();
})




