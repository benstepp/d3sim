var Boots = {
	slot_en:'Feet',
	type:{
		'Boots':{
			name_en:'Ascended Greaves',
			image:{
				'Demon Hunter':'//media.blizzard.com/d3/icons/items/large/boots_208_demonhunter_male.png',
				'Monk':'//media.blizzard.com/d3/icons/items/large/boots_208_monk_male.png',
				'Barbarian':'//media.blizzard.com/d3/icons/items/large/boots_208_barbarian_male.png',
				'Crusader':'//media.blizzard.com/d3/icons/items/large/boots_208_crusader_male.png',
				'Witch Doctor':'//media.blizzard.com/d3/icons/items/large/boots_208_witchdoctor_male.png',
				'Wizard':'//media.blizzard.com/d3/icons/items/large/boots_208_wizard_male.png'
			}
		}
	},
	primary:{
		Dexterity:{
			min:350,
			max:415,
			minl:416,
			maxl:500,
		},
		Strength:{
			min:350,
			max:415,
			minl:416,
			maxl:500,
		},
		Intelligence:{
			min:350,
			max:415,
			minl:416,
			maxl:500,
		},
		Vitality:{
			min:350,
			max:415,
			minl:416,
			maxl:500,
		},
		Armor:{
			min:340,
			max:364,
			minl:373,
			maxl:397,
		},
		LifeRegen:{
			min:2753,
			max:4642,
			minl:4643,
			maxl:5528
		},
		AllResist:{
			min:86,
			max:90,
			minl:91,
			maxl:100
		},
		MoveSpeed:{
			min:10,
			max:12,
			//minl:10,
			//maxl:12,
			//mina:10,
			//maxa:12
		},
		RapidFireDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:["Monk","Barbarian","Crusader","Wizard","Witch Doctor"]
		},
		MultishotDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:["Monk","Barbarian","Crusader","Wizard","Witch Doctor"]
		},
		ImplateDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:["Monk","Barbarian","Crusader","Wizard","Witch Doctor"]
		},
		ChakramDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:["Monk","Barbarian","Crusader","Wizard","Witch Doctor"]
		},
		ElementalArrowDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:["Monk","Barbarian","Crusader","Wizard","Witch Doctor"]
		},
		ClusterArrowDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			exclude:["Monk","Barbarian","Crusader","Wizard","Witch Doctor"]
		},
		StrafeDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:["Monk","Barbarian","Crusader","Wizard","Witch Doctor"]
		}
	},
	secondary:{
		GoldFind:{
			min:29,
			max:31,
			minl:32,
			maxl:35
		},
		Thorns:{
			min:1343,
			max:1817,
			minl:1525,
			maxl:2000
		},
		BonusXp:{
			min:100,
			max:139,
			minl:140,
			maxl:200
		},
		ImmobOnHit:{
			min:1,
			max:4.5,
			minl:1,
			maxl:5.1
		},
		PickupRadius:{
			min:1,
			max:2,
			//minl:1,
			//maxl:2,
			//mina:1,
			//maxa:2
		},
		IgnoreDura:{
			min:1,
			max:1,
			//minl:1,
			//maxl:1,
			//mina:1,
			//maxa:1
		},
		Globes:{
			min:14231,
			max:20000,
			minl:20001,
			maxl:29713
		},
		LevelReduc:{
			min:2,
			max:30,
			//minl:2,
			//maxl:30
		},
		PhysRes:{
			min:121,
			max:140,
			minl:141,
			maxl:160
		},
		ColdRes:{
			min:121,
			max:140,
			minl:141,
			maxl:160
		},
		FireRes:{
			min:121,
			max:140,
			minl:141,
			maxl:160
		},
		LightRes:{
			min:121,
			max:140,
			minl:141,
			maxl:160
		},
		ArcaneRes:{
			min:121,
			max:140,
			minl:141,
			maxl:160
		},
		PoisonRes:{
			min:121,
			max:140,
			minl:141,
			maxl:160
		}
	}
};

module.exports = Boots;