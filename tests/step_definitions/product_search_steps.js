const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the homepage', async function () {
  await page.goto('https://automationexercise.com');
});

When('I enter {string} in the search bar', async function (productName) {
  await page.fill('input[name="search"]', productName);
});

When('I click the search button', async function () {
  await page.click('button[type="submit"]');
});

Then('I should see a list of products related to {string}', async function (productName) {
  const productList = await page.locator('.product-list').textContent();
  expect(productList).toContain(productName);
});

Then('I should see a message indicating no products found', async function () {
  const errorMessage = await page.locator('.alert-danger').textContent();
  expect(errorMessage).toContain('No products found');
});

Then('I should see a message indicating invalid search query', async function () {
  const errorMessage = await page.locator('.alert-danger').textContent();
  expect(errorMessage).toContain('Invalid search query');
});

Then('I should see a message indicating no search query entered', async function () {
  const errorMessage = await page.locator('.alert-danger').textContent();
  expect(errorMessage).toContain('No search query entered');
});