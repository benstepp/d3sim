var util = require('../util');

var legendaryData = require('../../data/legendary');
var affixes = require('../../data/affixes');
var affixMap = require('../../data/affixes/affix-map.js');

var affixOrder = require('./affix-order');
var affixPick = require('./affix-pick');
var affixRoll = require('./affix-roll');
var itemBase = require('./item-base');
var itemMagic = require('./item-magic');
var itemRare = require('./item-rare');
var itemLegendary = require('./item-legendary');

var createItem = function(rarity, slot, dClass, legendaryName) {

	//determine what constructor to use when creating the item
	//also serves as a check for valid rarity
	var constructor;
	switch(rarity.toLowerCase()) {
		case 'magic':
			constructor = itemMagic;
			break;
		case 'rare':
			constructor = itemRare;
			break;
		case 'legendary':
			constructor = itemLegendary;
			break;
		case 'ancient':
			constructor = itemLegendary;
			break;
		default:
			console.error('Invalid rarity given');
	}

	//execute item creation using a new object from constructor
	var newItem = new constructor(rarity,slot,dClass,legendaryName);

	//roll for affixes
	affixPick(newItem, rarity, slot, dClass);

	//pull any baseData like armor or weapon speed
	if(affixes[slot].type[newItem.type].hasOwnProperty('weapon')) {
		var baseWeapon = affixes[slot].type[newItem.type].weapon;
		var minimum; //attempt to keep browser from getting huge variables even though
		var maximum; //a new function is called idk. 

		for (var primary in newItem.primaries) {
			if (primary.indexOf('Dmg_') === 0) {
				minimum = parseInt(baseWeapon.min) + parseInt(newItem.primaries[primary].value[0]);
				maximum = parseInt(baseWeapon.max) + parseInt(newItem.primaries[primary].value[1]);
				break; //found bonus damage so break
			}
		}
		//no bonus damage after checking primaries so set to base
		if (typeof minimum === 'undefined' && typeof maximum === 'undefined') {
			minimum = baseWeapon.min;
			maximum = baseWeapon.max;
		}

		//calculate the weapon dps and save tooltip data to item
		var FlatDamageMult = (newItem.primaries.hasOwnProperty('FlatDamage'))?((newItem.primaries.FlatDamage.value)/100)+1 :1;
		var AttackSpeedMult = (newItem.primaries.hasOwnProperty('AttackSpeed'))?((newItem.primaries.AttackSpeed.value)/100)+1 :1;
		newItem.speed = baseWeapon.speed * AttackSpeedMult;
		newItem.weaponDps = ((minimum + maximum)/2)*(baseWeapon.speed)*AttackSpeedMult*FlatDamageMult;
		newItem.damageRange = [minimum,maximum];
	}

	if (affixes[slot].type[newItem.type].hasOwnProperty('armor')) {
		var baseArmor = util.intRandom(affixes[slot].type[newItem.type].armor.min,affixes[slot].type[newItem.type].armor.max);
		var bonusArmor = (newItem.primaries.hasOwnProperty('Armor')) ? newItem.primaries.Armor.value : 0;
		newItem.armor = baseArmor + bonusArmor;
	}

	affixOrder(newItem);

	return newItem;
};

module.exports = createItem;