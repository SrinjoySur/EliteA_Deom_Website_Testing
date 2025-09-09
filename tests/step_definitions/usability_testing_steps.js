const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the homepage', async function () {
  await page.goto('https://automationexercise.com');
});

When('the user navigates to different sections of the website', async function () {
  await page.click('a[href="/products"]');
  await page.click('a[href="/view_cart"]');
  await page.click('a[href="/contact_us"]');
});

Then('the navigation should be intuitive and easy to use', async function () {
  const navigationLinks = await page.$$eval('nav a', links => links.map(link => link.textContent));
  expect(navigationLinks).toEqual(['Home', 'Products', 'Cart', 'Contact us']);
});

When('the user uses screen reader software', async function () {
  // Simulate screen reader usage
  const accessibilityTree = await page.accessibility.snapshot();
  expect(accessibilityTree).toBeDefined();
});

Then('the website should be accessible and readable by the screen reader', async function () {
  const accessibilityTree = await page.accessibility.snapshot();
  expect(accessibilityTree).toBeDefined();
  expect(accessibilityTree.name).toBe('Automation Exercise');
});