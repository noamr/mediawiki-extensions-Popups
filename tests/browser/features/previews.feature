@chrome @en.m.wikipedia.beta.wmflabs.org @firefox @test2.m.wikipedia.org @vagrant
Feature: Previews
  Background:
    Given the test page has been created
    And I am logged in
    And I have enabled the beta feature
    And I am on the "Popups test page" page
    And the RL module has loaded

  Scenario: Dwelling on a valid link shows a preview
    When I dwell on the first valid link
    Then I should see a preview

  Scenario: Abandoning the link hides the preview
    When I dwell on the first valid link
    And I abandon the link
    Then I should not see a preview
