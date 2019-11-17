var newBrowser=function(){
	
	this.openNewBrowser=function(browserinstance){
		return browserinstance.forkNewDriverInstance();
	}
}
module.exports=new newBrowser();