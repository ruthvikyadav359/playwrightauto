import { test, expect } from '@playwright/test';

import data from '../../testdata/sauce.json';

const ExcelJS = require('exceljs');
const path = require('path');

test('book an item12345 ', async ({ page }) => {


  const workbook = new ExcelJS.Workbook();

   await workbook.xlsx.readFile(
      path.join(__dirname, '../../testdata/sauce.xlsx')
    );

    const worksheet = workbook.getWorksheet(1);

  const row = worksheet.getRow(2);

const FirstName = row.getCell(1).text;
const LastName = row.getCell(2).text;
const PostalCode = row.getCell(3).text;

console.log(FirstName);
console.log(LastName);
console.log(PostalCode);

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(data.UserName);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(data.PassWord);
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill(FirstName);
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill(LastName);
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill(PostalCode);
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
});