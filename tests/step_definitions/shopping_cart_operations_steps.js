const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the product page for {string}', async function (productName) {
  await page.goto(`https://automationexercise.com/product_details/${productName}`);
});

When('the user clicks the {string} button', async function (buttonName) {
  await page.click(`button[name="${buttonName}"]`);
});

Then('the product should be added to the shopping cart', async function () {
  const cartItems = await page.textContent('.cart-items');
  expect(cartItems).toContain('Laptop');
});

Then('the user should see the product in the cart', async function () {
  const cartItems = await page.textContent('.cart-items');
  expect(cartItems).toContain('Laptop');
});

Given('the user has {string} in the shopping cart', async function (productName) {
  await page.goto('https://automationexercise.com/view_cart');
  const cartItems = await page.textContent('.cart-items');
  expect(cartItems).toContain(productName);
});

When('the user clicks the {string} button next to the product', async function (buttonName) {
  await page.click(`button[name="${buttonName}"]`);
});

Then('the product should be removed from the shopping cart', async function () {
  const cartItems = await page.textContent('.cart-items');
  expect(cartItems).not.toContain('Laptop');
});

Then('the user should see an empty cart message', async function () {
  const emptyCartMessage = await page.textContent('.empty-cart-message');
  expect(emptyCartMessage).toContain('Cart is empty!');
});

When('the user updates the quantity to {int}', async function (quantity) {
  await page.fill('input[name="quantity"]', quantity.toString());
});

Then('the cart should reflect the updated quantity', async function () {
  const cartQuantity = await page.inputValue('input[name="quantity"]');
  expect(cartQuantity).toBe('3');
});

Then('the total price should be updated accordingly', async function () {
  const totalPrice = await page.textContent('.total-price');
  expect(totalPrice).toBe('1500');
});

When('the user tries to add {int} units to the cart', async function (quantity) {
  await page.fill('input[name="quantity"]', quantity.toString());
  await page.click('button[name="add-to-cart"]');
});

Then('the user should see an error message {string}', async function (errorMessage) {
  const errorText = await page.textContent('.error-message');
  expect(errorText).toContain(errorMessage);
});