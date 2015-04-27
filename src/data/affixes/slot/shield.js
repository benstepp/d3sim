var shield = {
	slot_en:'Off-Hand',
	type:{
		'Shield':{
			name_en:'Ascended Shield',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/shield_209_demonhunter_male.png'
			}
		},
		'Crusader Shield':{
			name_en:'Stalwart Guardian',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/crusadershield_207_demonhunter_male.png'
			},
			exclude:['Demon Hunter','Monk','Barbarian','Witch Doctor','Wizard']
		}
	},
	primary:{
		Dexterity:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Intelligence:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Strength:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Vitality:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},

		PercLife:{min:12,max:16,minl:14,maxl:18/*,mina:14,maxa:18*/},
		Armor:{min:509,max:545,minl:559,maxl:595,mina:654,maxa:775},
		AllResist:{min:86,max:90,minl:91,maxl:100,mina:110,maxa:130},
		LifeRegen:{min:2753,max:4642,minl:4643,maxl:5528,mina:6080,maxa:7185},

		CritChance:{min:14,max:20,minl:16,maxl:20/*,mina:16,maxa:20*/},
		Block:{min:10,max:10,minl:11,maxl:11/*,mina:11,maxa:11*/},
		AreaDamage:{min:10,max:16,minl:10,maxl:20/*,mina:10,maxa:20*/},
		EliteReduc:{min:8,max:9,minl:10,maxl:11/*,mina:10,maxa:15*/},
		EliteDamage:{min:4,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		CostReduc:{min:5,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		CdReduc:{min:4,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		Bleed:{min:[32,300],max:[37,400],minl:[34,300],maxl:[39,400]/*,mina:[34,300],maxa:[39,400]*/},
		Socket:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/},

		LifePerWrath:{min:476,max:1073,minl:1077,maxl:1276,mina:1408,maxa:1660},
		WrathRegen:{min:168,max:183,minl:185,maxl:200/*,mina:185,maxa:200*/}
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
		Globes:{min:14231,max:20000,minl:20001,maxl:29713,mina:32684,maxa:38625},
		IgnoreDura:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/},
		LevelReduc:{min:2,max:30,minl:2,maxl:30,mina:30,maxa:40},
		Thorns:{min:1343,max:3180,minl:1525,maxl:3498,mina:2200,maxa:4550},
		CcReduc:{min:10,max:20,minl:20,maxl:40/*,mina:20,maxa:40*/},

		FearHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		StunHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		BlindHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		FreezeHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		ChillHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		SlowHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		ImmobHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		KnockHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},

		MaxWrath:{min:4,max:8,minl:6,maxl:10,mina:8,maxa:10}
	}
};

module.exports = shield;