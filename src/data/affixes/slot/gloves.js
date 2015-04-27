var gloves = {
	slot_en:'Hands',
	type:{
		'Gloves':{
			name_en:'Ascended Gauntlets',
			image:{
				'Demon Hunter':'//media.blizzard.com/d3/icons/items/large/gloves_208_demonhunter_male.png',
				'Monk':'//media.blizzard.com/d3/icons/items/large/gloves_208_monk_male.png',
				'Barbarian':'//media.blizzard.com/d3/icons/items/large/gloves_208_barbarian_male.png',
				'Crusader':'//media.blizzard.com/d3/icons/items/large/gloves_208_crusader_male.png',
				'Witch Doctor':'//media.blizzard.com/d3/icons/items/large/gloves_208_witchdoctor_male.png',
				'Wizard':'//media.blizzard.com/d3/icons/items/large/gloves_208_wizard_male.png'
			},
			armor:{min:513,max:590}
		}
	},
	primary:{
		Dexterity:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Strength:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Intelligence:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Vitality:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},

		AllResist:{min:86,max:90,minl:91,maxl:100,mina:110,maxa:130},
		LifeRegen:{min:3824,max:6447,minl:6448,maxl:7678,mina:8445,maxa:10000},
		Armor:{min:340,max:364,minl:373,maxl:397/*,mina:373,maxa:397*/},

		CritChance:{min:14,max:20,minl:16,maxl:20/*,mina:16,maxa:20*/},
		CritDamage:{min:26,max:50/*,minl:26,maxl:50,mina:26,maxa:50*/},
		AttackSpeed:{min:5,max:6,minl:5,maxl:7/*,mina:5,maxa:7*/},
		CdReduc:{min:4,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		CostReduc:{min:5,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		LifePerHit:{min:3412,max:7736,minl:7737,maxl:9214,mina:10135,maxa:11975}
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
		LevelReduc:{min:2,max:30,minl:2,maxl:30,mina:30,maxa:40},
		Thorns:{min:1343,max:1817,minl:1525,maxl:2000,mina:2200,maxa:2600},

		SlowHit:{min:10,max:45,minl:10,maxl:51/*,mina:10,maxa:51*/}
	}
};

module.exports = gloves;