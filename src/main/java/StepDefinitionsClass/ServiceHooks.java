package StepDefinitionsClass;

import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import MyCucumber.CucumberTravelTrace.testBase.TestBase;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class ServiceHooks {
	
	TestBase testbase;
	Logger log;
	//WebDriver driver;
	
	@Before
	public void setUp() {
		testbase = new TestBase();
		testbase.getDriver();
		TestBase.driver.manage().window().maximize();
		log = Logger.getLogger(ServiceHooks.class);
		//TestBase.driver.get("https://www.google.com");	
	}
	
	@After
	public void tearDown(Scenario scenario) {
		if(scenario.isFailed()) {
			try {
				log.info(scenario.getName()+" is failed");
				final byte[] screenshot = ((TakesScreenshot) testbase.driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
			} catch (WebDriverException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		TestBase.driver.quit();
	}

}
