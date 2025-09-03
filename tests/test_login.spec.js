const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page_objects/LoginPage');
const { HomePage } = require('../page_objects/HomePage');

const loginPage = new LoginPage();
const homePage = new HomePage();

// Test for successful user login

 test('Successful user login', async ({ page }) => {
  await homePage.navigateToLoginPage(page);
  await loginPage.loginUser(page, 'john.doe@example.com', 'Password123');
  const dashboard = await loginPage.getDashboard(page);
  expect(dashboard).toBeVisible();
});

// Test for login with incorrect password

 test('Login with incorrect password', async ({ page }) => {
  await homePage.navigateToLoginPage(page);
  await loginPage.loginUser(page, 'john.doe@example.com', 'WrongPassword');
  const errorMessage = await loginPage.getErrorMessage(page);
  expect(errorMessage).toBe('Incorrect password');
});

// Test for login with unregistered email

 test('Login with unregistered email', async ({ page }) => {
  await homePage.navigateToLoginPage(page);
  await loginPage.loginUser(page, 'unregistered@example.com', 'Password123');
  const errorMessage = await loginPage.getErrorMessage(page);
  expect(errorMessage).toBe('Email not registered');
});
