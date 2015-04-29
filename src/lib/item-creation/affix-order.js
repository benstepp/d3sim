var elements = require('../../data/elements');

var affixOrder = function(item) {
	var primaries = item.primaries;
	var secondaries = item.secondaries;

	var primariesList = Object.keys(primaries);
	var secondariesList = Object.keys(secondaries);
	var primariesListLength = primariesList.length;
	var secondariesListLength = secondariesList.length;

	//first check for avg dmg on mojo and source
	if (item.slot === 'mojo' || item.slot === 'source') {
		if (primaries.hasOwnProperty('AvgDamage')) {
			item.primaries.AvgDamage.i = 0;
		}
	}

	var mainStats = ['Strength','Intelligence','Dexterity'];

	//loop through all primaries and apply checks
	for (var i =0; i < primariesListLength;i++) {
		//check for vitality
		if (primariesList[i] === 'Vitality') {
			item.primaries.Vitality.i = 3;
		}
		//check for weapon damage
		else if (primariesList[i].indexOf('Dmg_') === 0) {
			item.primaries[primariesList[i]].i = 0;
		}
		//check for elemental damage
		else if(elements.indexOf(primariesList[i]) > -1) {
			item.primaries[primariesList[i]].i = 1;
		}
		//check for skill dmg
		else if (primariesList[i].indexOf('Dmg', primariesList[i].length - 3) > -1) {
			item.primaries[primariesList[i]].i = 6;
		}
		//check for main stats
		else if (mainStats.indexOf(primariesList[i]) > -1) {
			item.primaries[primariesList[i]].i = 2;
		}
		//if it hasnt been explicitely given an order (mojo/source)
		else if (!item.primaries[primariesList[i]].hasOwnProperty('i')) {
			item.primaries[primariesList[i]].i =4;
		}
	}

	return item;
};

module.exports = affixOrder;