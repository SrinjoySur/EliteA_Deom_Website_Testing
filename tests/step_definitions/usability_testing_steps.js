const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am accessing the website on a mobile device', async function () {
  await page.emulate({ viewport: { width: 375, height: 667 }, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1' });
});

When('I navigate to the homepage', async function () {
  await page.goto('https://automationexercise.com');
});

Then('the website should be responsive and display correctly', async function () {
  const isResponsive = await page.evaluate(() => {
    return window.innerWidth <= 375;
  });
  expect(isResponsive).toBe(true);
});

Given('I am a user with visual impairments', async function () {
  // Simulate visual impairments
});

When('I use screen reader software to navigate the website', async function () {
  // Simulate screen reader navigation
});

Then('the website should be accessible and provide appropriate text alternatives', async function () {
  const altText = await page.evaluate(() => {
    const images = document.querySelectorAll('img');
    return Array.from(images).map(img => img.alt);
  });
  altText.forEach(text => {
    expect(text).not.toBe('');
  });
});