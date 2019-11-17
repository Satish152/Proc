var utilityInit,page2;
page1=new facebook(firstBrowser);
module.exports=function(){
	this.Given(/^Open the browser and Load the URL$/,async function(){
		await browser.get("https://facebook.com");
		browser.logger.info("Title of the window is :"+await browser.getTitle());
		//screenshots.takesScreenshot("filename");
	});
	
	this.When(/^User entered the text in the search box$/,async function(){
		browser.sleep(3000);
		//page1=new facebook(firstBrowser);
		await page1.email().sendKeys(testData.Login.CM[0].Username);
		browser.sleep(3000);
		await page1.password().sendKeys(testData.Login.CM[0].Password);
	});
	
	this.Then(/^click on login button$/,async function(){
		browser.sleep(3000);
		await facebook.submit().click();
	});
	
	this.Then(/^User tried to open in new browser instance$/,async function(){
		browser2=await newBrowser.openNewBrowser(browser);
		utilityInit=new utility(browser2);
		utilityInit.ignoreSync("https://google.com");
		browser2.manage().window().maximize();
		console.log(await utilityInit.title()+" title");
		//page2=new facebook(browser2);
		browser2.sleep(5000);
	});
	
	this.When(/^User entered the text in the email field$/,async function(){
		//page1=new facebook(firstBrowser);
		page2=new facebook(browser2);
		console.log(await page2.title()+" browser2");
		//await page2.trySearch().sendKeys(testData.Login.CM[0].Username);
		await page2.search().sendKeys("testing");
		browser2.sleep(3000);
		page1=new facebook(firstBrowser);
		console.log(await page1.title()+" browser1")
		await page1.email().sendKeys(testData.Login.CM[0].Username);
		firstBrowser.sleep(5000);
	})
}