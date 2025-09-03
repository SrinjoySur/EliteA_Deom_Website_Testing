const { test, expect } = require('@playwright/test');
const { HomePage } = require('../page_objects/HomePage');

const homePage = new HomePage();

// Test for page load performance

 test('Page load performance', async ({ page }) => {
  const startTime = Date.now();
  await homePage.navigateToHomePage(page);
  const endTime = Date.now();
  const loadTime = endTime - startTime;
  expect(loadTime).toBeLessThan(2000);
});

// Test for high traffic performance

 test('High traffic performance', async ({ page }) => {
  const users = Array(1000).fill(null);
  const loadTimes = await Promise.all(users.map(async () => {
    const startTime = Date.now();
    await homePage.navigateToHomePage(page);
    const endTime = Date.now();
    return endTime - startTime;
  }));
  const averageLoadTime = loadTimes.reduce((a, b) => a + b, 0) / loadTimes.length;
  expect(averageLoadTime).toBeLessThan(5000);
});
