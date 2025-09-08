const { expect } = require('@playwright/test');

class PasswordResetPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.resetButton = page.locator('button[type="submit"]');
  }

  async resetPassword(email) {
    await this.emailInput.fill(email);
    await this.resetButton.click();
  }
}

module.exports = PasswordResetPage;