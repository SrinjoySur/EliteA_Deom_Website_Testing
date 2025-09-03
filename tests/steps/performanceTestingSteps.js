const { Given, Then } = require('@cucumber/cucumber');
const HomePage = require('../pageObjects/HomePage');

Given('the user is on the homepage', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.navigate();
});

Then('the page should load within {int} seconds', async function (seconds) {
  const startTime = Date.now();
  await this.page.waitForLoadState('load');
  const endTime = Date.now();
  const loadTime = (endTime - startTime) / 1000;
  expect(loadTime).toBeLessThan(seconds);
});