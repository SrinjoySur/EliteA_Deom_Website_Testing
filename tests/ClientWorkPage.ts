import { Page } from '@playwright/test';

export class ClientWorkPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isClientWorkVisible() {
    return await this.page.evaluate(() => document.body.innerText.includes('Client Work'));
  }
}
