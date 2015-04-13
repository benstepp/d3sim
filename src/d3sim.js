var legendaryData = require('./data/legendary/index.js');
var affixes = require('./data/affixes/index.js');
var affixMap = require('./data/affixes/affixMap.js');
var classMap = {
	'Demon Hunter':'Dexterity',
	Monk:'Dexterity',
	Barbarian:'Strength',
	Crusader:'Strength',
	'Witch Doctor':'Intelligence',
	Wizard:'Intelligence'
};

//create the object to export
var d3sim = {
	createItem:createItem,

	magicItem:magicItem,
	rareItem:rareItem,
	legendaryItem:legendaryItem

};


//shared properties accross diablo 3 items regardless of parameters
var d3Item = function(rarity, slot, dClass) {

	var slots = Object.keys(affixes);
	var classes = Object.keys(classMap);

	//if the class isnt in an array of valid classes derived from classMap
	if (classes.indexOf(dClass) === -1) {
		var cMessage = 'Invalid Diablo 3 Class given. Valid classes are:';
		var classLength = classes.length;
		while(classLength--) {
			cMessage += ' ';
			cMessage += classes[classLength];
		}
		console.error(cMessage);
		return;
	}

	//check slot now
	if (slots.indexOf(slot.toLowerCase()) === -1) {
		var sMessage = 'Invalid Slot given. Valid slots are:';
		var slotLength = slots.length;
		while(slotLength--) {
			sMessage += ' ';
			sMessage += slots[slotLength];
		}
		console.error(sMessage);
		return;
	}

	//save this given data to the new item after checks have been done
	this.slot = slot;
	this.rarity = rarity;

};

//for magic (blue) items with prefix and suffix rolling
var magicItem = function(rarity, slot, dClass) {

	//inherit properties from base d3item object
	d3Item.call(this, rarity, slot, dClass);

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
			prefixes.push(affixDump[i]);
		}
		else if (affix.hasOwnProperty('suffix_en')) {
			suffixes.push(affixDump[i]);
		}
	}

	//random a prefix and a suffix
	var prefix = prefixes[intRandom(0,prefixes.length - 1)];
	var suffix = suffixes[intRandom(0,suffixes.length - 1)];

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
};

//for rare (yellow) items with random primary and suffix rolling
var rareItem = function(rarity, slot, dClass) {

	//inherit properties from base d3item object
	d3Item.call(this, rarity, slot, dClass);

	//initialize the primary and secondary objects
	this.primaries = {};
	this.secondaries = {};

	//if a class is given, ensure that there is a main stat primary;
	if (Object.keys(classMap).indexOf(dClass) !== -1) {
		this.primaries.MAIN = null;
		//then roll between 1-3 primaries
		this.primaries.RANDOM = intRandom(1,3);
	}
	else{
		this.primaries.RANDOM = intRandom(1,4);
	}

	//roll for secondaries;
	this.secondaries.RANDOM = intRandom(1,2);

};

//for legendary and ancient (orange) items with specific properties to be rolled
var legendaryItem = function(rarity, slot, dClass,legendaryName) {};
var ancientItem = function(rarity, slot, dClass,legendaryName) {};

function createItem(rarity, slot, dClass, legendaryName) {

	//determine what constructor to use when creating the item
	//also serves as a check for valid rarity
	var constructor;
	switch(rarity.toLowerCase()) {
		case 'magic':
			constructor = magicItem;
			break;
		case 'rare':
			constructor = rareItem;
			break;
		case 'legendary':
			constructor = legendaryItem;
			break;
		case 'ancient':
			constructor = legendaryItem;
			break;
		default:
			console.error('Invalid rarity given');
	}

	//execute item creation using a new object from constructor
	var newItem = new constructor();

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
	return Math.round((Math.random()*(max-min)) + min);
}


var testing = new magicItem('Magic','Amulet','Wizard');
console.log(testing);