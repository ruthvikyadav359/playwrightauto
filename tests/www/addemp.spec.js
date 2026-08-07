import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});


test('verify employee name has min character or not', async ({ page }) => {
 
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('dhythujikjdhyhdnfjfifkfnfhdndjddm');
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('hygujhuydhgfythvujikjdddhdjfkigfkfj');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('ndhdjdnfjikjudhgfythvujhyfghdyh');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Should not exceed 30').first()).toBeVisible();
  await expect(page.getByText('Should not exceed 30').nth(1)).toBeVisible();
  await expect(page.getByText('Should not exceed 30').nth(2)).toBeVisible();
});


test('verify emp name with valid credentials11', async ({ page }) => {
  
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
 
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Ram');
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('rahim');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('joseph');
  await page.getByRole('button', { name: 'Save' }).click();
  //await page.goto('https://https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber');
  //await expect(page.getByText('Personal Details')).toBeVisible();
  await expect(page).toHaveURL(/viewPersonalDetails/);
  //await expect(page.getByText('Personal Details')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

});
