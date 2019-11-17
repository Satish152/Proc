var facebook=function(browserInstance){
browserInit=browserInstance;	
	this.email=function(){
	return browserInit.element(By.id("email"));
	}
	
	this.password=function(){
		return browserInit.element(By.id("pass"));
	}
	
	this.submit=function(){
		return browserInit.element(By.xpath("//input[@aria-label='Log In']"));
	}
	
	this.search=function(){
		return browserInit.element(By.name("q"));
	}
	
	this.title=function(){
		return browserInit.getTitle();
	}
	
	this.trySearch=function(){
		return browserInit.element(by.xpath("//input[@type='search']"));
	}
}

module.exports=facebook;