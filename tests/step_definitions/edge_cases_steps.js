const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the registration page', async function () {
  await page.goto('https://automationexercise.com/login');
});

When('the user enters invalid details', async function (dataTable) {
  const data = dataTable.rowsHash();
  await page.fill('input[name="name"]', data.Username);
  await page.fill('input[name="email"]', data.Email);
  await page.fill('input[name="password"]', data.Password);
});

When('the user submits the registration form', async function () {
  await page.click('button[name="signup"]');
});

Then('the user should see error messages for all fields', async function () {
  const errorMessages = await page.textContent('.error-messages');
  expect(errorMessages).toContain('Username is required');
  expect(errorMessages).toContain('Email is required');
  expect(errorMessages).toContain('Password is required');
});

Given('the user is logged in', async function () {
  await page.goto('https://automationexercise.com/login');
  await page.fill('input[name="email"]', 'testuser@example.com');
  await page.fill('input[name="password"]', 'Password123');
  await page.click('button[name="login"]');
});

Given('the user is inactive for {int} minutes', async function (minutes) {
  await page.waitForTimeout(minutes * 60 * 1000);
});

When('the user tries to perform any action', async function () {
  await page.click('button[name="some-action"]');
});

Then('the user should be redirected to the login page', async function () {
  const pageUrl = await page.url();
  expect(pageUrl).toBe('https://automationexercise.com/login');
});

Then('the user should see a message {string}', async function (message) {
  const messageText = await page.textContent('.message');
  expect(messageText).toContain(message);
});

When('the network connection is lost', async function () {
  await page.setOffline(true);
});

Then('the user should see an error message {string}', async function (errorMessage) {
  const errorText = await page.textContent('.error-message');
  expect(errorText).toContain(errorMessage);
});