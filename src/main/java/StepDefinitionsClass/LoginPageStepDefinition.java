package StepDefinitionsClass;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;

import MyCucumber.CucumberTravelTrace.UtilityClass.GenericLibrary;
import MyCucumber.CucumberTravelTrace.UtilityClass.LoggerClass;
import MyCucumber.CucumberTravelTrace.testBase.TestBase;
import PageObjectRepoClass.HomePage;
import PageObjectRepoClass.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageStepDefinition extends TestBase {
	
	LoginPage loginpage = new LoginPage(driver);
	GenericLibrary generic = new GenericLibrary(driver);
	Logger logger = LoggerClass.getLogger(LoginPageStepDefinition.class);

	@Given("^i am on the login page URL\"([^\"]*)\"$")
	public void i_am_on_the_login_page_URL(String arg1) throws Throwable {
		
		TestBase.driver.get(arg1);
		generic.waitForElement(loginpage.VtigerCRM, 30);
		logger.info("the Application URl is getting launched");
		// throw new PendingException();
	}

	@Then("^I should see login page$")
	public void i_should_see_login_page() throws Throwable {
		//TestBase.driver.findElement(By.xpath("//div[text()='Powered by vtiger CRM - 5.4.0']")).isDisplayed();
		// throw new PendingException();
		loginpage.VtigerCRM.isDisplayed();
		logger.info("on successful launch of the application user is able to see VTigerCRM");
	}

	@When("^user enters an username as \"([^\"]*)\"$")
	public void user_enters_an_username_as(String arg1) throws Throwable {
		//TestBase.driver.findElement(By.name("user_name")).sendKeys(arg1);
		// throw new PendingException();
		loginpage.enterUsername(arg1);
		logger.info("user successfully entered the username");
	}

	@When("^user enters an password as \"([^\"]*)\"$")
	public void user_enters_an_password_as(String arg1) throws Throwable {
		//TestBase.driver.findElement(By.name("user_password")).sendKeys(arg1);
		// throw new PendingException();
		loginpage.enterPassword(arg1);
		logger.info("User successfully entered the password");
	}

	@When("^click on login button$")
	public void click_on_login_button() throws Throwable {
		TestBase.driver.findElement(By.id("submitButton")).click();
		logger.info("User successfully clicked on Login Button ");
		// throw new PendingException();
		//loginpage.clickLoginBtn();
	}

	
	

}
