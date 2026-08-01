import { test, expect } from '@playwright/test';


test('Verify login wi1th valid12 credentials12324', async ({ page }) => {
  for (let i=11; i>10;i--) {

   console.log(i);
   console.log(`ganduu r lawde`);
   console.log(`ganduu r shade`);
   console.log(`ganduu r gandu`);
  }
  

 });  


 for (let i=0; i<=10;i++) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
 }