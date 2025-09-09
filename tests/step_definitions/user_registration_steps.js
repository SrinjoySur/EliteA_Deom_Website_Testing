const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the registration page', async function () {
  await page.goto('https://automationexercise.com/login');
});

When('the user enters valid registration details', async function (dataTable) {
  const data = dataTable.rowsHash();
  await page.fill('input[name="name"]', data.Username);
  await page.fill('input[name="email"]', data.Email);
  await page.fill('input[name="password"]', data.Password);
});

When('the user submits the registration form', async function () {
  await page.click('button[name="signup"]');
});

Then('the user should see a registration success message', async function () {
  const successMessage = await page.textContent('.success-message');
  expect(successMessage).toContain('Success! Your details have been submitted successfully.');
});

When('the user enters registration details with an existing email', async function (dataTable) {
  const data = dataTable.rowsHash();
  await page.fill('input[name="name"]', data.Username);
  await page.fill('input[name="email"]', data.Email);
  await page.fill('input[name="password"]', data.Password);
});

Then('the user should see an error message {string}', async function (errorMessage) {
  const errorText = await page.textContent('.error-message');
  expect(errorText).toContain(errorMessage);
});

When('the user enters registration details with an invalid email format', async function (dataTable) {
  const data = dataTable.rowsHash();
  await page.fill('input[name="name"]', data.Username);
  await page.fill('input[name="email"]', data.Email);
  await page.fill('input[name="password"]', data.Password);
});

When('the user enters registration details with a weak password', async function (dataTable) {
  const data = dataTable.rowsHash();
  await page.fill('input[name="name"]', data.Username);
  await page.fill('input[name="email"]', data.Email);
  await page.fill('input[name="password"]', data.Password);
});