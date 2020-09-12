package TestRunner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.fasterxml.jackson.annotation.JsonFormat.Feature;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.testng.CucumberExceptionWrapper;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions(features = "src/test/resources/features", 
				 glue = { "StepDefinitionsClass"},
				 plugin = {"pretty","html:target/cucumber-reports/cucumber-pretty",
						 "json:target/cucumber-reports/CucumberTestReport.json",
						 "rerun:target/cucumber-reports/rerun.txt"
					})
//public class TestRunner extends AbstractTestNGCucumberTests {
	public class TestRunner  {
	private TestNGCucumberRunner testNGCucumberrunner;
	@BeforeClass(alwaysRun=true)
	public void setUpClass(){
		testNGCucumberrunner= new TestNGCucumberRunner(this.getClass());
	}
	@Test(groups="cucumber",description="Runs cucumber Features",dataProvider="features")
	//public void feature(CucumberExceptionWrapper cucumberFeature) {
	public void feature(CucumberFeatureWrapper cucumberFeature) {
		
		testNGCucumberrunner.runCucumber(cucumberFeature.getCucumberFeature());
	}
	
	@DataProvider
	public Object[][] features(){
		return testNGCucumberrunner.provideFeatures();
	}
	
	@AfterClass(alwaysRun=true)
	public void teardownClass() {
		testNGCucumberrunner.finish();
	}
}
