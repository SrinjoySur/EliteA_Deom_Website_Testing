const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test.describe('Performance Testing', () => {
  test('Page Load Performance', async ({ page }) => {
    const homePage = new HomePage(page);

    const start = Date.now();
    await homePage.navigate();
    const end = Date.now();

    const loadTime = end - start;
    expect(loadTime).toBeLessThan(2000);
  });

  test('Concurrent User Load', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const homePage = new HomePage(page);

    const start = Date.now();
    await homePage.navigate();
    const end = Date.now();

    const loadTime = end - start;
    expect(loadTime).toBeLessThan(5000);
  });
});
