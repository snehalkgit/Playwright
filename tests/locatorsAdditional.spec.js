const { expect } = require("@playwright/test")

const assert = require ('assert')

test('children elements',async ({page})=>{
//single elememt
await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
let ele = await page.$('h1')
console.log(await ele.innertext())
})

//locators

let ele2 = await page.locator('h1').innertext()
console.log(ele2)

//fill operation

await page.locator('input [name = "firstname"]').fill("snehal")

//multiple elements
let buttons = await page.$$('button')
for(let button of buttons){
    let text= await button.textContent()
    console.log(text)
}

let buttonB= await.page.locator('button')
for(let i = 0;i < buttonB.length;i++){
    console.log(buttonB.nth(i).innertext)
}