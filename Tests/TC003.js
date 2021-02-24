/**Test case automation practice after course completion
 * Verify header labels
 * Verify first name search to display matching records
 * Verify global name search to display matching records
 * Read and print all records in web table
 * Search for a specific text in web table
 * Verify sorting.
 */
describe("Handling web tables", function() {
	it("Retrieve header row labels and and validate text", function() {
		browser.waitForAngularEnabled(false);
		browser.get("https://www.globalsqa.com/angularjs-protractor-practice-site/");
		browser.executeScript('window.scrollTo(0,500);').then(function(arg0) {//Scroll down
			element(by.css("a[href='/angularJs-protractor/WebTable']")).click();
		})
		
		var tabledata = element.all(by.css("table[st-table='rowCollection']>thead"));//Locate entire table

		// get rows 
		var rows = tabledata.all(by.css("table[st-table='rowCollection']>thead>:nth-child(1)"));
		//Below line is alternative for above line. Note the change in css.
		//var rows = tabledata.all(by.css("table[st-table='rowCollection']>thead>tr")).first();//Returns only first matching element

		// get cell values
		var cells = rows.all(by.tagName("th"));
		cells.count().then(function(count) {//Get cell count and catch value returned by promise
			console.log("Cell count: "+count);
			for(var i = 0; i<count;i++){//Loop through from 0 to count and get text of each web element
				cells.get(i).getText().then(function(text) {//For testing purpose
					console.log(text);
				})
			}
		})

		//Assert each element at index n using get(index) function applicable on element.all variable.
		expect(cells.get(0).getText()).toEqual("firstName");
		expect(cells.get(1).getText()).toEqual("lastName");
		expect(cells.get(2).getText()).toEqual("age");
		expect(cells.get(3).getText()).toEqual("email");
		expect(cells.get(4).getText()).toEqual("balance");
	})
	
	it("Another way to retrieve header row labels and and validate text", function() {
		//Using map function in protractor API.
		var items = element.all(by.css("table[st-table='rowCollection']>thead>:nth-child(1) th")).map(function(elm, index) {
			  return {
			    index: index,
			    text: elm.getText()
			    //class: elm.getAttribute('class')
			  };
			});
			expect(items).toEqual([
			  {index: 0, text: 'firstName'},
			  {index: 1, text: 'lastName'},
			  {index: 2, text: 'age'},
			  {index: 3, text: 'email'},
			  {index: 4, text: 'balance'}
			]);
	})
	
/*	it("Get text of a particular record in web table", function() {
		var table = element.all(by.css("table[st-table='rowCollection']>thead"));//Locate entire table
		var rows = table.all(by.xpath("//table[@st-table='rowCollection']/tbody/tr")).each(function(item) {
			var cells = item.all(by.tagName("td"));
			cells.count().then(function(count) {//Get cell count and catch value returned by promise
				for(var i = 0; i<count;i++){//Loop through from 0 to count
					cells.get(i).getText().then(function(text) {//get text of each web element
						if(text == "Dupont"){//No unique text found in this web table. So unable to assert properly
						expect(text).toEqual("Dupont");
						}
					})
					//console.log();
				}
			})
			
		});

	})*/
	
	it("Search for a particular text and verify search results", function() {
		//var EC = protractor.ExpectedConditions;
		element(by.css("input[placeholder='search for firstname']")).sendKeys("Robert");//Enter text in search box
		browser.sleep(3000);
		element.all(by.xpath("//table[@st-table='rowCollection']/tbody/tr")).count().then(function(cnt) {
			console.log("No of matching records: "+cnt);
		})
		
		element.all(by.xpath("//table[@st-table='rowCollection']/tbody/tr")).each(function(item) {//Iterate on search results
			//var stale = EC.not(EC.stalenessOf(item.element(by.css("td:nth-child(1)"))));
			//browser.wait(stale, 30000);
			item.element(by.css("td:nth-child(1)")).getText().then(function(text) {//Get text of each row in a column and assert.
						expect(text).toEqual("Robert");
					});			
		});
	})
})