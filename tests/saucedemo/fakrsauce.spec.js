import { test, expect } from '@playwright/test';

import data from '../../testdata/sauce.json';

import { faker } from '@faker-js/faker';

test('book an item123 ', async ({ page }) => {
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
  await page.locator('[data-test="firstName"]').fill(faker.person.firstName());
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill(faker.person.lastName());
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill(faker.location.zipCode());
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
});