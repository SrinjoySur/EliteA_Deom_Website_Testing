Feature: Cart Operations
  Scenario: User adds item to cart
    Given the user is on the Products page
    When the user clicks on the Add to cart button for a product
    Then the product should be added to the cart

  Scenario: User views the cart
    Given the user is on the Products page
    When the user clicks on the Cart link
    Then the user should see the items in their cart

  Scenario: User removes item from cart
    Given the user is on the Cart page
    When the user clicks on the Remove button for a product
    Then the product should be removed from the cart