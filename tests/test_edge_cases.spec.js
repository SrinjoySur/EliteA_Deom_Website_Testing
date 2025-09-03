const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../page_objects/RegistrationPage');
const { LoginPage } = require('../page_objects/LoginPage');
const { HomePage } = require('../page_objects/HomePage');

const registrationPage = new RegistrationPage();
const loginPage = new LoginPage();
const homePage = new HomePage();

// Test for registration with maximum field length

 test('Registration with maximum field length', async ({ page }) => {
  const longName = 'a'.repeat(255);
  const longEmail = 'a'.repeat(243) + '@example.com';
  const longPassword = 'a'.repeat(255);
  await homePage.navigateToRegistrationPage(page);
  await registrationPage.registerUser(page, longName, longEmail, longPassword);
  const confirmationMessage = await registrationPage.getConfirmationMessage(page);
  expect(confirmationMessage).toBe('Your account has been created successfully!');
});

// Test for login with SQL injection attempt

 test('Login with SQL injection attempt', async ({ page }) => {
  const sqlInjection = "' OR '1'='1";
  await homePage.navigateToLoginPage(page);
  await loginPage.loginUser(page, sqlInjection, sqlInjection);
  const errorMessage = await loginPage.getErrorMessage(page);
  expect(errorMessage).toBe('Invalid credentials');
});

// Test for registration with special characters in name field

 test('Registration with special characters in name field', async ({ page }) => {
  await homePage.navigateToRegistrationPage(page);
  await registrationPage.registerUser(page, '@JohnDoe!', 'john.doe@example.com', 'Password123');
  const errorMessage = await registrationPage.getErrorMessage(page);
  expect(errorMessage).toBe('Invalid characters in name');
});
