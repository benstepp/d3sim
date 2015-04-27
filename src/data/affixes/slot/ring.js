var ring = {
	slot_en:'Shoulders',
	type:{
		'Ring':{
			name_en:'Ring',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/ring_25_demonhunter_male.png'
			}
		}
	},
	primary:{
		Dexterity:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Strength:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Intelligence:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},
		Vitality:{min:350,max:415,minl:416,maxl:500,mina:550,maxa:650},

		AllResist:{min:86,max:90,minl:91,maxl:100,mina:110,maxa:130},
		Armor:{min:340,max:364,minl:373,maxl:397/*,mina:373,maxa:397*/},
		PercLife:{min:8,max:14,minl:10,maxl:15/*,mina:10,maxa:15*/},
		LifeRegen:{min:3824,max:6447,minl:6448,maxl:7678,mina:8445,maxa:10000},

		AvgDamage:{min:[40,40],max:[60,60],minl:[60,60],maxl:[80,80],mina:[88,80],maxa:[105,105]},
		CritChance:{min:9,max:12/*,minl:9,maxl:12,mina:9,maxa:12*/},
		CritDamage:{min:26,max:50/*,minl:26,maxl:50,mina:26,maxa:50*/},
		AttackSpeed:{min:5,max:6,minl:5,maxl:7/*,mina:5,maxa:7*/},
		AreaDamage:{min:10,max:16,minl:10,maxl:20/*,mina:10,maxa:20*/},
		CdReduc:{min:4,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		CostReduc:{min:5,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		Socket:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/}
	},
	secondary:{
		PhysRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		ColdRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		FireRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		LightRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		ArcRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},
		PoisRes:{min:121,max:140,minl:141,maxl:160,mina:176,maxa:210},

		LifeAfterKill:{min:2083,max:4251,minl:4252,maxl:5942,mina:6536,maxa:7725},
		GoldFind:{min:29,max:31,minl:32,maxl:35/*,mina:32,maxa:35*/},
		BonusXp:{min:100,max:139,minl:140,maxl:200,mina:220,maxa:260},
		Globes:{min:14231,max:20000,minl:20001,maxl:29713,mina:32681,maxa:38625},
		CcReduc:{min:10,max:30,minl:20,maxl:40/*,mina:20,maxa:40*/},
		Thorns:{min:1343,max:1817,minl:1525,maxl:2000,mina:2200,maxa:2600}
	}
};

module.exports = ring;