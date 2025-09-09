Feature: User Registration
  Scenario: User successfully registers
    Given the user is on the Signup / Login page
    When the user enters their name and email address
    And the user clicks on the Signup button
    Then the user should be registered successfully

  Scenario: User registers with existing email
    Given the user is on the Signup / Login page
    When the user enters an existing email address
    And the user clicks on the Signup button
    Then the user should see an error message indicating the email is already registered