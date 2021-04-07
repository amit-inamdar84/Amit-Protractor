const { browser } = require("protractor")

describe("Test suite for demonstrating jasmine matchers/expectations",function(){
    it("Test to verify boolean values",function(){
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        expect(element(by.name("name")).isEnabled()).toBe(true);
    })

    it("Test to verify not to be",function(){
        expect(element(by.name("inlineRadioOptions")).isSelected()).not.toBe(true);
    })

    it("Test to demo toEqual",function(){
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
          //Comparing two objects
          expect(foo).toEqual(bar);
    })

    it("The 'toMatch' matcher is for regular expressions",function(){
        expect(element(by.css("div[class='jumbotron'] h6")).getText()).toMatch(/learning/);
        expect(element(by.css("div[class='jumbotron'] h6")).getText()).toMatch("learning");
        expect(element(by.css("div[class='jumbotron'] h6")).getText()).not.toMatch(/quux/);
    })

    it("The 'toBeDefined' matcher compares against `undefined`", function() {
        var a = {
          foo: "foo"
        };
        //Here expected value is always defined. If actual value returned is defined then spec will pass, else will fail.
        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
      });

      it("The `toBeUndefined` matcher compares against `undefined`", function() {
        var a = {
          foo: "foo"
        };
        //Here expected value is always undefined. If actual value returned is undefined then spec will pass, else will fail.
        expect(a.foo).not.toBeUndefined();
        expect(a.bar).toBeUndefined();
      });

      it("The 'toBeNull' matcher compares against null", function() {
        var a = null;
        var foo = "foo";
    
        expect(a).toBeNull();
        expect(foo).not.toBeNull();
      });
})