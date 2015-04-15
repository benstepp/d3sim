var chest = [
	{
		name: "Aquila Cuirass",
		type: "Chest Armor",
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
			Vitality:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_012_x1_demonhunter_male.png',
		flavor:'Ceremonial armor commemorating the chieftain Ghaold\'s victory over the wild men from the east.'
	},
	{
		name: "Armor of the Kind Regent",
		type: "Chest Armor",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{
			Strength:null,
			RANDOM:3
		},
		secondary:{
			KindRegent:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_102_x1_demonhunter_male.png',
		flavor:'"Yoel, the so called \'Kind Regent\' of Taubej, was anything but. He took great pleasure in torturing his enemies, real or imagined, and periodically would have a random peon dragged out into the square to be tortured to death, just to keep his people scared and docile. Yoel named himself the Kind Regent, as he truly believed he was a benevolent ruler. Of course, he was quite mad." —Deckard Cain'
	},
	{
		name: "Blackthorne's Surcoat",
		type: "Chest Armor",
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
			Vitality:null,
			Socket:{
				min:3,
				max:3
			},
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		set:'Blackthorne\'s Battlegear',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chestarmor_028_x1_demonhunter_male.png',
		flavor:'Baron Blackthorne led his knights to prevent the escape of King Leoric\'s forces during their defeat against Westmarch, forcing them to choose between surrender and death in the quagmire.'
	},
	{
		name: "Breastplate of Akkhan",
		type: "Chest Armor",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{
			Strength:null,
			Socket:{
				min:3,
				max:3
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Armor of Akkhan',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_set_10_x1_demonhunter_male.png',
		flavor:'"Let each crusader\'s heart be protected by a breastplate of astounding strength, for the heart drives all else in the depths of battle." -Akkhan'
	},
	{
		name: "Chaingmail",
		type: "Chest Armor",
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
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			Chaingmail:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_010_x1_demonhunter_male.png',
		flavor:'The magical properties of a piece of armor such as this intrigue the mind. It was constructed from the finest parts of many different armors that were worn by many different heroes.'
	},
	{
		name: "Cindercoat",
		type: "Chest Armor",
		weight: 50,
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
			FireDamage:{
				min:5,
				max:20
			},
			RANDOM:2
		},
		secondary:{
			FireReduc:{
				min:20,
				max:30
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_006_x1_demonhunter_male.png',
		flavor:'One could withstand the fires of Hell itself wearing armor such as this.'
	},
	{
		name: "Firebird's Breast",
		type: "Chest Armor",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			Socket:{
				min:3,
				max:3
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Firebird\'s Finery',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_set_06_x1_demonhunter_male.png',
		flavor:'"The origins of these \'Firebird\' artifacts remain a mystery. The designs of their magical structures are advanced, yet the objects themselves appear to be hundreds of years old."—Magus Vaeh Callee'
	},
	{
		name: "Goldskin",
		type: "Chest Armor",
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
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			GoldFind:{
				min:100,
				max:100
			},
			Goldskin:null
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_001_x1_demonhunter_male.png',
		flavor:'The darkness of the low places is shattered by the raiment of gold.'
	},
	{
		name: "Heart of Iron",
		type: "Chest Armor",
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
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_018_x1_demonhunter_male.png',
		flavor:'It is said that those who wear this breastplate will display extraordinary valor in even the direst of circumstances.'
	},
	{
		name: "Heart of the Crashing Wave",
		type: "Chest Armor",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			Socket:{
				min:3,
				max:3
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Raiment of a Thousand Storms',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_set_08_x1_demonhunter_male.png',
		flavor:'"Tranquility of spirit belies the furious tide raging deep beneath a calm surface." —Ivgorod proverb'
	},
	{
		name: "Helltooth Tunic",
		type: "Chest Armor",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			Socket:{
				min:3,
				max:3
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Helltooth Harness',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_set_16_x1_demonhunter_male.png',
		flavor:'"Great power festers within demon skulls. Wear them close to your heart, and feel their dark magic thunder through you." —Jeram of the Whispering Valley'
	},
	{
		name: "Immortal King's Eternal Reign",
		type: "Chest Armor",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{
			Strength:null,
			Socket:{
				min:3,
				max:3
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Immortal King\'s Call',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_013_x1_demonhunter_male.png',
		flavor:'Worn during the Immortal King\'s final battle.'
	},
	{
		name: "Inna's Vast Expanse",
		type: "Chest Armor",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "Jade Harvester's Peace",
		type: "Chest Armor",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "Marauder's Carapace",
		type: "Chest Armor",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "Raekor's Heart",
		type: "Chest Armor",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "Roland's Bearing",
		type: "Chest Armor",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "Shi Mizu's Haori",
		type: "Chest Armor",
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
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "Tal Rasha's Relentless Pursuit",
		type: "Chest Armor",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "The Shadow's Bane",
		type: "Chest Armor",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "Tyrael's Might",
		type: "Chest Armor",
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
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "Vyr's Astonishing Aura",
		type: "Chest Armor",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "Zunimassa's Marrow",
		type: "Chest Armor",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "Beckon Sail",
		type: "Cloak",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "Blackfeather",
		type: "Cloak",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "Cape of the Dark Night",
		type: "Cloak",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "Natalya's Embrace",
		type: "Cloak",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	},
	{
		name: "The Cloak of the Garwulf",
		type: "Cloak",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		set:'',
		image:'',
		flavor:''
	}
];

module.exports = chest;