const { test, expect } = require('@playwright/test');

test.describe('User Authentication', () => {
  test('User logs in with valid credentials', async ({ page }) => {
    await page.goto('http://example.com/login');
    await page.fill('#username', 'validUser');
    await page.fill('#password', 'validPassword');
    await page.click('#loginButton');
    expect(await page.title()).toBe('Dashboard');
    expect(await page.locator('.welcome-message').isVisible()).toBeTruthy();
  });

  test('User logs in with invalid credentials', async ({ page }) => {
    await page.goto('http://example.com/login');
    await page.fill('#username', 'invalidUser');
    await page.fill('#password', 'invalidPassword');
    await page.click('#loginButton');
    expect(await page.locator('.error-message').isVisible()).toBeTruthy();
    expect(await page.title()).toBe('Login');
  });

  test('User logs out', async ({ page }) => {
    await page.goto('http://example.com/dashboard');
    await page.click('#logoutButton');
    expect(await page.title()).toBe('Home');
    expect(await page.locator('.logout-message').isVisible()).toBeTruthy();
  });
});