const { test, expect } = require('@playwright/test');
const { ProductSearchPage } = require('../pageObjects/ProductSearchPage');

// Page Object Model
class ProductSearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#search');
    this.searchButton = page.locator('#searchButton');
    this.results = page.locator('#results');
    this.noResultsMessage = page.locator('#noResults');
  }

  async navigate() {
    await this.page.goto('http://example.com');
  }

  async search(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }
}

// Test Scenarios
test.describe('Product Search', () => {
  let page;
  let productSearchPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    productSearchPage = new ProductSearchPage(page);
  });

  test('Successful search with matching products', async () => {
    await productSearchPage.navigate();
    await productSearchPage.search('Laptop');
    await expect(productSearchPage.results).toBeVisible();
  });

  test('Unsuccessful search with no matching products', async () => {
    await productSearchPage.navigate();
    await productSearchPage.search('NonExistentProduct');
    await expect(productSearchPage.noResultsMessage).toBeVisible();
  });

  test.afterAll(async () => {
    await page.close();
  });
});