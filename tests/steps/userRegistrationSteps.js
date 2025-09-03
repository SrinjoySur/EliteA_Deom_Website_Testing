const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const RegistrationPage = require('../pageObjects/RegistrationPage');

Given('the user is on the registration page', async function () {
  this.registrationPage = new RegistrationPage(this.page);
  await this.registrationPage.navigate();
});

When('the user enters valid details', async function (dataTable) {
  const data = dataTable.rowsHash();
  await this.registrationPage.register(data.Name, data.Email, data.Password, data['Confirm Password']);
});

Then('the user should be registered successfully', async function () {
  await expect(this.page.locator('.confirmation-message')).toHaveText('Registration successful');
});