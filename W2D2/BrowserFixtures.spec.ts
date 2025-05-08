import test from "playwright/test"
test('common code - LaunchBrowser',async ({page}) => {
     await page.goto("https://www.google.com")
     //Print the title of the page
     console.log(await page.title())
    
})