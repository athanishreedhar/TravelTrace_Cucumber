@Leads
Feature: Leads creation
  User want to use this template for Leads creation

  Background: User navigates to Application URL
    Given i am on the login page URL"http://localhost:8888"
    When user enters an username as "admin"
    And user enters an password as "password"
    And click on login button
    #Then User should see home page 

  @sanity @regression
  Scenario: Creation of Leads
    When User click on leads link
    And User clicks on plus icon to create lead
    And User selects First name title as "Mr."
    And User enters First name  "James"
    And User enters Second name "Bond"
    And User enters Company name "Dcompany"
    And user enters Title "QALead"
    And User selects the Lead source "Employee"
    And user Selects Industry "Banking"
    And User entrs Annual Revenue: ($) "100"
    And User enters No of Employees "2"
    And User enters secondary Email "infotest@gmail.com"
    And User enters Street "MG Road"
    And User enters Postal code "560037"
    And User enters Country "INDIA"
    And User enters Description "Automation test description"
    And user enters Phone "9999999999"
    And User enters mobileNo "9999999999"
    And User enters fax "Fax Details"
    And User enters Email "infotest@gmail.com"
    And User enters Website "Automation Website"
    And User selects Lead Status "Warm"
    And user selects Assigned To "Administrator"
    And user clicks on Save button
    Then User should see Lead creation Success message
    And user should have all users information 
    #Then I validate the outcomes
    #And check more outcomes

  