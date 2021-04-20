const { browser, element } = require("protractor")

//All specs below can be run and results can be validated.
//The description mentioned in each spec is easier to understand than the official Jasmine documentation.
//This POC can be used to quickly pick up an assertion/expectation from the below list and perform the test as per their project 
//requirements.

describe("Test suite for demonstrating jasmine matchers/expectations",function(){
    it("Test to verify boolean values - Can be used to test a radio button",function(){
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        expect(element(by.name("name")).isEnabled()).toBe(true);
    })

    it("Test to verify not to be - Can be used to test if a radio button is NOT enabled",function(){
        expect(element(by.name("inlineRadioOptions")).isSelected()).not.toBe(true);
    })

    it("Test to demo toEqual - Comparing objects using === operator",function(){
        let a = 10;
        let c = 10;
        expect(a).toBe(c);

        var foo = { 
            a: 12,
            b: 34
          };
          var bar = {
            a: 12,
            b: 34
          };
          //Comparing two objects for same type and same value.
          expect(foo).toEqual(bar);
    })

    it("The 'toMatch' matcher is for regular expressions - Compares actual value, expected value (Regex)",function(){
        expect(element(by.css("div[class='jumbotron'] h6")).getText()).toMatch(/learning/);
        expect(element(by.css("div[class='jumbotron'] h6")).getText()).toMatch("learning");
        expect(element(by.css("div[class='jumbotron'] h6")).getText()).not.toMatch(/quux/);
    })

    it("The 'toBeDefined' matcher compares against `undefined` - Assert to make sure if an object property is defined", function() {
        var a = {
          foo: "foo"
        };
        //Here expected value is always defined. If actual value returned is defined then spec will pass, else will fail.
        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
      });

      it("The `toBeUndefined` matcher compares against `undefined` - Assert to make sure if an object property is undefined", function() {
        var a = {
          foo: "foo"
        };
        //Here expected value is always undefined. If actual value returned is undefined then spec will pass, else will fail.
        expect(a.foo).not.toBeUndefined();
        expect(a.bar).toBeUndefined();
      });

      it("The 'toBeNull' matcher compares against null  - Assert to test if a value is null", function() {
        var a = null;
        var foo = "foo";
    
        expect(a).toBeNull();
        expect(foo).not.toBeNull();
      });

      it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
        //toBeTruthy passes only if expected value returned (after coercion) is Javascript truthy in a boolean context.
        //i.e. All values are truthy unless they are defined as falsy
        //Falsy values are false , 0 , -0 , 0n , "" , null , undefined , and NaN.
    
        expect(element(by.name("name")).isEnabled()).toBeTruthy();
        expect(element(by.id("inlineRadio3")).isEnabled()).not.toBeTruthy();
      });

      it("The 'toBeFalsy' matcher is for boolean casting testing", function() {
        //toBeFalsy passes only if expected value returned (after coercion) is Javascript falsy in a boolean context.
        //Falsy values are false , 0 , -0 , 0n , "" , null , undefined , and NaN.
        //If expected value returns any of above falsy values it will pass.
    
        expect(element(by.id("inlineRadio3")).isEnabled()).toBeFalsy();
      });

      it("toContain - Finding an element in an array and asserting with predefined value", function() {
        var colors = ['red','green','blue'];
        var item = [];
        colors.forEach(function(color){
          item.push(color);
        });
        expect(item).toContain("blue");
        
      });

      it("toContain - Finding a substring", async function() {

        var footerText = await element(by.css("p[class = 'm-0 text-center text-white']")).getText();
        expect(footerText).toContain("2018");
      });

      it("The 'toBeLessThan' matcher is for mathematical comparisons", function() {
        var a = 62.909, b = 58;
        expect(b).toBeLessThan(a);
      });

      it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function() {
        var a = 88, b = 3;
        expect(a).toBeGreaterThan(b);
      });

      it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
        var a = function() {//This function will not throw error
          return 1 + 2;
        };
        var b = function() {//This function will throw error
          return z + 1;
        };
        var c = function() {//This function will throw error
          throw 'what';
        };
    
        expect(a).not.toThrow();
        expect(b).toThrow();
        expect(c).toThrow('what');
      });

      it("The 'toThrowError' matcher is for testing a specific thrown exception", function() {
        var a = function() {
          throw new TypeError("Test error");
        };
    
        expect(a).toThrowError("Test error");
        expect(a).toThrowError(/error/);
        expect(a).toThrowError(TypeError);
        expect(a).toThrowError(TypeError, "Test error");
    });
    
})