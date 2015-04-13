var onehand = {
	slot_en:'1-Hand',
	type:{
		'Axe':{
			name_en:'Dire Axe',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/axe_1h_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.3,
				min:249,
				max:461
			},
			exclude:['Demon Hunter']
		},
		'Dagger':{
			name_en:'Punyal',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/dagger_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.5,
				min:107,
				max:321
			},
			exclude:['Demon Hunter']
		},
		'Mace':{
			name_en:'Skullsplitter',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/mace_1h_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.2,
				min:316,
				max:585
			},
			exclude:['Demon Hunter']
		},
		'Spear':{
			name_en:'Disemboweler',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/spear_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.2,
				min:353,
				max:526
			},
			exclude:['Demon Hunter']
		},
		'Sword':{
			name_en:'Champion Sword',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/sword_1h_301_demonhunter_male.png'
			},
			weapon:{
				speed:1.4,
				min:138,
				max:322
			},
			exclude:['Demon Hunter']
		},
		'Ceremonial Knife':{
			name_en:'Tecpatyl',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/spear_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.4,
				min:117,
				max:469
			},
			exclude:['Demon Hunter','Monk','Barbarian','Crusader','Wizard']
		},
		'Fist Weapon':{
			name_en:'Suwaiya',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/fistweapon_1h_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.4,
				min:168,
				max:392
			},
			exclude:['Demon Hunter','Barbarian','Crusader','Wizard','Witch Doctor']
		},
		'Flail':{
			name_en:'Grandfather Flail',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/flail_1h_205_demonhunter_male.png'
			},
			weapon:{
				speed:1.4,
				min:192,
				max:355
			},
			exclude:['Demon Hunter','Monk','Barbarian','Witch Doctor','Wizard']
		},
		'Mighty Weapon':{
			name_en:'Limb Cleaver',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/mightyweapon1h_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.3,
				min:249,
				max:461
			},
			exclude:['Demon Hunter','Monk','Crusader','Witch Doctor','Wizard']
		},
		'Hand Crossbow':{
			name_en:'Penetrator',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/handxbow_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.6,
				min:126,
				max:714
			},
			exclude:['Monk','Barbarian','Crusader','Wizard','Witch Doctor']
		},
		'Wand':{
			name_en:'Diabolic Wand',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/wand_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.4,
				min:193,
				max:357
			},
			exclude:['Demon Hunter','Monk','Barbarian','Crusader','Witch Doctor']
		}
	},
	primary:{},
	secondary:{}
};

module.exports = onehand;