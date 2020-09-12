package StepDefinitionsClass;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;

import MyCucumber.CucumberTravelTrace.UtilityClass.GenericLibrary;
import MyCucumber.CucumberTravelTrace.UtilityClass.LoggerClass;
import MyCucumber.CucumberTravelTrace.testBase.TestBase;
import PageObjectRepoClass.HomePage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageStepDefinition extends TestBase {
	HomePage homePage = new HomePage(TestBase.driver);
	//GenericLibrary generic = new GenericLibrary(driver);
	Logger logger = LoggerClass.getLogger(HomePageStepDefinition.class);
	
	
	@Then("^User should login successfully$")
	public void user_should_login_successfully() throws Throwable {
		/*TestBase.driver
				.findElement(By.xpath("//img[@src='test/logo/vtiger-crm-logo.gif' and @title='vtiger-crm-logo.gif']"))
				.isDisplayed();*/
		// throw new PendingException();
		homePage.verifyVTigerImage();
	}

	@Then("^user should see administrator test message on home page$")
	public void user_should_see_administrator_test_message_on_home_page() throws Throwable {
		//TestBase.driver.findElement(By.xpath("//span[text()=' Administrator']")).isDisplayed();
		// throw new PendingException();
		homePage.administrator.isDisplayed();
		logger.info("Administrator field is available in home page ");
	}
	
	@When("^User click on leads link$")
	public void user_click_on_leads_link() throws Throwable {
		
		homePage.navigateToLeadsPage();  
	}
	

}
