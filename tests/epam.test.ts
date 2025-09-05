import { test, expect } from '@playwright/test';
import { EpamPage } from '../pages/EpamPage';

test('Verify Client Work visibility on EPAM website', async ({ page }) => {
  const epamPage = new EpamPage(page);

  // Navigate to EPAM website
  await epamPage.navigate();

  // Select "Services" from the header menu
  await epamPage.selectServices();

  // Click "Explore Our Client Work" link
  await epamPage.clickExploreClientWork();

  // Verify that the "Client Work" text is visible on the page
  const isVisible = await epamPage.isClientWorkVisible();
  expect(isVisible).toBe(true);
});
