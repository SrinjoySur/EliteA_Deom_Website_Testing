Feature: User Registration

  Scenario: Successful user registration
    Given the user is on the registration page
    When the user enters valid registration details
      | Field       | Value          |
      | Username    | testuser       |
      | Email       | testuser@example.com |
      | Password    | Password123    |
    And the user submits the registration form
    Then the user should see a registration success message

  Scenario: Registration with existing email
    Given the user is on the registration page
    When the user enters registration details with an existing email
      | Field       | Value          |
      | Username    | newuser        |
      | Email       | testuser@example.com |
      | Password    | Password123    |
    And the user submits the registration form
    Then the user should see an error message "Email already exists"

  Scenario: Registration with invalid email format
    Given the user is on the registration page
    When the user enters registration details with an invalid email format
      | Field       | Value          |
      | Username    | newuser        |
      | Email       | invalid-email  |
      | Password    | Password123    |
    And the user submits the registration form
    Then the user should see an error message "Invalid email format"

  Scenario: Registration with weak password
    Given the user is on the registration page
    When the user enters registration details with a weak password
      | Field       | Value          |
      | Username    | newuser        |
      | Email       | newuser@example.com |
      | Password    | 12345          |
    And the user submits the registration form
    Then the user should see an error message "Password is too weak"