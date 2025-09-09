Feature: User Registration

  Scenario: User successfully registers
    Given the user is on the registration page
    When the user enters valid details and submits the form
    Then the user should be registered successfully
