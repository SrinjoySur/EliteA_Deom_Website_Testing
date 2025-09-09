Feature: Product Search

  Scenario: Search with valid product name
    Given the user is on the homepage
    When the user enters "Laptop" in the search bar
    And the user clicks the search button
    Then the user should see a list of products related to "Laptop"

  Scenario: Search with invalid product name
    Given the user is on the homepage
    When the user enters "InvalidProductName" in the search bar
    And the user clicks the search button
    Then the user should see a message "No products found"

  Scenario: Search with special characters
    Given the user is on the homepage
    When the user enters "!@#$%" in the search bar
    And the user clicks the search button
    Then the user should see a message "No products found"