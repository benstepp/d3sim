var legendaryData = require('../../data/legendary');

var getCraftable = function() {

	var craftable = {};

	var slots = Object.keys(legendaryData);
	var slotsLength = slots.length;

	for (var i =0; i < slotsLength; i++) {

		//initialize array for each slot
		craftable[slots[i]] = [];

		var items = legendaryData[slots[i]];
		var itemsCount = items.length;
		//loop through all items and check for smartLoot
		for (var j = 0; j < itemsCount;j++) {

			//smartloot has the class so it is craftable
			if(items[j].smartLoot.indexOf(dClass) > -1) {
				craftable[slots[i]].push(items[j]);
			}
		}
	}

	return craftable;

};

module.exports = getCraftable;