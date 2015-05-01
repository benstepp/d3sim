var source = [
	{
		name: "Chantodo's Force",
		type: "Source",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			CritChance:null,
			APOC:null,
			RANDOM:1
		},
		secondary:{
			MaxAp:null,
			RANDOM:1
		},
		set:'Chantodo\'s Resolve',
		image:'//media.blizzard.com/d3/icons/items/large/unique_orb_011_x1_demonhunter_male.png',
		flavor:'Only a master of the mystical arts can harness the forces contained within this orb.'
	},
	{
		name:"Cosmic Strand",
		type:"Source",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2,db:5
		},
		smartLoot:[
			"Wizard"
		],
		primary:{
			AvgDamage:null,
			RANDOM:4
		},
		secondary:{
			CosmicStrand:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_orb_004_x1_demonhunter_male.png',
		flavor:'Holds the secret to existence for those who can decipher its intricate design.'
	},
	{
		name: "Firebird's Eye",
		type: "Source",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			FireDamage:{
				min:15,
				max:20
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Firebird\'s Finery',
		image:'//media.blizzard.com/d3/icons/items/large/unique_orb_set_06_x1_demonhunter_male.png',
		flavor:'"This orb is a super spun energy gyre. Arcane and thermal energies can be sealed within for long periods, and when the spin is reversed those energies unspool and may be employed." —Magus Arrin Eberhart'
	},
	{
		name: "Light of Grace",
		type: "Source",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			LightGrace:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_orb_103_x1_demonhunter_male.png',
		flavor:'"The guttering flame within this ornate Xiansai brazier burns with a cold, dim light. In fact, the Light of Grace actually draws warmth from its surroundings to increase its dull luminance, a rather simple magical effect that some sly wizard might well coopt to increase her powers." —Isendra the Sorceress'
	},
	{
		name: "Mirrorball",
		type: "Source",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			Mirrorball:{
				min:1,
				max:2
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_orb_101_x1_demonhunter_male.png',
		flavor:'"Summoned from beyond the veil of death, and disposed to send its victims back there, the malevolent intelligence within this silver sphere may only be controlled by someone with intense resolve. Once its power is harnessed, however, the ball acts as a loyal enforcer of its master\'s will." —Deckard Cain'
	},
	{
		name: "Myken's Ball of Hate",
		type: "Source",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			Myken:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_orb_102_x1_demonhunter_male.png',
		flavor:'Myken, famed sorcerer of the island nation of Uie, was known for his vitriolic demeanor. One day, at the height of a fevered tirade, the magical embodiment of his wrath burst from his body, granting the spellcaster a serenity that he\'d missed for years. Many have since sought the orb, hoping to master its terrible destructive force.'
	},
	{
		name: "Tal Rasha's Unwavering Glare",
		type: "Source",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			CritChance:null,
			MeteorDmg:{
				min:20,
				max:25
			},
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		set:'Tal Rasha\'s Elements',
		image:'//media.blizzard.com/d3/icons/items/large/unique_orb_012_x1_demonhunter_male.png',
		flavor:'Tal Rasha stored much of his power in this source before sacrificing himself to imprison the demon lord Baal.'
	},
	{
		name: "The Oculus",
		type: "Source",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			APOC:null,
			Oculus:{
				min:1,
				max:4
			},
			RANDOM:1
		},
		secondary:{
			OculusT:{
				min:15,
				max:20
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_orb_001_x1_demonhunter_male.png',
		flavor:'This orb was purported to be the eye of a giant, magical sea creature, but it was actually painstakingly crafted, layer upon layer, by the grand mage Ethad five hundred years before the time of the Horadrim.'
	},
	{
		name: "Triumvirate",
		type: "Source",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			Trium:{
				min:75,
				max:100
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_orb_003_demonhunter_male.png',
		flavor:'The Triumvirate is composed of the three basic elements of creation.'
	},
	{
		name: "Winter Flurry",
		type: "Source",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			ColdDamage:{
				min:5,
				max:10
			},
			RANDOM:2
		},
		secondary:{
			WinterFlurry:{
				min:15,
				max:20
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_orb_005_x1_demonhunter_male.png',
		flavor:'The power of the cold death of winter is not something to be taken lightly.'
	}
];

module.exports = source;