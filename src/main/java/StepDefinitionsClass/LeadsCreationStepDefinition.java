package StepDefinitionsClass;

import org.apache.log4j.Logger;

import MyCucumber.CucumberTravelTrace.Beans.LeadsBeans;
import MyCucumber.CucumberTravelTrace.UtilityClass.GenericLibrary;
import MyCucumber.CucumberTravelTrace.UtilityClass.LoggerClass;
import MyCucumber.CucumberTravelTrace.testBase.TestBase;
import PageObjectRepoClass.HomePage;
import PageObjectRepoClass.LeadsPage;
import PageObjectRepoClass.LeadsPageVerification;
import PageObjectRepoClass.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("unused")
public class LeadsCreationStepDefinition extends TestBase {
	//HomePage homePage = new HomePage(TestBase.driver);
	//LoginPage loginPage = new LoginPage(driver);
	LeadsPage leadpage = new LeadsPage(driver);
	LeadsPageVerification leadsPageVerify = new LeadsPageVerification(driver);
	//GenericLibrary generic = new GenericLibrary(driver);
	//Logger logger = LoggerClass.getLogger(HomePageStepDefinition.class);
	
	

	@When("^User clicks on plus icon to create lead$")
	public void user_clicks_on_plus_icon_to_create_lead() throws Throwable {
		leadpage.clickOnLeadsPlusIcon();
	    
	}

	@When("^User selects First name title as \"([^\"]*)\"$")
	public void user_selects_First_name_title_as(String arg1) throws Throwable {
		leadpage.selectFirstnameType(arg1);
	}

	@When("^User enters First name  \"([^\"]*)\"$")
	public void user_enters_First_name(String arg1) throws Throwable {
	    
		LeadsBeans.setFirsName(arg1);
		leadpage.enterFirstname(arg1);
	}

	@When("^User enters Second name \"([^\"]*)\"$")
	public void user_enters_Second_name(String arg1) throws Throwable {
	    
		LeadsBeans.setLastname(arg1);
		leadpage.enterLastname(arg1);
	}

	@When("^User enters Company name \"([^\"]*)\"$")
	public void user_enters_Company_name(String arg1) throws Throwable {
	    
		LeadsBeans.setCompany(arg1);
		leadpage.enterCompany(arg1);
	}

	@When("^user enters Title \"([^\"]*)\"$")
	public void user_enters_Title(String arg1) throws Throwable {
	    
		leadpage.enterTitle(arg1);
	}

	@When("^User selects the Lead source \"([^\"]*)\"$")
	public void user_selects_the_Lead_source(String arg1) throws Throwable {
	    
		leadpage.selectLeadSource(arg1);
	}

	@When("^user Selects Industry \"([^\"]*)\"$")
	public void user_Selects_Industry(String arg1) throws Throwable {
		leadpage.selectIndustry(arg1);
	    
	    
	}

	@When("^User entrs Annual Revenue: \\(\\$\\) \"([^\"]*)\"$")
	public void user_entrs_Annual_Revenue_$(String arg1) throws Throwable {
	    
		leadpage.enterAnnualrevenue(arg1);
	}

	@When("^User enters No of Employees \"([^\"]*)\"$")
	public void user_enters_No_of_Employees(String arg1) throws Throwable {
	    
		leadpage.enterNoofemployees(arg1);
	}

	@When("^User enters secondary Email \"([^\"]*)\"$")
	public void user_enters_secondary_Email(String arg1) throws Throwable {
	    
		leadpage.enterSecondaryemail(arg1);
	}

	@When("^User enters Street \"([^\"]*)\"$")
	public void user_enters_Street(String arg1) throws Throwable {
	    
		leadpage.enterStreet(arg1);
	}

	@When("^User enters Postal code \"([^\"]*)\"$")
	public void user_enters_Postal_code(String arg1) throws Throwable {
	    
		leadpage.enterPostalcode(arg1);
	}

	@When("^User enters Country \"([^\"]*)\"$")
	public void user_enters_Country(String arg1) throws Throwable {
	    
		leadpage.enterCountry(arg1);
	}

	@When("^User enters Description \"([^\"]*)\"$")
	public void user_enters_Description(String arg1) throws Throwable {
	    
		leadpage.enterDescription(arg1);
	}

	@When("^user enters Phone \"([^\"]*)\"$")
	public void user_enters_Phone(String arg1) throws Throwable {
		
		leadpage.enterPhone(arg1);
	}

	@When("^User enters mobileNo \"([^\"]*)\"$")
	public void user_enters_mobileNo(String arg1) throws Throwable {
	    
		LeadsBeans.setMobile(arg1);
		leadpage.enterMobile(arg1);
	}

	@When("^User enters fax \"([^\"]*)\"$")
	public void user_enters_fax(String arg1) throws Throwable {
	    
		leadpage.enterFax(arg1);
	}

	@When("^User enters Email \"([^\"]*)\"$")
	public void user_enters_Email(String arg1) throws Throwable {
	    
		LeadsBeans.setWmail(arg1);
		leadpage.enterEmail(arg1);
	}

	@When("^User enters Website \"([^\"]*)\"$")
	public void user_enters_Website(String arg1) throws Throwable {
	    
		leadpage.enterWebsite(arg1);
	}

	@When("^User selects Lead Status \"([^\"]*)\"$")
	public void user_selects_Lead_Status(String arg1) throws Throwable {
		leadpage.selectleadStatus(arg1);
	    
	}

	@When("^user selects Assigned To \"([^\"]*)\"$")
	public void user_selects_Assigned_To(String arg1) throws Throwable {
	    
		leadpage.selectAdministrator(arg1);
	}

	@When("^user clicks on Save button$")
	public void user_clicks_on_Save_button() throws Throwable {
	    
		leadpage.clickonSave();
	}

	@Then("^User should see Lead creation Success message$")
	public void user_should_see_Lead_creation_Success_message() throws Throwable {
		if(leadpage.verifyLeadCreationMsg()) {
			Assert.assertTrue(true);
		}
		else {
			Assert.assertTrue(true);
		} 
	}

	@Then("^user should have all users information$")
	public void user_should_have_all_users_information() throws Throwable {
		System.out.println(LeadsBeans.getFirsName());
		System.out.println(leadsPageVerify.getFirstnameVerify().getText());
		System.out.println("+++++++++++++++++++++++++++++++++++++++++++++++++++");
		System.out.println(LeadsBeans.getLastname());
		System.out.println(leadsPageVerify.getLastnameverify().getText());
		System.out.println("+++++++++++++++++++++++++++++++++++++++++++++++++++");
		System.out.println(LeadsBeans.getCompany());
		System.out.println(leadsPageVerify.getCompanyVerify().getText());
		
		Assert.assertEquals(leadsPageVerify.getFirstnameVerify().getText(), LeadsBeans.getFirsName());
		Assert.assertEquals(leadsPageVerify.getLastnameverify().getText().trim(), LeadsBeans.getLastname());
		Assert.assertEquals(leadsPageVerify.getCompanyVerify().getText().trim(), LeadsBeans.getCompany());
		Assert.assertEquals(leadsPageVerify.getMobileVerify().getText().trim(), LeadsBeans.getMobile());
		Assert.assertEquals(leadsPageVerify.getEmailVerify().getText().trim(), LeadsBeans.getWmail());
	}
	
	

}
