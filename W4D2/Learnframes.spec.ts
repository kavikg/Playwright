import test from "@playwright/test"
test('Handle Frame',async ({page}) => {
    await page.goto("https://www.leafground.com/frame.xhtml");
    //await page.locator("#Click").click(); //it will not click this element since frame is not handled
const framepage = page.frames();
console.log(framepage.length)//Mainpage count=1 ,total frames=4,so total count=5
const firstframe= framepage[1];
console.log(await firstframe.locator("#Click").innerText())
await firstframe.locator("#Click").click();
console.log(await firstframe.locator("#Click").innerText())
//Nested Frames -> 0-4
const fourthframe= framepage[4]
console.log(await fourthframe.locator("#Click").innerText())
await fourthframe.locator("#Click").click();
console.log(await fourthframe.locator("#Click").innerText())




})




