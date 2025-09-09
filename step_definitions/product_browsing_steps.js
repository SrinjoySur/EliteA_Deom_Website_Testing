const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the Products page', async function () {
  await page.goto('https://automationexercise.com/products');
});

When('the user browses through the product list', async function () {
  const productList = await page.locator('.product-list').count();
  expect(productList).toBeGreaterThan(0);
});

Then('the user should see all available products', async function () {
  const productCount = await page.locator('.product-item').count();
  expect(productCount).toBeGreaterThan(0);
});

When('the user enters a product name in the search box', async function () {
  await page.fill('input[name="search"]', 'Blue Top');
});

When('the user clicks on the search button', async function () {
  await page.click('button[type="submit"]');
});

Then('the user should see the search results for the product', async function () {
  const searchResults = await page.locator('.search-results').count();
  expect(searchResults).toBeGreaterThan(0);
});