import { test, expect } from '@playwright/test';

import textbox from '../../testdata/textbox.json';

import { faker } from '@faker-js/faker';


test('valid textbox credentials', async ({ page }) => {

    
  await page.goto('https://demoqa.com/');
  await page.getByRole('link', { name: 'Elements' }).click();
  await page.getByRole('link', { name: 'Text Box' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill(faker.person.fullName());
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(faker.internet.email());
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill(faker.location.streetAddress());
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill(faker.location.streetAddress());
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page).toHaveURL('https://demoqa.com/text-box');
});