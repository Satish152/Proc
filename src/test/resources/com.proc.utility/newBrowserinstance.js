var openNewBrowser=function(){
	this.newBrowserInit=function(browserInstance){
		return browserInstance.forkNewDriverInstance();
	}
}
module.exports=new openNewBrowser();