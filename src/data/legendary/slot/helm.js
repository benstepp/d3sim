var helm = [
	{
		name:"Accursed Visage",
		type:"Helm",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Unhallowed Essence',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_set_03_p2_demonhunter_male.png',
		flavor:'"A demon hunter’s mind must be tuned precisely to the demonic will. Only then can you know the best vantage point for your attack. Waver and you are dead."-Kovan the Merciless'
	},
	{
		name: "Andariel's Visage",
		type: "Helm",
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
			ELEMENTAL:{
				min:15,
				max:20
			},
			AttackSpeed:{
				min:5,
				max:6
			},
			MAIN:null,
			FireTaken:{
				min:5,
				max:10
			},
			RANDOM:1
		},
		secondary:{
			PoisonNova:{
				min:350,
				max:450
			},
			PoisRes:{
				min:150,
				max:200
			}
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_003_p2_demonhunter_male.png',
		flavor:'Some long-forgotten artisan crafted this helmet in the hideous likeness of the Maiden of Anguish. For what purpose, none can say.'
	},
	{
		name:"Aughild's Spike",
		type:"Helm",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:6,vc:90,fs:2,db:4
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
			AllResist:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		set:'Aughild\'s Authority',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_014_x1_demonhunter_male.png',
		flavor:'A detailed recreation of the ceremonial helmet Aughild used when he was crowned king of Entsteig.'
	},
	{
		name: "Blind Faith",
		type: "Helm",
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
			BlindHit:{
				min:200,
				max:400
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_007_x1_demonhunter_male.png',
		flavor:'Do not trust your eyes; they can deceive you.'
	},
	{
		name: "Broken Crown",
		type: "Helm",
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
			Socket:null,
			RANDOM:1
		},
		secondary:{
			BrokenCrown:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_helm_001_demonhunter_male.png',
		flavor:'The ancient crown of Rakkis, first ruler of Westmarch.'
	},
	{
		name:"Cain's Insight",
		type:"Helm",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:6,vc:90,fs:2,db:4
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
			BonusXp:null,
			RANDOM:1
		},
		set:'Cain\'s Destiny',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_012_x1_demonhunter_male.png',
		flavor:'This laurel represents the wisdom of the scholar Deckard Cain.'
	},
	{
		name: "Crown of the Invoker",
		type: "Helm",
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
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Thorns:null,
			RANDOM:1
		},
		set:'Thorns of the Invoker',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_set_12_x1_demonhunter_male.png',
		flavor:'This helm is clearly manmade, but the fetid black brambles that adorn it thrum with unmistakable demonic energy.'
	},
	{
		name: "Deathseer's Cowl",
		type: "Helm",
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
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Deathseer:{
				min:15,
				max:20
			},
			RANDOM:1
		},

		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_102_x1_demonhunter_male.png',
		flavor:'"Given their bloody history, I cannot imagine anyone venturing into the southern jungles looking for the Opaya. Nor can I imagine the madman who could confront the Opayan deathseers and walk out of Torajan with one of their hoods." —Abd al-Hazir'
	},
	{
		name: "Eyes of the Earth",
		type: "Helm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{
			Strength:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Might of the Earth',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_set_15_x1_demonhunter_male.png',
		flavor:'Mountains crumble. Cliffs fall. Canyons rip asunder. The forces that shape the land are a mystery to most. But not to you. Not anymore.'
	},
	{
		name: "Firebird's Plume",
		type: "Helm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Firebird\'s Finery',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_set_06_x1_demonhunter_male.png',
		flavor:'"The stylized crests of this headpiece are cunningly enchanted to channel and dissipate sudden and dangerous discharges of arcanum." —Ennead Sage Resko'
	},
	{
		name:"Guardian's Gaze",
		type:"Helm",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:6,vc:90,fs:2,db:4
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
			MoveSpeed:{
				min:10,
				max:12
			},
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		set:'Guardian\'s Jeopardy',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_015_x1_demonhunter_male.png',
		flavor:'Fashioned after the helmet of the notorious Guardian, which was made to protect his mind from those that would try to subvert it.'
	},
	{
		name: "Helltooth Mask",
		type: "Helm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Helltooth Harness',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_set_16_x1_demonhunter_male.png',
		flavor:'When the khazra slew Jeram\'s family, he crafted this terrible mask to seek revenge. Those who came across the khazra dead, half-devoured, swollen, and scorched, knew it could only be Jeram\'s work.'
	},
	{
		name: "Helm of Akkhan",
		type: "Helm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{
			Strength:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Armor of Akkhan',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_set_10_x1_demonhunter_male.png',
		flavor:'"Let the crusaders encase their skulls in a helm of surpassing strength, for a crusader\'s most potent weapon is the mind. And thus shall the crusader be a champion of Akarat\'s will." -Akkhan'
	},
	{
		name:"Helm of the Wastes",
		type:"Helm",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[
			"Barbarian"
		],
		primary:{
			Strength:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Wrath of the Wastes',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_set_01_p2_demonhunter_male.png',
		flavor:'Noglar of the Crane Tribe went into the wastes for his rite of adulthood. He returned with tales of horrendous cannibal barbarian tribes, many new scars, and this helm.'
	},
	{
		name: "Immortal King's Triumph",
		type: "Helm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{
			Strength:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Immortal King\'s Call',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_008_x1_demonhunter_male.png',
		flavor:'In the days when the barbarians roamed the entire western continent—long before the coming of Rakkis—one man, Worusk, united the tribes, and for the briefest of moments, the barbarians had a king.'
	},
	{
		name: "Jade Harvester's Wisdom",
		type: "Helm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Raiment of the Jade Harvester',
		image:'http://media.blizzard.com/d3/icons/items/large/unique_helm_set_09_x1_demonhunter_male.png',
		flavor:'Every umbaru knows of Tukam, the Jade Harvester. The witch doctor became famous for adorning himself in armor he carved from green jade, which he believed heightened his connection with the spirits.'
	},
	{
		name: "Leoric's Crown",
		type: "Helm",
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
			Socket:null,
			RANDOM:2
		},
		secondary:{
			LeoricsCrown:{
				min:75,
				max:100
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_002_p1_demonhunter_male.png',
		flavor:'The crown of the Black King. The taint of his madness wafts from the metal, clinging to any jewel that comes near it.'
	},
	{
		name: "Marauder's Visage",
		type: "Helm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Embodiment of the Marauder',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_set_07_x1_demonhunter_male.png',
		flavor:'"We channel our anger, the fury of the demons, the rage of the beasts, into power. We become the face of destruction."—Hunter Val Amark'
	},
	{
		name: "Mask of the Searing Sky",
		type: "Helm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Raiment of a Thousand Storms',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_set_08_x1_demonhunter_male.png',
		flavor:'It is said that the hollow eyes of this mask\'s fearsome visage will show an enemy her fate. However, few live long enough to make use of that revelation.'
	},
	{
		name: "Mempo of Twilight",
		type: "Helm",
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
			Socket:null,
			AllResist:null,
			AttackSpeed:{
				min:5,
				max:6
			}
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_006_x1_demonhunter_male.png',
		flavor:'The helmet of the last of the honor-bound warriors. He roamed the far east long ago and lived and died by his code of honor.'
	},
	{
		name: "Natalya's Sight",
		type: "Helm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Natalya\'s Vengeance',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_009_x1_demonhunter_male.png',
		flavor:'She had new prey, and they would not escape her sight.'
	},
	{
		name: "Raekor's Will",
		type: "Helm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{
			Strength:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'The Legacy of Raekor',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_set_05_x1_demonhunter_male.png',
		flavor:'Though barbarian women were respected as warriors, they were still seen as inferior to their male brethren on the field of battle—until the coming of Raekor, the first woman to attain the exalted status of warmaster.'
	},
	{
		name: "Roland's Visage",
		type: "Helm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{
			Strength:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Roland\'s Legacy',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_set_01_p1_demonhunter_male.png',
		flavor:'"Time passes, but the memory of my master, and the knowledge of what he did for me, does not fade. In fact, it grows stronger. I swear his name shall never be forgotten." —Meditations on My Redemption'
	},
	{
		name:"Sage's Apogee",
		type:"Helm",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:6,vc:90,fs:2,db:4
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
			Socket:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		set:'Sage\'s Journey',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_016_x1_demonhunter_male.png',
		flavor:'Patterned after Imris\'s unique circle of protection, which was powered by his own magic to not only ward off attackers but also strengthen his mind.'
	},
	{
		name:"Shrouded Mask",
		type:"Helm",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[
			"Wizard"
		],
		primary:{
			Intelligence:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Delsere\'s Magnum Opus',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_set_02_p2_demonhunter_male.png',
		flavor:'"Delsere proclaimed this Mask the jewel of his magnum opus, only to break down and weep that he must start over. Shortly after, his magnum opus disappeared, as did Delsere."- High Councilor Valthek'
	},
	{
		name: "Skull of Resonance",
		type: "Helm",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{
			Strength:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			SkullResonance:null,
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_004_x1_demonhunter_male.png',
		flavor:'This macabre helm was hollowed out in such a way as to concentrate and disperse sounds in a focused manner.'
	},
	{
		name: "Sunwuko's Crown",
		type: "Helm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Monkey King\'s Garb',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_set_11_x1_demonhunter_male.png',
		flavor:'Trained by the famed monks of Ivgorod, Sunwuko returned to his homeland of Xiansai, where his frenzied fighting earned him the title "Monkey King." Intended as a joke, the name soon became feared.'
	},
	{
		name: "Tal Rasha's Guise of Wisdom",
		type: "Helm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			Socket:null,
			CritChance:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		set:'Tal Rasha\'s Elements',
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_010_x1_demonhunter_male.png',
		flavor:'The symbol of the Horadric order.'
	},
	{
		name:"The Helm of Rule",
		type:"Helm",
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
			Vitality:null,
			Block:{
				min:11,
				max:11
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_helm_011_x1_demonhunter_male.png',
		flavor:'Worn by General Raylend while he stormed Yshrald\'s fortress during the War of the Hounds.'
	},
	{
		name: "Bezoar Stone",
		type: "Spirit Stone",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			SKILLDAMAGE:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spiritstone_001_x1_demonhunter_male.png',
		flavor:'This stone has passed through much to attain its magical properties.'
	},
	{
		name: "Erlang Shen",
		type: "Spirit Stone",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			SKILLDAMAGE:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spiritstone_001_x1_demonhunter_male.png',
		flavor:'This stone has passed through much to attain its magical properties.'
	},
	{
		name: "Eye of Peshkov",
		type: "Spirit Stone",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Peshkov:{
				min:38,
				max:50
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spiritstone_103_x1_demonhunter_male.png',
		flavor:'"The mind sees most clearly when the eyes are shut." —High Abbot Peshkov'
	},
	{
		name: "Gyana Na Kashu",
		type: "Spirit Stone",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Gyana:{
				min:525,
				max:700
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spiritstone_004_x1_demonhunter_male.png',
		flavor:'The stone envelopes one\'s enemies in the warm embrace of a raging fire. The screaming drowns out their sincere thanks.'
	},
	{
		name: "Inna's Radiance",
		type: "Spirit Stone",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Inna\'s Mantra',
		image:'//media.blizzard.com/d3/icons/items/large/unique_spiritstone_009_x1_demonhunter_male.png',
		flavor:'Inna, the goddess of the sky, radiates beauty for all to see.'
	},
	{
		name: "Kekegi's Unbreakable Spirit",
		type: "Spirit Stone",
		weight: 50,
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
			Kekegi:{
				min:2,
				max:4
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spiritstone_102_x1_demonhunter_male.png',
		flavor:'This stone is said to have once adorned the wise monk Kekegi’s brow. The hero\'s spirit never once wavered during his legendary Five Trials, and that same indomitable will now suffuses this headgear.'
	},
	{
		name: "Madstone",
		type: "Spirit Stone",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			RANDOM:3
		},
		secondary:{
			Madstone:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p1_unique_spiritstone_008_demonhunter_male.png',
		flavor:'The monk Vhalit is said to have been driven mad with the power of this stone. Can you withstand the corruption that lies within?'
	},
	{
		name: "See No Evil",
		type: "Spirit Stone",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			BonusXp:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spiritstone_005_x1_demonhunter_male.png',
		flavor:'Evil cannot touch one who sees only the light.'
	},
	{
		name: "The Eye of the Storm",
		type: "Spirit Stone",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			LightningDamage:{
				min:15,
				max:30
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spiritstone_006_x1_demonhunter_male.png',
		flavor:'Ultimate power emerges only from the calm at its center.'
	},
	{
		name: "The Laws of Seph",
		type: "Spirit Stone",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Seph:{
				min:75,
				max:100
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spiritstone_101_x1_demonhunter_male.png',
		flavor:'Seph the Patriarch, for whom this stone was named, was famed for illuminating concepts in a way that led to epiphanies in his students. In much the same way, this spirit stone casts the glorious light generated by its wearer deep inside the monk\'s soul as well as outward to blind enemies.'
	},
	{
		name: "The Mind's Eye",
		type: "Spirit Stone",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			MindsEye:{
				min:10,
				max:15
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spiritstone_002_x1_demonhunter_male.png',
		flavor:'Only one who opens the tenth gate can cleanse her soul.'
	},
	{
		name: "Tzo Krin's Gaze",
		type: "Spirit Stone",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			WaveOfLightDmg:{
				min:20,
				max:25
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spiritstone_007_x1_demonhunter_male.png',
		flavor:'The old warrior came to Tzo Krin to ask how to settle his troubled mind. "Bring me your mind, and I will settle it." Upon hearing this, the old warrior immediately achieved enlightenment.'
	},
	{
		name: "Carnevil",
		type: "Voodoo Mask",
		weight: 50,
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
			Carnevil:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_voodoomask_101_x1_demonhunter_male.png',
		flavor:'Near the shoreline of the Torajan Jungle lies Lake Ymirson. Here are found the palms from which the Umbaru derive the poison for their darts. This ornate mask is carved from one of these palms, and beads of poisonous sap ooze forth from it, providing the witch doctor wearing it with easy access to fresh, and more concentrated, venom.'
	},
	{
		name: "Mask of Jeram",
		type: "Voodoo Mask",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			Jeram:{
				min:75,
				max:100
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_voodoomask_102_x1_demonhunter_male.png',
		flavor:'Long ago, a powerful witch doctor named Jeram waged a one-man war on the khazra after they slew his family. To pursue his vendetta, Jeram crafted this terrible mask, capable of calling all manner of beasts and the walking dead to his service. Those who came across the ruined khazra villages—with their dead half devoured, swollen with venom, and scorched by fire—knew it could only be Jeram\'s work.'
	},
	{
		name: "Quetzalcoatl",
		type: "Voodoo Mask",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			RANDOM:3
		},
		secondary:{
			Quetzalcoatl:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_voodoomask_005_x1_demonhunter_male.png',
		flavor:'The Oaxazi tribe sends promising children into the deep jungle to be judged by the great feathered serpent. Those who return are trained in the sacred arts.'
	},
	{
		name: "Split Tusk",
		type: "Voodoo Mask",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			RANDOM:3
		},
		secondary:{
			BonusXp:null,
			MaxMana:{
				min:30,
				max:39
			}
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_voodoomask_006_x1_demonhunter_male.png',
		flavor:'Carved to evoke the power of the great tusked pack beasts of the Teganze.'
	},
	{
		name: "The Grin Reaper",
		type: "Voodoo Mask",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			GrinReaper:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_voodoomask_002_x1_demonhunter_male.png',
		flavor:'Death wears many faces.'
	},
	{
		name: "Tiklandian Visage",
		type: "Voodoo Mask",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			RANDOM:3
		},
		secondary:{
			Tiklandian:{
				min:6,
				max:8
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_voodoomask_001_x1_demonhunter_male.png',
		flavor:'The fierce visage of Enobakhare, the spirit father of the small remote village of Tiklan.'
	},
	{
		name: "Visage of Giyua",
		type: "Voodoo Mask",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			RANDOM:3
		},
		secondary:{
			Giyua:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_voodoomask_008_x1_demonhunter_male.png',
		flavor:'Eternal Giyua, guardian of the Unformed Land, blesses the worthy champion with the gift of her children.'
	},
	{
		name: "Zunimassa's Vision",
		type: "Voodoo Mask",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Intelligence:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Zunimassa\'s Haunt',
		image:'//media.blizzard.com/d3/icons/items/large/unique_voodoomask_007_x1_demonhunter_male.png',
		flavor:'The elder spirit Zunimassa communes with the wearer of this mask to reveal the ways in which the world emerges from the Unformed Land.'
	},
	{
		name: "Archmage's Vicalyke",
		type: "Wizard Hat",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			RANDOM:3
		},
		secondary:{
			Vicalyke:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_wizardhat_101_x1_demonhunter_male.png',
		flavor:'"Ha! That was but the first of many times I supposedly met death at the hands of my enemies." —Archmage Horazon'
	},
	{
		name:"Crown of the Primus",
		type:"Wizard Hat",
		weight:100,
		hc:false,
		season:false,
		smartLoot:[
			"Wizard"
		],
		primary:{
			Intelligence:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Primus:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_wizardhat_104_x1_demonhunter_male.png',
		flavor:'The Peace Warder Radaugh was a singular being who had the powers of time itself at his command. Unfortunately, this frequently left him in a befuddled state, allowing the upstart cultist Vess to kill him and take the prized Crown of the Primus for his own.'
	},
	{
		name: "Dark Mage's Shade",
		type: "Wizard Hat",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			RANDOM:3
		},
		secondary:{
			DarkMage:{
				min:15,
				max:20
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_wizardhat_001_x1_demonhunter_male.png',
		flavor:'The scrolls in the Yshari Sanctum speak with somber tones of the dark mage Garesh. Could the runes on this hat really mark it as his?'
	},
	{
		name: "Storm Crow",
		type: "Wizard Hat",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			LightningDamage:{
				min:15,
				max:20
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_wizardhat_004_x1_demonhunter_male.png',
		flavor:'"When the sky was torn from the sea, Storm Crow appeared from within the thundering clouds to grant mankind dominion over the living flame." —Legends of the Forgotten World'
	},
	{
		name: "The Magistrate",
		type: "Wizard Hat",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Magistrate:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_wizardhat_103_x1_demonhunter_male.png',
		flavor:'The most powerful of wizards will find themselves richly rewarded by their studies. This hat is for those who like to display their power in a more elegant fashion.'
	},
	{
		name: "The Swami",
		type: "Wizard Hat",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			APOC:{
				min:3,
				max:4
			},
			RANDOM:2
		},
		secondary:{
			Swami:{
				min:10,
				max:15
			},
			MaxAp:{
				min:7,
				max:9
			}
		},
		image:'//media.blizzard.com/d3/icons/items/large/p1_unique_wizardhat_003_demonhunter_male.png',
		flavor:'Bestows upon the wearer both formidable power and an unsurpassed statement of fashion.'
	},
	{
		name: "Velvet Camaral",
		type: "Wizard Hat",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			Intelligence:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Camaral:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_wizardhat_102_x1_demonhunter_male.png',
		flavor:'This flamboyant headdress was fashioned long ago by a fashion-conscious Harakas mage to make an impression at a peace summit between her clan and the Sarandesh. The highly conductive properties that make it so valuable in combat were merely a happy accident. Regardless, when the meeting of the clans turned violent, it was those attributes that made the more lasting impact.'
	}
];

module.exports = helm;