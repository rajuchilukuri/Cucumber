package stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginstepDefinitions {
	WebDriver driver;
	
	@Given("^user is already on loginpage$")
	public void user_is_already_on_loginpage() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\devansh\\Documents\\Projects\\Cucumber\\Cucumber\\Drivers\\chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.get("https://letskodeit.teachable.com/");
	    driver.manage().window().maximize();
	    driver.manage().deleteAllCookies();
	    
	    driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	    
	}

	@When("^titel of login page is free crm$")
	public void titel_of_login_page_is_free_crm() throws Throwable {
		String title=driver.getTitle();
		Assert.assertEquals(title, "Lets Kode it", "this is not correct title");
	}

	@Then("^user enters username and enters password$")
	public void user_enters_username_and_enters_password() throws Throwable {
	}

	@Then("^user cliks on login button$")
	public void user_cliks_on_login_button() throws Throwable {
		driver.findElement(By.xpath("//a[contains(text(),'Login')]")).click();
		driver.findElement(By.id("user_email")).sendKeys("test@letskodeit.com");
		driver.findElement(By.id("user_password")).sendKeys("test@123");
		driver.findElement(By.name("commit")).click();
	}

	@Then("^User is on homepage$")
	public void user_is_on_homepage() throws Throwable {
           driver.getTitle();
	    
	}

}
