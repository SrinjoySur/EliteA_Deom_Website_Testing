const { test, expect } = require('@playwright/test');
const { UserLoginPage } = require('../pageObjects/UserLoginPage');

// Page Object Model
class UserLoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#submit');
    this.errorMessage = page.locator('#error');
  }

  async navigate() {
    await this.page.goto('http://example.com/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

// Test Scenarios
test.describe('User Login', () => {
  let page;
  let userLoginPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    userLoginPage = new UserLoginPage(page);
  });

  test('Successful user login', async () => {
    await userLoginPage.navigate();
    await userLoginPage.login('valid@example.com', 'validPassword');
    await expect(page).toHaveURL('http://example.com/dashboard');
  });

  test('Login with incorrect password', async () => {
    await userLoginPage.navigate();
    await userLoginPage.login('valid@example.com', 'invalidPassword');
    await expect(userLoginPage.errorMessage).toBeVisible();
  });

  test('Login with unregistered email', async () => {
    await userLoginPage.navigate();
    await userLoginPage.login('unregistered@example.com', 'validPassword');
    await expect(userLoginPage.errorMessage).toBeVisible();
  });

  test.afterAll(async () => {
    await page.close();
  });
});