Feature: Product Browsing
  Scenario: User views all products
    Given the user is on the Products page
    When the user browses through the product list
    Then the user should see all available products

  Scenario: User searches for a product
    Given the user is on the Products page
    When the user enters a product name in the search box
    And the user clicks on the search button
    Then the user should see the search results for the product