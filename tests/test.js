var d3sim = require('../src');

//This test simply generates 10000 items for every combination of classes/slots
function test() {
	var dClasses = ['Barbarian','Crusader','Monk','Demon Hunter','Wizard','Witch Doctor'];
	var dClassLength = dClasses.length;
	var slots = ['amulet','belt','boots','bracers','chest','gloves','helm','pants','ring','shoulders','mojo','shield','onehand','quiver','source','twohand'];
	var slotLength = slots.length;

	for (var y = 0; y < dClassLength; y++) {
		console.log(dClasses[y]);
		d3sim.setKadala(dClasses[y], true, true);
		for (var t = 0; t < slotLength; t++) {
			console.log(slots[t]);
			for (var i =0; i < 10000; i++) {
				var it = d3sim.kadalaRoll(slots[t]);
			}
		}
	}
}

test();