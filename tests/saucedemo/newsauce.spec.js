import { test, expect } from '@playwright/test';

import data from '../../testdata/sauce.json';

test('book an item12 ', async ({ page }) => {
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
  await page.locator('[data-test="firstName"]').fill('raghu');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('rami');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('8546245');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
});