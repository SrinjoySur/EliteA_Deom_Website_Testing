Feature: Product Search

  Scenario: Search with valid product name
    Given the user is on the search page
    When the user enters a valid product name "Laptop"
    And the user submits the search form
    Then the user should see search results containing "Laptop"

  Scenario: Search with invalid product name
    Given the user is on the search page
    When the user enters an invalid product name "XYZ123"
    And the user submits the search form
    Then the user should see a message indicating no results found

  Scenario: Search with empty input
    Given the user is on the search page
    When the user submits the search form with an empty input
    Then the user should see an error message indicating the search field cannot be empty