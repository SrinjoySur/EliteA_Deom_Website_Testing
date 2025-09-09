const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the Signup / Login page', async function () {
  await page.goto('https://automationexercise.com/login');
});

When('the user enters their name and email address', async function () {
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'testuser@example.com');
});

When('the user clicks on the Signup button', async function () {
  await page.click('button[type="submit"]');
});

Then('the user should be registered successfully', async function () {
  const successMessage = await page.locator('.alert-success').textContent();
  expect(successMessage).toContain('Your account has been created successfully');
});

When('the user enters an existing email address', async function () {
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'existinguser@example.com');
});

Then('the user should see an error message indicating the email is already registered', async function () {
  const errorMessage = await page.locator('.alert-danger').textContent();
  expect(errorMessage).toContain('Email already exists');
});