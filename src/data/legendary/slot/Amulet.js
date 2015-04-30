var amulet = [
	{
		name: "Ancestors' Grace",
		type: "Amulet",
		weight: 25,
		hc: true,
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
			Vitality:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			FatalDmg:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_102_x1_demonhunter_male.png',
		flavor:'"This unique amulet was originally found on a dead necromancer before being brought to Khalim, the Que-Hegan. It was he who named it, after his archbishops and their philosophers finally divined its powers. I often wonder why Khalim did not use it himself when he was mortally wounded, before being dismembered by his corrupted High Council." —Abd al-Hazir'
	},
	{
		name: "Blackthorne's Duncraig Cross",
		type: "Amulet",
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
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Blackthorne\'s Battlegear',
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_016_x1_demonhunter_male.png',
		flavor:'The Duncraig Cross is awarded to those nobles who lead their knights to victory in defense of the realm.'
	},
	{
		name: "Countess Julia's Cameo",
		type: "Amulet",
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
			AttackSpeed:null,
			RANDOM:2
		},
		secondary:{
			'PreventArcane':{
				min:20,
				max:25
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_103_x1_demonhunter_male.png',
		flavor:'"Countess Julia attempted to put down the Cartolus Insurrection with her own personal guard, in an attempt to impress Justinian III. The effort failed miserably, as her guard was slaughtered and the uprising spread. Only the countess\'s enchanted cameo enabled her to survive this folly. It did not save her life, however, as King Justinian was so displeased, he had her tortured and then executed." —The History of Westmarch'
	},
	{
		name: "Dovu Energy Trap",
		type: "Amulet",
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
			CdReduc:null,
			RANDOM:2
		},
		secondary:{
			StunDur:{
				min:20,
				max:25
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_107_x1_demonhunter_male.png',
		flavor:'"Those unaware of the true nature of the world are unable to keep their spirits from being used against them." —Dovu, the Tribe of the Clouded Valley'
	},
	{
		name: "Eye of Etlich",
		type: "Amulet",
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
			ELEMENTAL:null,
			RANDOM:3
		},
		secondary:{
			RangeReduc:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_014_x1_demonhunter_male.png',
		flavor:'Originally pulled from a frozen corpse on the slopes of Mount Arreat, the eye seethes with the magic of a dozen sorcerers.'
	},
	{
		name: "Halcyon's Ascent",
		type: "Amulet",
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
			CdReduc:null,
			RANDOM:2
		},
		secondary:{
			Halycon:{
				min:6,
				max:8
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_109_x1_210_demonhunter_male.png',
		flavor:'"Raise your weapon, raise your weapon... and it\'s over." —Halcyon'
	},
	{
		name: "Haunt of Vaxo",
		type: "Amulet",
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
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			HauntOfVaxo:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_101_x1_demonhunter_male.png',
		flavor:'"The great sorcerer Vaxo of Kehjan did not actually die in the Mage Clan Wars. In reality, he was imprisoned where all mages with shattered minds are, the Bitter Depths beneath Caldeum\'s Yshari Sanctum. Vaxo\'s famous amulet is said to have been smuggled out of there, but that is patently impossible. Once inside, no one ever leaves the Bitter Depths." —Abd al-Hazir'
	},
	{
		name:"Hellfire Amulet",
		type:"Amulet",
		weight: 0,
		hc: false,
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
			MAIN:null,
			RANDOM:3
		},
		secondary:{
			SPECIAL:'HELLFIRE',
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/x1_amulet_norm_unique_25_demonhunter_male.png',
		flavor:'The Hellfire Amulet is truly a badge of dedication to those who, at great cost to themselves, have sworn their lives to eradicating the demon scourge from the lands of Sanctuary.'
	},
	{
		name: "Holy Beacon",
		type: "Amulet",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			MAIN:null,
			HolyDamage:null,
			SpiritRegen:{
				min:1.5,
				max:2.17
			},
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_013_x1_demonhunter_male.png',
		flavor:'"Turn away from evil. Let not the foul darkness engulf the Light within you." —Akarat'
	},
	{
		name: "Kymbo's Gold",
		type: "Amulet",
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
			KymboGold:null,
			GoldFind:{
				min:75,
				max:100
			}
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_002_p1_demonhunter_male.png',
		flavor:'The great merchant Abd al-Kymbo commissioned this amulet, believing that health and wealth should be synonymous. Alas, he did not realize how much time he would spend on his knees picking up single coins, and soon abandoned the practice.'
	},
	{
		name: "Mara's Kaleidoscope",
		type: "Amulet",
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
			CritChance:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			PreventPoison:{
				min:10,
				max:15
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_015_x1_demonhunter_male.png',
		flavor:'Spoken of in hushed tones in the halls of the Yshari Sanctum, the kaleidoscope is one of the most coveted magical items in existence.'
	},
	{
		name: "Moonlight Ward",
		type: "Amulet",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			ArcaneDamage:null,
			AttackSpeed:null,
			CritChance:null,
			RANDOM:1
		},
		secondary:{
			MoonlightWard:{
				min:240,
				max:320
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_003_x1_demonhunter_male.png',
		flavor:'"The moonlight shrouds the warrior who walks with the spirits." —Darweshi, Knower of the Clan of the Seven Stones'
	},
	{
		name: "Ouroboros",
		type: "Amulet",
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
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_005_x1_demonhunter_male.png',
		flavor:'"All energy flows from and returns to the eternal source." —Archmage Kang'
	},
	{
		name: "Rakoff's Glass of Life",
		type: "Amulet",
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
			Rakoff:{
				min:3,
				max:4
			},
			Globes:null
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_108_x1_demonhunter_male.png',
		flavor:'Rakoff was a simple layman scribe who studied the ways and fighting technique of the monks extensively before creating an item to draw out the life force of a defeated enemy.'
	},
	{
		name: "Rondal's Locket",
		type: "Amulet",
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
			Globes:null,
			PickupRadius:{
				min:1,
				max:2
			}
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_009_x1_demonhunter_male.png',
		flavor:'"To Rondal—When you carry this, you carry my heart. Love always, Marta."'
	},
	{
		name: "Squirt's Necklace",
		type: "Amulet",
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
			CritDamage:null,
			RANDOM:2
		},
		secondary:{
			GoldFind:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_010_x1_demonhunter_male.png',
		flavor:'An unassuming chunk of stone covered with runes. The name of Kantwirt, the ancient god of thieves, is scratched onto its back.'
	},
	{
		name: "Sunwuko's Shines",
		type: "Amulet",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			MAIN:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Monkey King\'s Garb',
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_set_11_x1_demonhunter_male.png',
		flavor:'Sunwuko possessed such control over his physical form, it\'s said he could make a copy of himself from a single hair. But no matter how many copies he made, this talisman would always be worn by the true Monkey King.'
	},
	{
		name: "Tal Rasha's Allegiance",
		type: "Amulet",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			MAIN:null,
			Vitality:null,
			CritDamage:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		set:'Tal Rasha\'s Elements',
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_007_x1_demonhunter_male.png',
		flavor:'Tal Rasha valiantly led the Horadrim under the guidance of Tyrael, the archangel of Justice. Their oath is carved onto the surface of this amulet.'
	},
	{
		name: "Talisman of Aranoch",
		type: "Amulet",
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
			MAIN:1,
			RANDOM:3
		},
		secondary:{
			PreventCold:{
				min:10,
				max:15
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_012_x1_demonhunter_male.png',
		flavor:'The heat of the blazing desert protects one from the cold.'
	},
	{
		name: "The Ess of Johan",
		type: "Amulet",
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
			CdReduc:null,
			RANDOM:2
		},
		secondary:{
			Johan:{
				min:60,
				max:80
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_104_x1_demonhunter_male.png',
		flavor:'"A variation on the retreat and ambush stratagem uses the Ess of Johan most effectively. First, send out a small group of soldiers to confront the enemy and create the appearance of being overwhelmed. When they retreat, the enemy will follow to finish them off. Just as the pursuing force realizes it\'s been led into a trap, employ the artifact to deny its escape." —Rakkis\'s Strategies of War'
	},
	{
		name: "The Flavor of Time",
		type: "Amulet",
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
			MoveSpeed:{
				min:10,
				max:12
			},
			CdReduc:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_001_x1_demonhunter_male.png',
		flavor:'This garish amulet, once worn by an over large imp, makes time an insignificant thing.'
	},
	{
		name: "The Star of Azkaranth",
		type: "Amulet",
		weight: 10,
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
			CdReduc:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			PreventFire:{
				min:10,
				max:15
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_006_x1_demonhunter_male.png',
		flavor:'Imbued with Azkaranth\'s immense powers with his dying breath.'
	},
	{
		name: "The Traveler's Pledge",
		type: "Amulet",
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
			CritDamage:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Endless Walk',
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_008_x1_demonhunter_male.png',
		flavor:'Adventure\'s call cannot be denied.'
	},
	{
		name: "Xephirian Amulet",
		type: "Amulet",
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
			AttackSpeed:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			PreventLightning:{
				min:10,
				max:15
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_amulet_004_x1_demonhunter_male.png',
		flavor:'Some say Xephiria is but a myth, a fanciful place that never existed. The power of this amulet says otherwise.'
	}
	];

	module.exports = amulet;