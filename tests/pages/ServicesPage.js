const BasePage = require('./BasePage');

class ServicesPage extends BasePage {
  constructor(page) {
    super(page);
    this.servicesLink = 'text=Services';
  }

  async navigateToServices() {
    await this.page.click(this.servicesLink);
  }
}

module.exports = ServicesPage;