describe('hello world app', function(){
	it('should have a title', function (){
		browser.get('http://localhost:8000/src/');
		expect(browser.getTitle()).toEqual('Hello World');
	});
});

describe('name fields', function(){
	it('should have a title', function (){
		browser.get('http://localhost:8000/src/');

		var h1 = element.all(by.css('h1')).first();
		var fname = element.all(by.tagName('input')).first();
		var lname = element.all(by.tagName('input')).get(1);

		expect(h1.getText()).toEqual("Hello Dustin Sinkey!");
		expect(fname.getAttribute('value')).toEqual("Dustin");
		expect(lname.getAttribute('value')).toEqual("Sinkey");

		fname.clear().sendKeys('John');
		lname.clear().sendKeys('Smith');

		expect(h1.getText()).toEqual("Hello John Smith!");
		expect(fname.getAttribute('value')).toEqual("John");
		expect(lname.getAttribute('value')).toEqual("Smith");

	});
});