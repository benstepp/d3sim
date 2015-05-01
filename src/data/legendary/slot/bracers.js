var bracers = [
	{
		name: "Ancient Parthan Defenders",
		type: "Bracers",
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
			RANDOM:3
		},
		secondary:{
			ParthanDefenders:{
				min:9,
				max:12
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_102_x1_demonhunter_male.png',
		flavor:'These bracers were first worn in the distant past by members of the Partha Guard. Though musty from age, they retain power that has protected the city for centuries.'
	},
	{
		name:"Aughild's Search",
		type:"Bracers",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:72,vc:7,fs:2,db:4
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
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_009_x1_demonhunter_male.png',
		flavor:'Aughild had fifty demands that had to be met before he would spare the lives of the nobles. Those demands are written in the wrappings of these bracers.'
	},
	{
		name: "Custerian Wristguards",
		type: "Bracers",
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
			Custerian:null,
			GoldFind:null
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_107_x1_demonhunter_male.png',
		flavor:'"In ancient times, there lived a strange race of people—the Custerians. No one knows who they were, or what they were doing, but their legacy remains beaten into the very metal of these wristguards." —Yuan, wise man of Tufnyl'
	},
	{
		name:"Demon's Animus",
		type:"Bracers",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:72,vc:7,fs:2,db:4
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
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_011_x1_demonhunter_male.png',
		flavor:'Sulam met an unfortunate end when he tried to harvest the flesh of a demon that was not actually dead. He was never able to complete this, the last piece of his set. Fortunately, he left the plans for its construction.'
	},
	{
		name:"Drakon's Lesson",
		type:"Bracers",
		weight:100,
		hc:false,
		season:false,
		smartLoot: ["Crusader"],
		primary:{
			Strength:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			Drakon:{
				min:150,
				max:200
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_bracer_110_demonhunter_male.png',
		flavor:'The Elder Crusader Drakon believed in precision, and trained his apprentice to strike fewer targets, but with more power. "Would you rather face ten opponents who are slightly injured? Or seven healthy opponents, who are distracted by the three corpses at your feet?"'
	},
	{
		name:"Guardian's Aversion",
		type:"Bracers",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:72,vc:7,fs:2,db:4
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
		set:'Guardian\'s Jeopardy',
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_010_x1_demonhunter_male.png',
		flavor:'The enigmatic sorcerer known only as the Guardian was convinced the world would one day turn against magic users, and he prepared himself accordingly.'
	},
	{
		name: "Gungdo Gear",
		type: "Bracers",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			ELEMENTAL:null,
			RANDOM:2,
		},
		secondary:{
			Gungdo:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_bracer_006_demonhunter_male.png',
		flavor:'"Cover your wrists in righteousness that you may strike with the will of the gods." —Tenets of the Veradani'
	},
	{
		name: "Krelm's Buff Bracers",
		type: "Bracers",
		weight: 100,
		hc: false,
		season: true,
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
			KrelmBracer:null,
			RANDOM:1
		},
		set:'Krelm\'s Buff Bulwark',
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_set_02_x1_demonhunter_male.png',
		flavor:'“Twas hitherto eons past from whence Krelm the Immodest didst thitherward dash forth upon the Blazing Wastes clad only in his bogodile skin belt and bracers to face the loathsome Oglak beast and slew him thence mightily with nigh but his bare hands thereupon.” -Excerpt from Stories Meant to Frighten Small Children'
	},
		{
		name:"Kethyes' Splint",
		type:"Bracers",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:25,ad:72,vc:7,fs:2
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
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_001_x1_demonhunter_male.png',
		flavor:'"Her arrows spent and bow snapped, she advanced into a cloud of enemy spears as they fell upon her cohort, turning them aside and throwing them back in kind." —The Amazon Princess'
	},
	{
		name: "Lacuni Prowlers",
		type: "Bracers",
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
			AttackSpeed:{
				min:5,
				max:6
			},
			MoveSpeed:{
				min:10,
				max:12
			},
			RANDOM:1
		},
		secondary:{
			Thorns:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_005_x1_demonhunter_male.png',
		flavor:'The savage fierceness of the lacuni is unrivaled in all of Sanctuary.'
	},
	{
		name: "Nemesis Bracers",
		type: "Bracers",
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
			MAIN:1,
			RANDOM:3
		},
		secondary:{
			Nemesis:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_106_x1_demonhunter_male.png',
		flavor:'Wear these armguards at your own risk. Only for the heartiest of adventurers.'
	},
	{
		name: "Promise of Glory",
		type: "Bracers",
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
			PromiseOfGlory:{
				min:4,
				max:6
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_002_x1_demonhunter_male.png',
		flavor:'Lost and found again through the ages, these bracers bear the names of all who have worn them. Each one found great glory, but not all survived to reap the rewards.'
	},
	{
		name:"Ranslor's Folly",
		type:"Bracers",
		weight:100,
		hc:false,
		season:true,
		smartLoot:[
			"Wizard"
		],
		primary:{
			Intelligence:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			Ranslor:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_108_x1_demonhunter_male.png',
		flavor:'Ranslor, the chief crafter to the High Vizjerei, was concerned that the power contained within these bracers would prove too much for even the most seasoned warrior, so he scoured waterfront taverns for unfortunate souls to test them. After several catastrophic failures, he was so certain he had solved the problem he tried them himself. The bracers were found by his assistant in a pile of ash.'
	},
	{
		name:"Reaper's Wraps",
		type:"Bracers",
		weight:0,
		hc:false,
		season:false,
		smartLoot:[
			"Barbarian",
			"Crusader",
			"Demon Hunter",
			"Monk",
			"Witch Doctor",
			"Wizard"
		],
		primary:{
			RANDOM:4
		},
		secondary:{
			ReapersWraps:{
				min:25,
				max:30
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_103_x1_demonhunter_male.png',
		flavor:'"The magic emanating from these bracers is strange and unknown to us. Prior to their discovery, it was thought impossible to utilize the powers that grant one health to also regenerate one\'s might. Their very existence forces us to reconsider some of our basic understandings of the nature of magic." —Archmage Valthek'
	},
	{
		name: "Shackles of the Invoker",
		type: "Bracers",
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
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_set_12_x1_demonhunter_male.png',
		flavor:'Each of these bracers is charred and scored with gouges, as if whoever once wore the armor had tried desperately to cast it off.'
	},
	{
		name: "Slave Bonds",
		type: "Bracers",
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
			LifeAfterKill:{
				min:2083,
				max:4251
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_003_104_demonhunter_male.png',
		flavor:'Broken chains still dangle from these heavy iron shackles.'
	},
	{
		name:"Spirit Guards",
		type:"Bracers",
		weight:100,
		hc:false,
		season:true,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dexterity:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			SpiritGuard:{
				min:30,
				max:40
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_bracer_109_demonhunter_male.png',
		flavor:'The Patriarchs say that when the spirit waxes, the dangers of this world wane.'
	},
	{
		name: "Steady Strikers",
		type: "Bracers",
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
			AttackSpeed:{
				min:5,
				max:6
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_004_x1_demonhunter_male.png',
		flavor:'You need only intend to strike your target, and your hands will wield the weapon with the confidence of a seasoned veteran.'
	},
	{
		name: "Strongarm Bracers",
		type: "Bracers",
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
			Vitality:null,
			CritChance:null,
			RANDOM:1
		},
		secondary:{
			Strongarm:{
				min:20,
				max:30
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_007_x1_demonhunter_male.png',
		flavor:'A warrior wearing bracers made of Skartaran metal can best monsters twice his size.'
	},
	{
		name: "Trag'Oul Coils",
		type: "Bracers",
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
			Tragoul:{
				min:45,
				max:60
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_104_x1_demonhunter_male.png',
		flavor:'"The guardian shall ever maintain his eternal watch over those who serve and protect the balance." —Excerpt from the Books of Kalan'
	},
	{
		name: "Warzechian Armguards",
		type: "Bracers",
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
			PickupRadius:null,
			Warzechian:null
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_bracer_101_x1_demonhunter_male.png',
		flavor:'"After a long search through the eastern lands, the noble leaders of House Chien chose the Artoun Clan for their personal guard. These loyal protectors are easily recognized by the distinctive armguards they wear out of pride for their service." —Abd al-Hazir, The Xiansai Chronicles'
	}
];

module.exports = bracers;