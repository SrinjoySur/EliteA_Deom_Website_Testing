Feature: Security Testing

  Scenario: SQL injection prevention
    Given the user is on the login page
    When the user enters "' OR '1'='1" in the username field
    And the user enters "' OR '1'='1" in the password field
    And the user submits the login form
    Then the user should see an error message "Invalid credentials"

  Scenario: Cross-site scripting prevention
    Given the user is on the comment section of a product page
    When the user enters "<script>alert('XSS')</script>" in the comment field
    And the user submits the comment
    Then the user should see an error message "Invalid input"