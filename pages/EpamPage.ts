import { Page } from 'playwright';

export class EpamPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.epam.com/');
  }

  async selectServices() {
    await this.page.click('header >> text=Services');
  }

  async clickExploreClientWork() {
    await this.page.click('text=Explore Our Client Work');
  }

  async isClientWorkVisible(): Promise<boolean> {
    return this.page.isVisible('text=Client Work');
  }
}
