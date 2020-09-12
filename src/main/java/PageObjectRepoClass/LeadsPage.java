package PageObjectRepoClass;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import MyCucumber.CucumberTravelTrace.UtilityClass.GenericLibrary;
import MyCucumber.CucumberTravelTrace.UtilityClass.LoggerClass;

public class LeadsPage {
	WebDriver driver;
	Logger logger = LoggerClass.getLogger(LeadsPage.class);
	GenericLibrary genericLeadPage ;
	public LeadsPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		genericLeadPage = new GenericLibrary(driver);
	}


	@FindBy(linkText="Leads")
	public WebElement lnk_Leads;

	@FindBy(xpath="//img[@alt = 'Create Lead...']")
	WebElement CreateLeads_PlusIcon;


	@FindBy(xpath="//select[@name='salutationtype']")
	@CacheLookup 
	private WebElement FirstnameType;
	
	@FindBy(xpath="//input[contains(@name,'firstname')]")
	@CacheLookup 
	private WebElement Firstname;

	@FindBy(xpath="//input[@name='lastname']") 
	@CacheLookup private WebElement LastName;

	@FindBy(xpath="//input[@name='company']") 
	@CacheLookup private WebElement Company;

	@FindBy(xpath="//input[@id='designation']") 
	@CacheLookup private WebElement Title;

	@FindBy(xpath="//select[@name='leadsource']") 
	@CacheLookup private WebElement LeadSource;

	@FindBy(xpath="//select[@name='industry']") 
	@CacheLookup private WebElement Industry;

	@FindBy(xpath="//input[@name='annualrevenue']") 
	@CacheLookup private WebElement Annualrevenue;

	@FindBy(xpath="//input[@id='noofemployees']") 
	@CacheLookup private WebElement Noofemployees;

	@FindBy(xpath="//input[@id='secondaryemail']") 
	@CacheLookup private WebElement Secondaryemail;

	@FindBy(xpath="//textarea[@name='lane']")
	@CacheLookup private WebElement Street;

	@FindBy(xpath="//input[@id='code']") 
	@CacheLookup private WebElement Postalcode;

	@FindBy(xpath="//input[@id='country']") 
	@CacheLookup private WebElement Country;
	
	@FindBy(xpath="//textarea[@name='description']") 
	@CacheLookup private WebElement Description;

	@FindBy(xpath="//input[@id='lead_no']") 
	@CacheLookup private WebElement LeadNo;

	@FindBy(xpath="//input[@id='phone']") 
	@CacheLookup private WebElement Phone;

	@FindBy(xpath="//input[@id='mobile']") 
	@CacheLookup private WebElement Mobile;

	@FindBy(xpath="//input[@id='fax']") 
	@CacheLookup private WebElement Fax ;

	@FindBy(xpath="//input[@id='email']") 
	@CacheLookup private WebElement Email;

	@FindBy(xpath="//input[@name='website']") 
	@CacheLookup private WebElement Website;

	@FindBy(xpath="//select[@name='leadstatus']") 
	@CacheLookup private WebElement LeadStatus;

	@FindBy(xpath="//select[@name='rating']") 
	@CacheLookup private WebElement Ratings;

	@FindBy(xpath="//tr[11]//td[4]//input[1]") 
	@CacheLookup private WebElement AssignedToUser;

	@FindBy(xpath="//td[4]//input[2]") 
	@CacheLookup private WebElement AssignedToGroup;

	/*@FindBy(xpath="//html") 
	@CacheLookup private WebElement HtmlTag;*/

	@FindBy(xpath="//select[@name='assigned_user_id']") 
	@CacheLookup private WebElement Administrator;

	/*@FindBy(xpath="//html") 
	@CacheLookup private WebElement htmlTag;*/

	@FindBy(xpath="//input[@title='Save [Alt+S]' ]") 
	@CacheLookup private WebElement Save;
	
	
	@FindBy(xpath="//span[contains(text(),'Lead Information')]") 
	@CacheLookup private WebElement LeadCreationMsg;
	
