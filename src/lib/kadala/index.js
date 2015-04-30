var legendaryData = require('../../data/legendary');
var createItem = require('../item-creation');

//these two variables act as privates to hold persistent data between rolls
//this way we dont have to calculate it every roll
var kadalaItems = {};
var kadalaClass;

var setKadala = function(dClass,seasonal,hardcore) {

	var slots = Object.keys(legendaryData);
	kadalaClass = dClass;
	var slotCount = slots.length;
	for (var i = 0; i < slotCount; i++) {

		//initialize this slot object
		kadalaItems[slots[i]] = {};
		//set the total slot weight to zero
		kadalaItems[slots[i]].total = 0;

		//array of all items for a given slot
		var items = legendaryData[slots[i]];
		var itemLength = items.length;

		//sort out all of the smart and not so smart loot
		//to determine if we roll through all items or just smart ones
		var smartLoot = [];
		var notSmartLoot = [];

		for (var j =0; j < itemLength; j++) {
			//keep seasonal/hc items out of non-seasonal/softcore
			if((!seasonal && items[j].season) || (!hardcore && items[j].hc)) {
				continue;
			}
			else {
				//push into correct loot pool
				if (items[j].smartLoot.indexOf(dClass) !== -1) {
					smartLoot.push(items[j]);
				}
				else {
					notSmartLoot.push(items[j]);
				}

			}
		}

		//set up loot pool
		kadalaItems[slots[i]].items = (smartLoot.length === 0) ? notSmartLoot : smartLoot;

		//overwrite these and loop through again to get total weight
		items = kadalaItems[slots[i]].items;
		itemLength = items.length;
		for(var k = 0; k < itemLength; k ++) {
			kadalaItems[slots[i]].total += items[k].weight;
		}

	}

};

var kadalaRoll = function(slot) {
	var newItem = {};

	newItem.slot = slot;
	newItem.rarity = rollRarity();

	//if the item is legendary we need to roll for one
	if (newItem.rarity === 'legendary' || newItem.rarity === 'ancient') {
		newItem.name = rollLegendary(slot);
	}

	var returnableItem = createItem(newItem.rarity, slot,kadalaClass, newItem.name || false);
	return returnableItem;
};

var rollRarity = function() {
	var val = Math.random()*100;
	if (val >= 99) {return 'ancient';}
	if (val >= 90) {return 'legendary';}
	if (val < 80) {return 'rare';}
	else {return 'magic';}
};

var rollLegendary = function(slot) {
	var val = Math.random()*kadalaItems[slot].total;

	var itemsLength = kadalaItems[slot].items.length;
	for (var i =0; i < itemsLength; i++) {
		//it the weight of the item is zero continue because kadala cannot roll it
		if (kadalaItems[slot].items[i].weight === 0) {
			continue;
		}
		else {
			val -= kadalaItems[slot].items[i].weight;
			if (val < 0 ) {
				return kadalaItems[slot].items[i].name;
			}
		}
	}
};

var kadala = {
	setKadala:setKadala,
	kadalaRoll:kadalaRoll
};

module.exports = kadala;