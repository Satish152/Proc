module.exports=function(){
	this.Given(/^Open the browser and Load the URL$/,async function(){
		await browser.get("https://facebook.com");
		browser.logger.info("Title of the window is :"+await browser.getTitle());
	});
	
	this.When(/^User entered the text in the search box$/,async function(){
		browser.sleep(5000);
		await facebook.email().sendKeys(testData.Login.CM[0].Username);
		browser.sleep(3000);
		await facebook.password().sendKeys(testData.Login.CM[0].Password);
	});
	
	this.Then(/^click on login button$/,async function(){
		browser.sleep(3000);
		await facebook.submit().click();
	});
}