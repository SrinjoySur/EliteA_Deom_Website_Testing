Feature: Product Search
  As a user
  I want to search for products
  So that I can find items I want to purchase

  Scenario: Search with valid product name
    Given I am on the homepage
    When I enter "Laptop" in the search bar
    And I click the search button
    Then I should see a list of products related to "Laptop"

  Scenario: Search with invalid product name
    Given I am on the homepage
    When I enter "InvalidProductName" in the search bar
    And I click the search button
    Then I should see a message indicating no products found

  Scenario: Search with special characters
    Given I am on the homepage
    When I enter "!@#$%^&*" in the search bar
    And I click the search button
    Then I should see a message indicating invalid search query

  Scenario: Search with empty input
    Given I am on the homepage
    When I leave the search bar empty
    And I click the search button
    Then I should see a message indicating no search query entered