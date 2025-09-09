const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { RegistrationPage, HomePage, LoginPage, ProductPage, CartPage, CheckoutPage } = require('../pages');

Given('the user is on the registration page', async function () {
  await RegistrationPage.goto();
});

When('the user enters valid registration details', async function () {
  await RegistrationPage.enterDetails({ username: 'testuser', email: 'test@example.com', password: 'Password123!' });
});

When('the user submits the registration form', async function () {
  await RegistrationPage.submit();
});

Then('the user should see a registration success message', async function () {
  const message = await RegistrationPage.getSuccessMessage();
  expect(message).toBe('Registration successful');
});

// Add more step definitions for other scenarios...

Given('the user is on the homepage', async function () {
  await HomePage.goto();
});

When('the user enters a valid product name in the search bar', async function () {
  await HomePage.enterSearch('product name');
});

When('the user clicks the search button', async function () {
  await HomePage.clickSearch();
});

Then('the user should see the search results for the product', async function () {
  const results = await HomePage.getSearchResults();
  expect(results).toContain('product name');
});

// Add more step definitions for other scenarios...