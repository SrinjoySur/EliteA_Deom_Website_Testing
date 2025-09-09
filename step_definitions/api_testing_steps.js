const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the API Testing page', async function () {
  await page.goto('https://automationexercise.com/api_list');
});

When('the user browses through the API list', async function () {
  const apiList = await page.locator('.api-list').count();
  expect(apiList).toBeGreaterThan(0);
});

Then('the user should see all available APIs for testing', async function () {
  const apiCount = await page.locator('.api-item').count();
  expect(apiCount).toBeGreaterThan(0);
});