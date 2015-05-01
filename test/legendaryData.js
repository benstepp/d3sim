var expect = require('chai').expect;

var legendaryData = require('../src/data/legendary');
var affixes = require('../src/data/affixes');
var affixMap = require('../src/data/affixes/affix-map');

function legendaryTest(item) {
	describe('verify that legendary data has parameters needed to build an item', function() {

		it('should have a name', function() {
			expect(item.name).to.be.a('string');
		});

		it('should have a weight given for kadala', function() {
			expect(item.weight).to.be.a('number');
		});

		it('should have an image pointing to blizzard cdn', function() {
			expect(item.image).to.be.a('string');
			expect(item.image).to.contain('//media.blizzard.com/');
			expect(item.image).to.include('.png');
		});

		it('should have flavor text', function() {
			expect(item.flavor).to.be.a('string');
		});

		it('should have a hardcore/season boolean', function() {
			expect(item.hc).to.be.a('boolean');
			expect(item.season).to.be.a('boolean');
		});

		it('should have explicit primary and secondary objects', function() {
			expect(item.primary).to.be.an('object');
			expect(item.secondary).to.be.an('object');
		});

		it('should have between 3 and 8 affixes', function() {
			var affixes = Object.keys(item.primary).concat(Object.keys(item.secondary));
			expect(affixes.length).to.be.at.least(3);
			expect(affixes.length).to.be.at.most(8);
		});
	});
}

function test() {
	for (var slot in legendaryData) {
		legendaryData[slot].forEach(function(item) {
			legendaryTest(item);
		}); //jshint ignore:line
	}
}

test();