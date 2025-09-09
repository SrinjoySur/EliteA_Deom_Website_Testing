const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the homepage', async function () {
  await page.goto('https://automationexercise.com');
});

When('I navigate to the product listing page', async function () {
  await page.goto('https://automationexercise.com/products');
});

Then('the page should load within {int} seconds', async function (seconds) {
  const startTime = Date.now();
  await page.waitForLoadState('load');
  const endTime = Date.now();
  const loadTime = (endTime - startTime) / 1000;
  expect(loadTime).toBeLessThanOrEqual(seconds);
});

Given('multiple users are accessing the website simultaneously', async function () {
  // Simulate multiple users accessing the website
});

When('{int} users perform searches concurrently', async function (userCount) {
  const searchPromises = [];
  for (let i = 0; i < userCount; i++) {
    searchPromises.push(page.goto('https://automationexercise.com/products'));
  }
  await Promise.all(searchPromises);
});

Then('the website should handle the load without performance degradation', async function () {
  const performanceMetrics = await page.evaluate(() => {
    return window.performance.getEntriesByType('navigation');
  });
  performanceMetrics.forEach(metric => {
    expect(metric.duration).toBeLessThan(2000);
  });
});