const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the homepage', async function () {
  await page.goto('https://automationexercise.com');
});

When('the user enters {string} in the search bar', async function (productName) {
  await page.fill('input[name="search"]', productName);
});

When('the user clicks the search button', async function () {
  await page.click('button[name="search"]');
});

Then('the user should see a list of products related to {string}', async function (productName) {
  const productList = await page.textContent('.product-list');
  expect(productList).toContain(productName);
});

Then('the user should see a message {string}', async function (message) {
  const messageText = await page.textContent('.message');
  expect(messageText).toContain(message);
});