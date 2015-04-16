var shoulders = [
	{
		name: "Burden of the Invoker",
		type: "Shoulders",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Witch Doctor"
		],
		primary:{
			MAIN:null,
			RANDOM:3
		},
		secondary:{
			Thorns:null,
			RANDOM:1
		},
		set:'Thorns of the Invoker',
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_set_12_x1_demonhunter_male.png',
		flavor:'Ancient Vizjerei mages would infuse their armor and weaponry with demon blood. Over time, these implements often twisted the sorcerers into instruments of torment.'
	},
	{
		name: "Death Watch Mantle",
		type: "Shoulders",
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
			RANDOM:3
		},
		secondary:{
			DeathWatch:{
				min:[25, 750],
				max:[35, 950]
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_002_p2_demonhunter_male.png',
		flavor:'These vicious pads draw their power from the very life force of your enemies.'
	},
	{
		name: "Firebird's Pinions",
		type: "Shoulders",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			CostReduc:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Firebird\'s Finery',
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_set_06_x1_demonhunter_male.png',
		flavor:'"I have discovered hollows beneath the surface of these shoulder plates. They appear to trap the fleeting arcarnum thrown off by traditional casting and draw it back into the mage!" —Quov Tsin'
	},
	{
		name: "Helltooth Mantle",
		type: "Shoulders",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			CdReduc:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Helltooth Harness',
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_set_16_x1_demonhunter_male.png',
		flavor:'"I asked the spirits how to defeat evil, but they were always silent. After seven sunsets, my answer came—evil defeats itself. Only after many more sunsets did I understand." —Jeram of the Whispering Valley'
	},
	{
		name: "Homing Pads",
		type: "Shoulders",
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
			RANDOM:3
		},
		secondary:{
			GoldFind:null,
			HomingPads:{
				min:50,
				max:65
			}
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_001_x1_demonhunter_male.png',
		flavor:'These enchanted shoulder pieces maintain a constant connection to the origin point of their wearer.'
	},
	{
		name: "Jade Harvester's Joy",
		type: "Shoulders",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Raiment of the Jade Harvester',
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_set_09_x1_demonhunter_male.png',
		flavor:'Tukam lost many friends in his first Harvest of Souls, a ritual war fought by the umbaru. Yet, he did not weep for the dead. He celebrated their passing, knowing their spirits ran free in the Unformed Land.'
	},
	{
		name: "Mantle of the Upside-Down Sinners",
		type: "Shoulders",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Raiment of a Thousand Storms',
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_set_08_x1_demonhunter_male.png',
		flavor:'Elemental energy engulfs the monk bold enough to don this mantle, eager to be unleashed against the monk\'s enemies.'
	},
	{
		name: "Marauder's Spines",
		type: "Shoulders",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			CostReduc:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Embodiment of the Marauder',
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_set_07_x1_demonhunter_male.png',
		flavor:'"One of the hunter\'s greatest tools is fear. Whenever possible, we terrify our foes, break their ranks, and pick them off."—Hunter John Yang'
	},
	{
		name: "Pauldrons of Akkhan",
		type: "Shoulders",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{
			Strength:null,
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Armor of Akkhan',
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_set_10_x1_demonhunter_male.png',
		flavor:'"Let the crusaders armor their flanks in plate of incredible strength, for their path is dangerous, and death will come at them from all sides." -Akkhan'
	},
	{
		name: "Profane Pauldrons",
		type: "Shoulders",
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
			RANDOM:3
		},
		secondary:{
			PickupRadius:{
				min:4,
				max:6
			},
			Globes:null
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_101_x1_demonhunter_male.png',
		flavor:'The mouths of the demonic visages that adorn these pauldrons devour health globes, digesting them in order to provide additional benefits to their wearer. Unfortunately, those selfsame mouths often whisper vile suggestions when others cannot hear.'
	},
	{
		name: "Raekor's Burden",
		type: "Shoulders",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{
			Strength:null,
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'The Legacy of Raekor',
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_set_05_x1_demonhunter_male.png',
		flavor:'These spaulders are the symbol of the Oxen Tribe Warmaster. Raekor stripped them from her fallen commander and donned them herself in order to lead her tribe to victory at the sack of Samauren.'
	},
	{
		name: "Roland's Mantle",
		type: "Shoulders",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{
			Strength:null,
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Roland\'s Legacy',
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_set_01_p1_demonhunter_male.png',
		flavor:'"Many an hour I spent polishing these pauldrons, cursing the name of Roland. Would that I could polish them for him again, and place them on his shoulders one last time." —Meditations on My Redemption'
	},
	{
		name: "Spaulders of Zakara",
		type: "Shoulders",
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
			RANDOM:3
		},
		secondary:{
			Zakara:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_102_x1_demonhunter_male.png',
		flavor:'"A dying crusader emerged from the Aranoch wastes bearing these spaulders. She claimed to have been visited by the angel Yaerius in the desert depths and charged with delivering these artifacts into the hands of men so the crusade might triumph. Whatever the truth of her claims, there is little doubt the spaulders are the product of Heaven\'s forges." —Abd al-Hazir'
	},
	{
		name: "Spires of the Earth",
		type: "Shoulders",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{
			Strength:null,
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Might of the Earth',
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_set_15_x1_demonhunter_male.png',
		flavor:'Travelers speak of a stone arch in the desert, where mystics seek wisdom from supernatural visions, or strength from the ground. Some claim to have received both.'
	},
	{
		name: "Sunwuko's Balance",
		type: "Shoulders",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Monkey King\'s Garb',
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_set_11_x1_demonhunter_male.png',
		flavor:'The pauldrons of Sunwuko the Monkey King are renowned for their ability to improve agility. With these equipped, a trained monk can master the martial arts... or dance.'
	},
	{
		name: "Vile Ward",
		type: "Shoulders",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{
			Strength:null,
			RANDOM:3
		},
		secondary:{
			VileWard:{
				min:30,
				max:35
			},
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_shoulder_003_p1_demonhunter_male.png',
		flavor:'"The more enemies I hit, the greater my bloodlust." -Chieftain Kar-Nuk'
	}
];

module.exports = shoulders;