var {setDefaultTimeout} = require('cucumber');

var configure = function () {
	  this.setDefaultTimeout(100 * 1000);
	  
	  this.Before(function(scenario){
			const scenarioName = scenario.getName();
			browser.logger.info('scenario name :'+`${scenarioName}`);
			//browser2=firstBrowser.forkNewDriverInstance();
		});
		
		this.After(function(scenario){
			if(scenario.isFailed()){
				console.log("in failed");
				screenshots.takeScreenshot(scenario.getName());
			}
			});
		
		
	};

	module.exports = configure;