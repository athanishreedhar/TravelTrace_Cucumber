package MyCucumber.CucumberTravelTrace.UtilityClass;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import MyCucumber.CucumberTravelTrace.testBase.TestBase;

public class GenericLibrary {
	
	WebDriver driver ;
	Logger logger = LoggerClass.getLogger(GenericLibrary.class);

	public GenericLibrary(WebDriver driver) {
		this.driver = driver;
	}
	
	public void waitForElement(WebElement element,long timeOutInSeconds) {
		logger.info("Waiting for element to load");
		WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
		wait.until(ExpectedConditions.visibilityOf(element));
		logger.info("Element is found and visible");
	}

}
