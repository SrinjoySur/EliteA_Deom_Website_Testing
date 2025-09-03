const BasePage = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.homeLink = 'text=Home';
  }

  async navigateToHome() {
    await this.page.click(this.homeLink);
  }
}

module.exports = HomePage;