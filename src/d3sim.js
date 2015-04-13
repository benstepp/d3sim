var legendaryData = require('./legendary/index.js');
var affixes = require('./affixes/index.js');
var affixMap = require('./affixes/affixMap.js');

//create the object to export
var d3item = {
	createItem:createItem
};

function createItem(rarity, slot, dClass, legendaryName) {
	var newItem = {};

	var rarities = ['Magic','Rare','Legendary','Ancient'];
	var slots = Object.keys(affixes);
	var classMap = {
		'Demon Hunter':'Dexterity',
		Monk:'Dexterity',
		Barbarian:'Strength',
		Crusader:'Strength',
		'Witch Doctor':'Intelligence',
		Wizard:Intelligence
	};

	//if the rarity/slot/class are not valid let the user know
	if (rarities.indexOf(rarity) === -1) {
		var message = 'Invalid Rarity given. Valid rarities are:';
		var raritiesLength = rarities.Length;
		while(raritiesLength--) {
			message+=' ';
			message+=rarities[raritiesLength];
		}
	}

	//pull legendary data
	var legData;
	if (typeof legendaryName !== 'undefined') {
		legData = pullData(legendaryName);
	}
	else {
		legData = false;
	}

	//determine primary and secondary stats (not the brackets)
	var primaries;
	var secondaries;

	//for legendary/ancient items with data
	if (typeof legData === 'object' && legData.hasOwnProperty('primary')) {
		primaries = legData.primary;
	}
	if (typeof legData === 'object' && legData.hasOwnProperty('secondary')) {
		secondaries = legData.secondaries;
	}

	//for rare items we random between 2-4 primaries and 1-2 secondaries
	if (rarity === 'Rare') {
		//initialize the objects
		primaries = {};
		secondaries = {};

		//if a proper class was given, make sure there is a main stat on the item
		if (Object.keys(classMap).indexOf(dClass) !== -1) {
			primaries.MAIN = null;
			//then roll between 1-3 primaries
			primaries.RANDOM = intRandom(1,3);
		}
		else{
			primaries.RANDOM = intRandom(1,4);
		}

		//roll for secondaries;
		secondaries.RANDOM = intRandom(1,2);
	}

	//for magic items primary/secondary is less important
	//we need to determine if an item is prefix or suffix first
	if (rarity === 'Magic') {
		var affixDumpPri = Object.keys(affixes[slot].primary);
		var affixDumpSec = Object.keys(affixes[slot].secondary);
		var affixDump = Array.prototype.push.apply(affixDumpPri, affixDumpSec);
		var affixDumpLength = affixDump.length;

		var prefixes = [];
		var suffixes = [];

		//loop through all affixes and push the key into the appropriate array
		for (var i = 0; i < affixDumpLength; i++) {
			var affix = affixMap[affixDump[i]];
			if (affix.hasOwnProperty('prefix_en')){
				prefixes.push(affixDump[i]);
			}
			else if (affix.hasOwnProperty('suffix_en')) {
				suffixes.push(affixDump[i]);
			}
		}

		//random a prefix and a suffix
		var prefix = prefixes[intRandom(0,prefixes.length - 1)];
		var suffix = suffixes[intRandom(0,suffixes.length - 1)];

	}

	return newItem;
}


function pullData(slot,name) {
	var slotItems = legendaryData[slot];
	var slotItemsLength = slotItems.length;

	while(slotItemsLength--) {
		if (slotItems[slotItemsLength].name === name){
			return slotItems[slotItemLength];
		}
	}
}

function intRandom(min,max) {
	return (Math.random()*(max-min)) + min;
}



module.exports = d3item;