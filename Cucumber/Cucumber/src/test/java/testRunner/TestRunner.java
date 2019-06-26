package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\devansh\\Documents\\Projects\\Cucumber\\Cucumber\\src\\test\\resources\\login.feature",
		glue= {"stepdefinitions"},
	    plugin= {"pretty","html:cucumber-output"}
		
		)

public class TestRunner {

}
