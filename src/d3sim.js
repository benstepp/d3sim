var legendaryData = require('./data/legendary/index.js');
var affixes = require('./data/affixes/index.js');
var affixMap = require('./data/affixes/affixMap.js');
var classMap = {
	'Demon Hunter':'Dexterity',
	Monk:'Dexterity',
	Barbarian:'Strength',
	Crusader:'Strength',
	'Witch Doctor':'Intelligence',
	Wizard:'Intelligence'
};

//create the object to export
var d3sim = {
	createItem:createItem,
	setKadala:setKadala,
	kadalaRoll:kadalaRoll
};


//shared properties accross diablo 3 items regardless of parameters
var d3Item = function(rarity, slot, dClass) {

	var slots = Object.keys(affixes);
	var classes = Object.keys(classMap);

	//if the class isnt in an array of valid classes derived from classMap
	if (classes.indexOf(dClass) === -1) {
		var cMessage = 'Invalid Diablo 3 Class given. Valid classes are:';
		var classLength = classes.length;
		while(classLength--) {
			cMessage += ' ';
			cMessage += classes[classLength];
		}
		console.error(cMessage);
		return;
	}

	//check slot now
	if (slots.indexOf(slot.toLowerCase()) === -1) {
		var sMessage = 'Invalid Slot given. Valid slots are:';
		var slotLength = slots.length;
		while(slotLength--) {
			sMessage += ' ';
			sMessage += slots[slotLength];
		}
		console.error(sMessage);
		return;
	}

	//save this given data to the new item after checks have been done
	this.slot = slot;
	this.rarity = rarity;

	//if rare or magic roll item type and save image
	if (rarity.toLowerCase() === 'magic' || rarity.toLowerCase() === 'rare') {

		//a reference to itemtype object to test for excludes
		var itemTypesRef = affixes[slot.toLowerCase()].type;
		var itemTypesKeys = Object.keys(itemTypesRef);
		var itemTypesLength = itemTypesKeys.length;

		var itemTypes = [];
		for (var i = 0; i < itemTypesLength; i++) {
			//if it has exclude property and class is not in it add to possibles
			if (itemTypesRef[itemTypesKeys[i]].hasOwnProperty('exclude')) {
				var exclude = itemTypesRef[itemTypesKeys[i]].exclude;
				if (exclude.indexOf(dClass) === -1) {
					itemTypes.push(itemTypesKeys[i]);
				}
			}
			//no excludes so just add to possibles
			else {
				itemTypes.push(itemTypesKeys[i]);
			}
		}

		//random through possible item types
		this.type = itemTypes[intRandom(0,itemTypes.length - 1)];
		//use class based image if available, otherwise use default
		this.image = affixes[slot.toLowerCase()].type[this.type].image[dClass] || affixes[slot.toLowerCase()].type[this.type].image.default ;
	}

};

//for magic (blue) items with prefix and suffix rolling
var magicItem = function(rarity, slot, dClass) {

	//inherit properties from base d3item object
	d3Item.call(this, rarity, slot, dClass);
	this.color='blue';

	//initialize the primary and secondary objects
	this.primaries = {};
	this.secondaries = {};

	//pull all of the primaries and secondaries for a given slot
	var affixDumpPri = Object.keys(affixes[slot.toLowerCase()].primary);
	var affixDumpSec = Object.keys(affixes[slot.toLowerCase()].secondary);

	var affixDump = affixDumpPri.concat(affixDumpSec);
	var affixDumpLength = affixDump.length;

	//initialize possible prefixes and suffix arrays to push the affixes into
	var prefixes = [];
	var suffixes = [];

	//loop through all affixes and push the key into the appropriate array
	//need to check the affixMap here to determine prefix or suffix
	for (var i = 0; i < affixDumpLength; i++) {
		var affix = affixMap[affixDump[i]];
		if (affix.hasOwnProperty('prefix_en')){
			prefixes.push(affixDump[i]);
		}
		else if (affix.hasOwnProperty('suffix_en')) {
			suffixes.push(affixDump[i]);
		}
	}

	//random a prefix and a suffix
	var prefix = prefixes[intRandom(0,prefixes.length - 1)];
	var suffix = suffixes[intRandom(0,suffixes.length - 1)];

	//now determine wheter the prefix and suffix is a primary or a secondary
	if (affixDumpPri.indexOf(prefix) !== -1) {
		this.primaries[prefix] = null;
	}
	else {
		this.secondaries[prefix] = null;
	}
	if (affixDumpPri.indexOf(suffix) !== -1) {
		this.primaries[suffix] = null;
	}
	else {
		this.secondaries[suffix] = null;
	}

	//name the object using prefix, suffix, and item type
	this.name = affixMap[prefix].prefix_en + ' '+affixes[slot.toLowerCase()].type[this.type].name_en+' '+ affixMap[suffix].suffix_en;

};

