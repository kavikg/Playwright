import test, { expect } from "@playwright/test"

test('Learn Hard Asserions',async ({page}) => {

    await page.goto("https://leafground.com/input.xhtml");
//Hard Assertion
    //it is enabled but expectation is to be disabled, so assertion will be failed. Default time out is 5000ms, but if needed to extend the wait we can change it to 10000ms
    await  expect(page.getByPlaceholder("Babu Manickam")).toBeDisabled({timeout:10000});
        //it is disabled and expectation is to be disabled, so assertion will be passed.
    await  expect(page.getByPlaceholder("Disabled")).toBeDisabled();
    
    
})



test('Learn Soft Assertions',async ({page}) => {
    await page.goto("https://leafground.com/input.xhtml");
    //soft Assertion --> expect.soft
    //Even if the condition fails execution continues but the testcase is failed
await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeDisabled({timeout:10000});

await  expect(page.getByPlaceholder("Disabled")).toBeDisabled();
    
})


test.only('Non Retry Assert',async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    const title = await page.title();
    console.log(title);
    //it will fail as the title returning is "Leaftaps - TestLeaf Automation Platform". it will not retry if it fails - only 1 maximum try is done overall
    const actual = "Leaftaps TestLeaf Automation Platform"
    expect (title).toEqual(actual)

    //await page.locator("#username").fill("Demosalesmanager");
    await page.fill("#username","Demosalesmanager");
})