import { test, expect } from '@playwright/test';

import textbox from '../../testdata/textbox.json';

const ExcelJS = require('exceljs');
const path = require('path');

test('valid textbox credentials', async ({ page }) => {


    const workbook = new ExcelJS.Workbook();
    
      await workbook.xlsx.readFile(
        path.join(__dirname, '../../testdata/demoqatextbox.xlsx')
      );
    
      const worksheet = workbook.getWorksheet(1);
    
    // Read row 2 (first data row)
    const row = worksheet.getRow(2);

const Name = row.getCell(1).text;
const Email = row.getCell(2).text;
const CurrentAddress = row.getCell(3).text;
const PermanentAddress = row.getCell(4).text;

console.log(Name);
console.log(Email);
console.log(CurrentAddress);
console.log(PermanentAddress);
    
  await page.goto('https://demoqa.com/');
  await page.getByRole('link', { name: 'Elements' }).click();
  await page.getByRole('link', { name: 'Text Box' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill(Name);
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(Email);
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill(CurrentAddress);
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill(PermanentAddress);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page).toHaveURL('https://demoqa.com/text-box');
});