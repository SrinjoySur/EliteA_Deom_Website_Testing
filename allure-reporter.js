const { AllureRuntime } = require('allure-js-commons');
const { CucumberJSAllureFormatter } = require('allure-cucumberjs');

class AllureReporter extends CucumberJSAllureFormatter {
  constructor(options) {
    super(
      options,
      new AllureRuntime({ resultsDir: './allure-results' }),
      {
        labels: {
          issue: [/@bug_(.*)/],
          epic: [/@feature_(.*)/],
        },
      }
    );
  }
}

module.exports = AllureReporter;