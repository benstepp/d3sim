var util = require('../util');

var passives = require('../../data/skills').passives;

var affixSpecial = function(affix,dClass) {
	switch (affix){
		case 'HELLFIRE':
			return hellfire(dClass);
		case 'LIDLESS':
			return lidless(dClass);
		case 'WRATHBONEKING':
			return wrathBoneKing();
		case 'MANALD':
			return manald(dClass);
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

function wrathBoneKing() {
	var possibleAffixes = ['SlowHit','ChillHit','BlindHit'];
	var picked = util.intRandom(0, possibleAffixes.length - 1);

	var returnable = {
		secondary:{}
	};
	returnable.secondary[possibleAffixes[picked]] = null;

	return returnable;
}

function manald(dClass) {
	var manaldMap = {
		Barbarian:{
			affix:'MaxFury',
			type:'s',
			min:1,
			max:3
		},
		Crusader:{
			affix:'WrathRegen',
			type:'p',
			min:52,
			max:58
		},
		'Demon Hunter':{
			affix:'MaxDisc',
			type:'s',
			min:1,
			max:2
		},
		Monk:{
			affix:'SpiritRegen',
			type:'p',
			min:100,
			max:133
		},
		'Witch Doctor':{
			affix:'MaxMana',
			type:'s',
			min:30,
			max:39
		},
		Wizard:{
			affix:'MaxAp',
			type:'s',
			min:1,
			max:3
		}
	};

	var affix = manaldMap[dClass];
	var returnable = {
		primary:{},
		secondary:{}
	};

	//check if class affix is primary or secondary
	if (affix.type === 'p') {
		returnable.primary[affix.affix] = {
			min:affix.min,
			max:affix.max
		};
		returnable.secondary.RANDOM = 1;
	}
	else if (affix.type === 's') {
		returnable.secondary[affix.affix] = {
			min:affix.min,
			max:affix.max
		};
		returnable.primary.RANDOM = 1;
	}

	return returnable;
}

module.exports = affixSpecial;