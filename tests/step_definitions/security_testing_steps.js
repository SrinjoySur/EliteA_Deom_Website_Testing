const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the login page', async function () {
  await page.goto('https://automationexercise.com/login');
});

When('the user enters {string} in the username field', async function (username) {
  await page.fill('input[name="email"]', username);
});

When('the user enters {string} in the password field', async function (password) {
  await page.fill('input[name="password"]', password);
});

When('the user submits the login form', async function () {
  await page.click('button[name="login"]');
});

Then('the user should see an error message {string}', async function (errorMessage) {
  const errorText = await page.textContent('.error-message');
  expect(errorText).toContain(errorMessage);
});

Given('the user is on the comment section of a product page', async function () {
  await page.goto('https://automationexercise.com/product_details/1');
});

When('the user enters {string} in the comment field', async function (comment) {
  await page.fill('textarea[name="comment"]', comment);
});

When('the user submits the comment', async function () {
  await page.click('button[name="submit-comment"]');
});

Then('the user should see an error message {string}', async function (errorMessage) {
  const errorText = await page.textContent('.error-message');
  expect(errorText).toContain(errorMessage);
});