const { test, expect } = require('@playwright/test')
const { NODATA } = require('dns')
const { addAbortListener } = require('events')

test('Drag and Drop using unbuild command', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const rome = await page.locator('#box6')
    const Italy = await page.locator('#box106')
    await rome.dragTo(Italy)
    expect(await page.locator('#box6'))
        .toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)
})

// test('Drag and Drop using mouse actions', async({ page }) => {
//     await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
//     await page.locator('#box6').hover()
//     await page.mouse.down()
//     await page.locator('#box106').hover()
//     await page.mouse.up()
//     expect(await page.locator('#box6'))
//         .toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
//     await page.waitForTimeout(2000)
// })

test('Drag and Drop using mouse action for oslo to Norway', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const oslo = await page.locator('#box1')
    const Norway = await page.locator('#box101')
    await oslo.dragTo(Norway)
    expect(await page.locator('#box1'))
        .toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)
})


test('Drag and Drop using mouse action for madrid to spain', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const madrid = await page.locator('#box7')
    const spain = await page.locator('#box107')
    await madrid.dragTo(spain)
    expect(await page.locator('#box7'))
        .toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)

})

test('Drag and Drop using mouse action for Copenhagen to Denmark', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const Copenhagen = await page.locator('#box4')
    const Denmark = await page.locator('#box104')
    await Copenhagen.dragTo(Denmark)
    expect(await page.locator('#box4'))
        .toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)
})

test('Drag and Drop using mouse action for Stockholm to Sweden', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const Stockholm = await page.locator('#box2')
    const Sweden = await page.locator('#box102')
    await Stockholm.dragTo(Sweden)
    expect(await page.locator('#box2'))
        .toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)
})

test.only('Drag and Drop using mouse action for Washington to United States', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const Washington = await page.locator('#box3')
    const UnitedStates = await page.locator('#box103')
    await Washington.dragTo(UnitedStates)
    expect(await page.locator('#box3'))
        .toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)

})

test.only('Drag and Drop using mouse action for Seoul to South Korea', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const  Seoul = await page.locator('#box5')
    const SouthKorea = await page.locator('#box105')
    await Seoul.dragTo(SouthKorea)
    expect(await page.locator('#box5'))
        .toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)
})     