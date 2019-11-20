var utility=function(browserInstance){
	   browserInit=browserInstance;
	  
	   this.title=async function(){
		   return browserInstance.getTitle();
	   }
	   
	  this.ignoreSync=async function(url){
		  console.log("entered in to ignore");
		  browserInit.waitForAngularEnabled(false);
		  await browserInit.get(url);
		  browserInit.waitForAngularEnabled(false);
		  console.log("came out from ignore")
	  }
	
	  this.getCurrentDateTime=function(){
		  date=new Date();
		  dateAndTime=date.getDate()+"_"+date.getMonth()+1+"_"+date.getFullYear()+_+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
		  return dateAndTime;
	  }
	}

module.exports=utility;

//#5353