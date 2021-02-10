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
		element(by.css("a[href='/angularJs-protractor/WebTable']")).click();
		var tabledata = element.all(by.css("table[st-table='rowCollection']>thead"));//Locate entire table

		// get rows 
		var rows = tabledata.all(by.css("table[st-table='rowCollection']>thead>:nth-child(1)"));
		//Below line is alternative for above line. Note the change in css.
		//var rows = tabledata.all(by.css("table[st-table='rowCollection']>thead>tr")).first();//Returns only first matching element

		// get cell values
		var cells = rows.all(by.tagName("th"));
			cells.get(0).getText().then(function(text) {//For testing purpose
				console.log(text);
			})

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
})