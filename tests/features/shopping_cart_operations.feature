Feature: Shopping Cart Operations

  Scenario: Add product to cart
    Given the user is on the product page for "Laptop"
    When the user clicks the "Add to Cart" button
    Then the product should be added to the shopping cart
    And the user should see the product in the cart

  Scenario: Remove product from cart
    Given the user has "Laptop" in the shopping cart
    When the user clicks the "Remove" button next to the product
    Then the product should be removed from the shopping cart
    And the user should see an empty cart message

  Scenario: Update product quantity in cart
    Given the user has "Laptop" in the shopping cart
    When the user updates the quantity to 3
    Then the cart should reflect the updated quantity
    And the total price should be updated accordingly

  Scenario: Attempt to add more than maximum quantity
    Given the user is on the product page for "Laptop"
    When the user tries to add 100 units to the cart
    Then the user should see an error message "Maximum quantity exceeded"