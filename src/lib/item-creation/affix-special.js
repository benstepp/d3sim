var util = require('../util');

var passives = require('../../data/skills').passives;

var affixSpecial = function(affix,dClass) {
	switch (affix){
		case 'HELLFIRE':
			return hellfire(dClass);
		case 'LIDLESS':
			return lidless(dClass);
	}
};

function hellfire(dClass) {
	//get a random passive
	var passive = passives[dClass][util.intRandom(0,passives[dClass].length - 1)];

	return {
		secondary:{
			SPECIAL: {
				type:'legendary',
				text:'Gains the '+passive.name_en+' passive.',
				data:passive
			}
		}
	};
}

function lidless(dClass) {
	var lidlessMap = {
		Barbarian:{
			affix:'MaxFury',
			min:7,
			max:8
		},
		Crusader:{
			affix:'MaxWrath',
			min:6,
			max:7
		},
		Monk:{
			affix:'MaxSpirit',
			min:10,
			max:12
		},
		'Witch Doctor':{
			affix:'MaxMana',
			min:90,
			max:104
		},
		Wizard:{
			affix:'MaxAp',
			min:4,
			max:6
		}
	};
	var classes = Object.keys(lidlessMap);

	//if the class id not on the map because it is not smart loot, pick a class at random
	if (classes.indexOf(dClass) === -1) {
		dClass = classes[util.intRandom(0,classes.length - 1)];
	}

	//build the returnable object with special properties
	var returnable = {
		secondary:{}
	};
	returnable[lidlessMap[dClass].affix] = {
		min:lidlessMap[dClass].min,
		max:lidlessMap[dClass].max
	};

	return returnable;
}

module.exports = affixSpecial;