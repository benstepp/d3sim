var helm = {
	slot_en:'Head',
	type:{
		'Helm':{
			name_en:'Ascended Crown',
			image:{
				'Demon Hunter':'//media.blizzard.com/d3/icons/items/large/helm_208_demonhunter_male.png',
				'Monk':'//media.blizzard.com/d3/icons/items/large/helm_208_monk_male.png',
				'Barbarian':'//media.blizzard.com/d3/icons/items/large/helm_208_barbarian_male.png',
				'Crusader':'//media.blizzard.com/d3/icons/items/large/helm_208_crusader_male.png',
				'Witch Doctor':'//media.blizzard.com/d3/icons/items/large/helm_208_witchdoctor_male.png',
				'Wizard':'//media.blizzard.com/d3/icons/items/large/helm_208_wizard_male.png'
			},
			armor:{min:660,max:759}
		},
		'Spirit Stone':{
			name_en:'Ascended Stone',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/spiritstone_206_demonhunter_male.png'
			},
			exclude:['Demon Hunter','Barbarian','Crusader','Witch Doctor','Wizard'],
			armor:{min:660,max:759}
		},
		'Voodoo Mask':{
			name_en:'Ascended Mask',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/voodoomask_206_demonhunter_male.png'
			},
			exclude:['Demon Hunter','Monk','Barbarian','Crusader','Wizard'],
			armor:{min:660,max:759}
		},
		'Wizard Hat':{
			name_en:'Ascended Headpiece',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/wizardhat_206_demonhunter_male.png'
			},
			exclude:['Demon Hunter','Monk','Barbarian','Crusader','Witch Doctor'],
			armor:{min:660,max:759}
		}
	},
	primary:{
		Dexterity:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Strength:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Intelligence:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Vitality:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},

		AllResist:{min:86,max:90,minl:91,maxl:100,mina:110,maxa:130},
		LifeRegen:{min:3824,max:6447,minl:6448,maxl:7678,mina:8445,maxa:10000},
		Armor:{min:340,max:545,minl:373,maxl:595,mina:373,maxa:775},
		PercLife:{min:8,max:14,minl:10,maxl:15/*,mina:10,maxa:15*/},

		CritChance:{min:9,max:12/*,minl:9,maxl:12,mina:9,maxa:12*/},
		LifePerHit:{min:3412,max:7736,minl:7737,maxl:9214,mina:10135,maxa:11975},
		Socket:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/},

		ManaRegen:{min:10,max:11,minl:12,maxl:14/*,mina:12,maxa:14*/},
		SpiritRegen:{min:183,max:250,minl:217,maxl:300/*,mina:217,maxa:300*/},
		LifePerSpirit:{min:157,max:350,minl:353,maxl:415,mina:456,maxa:540},

		AncientSpearDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		HammerOfTheAncientsDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SeismicSlamDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		WhirlwindDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		BlessedHammerDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		BlessedShieldDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		FistOfTheHeavensDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		PhalanxDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ShieldBashDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SweepAttackDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ChakramDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ClusterArrowDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ElementalArrowDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ImpaleDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		MultishotDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		RapidFireDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		StrafeDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ExplodingPalmDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		LashingTailKickDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		TempestRushDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		WaveOfLightDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		AcidCloudDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		FirebatsDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SacrificeDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SpiritBarrageDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ZombieChargerDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ArcaneOrbDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ArcaneTorrentDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		DisintegrateDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		EnergyTwisterDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		MeteorDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		RayOfFrostDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		WaveOfForceDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/}
	},
	secondary:{
		PhysRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		ColdRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		FireRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		LightRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		ArcRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		PoisRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},

		GoldFind:{min:29,max:31,minl:32,maxl:35/*,mina:32,maxa:35*/},
		PickupRadius:{min:1,max:2/*,minl:1,maxl:2,mina:1,maxa:2*/},
		BonusXp:{min:100,max:139,minl:140,maxl:200,mina:220,maxa:260},
		IgnoreDura:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/},
		LevelReduc:{min:2,max:30/*,minl:2,maxl:30,mina:30,maxa:40*/},
		Thorns:{min:1343,max:1817,minl:1525,maxl:2000,mina:2200,maxa:2600},
		CcReduc:{min:10,max:30,minl:20,maxl:40/*,mina:20,maxa:40*/},

		FearHit:{min:10,max:45,minl:10,maxl:51/*,mina:10,maxa:51*/},

		MaxMana:{min:120,max:150/*,minl:120,maxl:150,mina:120,maxa:150*/},
		MaxSpirit:{min:10,max:12,minl:13,maxl:15/*,mina:13,maxa:15*/},
		MaxAp:{min:4,max:6,minl:7,maxl:9/*,mina:7,maxa:9*/}
	}
};

module.exports = helm;