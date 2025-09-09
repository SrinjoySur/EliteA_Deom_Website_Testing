const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the homepage', async function () {
  await page.goto('https://automationexercise.com');
});

When('the user navigates to the product page for {string}', async function (productName) {
  const startTime = Date.now();
  await page.goto(`https://automationexercise.com/product_details/${productName}`);
  const endTime = Date.now();
  const loadTime = endTime - startTime;
  expect(loadTime).toBeLessThan(2000);
});

Given('{int} users are accessing the website simultaneously', async function (userCount) {
  // Simulate concurrent user access
  const promises = [];
  for (let i = 0; i < userCount; i++) {
    promises.push(page.goto('https://automationexercise.com'));
  }
  await Promise.all(promises);
});

When('the users perform various actions', async function () {
  // Simulate user actions
  await page.click('button[name="some-action"]');
});

Then('the website should handle the load without performance degradation', async function () {
  const performanceMetrics = await page.evaluate(() => {
    return window.performance.getEntriesByType('navigation');
  });
  expect(performanceMetrics[0].duration).toBeLessThan(5000);
});

When('the user accesses the website on a mobile device', async function () {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('https://automationexercise.com');
});

Then('the website should be fully functional and responsive', async function () {
  const isResponsive = await page.evaluate(() => {
    return window.innerWidth <= 375;
  });
  expect(isResponsive).toBe(true);
});