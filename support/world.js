const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.page = null;
    this.homePage = null;
    this.loginPage = null;
  }
}

setWorldConstructor(CustomWorld);