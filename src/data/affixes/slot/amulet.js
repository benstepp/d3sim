var amulet = {
	slot_en:'Neck',
	type:{
		'Amulet':{
			name_en:'Amulet',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/amulet17_demonhunter_male.png',
			}
		}
	},
	primary:{
		Dexterity: {min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Intelligence: {min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Strength: {min:625,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Vitality: {min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},

		AllResist: {min:86,max:90,minl:91,maxl:100,mina:110,maxa:130},
		PercLife: {min:12,max:16,minl:14,maxl:18,/*mina:14,maxa:18*/},
		Armor: {min:509,max:545,minl:559,maxl:595,mina:654,maxa:775},
		LifeRegen: {min:3824,max:6447,minl:6448,maxl:7678,mina:8445,maxa:10000},

		PhysDamage: {min:10,max:15,minl:15,maxl:20,/*mina:15,maxa:20*/},
		ArcaneDamage: {min:10,max:15,minl:15,maxl:20,/*mina:15,maxa:20*/},
		ColdDamage: {min:10,max:15,minl:15,maxl:20,/*mina:15,maxa:20*/},
		FireDamage: {min:10,max:15,minl:15,maxl:20,/*mina:15,maxa:20*/},
		PoisonDamage: {min:10,max:15,minl:15,maxl:20,/*mina:15,maxa:20*/},
		HolyDamage: {min:10,max:15,minl:15,maxl:20,/*mina:15,maxa:20*/},
		LightningDamage: {min:10,max:15,minl:15,maxl:20,/*mina:15,maxa:20*/},

		CritDamage: {min:51,max:100,/*minl:51,maxl:100,mina:51,maxa:100*/},
		CritChance: {min:14,max:20,minl:16,maxl:20,/*mina:16,maxa:20*/},
		AttackSpeed: {min:5,max:6,minl:5,maxl:7,/*mina:5,maxa:7*/},
		AvgDamage: {min:[40, 40],max:[60, 60],minl:[60, 60],maxl:[80, 0],mina:[88, 80],maxa:[105, 105]},
		AreaDamage: {min:10,max:16,minl:10,maxl:20,/*mina:10,maxa:20*/},
		CostReduc: {min:5,max:7,minl:5,maxl:8,/*mina:5,maxa:8*/},
		CdReduc: {min:4,max:7,minl:5,maxl:8,/*mina:5,maxa:8*/},
		LifePerHit: {min:6823,max:15473,minl:15474,maxl:18429,mina:20271,maxa:23950},
		Socket: {min:1,max:1,/*minl:1,maxl:1,mina:1,maxa:1*/}
	},
	secondary:{
		PhysRes: {min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		ColdRes: {min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		FireRes: {min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		LightRes: {min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		ArcRes: {min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		PoisRes: {min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},

		RangeReduc:{min:5,max:6,minl:6,maxl:7,/*mina:6,maxa:7*/},
		MeleeReduc: {min:5,max:6,minl:6,maxl:7,/*mina:6,maxa:7*/},
		GoldFind: {min:61,max:70,minl:71,maxl:80,/*mina:71,maxa:80*/},
		BonusXp: {min:100,max:139,minl:140,maxl:200,mina:220,maxa:260},
		CcReduc: {min:10,max:30,minl:20,maxl:40,/*mina:20,maxa:40*/},
		Globes: {min:14231,max:20000,minl:20001,maxl:29713,mina:32684,maxa:38625},
		Thorns: {min:2349,max:3180,minl:2667,maxl:3498,mina:3847,maxa:4550},

		BlindHit: {min:10,max:45,minl:10,maxl:51,/*mina:10,maxa:51*/}
	},
};

module.exports = amulet;