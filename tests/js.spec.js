import { test, expect } from '@playwright/test';


test('checkbox check', async ({ page }) => {


    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');


    await page.locator('//input[@type="checkbox"]').check();
    await page.waitForTimeout(3000);


    const statusofthecheckbox = await page.locator('//input[@type="checkbox"]').isChecked();

    console.log(statusofthecheckbox);

});

test('conditional testing', async ({ page , browserName }) => {
  await page.goto('https://the-internet.herokuapp.com/disappearing_elements');


  const galarystatus = await page.locator('//a[@href="/gallery/"]').isVisible();

  console.log(galarystatus);

  if(galarystatus){
    await page.locator('//a[@href="/gallery/"]').click();
  }
  else{
    console.log("Gallery link is not visible");
    await page.locator('//a[@href="/portfolio/"]').click();
  }

  if(browserName === "chromium"){

    console.log("This is Chromium browser");
  }

});


test('conditional testing12', async ({ page , browserName }) => {

  if(browserName === "chromium"){

    await page.goto("https://www.amazon.com/")
  }
  else{
    await page.goto("https://www.flipkart.com/")
  }

});


test('Verify login with valid credentials1', async ({ page }) => {

  if(process.env.ENVIRONMENT === "QA"){
    console.log("This is QA environment");
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  }
  else{
    console.log("This is not QA environment");
  }

});

test('Verify login with valid credentials12', async ({ page }) => {

     if(process.env.ENVIRONMENT === "QA"){
      console.log("This is QA environment");
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     }
     else if(process.env.ENVIRONMENT === "DEV"){
      console.log("This is DEV environment");
      await page.goto('https://www.amazon.com/');
      }
      else{
        console.log("This is not QA or DEV environment");
      }


});

test('Verify login with valid credentials12324', async ({ page }) => {

 switch (process.env.ENVIRONMENT) {
   case "QA":
    console.log("This is QA environment");
    break;
   case "DEV":
    console.log("This is DEV environment");
    break;
   default:
    console.log("This is not QA or DEV environment");
  }

});

test('Verify login with valid12 credentials12324', async ({ page }) => {
 for (let i=0; i<=10;i++) {

  console.log(i);
  console.log(`ganduu r lawde`);
  console.log(`ganduu r shade`);
  console.log(`ganduu r gandu`);
 }


});  

test('V1erify login with valid12 credentials12324', async ({ page }) => {



  let x=1
  while (x<=10){
    console.log(x);
    console.log(`ganduu r lawde`);
    console.log(`ganduu r shade`);
    console.log(`ganduu r gandu`);
    x++
  }
});

test('V1erify login wit5h valid12 credentials12324', async ({ page }) => {


  let i=0

  do{
    console.log(i);
    console.log(`ganduu r lawde`);
    console.log(`ganduu r shade`);
    console.log(`ganduu r gandu`);
    i++
  }while(i<=10)
});




import logindata from "../testdata/login.json"
import addjobtitle from "../testdata/addjobtitle.json"

import { faker } from '@faker-js/faker';
for (let i=0; i<=10;i++) {
  test(`Verify job title with valid credentials21_${i}`, async ({ page }) => {
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

   console.log("Launched Application")
   await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);

   console.log("username entered")
   await page.getByRole('textbox', { name: 'Password' }).click();
   await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);

   console.log("password is done")
   await page.getByRole('button', { name: 'Login' }).click();
   await page.getByRole('link', { name: 'Admin' }).click();
   await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
   await page.getByRole('menuitem', { name: 'Job Titles' }).click();
   await page.getByRole('button', { name: ' Add' }).click();
   await page.getByRole('textbox').nth(1).click();
   await page.getByRole('textbox').nth(1).fill(faker.person.jobTitle());
  

   await page.waitForTimeout(5000)
   await page.getByRole('textbox', { name: 'Type description here' }).click();
   await page.getByRole('textbox', { name: 'Type description here' }).fill(addjobtitle.jobdescription);
   await page.getByRole('textbox', { name: 'Add note' }).click();
   await page.getByRole('textbox', { name: 'Add note' }).fill(addjobtitle.notes);
   await page.getByRole('button', { name: 'Save' }).click();
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
   await expect(page.locator('.orangehrm-horizontal-padding')).toBeVisible();
  });


}

