import { test, expect } from '@playwright/test';

test('jobtitle', async ({ page }) => {


  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('fdbtrrbd');
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox').nth(1).fill('fdbtrrbdf');
  await page.getByRole('textbox', { name: 'Type description here' }).fill('dfgdfg');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
  await expect(page.getByText('Job Titles Add')).toBeVisible();
  
});