//for rare (yellow) items with random primary and suffix rolling
var rareItem = function(rarity, slot, dClass) {

	//inherit properties from base d3item object
	d3Item.call(this, rarity, slot, dClass);
	this.color='yellow';

	//initialize the primary and secondary objects
	this.primaries = {};
	this.secondaries = {};

	//if a class is given and the item type can roll it
	//ensure that there is a main stat primary;
	if (Object.keys(classMap).indexOf(dClass) !== -1 && 
		affixMap[classMap[dClass]].hasOwnProperty('excludes') && 
		affixMap[classMap[dClass]].excludes.indexOf(this.type) !== -1) {

		this.primaries.MAIN = null;
		//then roll between 1-3 primaries
		this.primaries.RANDOM = intRandom(1,3);
	}
	else{
		this.primaries.RANDOM = intRandom(1,4);
	}

	//roll for secondaries;
	this.secondaries.RANDOM = intRandom(1,2);

	//placeholder name for now;
	this.name = 'Rare ' + affixes[slot.toLowerCase()].type[this.type].name_en;

};

//for legendary and ancient (orange) items with specific properties to be rolled
var legendaryItem = function(rarity, slot, dClass,legendaryName) {

	//inherit properties from base d3item object
	d3Item.call(this, rarity, slot, dClass);

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

function createItem(rarity, slot, dClass, legendaryName) {

	//determine what constructor to use when creating the item
	//also serves as a check for valid rarity
	var constructor;
	switch(rarity.toLowerCase()) {
		case 'magic':
			constructor = magicItem;
			break;
		case 'rare':
			constructor = rareItem;
			break;
		case 'legendary':
			constructor = legendaryItem;
			break;
		case 'ancient':
			constructor = legendaryItem;
			break;
		default:
			console.error('Invalid rarity given');
	}

	//execute item creation using a new object from constructor
	var newItem = new constructor(rarity,slot,dClass,legendaryName);
	//roll for affixes
	rollStats(newItem, rarity, slot, dClass);

	return newItem;
}

function rollStats(item, rarity, slot, dClass) {
	var primaries;
	var secondaries;

	//if the item given has primary and secondary objects set them
	if (item.hasOwnProperty('primaries')) {
		primaries = item.primaries;
	}
	if (item.hasOwnProperty('secondaries')) {
		secondaries = item.secondaries;
	}

	//get a list of keys for primaries/secondaries
	//use the length of this array to determine if we need to roll for it
	var primaryKeys = Object.keys(primaries);
	var secondaryKeys = Object.keys(secondaries);

	//final primary/secondary stats
	var primariesFinal = {};
	var secondariesFinal = {};

	//if a main stat is specified add to finals and splice
	var mainIndex = primaryKeys.indexOf('MAIN');
	if (mainIndex !== -1) {
		primariesFinal[classMap[dClass]] = {};
		primaryKeys.splice(mainIndex,1);
	}

	//if a random primary stat is specified splice from list
	var randomPrimariesIndex = primaryKeys.indexOf('RANDOM');
	if (randomPrimariesIndex !== -1) {
		primaryKeys.splice(randomPrimariesIndex,1);
	}
	var randomSecondariesIndex = secondaryKeys.indexOf('RANDOM');
	if (randomSecondariesIndex !== -1) {
		secondaryKeys.splice(randomSecondariesIndex,1);
	}

	//if an elemental primary stat is specified
	var elementalIndex = primaryKeys.indexOf('ELEMENTAL');
	if(elementalIndex !== -1) {
		var elements = ['PhysDamage','ArcaneDamage','ColdDamage','FireDamage','PoisonDamage','HolyDamage','LightningDamage'];
		var elementsLength = elements.length;

		//getting a list of class possible elements based on damage type
		var classPossibleElements = [];
		for (var k = 0; k < elementsLength; k++) {
			if (affixMap[elements[k]].hasOwnProperty('exclude') && 
				affixMap[elements[k]].exclude.indexOf(dClass) === -1){
					classPossibleElements.push(elements[k]);
			}
		}

		//pick one of these elemental damage types
		var picked = intRandom(0,classPossibleElements.length-1);
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
		var pickedDamage = intRandom(0,allWeaponDamage.length - 1);
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
			if (prim.indexOf('Dmg', prim.length - 3) !== -1 &&
				affixMap[prim].exclude.indexOf(dClass) === -1) {
				skillAffixes.push(prim);
			}
		}

		var pickedSkill = intRandom(0,skillAffixes.length - 1);
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

		//if min/max was given use those
		if(primaries.hasOwnProperty(primary) && primaries[primary] !== null) {
			primariesFinal[primary].value = rollAffix(primary,rarity,slot,'primary',primaries[primary].min,primaries[primary].max);
		}

		//otherwise just roll using slot defaults
		else {
			primariesFinal[primary].value = rollAffix(primary,rarity,slot,'primary');
		}

		//set text for primary
		primariesFinal[primary].text = affixMap[primary].text_en;
		//add type (for legs) if exists
		if (affixMap[primary].hasOwnProperty('type')) {
			primariesFinal[primary].type = affixMap[primary].type;
		}
	}
	for (var secondary in secondariesFinal) {

		//if min/max was given use those
		if(secondaries.hasOwnProperty(secondary) && secondaries[secondary] !== null) {
			secondariesFinal[secondary].value = rollAffix(secondary,rarity,slot,'secondary',secondaries[secondary].min,secondaries[secondary].max);
		}

		//otherwise just roll using slot defaults
		else {
			secondariesFinal[secondary].value = rollAffix(secondary,rarity,slot,'secondary');
		}

		//set text for secondary
		secondariesFinal[secondary].text = affixMap[secondary].text_en;
		//add type (for legs) if exists
		if (affixMap[secondary].hasOwnProperty('type')) {
			secondariesFinal[secondary].type = affixMap[secondary].type;
		}
	}

	//replace primary and secondary objects
	item.primaries = primariesFinal;
	item.secondaries = secondariesFinal;

	return item;
}

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
			if (excludes.indexOf(dClass) !== -1) {
				continue outer;
			}

			//if the item type is in the exclude array
			if (excludes.indexOf(type) !== -1) {
				continue outer;
			}

			//if any of the current affixes are in the excludes array, continue
			inner:
			for(var j = 0; j < currentLength;j++) {
				if (excludes.indexOf(current[j])!== -1) {
					//break this inner loop as soon as it is found
					continue outer;
				}
			}

		}

		//if it made it this far into the outer loop, push into possible affixes
		affixList.push(affix);

	}

	//return a random affix from possibles
	return affixList[intRandom(0,affixList.length - 1)];
}

