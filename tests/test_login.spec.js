const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

test.describe('User Login', () => {
  test('Successful User Login', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigate();
    await homePage.clickLogin();

    await loginPage.login('john.doe@mail.com', 'Password123');
    await expect(page).toHaveURL('/dashboard');
  });

  test('Login with Incorrect Password', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigate();
    await homePage.clickLogin();

    await loginPage.login('john.doe@mail.com', 'WrongPassword');
    await expect(page.locator('text=Incorrect password')).toBeVisible();
  });

  test('Login with Non-Existent Email', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navigate();
    await homePage.clickLogin();

    await loginPage.login('non.existent@mail.com', 'Password123');
    await expect(page.locator('text=Email not found')).toBeVisible();
  });
});
