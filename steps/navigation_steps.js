const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { TestCasesPage } = require('../pages/TestCasesPage');
const { ApiTestingPage } = require('../pages/ApiTestingPage');
const { ContactUsPage } = require('../pages/ContactUsPage');

Given('I am on the home page', async function () {
  this.page = await this.browser.newPage();
  this.homePage = new HomePage(this.page);
  await this.homePage.goto();
});

When('I click on the Signup/Login link', async function () {
  await this.homePage.clickSignupLogin();
});

Then('I should be on the Signup/Login page', async function () {
  this.loginPage = new LoginPage(this.page);
  expect(await this.loginPage.isCurrentPage()).toBe(true);
});

When('I click on the Products link', async function () {
  await this.homePage.clickProducts();
});

Then('I should be on the Products page', async function () {
  this.productsPage = new ProductsPage(this.page);
  expect(await this.productsPage.isCurrentPage()).toBe(true);
});

When('I click on the Cart link', async function () {
  await this.homePage.clickCart();
});

Then('I should be on the Cart page', async function () {
  this.cartPage = new CartPage(this.page);
  expect(await this.cartPage.isCurrentPage()).toBe(true);
});

When('I click on the Test Cases link', async function () {
  await this.homePage.clickTestCases();
});

Then('I should be on the Test Cases page', async function () {
  this.testCasesPage = new TestCasesPage(this.page);
  expect(await this.testCasesPage.isCurrentPage()).toBe(true);
});

When('I click on the API Testing link', async function () {
  await this.homePage.clickApiTesting();
});

Then('I should be on the API Testing page', async function () {
  this.apiTestingPage = new ApiTestingPage(this.page);
  expect(await this.apiTestingPage.isCurrentPage()).toBe(true);
});

When('I click on the Contact Us link', async function () {
  await this.homePage.clickContactUs();
});

Then('I should be on the Contact Us page', async function () {
  this.contactUsPage = new ContactUsPage(this.page);
  expect(await this.contactUsPage.isCurrentPage()).toBe(true);
});