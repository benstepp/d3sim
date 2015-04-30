var util = require('../util');

var affixes = require('../../data/affixes');
var affixMap = require('../../data/affixes/affix-map.js');
var classMap = require('../../data/class-map');
var elements = require('../../data/elements');

var affixRoll = require('./affix-roll');
var affixSpecial = require('./affix-special');

var affixPick = function(item, rarity, slot, dClass) {
	var primaries;
	var secondaries;

	//if the item given has primary and secondary objects set them
	if (item.hasOwnProperty('primaries')) {
		primaries = item.primaries;
	}
	if (item.hasOwnProperty('secondaries')) {
		secondaries = item.secondaries;
	}

	//if the item has stats that must be rolled (avg damage on sources/mojo or attack speed on a quiver)
	//dont wory about legendaries or ancients because theirs are explicitely given in legendaryData
	if (affixes[slot].type[item.type].hasOwnProperty('baseAffix')&&
		(rarity !== 'legendary' || rarity !=='ancient')) {
		//use the default stats based on rarity
		primaries[affixes[slot].type[item.type].baseAffix] = null;
	}

	//get a list of keys for primaries/secondaries
	//use the length of this array to determine if we need to roll for it
	var primaryKeys = Object.keys(primaries);
	var secondaryKeys = Object.keys(secondaries);

	//final primary/secondary stats
	var primariesFinal = {};
	var secondariesFinal = {};

	//if a special stat is specified
	var specialIndexPrimary = primaryKeys.indexOf('SPECIAL');
	var specialIndexSecondary = secondaryKeys.indexOf('SPECIAL');
	var tempSpecial;
	if (specialIndexPrimary > -1) {
		tempSpecial = affixSpecial(primaries.SPECIAL, dClass);
		primaryKeys.splice(specialIndexPrimary,1);
	}
	if (specialIndexSecondary > -1) {
		tempSpecial = affixSpecial(secondaries.SPECIAL,dClass);
		secondaryKeys.splice(specialIndexSecondary,1);
	}
	if (typeof tempSpecial !== 'undefined') {
		if (tempSpecial.hasOwnProperty('primary')) {
			for (var keyP in tempSpecial.primary) {
				//sometimes a special will return random so we must check to add to existing random properties
				if (keyP === 'RANDOM' && primaries.hasOwnProperty('RANDOM')) {
					primaries[keyP] += tempSpecial.primary[keyP];
				}
				else {
					primariesFinal[keyP] = tempSpecial.primary[keyP];
				}
			}
		}
		if (tempSpecial.hasOwnProperty('secondary')) {
			for (var keyS in tempSpecial.secondary) {
				if (keyS === 'RANDOM' && secondaries.hasOwnProperty('RANDOM')) {
					secondaries[keyS] += tempSpecial.secondary[keyS];
				}
				else {
					secondariesFinal[keyS] = tempSpecial.secondary[keyS];
				}
			}
		}
	}

	//if a main stat is specified add to finals and splice
	var mainIndex = primaryKeys.indexOf('MAIN');
	if (mainIndex !== -1) {
		primariesFinal[classMap[dClass]] = {};
		primaryKeys.splice(mainIndex,1);
	}

	//if a random primary stat is specified splice from list
	var randomPrimariesIndex = primaryKeys.indexOf('RANDOM');
	if (randomPrimariesIndex > -1) {
		primaryKeys.splice(randomPrimariesIndex,1);
	}
	var randomSecondariesIndex = secondaryKeys.indexOf('RANDOM');
	if (randomSecondariesIndex > -1) {
		secondaryKeys.splice(randomSecondariesIndex,1);
	}

	//if an elemental primary stat is specified
	var elementalIndex = primaryKeys.indexOf('ELEMENTAL');
	if(elementalIndex !== -1) {
		var elementsLength = elements.length;

		//getting a list of class possible elements based on damage type
		var classPossibleElements = [];
		for (var k = 0; k < elementsLength; k++) {
			if (affixMap[elements[k]].hasOwnProperty('exclude') && 
				affixMap[elements[k]].exclude.indexOf(dClass) > -1){
					classPossibleElements.push(elements[k]);
			}
		}

		//pick one of these elemental damage types
		var picked = util.intRandom(0,classPossibleElements.length-1);
		primariesFinal[classPossibleElements[picked]] = {};
		primaryKeys.splice(elementalIndex,1);
	}

	//if a weapon damage affix is specified
	var weaponIndex = primaryKeys.indexOf('WEAPON_DAMAGE');
	if (weaponIndex !== -1) {

		//getting a list of weapon damage affixes
		var allPrims = affixes[slot.toLowerCase()].primary;
		var allWeaponDamage = [];
		for (var prima in allPrims) {
			if (prima.indexOf('Dmg_') === 0 && 
				affixMap[prima].hasOwnProperty('exclude') &&
				affixMap[prima].exclude.indexOf(dClass) === -1 &&
				affixMap[prima].exclude.indexOf(item.type) === -1) {
				allWeaponDamage.push(prima);
			}
		}

		//pick a random weapon damage
		var pickedDamage = util.intRandom(0,allWeaponDamage.length - 1);
		primariesFinal[allWeaponDamage[pickedDamage]] = {};

		primaryKeys.splice(weaponIndex,1);
	}

	//if a skill damage stat is specified
	var skillIndex = primaryKeys.indexOf('SKILLDAMAGE');
	if(skillIndex !== -1) {

		//getting a list of skill damage affixes
		var allPrimaries = affixes[slot.toLowerCase()].primary;
		var skillAffixes = [];
		for(var prim in allPrimaries) {
			if (prim.indexOf('Dmg', prim.length - 3) > -1 &&
				affixMap[prim].exclude.indexOf(dClass) === -1) {
				skillAffixes.push(prim);
			}
		}

		var pickedSkill = util.intRandom(0,skillAffixes.length - 1);
		primariesFinal[skillAffixes[pickedSkill]] = {};

		primaryKeys.splice(skillIndex,1);
	}

	//loop through the remaining keys and push to the thing
	var primaryKeysLength = primaryKeys.length;
	var secondaryKeysLength = secondaryKeys.length;
	for (var i = 0; i < primaryKeysLength;i++) {
		primariesFinal[primaryKeys[i]] = {};
	}
	for (var j = 0; j < secondaryKeysLength; j++) {
		secondariesFinal[secondaryKeys[j]] = {};
	}

	//revisit the random properties
	if (randomPrimariesIndex !== -1) {
		//count of random primaries
		var pCount = primaries.RANDOM;

		while(pCount--) {
			var affixP = getRandomAffix(Object.keys(primariesFinal).concat(Object.keys(secondariesFinal)),slot,dClass,'primary',item.type);
			primariesFinal[affixP] = {};
		}
	}
	if (randomSecondariesIndex !== -1) {
		var sCount = secondaries.RANDOM;

		while(sCount--) {
			var affixS = getRandomAffix(Object.keys(primariesFinal).concat(Object.keys(secondariesFinal)),slot,dClass,'secondary',item.type);
			secondariesFinal[affixS] = {};
		}
	}

	//check if primaries/secondaries were given forced values 
	for (var primary in primariesFinal) {

		//if it is special continue
		if (primary === 'SPECIAL') {
			continue;
		}

		//if min/max was given use those
		if(primaries.hasOwnProperty(primary) && primaries[primary] !== null) {
			primariesFinal[primary].value = affixRoll(primary,rarity,slot,'primary',primaries[primary].min,primaries[primary].max);
		}
		else if(elements.indexOf(primary) > -1 && primaries.hasOwnProperty('ELEMENTAL') && primaries.ELEMENTAL !== null) {
			primariesFinal[primary].value = affixRoll(primary,rarity,slot,'primary',primaries.ELEMENTAL.min,primaries.ELEMENTAL.max);
		}

		//otherwise just roll using slot defaults
		else {
			primariesFinal[primary].value = affixRoll(primary,rarity,slot,'primary');
		}

		//set text for primary
		if (affixMap.hasOwnProperty(primary) && affixMap[primary].hasOwnProperty('text_en')) {
			primariesFinal[primary].text = affixMap[primary].text_en;
		}

		//add type (for legs) if exists
		if (affixMap.hasOwnProperty(primary) && affixMap[primary].hasOwnProperty('type')) {
			primariesFinal[primary].type = affixMap[primary].type;
		}
	}
	for (var secondary in secondariesFinal) {

		//if special continue
		if (secondary === 'SPECIAL') {
			continue;
		}

		//if min/max was given use those
		if(secondaries.hasOwnProperty(secondary) && secondaries[secondary] !== null) {
			secondariesFinal[secondary].value = affixRoll(secondary,rarity,slot,'secondary',secondaries[secondary].min,secondaries[secondary].max);
		}

		//otherwise just roll using slot defaults
		else {
			secondariesFinal[secondary].value = affixRoll(secondary,rarity,slot,'secondary');
		}

		//set text for secondary
		if (affixMap.hasOwnProperty(secondary) && affixMap[secondary].hasOwnProperty('text_en')) {
			secondariesFinal[secondary].text = affixMap[secondary].text_en;
		}

		//add type (for legs) if exists
		if (affixMap.hasOwnProperty(secondary) && affixMap[secondary].hasOwnProperty('type')) {
			secondariesFinal[secondary].type = affixMap[secondary].type;
		}
	}

	//replace primary and secondary objects
	item.primaries = primariesFinal;
	item.secondaries = secondariesFinal;

	return item;
};

