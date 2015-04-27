var twohand = {
	slot_en:'2-Hand',
	type:{
		'Daibo':{
			name_en:'Whirlwind Staff',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/combatstaff_2h_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.15,
				min:994,
				max:1845
			},
			exclude:['Demon Hunter','Barbarian','Crusader','Witch Doctor','Wizard']
		},
		'Two-Handed Mace':{
			name_en:'Persuader',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/mace_2h_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.00,
				min:1737,
				max:1912
			},
			exclude:['Demon Hunter']
		},
		'Two-Handed Axe':{
			name_en:'Flesh Render',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/axe_2h_302_demonhunter_male.png',
			},
			weapon:{
				speed:1.10,
				min:1384,
				max:1685
			},
			exclude:['Demon Hunter']
		},
		'Two-Handed Sword':{
			name_en:'Kingslayer',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/sword_2h_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.15,
				min:1137,
				max:1702
			},
			exclude:['Demon Hunter']
		},
		'Bow':{
			name_en:'Doubleshot',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/bow_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.40,
				min:143,
				max:815
			},
			exclude:['Monk','Barbarian','Crusader','Witch Doctor','Wizard']
		},
		'Crossbow':{
			name_en:'Oxybeles',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/crossbow_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.10,
				min:779,
				max:945
			},
			exclude:['Monk','Barbarian','Crusader','Witch Doctor','Wizard']
		},
		'Polearm':{
			name_en:'Trishula',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/polearm_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.05,
				min:1797,
				max:1823
			},
			exclude:['Demon Hunter']
		},
		'Staff':{
			name_en:'Kerykeion',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/staff_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.10,
				min:1229,
				max:1839
			},
			exclude:['Demon Hunter','Barbarian','Crusader']
		},
		'Two-Handed Mighty Weapon':{
			name_en:'Steppes Smasher',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/mightyweapon2h_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.10,
				min:1462,
				max:1609
			},
			exclude:['Demon Hunter','Monk','Witch Doctor','Wizard','Crusader']
		},
		'Two-Handed Flail':{
			name_en:'Angelic Grand Flail',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/flail_2h_205_demonhunter_male.png'
			},
			weapon:{
				speed:1.15,
				min:1351,
				max:1486
			},
			exclude:['Demon Hunter','Monk','Barbarian','Witch Doctor','Wizard']
		}
	},
	primary:{
		Dmg_Black:{min:[1024,203],max:[1252,304],minl:[1177,233],maxl:[1439,349],mina:[1582,350],maxa:[1870,455]},
		Dmg_Cold:{min:[1024,203],max:[1252,304],minl:[1177,233],maxl:[1439,349],mina:[1582,350],maxa:[1870,455]},
		Dmg_Fire:{min:[1024,203],max:[1252,304],minl:[1177,233],maxl:[1439,349],mina:[1582,350],maxa:[1870,455]},
		Dmg_Lightning:{min:[1024,203],max:[1252,304],minl:[1177,233],maxl:[1439,349],mina:[1582,350],maxa:[1870,455]},
		Dmg_Poison:{min:[1024,203],max:[1252,304],minl:[1177,233],maxl:[1439,349],mina:[1582,350],maxa:[1870,455]},
		Dmg_Arcane:{min:[1024,203],max:[1252,304],minl:[1177,233],maxl:[1439,349],mina:[1582,350],maxa:[1870,455]},
		Dmg_Holy:{min:[1024,203],max:[1252,304],minl:[1177,233],maxl:[1439,349],mina:[1582,350],maxa:[1870,455]},

		//for ranged weapons
		Dmg_Black_ranged:{min:[853,203],max:[1043,304],minl:[981,233],maxl:[1199,349],mina:[1318,350],maxa:[1560,455]},
		Dmg_Cold_ranged:{min:[853,203],max:[1043,304],minl:[981,233],maxl:[1199,349],mina:[1318,350],maxa:[1560,455]},
		Dmg_Fire_ranged:{min:[853,203],max:[1043,304],minl:[981,233],maxl:[1199,349],mina:[1318,350],maxa:[1560,455]},
		Dmg_Lightning_ranged:{min:[853,203],max:[1043,304],minl:[981,233],maxl:[1199,349],mina:[1318,350],maxa:[1560,455]},
		Dmg_Poison_ranged:{min:[853,203],max:[1043,304],minl:[981,233],maxl:[1199,349],mina:[1318,350],maxa:[1560,455]},
		Dmg_Arcane_ranged:{min:[853,203],max:[1043,304],minl:[981,233],maxl:[1199,349],mina:[1318,350],maxa:[1560,455]},
		Dmg_Holy_ranged:{min:[853,203],max:[1043,304],minl:[981,233],maxl:[1199,349],mina:[1318,350],maxa:[1560,455]},

		Dexterity:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Intelligence:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Strength:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Vitality:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},

		AttackSpeed:{min:5,max:6,minl:5,maxl:7/*,mina:5,maxa:7*/},
		FlatDamage:{min:5,max:8,minl:6,maxl:10/*,mina:6,maxa:10*/},

		AreaDamage:{min:14,max:20,minl:16,maxl:24/*,mina:16,maxa:24*/},
		EliteDamage:{min:8,max:9,minl:9,maxl:10/*,mina:9,maxa:10*/},
		CdReduc:{min:5,max:9,minl:6,maxl:10/*,mina:6,maxa:10*/},
		CostReduc:{min:7,max:9,minl:8,maxl:10/*,mina:8,maxa:10*/},
		Bleed:{min:[32,300],max:[37,400],minl:[34,300],maxl:[39,400]/*,mina:[34,300],maxa:[39,400]*/},
		Socket:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/},
		LifePerHit:{min:6823,max:15473,minl:15474,maxl:18429,mina:20271,maxa:23950},

		ManaRegen:{min:12,max:14/*,minl:12,maxl:14,mina:12,maxa:14*/},
		SpiritRegen:{min:0,max:0,minl:0,maxl:0,mina:217,maxa:300},
		LifePerSpirit:{min:0,max:0,minl:0,maxl:0,mina:456,maxa:540}
	},
	secondary:{
		LifeAfterKill:{min:4686,max:9141,minl:9142,maxl:13371,mina:14708,maxa:17385},
		IgnoreDura:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/},
		LevelReduc:{min:2,max:30,minl:2,maxl:30,mina:30,maxa:40},
		BonusXp:{min:100,max:139,minl:140,maxl:200,mina:220,maxa:260},

		FearHit:{min:10,max:45,minl:10,maxl:51/*,mina:10,maxa:51*/},
		StunHit:{min:10,max:45,minl:10,maxl:51/*,mina:10,maxa:51*/},
		BlindHit:{min:10,max:45,minl:10,maxl:51/*,mina:10,maxa:51*/},
		FreezeHit:{min:10,max:45,minl:10,maxl:51/*,mina:10,maxa:51*/},
		ChillHit:{min:10,max:45,minl:10,maxl:51/*,mina:10,maxa:51*/},
		SlowHit:{min:10,max:45,minl:10,maxl:51/*,mina:10,maxa:51*/},
		ImmobHit:{min:10,max:45,minl:10,maxl:51/*,mina:10,maxa:51*/},
		KnockHit:{min:10,max:45,minl:10,maxl:51/*,mina:10,maxa:51*/},

		MaxDisc:{min:8,max:10,minl:9,maxl:12/*,mina:9,maxa:12*/},
		MaxSpirit:{min:26,max:28,minl:26,maxl:30,mina:26,maxa:30},
		MaxFury:{min:20,max:24,minl:20,maxl:24,mina:20,maxa:24},
		MaxWrath:{min:8,max:16,minl:0,maxl:0,mina:14,maxa:16}
	}
};

module.exports = twohand;