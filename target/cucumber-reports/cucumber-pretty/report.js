$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Leads.feature");
formatter.feature({
  "line": 2,
  "name": "Leads creation",
  "description": "User want to use this template for Leads creation",
  "id": "leads-creation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Leads"
    }
  ]
});
formatter.before({
  "duration": 8231756400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "i am on the login page URL\"http://localhost:8888\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters an username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters an password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888",
      "offset": 27
    }
  ],
  "location": "LoginPageStepDefinition.i_am_on_the_login_page_URL(String)"
});
formatter.result({
  "duration": 1865584600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 28
    }
  ],
  "location": "LoginPageStepDefinition.user_enters_an_username_as(String)"
});
formatter.result({
  "duration": 113578000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 28
    }
  ],
  "location": "LoginPageStepDefinition.user_enters_an_password_as(String)"
});
formatter.result({
  "duration": 112873900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 4534648499,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "#Then User should see home page"
    }
  ],
  "line": 13,
  "name": "Creation of Leads",
  "description": "",
  "id": "leads-creation;creation-of-leads",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks on plus icon to create lead",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects First name title as \"Mr.\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters First name  \"James\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters Second name \"Bond\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters Company name \"Dcompany\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters Title \"QALead\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User selects the Lead source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Selects Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User entrs Annual Revenue: ($) \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters No of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enters secondary Email \"infotest@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enters Street \"MG Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User enters Postal code \"560037\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User enters Country \"INDIA\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User enters Description \"Automation test description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user enters Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User enters mobileNo \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User enters fax \"Fax Details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User enters Email \"infotest@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User enters Website \"Automation Website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User selects Lead Status \"Warm\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user selects Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user clicks on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User should see Lead creation Success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user should have all users information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.user_click_on_leads_link()"
});
formatter.result({
  "duration": 7497932499,
  "status": "passed"
});
formatter.match({
  "location": "LeadsCreationStepDefinition.user_clicks_on_plus_icon_to_create_lead()"
});
formatter.result({
  "duration": 2767132400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 34
    }
  ],
  "location": "LeadsCreationStepDefinition.user_selects_First_name_title_as(String)"
});
formatter.result({
  "duration": 305092400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 25
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_First_name(String)"
});
formatter.result({
  "duration": 116877800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bond",
      "offset": 25
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_Second_name(String)"
});
formatter.result({
  "duration": 165603499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dcompany",
      "offset": 26
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_Company_name(String)"
});
formatter.result({
  "duration": 125069500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QALead",
      "offset": 19
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_Title(String)"
});
formatter.result({
  "duration": 126075100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 30
    }
  ],
  "location": "LeadsCreationStepDefinition.user_selects_the_Lead_source(String)"
});
formatter.result({
  "duration": 113430801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 23
    }
  ],
  "location": "LeadsCreationStepDefinition.user_Selects_Industry(String)"
});
formatter.result({
  "duration": 118172999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 32
    }
  ],
  "location": "LeadsCreationStepDefinition.user_entrs_Annual_Revenue_$(String)"
});
formatter.result({
  "duration": 112331101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_No_of_Employees(String)"
});
formatter.result({
  "duration": 102399300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "infotest@gmail.com",
      "offset": 29
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_secondary_Email(String)"
});
formatter.result({
  "duration": 130346000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MG Road",
      "offset": 20
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_Street(String)"
});
formatter.result({
  "duration": 97760499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "560037",
      "offset": 25
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_Postal_code(String)"
});
formatter.result({
  "duration": 119753301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INDIA",
      "offset": 21
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_Country(String)"
});
formatter.result({
  "duration": 123854800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation test description",
      "offset": 25
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_Description(String)"
});
formatter.result({
  "duration": 146022800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 19
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_Phone(String)"
});
formatter.result({
  "duration": 141090500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 22
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_mobileNo(String)"
});
formatter.result({
  "duration": 135898599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax Details",
      "offset": 17
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_fax(String)"
});
formatter.result({
  "duration": 134090000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "infotest@gmail.com",
      "offset": 19
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_Email(String)"
});
formatter.result({
  "duration": 142389601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Website",
      "offset": 21
    }
  ],
  "location": "LeadsCreationStepDefinition.user_enters_Website(String)"
});
formatter.result({
  "duration": 139469699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Warm",
      "offset": 26
    }
  ],
  "location": "LeadsCreationStepDefinition.user_selects_Lead_Status(String)"
});
formatter.result({
  "duration": 113271900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 26
    }
  ],
  "location": "LeadsCreationStepDefinition.user_selects_Assigned_To(String)"
});
formatter.result({
  "duration": 72543801,
  "status": "passed"
});
formatter.match({
  "location": "LeadsCreationStepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 3593720900,
  "status": "passed"
});
formatter.match({
  "location": "LeadsCreationStepDefinition.user_should_see_Lead_creation_Success_message()"
});
formatter.result({
  "duration": 68312300,
  "status": "passed"
});
formatter.match({
  "location": "LeadsCreationStepDefinition.user_should_have_all_users_information()"
});
formatter.result({
  "duration": 498577900,
  "status": "passed"
});
formatter.after({
  "duration": 671190400,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Sign in",
  "description": "",
  "id": "sign-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 5682787999,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "i am on the login page URL\"http://localhost:8888\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should see login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888",
      "offset": 27
    }
  ],
  "location": "LoginPageStepDefinition.i_am_on_the_login_page_URL(String)"
});
formatter.result({
  "duration": 1234415799,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.i_should_see_login_page()"
});
formatter.result({
  "duration": 40839300,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Sign in with Valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enters an username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters an password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user should see administrator test message on home page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 28
    }
  ],
  "location": "LoginPageStepDefinition.user_enters_an_username_as(String)"
});
formatter.result({
  "duration": 69154300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 28
    }
  ],
  "location": "LoginPageStepDefinition.user_enters_an_password_as(String)"
});
formatter.result({
  "duration": 95371999,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 3635993999,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_should_login_successfully()"
});
formatter.result({
  "duration": 245091300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_should_see_administrator_test_message_on_home_page()"
});
formatter.result({
  "duration": 126794100,
  "status": "passed"
});
formatter.after({
  "duration": 985122501,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Sign in with Valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user enters an username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters an password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user should see administrator test message on home page",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "sign-in;sign-in-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 26,
      "id": "sign-in;sign-in-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin12",
        "password12"
      ],
      "line": 27,
      "id": "sign-in;sign-in-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5582145300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "i am on the login page URL\"http://localhost:8888\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should see login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888",
      "offset": 27
    }
  ],
  "location": "LoginPageStepDefinition.i_am_on_the_login_page_URL(String)"
});
formatter.result({
  "duration": 1116601801,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.i_should_see_login_page()"
});
formatter.result({
  "duration": 39942300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Sign in with Valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user enters an username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters an password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user should see administrator test message on home page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 28
    }
  ],
  "location": "LoginPageStepDefinition.user_enters_an_username_as(String)"
});
formatter.result({
  "duration": 76711099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 28
    }
  ],
  "location": "LoginPageStepDefinition.user_enters_an_password_as(String)"
});
formatter.result({
  "duration": 98831700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 3702158399,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_should_login_successfully()"
});
formatter.result({
  "duration": 313255800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_should_see_administrator_test_message_on_home_page()"
});
formatter.result({
  "duration": 207824501,
  "status": "passed"
});
formatter.after({
  "duration": 844459700,
  "status": "passed"
});
formatter.before({
  "duration": 5466991000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "i am on the login page URL\"http://localhost:8888\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should see login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888",
      "offset": 27
    }
  ],
  "location": "LoginPageStepDefinition.i_am_on_the_login_page_URL(String)"
});
formatter.result({
  "duration": 1236185400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.i_should_see_login_page()"
});
formatter.result({
  "duration": 39040200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Sign in with Valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user enters an username as \"admin12\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters an password as \"password12\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user should see administrator test message on home page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin12",
      "offset": 28
    }
  ],
  "location": "LoginPageStepDefinition.user_enters_an_username_as(String)"
});
formatter.result({
  "duration": 96032300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password12",
      "offset": 28
    }
  ],
  "location": "LoginPageStepDefinition.user_enters_an_password_as(String)"
});
formatter.result({
  "duration": 111588300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 1728903800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_should_login_successfully()"
});
formatter.result({
  "duration": 30085360300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //img[@src\u003d\u0027test/logo/vtiger-crm-logo.gif\u0027 and @title\u003d\u0027vtiger-crm-logo.gif\u0027]\u0027 (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat MyCucumber.CucumberTravelTrace.UtilityClass.GenericLibrary.waitForElement(GenericLibrary.java:23)\r\n\tat PageObjectRepoClass.HomePage.verifyVTigerImage(HomePage.java:34)\r\n\tat StepDefinitionsClass.HomePageStepDefinition.user_should_login_successfully(HomePageStepDefinition.java:25)\r\n\tat ✽.Then User should login successfully(login.feature:21)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//img[@src\u003d\u0027test/logo/vtiger-crm-logo.gif\u0027 and @title\u003d\u0027vtiger-crm-logo.gif\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-J7B84FF\u0027, ip: \u0027192.168.43.69\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\WINDOWS\\TEMP\\scoped_dir9...}, goog:chromeOptions: {debuggerAddress: localhost:52231}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a967ace8fe142bd8233f5c1a0e83fbfa\n*** Element info: {Using\u003dxpath, value\u003d//img[@src\u003d\u0027test/logo/vtiger-crm-logo.gif\u0027 and @title\u003d\u0027vtiger-crm-logo.gif\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat MyCucumber.CucumberTravelTrace.UtilityClass.GenericLibrary.waitForElement(GenericLibrary.java:23)\r\n\tat PageObjectRepoClass.HomePage.verifyVTigerImage(HomePage.java:34)\r\n\tat StepDefinitionsClass.HomePageStepDefinition.user_should_login_successfully(HomePageStepDefinition.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat TestRunner.TestRunner.feature(TestRunner.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_should_see_administrator_test_message_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1059144800,
  "status": "passed"
});
});