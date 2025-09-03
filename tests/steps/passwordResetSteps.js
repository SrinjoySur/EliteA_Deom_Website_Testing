const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const PasswordResetPage = require('../pageObjects/PasswordResetPage');

Given('the user is on the password reset page', async function () {
  this.passwordResetPage = new PasswordResetPage(this.page);
  await this.passwordResetPage.navigate();
});

When('the user enters a registered email', async function (dataTable) {
  const data = dataTable.rowsHash();
  await this.passwordResetPage.resetPassword(data.Email);
});

Then('the user should see a confirmation message', async function () {
  await expect(this.page.locator('.confirmation-message')).toHaveText('Password reset link has been sent to your email');
});