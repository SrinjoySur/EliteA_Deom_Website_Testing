Feature: Performance Testing
  As a user
  I want the website to load quickly
  So that I can have a smooth browsing experience

  Scenario: Page load performance
    Given I am on the homepage
    When I navigate to the product listing page
    Then the page should load within 2 seconds

  Scenario: Concurrent user access
    Given multiple users are accessing the website simultaneously
    When 100 users perform searches concurrently
    Then the website should handle the load without performance degradation