const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser, page;

Given('the user is on the registration page', async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('https://automationexercise.com/');
  await page.click('text=Signup / Login');
});

When('the user enters valid registration details', async () => {
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'testuser@example.com');
});

When('the user clicks on the "Register" button', async () => {
  await page.click('button[type="submit"]');
});

Then('the user should see a success message', async () => {
  const successMessage = await page.textContent('.alert-success');
  if (!successMessage.includes('Registration successful')) {
    throw new Error('Success message not found');
  }
});

Then('the user should be redirected to the login page', async () => {
  const url = page.url();
  if (!url.includes('/login')) {
    throw new Error('Not redirected to login page');
  }
  await browser.close();
});

When('the user enters invalid registration details', async () => {
  await page.fill('input[name="name"]', '');
  await page.fill('input[name="email"]', 'invalid-email');
});

Then('the user should see an error message', async () => {
  const errorMessage = await page.textContent('.alert-danger');
  if (!errorMessage.includes('Invalid details')) {
    throw new Error('Error message not found');
  }
  await browser.close();
});