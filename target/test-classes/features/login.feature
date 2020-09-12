@Login
Feature: Sign in

  Background: User navigates to Application URL
    Given i am on the login page URL"http://localhost:8888"
    Then I should see login page

  @Sanity
  Scenario: Sign in with Valid credentials
    When user enters an username as "admin"
    And user enters an password as "password"
    And click on login button
    Then User should login successfully
    And user should see administrator test message on home page

  @Sanity
  Scenario Outline: Sign in with Valid credentials
    When user enters an username as "<username>"
    And user enters an password as "<password>"
    And click on login button
    Then User should login successfully
    And user should see administrator test message on home page

    Examples: 
      | username | password |
      | admin    | password |
			|admin12	 |password12  |
