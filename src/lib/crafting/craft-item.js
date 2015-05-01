var util = require('../util');

var createItem = require('../item-creation');

var craftItem = function(slot,dClass,name) {

	var item;
	//need to check for a 10% chance to roll ancient
	var rarityPick = util.intRandom(0,10);

	if (rarityPick <= 9) {
		item = createItem('legendary',slot,dClass,name);
	}
	else {
		item = createItem('ancient',slot,dClass,name);
	}

	return item;
};

module.exports = craftItem;