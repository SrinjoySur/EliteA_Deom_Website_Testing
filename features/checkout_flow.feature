Feature: Checkout Flow
  Scenario: User completes checkout with valid payment
    Given the user is on the Cart page
    When the user clicks on the Checkout button
    And the user enters valid payment details
    Then the user should complete the checkout successfully