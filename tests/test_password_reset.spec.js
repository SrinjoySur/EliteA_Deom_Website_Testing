const { test, expect } = require('@playwright/test');
const { PasswordResetPage } = require('../page_objects/PasswordResetPage');
const { HomePage } = require('../page_objects/HomePage');

const passwordResetPage = new PasswordResetPage();
const homePage = new HomePage();

// Test for successful password reset

 test('Successful password reset', async ({ page }) => {
  await homePage.navigateToPasswordResetPage(page);
  await passwordResetPage.resetPassword(page, 'john.doe@example.com');
  const confirmationMessage = await passwordResetPage.getConfirmationMessage(page);
  expect(confirmationMessage).toBe('Password reset email sent successfully!');
});

// Test for password reset with unregistered email

 test('Password reset with unregistered email', async ({ page }) => {
  await homePage.navigateToPasswordResetPage(page);
  await passwordResetPage.resetPassword(page, 'unregistered@example.com');
  const errorMessage = await passwordResetPage.getErrorMessage(page);
  expect(errorMessage).toBe('Email not registered');
});
