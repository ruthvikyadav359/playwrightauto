import { test, expect } from '@playwright/test';
import logindata from "../testdata/login.json";
import addjobtitle from "../testdata/addjobtitle.json"

import { faker } from '@faker-js/faker';

test('Verify job title with valid credentials2', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  console.log("Launched Application")
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);

  console.log("username entered")
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);

  console.log("password is done")
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill(faker.person.jobTitle());
  

  await page.waitForTimeout(5000)
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill(addjobtitle.jobdescription);
  await page.getByRole('textbox', { name: 'Add note' }).click();
  await page.getByRole('textbox', { name: 'Add note' }).fill(addjobtitle.notes);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
  await expect(page.locator('.orangehrm-horizontal-padding')).toBeVisible();
});