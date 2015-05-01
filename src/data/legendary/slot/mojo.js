var mojo = [
	{
		name: "Gazing Demise",
		type: "Mojo",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			LifeRegen:null,
			ManaRegen:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mojo_003_x1_demonhunter_male.png',
		flavor:'The eyes of fallen warriors peer into the darkness to see what you cannot.'
	},
	{
		name: "Homunculus",
		type: "Mojo",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			CritChance:null,
			SacrificeDmg:{
				min:20,
				max:25
			},
			RANDOM:2
		},
		secondary:{
			MaxMana:null,
			Homunculus:null,
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mojo_004_p2_demonhunter_male.png',
		flavor:'The severed head of a homunculus is the source of much power for a knowledgeable witch doctor.'
	},
	{
		name: "Manajuma's Gory Fetch",
		type: "Mojo",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			ManaRegen:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Manajuma\'s Way',
		image:'//media.blizzard.com/d3/icons/items/large/unique_mojo_010_x1_demonhunter_male.png',
		flavor:'Manajuma imbued this dead chicken with much magic—for reasons only he can know.'
	},
	{
		name: "Shukrani's Triumph",
		type: "Mojo",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			CritChance:null,
			ManaRegen:null,
			RANDOM:1
		},
		secondary:{
			Shukrani:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mojo_102_x1_demonhunter_male.png',
		flavor:'The inhuman organ set into the center of this mojo once belonged to the demon Zagraal. At the end of a titanic battle during which all of her fellows were slain, the surviving witch doctor carved the still-beating heart from the fallen demon. Mounting it in a spirit cage, Shukrani harnessed the dark power of the heart that she might stride the realm of Mbwiru Eikura unchallenged.'
	},
	{
		name:"Spite",
		type:"Mojo",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2
		},
		smartLoot:[
			"Witch Doctor"
		],
		primary:{
			AvgDamage:null,
			CritChance:null,
			RANDOM:3
		},
		secondary:{
			MaxMana:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mojo_002_x1_demonhunter_male.png',
		flavor:'You hold your enemy\'s future in your hand.'
	},
	{
		name: "Thing of the Deep",
		type: "Mojo",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			CritChance:null,
			ManaRegen:null,
			RANDOM:1
		},
		secondary:{
			MaxMana:null,
			PickupRadius:{
				min:20,
				max:20
			}
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mojo_009_x1_demonhunter_male.png',
		flavor:'A terrifying being spawned from the primordial depths. To gaze upon it is enough to drive one mad. Currently disguised as a frog.'
	},
	{
		name: "Uhkapian Serpent",
		type: "Mojo",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			Uhkapian:{
				min:25,
				max:30
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mojo_008_x1_demonhunter_male.png',
		flavor:'The uhkapian serpent\'s venom weakens the veil between this world and the Unformed Land.'
	},
	{
		name: "Zunimassa's String of Skulls",
		type: "Mojo",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			AvgDamage:null,
			Intelligence:null,
			Vitality:null,
			CritChance:null,
			FetishArmyDmg:{
				min:20,
				max:25
			}
		},
		secondary:{
			RANDOM:2
		},
		set:'Zunimassa\'s Haunt',
		image:'//media.blizzard.com/d3/icons/items/large/unique_mojo_011_x1_demonhunter_male.png',
		flavor:'When threatened, she drew upon the spirits to unleash the fury buried within.'
	}
];

module.exports = mojo;