function getRandomAffix(current,slot,dClass,ps,type) {
	var currentLength = current.length;

	//all primary or secondary affixes for the slot
	var allAffixes = Object.keys(affixes[slot.toLowerCase()][ps]);
	var allAffixesLength = allAffixes.length;

	//dump possible affixes to roll here
	var affixList = [];

	outer:
	for(var i = 0; i < allAffixesLength; i++) {
		var affix = allAffixes[i];
		var affixData = affixes[slot.toLowerCase()][ps][affix];

		//continue loop if affix is already on the item
		if (current.indexOf(affix) !== -1) {
			continue outer;
		}
		//check the excludes for current
		if (affixMap[affix].hasOwnProperty('exclude')) {
			var excludes = affixMap[affix].exclude;

			//if the class is in this exlude array continue
			if (excludes.indexOf(dClass) > -1) {
				continue outer;
			}

			//if the item type is in the exclude array
			if (excludes.indexOf(type) > -1) {
				continue outer;
			}

			//if any of the current affixes are in the excludes array, continue
			inner:
			for(var j = 0; j < currentLength;j++) {
				if (excludes.indexOf(current[j])> -1) {
					//break this inner loop as soon as it is found
					continue outer;
				}
			}

		}

		//if it made it this far into the outer loop, push into possible affixes
		affixList.push(affix);

	}

	//return a random affix from possibles
	return affixList[util.intRandom(0,affixList.length - 1)];
}

module.exports = affixPick;