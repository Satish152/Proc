var {setDefaultTimeout} = require('C:\\Users\\DELL\\AppData\\Roaming\\npm\\node_modules\\cucumber');

var configure = function () {
	  this.setDefaultTimeout(100 * 1000);
	  
	  this.Before(function(scenario){
			const scenarioName = scenario.getName();
			browser.logger.info('scenario name :'+`${scenarioName}`);
		});
		
		this.After(function(scenario){
			if(scenario.isFailed()){
				console.log("in failed");
				screenshots.takeScreenshot(scenario.getName());
			}
			});
		
		this.openNewBrowser=function(){
			return browser.forkNewDriverInstance(true);
		}
	};

	module.exports = configure;