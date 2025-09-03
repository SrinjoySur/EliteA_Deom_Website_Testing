const { test, expect } = require('@playwright/test');
const { UserRegistrationPage } = require('../pageObjects/UserRegistrationPage');

// Page Object Model
class UserRegistrationPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#submit');
    this.successMessage = page.locator('#success');
    this.errorMessage = page.locator('#error');
  }

  async navigate() {
    await this.page.goto('http://example.com/registration');
  }

  async register(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

// Test Scenarios
test.describe('User Registration', () => {
  let page;
  let userRegistrationPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    userRegistrationPage = new UserRegistrationPage(page);
  });

  test('Successful user registration', async () => {
    await userRegistrationPage.navigate();
    await userRegistrationPage.register('valid@example.com', 'validPassword');
    await expect(userRegistrationPage.successMessage).toBeVisible();
  });

  test('Registration with existing email', async () => {
    await userRegistrationPage.navigate();
    await userRegistrationPage.register('existing@example.com', 'validPassword');
    await expect(userRegistrationPage.errorMessage).toBeVisible();
  });

  test('Registration with invalid email format', async () => {
    await userRegistrationPage.navigate();
    await userRegistrationPage.register('invalidEmail', 'validPassword');
    await expect(userRegistrationPage.errorMessage).toBeVisible();
  });

  test('Registration with missing required fields', async () => {
    await userRegistrationPage.navigate();
    await userRegistrationPage.register('', '');
    await expect(userRegistrationPage.errorMessage).toBeVisible();
  });

  test.afterAll(async () => {
    await page.close();
  });
});