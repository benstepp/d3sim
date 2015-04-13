var shoulders = {
	slot_en:'Shoulders',
	type:{
		'Shoulders':{
			name_en:'Ascended Pauldrons',
			image:{
				'Demon Hunter':'//media.blizzard.com/d3/icons/items/large/shoulders_208_demonhunter_male.png',
				'Monk':'//media.blizzard.com/d3/icons/items/large/shoulders_208_monk_male.png',
				'Barbarian':'//media.blizzard.com/d3/icons/items/large/shoulders_208_barbarian_male.png',
				'Crusader':'//media.blizzard.com/d3/icons/items/large/shoulders_208_crusader_male.png',
				'Witch Doctor':'//media.blizzard.com/d3/icons/items/large/shoulders_208_witchdoctor_male.png',
				'Wizard':'//media.blizzard.com/d3/icons/items/large/shoulders_208_wizard_male.png'
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
		LifeRegen:{
			min:2753,
			max:4642,
			minl:4642,
			maxl:5528,
			mina:6080,
			maxa:7185
		},
		Armor:{
			min:340,
			max:364,
			minl:373,
			maxl:397,
			//mina:373,
			//maxa:397
		},
		PercLife:{
			min:8,
			max:14,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15
		},
		CdReduc:{
			min:4,
			max:7,
			minl:5,
			maxl:8,
			//mina:5,
			//maxa:8
		},
		CostReduc:{
			min:5,
			max:7,
			minl:5,
			maxl:8,
			//mina:5,
			//maxa:8
		},
		AreaDamage:{
			min:10,
			max:16,
			minl:10,
			maxl:20,
			//mina:10,
			//maxa:20
		},
		RainOfVengeanceDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
			'FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg']
		},
		FanOfKnivesDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
			'RainOfVengeanceDmg','CompanionDmg','SpikeTrapDmg','SentryDmg']
		},
		CompanionDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
			'RainOfVengeanceDmg','FanOfKnivesDmg','SpikeTrapDmg','SentryDmg']
		},
		SpikeTrapDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
			'RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SentryDmg']
		},
		SentryDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
			'RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg']
		},
		AvalancheDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard',
			'CallOfTheAncientsDmg','EarthquakeDmg','FuriousChargeDmg','OverpowerDmg','RendDmg','RevengeDmg']
		},
		CallOfTheAncientsDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard',
			'AvalancheDmg','EarthquakeDmg','FuriousChargeDmg','OverpowerDmg','RendDmg','RevengeDmg']
		},
		EarthquakeDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard',
			'AvalancheDmg','CallOfTheAncientsDmg','FuriousChargeDmg','OverpowerDmg','RendDmg','RevengeDmg']
		},
		FuriousChargeDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard',
			'AvalancheDmg','CallOfTheAncientsDmg','EarthquakeDmg','OverpowerDmg','RendDmg','RevengeDmg']
		},
		OverpowerDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard',
			'AvalancheDmg','CallOfTheAncientsDmg','EarthquakeDmg','FuriousChargeDmg','RendDmg','RevengeDmg']
		},
		RendDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard',
			'AvalancheDmg','CallOfTheAncientsDmg','EarthquakeDmg','FuriousChargeDmg','OverpowerDmg','RevengeDmg']
		},
		RevengeDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard',
			'AvalancheDmg','CallOfTheAncientsDmg','EarthquakeDmg','FuriousChargeDmg','OverpowerDmg','RendDmg']
		},
		BombardmentDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Barbarian','Witch Doctor','Wizard',
			'CondemnDmg','FallingSwordDmg','HeavensFuryDmg']
		},
		CondemnDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Barbarian','Witch Doctor','Wizard',
			'BombardmentDmg','FallingSwordDmg','HeavensFuryDmg']
		},
		FallingSwordDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Barbarian','Witch Doctor','Wizard',
			'BombardmentDmg','CondemnDmg','HeavensFuryDmg']
		},
		HeavensFuryDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Barbarian','Witch Doctor','Wizard',
			'BombardmentDmg','CondemnDmg','FallingSwordDmg']
		},
		CycloneDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Crusader','Demon Hunter','Barbarian','Witch Doctor','Wizard',
			'DashingStrikeDmg','MysticAllyDmg','SevenSidedStrikeDmg','SweepingWindDmg']
		},
		DashingStrikeDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Crusader','Demon Hunter','Barbarian','Witch Doctor','Wizard',
			'CycloneDmg','MysticAllyDmg','SevenSidedStrikeDmg','SweepingWindDmg']
		},
		MysticAllyDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Crusader','Demon Hunter','Barbarian','Witch Doctor','Wizard',
			'CycloneDmg','DashingStrikeDmg','SevenSidedStrikeDmg','SweepingWindDmg']
		},
		SevenSidedStrikeDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Crusader','Demon Hunter','Barbarian','Witch Doctor','Wizard',
			'CycloneDmg','DashingStrikeDmg','MysticAllyDmg','SweepingWindDmg']
		},
		SweepingWindDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Crusader','Demon Hunter','Barbarian','Witch Doctor','Wizard',
			'CycloneDmg','DashingStrikeDmg','MysticAllyDmg','SevenSidedStrikeDmg']
		},
		WallOfZombiesDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
			'GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
		},
		GraspOfTheDeadDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
			'WallOfZombiesDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
		},
		GargantuanDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
			'WallOfZombiesDmg','GraspOfTheDeadDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
		},
		HauntDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
			'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
		},
		PiranhasDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
			'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
		},
		LocustSwarmDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
			'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','FetishArmyDmg','SummonZombieDogsDmg']
		},
		FetishArmyDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
			'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','SummonZombieDogsDmg']
		},
		SummonZombieDogsDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
			'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg']
		},
		BlackHoleDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
			'BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg']
		},
		BlizzardDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
			'BlackHoleDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg']
		},
		ExplosiveBlastDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
			'BlackHoleDmg','BlizzardDmg','FamiliarDmg','HydraDmg']
		},
		FamiliarDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
			'BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','HydraDmg']
		},
		HydraDmg:{
			min:8,
			max:15,
			minl:10,
			maxl:15,
			//mina:10,
			//maxa:15,
			exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
			'BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg']
		}

	},
	secondary:{
		PhysRes:{
			minl:141,
			maxl:160,
			mina:176,
			maxa:210
		},
		ColdRes:{
			minl:141,
			maxl:160,
			mina:176,
			maxa:210
		},
		FireRes:{
			minl:141,
			maxl:160,
			mina:176,
			maxa:210
		},
		LightRes:{
			minl:141,
			maxl:160,
			mina:176,
			maxa:210
		},
		ArcRes:{
			minl:141,
			maxl:160,
			mina:176,
			maxa:210
		},
		PoisRes:{
			minl:141,
			maxl:160,
			mina:176,
			maxa:210
		},
		GoldFind:{
			min:29,
			max:31,
			minl:32,
			maxl:35,
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
		},
		Globes:{
			min:14231,
			max:20000,
			minl:20001,
			maxl:29713,
			mina:32684,
			maxa:38625
		},
		IgnoreDura:{
			min:1,
			max:1,
			//minl:1,
			//maxl:1,
			//mina:1,
			//maxa:1
		},
		LevelReduc:{
			min:2,
			max:30,
			minl:2,
			maxl:30,
		},
		Thorns:{
			min:2349,
			max:3180,
			minl:2667,
			maxl:3498,
			mina:3847,
			maxa:4550
		},
		ChillHit:{
			min:1,
			max:4.5,
			minl:1,
			maxl:5.1,
		}
	}
};

module.exports = shoulders;