const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the login page', async function () {
  await page.goto('https://automationexercise.com/login');
});

When('I enter "{string}" in the username field', async function (username) {
  await page.fill('input[name="email"]', username);
});

When('I enter "{string}" in the password field', async function (password) {
  await page.fill('input[name="password"]', password);
});

When('I submit the login form', async function () {
  await page.click('button[type="submit"]');
});

Then('I should see an error message indicating invalid credentials', async function () {
  const errorMessage = await page.locator('.alert-danger').textContent();
  expect(errorMessage).toContain('Invalid credentials');
});

Given('I am on the comment section of a product page', async function () {
  await page.goto('https://automationexercise.com/product_details/1');
});

When('I enter "{string}" in the comment field', async function (comment) {
  await page.fill('textarea[name="comment"]', comment);
});

When('I submit the comment', async function () {
  await page.click('button[type="submit"]');
});

Then('the comment should be sanitized and not execute any script', async function () {
  const commentContent = await page.locator('.comment-content').textContent();
  expect(commentContent).not.toContain('<script>');
});