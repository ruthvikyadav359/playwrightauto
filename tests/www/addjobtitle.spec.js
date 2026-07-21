import { test, expect } from '@playwright/test';

test("Verify add job title", async ({page}) =>{

 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

 await page.locator("input[name='username']").fill('admin')

 await page.locator("//input[@type='password']").fill('admin123')

 await page.locator("button[type='submit']").click()

 await page.locator("//span[text()='Admin']").click()

 await page.locator("//span[normalize-space(text())='Job']").click()

 await page.getByRole('menuitem', { name: 'Job Titles' }).click()

 await page.getByRole('button', { name: 'Add' }).click()

 await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill("SDET 1")

 await page.getByPlaceholder('Type description here').fill("Automation script writiing")

 await page.getByRole('textbox', { name: 'Type description here' }).fill("Notes only")

 await page.getByText('Save', { exact: true }).click()

 await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")

})
