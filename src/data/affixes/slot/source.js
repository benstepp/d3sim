var source = {
	slot_en:'Off-Hand',
	type:{
		'Source':{
			name_en:'Moschen Spheres',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/orb_206_demonhunter_male.png'
			},
			baseAffix:'AvgDamage'
		}
	},
	primary:{
		AvgDamage:{min:[262,1],max:[328,66],minl:[340,40],maxl:[370,80],mina:[407,88],maxa:[485,115]},

		Intelligence:{min:330,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Vitality:{min:330,max:524,minl:626,maxl:750,mina:825,maxa:1000},

		PercLife:{min:6,max:12,minl:10,maxl:15/*,mina:10,maxa:15*/},
		LifeRegen:{min:812,max:2046,minl:4642,maxl:5528,mina:6080,maxa:7185},

		CritChance:{min:12,max:20,minl:16,maxl:20/*,mina:16,maxa:20*/},
		EliteDamage:{min:4,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		CdReduc:{min:4,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		CostReduc:{min:5,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		AreaDamage:{min:10,max:16,minl:10,maxl:20/*,mina:10,maxa:20*/},
		Bleed:{min:[28,300],max:[33,400],minl:[34,300],maxl:[39,400]/*,mina:[34,300],maxa:[39,400]*/},
		Socket:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/},

		APOC:{min:3,max:4/*,minl:3,maxl:4,mina:3,maxa:4*/},

		RayOfFrostDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ArcaneTorrentDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		FamiliarDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		MeteorDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		WaveOfForceDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ElectrocuteDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ArcaneOrbDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ShockPulseDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		BlackHoleDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		MagicMissileDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		EnergyTwisterDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		BlizzardDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		DisintegrateDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SpectralBladeDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ExplosiveBlastDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		HydraDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/}
	},
	secondary:{
		GoldFind:{min:26,max:28,minl:32,maxl:35/*,mina:32,maxa:35*/},
		Thorns:{min:316,max:1160,minl:1525,maxl:2000,mina:2200,maxa:2600},
		BonusXp:{min:80,max:139,minl:140,maxl:200,mina:220,maxa:260},
		IgnoreDura:{min:1,max:1/*,minl:1,maxl:1,mina:1,max1:1*/},
		Globes:{min:4955,max:6074,minl:20001,maxl:29713,mina:32684,maxa:38625},
		LevelReduc:{min:2,max:23,minl:2,maxl:30,mina:30,maxa:40},

		FearHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		StunHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		BlindHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		FreezeHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		ChillHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		SlowHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		ImmobHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		KnockHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},

		MaxAp:{min:7,max:14,minl:10,maxl:14,mina:13,maxa:14}
	}
};

module.exports = source;