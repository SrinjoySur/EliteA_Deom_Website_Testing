Feature: User Registration

  Scenario: Successful user registration
    Given the user is on the registration page
    When the user enters valid registration details
      | Field       | Value           |
      | Name        | Test User       |
      | Email       | testuser@example.com |
    And the user submits the registration form
    Then the user should be registered successfully
    And the user should see a confirmation message

  Scenario: Registration with existing email
    Given the user is on the registration page
    When the user enters registration details with an existing email
      | Field       | Name            |
      | Value       | Test User       |
      | Field       | Email           |
      | Value       | testuser@example.com |
    And the user submits the registration form
    Then the user should see an error message indicating the email is already in use

  Scenario: Registration with invalid email format
    Given the user is on the registration page
    When the user enters registration details with an invalid email format
      | Field       | Name            |
      | Value       | Invalid User    |
      | Field       | Email           |
      | Value       | invalidemail    |
    And the user submits the registration form
    Then the user should see an error message indicating the email format is invalid