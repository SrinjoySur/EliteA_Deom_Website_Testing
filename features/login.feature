Feature: User Login

  Scenario: User successfully logs in
    Given the user is on the login page
    When the user enters valid credentials and submits the form
    Then the user should be logged in successfully
