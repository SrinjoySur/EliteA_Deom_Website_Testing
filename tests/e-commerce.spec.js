const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');

class HomePage {
  constructor(page) {
    this.page = page;
    this.signupLoginLink = page.locator('text=Signup / Login');
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com/');
  }

  async clickSignupLogin() {
    await this.signupLoginLink.click();
  }
}

class SignupPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('input[name="name"]');
    this.emailInput = page.locator('input[name="email"]');
    this.signupButton = page.locator('button[type="submit"]');
  }

  async register(name, email) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
  }
}

class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

class ProductPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[name="search"]');
    this.searchButton = page.locator('button[type="submit"]');
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }
}

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.paymentDetailsInput = page.locator('input[name="paymentDetails"]');
    this.purchaseButton = page.locator('button[type="submit"]');
  }

  async purchase(paymentDetails) {
    await this.paymentDetailsInput.fill(paymentDetails);
    await this.purchaseButton.click();
  }
}

// Test cases

const homePage = new HomePage(page);
const signupPage = new SignupPage(page);
const loginPage = new LoginPage(page);
const productPage = new ProductPage(page);
const checkoutPage = new CheckoutPage(page);

// User Registration

test('Successful user registration', async ({ page }) => {
  allure.feature('User Registration');
  await homePage.navigate();
  await homePage.clickSignupLogin();
  await signupPage.register('Test User', 'testuser@example.com');
  await expect(page).toHaveURL('https://automationexercise.com/welcome');
});

test('Registration with existing email', async ({ page }) => {
  allure.feature('User Registration');
  await homePage.navigate();
  await homePage.clickSignupLogin();
  await signupPage.register('Test User', 'existinguser@example.com');
  await expect(page.locator('text=Email already exists')).toBeVisible();
});

test('Registration with invalid email format', async ({ page }) => {
  allure.feature('User Registration');
  await homePage.navigate();
  await homePage.clickSignupLogin();
  await signupPage.register('Test User', 'invalidemail');
  await expect(page.locator('text=Invalid email format')).toBeVisible();
});

test('Registration with missing mandatory fields', async ({ page }) => {
  allure.feature('User Registration');
  await homePage.navigate();
  await homePage.clickSignupLogin();
  await signupPage.register('', '');
  await expect(page.locator('text=Please fill out this field')).toBeVisible();
});

// User Login

test('Successful user login', async ({ page }) => {
  allure.feature('User Login');
  await homePage.navigate();
  await homePage.clickSignupLogin();
  await loginPage.login('testuser@example.com', 'password123');
  await expect(page).toHaveURL('https://automationexercise.com/dashboard');
});

test('Login with incorrect password', async ({ page }) => {
  allure.feature('User Login');
  await homePage.navigate();
  await homePage.clickSignupLogin();
  await loginPage.login('testuser@example.com', 'wrongpassword');
  await expect(page.locator('text=Incorrect password')).toBeVisible();
});

test('Login with unregistered email', async ({ page }) => {
  allure.feature('User Login');
  await homePage.navigate();
  await homePage.clickSignupLogin();
  await loginPage.login('unregistered@example.com', 'password123');
  await expect(page.locator('text=Email not registered')).toBeVisible();
});

// Product Search

test('Successful product search', async ({ page }) => {
  allure.feature('Product Search');
  await homePage.navigate();
  await productPage.searchProduct('Blue Top');
  await expect(page.locator('text=Blue Top')).toBeVisible();
});

test('Search with no results', async ({ page }) => {
  allure.feature('Product Search');
  await homePage.navigate();
  await productPage.searchProduct('Nonexistent Product');
  await expect(page.locator('text=No results found')).toBeVisible();
});

test('Search with special characters', async ({ page }) => {
  allure.feature('Product Search');
  await homePage.navigate();
  await productPage.searchProduct('!@#$%^&*');
  await expect(page.locator('text=Invalid search query')).toBeVisible();
});

// Product Purchase

test('Successful product purchase', async ({ page }) => {
  allure.feature('Product Purchase');
  await homePage.navigate();
  await productPage.searchProduct('Blue Top');
  await page.locator('text=Add to cart').click();
  await page.locator('text=Proceed to checkout').click();
  await checkoutPage.purchase('Valid Payment Details');
  await expect(page.locator('text=Purchase successful')).toBeVisible();
});

test('Purchase with invalid payment details', async ({ page }) => {
  allure.feature('Product Purchase');
  await homePage.navigate();
  await productPage.searchProduct('Blue Top');
  await page.locator('text=Add to cart').click();
  await page.locator('text=Proceed to checkout').click();
  await checkoutPage.purchase('Invalid Payment Details');
  await expect(page.locator('text=Payment failed')).toBeVisible();
});

test('Purchase with insufficient stock', async ({ page }) => {
  allure.feature('Product Purchase');
  await homePage.navigate();
  await productPage.searchProduct('Blue Top');
  await page.locator('text=Add to cart').click();
  await page.locator('text=Proceed to checkout').click();
  await checkoutPage.purchase('Valid Payment Details');
  await expect(page.locator('text=Insufficient stock')).toBeVisible();
});

// Performance Testing

test('Homepage load time', async ({ page }) => {
  allure.feature('Performance Testing');
  const start = Date.now();
  await homePage.navigate();
  const end = Date.now();
  const loadTime = end - start;
  expect(loadTime).toBeLessThan(2000);
});

test('Search functionality response time', async ({ page }) => {
  allure.feature('Performance Testing');
  await homePage.navigate();
  const start = Date.now();
  await productPage.searchProduct('Blue Top');
  const end = Date.now();
  const responseTime = end - start;
  expect(responseTime).toBeLessThan(3000);
});

test('Checkout process response time', async ({ page }) => {
  allure.feature('Performance Testing');
  await homePage.navigate();
  await productPage.searchProduct('Blue Top');
  await page.locator('text=Add to cart').click();
  await page.locator('text=Proceed to checkout').click();
  const start = Date.now();
  await checkoutPage.purchase('Valid Payment Details');
  const end = Date.now();
  const responseTime = end - start;
  expect(responseTime).toBeLessThan(5000);
});
