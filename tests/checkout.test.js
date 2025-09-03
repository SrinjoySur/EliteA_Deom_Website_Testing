const { test, expect } = require('@playwright/test');
const { CheckoutPage } = require('../pageObjects/CheckoutPage');

// Page Object Model
class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('#cartItems');
    this.paymentDetailsInput = page.locator('#paymentDetails');
    this.checkoutButton = page.locator('#checkoutButton');
    this.confirmationMessage = page.locator('#confirmation');
    this.errorMessage = page.locator('#error');
  }

  async navigate() {
    await this.page.goto('http://example.com/cart');
  }

  async checkout(paymentDetails) {
    await this.paymentDetailsInput.fill(paymentDetails);
    await this.checkoutButton.click();
  }
}

// Test Scenarios
test.describe('Checkout', () => {
  let page;
  let checkoutPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    checkoutPage = new CheckoutPage(page);
  });

  test('Successful checkout with valid payment details', async () => {
    await checkoutPage.navigate();
    await checkoutPage.checkout('validPaymentDetails');
    await expect(checkoutPage.confirmationMessage).toBeVisible();
  });

  test('Unsuccessful checkout with invalid payment details', async () => {
    await checkoutPage.navigate();
    await checkoutPage.checkout('invalidPaymentDetails');
    await expect(checkoutPage.errorMessage).toBeVisible();
  });

  test.afterAll(async () => {
    await page.close();
  });
});