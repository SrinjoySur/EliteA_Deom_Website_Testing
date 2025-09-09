Feature: Usability Testing
  As a user
  I want the website to be easy to use
  So that I can navigate and perform actions intuitively

  Scenario: Responsive design on different devices
    Given I am accessing the website on a mobile device
    When I navigate to the homepage
    Then the website should be responsive and display correctly

  Scenario: Accessibility compliance
    Given I am a user with visual impairments
    When I use screen reader software to navigate the website
    Then the website should be accessible and provide appropriate text alternatives