import { test, expect } from '@playwright/test';

test.describe("group1", () => {


    test.skip('testcase 1', async ({ page }) => {
        console.log("test 1")
    })

    test('testcase 2', async ({ page }) => {
        console.log("test 2")
    })

    test('testcase 3', async ({ page }) => {
        console.log("test 3")
    })

    test('testcase 4', async ({ page }) => {

    
        console.log("test 4")
    })

})

test.describe.skip("group2", () => {

    test('testcase 5', async ({ page }) => {
        console.log("test 5")
    })

    test.skip('testcase 6', async ({ page }) => {
        console.log("test 6")
    })

    test('testcase 7', async ({ page }) => {
        console.log("test 7")
    })

    test('testcase 8', async ({ page }) => {
        console.log("test 8 ")
    })

})

