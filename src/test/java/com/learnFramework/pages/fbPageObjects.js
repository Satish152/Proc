var facebook=function(browserInstance){
browserInit=browserInstance;
element=browserInit.element;

	this.email=function(){
	return element(By.id("emaill"));
	}
	
	this.password=function(){
		return element(By.id("pass"));
	}
	
	this.submit=function(){
		return element(By.xpath("//input[@aria-label='Log In']"));
	}
	
	this.search=function(){
		return element(By.name("q"));
	}
	
	this.title=function(){
		return browserInit.getTitle();
	}
	
	this.trySearch=function(){
		return element(by.xpath("//input[@type='search']"));
	}
}

module.exports=facebook;