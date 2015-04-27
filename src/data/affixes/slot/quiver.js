var quiver = {
	slot_en:'Off-Hand',
	type:{
		'Quiver':{
			name_en:'Ascended Quiver',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/quiver_207_demonhunter_male.png'
			},
			baseAffix:'AttackSpeed'
		}
	},
	primary:{
		AttackSpeed:{min:15,max:15,minl:15,maxl:20/*,mina:15,maxa:20*/},

		Dexterity:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Vitality:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},

		PercLife:{min:8,max:14,minl:10,maxl:15/*,mina:10,maxa:15*/},
		LifeRegen:{min:2753,max:4642,minl:4642,maxl:5528,mina:6080,maxa:7185},

		CritChance:{min:14,max:20,minl:16,maxl:20/*,mina:16,maxa:20*/},
		EliteDamage:{min:4,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		CdReduc:{min:4,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		CostReduc:{min:5,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		AreaDamage:{min:10,max:16,minl:10,maxl:20/*,mina:10,maxa:20*/},
		Bleed:{min:[32,300],max:[37,400],minl:[34,300],maxl:[39,400]/*,mina:[34,300],maxa:[39,400]*/},
		Socket:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/},

		HatredRegen:{min:118,max:133,minl:135,maxl:150,mina:135,maxa:150},

		RapidFireDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		CompanionDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ElementalArrowDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SpikeTrapDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		SentryDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		MultishotDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		RainOfVengeanceDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ImpaleDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		StrafeDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ChakramDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		GrenadeDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		ClusterArrowDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		EvasiveFireDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		EntanglingShotDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		HungeringArrowDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		BolasDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/},
		FanOfKnivesDmg:{min:8,max:15,minl:10,maxl:15/*,mina:10,maxa:15*/}
	},
	secondary:{
		GoldFind:{min:29,max:31,minl:32,maxl:35/*,mina:32,maxa:35*/},
		MaxDisc:{min:8,max:10,minl:9,maxl:12/*,mina:9,maxa:12*/},
		Thorns:{min:1343,max:1817,minl:1525,maxl:2000,mina:2200,maxa:2600},
		BonusXp:{min:80,max:139,minl:140,maxl:200,mina:220,maxa:260},
		IgnoreDura:{min:1,max:1/*,minl:1,maxl:1,mina:1,max1:1*/},
		Globes:{min:14231,max:20000,minl:20001,maxl:29713,mina:32684,maxa:38625},
		LevelReduc:{min:2,max:23,minl:2,maxl:30,mina:30,maxa:40},

		FearHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		StunHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		BlindHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		FreezeHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		ChillHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		SlowHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		ImmobHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		KnockHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/}
	}
};

module.exports = quiver;