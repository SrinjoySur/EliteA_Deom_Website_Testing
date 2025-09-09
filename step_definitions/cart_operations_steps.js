const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the Products page', async function () {
  await page.goto('https://automationexercise.com/products');
});

When('the user clicks on the Add to cart button for a product', async function () {
  await page.click('.add-to-cart-button');
});

Then('the product should be added to the cart', async function () {
  const cartItemCount = await page.locator('.cart-item-count').textContent();
  expect(cartItemCount).toBe('1');
});

When('the user clicks on the Cart link', async function () {
  await page.click('.cart-link');
});

Then('the user should see the items in their cart', async function () {
  const cartItems = await page.locator('.cart-items').count();
  expect(cartItems).toBeGreaterThan(0);
});

Given('the user is on the Cart page', async function () {
  await page.goto('https://automationexercise.com/view_cart');
});

When('the user clicks on the Remove button for a product', async function () {
  await page.click('.remove-button');
});

Then('the product should be removed from the cart', async function () {
  const cartItemCount = await page.locator('.cart-item-count').textContent();
  expect(cartItemCount).toBe('0');
});