Feature: Edge Cases

  Scenario: Invalid form inputs
    Given the user is on the registration page
    When the user enters invalid details
      | Field       | Value          |
      | Username    |                |
      | Email       |                |
      | Password    |                |
    And the user submits the registration form
    Then the user should see error messages for all fields

  Scenario: Session timeout
    Given the user is logged in
    And the user is inactive for 30 minutes
    When the user tries to perform any action
    Then the user should be redirected to the login page
    And the user should see a message "Session timed out"

  Scenario: Network interruption during registration
    Given the user is on the registration page
    When the user enters valid registration details
      | Field       | Value          |
      | Username    | testuser       |
      | Email       | testuser@example.com |
      | Password    | Password123    |
    And the network connection is lost
    And the user submits the registration form
    Then the user should see an error message "Network error, please try again"