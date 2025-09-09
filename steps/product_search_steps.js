const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the search page', async function () {
  await page.goto('https://automationexercise.com/products');
});

When('the user enters a valid product name {string}', async function (productName) {
  await page.fill('input[name="search"]', productName);
});

When('the user submits the search form', async function () {
  await page.click('button[name="search"]');
});

Then('the user should see search results containing {string}', async function (productName) {
  await expect(page.locator(`text=${productName}`)).toBeVisible();
});