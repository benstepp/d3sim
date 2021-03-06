var expect = require('chai').expect;

var affixes = require('../src/data/affixes');
var affixMap = require('../src/data/affixes/affix-map');
var d3sim = require('../src');

function itemTest(item) {

	describe('Tests all properties of a returned item to verify that the stats are possible', function() {

		it('should have a name', function() {
			expect(item.name).to.be.a('string');
		});

		it('should have a valid rarity', function() {
			expect(item.rarity).to.be.a('string');
			expect(['magic','rare','legendary','ancient']).to.include(item.rarity);
		});

		it('should have a valid color', function() {
			expect(item.color).to.be.a('string');
			expect(['blue','yellow','orange','green']).to.include(item.color);
		});

		it('should have a slot that is valid', function() {
			expect(item.slot).to.be.a('string');
			expect(Object.keys(affixes)).to.include(item.slot);
		});

		it('should have an item type that is valid for a given slot', function() {
			expect(item.type).to.be.a('string');
			expect(Object.keys(affixes[item.slot].type)).to.include(item.type);
		});

		it('should have an image pointing to blizzard cdn', function() {
			expect(item.image).to.be.a('string');
			expect(item.image).to.include('//media.blizzard.com/');
			expect(item.image).to.include('.png');
		});

		it('should have primary and secondary objects', function() {
			expect(item.primaries).to.be.a('object');
			expect(item.secondaries).to.be.a('object');
		});

		it('should have between one and seven affixes', function() {
			var affixes = Object.keys(item.primaries).concat(Object.keys(item.secondaries));
			expect(affixes.length).to.be.at.least(1);
			expect(affixes.length).to.be.at.most(8);
		});

	});
}

function test() {
	var dClasses = ['Barbarian','Crusader','Monk','Demon Hunter','Wizard','Witch Doctor'];
	var dClassLength = dClasses.length;
	var slots = ['amulet','belt','boots','bracers','chest','gloves','helm','pants','ring','shoulders','mojo','shield','onehand','quiver','source','twohand'];
	var slotLength = slots.length;

	for (var y = 0; y < dClassLength; y++) {
		d3sim.setKadala(dClasses[y], true, true);
		for (var t = 0; t < slotLength; t++) {
			for (var i =0; i < 100; i++) {
				var it = d3sim.kadalaRoll(slots[t]);
				itemTest(it);
			}
		}
	}
}

test();