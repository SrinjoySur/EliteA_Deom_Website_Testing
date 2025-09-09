Feature: User Login
  Scenario: User logs in with correct email and password
    Given the user is on the Signup / Login page
    When the user enters their email address and password
    And the user clicks on the Login button
    Then the user should be logged in successfully

  Scenario: User logs in with incorrect email and password
    Given the user is on the Signup / Login page
    When the user enters an incorrect email address and password
    And the user clicks on the Login button
    Then the user should see an error message indicating invalid login credentials