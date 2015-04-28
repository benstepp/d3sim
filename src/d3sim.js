var createItem = require('./lib/item-creation');
var kadala = require('./lib/kadala');

//reveal module
var d3sim = {
	createItem:createItem,
	setKadala:kadala.setKadala,
	kadalaRoll:kadala.kadalaRoll
};

module.exports = d3sim;