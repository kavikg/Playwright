import test, { chromium, webkit } from "@playwright/test";

test("Launch Browser", async () => {
        //Launch the browser
            const browser = await chromium.launch({ channel:'chrome'});
            //Creates a new context
            const Context = await browser.newContext();
            //Creates a new page
            const page = await Context.newPage();
            //Navigates to the  webpage
            await page.goto("http://leaftaps.com/opentaps/control/main");

            await page.waitForTimeout(5000)
            const Context1 = await browser.newContext();
            const page1 = await Context1.newPage();
            await page1.goto("https://www.google.com");

    })