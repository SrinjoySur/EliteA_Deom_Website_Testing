Feature: API Testing
  Scenario: User views API list
    Given the user is on the API Testing page
    When the user browses through the API list
    Then the user should see all available APIs for testing