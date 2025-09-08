const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

Given('I navigate to the home page', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.navigate('https://automationexercise.com/');
});

Then('I should see the title {string}', async function (expectedTitle) {
  const isTitleCorrect = await this.homePage.verifyTitle(expectedTitle);
  expect(isTitleCorrect).toBe(true);
});

Given('I navigate to the login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate('https://automationexercise.com/login');
});

When('I enter username {string} and password {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

Then('I should see the message {string}', async function (expectedMessage) {
  const message = await this.loginPage.getLoginMessage();
  expect(message).toBe(expectedMessage);
});