const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/LoginPage');

Given('the user is on the login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('the user enters valid credentials', async function (dataTable) {
  const data = dataTable.rowsHash();
  await this.loginPage.login(data.Email, data.Password);
});

Then('the user should be logged in successfully', async function () {
  await expect(this.page.locator('.dashboard')).toBeVisible();
});