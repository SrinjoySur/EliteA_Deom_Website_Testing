const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the registration page', async function () {
  await this.page.goto('https://automationexercise.com/signup');
});

When('the user enters valid details and submits the form', async function () {
  await this.page.fill('input[name="name"]', 'Test User');
  await this.page.fill('input[name="email"]', 'testuser@example.com');
  await this.page.click('button[type="submit"]');
});

Then('the user should be registered successfully', async function () {
  await this.page.waitForSelector('text=Account Created!');
  expect(await this.page.isVisible('text=Account Created!')).toBe(true);
});

Given('the user is on the login page', async function () {
  await this.page.goto('https://automationexercise.com/login');
});

When('the user enters valid credentials and submits the form', async function () {
  await this.page.fill('input[name="email"]', 'testuser@example.com');
  await this.page.fill('input[name="password"]', 'password123');
  await this.page.click('button[type="submit"]');
});

Then('the user should be logged in successfully', async function () {
  await this.page.waitForSelector('text=Logged in as Test User');
  expect(await this.page.isVisible('text=Logged in as Test User')).toBe(true);
});
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