package PageObjectRepoClass;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import MyCucumber.CucumberTravelTrace.UtilityClass.GenericLibrary;
import MyCucumber.CucumberTravelTrace.UtilityClass.LoggerClass;

public class LeadsPageVerification {
	
	WebDriver driver;
	Logger logger = LoggerClass.getLogger(LeadsPage.class);
	GenericLibrary genericLeadPageVerification ;
	public LeadsPageVerification(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		genericLeadPageVerification = new GenericLibrary(driver);
	}
	
	/*@FindBy(xpath="//*[@id='mouseArea_First Name']")
	WebElement FirstnameVerify;*/
	
	@FindBy(xpath="//span[@id=\"dtlview_First Name\"]")
	WebElement FirstnameVerify;
	
	@FindBy(xpath="//td[@id='mouseArea_Last Name']") 
	@CacheLookup private WebElement Lastnameverify;
	
	@FindBy(xpath="//td[@id='mouseArea_Company']") 
	@CacheLookup private WebElement CompanyVerify;
	
	@FindBy(xpath="//td[@id='mouseArea_Mobile']") 
	@CacheLookup private WebElement MobileVerify;
	
	@FindBy(xpath="//td[@id='mouseArea_Email']") 
	@CacheLookup private WebElement EmailVerify;
	
	
	public WebElement getFirstnameVerify() {
		genericLeadPageVerification.waitForElement(FirstnameVerify, 30);
		return FirstnameVerify;
	}

	public WebElement getLastnameverify() {
		genericLeadPageVerification.waitForElement(Lastnameverify, 30);
		return Lastnameverify;
	}

	public WebElement getCompanyVerify() {
		genericLeadPageVerification.waitForElement(CompanyVerify, 30);
		return CompanyVerify;
	}

	public WebElement getMobileVerify() {
		genericLeadPageVerification.waitForElement(MobileVerify, 30);
		return MobileVerify;
	}

	public WebElement getEmailVerify() {
		genericLeadPageVerification.waitForElement(EmailVerify, 30);
		return EmailVerify;
	}

}
