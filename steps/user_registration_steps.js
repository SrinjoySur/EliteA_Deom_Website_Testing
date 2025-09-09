const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the registration page', async function () {
  await page.goto('https://automationexercise.com/login');
});

When('the user enters valid registration details', async function (dataTable) {
  const data = dataTable.rowsHash();
  await page.fill('input[name="name"]', data.Name);
  await page.fill('input[name="email"]', data.Email);
});

When('the user submits the registration form', async function () {
  await page.click('button[name="Signup"]');
});

Then('the user should be registered successfully', async function () {
  await expect(page.locator('text=Success! Your details have been submitted successfully.')).toBeVisible();
});

Then('the user should see a confirmation message', async function () {
  await expect(page.locator('text=Success! Your details have been submitted successfully.')).toBeVisible();
});