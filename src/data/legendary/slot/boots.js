var boots = [
	{
		name:"Asheara's Finders",
		type:"Boots",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:12,vc:45,fs:2,db:8
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
		set:'Asheara\'s Vestments',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_014_x1_demonhunter_male.png',
		flavor:'The Iron Wolves have traveled far and done much in the last twenty years. From the docks of Kurast to the palaces of Caldeum, they upheld their duty until they were driven from the emperor\'s side by the Imperial Guard.'
	},
	{
		name: "Blackthorne's Spurs",
		type: "Boots",
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
		set:'Blackthorne\'s Battlegear',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_019_x1_demonhunter_male.png',
		flavor:'The leather and scale joints provide improved flexibility for better foot positioning in dueling and stability in mounted combat.'
	},
	{
		name:"Board Walkers",
		type:"Boots",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:12,vc:45,fs:2
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
			MoveSpeed:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_005_x1_demonhunter_male.png',
		flavor:'Well worn, but still sturdy, these boots look as if they have traveled all the lands of Sanctuary many times over.'
	},
	{
		name: "Boj Anglers",
		type: "Boots",
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
			SKILLDAMAGE:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_001_x1_demonhunter_male.png',
		flavor:'Do not overlook the importance of a good boot.'
	},
	{
		name:"Cain's Travelers",
		type:"Boots",
		weight: 0,
		hc: false,
		season: false,
		craft:{
			rp:25,ad:12,vc:45,fs:2,db:8
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
		set:'Cain\'s Destiny',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_015_x1_demonhunter_male.png',
		flavor:'Deckard Cain spent the last twenty years of his life traveling the world in search of information needed to defeat the Lords of Hell.'
	},
	{
		name:"Captain Crimson's Waders",
		type:"Boots",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:12,vc:45,fs:2,db:8
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
		set:'Captain Crimson\'s Trimmings',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_017_x1_demonhunter_male.png',
		flavor:'Captain Crimson, scourge of the Twin Seas, claimed his numerous victories were the result of sensible—yet fashionable—footwear.'
	},
	{
		name: "Eight-Demon Boots",
		type: "Boots",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			Vitality:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Raiment of a Thousand Storms',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_set_08_x1_demonhunter_male.png',
		flavor:'"Infused with the powers of wind, lightning, all that kind of thing! Then again... a couple of extra demons never hurt." —Yolk Chen'
	},
	{
		name: "Fire Walkers",
		type: "Boots",
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
			MoveSpeed:null,
			RANDOM:2
		},
		secondary:{
			FireWalker:{
				min:300,
				max:400
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_007_p2_demonhunter_male.png',
		flavor:'Tradition has it that these boots were forged in the heart of the great Challsop Volcano.'
	},
	{
		name: "Firebird's Tarsi",
		type: "Boots",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			Vitality:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Firebird\'s Finery',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_set_06_x1_demonhunter_male.png',
		flavor:'"The metal plates of these greaves hang on swivels, permitting them to swing. The plates exaggerate the soma of a casting wizard. From a design standpoint, truly remarkable feats!" —Landes the Keeth'
	},
	{
		name:"Hell Walkers",
		type:"Boots",
		weight:100,
		hc:false,
		season:false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			Vitality:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Unhallowed Essence',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_set_03_p2_demonhunter_male.png',
		flavor:'"Hell is a state of mind."-Kovan the Merciless'
	},
	{
		name: "Helltooth Greaves",
		type: "Boots",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			Vitality:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Helltooth Harness',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_set_16_x1_demonhunter_male.png',
		flavor:'"As I slay more and more demons, I have come to know their purpose. They exist to make us stronger." —Jeram of the Whispering Valley'
	},
	{
		name: "Ice Climbers",
		type: "Boots",
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
			AllResist:null,
			ColdReduc:{
				min:7,
				max:10
			},
			RANDOM:1
		},
		secondary:{
			FreezeImmune:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_008_x1_demonhunter_male.png',
		flavor:'Worn by the famous explorer Theradonn, known for his sunny disposition.'
	},
	{
		name: "Immortal King's Stride",
		type: "Boots",
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
		set:'Immortal King\'s Call',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_012_x1_demonhunter_male.png',
		flavor:'The king of the barbarians strode the world like a god.'
	},
	{
		name:"Inna's Sandals",
		type:"Boots",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[

		],
		primary:{
			Dexterity:null,
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Inna\'s Mantra',
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_boots_02_demonhunter_male.png',
		flavor:'Inna, the goddess of the sky, treads upon clouds in the winter and the summer, in the night and the day.'
	},
	{
		name: "Irontoe Mudsputters",
		type: "Boots",
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
			Irontoe:{
				min:25,
				max:30
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_104_x1_demonhunter_male.png',
		flavor:'"Good, heavy steel. Nice flex around the ankle, good weight in the toes. A solid pair of boots. What, did you need them to sparkle?" —Kormac the Templar'
	},
	{
		name: "Jade Harvester's Swiftness",
		type: "Boots",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			Vitality:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Raiment of the Jade Harvester',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_set_09_x1_demonhunter_male.png',
		flavor:'Tukam moved through the jungles with such grace and speed that some witch doctors claimed he was not umbaru at all, but a spirit sent to their world from Mbwiru Eikura.'
	},
	{
		name: "Lut Socks",
		type: "Boots",
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
			LutSocks:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_009_x1_demonhunter_male.png',
		flavor:'Southal of Lut Bahadur crafted these boots in order to reach high, open windows to make his thieving easier. He was last seen disappearing into the night in the claws of a large carrion bat.'
	},
	{
		name: "Marauder's Treads",
		type: "Boots",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			Vitality:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Embodiment of the Marauder',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_set_07_x1_demonhunter_male.png',
		flavor:'"You will learn to walk as we do. You will stalk these monsters, and after you have made your kill and faded away, the demons will find naught but their own treads upon the earth."—Hunter Aoron Gunes'
	},
	{
		name: "Natalya's Bloody Footprints",
		type: "Boots",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Natalya\'s Vengeance',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_011_x1_demonhunter_male.png',
		flavor:'Treading through the blood of demons brought her some small semblance of peace.'
	},
	{
		name:"Nilfur's Boast",
		type:"Boots",
		weight:100,
		hc:false,
		season:true,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			AllResist:null,
			RANDOM:2
		},
		secondary:{
			Nilfur:{
				min:150,
				max:200
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_boots_01_demonhunter_male.png',
		flavor:'The Horadrim Nilfur was so accurate in her spellcasting that she could call meteors to land at her feet.'
	},
	{
		name: "Raekor's Striders",
		type: "Boots",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{
			Strength:null,
			Vitality:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'The Legacy of Raekor',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_set_05_x1_demonhunter_male.png',
		flavor:'Loren of the Samaurenian famously said he would crush the barbarians beneath his boots. Raekor took great delight in ripping them from his cold, dead feet. Forever after, they were a symbol of Raekor\'s greatest triumph.'
	},
	{
		name: "Roland's Stride",
		type: "Boots",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{
			Strength:null,
			Vitality:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Roland\'s Legacy',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_set_01_p1_demonhunter_male.png',
		flavor:'"I walk forever in my master’s boots so that I never forget how my insolence caused his death. To honor his memory, I live my life in a manner that embodies everything it means to be a crusader." —Meditations on My Redemption'
	},
	{
		name:"Sabaton of the Wastes",
		type:"Boots",
		weight:100,
		hc:false,
		season:false,
		smartLoot:["Barbarian"],
		primary:{
			Strength:null,
			Vitality:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Wrath of the Wastes',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_set_01_p2_demonhunter_male.png',
		flavor:'The Tribe of Thunder was moving through the wastes when a madman with one arm rushed from the snowy twilight, babbling of horrendous acts, both suffered and witnessed. He was clad only in rags and these sabatons.'
	},
	{
		name: "Sabatons of Akkhan",
		type: "Boots",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{
			Strength:null,
			Vitality:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Armor of Akkhan',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_set_10_x1_demonhunter_male.png',
		flavor:'"Let the crusaders sheathe their feet in sabatons of unquestionable strength, for the crusade will take them all over the world." -Akkhan'
	},
	{
		name:"Sage's Passage",
		type:"Boots",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:12,vc:45,fs:2,db:8
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
		set:'Sage\'s Journey',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_018_x1_demonhunter_male.png',
		flavor:'The ancient sage Imris crafted the original version of these boots to protect him while he traveled the world, seeking a way to retune the Worldstone to restore the power of the nephalem.'
	},
	{
		name: "The Crudest Boots",
		type: "Boots",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			MoveSpeed:null,
			RANDOM:2
		},
		secondary:{
			Crudest:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p1_unique_boots_010_demonhunter_male.png',
		flavor:'You\'ve got to mind those feets.'
	},
	{
		name: "The Shadow's Heels",
		type: "Boots",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			Vitality:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'The Shadow\'s Mantle',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_set_14_x1_demonhunter_male.png',
		flavor:'"I walk amongst the shadows and call them my own. With every silent stride, I claim my domain." —Demon Hunter Kunai'
	},
	{
		name:"Striders of Destiny",
		type:"Boots",
		weight:100,
		hc:false,
		season:false,
		smartLoot:["Wizard"],
		primary:{
			Intelligence:null,
			Vitality:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Delsere\'s Magnum Opus',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_set_02_p2_demonhunter_male.png',
		flavor:'"Like many of his fellow students, Delsere was fascinated by Li-Ming. His master work was an homage to her, and he swore one day she would wear it."- High Councilor Valthek'
	},
	{
		name: "Vyr's Swaggering Stance",
		type: "Boots",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			SKILLDAMAGE:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Vyr\'s Amazing Arcana',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_set_13_x1_demonhunter_male.png',
		flavor:'"The last piece of Vyr\'s Archon armor to be found, these ornate boots were long believed to have been destroyed along with the Black Obelisk that bore the wizard’s name." —Abd al-Hazir'
	},
	{
		name: "Zunimassa's Trail",
		type: "Boots",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			Vitality:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Zunimassa\'s Haunt',
		image:'//media.blizzard.com/d3/icons/items/large/unique_boots_013_x1_demonhunter_male.png',
		flavor:'Zunimassa spread her wisdom further than any other witch doctor of the Teganze.'
	}
];
module.exports = boots;
