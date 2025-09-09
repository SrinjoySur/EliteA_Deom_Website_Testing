const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is on the contact us page', async function () {
  await page.goto('https://automationexercise.com/contact_us');
});

When('the user enters contact details', async function (dataTable) {
  const data = dataTable.rowsHash();
  await page.fill('input[name="name"]', data.Name);
  await page.fill('input[name="email"]', data.Email);
  await page.fill('input[name="subject"]', data.Subject);
  await page.fill('textarea[name="message"]', data.Message);
});

When('the user submits the contact form', async function () {
  await page.click('button[name="Submit"]');
});

Then('the user should see a confirmation message', async function () {
  await expect(page.locator('text=Success! Your details have been submitted successfully.')).toBeVisible();
});