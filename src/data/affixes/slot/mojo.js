var mojo = {
	slot_en:'Off-Hand',
	type:{
		'Mojo':{
			name_en:'Thing That Should Not Be',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/mojo_206_demonhunter_male.png'
			}
		}
	},
	primary:{
		Intelligence:{min:330,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Vitality:{min:330,max:524,minl:626,maxl:750,mina:825,maxa:1000},

		AvgDmg:{
			min:[126,158],
			max:[159,190],
			minl:[340,396],
			maxl:[395,450],
			mina:[407,503],
			maxa:[504,600]
		},

		LifePerc:{min:6,max:12,minl:10,maxl:15},
		LifeRegen:{min:812,max:2046,minl:4642,maxl:5528},

		CritChance:{min:12,max:20,minl:16,maxl:20/*,mina:16,maxa:20*/},
		CdReduc:{min:4,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		CostReduc:{min:5,max:7,minl:5,maxl:8},
		AreaDamage:{min:10,max:16,minl:10,maxl:20},
		Socket:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/},

		Bleed:{min:[28,300],max:[33,400],minl:[34,300],maxl:[39,400]},

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
		ZombieChargeDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		WallOfZombieDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		PiranhasDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		GargantuanDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		FirebatsDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		PoisonDartDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SummonZombieDogsDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/}

	},
	secondary:{
		GoldFind:{min:26,max:28,minl:32,maxl:35},
		MaxMana:{min:105,max:119,minl:120,maxl:150/*,mina:120,maxa:150*/},
		Thorns:{min:316,max:1160,minl:1525,maxl:2000,mina:2200,maxa:2600},
		BonusXp:{min:80,max:139,minl:140,maxl:200},
		FearHit:{min:10,max:23,minl:10,maxl:26},
		StunHit:{min:10,max:23,minl:10,maxl:26},
		BlindHit:{min:10,max:23,minl:10,maxl:26},
		FreezeHit:{min:10,max:23,minl:10,maxl:26},
		ChillHit:{min:10,max:23,minl:10,maxl:26},
		SlowHit:{min:10,max:23,minl:10,maxl:26},
		ImmobHit:{min:10,max:23,minl:10,maxl:26},
		KnockHit:{min:10,max:23,minl:10,maxl:26},
		IgnoreDura:{min:1,max:1/*,minl:1,maxl:1,mina:1,max1:1*/},
		Globes:{min:4955,max:6074,minl:20001,maxl:29713},
		LevelReduc:{min:2,max:23,minl:2,maxl:30}
	}
};

module.exports = mojo;