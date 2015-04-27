var mojo = {
	slot_en:'Off-Hand',
	type:{
		'Mojo':{
			name_en:'Thing That Should Not Be',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/mojo_206_demonhunter_male.png'
			},
			baseAffix:'AvgDamage'
		}
	},
	primary:{
		AvgDamage:{min:[262,1],max:[328,66],minl:[340,40],maxl:[370,80],mina:[407,88],maxa:[485,115]},

		Intelligence:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Vitality:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},

		PercLife:{min:8,max:14,minl:10,maxl:15/*,mina:10,maxa:15*/},
		LifeRegen:{min:2753,max:4642,minl:4642,maxl:5528,mina:6080,maxa:7185},

		CritChance:{min:14,max:20,minl:16,maxl:20/*,mina:16,maxa:20*/},
		CdReduc:{min:4,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		CostReduc:{min:5,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		AreaDamage:{min:10,max:16,minl:10,maxl:20/*,mina:10,maxa:20*/},
		Socket:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/},
		Bleed:{min:[32,300],max:[37,400],minl:[34,300],maxl:[39,400]/*,mina:[34,300],maxa:[39,400]*/},

		ManaRegen:{min:10,max:11,minl:12,maxl:14/*,mina:12,maxa:14*/},

		PlagueOfToadsDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		FirebombDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		AcidCloudDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		FetishArmyDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		GraspOfTheDeadDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		HauntDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SpiritBarrageDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SacrificeDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		LocustSwarmDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		CorpseSpidersDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ZombieChargerDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		WallOfZombiesDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		PiranhasDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		GargantuanDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		FirebatsDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		PoisonDartDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SummonZombieDogsDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/}
	},
	secondary:{
		GoldFind:{min:29,max:31,minl:32,maxl:35/*,mina:32,maxa:35*/},
		Thorns:{min:1343,max:1817,minl:1525,maxl:2000,mina:2200,maxa:2600},
		BonusXp:{min:100,max:139,minl:140,maxl:200,mina:220,maxa:260},
		IgnoreDura:{min:1,max:1/*,minl:1,maxl:1,mina:1,max1:1*/},
		Globes:{min:14231,max:20000,minl:20001,maxl:29713,mina:32684,maxa:38625},
		LevelReduc:{min:2,max:30,minl:2,maxl:30,mina:30,maxa:40},

		FearHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		StunHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		BlindHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		FreezeHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		ChillHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		SlowHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		ImmobHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		KnockHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},

		MaxMana:{min:120,max:150/*,minl:120,maxl:150,mina:120,maxa:150*/}
	}
};

module.exports = mojo;