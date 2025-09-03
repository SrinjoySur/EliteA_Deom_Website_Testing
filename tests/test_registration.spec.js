const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../page_objects/RegistrationPage');
const { HomePage } = require('../page_objects/HomePage');

const registrationPage = new RegistrationPage();
const homePage = new HomePage();

// Test for successful user registration

 test('Successful user registration', async ({ page }) => {
  await homePage.navigateToRegistrationPage(page);
  await registrationPage.registerUser(page, 'John Doe', 'john.doe@example.com', 'Password123');
  const confirmationMessage = await registrationPage.getConfirmationMessage(page);
  expect(confirmationMessage).toBe('Your account has been created successfully!');
});

// Test for registration with existing email

 test('Registration with existing email', async ({ page }) => {
  await homePage.navigateToRegistrationPage(page);
  await registrationPage.registerUser(page, 'Jane Doe', 'jane.doe@example.com', 'Password123');
  const errorMessage = await registrationPage.getErrorMessage(page);
  expect(errorMessage).toBe('Email already exists');
});

// Test for registration with invalid email format

 test('Registration with invalid email format', async ({ page }) => {
  await homePage.navigateToRegistrationPage(page);
  await registrationPage.registerUser(page, 'John Doe', 'john.doe@invalid', 'Password123');
  const errorMessage = await registrationPage.getErrorMessage(page);
  expect(errorMessage).toBe('Invalid email format');
});

// Test for registration with missing required fields

 test('Registration with missing required fields', async ({ page }) => {
  await homePage.navigateToRegistrationPage(page);
  await registrationPage.registerUser(page, '', '', '');
  const errorMessages = await registrationPage.getErrorMessages(page);
  expect(errorMessages).toContain('Name is required');
  expect(errorMessages).toContain('Email is required');
  expect(errorMessages).toContain('Password is required');
});
