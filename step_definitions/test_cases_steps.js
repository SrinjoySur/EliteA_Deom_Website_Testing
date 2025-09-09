const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the Test Cases page', async function () {
  await page.goto('https://automationexercise.com/test_cases');
});

When('the user browses through the test case list', async function () {
  const testCaseList = await page.locator('.test-case-list').count();
  expect(testCaseList).toBeGreaterThan(0);
});

Then('the user should see all available test cases for practice', async function () {
  const testCaseCount = await page.locator('.test-case-item').count();
  expect(testCaseCount).toBeGreaterThan(0);
});