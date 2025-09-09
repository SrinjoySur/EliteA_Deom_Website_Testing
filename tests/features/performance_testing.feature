Feature: Performance Testing

  Scenario: Page load performance
    Given the user is on the homepage
    When the user navigates to the product page for "Laptop"
    Then the page should load within 2 seconds

  Scenario: Concurrent user access
    Given 100 users are accessing the website simultaneously
    When the users perform various actions
    Then the website should handle the load without performance degradation

  Scenario: Responsiveness on different devices
    Given the user is on the homepage
    When the user accesses the website on a mobile device
    Then the website should be fully functional and responsive