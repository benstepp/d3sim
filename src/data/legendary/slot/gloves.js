var gloves = [
	{
		name:"Asheara's Ward",
		type:"Gloves",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:6,vc:90,fs:2,db:5
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
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_009_x1_demonhunter_male.png',
		flavor:'These gloves represent the unspoken bond between Asheara and her mercenaries.'
	},
	{
		name:"Cain's Scrivener",
		type:"Gloves",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:6,vc:90,fs:2,db:5
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
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_015_x1_demonhunter_male.png',
		flavor:'These wrappings are covered with Horadric symbols and runes, and are perfect for keeping your arms warm while you search for elusive arcane knowledge.'
	},
	{
		name:"Fiendish Grips",
		type:"Gloves",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Unhallowed Essence',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_03_p2_demonhunter_male.png',
		flavor:'"If you cannot learn to direct your hatred, it will consume you."-Kovan the Merciless'
	},
	{
		name:"Fierce Gauntlets",
		type:"Gloves",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[
			"Wizard"
		],
		primary:{
			Intelligence:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Delsere\'s Magnum Opus',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_02_p2_demonhunter_male.png',
		flavor:'"When Delsere delivered these gauntlets for critique, he wanted to know how looking at them made me feel. When I did not understand his question, he stormed off."- High Councilor Valthek'
	},
	{
		name: "Firebird's Talons",
		type: "Gloves",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			AttackSpeed:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Firebird\'s Finery',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_06_x1_demonhunter_male.png',
		flavor:'"These clawlike gauntlets are cool to the touch, even in the presence of significant heat. This requires further study." —Vaetia of Zann Esu'
	},
	{
		name: "Fists of Thunder",
		type: "Gloves",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Raiment of a Thousand Storms',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_08_x1_demonhunter_male.png',
		flavor:'"When one\'s strike is true, the force of the blow expands into an electric shockwave that echoes through one\'s soul." —Matriarch Lian Rasmussen'
	},
	{
		name: "Frostburn",
		type: "Gloves",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter",
			"Monk",
			"Barbarian",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			MAIN:null,
			ColdDamage:{
				min:10,
				max:15
			},
			RANDOM:2
		},
		secondary:{
			Frostburn:{
				min:34,
				max:45
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_002_x1_demonhunter_male.png',
		flavor:'These gauntlets drain the warmth from anything they touch.'
	},
	{
		name: "Gauntlets of Akkhan",
		type: "Gloves",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{
			Strength:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Armor of Akkhan',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_10_x1_demonhunter_male.png',
		flavor:'"Let the crusaders cover their hands with gauntlets of unsurpassed strength, for they will someday find the redemption of the Zakarum faith, and on that day, they must reach out and grasp it." -Akkhan'
	},
	{
		name:"Gauntlet of the Wastes",
		type:"Gloves",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[
			"Barbarian"
		],
		primary:{
			Strength:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Wrath of the Wastes',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_01_p2_demonhunter_male.png',
		flavor:'Offo of the Henknoc Tribe discovered a barrow in the wastes. Inside, skeletons with filed teeth were arrayed around the body of a great king. Offo left as quickly as he could, taking only the king’s gauntlets.'
	},
	{
		name: "Gladiator Gauntlets",
		type: "Gloves",
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
			GladGaunts:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_011_x1_demonhunter_male.png',
		flavor:'Worn by the combatants in the arenas of Emperor Vaught.'
	},
	{
		name: "Helltooth Gauntlets",
		type: "Gloves",
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
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_16_x1_demonhunter_male.png',
		flavor:'"The spirits say that great demons can never die. I say they have not yet met me." —Jeram of the Whispering Valley'
	},
	{
		name: "Immortal King's Irons",
		type: "Gloves",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{
			Strength:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Immortal King\'s Call',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_008_x1_demonhunter_male.png',
		flavor:'Worusk struck his enemies so hard his hands would have broken had they not been protected.'
	},
	{
		name:"Inna's Hold",
		type:"Gloves",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[
			"Monk"
		],
		primary:{
			Dexterity:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Inna\'s Mantra',
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_gloves_04_demonhunter_male.png',
		flavor:'When Inna became displeased with a star, she would don these gloves, and hurl the offending star through the night sky.'
	},
	{
		name: "Jade Harvester's Mercy",
		type: "Gloves",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Raiment of the Jade Harvester',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_09_x1_demonhunter_male.png',
		flavor:'Tukam prized mercy above all else in battle, for he knew that the tribes he fought were not true enemies. When he eventually met their spirits in the Unformed Land, they would embrace each other as family.'
	},
	{
		name: "Magefist",
		type: "Gloves",
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
				min:15,
				max:20
			},
			AttackSpeed:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_014_x1_demonhunter_male.png',
		flavor:'You hold the power of true magic within your hands.'
	},
	{
		name: "Marauder's Gloves",
		type: "Gloves",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Embodiment of the Marauder',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_07_x1_demonhunter_male.png',
		flavor:'"One day, your quivers will run empty, your traps will fail, and the enemy will surge forward. You will be left with nothing but the grip you keep on your blade. Never forget this."—Hunter Cie Wyrtam'
	},
	{
		name:"Natalya's Touch",
		type:"Gloves",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Natalya\'s Vengeance',
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_gloves_01_demonhunter_male.png',
		flavor:'She used these gloves while learning the finer points of murderous archery.'
	},
	{
		name:"Penders Purchase",
		type:"Gloves",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:6,vc:90,fs:2
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
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_001_x1_demonhunter_male.png',
		flavor:'Only the wisest adventurer is fit to don these powerful gauntlets.'
	},
	{
		name: "Pride of the Invoker",
		type: "Gloves",
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
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			Thorns:null,
			RANDOM:1
		},
		set:'Thorns of the Invoker',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_12_x1_demonhunter_male.png',
		flavor:'The gauntlets are etched with archaic Vizjerei runes used to summon and enslave the foul creatures of the Burning Hells.'
	},
	{
		name: "Pull of the Earth",
		type: "Gloves",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{
			Strength:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Might of the Earth',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_15_x1_demonhunter_male.png',
		flavor:'No mortal can escape the grasp of the earth. No matter how high something jumps or flies, it always eventually plummets back to the ground. Imagine that power in your hands.'
	},
	{
		name: "Raekor's Wraps",
		type: "Gloves",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{
			Strength:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'The Legacy of Raekor',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_05_x1_demonhunter_male.png',
		flavor:'These ox-leather gloves were crafted specifically to commemorate Raekor\'s ascension to the status of warmaster.'
	},
	{
		name: "Roland's Grasp",
		type: "Gloves",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{
			Strength:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Roland\'s Legacy',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_01_p1_demonhunter_male.png',
		flavor:'"I slew many an opponent with my bare hands before my master rescued me from the fighting pits of Kalden. His gauntlets now sanctify these instruments of death." —Meditations on My Redemption'
	},
	{
		name:"Sage's Purchase",
		type:"Gloves",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:6,vc:90,fs:2,db:5
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
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_017_x1_demonhunter_male.png',
		flavor:'Imris designed these gloves to help him channel the awesome forces at his command.'
	},
	{
		name: "St. Archew's Gage",
		type: "Gloves",
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
			MAIN:1,
			RANDOM:3
		},
		secondary:{
			Archew:{
				min:120,
				max:150
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_101_p2_demonhunter_male.png',
		flavor:'"Archew, the Saint of Entsteig, is remembered for his many duels with the ruffians of that city. It was said that his gauntlet lay on the street more often than on his hand." —Archibald Kerne'
	},
	{
		name: "Stone Gauntlets",
		type: "Gloves",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian",
			"Crusader"
		],
		primary:{
			Strength:null,
			ImmobHit:{
				min:10,
				max:15
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_007_x1_demonhunter_male.png',
		flavor:'Heavy. Stone. Brutal.'
	},
	{
		name: "Sunwuko's Paws",
		type: "Gloves",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Monkey King\'s Garb',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_11_x1_demonhunter_male.png',
		flavor:'Sunwuko is said to have been the greatest staff fighter from Xiansai to Ivgorod, and his gloves possess a nimbleness to them second to none.'
	},
	{
		name:"Tal Rasha's Grasp",
		type:"Gloves",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[
			"Wizard"
		],
		primary:{
			Intelligence:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Tal Rasha\'s Elements',
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_gloves_02_demonhunter_male.png',
		flavor:'Tal Rasha inducted recruits into the Horadrim with these gloves.'
	},
	{
		name: "Tasker and Theo",
		type: "Gloves",
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
			AttackSpeed:null,
			RANDOM:2
		},
		secondary:{
			Tasker:{
				min:40,
				max:50
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_003_x1_demonhunter_male.png',
		flavor:'The master and his hound were the most famed hunters of their day. He died fighting beside his favorite dog, just as the way he would have wanted it. His loyal companion soon followed.'
	},
	{
		name: "The Shadow's Grasp",
		type: "Gloves",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'The Shadow\'s Mantle',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_14_x1_demonhunter_male.png',
		flavor:'"Fear nothing you can touch. What you can touch, you can destroy." —Demon Hunter Kunai'
	},
	{
		name: "Vyr's Grasping Gauntlets",
		type: "Gloves",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Vyr\'s Amazing Arcana',
		image:'//media.blizzard.com/d3/icons/items/large/unique_gloves_set_13_x1_demonhunter_male.png',
		flavor:'"It\'s posited that Vyr created these enchanted gloves to protect his hands while he manipulated power summoned from beyond this realm." —Abd al-Hazir'
	},
	{
		name:"Zunimassa's Finger Wraps",
		type:"Gloves",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Zunimassa\'s Haunt',
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_gloves_03_demonhunter_male.png',
		flavor:'All witch doctors know that the best way to hear the whispers of Zunimassa is to perform the rituals flawlessly, with fingers nimble and strong.'
	}
];

module.exports = gloves;