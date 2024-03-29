const log4js = require('log4js');
var fs=require('fs');
global.screenshots = require('protractor-take-screenshots-on-demand');
global.browser2;
var propertiesReader=require('properties-reader');
const {Given, Then, When, Before} = require('cucumber');

exports.config = {

//seleniumAddress: 'http://localhost:4444/wd/hub',
directConnect:true,

framework: 'custom',
// path relative to the current config file
frameworkPath: require.resolve('protractor-cucumber-framework'),
capabilities: {
    'browserName': 'chrome',
    metadata: {
        browser: {
            name: 'chrome',
            version: '79'
        },
        device: 'MacBook Pro 15',
        platform: {
            name: 'OSX',
            version: '10.12.6'
        },
       disableLog:true,
       durationInMS:true,
       openReportInBrowser:true
    }
},
ignoreUncaughtExceptions:false,
// Spec patterns are relative to this directory.
specs: [
    '../Proc/src/test/java/com/proc/features/test.feature'
],

beforeLaunch:function(){
    if (fs.existsSync('./logs/ExecutionLog.log')) {
        fs.unlink('./logs/ExecutionLog.log')
    }
    log4js.configure({
    	appenders: {
    		out: { type: 'console' }, 
    	    info:{ type: 'dateFile', filename: '../Reports/logs/info', "pattern":"-dd.log",alwaysIncludePattern:false},
    	    "console" : {
    	        "type": "console",
    	        "category": "console"
    	    },
    	    "file" : {
    	        "category": "test-file-appender",
    	        "type": "file",
    	        "filename": "../Reports/logs/log_file.log",
    	        "maxLogSize": 10240,
    	       // "backups": 3,
    	      //  "pattern": "%d{dd/MM hh:mm} %-5p %m"
    	    }
    	  },
    	 categories: {
    	       "info" :{"appenders": ["console"], "level": "info"},
    	       "default" :{"appenders": ["console", "file"], "level": "DEBUG"},
              //"file" : {"appenders": ["file"], "level": "DEBUG"}
    	}
    });
},
cucumberOpts: {
    require:['../src/test/resources/com.proc.utility/timeOutConfig.js','../Proc/src/test/java/com/proc/stepDefinition/spec.js'],
    tags: false,
    profile: false,
    format:'json:../Reports/jsonResult/results.json',
    'no-source': true
},
 onPrepare: function () {
	 const logDefault = log4js.getLogger('default');
	 const logInfo=log4js.getLogger('info');
	 screenshots.browserNameJoiner = ' - '; //this is the default
     //folder of screenshot
     screenshots.screenShotDirectory = '../Screenshots';
     global.openNewBrowser=require("../src/test/resources/com.proc.utility/newBrowserinstance.js")
     global.testData=require("../TestData/testData.json");
	 browser.logger = log4js.getLogger('protractorLog4js');
	 global.firstBrowser=browser;
	 global.properties=propertiesReader("../TestData/propertyConfig.properties");
	 browser.waitForAngularEnabled(false);
	 browser.manage().window().maximize();
	 global.facebook=require("../src/test/java/com/proc/pages/fbPageObjects.js");
	 global.utility=require("../src/test/resources/com.proc.utility/testFile.js");
  },
  plugins: [{
      package: 'H:/workspace/Proc/node_modules/protractor-multiple-cucumber-html-reporter-plugin',
      options:{
          // read the options part for more options
          automaticallyGenerateReport: true,
          removeExistingJsonReportFile: true,
          reportPath:"../Reports/HtmlReports",
          reportName:"test.html"
      },
      customData: {
    	    title: 'Run info',
    	    data: [
    	        {label: 'Project', value: 'Framework Setup'},
    	        {label: 'Release', value: '1.2.3'},
    	        {label: 'Cycle', value: 'Test Cycle'}
    	    ]
    	},
  }]
};