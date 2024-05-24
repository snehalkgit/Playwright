const { test, expect } = require("@playwright/test");
const data = require('../tests/TestData/contactusData.json')
const {Customtest}=require("./TestData/Data");
// test.only('verify contact us form  using fixture data', async ({ page }) => {
//     await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
//     await page.locator('[name="first_name"]').fill(data.firstname)
//     await page.locator('[name="last_name"]').fill(data.lastname)
//     await page.locator('[name="email"]').fill(data.email)
//     await page.locator('[name="message"]').fill(data.msg)
//     await page.locator('[value = "SUBMIT"]').click()
//     await expect(page.locator('h1')).toHaveText("Thank You for your Message!")

// })

data.forEach(element => {
    test(`verify the contactus form using  multiple dataset ${element.firstname}`, async ({ page }) => {
        await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
        await page.locator('[name="first_name"]').fill(element.firstname)
        await page.locator('[name="last_name"]').fill(element.lastname)
        await page.locator('[name="email"]').fill(element.email)
        await page.locator('[name="message"]').fill(element.msg)
        await page.locator('[value = "SUBMIT"]').click()
        await expect(page.locator('h1')).toHaveText("Thank You for your Message!")
    })


});
Customtest('verify contactus page using js file data', async({page,testdataforcontactus}) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('[name="first_name"]').fill(testdataforcontactus.firstName)
    await page.locator('[name="last_name"]').fill(testdataforcontactus.lastName)
    await page.locator('[name="email"]').fill(testdataforcontactus.email)
    await page.locator('[name="message"]').fill(testdataforcontactus.msg)
    await page.locator('[value = "SUBMIT"]').click()
    await expect(page.locator('h1')).toHaveText("Thank You for your Message!")
})



