Feature: User Registration

  Scenario: Successful user registration
    Given the user is on the registration page
    When the user enters valid registration details
    And clicks on the "Register" button
    Then the user should be registered successfully
    And should see a confirmation message

  Scenario: Registration with existing email
    Given the user is on the registration page
    When the user enters an email that is already registered
    And clicks on the "Register" button
    Then the user should see an error message "Email already exists"

  Scenario: Registration with invalid email format
    Given the user is on the registration page
    When the user enters an invalid email format
    And clicks on the "Register" button
    Then the user should see an error message "Invalid email format"

  Scenario: Registration with missing mandatory fields
    Given the user is on the registration page
    When the user leaves mandatory fields empty
    And clicks on the "Register" button
    Then the user should see an error message "Please fill out all mandatory fields"

Feature: User Login

  Scenario: Successful user login
    Given the user is on the login page
    When the user enters valid login credentials
    And clicks on the "Login" button
    Then the user should be logged in successfully
    And should see the homepage

  Scenario: Login with incorrect password
    Given the user is on the login page
    When the user enters an incorrect password
    And clicks on the "Login" button
    Then the user should see an error message "Incorrect password"

  Scenario: Login with non-existent email
    Given the user is on the login page
    When the user enters an email that is not registered
    And clicks on the "Login" button
    Then the user should see an error message "Email not found"

  Scenario: Login with empty fields
    Given the user is on the login page
    When the user leaves the email and password fields empty
    And clicks on the "Login" button
    Then the user should see an error message "Please enter your email and password"

Feature: Product Search

  Scenario: Successful product search
    Given the user is on the homepage
    When the user enters a valid product name in the search bar
    And clicks on the "Search" button
    Then the user should see the search results for the product

  Scenario: Search with no results
    Given the user is on the homepage
    When the user enters a product name that does not exist
    And clicks on the "Search" button
    Then the user should see a message "No products found"

  Scenario: Search with special characters
    Given the user is on the homepage
    When the user enters special characters in the search bar
    And clicks on the "Search" button
    Then the user should see a message "Invalid search query"

  Scenario: Search with empty search bar
    Given the user is on the homepage
    When the user leaves the search bar empty
    And clicks on the "Search" button
    Then the user should see a message "Please enter a product name"

Feature: Adding Products to Cart

  Scenario: Successfully adding a product to the cart
    Given the user is on the product page
    When the user clicks on the "Add to Cart" button
    Then the product should be added to the cart
    And the user should see the cart updated with the product

  Scenario: Adding out-of-stock product to the cart
    Given the user is on the product page
    When the product is out of stock
    And the user clicks on the "Add to Cart" button
    Then the user should see a message "Product is out of stock"

  Scenario: Adding product with invalid quantity
    Given the user is on the product page
    When the user enters an invalid quantity
    And clicks on the "Add to Cart" button
    Then the user should see a message "Invalid quantity"

  Scenario: Adding product with maximum quantity
    Given the user is on the product page
    When the user enters the maximum allowed quantity
    And clicks on the "Add to Cart" button
    Then the product should be added to the cart
    And the user should see the cart updated with the product

Feature: Checkout

  Scenario: Successful checkout
    Given the user is on the cart page
    When the user clicks on the "Checkout" button
    And enters valid payment and shipping details
    Then the user should see a confirmation message "Order placed successfully"

  Scenario: Checkout with invalid payment details
    Given the user is on the cart page
    When the user clicks on the "Checkout" button
    And enters invalid payment details
    Then the user should see an error message "Invalid payment details"

  Scenario: Checkout with missing shipping details
    Given the user is on the cart page
    When the user clicks on the "Checkout" button
    And leaves shipping details empty
    Then the user should see an error message "Please enter shipping details"

  Scenario: Checkout with expired credit card
    Given the user is on the cart page
    When the user clicks on the "Checkout" button
    And enters an expired credit card
    Then the user should see an error message "Credit card expired"

Feature: Performance Testing

  Scenario: Load testing for homepage
    Given the user is on the homepage
    When 1000 users access the homepage simultaneously
    Then the homepage should load within 2 seconds

  Scenario: Stress testing for checkout process
    Given the user is on the cart page
    When 500 users perform checkout simultaneously
    Then the checkout process should complete within 5 seconds

  Scenario: Scalability testing for product search
    Given the user is on the homepage
    When 2000 users perform product search simultaneously
    Then the search results should be displayed within 3 seconds