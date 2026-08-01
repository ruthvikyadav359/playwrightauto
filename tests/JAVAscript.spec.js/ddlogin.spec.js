
import { test, expect } from '@playwright/test';

 const creds = {

    set1: { username: "admin", password: "ajhnfcjd" },
    set2: { username: "hjbdhj", password: "admin123" },
    set3: { username: "ndhdjdj", password: "ht" },
 }

 for (const data in creds) {


    test(`Verify login - ${data}`, async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill(creds[data].username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(creds[data].password);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Invalid credentials')).toBeVisible();


    });

 }
