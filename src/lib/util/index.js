var intRandom = function(min,max) {
	return Math.round((Math.random()*(max-min)) + min);
};

var util = {
	intRandom:intRandom
};

module.exports = util;