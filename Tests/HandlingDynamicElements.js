describe("Dynamic elements", function() {
	function selectItem(product) {//Function to compare product text and click based on text.
		element.all(by.tagName("app-card")).each(function(item) {//Locate all elements by tag name app card and iterate on each item
			item.element(by.css("h4 a")).getText().then(function(text) {//Under that scope for each item locate css with h4 a and get its text.
				if(text == product){
					browser.sleep(3000);
					item.element(by.buttonText("Add")).click();
				}
			})
		})
	}
	it("Test to traverse web table and click on text matching condition and count cart number", function() {
		browser.driver.manage().window().maximize();
		browser.get('https://qaclickacademy.github.io/protocommerce/');
		expect(element(by.css("div[class='jumbotron']>:nth-child(1)")).getText()).toBe("Protractor Tutorial");
		element(by.linkText("Shop")).click();
		selectItem("Nokia Edge");
		selectItem("iphone X");
		element(by.partialLinkText("Checkout")).getText().then(function(text) {
			//console.log(text);
			var str1 = text.slice(10);//Removes characters from 0 to 10 and return remaining characters as string.
			expect(str1.slice(1, 2)).toBe("2");//Removes characters from 1 to 2 and return remaining characters as string.
		})
	})
})