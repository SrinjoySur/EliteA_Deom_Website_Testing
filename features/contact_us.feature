Feature: Contact Us
  Scenario: User submits contact form
    Given the user is on the Contact Us page
    When the user enters their name, email, subject, and message
    And the user clicks on the Submit button
    Then the user should see a confirmation message indicating the form was submitted successfully