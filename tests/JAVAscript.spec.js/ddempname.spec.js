import { test, expect } from '@playwright/test';

const empnames = {
    set1: { firstname: "Ram", middlename: "rahim", lastname: "joseph" },
    set2: { firstname: "savi", middlename: "navi", lastname: "tavi" },
    set3: { firstname: "saman", middlename: "sami", lastname: "sammi" },
}


for (const data in empnames) {


    test(`verify emp name with valid credentials - ${data}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('admin');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('link', { name: 'PIM' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).fill(empnames[data].firstname);
        await page.getByRole('textbox', { name: 'Middle Name' }).click();
        await page.getByRole('textbox', { name: 'Middle Name' }).fill(empnames[data].middlename);
        await page.getByRole('textbox', { name: 'Last Name' }).click();
        await page.getByRole('textbox', { name: 'Last Name' }).fill(empnames[data].lastname);
        await page.getByRole('button', { name: 'Save' }).click();

        await expect(page).toHaveURL(/viewPersonalDetails/);

        await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

    });



}
