package PageObjectRepoClass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import MyCucumber.CucumberTravelTrace.UtilityClass.GenericLibrary;

public class LoginPage {
	
	WebDriver driver;
	GenericLibrary generic;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		//generic = new GenericLibrary(driver);
		//generic.waitForElement(VtigerCRM, 30);
	}
	
	
	@FindBy(xpath="//div[text()='Powered by vtiger CRM - 5.4.0']")
	public WebElement VtigerCRM;
	
	@FindBy(name="user_name")
	public WebElement username;

	@FindBy(name="user_password")
	public WebElement password;
	
	
	@FindBy(id="submitButton")
	public WebElement Login;
	
	
	public void enterUsername(String username) {
		this.username.sendKeys(username);
	}
	
	public void enterPassword(String password) {
		this.password.sendKeys(password);
	}
	
	public void clickLoginBtn() {
		Login.click();
	}
}
