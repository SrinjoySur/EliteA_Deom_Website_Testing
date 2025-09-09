Feature: Contact Us

  Scenario: Submit contact form
    Given the user is on the contact us page
    When the user enters contact details
      | Field       | Value           |
      | Name        | Test User       |
      | Email       | testuser@example.com |
      | Subject     | Test Subject    |
      | Message     | This is a test message. |
    And the user submits the contact form
    Then the user should see a confirmation message