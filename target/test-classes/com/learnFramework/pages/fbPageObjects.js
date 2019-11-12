var facebook=function(){
	this.email=function(){
	return element(By.id("email"));
	}
	
	this.password=function(){
		return element(By.id("pass"));
	}
	
	this.submit=function(){
		return element(By.xpath("//input[@aria-label='Log In']"));
	}
}

module.exports=new facebook();