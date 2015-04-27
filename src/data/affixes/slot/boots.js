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
			},
			armor:{min:513,max:590}
		}
	},
	primary:{
		Dexterity:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Strength:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Intelligence:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Vitality:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},

		Armor:{min:340,max:364,minl:373,maxl:397,mina:373,maxa:397,},
		LifeRegen:{min:2753,max:4642,minl:4643,maxl:5528,mina:8445,maxa:10000},
		AllResist:{min:86,max:90,minl:91,maxl:100,mina:110,maxa:130},
		MoveSpeed:{min:10,max:12/*,minl:10,maxl:12,mina:10,maxa:12*/},

		AncientSpearDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		HammerOfTheAncientsDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		SeismicSlamDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		WhirlwindDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		BlessedHammerDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		BlessedShieldDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		FistOfTheHeavensDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		PhalanxDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		ShieldBashDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		SweepAttackDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		ChakramDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		ClusterArrowDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		ElementalArrowDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		ImpaleDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		MultishotDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		RapidFireDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		StrafeDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		ExplodingPalmDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		LashingTailKickDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		TempestRushDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		WaveOfLightDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		AcidCloudDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		FirebatsDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		SacrificeDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		SpiritBarrageDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		ZombieChargerDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		ArcaneOrbDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		ArcaneTorrentDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		DisintegrateDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		EnergyTwisterDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		MeteorDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		RayOfFrostDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/},
		WaveOfForceDmg:{min:8,max:15,minl:10,maxl:15,/*mina:10,maxa:15*/}
	},
	secondary:{
		PhysRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		ColdRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		FireRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		LightRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		ArcRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		PoisRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},

		GoldFind:{min:29,max:31,minl:32,maxl:35/*,mina:32,maxa:35*/},
		Thorns:{min:1343,max:1817,minl:1525,maxl:2000,mina:2200,maxa:2600},
		BonusXp:{min:100,max:139,minl:140,maxl:200,mina:220,maxa:260},
		PickupRadius:{min:1,max:2,/*minl:1,maxl:2,mina:1,maxa:2*/},
		IgnoreDura:{min:1,max:1,/*minl:1,maxl:1,mina:1,maxa:1*/},
		Globes:{min:14231,max:20000,minl:20001,maxl:29713,mina:32684,maxa:38625},
		LevelReduc:{min:2,max:30,minl:2,maxl:30,mina:30,maxa:40},

		ImmobHit:{min:10,max:45,minl:10,maxl:51/*,mina:10,maxa:51*/},
	}
};

module.exports = Boots;