var createItem = require('./lib/item-creation');
var kadala = require('./lib/kadala');
var craftItem = require('./lib/crafting/craft-item');
var getCraftable = require('./lib/crafting/get-craftable');

//reveal module
var d3sim = {
	createItem:createItem,

	setKadala:kadala.setKadala,
	kadalaRoll:kadala.kadalaRoll,

	craftItem:craftItem,
	getCraftable:getCraftable
};

module.exports = d3sim;