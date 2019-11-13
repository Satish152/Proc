var {After,Before}=require('cucumber');
var utilityPage=function(){

	this.Before(function(scenario){
		console.log("it is running");
		const scenarioName = scenario.name;
		browser.logger.info('scenario name :'+scenarioName);
	});
	
	this.After(function(scenario){
		if(scenario.isFailed()){
			screenshots.takeScreenshot(scenario.name);
		}
		});
}
module.exports=utilityPage;