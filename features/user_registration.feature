Feature: User Registration

  Scenario: User successfully registers
    Given the user is on the registration page
    When the user enters valid registration details
    And the user clicks on the "Register" button
    Then the user should see a success message
    And the user should be redirected to the login page

  Scenario: User fails to register with invalid details
    Given the user is on the registration page
    When the user enters invalid registration details
    And the user clicks on the "Register" button
    Then the user should see an error message