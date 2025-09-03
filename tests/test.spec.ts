import { test, expect } from '@playwright/test';
import { HomePage } from './HomePage';
import { ClientWorkPage } from './ClientWorkPage';

test('Navigate to Client Work page and verify text', async ({ page }) => {
  const homePage = new HomePage(page);
  const clientWorkPage = new ClientWorkPage(page);

  await homePage.navigate();
  await homePage.clickServices();
  await homePage.clickLearnMore();

  const isClientWorkVisible = await clientWorkPage.isClientWorkVisible();
  expect(isClientWorkVisible).toBe(true);
});
