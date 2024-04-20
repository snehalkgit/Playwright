const {test,expect} = require ('@playwright/test')

test('Verify contactus functionality',async({page}) => {
//arrange 
 //action
  // assert

page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
await page.locator('input[name="first_name"]').fill("snehal")
await page.locator('input[name="last_name"]').fill("kamble")
await page.locator('[placeholder="Email Address"]').fill("snehalkamble1564@gmail.com")
await page.locator('[name = "message]"]').fill("im learning automation")
page.locator('input[type="submit"]').click()
    await page.waitForTimeout(4000)
    await expect(page.locator('body')).toBeVisible()
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
})


test('verify contactus form functionallity with invalid email', async ({page})=>{

   //tagname

   //AAA

   await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
   await page.goto('input[name = "firs_name"]').fill("snehal")
   await page.goto('input[name = "last_name"]').fill("kamble")
   await page.goto('input[name = "email"]').fill("snehalkamblea")
   await page.goto('textarea[name = "message"]').fill("im learning playwright")
   await page.locator('input[type = "submit"]').click()
   await page .waitForTimeout(3000)
   await expect (page.locator('body')).toBeVisible()
   await expect(page.locator('body')).toHaveText('error:invalid eamil address')
  
  })

  



