Feature: Shopping Cart

  Scenario: Add product to cart
    Given the user is on the product page
    When the user adds the product to the cart
    Then the product should be added to the cart
    And the user should see the product in the cart

  Scenario: Remove product from cart
    Given the user has a product in the cart
    When the user removes the product from the cart
    Then the product should be removed from the cart
    And the cart should be empty

  Scenario: Update product quantity in cart
    Given the user has a product in the cart
    When the user updates the product quantity to 3
    Then the product quantity should be updated to 3 in the cart