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
		name:"Cinder Switch",
		type:"Two-Handed Axe",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:80,ad:43,vc:30,fs:2,db:4
		},
		smartLoot:[
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			Dmg_Fire:null,
			RANDOM:3
		},
		secondary:{
			CinderSwitch:{
				min:25,
				max:50
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_axe_2h_010_x1_demonhunter_male.png',
		flavor:'Ensorcelled with the essence of living flame.'
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
		name:"Sydyru Crust",
		type:"Bow",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:80,ad:43,vc:30,fs:2
		},
		smartLoot:[
			"Demon Hunter"
		],
		primary:{
			Dmg_Poison_ranged:null,
			AttackSpeed:null,
			EliteDamage:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bow_010_x1_demonhunter_male.png',
		flavor:'Carved from the bones of the dreaded giant sydyru demon.'
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
		name:"Unbound Bolt",
		type:"Bow",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:80,ad:43,vc:30,fs:2
		},
		smartLoot:[
			"Demon Hunter"
		],
		primary:{
			Dmg_Cold_ranged:null,
			AttackSpeed:null,
			CritDamage:{
				min:31,
				max:35
			},
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bow_007_x1_demonhunter_male.png',
		flavor:'Many a hero has wielded this bow through many an age, and the tales sung of it can be heard from one end of the world to the other.'
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
		flavor:'Inlaid with prayers to Inna\'s righteous judgment.'
	},
	{
		name:"Lai Yui's Persuader",
		type:"Daibo",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:80,ad:43,vc:30,fs:2
		},
		smartLoot:[
			"Monk"
		],
		primary:{
			Dmg_Cold:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_combatstaff_2h_008_x1_demonhunter_male.png',
		flavor:'"Remember what you learned here today," she told the defeated band of thieves, "or I will return to remind you."'
	},
	{
		name: "Rozpedin's Force",
		type:"Daibo",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:80,ad:43,vc:30,fs:2
		},
		smartLoot:[
			"Monk"
		],
		primary:{
			Dmg_Holy:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_combatstaff_2h_004_x1_demonhunter_male.png',
		flavor:'Rozpedin purified himself through meditation for thirty days before crafting this staff out of a single piece of white oak.'
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
		name:"Arcane Barb",
		type:"Crossbow",
		weight:0,
		hc:false,
		season:false,
		smartLoot:[
			"Demon Hunter"
		],
		primary:{
			Dmg_Arcane:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_xbow_004_x1_demonhunter_male.png',
		flavor:'The shimmering metal stock conceals a strange power source capable of charging each shot with arcane energy.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Baleful:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_flail_2h_102_x1_demonhunter_male.png',
		flavor:'"The head of this curious weapon consists of a highly unusual and volatile rock formation. Some speculate it came from a meteor—or an entirely different plane of existence, silly as that is. It has defied the understanding of scholars for centuries, but then again, I have never had a look at it!" —Abd al-Hazir'
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
		primary:{
			Dmg_Fire:null,
			Strength:null,
			RANDOM:2
		},
		secondary:{
			FateFell:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_flail_2h_103_x1_demonhunter_male.png',
		flavor:'"When the unholy creature stalking Harstead was finally slain, the town\'s clergy commissioned the construction of this massive weapon. Adorned with a weight fashioned in the fiend\'s terrible visage, the flail was meant to serve as a warning to any fell invader." —Rennold\'s Catalogue of Arms'
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
		primary:{
			WEAPON_DAMAGE:null,
			Strength:null,
			RANDOM:2
		},
		secondary:{
			Flense:{
				min:4,
				max:6
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_flail_2h_104_demonhunter_male.png',
		flavor:'Covered in delicate Skatsimi runes, the blades of this ornate ancient weapon are sharp enough to draw blood with but a finger\'s caress.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Strength:null,
			RANDOM:2
		},
		secondary:{
			MortalDrama:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_flail_2h_101_x1_demonhunter_male.png',
		flavor:'"A tragedy is merely a comedy where the audience understands the consequences." —Samuel Drest, playwright'
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
		primary:{
			WEAPON_DAMAGE:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			Arthef:{
				min:3,
				max:4
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_2h_003_x1_demonhunter_male.png',
		flavor:'Arthef of the Dying Ones crafted this weapon to translate the misbegotten life of the undead into the living.'
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
		primary:{
			Dmg_Cold:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_2h_001_x1_demonhunter_male.png',
		flavor:'Many are the warriors who have fled in terror from the awesome might that is Crushbane.'
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
		primary:{
			Dmg_Lightning:null,
			LightningDamage:{
				min:20,
				max:25
			},
			RANDOM:2
		},
		secondary:{
			Schaefer:{
				min:650,
				max:850
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_2h_009_p2_demonhunter_male.png',
		flavor:'Forged in the frigid wastes of the north to honor the famed Schaefer artisans.'
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
		primary:{
			Dmg_Holy:null,
			Strength:null,
			RANDOM:2
		},
		secondary:{
			Skywarden:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_2h_010_x1_demonhunter_male.png',
		flavor:'Favored weapon of the angelic Host.'
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
		primary:{
			Dmg_Black:null,
			MAIN:null,
			FlatDamage:null,
			MoveSpeed:{
				min:10,
				max:12
			},
			RANDOM:1
		},
		secondary:{
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_2h_002_x1_demonhunter_male.png',
		flavor:'The berserkers of Athskeleng could not be stopped, their intricately carved white maces turning red with the blood of their enemies.'
	},
	{
		name:"Sunder",
		type:"Two-Handed Mace",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:80,ad:43,vc:30,fs:2,db:4
		},
		smartLoot:[
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			Dmg_Fire:null,
			RANDOM:3
		},
		secondary:{
			Sunder:{
				min:25,
				max:50
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_2h_006_x1_demonhunter_male.png',
		flavor:'A weapon of myth and legend. Some say that to use it is folly—that it will rip the land asunder and boil the oceans.'
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
		primary:{
			Dmg_Fire:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			Furnace:{
				min:40,
				max:50
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_2h_103_x1_demonhunter_male.png',
		flavor:'"This pestilence threatens to destroy our city, General Arenton. See that the plague dead are kept only in the Repository, and use this weapon to set their bodies aflame. Would that the memory of this tragedy could burn with them." –Justinian II, year 1200'
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
		primary:{
			Dmg_Cold:null,
			ColdDamage:{
				min:25,
				max:30
			},
			RANDOM:2
		},
		secondary:{
			LifeAfterKill:null,
			SPECIAL:'WRATHBONEKING'
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_2h_012_p1_demonhunter_male.png',
		flavor:'Used by the Skeleton King to punish those who would stand against him.'
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
		primary:{
			Dmg_Cold:null,
			Strength:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			BastionRevered:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mighty_2h_004_p1_demonhunter_male.png',
		flavor:'Used by the leaders of Bastion’s Keep in the war with the Northern Tribes. The Barbarians came to respect the weapon so much that they gave it a name, shortly after tearing it from the hands of a dying garrison commander.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Strength:null,
			SeismicSlamDmg:{
				min:25,
				max:30
			},
			RANDOM:2
		},
		secondary:{
			VanishedPeak:{
				min:40,
				max:50
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mighty_2h_006_x1_demonhunter_male.png',
		flavor:'Korr took all his anger and despair and poured them into the creation of a weapon that would speak to the majesty of Arreat for ages to come.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Strength:null,
			CallOfTheAncientsDmg:{
				min:45,
				max:60
			},
			RANDOM:2
		},
		secondary:{
			IgnoreDura:null,
			RANDOM:1
		},
		set:'Immortal King\'s Call',
		image:'//media.blizzard.com/d3/icons/items/large/unique_mighty_2h_010_x1_demonhunter_male.png',
		flavor:'The favorite weapon of Worusk, the king of the tribes.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Strength:null,
			RANDOM:2
		},
		secondary:{
			Madawc:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mighty_2h_101_x1_demonhunter_male.png',
		flavor:'The storm of demonic destruction that thundered toward the gates of Harrogath was held back for what seemed like ages by a lone barbarian wielding this immense weapon. But even the mightiest of warriors will tire and eventually fall, and such was the case with this nameless hero. Madawc\'s Sorrow was thought lost in the destruction of the sacred mountain, but has recently resurfaced intact.'
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
		primary:{
			Dmg_Holy:null,
			Strength:null,
			HammerOfTheAncientsDmg:{
				min:30,
				max:40
			},
			RANDOM:1
		},
		secondary:{
			GavelJudgment:{
				min:20,
				max:25
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_mighty_2h_001_demonhunter_male.png',
		flavor:'A mighty symbol of Tyrael, the archangel of Justice, though never actually used by him. Stolen from the Courts of Justice in the High Heavens by renegade angels.'
	},
	{
		name:"War of the Dead",
		type:"Two-Handed Mighty Weapon",
		weight:0,
		hc:false,
		season:false,
		craft:{},
		smartLoot:[
			"Barbarian"
		],
		primary:{
			Dmg_Black:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mighty_2h_012_x1_demonhunter_male.png',
		flavor:'Only the dead have seen the end of war.'
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
		primary:{
			Dmg_Lightning:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			Bovine:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_polearm_101_x1_demonhunter_male.png',
		flavor:'This polearm was crafted by the finest ungulate smiths—its blade fired in the Hellforge, quenched in the rancid milk of the Cow King, and enchanted by that selfsame monarch. In addition to its significant martial benefits, the Bovine Bardiche may also summon forth a veritable army of cows to fight on its wielder\'s behalf.'
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
		primary:{
			Dmg_Black:null,
			PhysDamage:{
				min:25,
				max:30
			},
			MAIN:null,
			RANDOM:1
		},
		secondary:{
			LifeAfterKill:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_polearm_003_p1_demonhunter_male.png',
		flavor:'Your enemies will find it difficult to fight without their hearts.'
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
		primary:{
			Dmg_Fire:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_polearm_002_x1_demonhunter_male.png',
		flavor:'Long a symbol of an open and free society, this weapon has come to represent the tyranny and corruption that have befallen the great city.'
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
		primary:{
			Dmg_Cold:null,
			MAIN:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_polearm_004_x1_demonhunter_male.png',
		flavor:'With this, one warrior can hold back an army.'
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
		primary:{
			Dmg_Holy:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			Vigilance:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_polearm_001_x1_demonhunter_male.png',
		flavor:'"One who stands in defense of others will find her inner strength." —The Cadence of Battle'
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
		primary:{
			Dmg_Holy:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Ahavarion:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_staff_101_x1_demonhunter_male.png',
		flavor:'"For love of the nephalem Philios, I will leave this weapon behind, and exchange the powers of Heaven for the peace of Sanctuary." –The angel Lycander'
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
		primary:{
			Dmg_Holy:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			BonusXp:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_staff_008_x1_demonhunter_male.png',
		flavor:'Contemplate the falling leaves, colored by the rays of the waning sun. Strike forth from a place of peace.'
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
		primary:{
			Dmg_Fire:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			Maloth:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_staff_006_x1_demonhunter_male.png',
		flavor:'Used as a focal point for Maloth\'s fearsome power. It took an army to pry it from his hands.'
	},
	{
		name:"Mark of the Magi",
		type:"Staff",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:80,ad:43,vc:30,fs:2
		},
		smartLoot:[
			"Monk",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			Dmg_Arcane:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_staff_002_x1_demonhunter_male.png',
		flavor:'It is believed the magi, practitioners of strange and esoteric magics, died out long ago. The only proofs of their existence are the Behistun tomes and this staff.'
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
		primary:{
			Dmg_Lightning:null,
			MAIN:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			IgnoreDura:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_staff_001_x1_demonhunter_male.png',
		flavor:'Master Kirill\'s prized staff until it was damaged in combat with the demon Ashukal.'
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
		primary:{
			Dmg_Fire:null,
			Intelligence:null,
			MeteorDmg:{
				min:25,
				max:30
			},
			RANDOM:2
		},
		secondary:{
			Vizier:{
				min:40,
				max:50
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_staff_009_p1_demonhunter_male.png',
		flavor:'Protector of the first counselor of Caldeum\'s Trade Consortium.'
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
		primary:{
			Dmg_Fire:null,
			Intelligence:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			SmolderingCore:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_staff_103_x1_demonhunter_male.png',
		flavor:'"After Azmodan\'s death, I sent a squad of men to block the path to the crater. Only one of them returned, bearing this strange weapon. He was badly burned—his armor had melted into his skin in places. He perished a few hours later. We threw the staff over the walls, hoping never to see it again." —Captain Haile of Bastion’s Keep'
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
		primary:{
			Dmg_Arcane:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			Tormenter:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_staff_007_x1_demonhunter_male.png',
		flavor:'This staff was made with only one goal in mind: to cause great pain.'
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
		primary:{
			Dmg_Arcane:null,
			Intelligence:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			Valthek:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_staff_102_x1_demonhunter_male.png',
		flavor:'This staff was the property of the high councilor of the Vizjerei and master of the mage clans of the Yshari Sanctum. It disappeared shortly after an incident with a rebellious student.'
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
		primary:{
			Dmg_Poison:null,
			Intelligence:null,
			PoisonDamage:{
				min:20,
				max:25
			},
			RANDOM:1
		},
		secondary:{
			Wormwood:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_staff_003_demonhunter_male.png',
		flavor:'The poisonous hatred of many a man was harnessed to create this staff.'
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
		primary:{
			Dmg_Black:null,
			MAIN:null,
			FlatDamage:null,
			RANDOM:1
		},
		secondary:{
			CcReduc:{
				min:4,
				max:8
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_2h_011_x1_demonhunter_male.png',
		flavor:'The power of this sword drove the warrior Rothat to unspeakable acts.'
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
		primary:{
			WEAPON_DAMAGE:null,
			CdReduc:null,
			RANDOM:2
		},
		secondary:{
			Prophecy:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_2h_007_x1_demonhunter_male.png',
		flavor:'The Blade of Prophecy was lost until a champion worthy to carry it into battle emerged.'
	},
	{
		name:"Blood Brother",
		type:"Two-Handed Sword",
		weight:50,
		hc:false,
		season:false,
		smartLoot:["Crusader"],
		primary:{
			WEAPON_DAMAGE:null,
			Strength:null,
			FlatDamage:null,
			RANDOM:1
		},
		secondary:{
			BloodBrother:{
				min:15,
				max:20
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_2h_103_x1_demonhunter_male.png',
		flavor:'"Long ago, the demon Vi\'inaz and his brother Eboeth were terrible foes of the High Heavens, though they bickered constantly. In later times, Vi\'inaz alone was seen wielding a sword wrapped in demon flesh, with a still-beating heart pumping black blood along its sharp-spined length. Talus\'ar does not record the fate of Eboeth, but I do not place our foes above perverse fratricide." —Archangel Ithereal'
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
		primary:{
			WEAPON_DAMAGE:null,
			Strength:null,
			RANDOM:2
		},
		secondary:{
			CamRebuttal:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_2h_102_x1_demonhunter_male.png',
		flavor:'This massive holy weapon was once owned by an overzealous paladin named Cam. The blade earned its name when Cam was confronted by a strange warrior from the east who claimed that a darkness coiled at the heart of the Zakarum faith, one that threatened to undo its good works. Cam listened politely to the claims, then with a scream of "Blasphemer!" lopped off the shocked stranger\'s head.'
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
		primary:{
			Dmg_Poison:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			Ashbringer:{
				min:5000,
				max:6000
			},
			UndeadDamage:{
				min:9,
				max:15
			},
			LifeAfterKill:null
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_2h_104_x1_demonhunter_male.png',
		flavor:'Stories tell of a great paladin who wore a single gauntlet of silver and wielded a mighty sword with a flashing jewel. He dispatched thousands of Risen Dead and Wretched Mothers, but fell to a tragic end. This sword bears some resemblance to the legends, but its jewel is dark and threatening. Perhaps there is more to the story?'
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
		primary:{
			Dmg_Holy:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			Thorns:{
				min:0,
				max:0
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_2h_012_x1_demonhunter_male.png',
		flavor:'The Boosenian smiths forged swords with a technique centuries beyond their time. Few craftsmen have been able to replicate the quality of their work.'
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
		primary:{
			Dmg_Fire:null,
			FireDamage:{
				min:15,
				max:20
			},
			MAIN:null,
			RANDOM:1
		},
		secondary:{
			Maximus:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_2h_010_x1_demonhunter_male.png',
		flavor:'The famed warrior Maximus defeated ninety nine demons singlehandedly in the Battle of Lut Bahadur, and imbued his sword with their demonic power.'
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
		primary:{
			Dmg_Poison:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Scourge:{
				min:[20,1800],
				max:[45,2000]
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_2h_004_x1_demonhunter_male.png',
		flavor:'A weapon of such evil visage is rarely seen outside the confines of the Burning Hells.'
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
		primary:{
			WEAPON_DAMAGE:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			Stalgard:{
				min:550,
				max:700
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_2h_101_x1_demonhunter_male.png',
		flavor:'Stalgard was a bloodthirsty warlord whose forces briefly controlled the trade routes of the southern plains. He was famed for engaging in duels with the best swordsman of any caravan who dared pass through his territory, offering to let it proceed unmolested if its champion triumphed. Of course, he was equally famed for cheating if he began to lose said duels.'
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
		primary:{
			Dmg_Black:null,
			MAIN:null,
			PercLife:{
				min:9,
				max:16
			},
			RANDOM:2
		},
		secondary:{
			IgnoreDura:null
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_2h_001_x1_demonhunter_male.png',
		flavor:'The most ancient and revered of all greatswords.'
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
		primary:{
			Dmg_Holy:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			BlindHit:{
				min:200,
				max:400
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_2h_008_x1_demonhunter_male.png',
		flavor:'Forged by the finest smiths in Caldeum to commemorate the first emperor Hakan\'s ascension to the throne.'
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
		primary:{
			Dmg_Black:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			BonusXp:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_2h_002_x1_demonhunter_male.png',
		flavor:'Longsword favored by Heuerman and the loyalists during the Entsteig Rebellion.'
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
		primary:{
			Dmg_Black:null,
			MAIN:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_2h_003_x1_demonhunter_male.png',
		flavor:'Brandished by the demon Draorm at the Fifth Battle of the Diamond Gates.'
	}
];

module.exports = twohand;