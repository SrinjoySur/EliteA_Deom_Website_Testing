const { test, expect } = require('@playwright/test');

test.describe('Performance Testing', () => {
  test('Home page loads within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('http://example.com');
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(2000);
  });

  test('Login page loads within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('http://example.com/login');
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(2000);
  });
});