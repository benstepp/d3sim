var twohand = [
	{
		name: "Butcher's Carver",
		type: "Two-Handed Axe",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			WEAPON_DAMAGE:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			Butcher:null,
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_axe_2h_001_x1_demonhunter_male.png',
		flavor:'Foul weapon of the resurrected Butcher demon. Perfect for carving fresh meat.'
	},
	{
		name: "Messerschmidt's Reaver",
		type: "Two-Handed Axe",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			Dmg_Fire:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			LifeAfterKill:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_axe_2h_011_x1_demonhunter_male.png',
		flavor:'This mighty weapon once hewed its way through the demon-infested catacombs beneath the old Zakarum cathedral in Tristram. Could it be the weapon the warrior Aidan used to defeat Diablo all those years ago?'
	},
	{
		name: "Skorn",
		type: "Two-Handed Axe",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			WEAPON_DAMAGE:null,
			MAIN:null,
			Bleed:null,
			Socket:null
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_axe_2h_009_x1_demonhunter_male.png',
		flavor:'The demon L\'Anzuul wielded his vile axe Skorn with great venom and wrath before he was brought low by the forces of Heaven.'
	},
	{
		name: "The Executioner",
		type: "Two-Handed Axe",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			Dmg_Black:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			BonusXp:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_axe_2h_003_x1_demonhunter_male.png',
		flavor:'Stained with the blood of its many victims.'
	},
	{
		name: "Cluckeye",
		type: "Bow",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			Cluckeye:{
				min:25,
				max:50
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bow_015_x1_demonhunter_male.png',
		flavor:'This bow has been tainted by some strange magic indeed.'
	},
	{
		name: "Etrayu",
		type: "Bow",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dmg_Cold_ranged:null,
			ColdDamage:{
				min:15,
				max:20
			},
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			IgnoreDura:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bow_001_p1_demonhunter_male.png',
		flavor:'The warrior surveyed the dead and dying arrayed about him. There would be more—many more. He felt as if he were trapped in a tale that would never end.'
	},
	{
		name: "Kridershot",
		type: "Bow",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			Krider:{
				min:3,
				max:4
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bow_101_x1_demonhunter_male.png',
		flavor:'Long ago, an outmatched hero defeated a great demon archer with a lucky shot and claimed its mighty weapon as his own. It was to be the last good fortune he enjoyed, as the dying demon\'s curse wormed its way into the bow. For the remainder of his short life, the hero never knew a day free from conflict. Strife and destruction have dogged every poor soul to bear the bow.'
	},
	{
		name: "Leonine Bow of Hashir",
		type: "Bow",
		weight: 100,
		hc: false,
		season: true,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			Leonine:{
				min:15,
				max:20
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bow_103_x1_demonhunter_male.png',
		flavor:'Hashir was a gifted blacksmith who often spoke passionately about the need for mankind to live in peace and harmony with all things. Until his family was killed. Then he turned his talents towards creating the most effective ways to inflict massive amounts of pain and suffering on those responsible.'
	},
	{
		name: "Odyssey's End",
		type: "Bow",
		weight: 100,
		hc: false,
		season: true,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			Odyssey:{
				min:20,
				max:25
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bow_102_x1_demonhunter_male.png',
		flavor:'After her many travels, the heroine Aphaena returned home bearing the mightiest bow in all of Skovos. Only the strongest warriors may string it, and in modern times, the greatest of Skovos\'s champions compete for that honor.'
	},
	{
		name: "The Raven's Wing",
		type: "Bow",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			Raven:null,
			GoldFind:{
				min:21,
				max:25
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bow_008_x1_demonhunter_male.png',
		flavor:'Legends say that ravens serve as Death\'s couriers, carrying souls to the afterlife. Blood Raven carried this bow in the tradition of that sacred duty until she fell to the forces of corruption.'
	},
	{
		name: "Uskang",
		type: "Bow",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dmg_Lightning_ranged:null,
			LightningDamage:{
				min:15,
				max:20
			},
			Dexterity:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bow_005_p1_demonhunter_male.png',
		flavor:'Hewn from the roots of the sacred angaza tree.'
	},
	{
		name: "Windforce",
		type: "Bow",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			KnockHit:{
				min:300,
				max:500
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bow_009_x1_demonhunter_male.png',
		flavor:'The wind carries life for those enveloped in its flow, and death for those arrayed against it.'
	},
	{
		name: "Balance",
		type: "Daibo",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dmg_Holy:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_combatstaff_2h_002_x1_demonhunter_male.png',
		flavor:'"We must walk the middle way between chaos and order, and not allow our emotions to sway us." —Tenets of the Veradani'
	},
	{
		name: "Flying Dragon",
		type: "Daibo",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			FlyingD:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_combatstaff_2h_009_x1_demonhunter_male.png',
		flavor:'The flying dragon soars silently but strikes with great force.'
	},
	{
		name: "Incense Torch of the Grand Temple",
		type: "Daibo",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			WaveOfLightDmg:{
				min:25,
				max:30
			},
			RANDOM:2
		},
		secondary:{
			IncenseTorch:{
				min:40,
				max:50
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_combatstaff_2h_003_x1_demonhunter_male.png',
		flavor:'Fills the air with calming fragrances as your opponent feels the weight of your displeasure.'
	},
	{
		name: "Inna's Reach",
		type: "Daibo",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			MysticAllyDmg:{
				min:20,
				max:25
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:1
		},
		set:'Inna\'s Mantra',
		image:'//media.blizzard.com/d3/icons/items/large/unique_combatstaff_2h_001_x1_demonhunter_male.png',
		flavor:''
	},
	{
		name: "Staff of Kyro",
		type: "Daibo",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			DeadlyReachDmg:{
				min:40,
				max:50
			},
			Socket:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_combatstaff_2h_101_x1_demonhunter_male.png',
		flavor:'"For more than a century, this simple white wax wood staff braided in red shagreen has served as the badge of office for the high abbot of the Kyro temple. During that time, thousands of inattentive young monks have come to find that their master’s old staff has surprising reach." —Archimandrite Cyprian'
	},
	{
		name: "The Flow of Eternity",
		type: "Daibo",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			FlowEternity:{
				min:45,
				max:60
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_combatstaff_2h_005_x1_demonhunter_male.png',
		flavor:'"When one\'s mind floats along the unseen trails that pulse through the world, one\'s movements become effortless." —Dvorak, Sage of the Many'
	},
	{
		name: "The Paddle",
		type: "Daibo",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dmg_Black:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			Paddle:null,
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_combatstaff_2h_007_x1_demonhunter_male.png',
		flavor:'The currents of a battle must be navigated with a strong hand.'
	},
	{
		name: "Warstaff of General Quang",
		type: "Daibo",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			Quang:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_combatstaff_2h_102_x1_demonhunter_male.png',
		flavor:'"When he took the field himself, the General bore a demon-visaged staff shaped with a number of protrusions and barbs designed for tripping, disarming, and dismounting his opponents. Witnesses described the General moving through armies like a blur, leaving behind swaths of prone troops for his bodyguards to dispatch." —A History of War by Lord Jerem Kiel'
	},
	{
		name: "Bakkan Caster",
		type: "Crossbow",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_xbow_006_x1_demonhunter_male.png',
		flavor:'Crafted by the reclusive dwellers of the deep woods to defend their sacred territory.'
	},
	{
		name: "Buriza-Do Kyanon",
		type: "Crossbow",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dmg_Cold_ranged:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			FreezeHit:{
				min:75,
				max:100
			},
			Buriza:{
				min:1,
				max:2
			}
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_xbow_011_x1_demonhunter_male.png',
		flavor:'Previously thought to be too large and cumbersome to be wielded by hand, the Buriza-Do Kyanon is handled by the superior warrior with ease.'
	},
	{
		name: "Chanon Bolter",
		type: "Crossbow",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			Chanon:{
				min:12,
				max:16
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_xbow_101_x1_demonhunter_male.png',
		flavor:'The gross ornamentation of this crossbow belies the solid construction and powerful draw weight that make it a deadly weapon. As bowyer to King Leoric, Chanon was ordered to produce a crossbow capable of defeating the forces of Westmarch or watch his family be put to the sword. Chanon complied, creating this masterpiece, which the Mad King promptly tested on the hapless craftsman.'
	},
	{
		name: "Demon Machine",
		type: "Crossbow",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dmg_Fire_ranged:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			DemonMachine:{
				min:35,
				max:65
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_xbow_001_x1_demonhunter_male.png',
		flavor:'"All maddening angles and gnashing gears. These crossbows! How do they work?!" —Sergeant at Arms Carlavoie'
	},
	{
		name: "Hellrack",
		type: "Crossbow",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dmg_Fire_ranged:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Hellrack:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_xbow_002_x1_demonhunter_male.png',
		flavor:'How many sinners have been pinned to the gates of Hell with this wicked device?'
	},
	{
		name: "Manticore",
		type: "Crossbow",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dmg_Poison_ranged:null,
			Dexterity:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_xbow_003_x1_demonhunter_male.png',
		flavor:'The flying quills of the manticore\'s tail are filled with lethal toxin.'
	},
	{
		name: "Pus Spitter",
		type: "Crossbow",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dmg_Poison_ranged:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			PusSpitter:{
				min:25,
				max:50
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_xbow_012_x1_demonhunter_male.png',
		flavor:'Imbued with the magic of the Torajan jungles. But from where does it get its ammunition?'
	},
	{
		name: "Wojahnni Assaulter",
		type: "Crossbow",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Wojahnni:{
				min:30,
				max:40
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_xbow_102_x1_demonhunter_male.png',
		flavor:'Because of the consummate skill required to construct them, Wojahnni heavy crossbows are reserved for the officer class. As the Assaulter\'s effectiveness is essential to the nation\'s military superiority, they are seldom found intact outside of Wojahn since there is a simple peg inserted in the weapon that, when pulled, causes it to fall to pieces.'
	},
	{
		name: "Baleful Remnant",
		type: "Two-Handed Flail",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Fate of the Fell",
		type: "Two-Handed Flail",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Golden Flense",
		type: "Two-Handed Flail",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "The Mortal Drama",
		type: "Two-Handed Flail",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Arthef's Spark of Life",
		type: "Two-Handed Mace",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Crushbane",
		type: "Two-Handed Mace",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Schaefer's Hammer",
		type: "Two-Handed Mace",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Skywarden",
		type: "Two-Handed Mace",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Sledge of Athskeleng",
		type: "Two-Handed Mace",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "The Furnace",
		type: "Two-Handed Mace",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Wrath of the Bone King",
		type: "Two-Handed Mace",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Bastion's Revered",
		type: "Two-Handed Mighty Weapon",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Fury of the Vanished Peak",
		type: "Two-Handed Mighty Weapon",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Immortal King's Boulder Breaker",
		type: "Two-Handed Mighty Weapon",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Madawc's Sorrow",
		type: "Two-Handed Mighty Weapon",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "The Gavel of Judgment",
		type: "Two-Handed Mighty Weapon",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Barbarian"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Bovine Bardiche",
		type: "Polearm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Heart Slaughter",
		type: "Polearm",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Pledge of Caldeum",
		type: "Polearm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Standoff",
		type: "Polearm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Vigilance",
		type: "Polearm",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Ahavarion, Spear of Lycander",
		type: "Staff",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Autumn's Call",
		type: "Staff",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Maloth's Focus",
		type: "Staff",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "The Broken Staff",
		type: "Staff",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "The Grand Vizier",
		type: "Staff",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "The Smoldering Core",
		type: "Staff",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "The Tormentor",
		type: "Staff",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Valthek's Rebuke",
		type: "Staff",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Wormwood",
		type: "Staff",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Blackguard",
		type: "Two-Handed Sword",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Blade of Prophecy",
		type: "Two-Handed Sword",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Cam's Rebuttal",
		type: "Two-Handed Sword",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Crusader"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name:"Corrupted Ashbringer",
		type:"Two-Handed Sword",
		weight:25,
		hc:false,
		season:false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Faithful Memory",
		type: "Two-Handed Sword",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Maximus",
		type: "Two-Handed Sword",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Scourge",
		type: "Two-Handed Sword",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Stalgard's Decimator",
		type: "Two-Handed Sword",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "The Grandfather",
		type: "Two-Handed Sword",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "The Sultan of Blinding Sand",
		type: "Two-Handed Sword",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "The Zweihander",
		type: "Two-Handed Sword",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Warmonger",
		type: "Two-Handed Sword",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	}
];

module.exports = twohand;