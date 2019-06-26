$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/devansh/Documents/Projects/Cucumber/Cucumber/src/test/resources/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free crm login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Free crm login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is already on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "titel of login page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters username and enters password",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user cliks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User is on homepage",
  "keyword": "And "
});
formatter.match({
  "location": "LoginstepDefinitions.user_is_already_on_loginpage()"
});
formatter.result({
  "duration": 12148085515,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinitions.titel_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 19659644,
  "error_message": "java.lang.AssertionError: this is not correct title expected [Lets Kode it] but found [Home | Let\u0027s Kode It]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat stepdefinitions.LoginstepDefinitions.titel_of_login_page_is_free_crm(LoginstepDefinitions.java:34)\r\n\tat ✽.When titel of login page is free crm(C:/Users/devansh/Documents/Projects/Cucumber/Cucumber/src/test/resources/login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginstepDefinitions.user_enters_username_and_enters_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginstepDefinitions.user_cliks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginstepDefinitions.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
});