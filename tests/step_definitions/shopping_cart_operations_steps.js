const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am viewing a product page', async function () {
  await page.goto('https://automationexercise.com/product_details/1');
});

When('I click the "Add to Cart" button', async function () {
  await page.click('button.add-to-cart');
});

Then('the product should be added to my shopping cart', async function () {
  const cartItems = await page.locator('.cart-items').textContent();
  expect(cartItems).toContain('Product Name');
});

Given('I have products in my shopping cart', async function () {
  await page.goto('https://automationexercise.com/view_cart');
  await page.click('button.add-to-cart');
});

When('I click the "Remove" button next to a product', async function () {
  await page.click('button.remove-from-cart');
});

Then('the product should be removed from my shopping cart', async function () {
  const cartItems = await page.locator('.cart-items').textContent();
  expect(cartItems).not.toContain('Product Name');
});

When('I change the quantity of a product to {int}', async function (quantity) {
  await page.fill('input.quantity', quantity.toString());
});

When('I click the "Update Cart" button', async function () {
  await page.click('button.update-cart');
});

Then('the quantity of the product should be updated to {int}', async function (quantity) {
  const cartQuantity = await page.locator('.cart-quantity').textContent();
  expect(cartQuantity).toBe(quantity.toString());
});

When('I enter a quantity of {int}', async function (quantity) {
  await page.fill('input.quantity', quantity.toString());
});

Then('I should see an error message indicating maximum quantity exceeded', async function () {
  const errorMessage = await page.locator('.alert-danger').textContent();
  expect(errorMessage).toContain('Maximum quantity exceeded');
});

Given('I have no products in my shopping cart', async function () {
  await page.goto('https://automationexercise.com/view_cart');
});

Then('I should see a message indicating the cart is empty', async function () {
  const emptyCartMessage = await page.locator('.alert-info').textContent();
  expect(emptyCartMessage).toContain('Cart is empty');
});