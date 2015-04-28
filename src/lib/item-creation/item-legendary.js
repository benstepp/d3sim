var legendaryData = require('../../data/legendary');

var itemBase = require('./item-base');

//for legendary and ancient (orange) items with specific properties to be rolled
var itemLegendary = function(rarity, slot, dClass,legendaryName) {

	//inherit properties from base d3item object
	itemBase.call(this, rarity, slot, dClass);

	//pull legendaryData based on name given
	 var data = (function pullData() {
		var slotItems = legendaryData[slot.toLowerCase()];

		var slotItemsLength = slotItems.length;
		while(slotItemsLength--) {
			if (slotItems[slotItemsLength].name === legendaryName){
				return slotItems[slotItemsLength];
			}
		}
	})();

	if (data.hasOwnProperty('set')) {
		this.color='green';
	}
	else {
		this.color='orange';
	}

	//name the object
	this.name = legendaryName;

	//save data to this object
	this.type = data.type;

	this.primaries = data.primary;
	this.secondaries = data.secondary;

	if (data.hasOwnProperty('set')) {
		this.set = data.set;
	}
	this.image = data.image;
	this.flavor = data.flavor;
};

module.exports = itemLegendary;