const { test, expect } = require("@playwright/test");

test('Redbus dynamic dropdown',async({page})=>{
    const year = '2025'
    const month = "Aug"
    const day = "14"
    let monthyear=`${month}${year}`;
    await page.goto("https://www.redbus.in")
    await page.locator('#onwardCal').click()
    while(true){
        let text = await page
        .locator('.DayNavigator__CalendarHeader-qj8jdz-1 > div[style="flex-grow: 2; font-size: 0.875rem;"]')
        .textContent();
        let monthyear = text.slice(0,8)
        if(monthyear === monthyear){
            break;
        }
        await page
        .locator('div[style="flex-grow: 1; cursor: pointer;"]')
        .last()
        .click()
        console.log(monthyear)


    }
    await page.waitForTimeout(3000)

})