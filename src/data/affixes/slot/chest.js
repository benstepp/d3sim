var chest = {
	slot_en:'Torso',
	type:{
		'Chest Armor':{
			name_en:'Ascended Armor',
			image:{
				'Demon Hunter':'//media.blizzard.com/d3/icons/items/large/chestarmor_208_demonhunter_male.png',
				'Monk':'//media.blizzard.com/d3/icons/items/large/chestarmor_208_monk_male.png',
				'Barbarian':'//media.blizzard.com/d3/icons/items/large/chestarmor_208_barbarian_male.png',
				'Crusader':'//media.blizzard.com/d3/icons/items/large/chestarmor_208_crusader_male.png',
				'Witch Doctor':'//media.blizzard.com/d3/icons/items/large/chestarmor_208_witchdoctor_male.png',
				'Wizard':'//media.blizzard.com/d3/icons/items/large/chestarmor_208_wizard_male.png'
			},
			armor:{min:660,max:759}
		},
		'Cloak': {
			name_en:'Ascended Cloak',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/cloak_206_demonhunter_male.png'
			},
			exclude:['Monk','Barbarian','Crusader','Witch Doctor','Wizard'],
			armor:{min:660,max:759}
		}
	},
	primary:{
		Dexterity:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Strength:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Intelligence:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Vitality:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},

		AllResist:{min:86,max:90,minl:91,maxl:100,mina:110,maxa:130},
		LifeRegen:{min:2753,max:4642,minl:4642,maxl:5528,mina:6080,maxa:7185},
		Armor:{min:340,max:545,minl:373,maxl:595,mina:373,maxa:775},
		PercLife:{min:8,max:14,minl:10,maxl:15/*,mina:10,maxa:15*/},
		EliteReduc:{min:8,max:9,minl:10,maxl:11/*,mina:10,maxa:11*/},

		Socket:{min:1,max:3/*,minl:1,maxl:3,mina:1,maxa:3*/},

		HatredRegen:{min:118,max:133,minl:135,maxl:150/*,mina:135,maxa:150*/},

		RainOfVengeanceDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		FanOfKnivesDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		CompanionDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SpikeTrapDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SentryDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		AvalancheDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		CallOfTheAncientsDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		EarthquakeDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		FuriousChargeDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		OverpowerDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		RendDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		RevengeDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		BombardmentDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		CondemnDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		FallingSwordDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		HeavensFuryDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		CycloneDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		DashingStrikeDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		MysticAllyDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SevenSidedStrikeDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SweepingWindDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		WallOfZombiesDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		GraspOfTheDeadDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		GargantuanDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		HauntDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		PiranhasDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		LocustSwarmDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		FetishArmyDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SummonZombieDogsDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		BlackHoleDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		BlizzardDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ExplosiveBlastDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		FamiliarDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		HydraDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/}
	},
	secondary:{
		PhysRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		ColdRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		FireRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		LightRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		ArcRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		PoisRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},

		RangeReduc:{min:5,max:6,minl:6,maxl:7/*,mina:6,maxa:7*/},
		MeleeReduc:{min:5,max:6,minl:6,maxl:7/*,mina:6,maxa:7*/},
		LifeAfterKill:{min:2083,max:4251,minl:4252,maxl:5942,mina:6536,maxa:7725},
		GoldFind:{min:29,max:31,minl:32,maxl:35/*,mina:32,maxa:35*/},
		PickupRadius:{min:1,max:2/*,minl:1,maxl:2,mina:1,maxa:2*/},
		BonusXp:{min:100,max:139,minl:140,maxl:200,mina:220,maxa:260},
		Globes:{min:14231,max:20000,minl:20001,maxl:29713,mina:32684,maxa:38625},
		IgnoreDura:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/},
		LevelReduc:{min:2,max:30/*,minl:2,maxl:30,mina:30,maxa:40*/},
		Thorns:{min:2349,max:3180,minl:2667,maxl:3498,mina:3847,maxa:4550}
	}
};

module.exports = chest;