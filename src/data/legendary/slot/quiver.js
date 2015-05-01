var quiver = [
	{
		name:"Archfiend Arrows",
		type:"Quiver",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2
		},
		smartLoot:[
			"Demon Hunter"
		],
		primary:{
			AttackSpeed:null,
			CritChance:null,
			EliteDamage:{
				min:5,
				max:8
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_quiver_003_x1_demonhunter_male.png',
		flavor:'Very rare. Made from bones harvested from a live demon—not an easy thing to do.'
	},
	{
		name: "Bombadier's Rucksack",
		type: "Quiver",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			AttackSpeed:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			Rucksack:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_quiver_102_x1_demonhunter_male.png',
		flavor:'Designed by a watchmaker\'s apprentice turned demon hunter, this rucksack makes use of its maker\'s knowledge of clockworks to greatly miniaturize the turret mechanism, allowing its owner to field more of the devices without the case being any more heavy or cumbersome than an ordinary quiver.'
	},
	{
		name: "Dead Man's Legacy",
		type: "Quiver",
		weight: 100,
		hc: false,
		season: true,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			AttackSpeed:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			DeadMans:{
				min:50,
				max:60
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_quiver_007_demonhunter_male.png',
		flavor:'"Marteks would not flee before their superior numbers. He knew the time of his death was at hand. He stood his ground, loosing arrow after arrow as he was slowly overwhelmed." —Tales of the Wasteland'
	},
	{
		name: "Emimei's Duffel",
		type: "Quiver",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			AttackSpeed:null,
			RANDOM:3
		},
		secondary:{
			Emimei:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_quiver_103_x1_demonhunter_male.png',
		flavor:'"Emimei was rumored to be the offspring of the famed fletcher Cirri. Possibly even more talented than her father, she discovered a way to integrate a superior ignition system into demon hunter bola weapons. Exert enough pressure on a bola\'s spike and the explosive charge within triggers, causing the bola to detonate upon impact with a target." —The Craft of War by Diadra the Scholar'
	},
	{
		name: "Fletcher's Pride",
		type: "Quiver",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			AttackSpeed:null,
			CostReduc:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_quiver_006_x1_demonhunter_male.png',
		flavor:'The quality of these arrows is stunning. Even the fletchers of Jasender would be hard-pressed to match it.'
	},
	{
		name: "Holy Point Shot",
		type: "Quiver",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			AttackSpeed:null,
			ELEMENTAL:{
				min:5,
				max:10
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_quiver_004_x1_demonhunter_male.png',
		flavor:'Crafted by the Wandering Priest of the Low Hills during an ecstatic trance, this quiver bestows a blessing on the arrows it carries.'
	},
	{
		name: "Meticulous Bolts",
		type: "Quiver",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			AttackSpeed:null,
			RANDOM:3
		},
		secondary:{
			Meticulous:{
				min:30,
				max:40
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_quiver_001_p1_demonhunter_male.png',
		flavor:'"We must take time to enjoy the good things in life. The death throes of demons, for instance." -Bytor the Hunter'
	},
	{
		name: "Sin Seekers",
		type: "Quiver",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			AttackSpeed:null,
			CritChance:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_quiver_002_x1_demonhunter_male.png',
		flavor:'Bolts pulled from this quiver instinctively seek out demonic blood.'
	},
	{
		name: "Spines of Seething Hatred",
		type: "Quiver",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			AttackSpeed:null,
			RANDOM:3
		},
		secondary:{
			SeethingHatred:{
				min:3,
				max:4
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_quiver_005_p1_demonhunter_male.png',
		flavor:'Seeing their enemies flayed serves only to fuel the thirst for revenge that burns within a demon hunter’s breast.'
	},
	{
		name: "The Ninth Cirri Satchel",
		type: "Quiver",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{
			Dexterity:null,
			AttackSpeed:null,
			RANDOM:3
		},
		secondary:{
			NinthCirri:{
				min:20,
				max:25
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_quiver_101_x1_demonhunter_male.png',
		flavor:'"This satchel is cleverly designed so that the heads of arrows placed within fit into slots that serve as whetstones, sharpening the edges whenever an arrow is inserted or removed. Cirri\'s artistry remained unrecognized in his lifetime, so that only this quiver, numbered nine on the interior, survived to the present." —The Craft of War by Diadra the Scholar'
	}
];

module.exports = quiver;