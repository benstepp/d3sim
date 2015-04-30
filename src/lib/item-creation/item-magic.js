var util = require('../util');

var affixes = require('../../data/affixes');
var affixMap = require('../../data/affixes/affix-map.js');

var itemBase = require('./item-base');

//for magic (blue) items with prefix and suffix rolling
var itemMagic = function(rarity, slot, dClass) {

	//inherit properties from base d3item object
	itemBase.call(this, rarity, slot, dClass);
	this.color='blue';

	//initialize the primary and secondary objects
	this.primaries = {};
	this.secondaries = {};

	//pull all of the primaries and secondaries for a given slot
	var affixDumpPri = Object.keys(affixes[slot.toLowerCase()].primary);
	var affixDumpSec = Object.keys(affixes[slot.toLowerCase()].secondary);

	var affixDump = affixDumpPri.concat(affixDumpSec);
	var affixDumpLength = affixDump.length;

	//initialize possible prefixes and suffix arrays to push the affixes into
	var prefixes = [];
	var suffixes = [];

	//loop through all affixes and push the key into the appropriate array
	//need to check the affixMap here to determine prefix or suffix
	for (var i = 0; i < affixDumpLength; i++) {
		var affix = affixMap[affixDump[i]];
		if (affix.hasOwnProperty('prefix_en')){
			//now check for excludes
			if (affix.hasOwnProperty('exclude') &&
				(affix.exclude.indexOf(dClass) === -1 || 
				affix.exclude.indexOf(this.type) === -1)) {
				prefixes.push(affixDump[i]);
			}
			//if it doesnt have an excludes
			else if(!affix.hasOwnProperty('exclude')){
				prefixes.push(affixDump[i]);
			}
		}
		else if (affix.hasOwnProperty('suffix_en')) {
			if (affix.hasOwnProperty('exclude') &&
				(affix.exclude.indexOf(dClass) === -1 || 
				affix.exclude.indexOf(this.type) === -1)) {
				suffixes.push(affixDump[i]);
			}
			else if(!affix.hasOwnProperty('exclude')) {
				suffixes.push(affixDump[i]);
			}
		}
	}

	//random a prefix and a suffix
	var prefix = prefixes[util.intRandom(0,prefixes.length - 1)];
	var suffix = suffixes[util.intRandom(0,suffixes.length - 1)];

	//now determine wheter the prefix and suffix is a primary or a secondary
	if (affixDumpPri.indexOf(prefix) !== -1) {
		this.primaries[prefix] = null;
	}
	else {
		this.secondaries[prefix] = null;
	}
	if (affixDumpPri.indexOf(suffix) !== -1) {
		this.primaries[suffix] = null;
	}
	else {
		this.secondaries[suffix] = null;
	}

	//name the object using prefix, suffix, and item type
	this.name = affixMap[prefix].prefix_en + ' '+affixes[slot.toLowerCase()].type[this.type].name_en+' '+ affixMap[suffix].suffix_en;

};

module.exports = itemMagic;