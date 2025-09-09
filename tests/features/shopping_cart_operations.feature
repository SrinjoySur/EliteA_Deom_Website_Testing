Feature: Shopping Cart Operations
  As a user
  I want to manage my shopping cart
  So that I can review and modify my selected items before checkout

  Scenario: Add product to cart
    Given I am viewing a product page
    When I click the "Add to Cart" button
    Then the product should be added to my shopping cart

  Scenario: Remove product from cart
    Given I have products in my shopping cart
    When I click the "Remove" button next to a product
    Then the product should be removed from my shopping cart

  Scenario: Update product quantity in cart
    Given I have products in my shopping cart
    When I change the quantity of a product to 3
    And I click the "Update Cart" button
    Then the quantity of the product should be updated to 3

  Scenario: Attempt to add more than maximum quantity
    Given I am viewing a product page
    When I enter a quantity of 1000
    And I click the "Add to Cart" button
    Then I should see an error message indicating maximum quantity exceeded

  Scenario: View empty cart
    Given I have no products in my shopping cart
    When I view my shopping cart
    Then I should see a message indicating the cart is empty