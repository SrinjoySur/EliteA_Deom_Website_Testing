const { AllureReporter } = require('@playwright/test/reporter');

module.exports = {
  reporter: new AllureReporter({
    resultsDir: 'allure-results',
  }),
};