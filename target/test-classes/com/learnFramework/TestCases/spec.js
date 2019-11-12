module.exports=function(){
	this.Given(/^Open the browser and Load the URL$/,async function(){
		await browser.get("https://facebook.com");
		browser.logger.info("Title of the window is :"+await browser.getTitle());
	});
	
	this.When(/^User entered the text in the search box$/,async function(){
		browser.sleep(5000);
		await facebook.email().sendKeys("srongala1@yahoo.com");
		browser.sleep(3000);
		await facebook.password().sendKeys("sweety@21");
	});
	
	this.Then(/^click on login button$/,async function(){
		browser.sleep(3000);
		await facebook.submit().click();
	});
}