function rollAffix(affix,rarity,slot,ps,min,max) {

	var affixDiv = {
		CritChance:2,
		BlindHit:10,
		FearHit:10,
		FreezeHit:10,
		ChillHit:10,
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
			value.push(intRandom(min[i],max[i]));
		}
	}
	else {
		value = intRandom(min,max);
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

	return value;
}

//these two variables act as privates to hold persistent data between rolls
//this way we dont have to calculate it every roll
var kadalaItems = {};
var kadalaClass;

function setKadala(dClass,seasonal,hardcore) {

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

}

function kadalaRoll(slot) {
	var newItem = {};

	newItem.slot = slot;
	newItem.rarity = rollRarity();

	//if the item is legendary we need to roll for one
	if (newItem.rarity === 'legendary' || newItem.rarity === 'ancient') {
		newItem.name = rollLegendary(slot);
	}

	var returnableItem = createItem(newItem.rarity, slot,kadalaClass, newItem.name || false);
	return returnableItem;
}

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
		val -= kadalaItems[slot].items[i].weight;
		if (val < 0 ) {
			return kadalaItems[slot].items[i].name;
		}
	}

};

function intRandom(min,max) {
	return Math.round((Math.random()*(max-min)) + min);
}

function test() {
	var dClasses = ['Barbarian','Crusader','Monk','Demon Hunter','Wizard','Witch Doctor'];
	var dClassLength = dClasses.length;
	var slots = [/*'amulet','belt','boots','bracers','chest','gloves','helm','pants','ring','shoulders','mojo','shield'*/'onehand'];
	var slotLength = slots.length;

	for (var y = 0; y < dClassLength; y++) {
		console.log(dClasses[y]);
		setKadala(dClasses[y], true, true);
		for (var t = 0; t < slotLength; t++) {
			console.log(slots[t]);
			for (var i =0; i < 10000; i++) {
				var it = kadalaRoll(slots[t]);
			}
		}
	}
}

module.exports = d3sim;