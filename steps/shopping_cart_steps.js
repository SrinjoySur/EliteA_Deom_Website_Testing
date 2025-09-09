const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the product page', async function () {
  await page.goto('https://automationexercise.com/products');
});

When('the user adds the product to the cart', async function () {
  await page.click('button[name="Add to cart"]');
});

Then('the product should be added to the cart', async function () {
  await expect(page.locator('text=Product added to cart')).toBeVisible();
});