const { test, expect } = require('@playwright/test');
const assert = require ('assert');

test("Drop down",async({page})=>{
    // arrangement
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //actions
    await page.selectOption('#dropdowm-menu-1','Python')
    // assetion
    const actualValue = await page.$eval("#dropdowm-menu-1",(el)=>el.value);
    assert.strictEqual(actualValue,"python")
    await page.selectOption('#dropdowm-menu-2','Maven')
    const actualValue2 = await page.$eval("#dropdowm-menu-2",(el)=>el.value);
    assert.strictEqual(actualValue2,"maven")
    //<h1>Dropdown Menu(s), Checkboxe(s) &amp; Radio Button(s)</h1>
    let textContentVal= await page.$eval('h1',(el)=>el.textContent())
    assert.strictEqual(textContentVal,"Dropdown Menu(s), Checkboxe(s) &amp; Radio Button(s)")
})


test("Check box",async({page})=>{
    // arrangement
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //actions
    await page.check('input[value= "option-2"]')
    await page.uncheck('input[value= "option-3"]')
    const avail = await page.$eval('input[value= "option-2"]',(el)=> el.checked);
    const availB = await page.$eval('input[value= "option-3"]',(el)=> el.checked);
    assert.strictEqual(avail,true)
    assert.strictEqual(availB,false)
   
})


test("Radio button",async({page})=>{
    // arrangement
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //actions
    await page.check("input[value= 'green']")
    let availC = await page.$eval('input[value= "green"]',(el)=>el.checked)
    assert.strictEqual(availC,true)
    let availD = await page.$eval('input[value= "blue"]',(el)=>el.checked)
    assert.strictEqual(availD,false)
    
})