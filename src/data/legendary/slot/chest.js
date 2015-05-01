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
		name:"Aughild's Rule",
		type:"Chest Armor",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:12,vc:7,fs:2,db:14
		},
		smartLoot:[
			"Demon Hunter",
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			RANDOM:4
		},
		secondary:{
			RANDOM:2
		},
		set:'Aughild\'s Authority',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_026_x1_demonhunter_male.png',
		flavor:'Aughild\'s vestments were originally crafted to reflect both his savagery and his nobility.'
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
		name:"Born's Frozen Soul",
		type:"Chest Armor",
		weight:0,
		hc:false,
		season:false,
		smartLoot:[
			"Demon Hunter",
			"Monk",	
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			RANDOM:4
		},
		secondary:{
			RANDOM:2
		},
		set:'Born\'s Command',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_025_x1_demonhunter_male.png',
		flavor:'This armor is designed after that worn by the famed warrior Born, who was known to rush headlong into battle against superior numbers with no thought for his own safety.'
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
		name:"Cuirass of the Wastes",
		type:"Chest Armor",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[
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
		set:'Wrath of the Wastes',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_set_01_p2_demonhunter_male.png',
		flavor:'Narthal of the Bear Tribe discovered the aftermath of a great battle in the wastes. He did not recognize the dead, but noticed that many had filed their teeth to points. Among the debris of the battle, he found this cuirass.'
	},
	{
		name:"Demon's Marrow",
		type:"Chest Armor",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:12,vc:7,fs:2,db:4
		},
		smartLoot:[
			"Demon Hunter",
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			RANDOM:4
		},
		secondary:{
			RANDOM:2
		},
		set:'Demon\'s Hide',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_027_x1_demonhunter_male.png',
		flavor:'Sulam had a vision of creating a suit of armor, crafted from the flesh of demons, in order to use their power against them.'
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
		name:"Harness of Truth",
		type:"Chest Armor",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[
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
		set:'Delsere\'s Magnum Opus',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_set_02_p2_demonhunter_male.png',
		flavor:'“Delsere described this armor as resplendent. When asked why that mattered, he would rant that form is function. Any praise for his advanced magical crafting skills only infuriated him more.”- High Councilor Valthek'
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
		set:'Inna\'s Mantra',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_015_x1_demonhunter_male.png',
		flavor:'Only the holy will find refuge in Inna\'s arms.'
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
		set:'Raiment of the Jade Harvester',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_set_09_x1_demonhunter_male.png',
		flavor:'Tukam had outlived both his children and grandchildren by the time he finally fell in battle. As his rivals prepared him for ritual sacrifice, he wept tears of joy at the thought of meeting his loved ones again.'
	},
	{
		name:"Mantle of the Rydraelm",
		type:"Chest Armor",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:12,vc:7,fs:2
		},
		smartLoot:[
			"Demon Hunter",
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			RANDOM:4
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_019_x1_demonhunter_male.png',
		flavor:'The Rydraelm, a shadowy group of mages, concerned itself with the most arcane forms of magic until its mysterious and grisly demise.'
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
		set:'Embodiment of the Marauder',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_set_07_x1_demonhunter_male.png',
		flavor:'"We can wear the demons\' armaments, their very flesh, upon our bodies, and become something more than human—a nightmare reflection of demonkind—to sow chaos and death among them."—Hunter Esche Maithe'
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
		set:'The Legacy of Raekor',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_set_05_x1_demonhunter_male.png',
		flavor:'Joritz the Mighty dedicated his life to Raekor after she liberated him from a Samaurenian labor camp. This magnificent brigandine was his gift to her on their wedding day.'
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
		set:'Roland\'s Legacy',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_set_01_p1_demonhunter_male.png',
		flavor:'"My master believed salvation knows no bounds. I was a soul to be saved, so he saved me. That is why I proudly bear his name. The name of a great man." —Meditations on My Redemption'
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
		primary:{
			MAIN:null,
			RANDOM:1
		},
		secondary:{
			ShiMizu:{
				min:20,
				max:25
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_101_x1_demonhunter_male.png',
		flavor:'"Being near death tends to focus the mind." —Shi Mizu, Warrior-Philosopher'
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
		primary:{
			Intelligence:null,
			Vitality:null,
			Socket:{
				min:3,
				max:3
			},
			AttackSpeed:{
				min:5,
				max:6
			}
		},
		secondary:{
			RANDOM:2
		},
		set:'Tal Rasha\'s Elements',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_014_x1_demonhunter_male.png',
		flavor:'The Horadrim dedicated themselves to tracking down and imprisoning the Prime Evils to protect all of mankind from Hell\'s dark corruption.'
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
		set:'The Shadow\'s Mantle',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_set_14_x1_demonhunter_male.png',
		flavor:'Legends in the Dreadlands speak of an uncanny demon hunter named Kunai who could become one with shadow.'
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
		primary:{
			MAIN:null,
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			DemonDamage:{
				min:10,
				max:15
			},
			IgnoreDura:null
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_002_x1_demonhunter_male.png',
		flavor:'"And lo, the Angel of Justice did cast his judgment in favor of the nephalem." —The Books of Jarl, Volume III'
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
		set:'Vyr\'s Amazing Arcana',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_set_13_x1_demonhunter_male.png',
		flavor:'"Vyr created his famed obelisk to gather the power of the Archon, a being he claimed existed on a different plane of reality. He is even reputed to have stored this macabre power in armor of his own design." —Abd al-Hazir'
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
		set:'Zunimassa\'s Haunt',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_016_x1_demonhunter_male.png',
		flavor:'The warrior who dons this armor will always have the spirit of Zunimassa upon them.'
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
		primary:{
			Dexterity:null,
			Socket:{
				min:3,
				max:3
			},
			RANDOM:2
		},
		secondary:{
			BeckonSail:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_cloak_005_x1_demonhunter_male.png',
		flavor:'Favored by those who do their fighting in the underworld.'
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
		primary:{
			Dexterity:null,
			Socket:{
				min:3,
				max:3
			},
			RANDOM:2
		},
		secondary:{
			Blackfeather:{
				min:600,
				max:800
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_cloak_101_x1_demonhunter_male.png',
		flavor:'This cloak matches the description of the one worn by the hero in the popular children\'s tale Yorgie and the Giants.'
	},
	{
		name:"Cage of the Hellborn",
		type:"Cloak",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[
			"Demon Hunter"
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
		set:'Unhallowed Essence',
		image:'//media.blizzard.com/d3/icons/items/large/unique_chest_set_03_p2_demonhunter_male.png',
		flavor:'"When a demon peers into your heart of hearts, demon hunter, what will he find? Death. Whether it is his or yours depends solely on you. "-Kovan the Merciless'
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
		primary:{
			Dexterity:null,
			RANDOM:3
		},
		secondary:{
			DarkNight:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_cloak_001_x1_demonhunter_male.png',
		flavor:'"Those who seek to do evil are a cowardly and superstitious lot." —Demon Hunter Bayne'
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
		set:'Natalya\'s Vengeance',
		image:'//media.blizzard.com/d3/icons/items/large/unique_cloak_006_x1_demonhunter_male.png',
		flavor:'Natalya knew how to use the darkness as a weapon.'
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
		primary:{
			Dexterity:null,
			RANDOM:3
		},
		secondary:{
			Garwulf:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_cloak_002_p1_demonhunter_male.png',
		flavor:'The cloak of one with an affinity toward wolves.'
	}
];

module.exports = chest;
