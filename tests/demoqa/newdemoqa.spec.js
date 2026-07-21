import { test, expect } from '@playwright/test';

import data from '../testdata/dmoqa.json';



test('validify textbox', async ({ page }) => {

    await page.goto('https://demoqa.com/');

    await expect(page.locator('//h1[@class= "text-center"]')).toHaveText('Text Box');
    await expect(page.locator('//h1[@class= "text-center"]')).toBeVisible();

    await page.locator('#userName').fill(data.fullname);
    await page.locator('input[placeholder="name@example.com"]').fill(data.email);
    await page.locator('#Current Address').fill(data.currentaddress);
    await page.locator('#permanentAddress').fill(data.permanentaddress);

    await page.locator('#submit').click();
    await expect(page.locator('##name')).toContainText(data.fullname);    
}); 