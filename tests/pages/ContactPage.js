const BasePage = require('./BasePage');

class ContactPage extends BasePage {
  constructor(page) {
    super(page);
    this.contactLink = 'text=Contact';
  }

  async navigateToContact() {
    await this.page.click(this.contactLink);
  }
}

module.exports = ContactPage;