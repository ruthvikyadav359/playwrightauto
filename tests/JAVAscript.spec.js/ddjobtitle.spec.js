


import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';


const jobtitles = {
    title1: "Software Engineer",
    title2: "Data Scientist",
    title3: "Product Manager",
    title4: "UX Designer"
}

for (let title in jobtitles) {


    test(`Verify add job title - ${title}`, async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.locator("input[name='username']").fill('admin')

        await page.locator("//input[@type='password']").fill('admin123')

        await page.locator("button[type='submit']").click()

        await page.locator("//span[text()='Admin']").click()

        await page.locator("//span[normalize-space(text())='Job']").click()

        await page.getByRole('menuitem', { name: 'Job Titles' }).click()

        await page.getByRole('button', { name: 'Add' }).click()

        await page.getByRole('textbox').nth(1).click();
        await page.getByRole('textbox').nth(1).fill(jobtitles[title]);
        await page.getByPlaceholder('Type description here').fill("Automation script writiing")

        await page.getByRole('textbox', { name: 'Type description here' }).fill("Notes only")

        await page.getByText('Save', { exact: true }).click()

        await expect(page).toHaveURL(/saveJobTitle/)

    });


}
