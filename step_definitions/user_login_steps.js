const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the Signup / Login page', async function () {
  await page.goto('https://automationexercise.com/login');
});

When('the user enters their email address and password', async function () {
  await page.fill('input[name="email"]', 'testuser@example.com');
  await page.fill('input[name="password"]', 'password123');
});

When('the user clicks on the Login button', async function () {
  await page.click('button[type="submit"]');
});

Then('the user should be logged in successfully', async function () {
  const welcomeMessage = await page.locator('.welcome-message').textContent();
  expect(welcomeMessage).toContain('Welcome, Test User');
});

When('the user enters an incorrect email address and password', async function () {
  await page.fill('input[name="email"]', 'wronguser@example.com');
  await page.fill('input[name="password"]', 'wrongpassword');
});

Then('the user should see an error message indicating invalid login credentials', async function () {
  const errorMessage = await page.locator('.alert-danger').textContent();
  expect(errorMessage).toContain('Invalid email or password');
});