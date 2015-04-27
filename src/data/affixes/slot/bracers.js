var bracers = {
	slot_en:'Wrists',
	type:{
		'Bracers':{
			name_en:'Ascended Bracers',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/bracers_208_demonhunter_male.png'
			},
			armor:{min:366,max:421}
		}
	},
	primary:{
		Dexterity:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Strength:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Intelligence:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Vitality:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},

		AllResist:{min:86,max:90,minl:91,maxl:100,mina:110,maxa:130},
		Armor:{min:340,max:364,minl:373,maxl:397/*,mina:373,maxa:397*/},
		LifeRegen:{min:3824,max:6447,minl:6448,maxl:7678,mina:8445,maxa:10000},

		PhysDamage:{min:10,max:15,minl:15,maxl:20/*,mina:15,maxa:20*/},
		ArcaneDamage:{min:10,max:15,minl:15,maxl:20/*,mina:15,maxa:20*/},
		HolyDamage:{min:10,max:15,minl:15,maxl:20/*,mina:15,maxa:20*/},
		ColdDamage:{min:10,max:15,minl:15,maxl:20/*,mina:15,maxa:20*/},
		FireDamage:{min:10,max:15,minl:15,maxl:20/*,mina:15,maxa:20*/},
		PoisonDamage:{min:10,max:15,minl:15,maxl:20/*,mina:15,maxa:20*/},

		LifePerHit:{min:3412,max:7736,minl:7737,maxl:9214,mina:10135,maxa:11975},
		CritChance:{min:9,max:12/*,minl:9,//maxl:12/*,mina:9,maxa:12*/}
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
		GoldFind:{min:29,max:31,minl:32,maxl:35/*,mina:32,maxa:35*/},
		BonusXp:{min:100,max:139,minl:140,maxl:200,mina:220,maxa:260},
		PickupRadius:{min:1,max:2/*,minl:1,maxl:2,mina:1,maxa:2*/},
		IgnoreDura:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/},
		LevelReduc:{min:2,max:30/*,minl:2,maxl:30,mina:30,maxa:40*/},
		Thorns:{min:1343,max:1817,minl:1525,maxl:2000,mina:2200,maxa:2600},

		KnockHit:{min:10,max:45,minl:10,maxl:51/*,mina:10,maxa:51*/}
	}
};

module.exports = bracers;