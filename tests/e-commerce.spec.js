const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');

class HomePage {
  constructor(page) {
    this.page = page;
    this.signupLoginLink = page.locator('a[href="/login"]');
    this.productsLink = page.locator('a[href="/products"]');
    this.cartLink = page.locator('a[href="/view_cart"]');
    this.testCasesLink = page.locator('a[href="/test_cases"]');
    this.apiTestingLink = page.locator('a[href="/api_list"]');
    this.contactUsLink = page.locator('a[href="/contact_us"]');
  }

  async navigateToSignupLogin() {
    await this.signupLoginLink.click();
  }

  async navigateToProducts() {
    await this.productsLink.click();
  }

  async navigateToCart() {
    await this.cartLink.click();
  }

  async navigateToTestCases() {
    await this.testCasesLink.click();
  }

  async navigateToApiTesting() {
    await this.apiTestingLink.click();
  }

  async navigateToContactUs() {
    await this.contactUsLink.click();
  }
}

class SignupLoginPage {
  constructor(page) {
    this.page = page;
    this.signupForm = page.locator('#form');
    this.loginForm = page.locator('#login-form');
    this.signupNameInput = page.locator('input[name="name"]');
    this.signupEmailInput = page.locator('input[name="email"]');
    this.signupButton = page.locator('button[type="submit"]');
    this.loginEmailInput = page.locator('input[name="email"]');
    this.loginPasswordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async signup(name, email) {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }

  async login(email, password) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }
}

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[name="search"]');
    this.searchButton = page.locator('button[type="submit"]');
    this.productList = page.locator('.product-list');
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }
}

class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('button[type="button"]');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.paymentForm = page.locator('#payment-form');
    this.cardNumberInput = page.locator('input[name="card_number"]');
    this.expiryDateInput = page.locator('input[name="expiry_date"]');
    this.cvvInput = page.locator('input[name="cvv"]');
    this.payButton = page.locator('button[type="submit"]');
  }

  async enterPaymentDetails(cardNumber, expiryDate, cvv) {
    await this.cardNumberInput.fill(cardNumber);
    await this.expiryDateInput.fill(expiryDate);
    await this.cvvInput.fill(cvv);
    await this.payButton.click();
  }
}

// Test cases

const baseURL = 'https://automationexercise.com';

// User Registration

test.describe('User Registration', () => {
  test('Successful user registration', async ({ page }) => {
    const homePage = new HomePage(page);
    const signupLoginPage = new SignupLoginPage(page);

    await page.goto(baseURL);
    await homePage.navigateToSignupLogin();
    await signupLoginPage.signup('Test User', 'testuser@example.com');

    await expect(page.locator('.confirmation-message')).toHaveText('Registration successful');
  });

  test('Registration with an already registered email', async ({ page }) => {
    const homePage = new HomePage(page);
    const signupLoginPage = new SignupLoginPage(page);

    await page.goto(baseURL);
    await homePage.navigateToSignupLogin();
    await signupLoginPage.signup('Test User', 'existinguser@example.com');

    await expect(page.locator('.error-message')).toHaveText('Email already registered');
  });

  test('Registration with invalid email format', async ({ page }) => {
    const homePage = new HomePage(page);
    const signupLoginPage = new SignupLoginPage(page);

    await page.goto(baseURL);
    await homePage.navigateToSignupLogin();
    await signupLoginPage.signup('Test User', 'invalid-email');

    await expect(page.locator('.error-message')).toHaveText('Invalid email format');
  });
});

// User Login

test.describe('User Login', () => {
  test('Successful user login', async ({ page }) => {
    const homePage = new HomePage(page);
    const signupLoginPage = new SignupLoginPage(page);

    await page.goto(baseURL);
    await homePage.navigateToSignupLogin();
    await signupLoginPage.login('testuser@example.com', 'password123');

    await expect(page).toHaveURL(baseURL);
  });

  test('Login with incorrect password', async ({ page }) => {
    const homePage = new HomePage(page);
    const signupLoginPage = new SignupLoginPage(page);

    await page.goto(baseURL);
    await homePage.navigateToSignupLogin();
    await signupLoginPage.login('testuser@example.com', 'wrongpassword');

    await expect(page.locator('.error-message')).toHaveText('Incorrect password');
  });

  test('Login with unregistered email', async ({ page }) => {
    const homePage = new HomePage(page);
    const signupLoginPage = new SignupLoginPage(page);

    await page.goto(baseURL);
    await homePage.navigateToSignupLogin();
    await signupLoginPage.login('unregistered@example.com', 'password123');

    await expect(page.locator('.error-message')).toHaveText('Email not registered');
  });
});

// Product Search

test.describe('Product Search', () => {
  test('Successful product search', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    await page.goto(baseURL);
    await homePage.navigateToProducts();
    await productsPage.searchProduct('Blue Top');

    await expect(productsPage.productList).toContainText('Blue Top');
  });

  test('Search with no matching products', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    await page.goto(baseURL);
    await homePage.navigateToProducts();
    await productsPage.searchProduct('Nonexistent Product');

    await expect(page.locator('.no-products-message')).toHaveText('No products found');
  });

  test('Search with special characters', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    await page.goto(baseURL);
    await homePage.navigateToProducts();
    await productsPage.searchProduct('!@#$%^&*()');

    await expect(page.locator('.error-message')).toHaveText('Invalid search query');
  });
});

// Product Purchase

test.describe('Product Purchase', () => {
  test('Successful product purchase', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto(baseURL);
    await homePage.navigateToProducts();
    await page.locator('text=Add to cart').first().click();
    await homePage.navigateToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.enterPaymentDetails('4111111111111111', '12/23', '123');

    await expect(page.locator('.confirmation-message')).toHaveText('Purchase successful');
  });

  test('Purchase with invalid payment details', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto(baseURL);
    await homePage.navigateToProducts();
    await page.locator('text=Add to cart').first().click();
    await homePage.navigateToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.enterPaymentDetails('1234567890123456', '12/23', '123');

    await expect(page.locator('.error-message')).toHaveText('Payment failed');
  });
});

// Performance Testing

test.describe('Performance Testing', () => {
  test('Homepage load time', async ({ page }) => {
    await allure.step('Navigate to homepage', async () => {
      await page.goto(baseURL);
    });

    await allure.step('Measure load time', async () => {
      const loadTime = await page.evaluate(() => {
        return window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      });
      expect(loadTime).toBeLessThan(2000);
    });
  });

  test('Search results load time', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    await allure.step('Navigate to homepage', async () => {
      await page.goto(baseURL);
    });

    await allure.step('Search for product', async () => {
      await homePage.navigateToProducts();
      await productsPage.searchProduct('Blue Top');
    });

    await allure.step('Measure load time', async () => {
      const loadTime = await page.evaluate(() => {
        return window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      });
      expect(loadTime).toBeLessThan(3000);
    });
  });

  test('Checkout process time', async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await allure.step('Navigate to homepage', async () => {
      await page.goto(baseURL);
    });

    await allure.step('Add product to cart', async () => {
      await homePage.navigateToProducts();
      await page.locator('text=Add to cart').first().click();
    });

    await allure.step('Proceed to checkout', async () => {
      await homePage.navigateToCart();
      await cartPage.proceedToCheckout();
    });

    await allure.step('Enter payment details', async () => {
      await checkoutPage.enterPaymentDetails('4111111111111111', '12/23', '123');
    });

    await allure.step('Measure checkout time', async () => {
      const checkoutTime = await page.evaluate(() => {
        return window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      });
      expect(checkoutTime).toBeLessThan(5000);
    });
  });
});
