const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the registration page', async function () {
  await page.goto('https://automationexercise.com/login');
});

When('I enter valid registration details', async function (dataTable) {
  const data = dataTable.rowsHash();
  await page.fill('input[name="name"]', data['First Name']);
  await page.fill('input[name="email"]', data['Email']);
  await page.fill('input[name="password"]', data['Password']);
});

When('I enter invalid registration details', async function (dataTable) {
  const data = dataTable.rowsHash();
  await page.fill('input[name="name"]', data['First Name']);
  await page.fill('input[name="email"]', data['Email']);
  await page.fill('input[name="password"]', data['Password']);
});

When('I enter incomplete registration details', async function (dataTable) {
  const data = dataTable.rowsHash();
  await page.fill('input[name="name"]', data['First Name']);
  await page.fill('input[name="email"]', data['Email']);
  await page.fill('input[name="password"]', data['Password']);
});

When('I enter invalid registration details', async function (dataTable) {
  const data = dataTable.rowsHash();
  await page.fill('input[name="name"]', data['First Name']);
  await page.fill('input[name="email"]', data['Email']);
  await page.fill('input[name="password"]', data['Password']);
});

When('I submit the registration form', async function () {
  await page.click('button[type="submit"]');
});

Then('I should see a registration success message', async function () {
  const successMessage = await page.locator('.alert-success').textContent();
  expect(successMessage).toContain('Registration successful');
});

Then('I should see an error message indicating invalid email format', async function () {
  const errorMessage = await page.locator('.alert-danger').textContent();
  expect(errorMessage).toContain('Invalid email format');
});

Then('I should see an error message indicating missing mandatory fields', async function () {
  const errorMessage = await page.locator('.alert-danger').textContent();
  expect(errorMessage).toContain('Mandatory fields missing');
});

Then('I should see an error message indicating password too short', async function () {
  const errorMessage = await page.locator('.alert-danger').textContent();
  expect(errorMessage).toContain('Password too short');
});