const { test, expect } = require('@playwright/test');
const assert = require ('assert');
test("children elements",async({page})=>{
    // arrangement
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let childrens = await page.$$('.traversal-buttons > *')
    expect(childrens.length).toBe(5)
   
})

test("firstChild",async({page})=>{
    // arrangement
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let firstText = await page.locator('.traversal-drinks-list > li').first().innerText();
    expect(firstText).toBe("Coffee")
})

test("lastChild",async({page})=>{
    // arrangement
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let lastText = await page.locator('.traversal-drinks-list > li').last().innerText();
    expect(lastText).toBe("Sugar")

})

test("nth:child",async({page})=>{
    // arrangement
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let lastText = await page.locator('.traversal-drinks-list > li').nth(1).innerText()
    expect(lastText).toBe("Tea")

})

test.only("prevElement",async({page})=>{
    // arrangement
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let milkElement = await page.$('#milk')
    let txtFound = await milkElement.evaluate((el)=>{
        let text = el.previousElementSibling.textContent
        return text
    });
    expect(txtFound).toBe('Tea')

})

test.only("nextElement",async({page})=>{
    // arrangement
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let milkElement = await page.$('#milk')
    let txtFound = await milkElement.evaluate((el)=>{
        let text = el.nextElementSibling.textContent
        return text
    });
    expect(txtFound).toBe('Espresso')

})