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
			},
			armor:{min:440,max:506}
		},
		'Mighty Belt':{
			name_en:'Mighty Scourge',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/barbbelt_206_demonhunter_male.png'
			},
			exclude:['Demon Hunter','Monk','Crusader','Witch Doctor','Wizard'],
			armor:{min:586,max:674}
		}
	},
	primary:{
		Dexterity:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Strength:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Intelligence:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Vitality:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},

		AllResist:{min:86,max:90,minl:91,maxl:100,mina:110,maxa:130},
		Armor:{min:340,max:364,minl:373,maxl:397,/*mina:373,maxa:397*/},
		LifeRegen:{min:2753,max:4642,minl:4643,maxl:5528,mina:6080,maxa:7185},
		PercLife:{min:8,max:14,minl:10,maxl:15,/*mina:10,maxa:15*/},

		LifePerFury:{min:468,max:784,minl:788,maxl:936,mina:1029,maxa:1215,},

		BashDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		CleaveDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		FrenzyDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		WeaponThrowDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		JusticeDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		PunishDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		SlashDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		SmiteDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		BolasDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		EntanglingShotDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		EvasiveFireDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		GrenadeDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		HungeringArrowDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		CripplingWaveDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		DeadlyReachDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		FistsOfThunderDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		HundredFistsDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		CorpseSpidersDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		FirebombDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		PlagueOfToadsDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		PoisonDartDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		ElectrocuteDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		MagicMissileDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		ShockPulseDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		SpectralBladeDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/}
	},
	secondary:{
		PhysRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		ColdRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		FireRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		LightRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		ArcRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		PoisRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},

		LifeAfterKill:{min:2083,max:4251,minl:4252,maxl:5942,mina:6536,maxa:7725,},
		GoldFind:{min:29,max:31,minl:32,maxl:35,/*mina:32,maxa:35*/},
		PickupRadius:{min:1,max:2,/*minl:1,maxl:2,mina:1,maxa:2*/},
		BonusXp:{min:100,max:139,minl:140,maxl:200,mina:220,maxa:260},
		IgnoreDura:{min:1,max:1,/*minl:1,maxl:1,mina:1,maxa:1*/},
		LevelReduc:{min:2,max:30,minl:2,maxl:30,mina:30,maxa:40},
		Thorns:{min:2349,max:3180,minl:2667,maxl:3498,mina:3847,maxa:4550},

		FreezeHit:{min:10,max:45,minl:10,maxl:51/*,mina:10,maxa:51*/},

		MaxFury:{min:10,max:12,/*minl:10,maxl:12,mina:10,maxa:12,*/}
	}
};

module.exports = belt;