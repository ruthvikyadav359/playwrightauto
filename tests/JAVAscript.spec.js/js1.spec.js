
// let studentname = "John Doe"
// let studentage = 20.12
// let x
// console.log(studentage)
// console.log(studentname)

// console.log(typeof(studentname))
// console.log(typeof(studentage))
// console.log(typeof(x))


// let credit = ["simon","saman","john","tanzir"]
// console.log(credit[2])

// let credenta = {
//         USrename: "simon1",
//         password: "simon123",
//     }

// console.log(credenta.USrename)
// console.log(credenta.password)

// let studentname = ["savi","navi","tavi","yash"]
// studentname[1] = "sammi"

// console.log(studentname)

// let car = {
//     model : 2026,
//     brand1 : "toyota",
//     variant : "corolla"
// }

// car["model"] = 2025

// console.log(car)

// console.log(28/2)
// console.log(28%2)
// console.log(28*2)
// console.log(28+2)

// let x = 10
// console.log(++x)
// console.log(x--)

// console.log(2>8)
// console.log(2<8)
// console.log( 2 === 2 )
// console.log( 2 === "2" )
// console.log(x+=5)
// console.log(x-=6)
// console.log(x*=2)

// console.log(2==2 && 8<9)
// let earning = 10000
// console.log(earning>5000 || earning<=10000)

// console.log(!(true && true))


// let value1 = "gandu"
// let value2 = "shade"

// let result = ((2==2) || (8+5>=13)) ? value1 : value2

// console.log(result)
// import { test, expect } from '@playwright/test';

// test('valid textb2ox credentials', async ({ page }) => {
//     let condition_1 = false || false
//     let condition_2 = true && false
//     let condition_3 = false || true

//     if (condition_1) {
//         console.log("gandu open amazon website")
//         await page.goto("https://www.amazon.com/")
//     }
//     else if (condition_2) {
//         console.log("sule open flipkart website")
//         await page.goto("https://www.flipkart.com/")

//     }else if (condition_3) {
//         console.log("ninakkan open snapdeal website")
//         await page.goto("https://www.snapdeal.com/")

//     }
//     else{
//         console.log("gandu u r waste")
//     }
// });


// import { test, expect } from '@playwright/test';

// import textbox from '../../testdata/textbox.json';

// import { faker } from '@faker-js/faker';

// test('valid textb2ox credentials', async ({ page }) => {
//     let condition_1 = true || false
//     let condition_2 = true && true
//     let condition_3 = false || true

//     if (condition_1 == false) {
//         console.log("gandu login orangrhrm website")
//         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//         await page.getByRole('textbox', { name: 'Username' }).click();
//         await page.getByRole('textbox', { name: 'Username' }).fill('admin');
//         await page.getByRole('textbox', { name: 'Password' }).click();
//         await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//         await page.getByRole('button', { name: 'Login' }).click();
//     }
//     else if (condition_2 == true) {
//         console.log("sule login demoqa website")
//         await page.goto('https://demoqa.com/');
//         await page.getByRole('link', { name: 'Elements' }).click();
//         await page.getByRole('link', { name: 'Text Box' }).click();
//         await page.getByRole('textbox', { name: 'Full Name' }).click();
//         await page.getByRole('textbox', { name: 'Full Name' }).fill(faker.person.fullName());
//         await page.getByRole('textbox', { name: 'name@example.com' }).click();
//         await page.getByRole('textbox', { name: 'name@example.com' }).fill(faker.internet.email());
//         await page.getByRole('textbox', { name: 'Current Address' }).click();
//         await page.getByRole('textbox', { name: 'Current Address' }).fill(faker.location.streetAddress());
//         await page.locator('#permanentAddress').click();
//         await page.locator('#permanentAddress').fill(faker.location.streetAddress());
//         await page.getByRole('button', { name: 'Submit' }).click();

//     }else if (condition_3 == true) {
//         console.log("ninakkan open saucedemo website")
//          await page.goto('https://www.saucedemo.com/');
//         await page.locator('[data-test="username"]').click();
//         await page.locator('[data-test="username"]').fill('error_user');
//         await page.locator('[data-test="password"]').click();
//         await page.locator('[data-test="password"]').fill('secret_sauce');
//         await page.locator('[data-test="login-button"]').click();
//         await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
//         await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

//     }
//     else{
//         console.log("gandu u r waste")
//     }
// });


// Example switch with a selected option (change `option` as needed)
// const option = 5;
// switch (option) {
//     case 1: {
//         let x = 25;
//         let y = 50;
//         let z = x + y;
//         console.log(z);
//         break;
//     }
//     case 2: {
//         let a = 25;
//         let b = 50;
//         let c = a * b;
//         console.log(c);
//         break;
//     }
//     case 3: {
//         let p = 25;
//         let q = 50;
//         let r = p - q;
//         console.log(r);
//         break;
//     }
//     default: {
//         console.log("gandu u r waste");
//     }
// }


