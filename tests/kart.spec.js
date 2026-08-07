import { test, expect } from '@playwright/test';


test('Verify login wi1th valid112 credentials12324', async ({ page }) => {

   await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')
   

   const veg1 = 'Cauliflower - 1 Kg'
   const veg2  = 'Beetroot - 1 Kg'


   await page.locator(`//h4[text() = '${veg1}']/../div[3]/button`).click()


   await page.locator(`//h4[text() = '${veg2}']/../div[3]/button`).click()

   const veg1price = await page.locator(`//h4[text() = '${veg1}']/../p`).textContent()
   console.log(veg1price)

   const veg2price = await page.locator(`//h4[text() = '${veg2}']/../p`).textContent()
   console.log(veg2price)

   const totalprice = await page.locator('//table/tbody/tr[2]//td[3]/strong').textContent()
   console.log(totalprice)

   await expect(Number(veg1price) + Number(veg2price)).toBe(Number(totalprice))

});