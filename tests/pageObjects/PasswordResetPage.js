class PasswordResetPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.resetButton = page.locator('#reset');
  }

  async navigate() {
    await this.page.goto('https://example.com/reset');
  }

  async resetPassword(email) {
    await this.emailInput.fill(email);
    await this.resetButton.click();
  }
}

module.exports = PasswordResetPage;