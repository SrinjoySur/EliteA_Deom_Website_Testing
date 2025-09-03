const BasePage = require('./BasePage');

class AboutPage extends BasePage {
  constructor(page) {
    super(page);
    this.aboutLink = 'text=About';
  }

  async navigateToAbout() {
    await this.page.click(this.aboutLink);
  }
}

module.exports = AboutPage;