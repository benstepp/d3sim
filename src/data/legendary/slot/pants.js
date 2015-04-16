var pants = [
	{
		name: "Blackthorne's Jousting Mail",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter",
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			MAIN:null,
			Socket:{
				min:2,
				max:2
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Blackthorne\'s Battlegear',
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_013_x1_demonhunter_male.png',
		flavor:'Tailored to exact specifications for comfort in riding, walking, fencing and jousting.'
	},
	{
		name: "Cuisses of Akkhan",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{
			Strength:null,
			Socket:{
				min:2,
				max:2
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Armor of Akkhan',
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_set_10_x1_demonhunter_male.png',
		flavor:'"Let the crusaders wrap their legs in plate of wondrous strength. Their stride will take them to the salvation of the Zakarum faith. Thus shall Akarat\'s word be cleansed." -Akkhan'
	},
	{
		name: "Depth Diggers",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter",
			"Monk",
			"Barbarian",
			"Crusader"
		],
		primary:{
			MAIN:null,
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			DepthDiggers:{
				min:80,
				max:100
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_006_p1_demonhunter_male.png',
		flavor:'Those planning on plumbing the depths of ancient tombs in search of treasure would do well to wear these pants.'
	},
	{
		name: "Firebird's Down",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			Socket:{
				min:2,
				max:2
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Firebird\'s Finery',
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_set_06_x1_demonhunter_male.png',
		flavor:'"These pantaloons reflect energy along localized leys within its weave. Only the most advanced Art could even conceive such patterns."—Tath of Harakas'
	},
	{
		name: "Hammer Jammers",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter",
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			MAIN:null,
			MoveSpeed:{
				min:10,
				max:12
			},
			RANDOM:2
		},
		secondary:{
			GoldFind:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_002_x1_demonhunter_male.png',
		flavor:'These large pants cannot be touched.'
	},
	{
		name: "Helltooth Leg Guards",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			Socket:{
				min:2,
				max:2
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Helltooth Harness',
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_set_16_x1_demonhunter_male.png',
		flavor:'"Those who garb themselves in the bones of demons need never fear them." —Jeram of the Whispering Valley'
	},
	{
		name: "Hexing Pants of Mr. Yan",
		type: "Pants",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter",
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			MAIN:null,
			RANDOM:3
		},
		secondary:{
			HexingPants:{
				min:20,
				max:25
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_101_x1_demonhunter_male.png',
		flavor:'These pants were part of an elaborate outfit worn by the infamous (and surprisingly stylish) enchanter Mr. Yan while adventuring in Westmarch. Lacking patience, and impulse control, Mr. Yan was always rushing headlong into danger-not a recipe for survival for a spell caster. Being a clever man, though, Mr. Yan designed this garment to turn his weakness into a strength.'
	},
	{
		name: "Inna's Temperance",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			Socket:{
				min:2,
				max:2
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Inna\'s Mantra',
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_008_x1_demonhunter_male.png',
		flavor:'The goddess of the sky is infinite in her glory.'
	},
	{
		name: "Jade Harvester's Courage",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			Socket:{
				min:2,
				max:2
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Raiment of the Jade Harvester',
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_set_09_x1_demonhunter_male.png',
		flavor:'Tukam\'s first child was born while he was fighting in the Harvest of Souls. He claimed a spirit whispered the news to him, and that the knowledge gave him the courage to overcome his many foes.'
	},
	{
		name: "Marauder's Encasement",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			Socket:{
				min:2,
				max:2
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Embodiment of the Marauder',
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_set_07_x1_demonhunter_male.png',
		flavor:'"I envelop myself in the trappings of my foes, and I learn their ways. I can bathe in the foul darkness of their kind and emerge clean, for I am purified by my vengeance."—Hunter Kee Morse'
	},
	{
		name: "Pox Faulds",
		type: "Pants",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter",
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			MAIN:null,
			RANDOM:3
		},
		secondary:{
			PoxFaulds:{
				min:450,
				max:550
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_007_p2_demonhunter_male.png',
		flavor:'Made from the treated skin of plague victims.'
	},
	{
		name: "Raekor's Breeches",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{
			Strength:null,
			Socket:{
				min:2,
				max:2
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'The Legacy of Raekor',
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_set_05_x1_demonhunter_male.png',
		flavor:'Originally part of Joritz the Mighty\'s fearsome armor, Raekor wore these oxen-hide breeches into battle for the rest of her life following her husband\'s untimely death.'
	},
	{
		name: "Roland's Determination",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{
			Strength:null,
			Socket:{
				min:2,
				max:2
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Roland\'s Legacy',
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_set_01_p1_demonhunter_male.png',
		flavor:'"My master would not be deterred. My redemption, even in the face of my obstinate nature, testifies to the depth of his faith in his beliefs, and in me." —Meditations on My Redemption'
	},
	{
		name: "Scales of the Dancing Serpent",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			Socket:{
				min:2,
				max:2
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Raiment of a Thousand Storms',
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_set_08_x1_demonhunter_male.png',
		flavor:'"The dancing form slipped lithely through the rustling forest, hypnotic and beautiful. I did not understand my fate until I felt the sting, looked down, and saw the blood pour from my chest..." —Journey to the South'
	},
	{
		name: "Swamp Land Waders",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			PoisonDamage:{
				min:15,
				max:20
			},
			RANDOM:2
		},
		secondary:{
			CcReduc:{
				min:8,
				max:14
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_001_x1_demonhunter_male.png',
		flavor:'Specially crafted to withstand the rigors of the swamp lands.'
	},
	{
		name: "The Shadow's Coil",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			Socket:{
				min:2,
				max:2
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'The Shadow\'s Mantle',
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_set_14_x1_demonhunter_male.png',
		flavor:'"Step into the abyss. Welcome it. Know it. It\'s yours, now." —Demon Hunter Kunai'
	},
	{
		name: "Vyr's Fantastic Finery",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			Socket:{
				min:2,
				max:2
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Vyr\'s Amazing Arcana',
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_set_13_x1_demonhunter_male.png',
		flavor:'"Vyr was a tyrant, but took enormous pride in his appearance. It is believed he was wearing these silken trousers the day he was murdered by his own acolytesl." —Abd al-Hazir'
	},
	{
		name: "Weight of the Earth",
		type: "Pants",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{
			Strength:null,
			Socket:{
				min:2,
				max:2
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Might of the Earth',
		image:'//media.blizzard.com/d3/icons/items/large/unique_pants_set_15_x1_demonhunter_male.png',
		flavor:'All living creatures trust in the stillness of the earth. They know nothing of the currents that flow beneath its surface. They do not comprehend its weight. They cannot understand its power.'
	}
];

module.exports = pants;