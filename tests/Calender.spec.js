const { test, expect } = require('@playwright/test')


test('verify datepicker  using playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').fill('28-02-2024')
    await page.waitForTimeout(3000)
})


test.only('Handling Datepicker using playwright', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html')
    const year = '2024'
    const month = "August"
    const day = "8"
    await page.locator('#datepicker').click()
    console.log(`${month} ${year}`)
    while (true) {
        let monthyear = await page.locator(".datepicker-switch").first().textContent()
        if (monthyear === `${month} ${year}`) {
            break
        }
        //await page.locator('[class="next"]').first().click()
        await page.locator(".next").first().click()
        console.log(monthyear)
    }
    await page.waitForTimeout(4000)
    //await page.locator('[class="today day"]').click()
    await page.waitForTimeout(3000)
    const  daycount = await page.locator('[class="day"]').count()
    console.log(daycount)
    await page.waitForTimeout(3000)
    for(let i =0;i<daycount;i++){
        let text = await page.locator('[class="day"]').nth(i).textContent()
        console.log(text)
        if(text == day){
            await page.locator('[class="day"]').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(3000)

})


