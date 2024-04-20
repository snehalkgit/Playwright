const { test, expect } = require("@playwright/test");

test('verify the date picker functionally in playwright using js object',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Datepicker/index.html')
    const date = new Date()
    date.setDate(date.getDate()+100)
    let d = date.getDate()//current date
    console.log(d)
   // let mnt = date.getMonth()//current month index
    //console.log(mnt)
   // let mnt = date.toLocaleDateString('deafault',{month:'short'})//Cureent month in short string jul 
    //let mnt = date.toLocaleDateString('deafault',{month:'long'})//Cureent month in long string july 

    let mnt = date.getMonth()+1  //current month in number
    console.log(mnt) // 7 

   let m = `${0}${mnt}`
   let year = date.getFullYear()
   console.log(m)
    console.log(year)
})