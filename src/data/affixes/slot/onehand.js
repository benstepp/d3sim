var onehand = {
	slot_en:'1-Hand',
	type:{
		'Axe':{
			name_en:'Dire Axe',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/axe_1h_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.3,
				min:249,
				max:461
			},
			exclude:['Demon Hunter']
		},
		'Dagger':{
			name_en:'Punyal',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/dagger_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.5,
				min:107,
				max:321
			},
			exclude:['Demon Hunter']
		},
		'Mace':{
			name_en:'Skullsplitter',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/mace_1h_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.2,
				min:316,
				max:585
			},
			exclude:['Demon Hunter']
		},
		'Spear':{
			name_en:'Disemboweler',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/spear_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.2,
				min:353,
				max:526
			},
			exclude:['Demon Hunter']
		},
		'Sword':{
			name_en:'Tsunami Blade',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/sword_1h_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.4,
				min:168,
				max:392
			},
			exclude:['Demon Hunter']
		},
		'Ceremonial Knife':{
			name_en:'Tecpatyl',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/spear_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.4,
				min:117,
				max:469
			},
			exclude:['Demon Hunter','Monk','Barbarian','Crusader','Wizard']
		},
		'Fist Weapon':{
			name_en:'Suwaiya',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/fistweapon_1h_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.4,
				min:168,
				max:392
			},
			exclude:['Demon Hunter','Barbarian','Crusader','Wizard','Witch Doctor']
		},
		'Flail':{
			name_en:'Grandfather Flail',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/flail_1h_205_demonhunter_male.png'
			},
			weapon:{
				speed:1.4,
				min:192,
				max:355
			},
			exclude:['Demon Hunter','Monk','Barbarian','Witch Doctor','Wizard']
		},
		'Mighty Weapon':{
			name_en:'Limb Cleaver',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/mightyweapon1h_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.3,
				min:249,
				max:461
			},
			exclude:['Demon Hunter','Monk','Crusader','Witch Doctor','Wizard']
		},
		'Hand Crossbow':{
			name_en:'Penetrator',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/handxbow_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.6,
				min:126,
				max:714
			},
			exclude:['Monk','Barbarian','Crusader','Wizard','Witch Doctor']
		},
		'Wand':{
			name_en:'Diabolic Wand',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/wand_302_demonhunter_male.png'
			},
			weapon:{
				speed:1.4,
				min:193,
				max:357
			},
			exclude:['Demon Hunter','Monk','Barbarian','Crusader','Witch Doctor']
		}
	},
	primary:{
		Dmg_Black:{min:[853,169],max:[1043,253],minl:[981,194],maxl:[1199,291],mina:[1318,291],maxa:[1560,380]},
		Dmg_Cold:{min:[853,169],max:[1043,253],minl:[981,194],maxl:[1199,291],mina:[1318,291],maxa:[1560,380]},
		Dmg_Fire:{min:[853,169],max:[1043,253],minl:[981,194],maxl:[1199,291],mina:[1318,291],maxa:[1560,380]},
		Dmg_Lightning:{min:[853,169],max:[1043,253],minl:[981,194],maxl:[1199,291],mina:[1318,291],maxa:[1560,380]},
		Dmg_Poison:{min:[853,169],max:[1043,253],minl:[981,194],maxl:[1199,291],mina:[1318,291],maxa:[1560,380]},
		Dmg_Arcane:{min:[853,169],max:[1043,253],minl:[981,194],maxl:[1199,291],mina:[1318,291],maxa:[1560,380]},
		Dmg_Holy:{min:[853,169],max:[1043,253],minl:[981,194],maxl:[1199,291],mina:[1318,291],maxa:[1560,380]},

		//for the hand crossbow
		Dmg_Black_hc:{min:[747,148],max:[912,222],minl:[858, 170],maxl:[1049,255],mina:[1153,255],maxa:[1365,335]},
		Dmg_Cold_hc:{min:[747,148],max:[912,222],minl:[858, 170],maxl:[1049,255],mina:[1153,255],maxa:[1365,335]},
		Dmg_Fire_hc:{min:[747,148],max:[912,222],minl:[858, 170],maxl:[1049,255],mina:[1153,255],maxa:[1365,335]},
		Dmg_Lightning_hc:{min:[747,148],max:[912,222],minl:[858, 170],maxl:[1049,255],mina:[1153,255],maxa:[1365,335]},
		Dmg_Poison_hc:{min:[747,148],max:[912,222],minl:[858, 170],maxl:[1049,255],mina:[1153,255],maxa:[1365,335]},
		Dmg_Arcane_hc:{min:[747,148],max:[912,222],minl:[858, 170],maxl:[1049,255],mina:[1153,255],maxa:[1365,335]},
		Dmg_Holy_hc:{min:[747,148],max:[912,222],minl:[858, 170],maxl:[1049,255],mina:[1153,255],maxa:[1365,335]},

		//for the dagger
		Dmg_Black_dagger:{min:[747,895],max:[912,1134],minl:[981,194],maxl:[1199,291],mina:[1153,255],maxa:[1365,335]},
		Dmg_Cold_dagger:{min:[747,895],max:[912,1134],minl:[981,194],maxl:[1199,291],mina:[1153,255],maxa:[1365,335]},
		Dmg_Fire_dagger:{min:[747,895],max:[912,1134],minl:[981,194],maxl:[1199,291],mina:[1153,255],maxa:[1365,335]},
		Dmg_Lightning_dagger:{min:[747,895],max:[912,1134],minl:[981,194],maxl:[1199,291],mina:[1153,255],maxa:[1365,335]},
		Dmg_Poison_dagger:{min:[747,895],max:[912,1134],minl:[981,194],maxl:[1199,291],mina:[1153,255],maxa:[1365,335]},
		Dmg_Arcane_dagger:{min:[747,895],max:[912,1134],minl:[981,194],maxl:[1199,291],mina:[1153,255],maxa:[1365,335]},
		Dmg_Holy_dagger:{min:[747,895],max:[912,1134],minl:[981,194],maxl:[1199,291],mina:[1153,255],maxa:[1365,335]},

		Dexterity:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Intelligence:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Strength:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},
		Vitality:{min:525,max:625,minl:626,maxl:750,mina:825,maxa:1000},

		AttackSpeed:{min:5,max:6,minl:5,maxl:7/*,mina:5,maxa:7*/},
		FlatDamage:{min:5,max:8,minl:6,maxl:10/*,mina:6,maxa:10*/},

		AreaDamage:{min:14,max:20,minl:16,maxl:24/*,mina:16,maxa:24*/},
		EliteDamage:{min:4,max:7,minl:5,maxl:8/*,mina:5,maxa:8*/},
		CdReduc:{min:5,max:9,minl:6,maxl:10/*,mina:6,maxa:10*/},
		CostReduc:{min:7,max:9,minl:8,maxl:10/*,mina:8,maxa:10*/},
		Bleed:{min:[32,300],max:[37,400],minl:[34,300],maxl:[39,400]/*,mina:[34,300],maxa:[39,400]*/},
		Socket:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/},
		LifePerHit:{min:6823,max:15473,minl:15474,maxl:18429,mina:20271,maxa:23950},

		ManaRegen:{min:12,max:14/*,minl:12,maxl:14,mina:12,maxa:14*/},
		SpiritRegen:{min:183,max:250,minl:217,maxl:300,mina:217,maxa:300},
		LifePerSpirit:{min:157,max:350,minl:353,maxl:415,mina:456,maxa:540}
	},
	secondary:{
		LifeAfterKill:{min:3124,max:6427,minl:6428,maxl:8914,mina:9805,maxa:11590},
		IgnoreDura:{min:1,max:1/*,minl:1,maxl:1,mina:1,maxa:1*/},
		LevelReduc:{min:2,max:30,minl:2,maxl:30,mina:30,maxa:40},
		BonusXp:{min:100,max:139,minl:140,maxl:200,mina:220,maxa:260},

		FearHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		StunHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		BlindHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		FreezeHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		ChillHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		SlowHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		ImmobHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},
		KnockHit:{min:10,max:23,minl:10,maxl:26/*,mina:10,maxa:26*/},

		MaxAp:{min:7,max:14,minl:10,maxl:14,mina:13,maxa:14},
		MaxDisc:{min:8,max:10,minl:9,maxl:12/*,mina:9,maxa:12*/},
		MaxSpirit:{min:13,max:14,minl:13,maxl:15/*,mina:13,maxa:15*/},
		MaxFury:{min:10,max:12/*,minl:10,maxl:12,mina:10,maxa:12*/},
		MaxMana:{min:120,max:150/*,minl:120,maxl:150,mina:120,maxa:150*/},
		MaxWrath:{min:4,max:8,minl:6,maxl:7,mina:7,maxa:8}
	}
};

module.exports = onehand;