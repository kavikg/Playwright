import test, { expect } from "@playwright/test"
test('HandleFrames', async ({ page }) => {
     page.on('dialog', async(a) => { 
        const typeofAlert = a.type();
        console.log(typeofAlert)
        const msg = a.message()
        console.log(msg)
        if (typeofAlert == 'confirm') {
            await a.accept();
        } else {
            await a.dismiss();
        }

    })
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    const framepage = page.frames();
    const frame = framepage[1];
    await frame.click(`text='Try it'`);
    const expectedtext = "You pressed OK!";
    const text = await frame.locator("//p[@id='demo']").innerText();
    console.log(text);
    expect (text).toEqual(expectedtext);
})