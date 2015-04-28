var util = require('../util');

var affixes = require('../../data/affixes');

var affixRoll = function(affix,rarity,slot,ps,min,max) {
	var affixDiv = {
		CritChance:2,
		BlindHit:10,
		FearHit:10,
		FreezeHit:10,
		ChillHit:10,
		ImmobHit:10,
		SlowHit:10,
		KnockHit:10,
		StunHit:10,
		SpiritRegen:100,
		HatredRegen:100,
		FreezeShield:2
	};
	var value;

	//we need to get min and max values if they were not provided
	var minName = 'min'+rarity.toLowerCase().slice(0,1);
	var maxName = 'max'+rarity.toLowerCase().slice(0,1);

	//damage ranges are rolled differently from others
	if ((affix.indexOf('Dmg_') > -1 || affix === 'AvgDamage')) {
		value = [];
		min = affixes[slot.toLowerCase()][ps][affix][minName] || 
			affixes[slot.toLowerCase()][ps][affix].minl || 
			affixes[slot.toLowerCase()][ps][affix].min;
		max = affixes[slot.toLowerCase()][ps][affix][maxName] || 
			affixes[slot.toLowerCase()][ps][affix].maxl || 
			affixes[slot.toLowerCase()][ps][affix].max;

		//this rolls the minimum value
		value.push(util.intRandom(min[0],max[0]));

		//this rolls a delta value and adds to the existing minimum
		value.push(value[0] + util.intRandom(min[1],max[1]));
	}
	else {

		//if there are no values we dont need to roll them, just return
		if (!affixes[slot.toLowerCase()][ps].hasOwnProperty(affix) && typeof min === 'undefined' && typeof min === 'undefined') {
			return null;
		}

		if (typeof min === 'undefined' && typeof max === 'undefined') {
			//fallback to lower values if not found
			min = affixes[slot.toLowerCase()][ps][affix][minName] || 
			affixes[slot.toLowerCase()][ps][affix].minl || 
			affixes[slot.toLowerCase()][ps][affix].min;

			max = affixes[slot.toLowerCase()][ps][affix][maxName] || 
			affixes[slot.toLowerCase()][ps][affix].maxl || 
			affixes[slot.toLowerCase()][ps][affix].max;
		}

		//if given an array we need to roll all values
		if (Array.isArray(min) && Array.isArray(max)) {
			value = [];

			//length of given parameters (likely 2)
			var length = min.length;
			for (var i = 0; i < length; i ++) {
				value.push(util.intRandom(min[i],max[i]));
			}
		}
		else {
			value = util.intRandom(min,max);
		}

		//if we need to divide value do so here
		if (affixDiv.hasOwnProperty(affix)) {
			value = parseFloat(value/affixDiv[affix]);

			//setting the decimal length based on number divided
			if (affixDiv[affix].length === 3) {
				value.toFixed(3);
			}
			else {
				value.toFixed(2);
			}
		}
	}

	return value;
};

module.exports = affixRoll;