var util = require('../util');

var affixes = require('../../data/affixes');
var affixMap = require('../../data/affixes/affix-map');
var classMap = require('../../data/class-map');

var baseItem = require('./item-base');

//for rare (yellow) items with random primary and suffix rolling
var itemRare = function(rarity, slot, dClass) {

	//inherit properties from base d3item object
	baseItem.call(this, rarity, slot, dClass);
	this.color='yellow';

	//initialize the primary and secondary objects
	this.primaries = {};
	this.secondaries = {};

	//if a class is given and the item type can roll it
	//ensure that there is a main stat primary;
	if (Object.keys(classMap).indexOf(dClass) !== -1 && 
		affixMap[classMap[dClass]].hasOwnProperty('exclude') && 
		affixMap[classMap[dClass]].exclude.indexOf(this.type) !== -1) {

		this.primaries.MAIN = null;
		//then roll between 1-3 primaries
		this.primaries.RANDOM = util.intRandom(1,3);
	}
	else{
		this.primaries.RANDOM = util.intRandom(1,4);
	}

	//roll for secondaries;
	this.secondaries.RANDOM = util.intRandom(1,2);

	//placeholder name for now;
	this.name = 'Rare ' + affixes[slot.toLowerCase()].type[this.type].name_en;

};

module.exports = itemRare;