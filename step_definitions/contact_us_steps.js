const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the Contact Us page', async function () {
  await page.goto('https://automationexercise.com/contact_us');
});

When('the user enters their name, email, subject, and message', async function () {
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'testuser@example.com');
  await page.fill('input[name="subject"]', 'Test Subject');
  await page.fill('textarea[name="message"]', 'This is a test message');
});

When('the user clicks on the Submit button', async function () {
  await page.click('button[type="submit"]');
});

Then('the user should see a confirmation message indicating the form was submitted successfully', async function () {
  const successMessage = await page.locator('.alert-success').textContent();
  expect(successMessage).toContain('Your message has been sent successfully');
});