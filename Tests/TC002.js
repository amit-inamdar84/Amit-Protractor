/**Test case automation practice after course completion
 * 
 */
describe("Automating forms in multiple pages", function() {
	it("Automating multiforms", function() {
		browser.waitForAngularEnabled(false);
		browser.get("https://www.globalsqa.com/angularjs-protractor-practice-site/");
		element(by.css("a[href='/angularJs-protractor/Multiform']")).click();//After clicking here next is angular page.
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(element(by.model("formData.name"))), 2000);//Waiting because of "no element found using locator" error.
		element(by.model("formData.name")).sendKeys("ABC");//Filling 1st form.
		element(by.model("formData.email")).sendKeys("ABC@gmail.com");
		element(by.cssContainingText("a[href='#/form/interests']", "Next Section")).click();
		browser.wait(EC.visibilityOf(element(by.css("input[value='xbox']"))), 2000);//Waiting because of "no element found using locator" error.
		element(by.css("input[value='xbox']")).click();
		element(by.cssContainingText("a[href='#/form/payment']", "Next Section")).click();
		browser.wait(EC.visibilityOf(element(by.css("button[type='Submit']"))), 2000);//Waiting because of "no element found using locator" error.
		expect(element(by.cssContainingText("h3","Thanks For Your Money!")).getText()).toBe("Thanks For Your Money!");//Verifying final page
		element(by.css("button[type='Submit']")).click().then(function(arg0) {
			browser.driver.switchTo().alert().getText().then(function(text) {//Switching to pop up window and retrieving text.
				console.log("Pop up text: "+text);
			})
		})
		
		browser.switchTo().alert().accept();
	})
})