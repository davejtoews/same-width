require('jsdom-global')();
var assert = require('chai').assert;
var sameWidth = require('../sameWidth.js');

describe('sameWidth', function() {
	document.body.innerHTML = '<p>short text</p><p>longer piece of text</p>';
	sameWidth('p');
	var paragraphs = document.querySelectorAll('p');

	it('should set width on resize', function() {
		paragraphs[0].clientWidth = 10;
		paragraphs[1].clientWidth = 20;
		window.dispatchEvent(new Event('resize'));

		assert.equal(document.body.innerHTML, '<p style="width: 20px;">short text</p><p style="width: 20px;">longer piece of text</p>');		
	});
});