const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const RegistrationPage = require('../pages/RegistrationPage');

test.describe('User Registration', () => {
  test('Successful User Registration', async ({ page }) => {
    const homePage = new HomePage(page);
    const registrationPage = new RegistrationPage(page);

    await homePage.navigate();
    await homePage.clickSignup();

    await registrationPage.register('John', 'Doe', 'john.doe@mail.com', 'Password123');
    await expect(page.locator('text=Registration successful')).toBeVisible();
    await expect(page).toHaveURL('/login');
  });

  test('Registration with Existing Email', async ({ page }) => {
    const homePage = new HomePage(page);
    const registrationPage = new RegistrationPage(page);

    await homePage.navigate();
    await homePage.clickSignup();

    await registrationPage.register('Jane', 'Doe', 'john.doe@mail.com', 'Password123');
    await expect(page.locator('text=Email already exists')).toBeVisible();
  });

  test('Registration with Invalid Email', async ({ page }) => {
    const homePage = new HomePage(page);
    const registrationPage = new RegistrationPage(page);

    await homePage.navigate();
    await homePage.clickSignup();

    await registrationPage.register('Jane', 'Doe', 'jane.doe@mail', 'Password123');
    await expect(page.locator('text=Invalid email format')).toBeVisible();
  });
});
