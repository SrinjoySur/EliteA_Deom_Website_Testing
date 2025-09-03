const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const RegistrationPage = require('../pageObjects/RegistrationPage');
const LoginPage = require('../pageObjects/LoginPage');

Given('the user is on the registration page', async function () {
  this.registrationPage = new RegistrationPage(this.page);
  await this.registrationPage.navigate();
});

When('the user enters special characters in the name field', async function (dataTable) {
  const data = dataTable.rowsHash();
  await this.registrationPage.register(data.Name, data.Email, data.Password, data['Confirm Password']);
});

Then('the user should see an error message', async function () {
  await expect(this.page.locator('.error-message')).toHaveText('Name contains invalid characters');
});

Given('the user is on the login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('the user enters an SQL injection string in the email or password field', async function (dataTable) {
  const data = dataTable.rowsHash();
  await this.loginPage.login(data.Email, data.Password);
});

Then('the user should see an error message', async function () {
  await expect(this.page.locator('.error-message')).toHaveText('Invalid email or password');
});