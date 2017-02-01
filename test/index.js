require('jsdom-global')();
var assert = require('chai').assert;
var SameWidth = require('../SameWidth.js');

describe('sameWidth', function() {
	document.body.innerHTML = '<p>short text</p><p>longer piece of text</p>';
	
	var paragraphs = document.querySelectorAll('p');

	it('should set width', function() {
		paragraphs[0].clientWidth = 10;
		paragraphs[1].clientWidth = 20;
		SameWidth.set('p');

		assert.equal(document.body.innerHTML, '<p style="width: 20px;">short text</p><p style="width: 20px;">longer piece of text</p>');		
	});
	it('should unset width', function() {
		SameWidth.unset('p');
		assert.equal(document.body.innerHTML, '<p style="width: auto;">short text</p><p style="width: auto;">longer piece of text</p>');		
	});
	it('should set width on resize', function() {
		SameWidth.init('p');
		paragraphs[0].clientWidth = 30;
		paragraphs[1].clientWidth = 10;
		window.dispatchEvent(new Event('resize'));

		assert.equal(document.body.innerHTML, '<p style="width: 30px;">short text</p><p style="width: 30px;">longer piece of text</p>');		
	});

});