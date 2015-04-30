var pBarbarian = require('./passives/barbarian');
var pCrusader = require('./passives/crusader');
var pDemonHunter = require('./passives/demon-hunter');
var pMonk = require('./passives/monk');
var pWitchDoctor = require('./passives/witch-doctor');
var pWizard = require('./passives/wizard');

var skills = {
	passives:{
		barbarian:pBarbarian,
		crusader:pCrusader,
		demonHunter:pDemonHunter,
		monk:pMonk,
		witchDoctor:pWitchDoctor,
		wizard:pWizard
	}
};

module.exports = skills;