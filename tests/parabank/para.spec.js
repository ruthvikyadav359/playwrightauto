import { test, expect } from '@playwright/test';

test('Register into parabank', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=CBA8CADBC03CAEC159738CACC1A37C7B');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('[id="customer.firstName"]').click();
  await page.locator('[id="customer.firstName"]').fill('Ruthvikram');
  await page.locator('[id="customer.lastName"]').click();
  await page.locator('[id="customer.lastName"]').fill('shukla');
  await page.locator('[id="customer.address.street"]').click();
  await page.locator('[id="customer.address.street"]').fill('#3,johnson road,colombo');
  await page.locator('[id="customer.address.city"]').click();
  await page.locator('[id="customer.address.city"]').fill('mumbai');
  await page.locator('[id="customer.address.state"]').click();
  await page.locator('[id="customer.address.state"]').fill('indiasn');
  await page.locator('[id="customer.address.zipCode"]').click();
  await page.locator('[id="customer.address.zipCode"]').fill('57412');
  await page.locator('tr:nth-child(7) > td:nth-child(2)').click();
  await page.locator('[id="customer.phoneNumber"]').fill('985745231');
  await page.locator('[id="customer.ssn"]').click();
  await page.locator('[id="customer.ssn"]').fill('shshsbsh874566321');
  await page.locator('[id="customer.username"]').click();
  await page.locator('[id="customer.username"]').fill('guytarsuytg');
  await page.locator('[id="customer.password"]').click();
  await page.locator('[id="customer.password"]').fill('Tishu@359');
  await page.locator('#repeatedPassword').click();
  await page.locator('#repeatedPassword').fill('Tishu@359');
  await page.getByRole('button', { name: 'Register' }).click();
});


//
 test('register through username and password', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=448C5AE9E25FAC6D185A4A1273429C85');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('ruthvikyadav');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('Ruthvikyadav@359');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByText('Error! An internal error has')).toBeVisible();
});

test('open new a/c in bank ', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=86891DEBE41019BA0A923A5529A60B19');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('john');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('demo');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Open New Account' }).click();
  await page.locator('#type').selectOption('1');
  await page.locator('#fromAccountId').selectOption('14454');
  await page.getByRole('button', { name: 'Open New Account' }).click();
  await expect(page.getByRole('heading', { name: 'Account Opened!' })).toBeVisible();
});