const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const PasswordResetPage = require('../pages/PasswordResetPage');

test.describe('Password Reset', () => {
  test('Successful Password Reset', async ({ page }) => {
    const homePage = new HomePage(page);
    const passwordResetPage = new PasswordResetPage(page);

    await homePage.navigate();
    await homePage.clickLogin();
    await page.click('text=Forgot Password');

    await passwordResetPage.resetPassword('john.doe@mail.com');
    await expect(page.locator('text=Password reset email sent')).toBeVisible();
  });

  test('Password Reset with Non-Existent Email', async ({ page }) => {
    const homePage = new HomePage(page);
    const passwordResetPage = new PasswordResetPage(page);

    await homePage.navigate();
    await homePage.clickLogin();
    await page.click('text=Forgot Password');

    await passwordResetPage.resetPassword('non.existent@mail.com');
    await expect(page.locator('text=Email not found')).toBeVisible();
  });
});
