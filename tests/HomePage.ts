import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.epam.com/');
  }

  async clickServices() {
    await this.page.locator('a[href="/services"]').click();
  }

  async clickLearnMore() {
    await this.page.locator('a[href="/services/client-work"]').click();
  }
}
