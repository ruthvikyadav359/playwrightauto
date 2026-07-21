import { test, expect } from '@playwright/test';

import textbox from '../../testdata/textbox.json';


test('valid textbox credentials', async ({ page }) => {


    
  await page.goto('https://demoqa.com/');
  await page.getByRole('link', { name: 'Elements' }).click();
  await page.getByRole('link', { name: 'Text Box' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill(process.env.APP_NAME);
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(process.env.APP_EMAIL);
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill(process.env.APP_CURRENTADDRESS);
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill(process.env.APP_PERMANENTADDRESS);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page).toHaveURL('https://demoqa.com/text-box');
});

