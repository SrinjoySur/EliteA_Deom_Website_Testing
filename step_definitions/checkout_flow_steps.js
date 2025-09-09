const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the Cart page', async function () {
  await page.goto('https://automationexercise.com/view_cart');
});

When('the user clicks on the Checkout button', async function () {
  await page.click('.checkout-button');
});

When('the user enters valid payment details', async function () {
  await page.fill('input[name="card_number"]', '4111111111111111');
  await page.fill('input[name="expiry_date"]', '12/23');
  await page.fill('input[name="cvv"]', '123');
});

Then('the user should complete the checkout successfully', async function () {
  const successMessage = await page.locator('.alert-success').textContent();
  expect(successMessage).toContain('Your order has been placed successfully');
});