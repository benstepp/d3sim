var pBarbarian = require('./passives/barbarian');
var pCrusader = require('./passives/crusader');
var pDemonHunter = require('./passives/demon-hunter');
var pMonk = require('./passives/monk');
var pWitchDoctor = require('./passives/witch-doctor');
var pWizard = require('./passives/wizard');

var skills = {
	passives:{
		Barbarian:pBarbarian,
		Crusader:pCrusader,
		'Demon Hunter':pDemonHunter,
		Monk:pMonk,
		'Witch Doctor':pWitchDoctor,
		Wizard:pWizard
	}
};

module.exports = skills;