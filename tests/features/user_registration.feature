Feature: User Registration
  As a new user
  I want to register on the website
  So that I can access personalized features

  Scenario: Successful registration with valid inputs
    Given I am on the registration page
    When I enter valid registration details
      | Field       | Value           |
      | First Name  | John            |
      | Last Name   | Doe             |
      | Email       | john.doe@example.com |
      | Password    | Password123     |
    And I submit the registration form
    Then I should see a registration success message

  Scenario: Registration with invalid email format
    Given I am on the registration page
    When I enter invalid registration details
      | Field       | Value           |
      | First Name  | John            |
      | Last Name   | Doe             |
      | Email       | john.doe@com    |
      | Password    | Password123     |
    And I submit the registration form
    Then I should see an error message indicating invalid email format

  Scenario: Registration with missing mandatory fields
    Given I am on the registration page
    When I enter incomplete registration details
      | Field       | Value           |
      | First Name  | John            |
      | Last Name   | Doe             |
      | Email       |                 |
      | Password    | Password123     |
    And I submit the registration form
    Then I should see an error message indicating missing mandatory fields

  Scenario: Registration with password less than minimum length
    Given I am on the registration page
    When I enter invalid registration details
      | Field       | Value           |
      | First Name  | John            |
      | Last Name   | Doe             |
      | Email       | john.doe@example.com |
      | Password    | Pass            |
    And I submit the registration form
    Then I should see an error message indicating password too short