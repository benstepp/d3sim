var util = require('../util');

var affixes = require('../../data/affixes');
var classMap = require('../../data/class-map');

//defined shared properties accross diablo 3 items regardless of parameters
var itemBase = function(rarity, slot, dClass) {

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

	//if rare or magic roll item type and save image
	if (rarity.toLowerCase() === 'magic' || rarity.toLowerCase() === 'rare') {

		//a reference to itemtype object to test for excludes
		var itemTypesRef = affixes[slot.toLowerCase()].type;
		var itemTypesKeys = Object.keys(itemTypesRef);
		var itemTypesLength = itemTypesKeys.length;

		var itemTypes = [];
		for (var i = 0; i < itemTypesLength; i++) {
			//if it has exclude property and class is not in it add to possibles
			if (itemTypesRef[itemTypesKeys[i]].hasOwnProperty('exclude')) {
				var exclude = itemTypesRef[itemTypesKeys[i]].exclude;
				if (exclude.indexOf(dClass) === -1) {
					itemTypes.push(itemTypesKeys[i]);
				}
			}
			//no excludes so just add to possibles
			else {
				itemTypes.push(itemTypesKeys[i]);
			}
		}

		//random through possible item types
		this.type = itemTypes[util.intRandom(0,itemTypes.length - 1)];
		//use class based image if available, otherwise use default
		this.image = affixes[slot.toLowerCase()].type[this.type].image[dClass] || affixes[slot.toLowerCase()].type[this.type].image.default ;
	}

};

module.exports = itemBase;