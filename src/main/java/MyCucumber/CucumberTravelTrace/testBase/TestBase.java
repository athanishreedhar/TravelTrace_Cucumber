package MyCucumber.CucumberTravelTrace.testBase;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import MyCucumber.CucumberTravelTrace.UtilityClass.GenericLibrary;
import io.github.bonigarcia.wdm.WebDriverManager;

public class TestBase {
	public static WebDriver driver;
	public GenericLibrary generic;
	//if(Browser.equals("Chrome")) {
	public WebDriver getDriver() {
		WebDriverManager.chromedriver().setup();
		//System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//Driver\\chromedriver.exe");
		driver = new ChromeDriver();
		return driver;
	//}
	}
	
}
