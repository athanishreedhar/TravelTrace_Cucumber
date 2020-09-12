package PageObjectRepoClass;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import MyCucumber.CucumberTravelTrace.UtilityClass.GenericLibrary;
import MyCucumber.CucumberTravelTrace.UtilityClass.LoggerClass;

public class HomePage {
	
	WebDriver driver;
	GenericLibrary genericHomepage;
	Logger logger = LoggerClass.getLogger(LeadsPage.class);
	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		genericHomepage = new GenericLibrary(driver);
		//genericHomepage.waitForElement(administrator, 30);
	}
	
	@FindBy(xpath="//span[text()=' Administrator']")
	public WebElement administrator;
	
	@FindBy(xpath="//img[@src='test/logo/vtiger-crm-logo.gif' and @title='vtiger-crm-logo.gif']")
	public WebElement vtigerImage;
	
	@FindBy(linkText="Leads")
	public WebElement lnk_Leads;
	
	public void verifyVTigerImage() {
		genericHomepage.waitForElement(vtigerImage, 30);
		vtigerImage.isDisplayed();
		logger.info("Image VTiger is seen on Home page ");
	}
	
	public LeadsPage navigateToLeadsPage() {
		lnk_Leads.click();
		return new LeadsPage(driver);
	}


}
