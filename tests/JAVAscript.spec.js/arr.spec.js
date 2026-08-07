// let arr3 = ["RAju",33,"chennai",null,undefined, {city:"Bangalore", pincode : 560087}]

// console.log(arr3)

// let x=arr3.length
// console.log(x)
// let arr4 = [5,8,7,4,1,2,3,6,5,8,9,7,444,22,55,8,5,2,5,5,2,25]
// console.log(arr4[arr4.length-1])


// const arr44 = ["hgythfhdyusjhdg"]

// console.log(arr44[0])

// arr4[0] = 255

// console.log(arr4[0])

// const creds = {
//     Useername: "Raju",
//     Password: "Raju@123"
// }

// creds['Password'] = "Raju@1234"

// console.log(creds)

// let arr6 = ["ram","raju"]
// arr6.push("ramesh")
// arr6.push("suresh")
// arr6.push("basha")


// console.log(arr6)

// arr6.pop()
// console.log(arr6)


// let arr7 = ["ram","rarju","ramecsh","suaresh","basha"]
// arr7.unshift("soma","kama")
// console.log(arr7)

// arr7.shift()
// console.log(arr7)

// let arr8 = [
//   'soma',    'kama', 
//   'ram',     'rarju',
//   'ramecsh', 'suaresh',
//   'basha'
// ]
// // let arr9 = arr8.sort()
// // console.log(arr9)

// // let arr9 = arr8.reverse()
// // console.log(arr9)

// console.log(arr8.includes("suareesh"))

// import { test, expect } from '@playwright/test';

// test('tests menuitems', async ({ page }) => {


//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await expect(page.locator('div').filter({ hasText: /^Dashboard$/ })).toBeVisible();
  

//   const menuitems = await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').allTextContents();
//   console.log(menuitems)
//   await expect(menuitems.includes("Admin")).toBeTruthy();
// });

// let str = "this is my fucking worlsd".split("f")
// console.log(str)

// let arr = [
//   's', ' ', 'm', 'y', ' ', 'f',
//   'u', 'c', 'k', 'i', 'n', 'g',
//   ' ', 'w', 'o', 'r', 'l', 's',
//   'd'
// ].join(" 8 ")

// console.log(arr)

// let strr = "rajar"
// let revstr = strr.split("").reverse().join("")
// console.log(revstr)
// if(strr === revstr){
//   console.log("palindrome")
// }
// else{
//     console.log("not palindrome")
// }

// import { test, expect } from '@playwright/test';

// test('verify login', async ({ page }) => {


//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     const usernametext = await page.locator('//p[@class="oxd-text oxd-text--p"][1]').textContent()

//     console.log(usernametext)  //"Username" :"Admin"

//     let username = usernametext.split(" ")[2]

//     await page.locator('//input[@name="username"]').fill(username);

//     const passwordtext = await page.locator('//p[@class="oxd-text oxd-text--p"][2]').textContent()

//     console.log(passwordtext)  //"password" :"admin123"

//     let password = passwordtext.split(" ")[2]

//     await page.locator('//input[@name="password"]').fill(password);

//     await page.close()



// });


// let arr8 = [
//   'soma',    'kama', 
//   'ram',     'rarju',
//   'ramecsh', 'suaresh',
//   'basha'
// ]

// let x = arr8.indexOf("ramecsh")
// console.log(x)

// arr8[x] = "RAjju"

// console.log(arr8)

// let arr8 = [
//   'soma',    'kama', 
//   'ram',     'rarju',
//   'ramecsh', 'suaresh',
//   'basha'
// ]

// arr8.splice(0,0,"sumi","kummi")

// console.log(arr8)

// let arr8 = [
//   'soma',    'kama', 
//   'ram',     'rarju',
//   'ramecsh', 'suaresh',
//   'basha'
// ]

// let extracted = arr8.slice(0,5)
// console.log(extracted)

// let arr3 = ["hai","hello","bye","goodbye"]
// let arr2 = arr3.map(element => element + "DBSQA")
// console.log(arr2)

// let arr4 = [1,2,3,4,5,6,7,8,9]
// let arr5 = arr4.map(element => element%2)
// console.log(arr5)

// let arr5 = ["dilipraju","naveenraja","kamaraju","shellraju","gandu"]
// let arr6 = arr5.filter(element => element.includes("raju"))
// console.log(arr6)

// let arr7 = [5,7,88,44,25,8547,145,4745,4,5,445,74,5,574458,54788]
// let arr8 = arr7.filter(element => element%2 == 0)
// console.log(arr8)



import { test, expect } from '@playwright/test';

test('verifyy login', async ({ page }) => {


   await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

   const vegs = await page.locator('//h4[@class="product-name"]').allTextContents()
   console.log(vegs.filter(element => element.includes("1/4 kg")))
});