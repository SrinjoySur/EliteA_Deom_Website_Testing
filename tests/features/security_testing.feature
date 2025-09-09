Feature: Security Testing
  As a user
  I want my data to be secure
  So that I can trust the website with my personal information

  Scenario: SQL injection prevention
    Given I am on the login page
    When I enter "' OR '1'='1" in the username field
    And I enter "' OR '1'='1" in the password field
    And I submit the login form
    Then I should see an error message indicating invalid credentials

  Scenario: Cross-site scripting prevention
    Given I am on the comment section of a product page
    When I enter "<script>alert('XSS')</script>" in the comment field
    And I submit the comment
    Then the comment should be sanitized and not execute any script