/*	public void clickOnLeadsLink() {
		genericHomepage.waitForElement(lnk_Leads, 30);
		logger.info("Clicking on Leads link on home page");
		lnk_Leads.click();
	}*/
	
	public void clickOnLeadsPlusIcon() {
		genericLeadPage.waitForElement(lnk_Leads, 30);
		logger.info("Clicking on Leads Plus icon Leads page");
		CreateLeads_PlusIcon.click();
	}
	
	public void selectFirstnameType(String salutationType) {
		Select select = new Select(FirstnameType);
		logger.info("Selecting salutationtype for firstname");
		select.selectByVisibleText(salutationType);
	}
	
	public void enterFirstname(String Fname) {
		logger.info("First name is entering  with data "+Fname);
		Firstname.sendKeys(Fname);
	}
	
	public void enterLastname(String Lname) {
		logger.info("Last name is entering  with data "+Lname);
		LastName.sendKeys(Lname);
	}
	

	public void enterCompany(String Company) {
		logger.info("Company is entering  with data "+Company);
		this.Company.sendKeys(Company);
	}
	
	
	public void enterTitle(String Title) {
		logger.info("Title is entering  with data "+Title);
		this.Title.sendKeys(Title);
	}
	
	public void selectLeadSource(String LeadSourceText) {
		logger.info("Selecting Lead source with data "+LeadSourceText);
		Select select = new Select(LeadSource);
		select.selectByVisibleText(LeadSourceText);
	}
	
	public void selectIndustry(String IndustryText) {
		logger.info("Selecting Industry with data "+IndustryText);
		Select select = new Select(Industry);
		select.selectByVisibleText(IndustryText);
	}
	
	
	public void enterAnnualrevenue(String Annualrevenue) {
		logger.info("Annualrevenue is entering  with data "+Annualrevenue);
		this.Annualrevenue.sendKeys(Annualrevenue);
	}
	
	public void enterNoofemployees(String Noofemployees) {
		logger.info("Noofemployees is entered  with data "+Noofemployees);
		this.Noofemployees.sendKeys(Noofemployees);
	}
	
	public void enterSecondaryemail(String Secondaryemail) {
		logger.info("Secondaryemail is entered  with data "+Secondaryemail);
		this.Secondaryemail.sendKeys(Secondaryemail);
	}
	
	public void enterStreet(String Street) {
		logger.info("Street is entered  with data "+Street);
		this.Street.sendKeys(Street);
	}
	
	public void enterPostalcode(String Postalcode) {
		logger.info("Postalcode is entered  with data "+Postalcode);
		this.Postalcode.sendKeys(Postalcode);
	}
	
	public void enterCountry(String Country) {
		logger.info("Country is entered  with data "+Country);
		this.Country.sendKeys(Country);
	}
	
	public void enterDescription(String Description) {
		logger.info("Description is entered  with data "+Description);
		this.Description.sendKeys(Description);
	}
	
	public void enterPhone(String Phone) {
		logger.info("Phone is entered  with data "+Phone);
		this.Phone.sendKeys(Phone);
	}
	
	public void enterMobile(String Mobile) {
		logger.info("Mobile is entered  with data "+Mobile);
		this.Mobile.sendKeys(Mobile);
	}
	
	public void enterFax(String Fax) {
		logger.info("Fax is entered  with data "+Fax);
		this.Fax.sendKeys(Fax);
	}
	
	public void enterEmail(String Email) {
		logger.info("Email is entered  with data "+Email);
		this.Email.sendKeys(Email);
	}

	public void enterWebsite(String Website) {
		logger.info("Website is enteried  with data "+Website);
		this.Website.sendKeys(Website);
	}
	
	public void selectleadStatus(String LeadStatus) {
		Select select = new Select(this.LeadStatus);
		logger.info("LeadStatus is selected  with data "+LeadStatus);
		select.selectByVisibleText(LeadStatus);
	}
	
	public void selectAdministrator(String Administrator) {
		Select select = new Select(this.Administrator);
		logger.info("Administrator is selected  with data "+Administrator);
		select.selectByVisibleText(Administrator);
	}
	
	public void clickonSave() {
		logger.info("Clicks on Save button");
		Save.click();
	}
	
	public boolean  verifyLeadCreationMsg() {
		genericLeadPage.waitForElement(LeadCreationMsg, 30);
		logger.info("Verified for the LeadCreation Message");
		return LeadCreationMsg.isDisplayed();
	}
	
}
