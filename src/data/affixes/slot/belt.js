var belt = {
	slot_en:'Waist',
	type:{
		'Belt':{
			name_en:'Archon Sash',
			image:{
				'Demon Hunter':'//media.blizzard.com/d3/icons/items/large/belt_208_demonhunter_male.png',
				'Monk':'//media.blizzard.com/d3/icons/items/large/belt_208_demonhunter_male.png',
				'Barbarian':'//media.blizzard.com/d3/icons/items/large/belt_208_demonhunter_male.png',
				'Crusader':'//media.blizzard.com/d3/icons/items/large/belt_208_demonhunter_male.png',
				'Witch Doctor':'//media.blizzard.com/d3/icons/items/large/belt_208_demonhunter_male.png',
				'Wizard':'//media.blizzard.com/d3/icons/items/large/belt_208_demonhunter_male.png'
			}
		},
		'Mighty Belt':{
			name_en:'Mighty Scourge',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/barbbelt_206_demonhunter_male.png'
			}
		}
	},
	primary:{
		Dexterity:{
			min:350,
			max:415,
			minl:416,
			maxl:500,
			mina:550,
			maxa:650
		},
		Strength:{
			min:350,
			max:415,
			minl:416,
			maxl:500,
			mina:550,
			maxa:650
		},
		Intelligence:{
			min:350,
			max:415,
			minl:416,
			maxl:500,
			mina:550,
			maxa:650
		},
		Vitality:{
			min:350,
			max:415,
			minl:416,
			maxl:500,
			mina:550,
			maxa:650
		},
		AllRes:{
			min:86,
			max:90,
			minl:91,
			maxl:100,
			mina:110,
			maxa:130
		},
		Armor:{
			min:340,
			max:364,
			minl:373,
			maxl:397,
			//mina:373,
			//maxa:397
		},
		LifeRegen:{
			min:2753,
			max:4642,
			minl:4643,
			maxl:5528,
			mina:6080,
			maxa:7185
		},
		PercLife:{
			min:8,
			max:14,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15
		},
		LifePerFury:{
			min:468,
			max:784,
			minl:788,
			maxl:936,
			mina:1029,
			maxa:1215,
			exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard','Belt']
		}
	},
	secondary:{
		PhysRes:{
			min:121,
			max:140,
			minl:141,
			maxl:160,
			mina:176,
			maxa:210
		},
		ColdRes:{
			min:121,
			max:140,
			minl:141,
			maxl:160,
			mina:176,
			maxa:210
		},
		FireRes:{
			min:121,
			max:140,
			minl:141,
			maxl:160,
			mina:176,
			maxa:210
		},
		LightRes:{
			min:121,
			max:140,
			minl:141,
			maxl:160,
			mina:176,
			maxa:210
		},
		ArcRes:{
			min:121,
			max:140,
			minl:141,
			maxl:160,
			mina:176,
			maxa:210
		},
		PoisRes:{
			min:121,
			max:140,
			minl:141,
			maxl:160,
			mina:176,
			maxa:210
		},
		LifeAfterKill:{
			min:2083,
			max:4251,
			minl:4252,
			maxl:5942,
			mina:6536,
			maxa:7725,
			exclude:['Mighty Belt']
		},
		GoldFind:{
			min:29,
			max:31,
			minl:32,
			maxl:35,
			//mina:32,
			//maxa:35
		},
		PickupRadius:{
			min:1,
			max:2,
			//minl:1,
			//maxl:2,
			//mina:1,
			//maxa:2
		},
		BonusXp:{
			min:100,
			max:139,
			minl:140,
			maxl:200,
			mina:220,
			maxa:260
		},
		IgnoreDura:{
			min:1,
			max:1,
			//minl:1,
			//maxl:1,
			//mina:1,
			//maxa:1
		},
		FreezeHit:{
			min:1,
			max:4.5,
			minl:1,
			maxl:5.1,
			mina:1,
			maxa:5.1,
		},
		LevelReduc:{
			min:2,
			max:30,
			//minl:2,
			//maxl:30,
			mina:30,
			maxa:40
		},
		Thorns:{
			min:2349,
			max:3180,
			minl:2667,
			maxl:3498,
			mina:3847,
			maxa:4550
		},
		MaxFury:{
			min:10,
			max:12,
			//minl:10,
			//maxl:12,
			//mina:10,
			//maxa:12,
			exclude:['Belt']
		}

	}
};

module.exports = belt;