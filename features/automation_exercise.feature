Feature: Automation Exercise

  Scenario: Verify home page title
    Given I navigate to the home page
    Then I should see the title "Automation Exercise"

  Scenario: Verify login functionality
    Given I navigate to the login page
    When I enter username "testuser" and password "password"
    And I click on the login button
    Then I should see the message "Login successful"