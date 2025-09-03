const BasePage = require('./BasePage');

class BlogPage extends BasePage {
  constructor(page) {
    super(page);
    this.blogLink = 'text=Blog';
  }

  async navigateToBlog() {
    await this.page.click(this.blogLink);
  }
}

module.exports = BlogPage;