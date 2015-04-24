var onehand = [
	{
		name: "Flesh Tearer",
		type: "Axe",
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
			Bleed:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_axe_1h_001_x1_demonhunter_male.png',
		flavor:'The edges seem to become more jagged with each strike.'
	},
	{
		name: "Genzaniku",
		type: "Axe",
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
			RANDOM:3
		},
		secondary:{
			Genzaniku:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_axe_1h_003_x1_demonhunter_male.png',
		flavor:'"In the language of the fallen, \'genzaniku\' means slayer of humans." —Deckard Cain'
	},
	{
		name: "Hack",
		type: "Axe",
		weight: 50,
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
			Socket:null,
			RANDOM:2
		},
		secondary:{
			HackAxe:{
				min:75,
				max:100
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_axe_1h_103_x1_demonhunter_male.png',
		flavor:'This crude, makeshift axe was made from skeletal remains picked out of the Desolate Sands. Despite its primitive origins, the weapon is extremely effective, perhaps as a result of residual magics that seeped into its components since the time of area\'s devastation during the Mage Clan Wars.'
	},
	{
		name: "The Burning Axe of Sankis",
		type: "Axe",
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
			RANDOM:2
		},
		secondary:{
			Sankis:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_axe_1h_007_x1_demonhunter_male.png',
		flavor:'An obsidian axe wielded by the mad Sankis as he turned on his own men inside their fortress. Even as he burned to death himself, he would not stop his attacks on those he had once ruled.'
	},
	{
		name: "The Butcher's Sickle",
		type: "Axe",
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
			RANDOM:3
		},
		secondary:{
			Sickle:{
				min:20,
				max:25
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_axe_1h_006_x1_demonhunter_male.png',
		flavor:'Used by the Butcher demon to snare and drag victims closer that he may feed on their flesh.'
	},
	{
		name: "Anessazi Edge",
		type: "Ceremonial Knife",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Intelligence:null,
			RANDOM:2
		},
		secondary:{
			Anessazi:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_ceremonialdagger_001_x1_demonhunter_male.png',
		flavor:'The secrets of this blade are known only to the artisans of the Silzer Plains.'
	},
	{
		name: "Deadly Rebirth",
		type: "Ceremonial Knife",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Dmg_Arcane:null,
			Intelligence:null,
			ManaRegen:null,
			RANDOM:1
		},
		secondary:{
			BonusXp:null,
			DeadlyRebirth:null
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_ceremonialdagger_003_x1_demonhunter_male.png',
		flavor:'The restless dead are drawn up from the earth by the presence of this blade.'
	},
	{
		name: "Last Breath",
		type: "Ceremonial Knife",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Intelligence:null,
			LastBreath:{
				min:15,
				max:20
			},
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_ceremonialdagger_008_x1_demonhunter_male.png',
		flavor:'Even an immortal could be felled by the power of this blade.'
	},
	{
		name: "Manajuma's Carving Knife",
		type: "Ceremonial Knife",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			Dmg_Poison:null,
			Intelligence:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Manajuma\'s Way',
		image:'//media.blizzard.com/d3/icons/items/large/unique_ceremonialdagger_009_x1_demonhunter_male.png',
		flavor:'Clan chief Manajuma\'s sacrificial knife.'
	},
	{
		name: "Rhen'ho Flayer",
		type: "Ceremonial Knife",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Intelligence:null,
			RANDOM:2
		},
		secondary:{
			Rhenho:null,
			RANDOM:1
		},
		image:'http://media.blizzard.com/d3/icons/items/large/unique_ceremonialdagger_102_x1_demonhunter_male.png',
		flavor:'"Many said training exploding toads was impossible, but Rhen\'ho only laughed. He then proceeded to teach the toads how to explode twice, for he truly believed that one needs only to see the impossible clearly in one\'s mind to make it real." —Minacal of the Tribe of the Hidden Valley'
	},
	{
		name: "Sacred Harvester",
		type: "Ceremonial Knife",
		weight: 50,
		hc: false,
		season: true,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Intelligence:null,
			RANDOM:2
		},
		secondary:{
			SacredHarv:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p1_ceremonialdagger_norm_unique_01_demonhunter_male.png',
		flavor:'“To expand one’s mind with the breath of others is not a thing to be taken lightly. Without the proper training or discipline it soon leads to madness.” -Elder Bayati, Tribe of the Five Hills'
	},
	{
		name: "Starmetal Kukri",
		type: "Ceremonial Knife",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Intelligence:null,
			CritDamage:{
				min:31,
				max:35
			},
			RANDOM:1
		},
		secondary:{
			Starmetal:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_ceremonialdagger_101_x1_demonhunter_male.png',
		flavor:'"Szab the necromancer was the first outsider to meet the people of the Teganze. He attempted to explain the philosophy of the necromancers to them, but the language barrier proved to be too great—instead of relaying his philosophical beliefs, he told them he was Trag\'Oul, and that he lived among the stars." —Abd-al Hazir'
	},
	{
		name: "The Dagger of Darts",
		type: "Ceremonial Knife",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Intelligence:null,
			RANDOM:2
		},
		secondary:{
			DartsDagger:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p1_ceremonialdagger_norm_unique_02_demonhunter_male.png',
		flavor:'Nothing infuriates a fetish more than ineffectual darts.'
	},
	{
		name: "The Gidbinn",
		type: "Ceremonial Knife",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Intelligence:null,
			ManaRegen:null,
			RANDOM:1
		},
		secondary:{
			Gidbinn:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_ceremonialdagger_002_x1_demonhunter_male.png',
		flavor:'A powerful, holy artifact of the Skatsim religion. It was last seen in Kurast.'
	},
	{
		name: "The Spider Queen's Grasp",
		type: "Ceremonial Knife",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Witch Doctor"
		],
		primary:{
			WEAPON_DAMAGE:null,
			Intelligence:null,
			ManaRegen:null,
			RANDOM:1
		},
		secondary:{
			SpiderQueen:{
				min:60,
				max:80
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_ceremonialdagger_004_x1_demonhunter_male.png',
		flavor:'The blessing of Araneae drips from this blade.'
	},
	{
		name:"Eun-jang-do",
		type:"Dagger",
		weight:50,
		hc:false,
		season:false,
		smartLoot:[
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			Dmg_Cold_dagger:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			Eunjang:{
				min:17,
				max:20
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_dagger_104_x1_demonhunter_male.png',
		flavor:'These Xiansai daggers of silver and steel were often carried by Sisters of the Sightless Eye, engraved with oaths of fidelity to their cause. Enemies who closed quickly believed themselves safe from the Sister’s bow. And they were, but not from the Eun-jang-do.'
	},
	{
		name: "Kill",
		type: "Dagger",
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
			Dmg_Poison_dagger:null,
			AttackSpeed:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_dagger_002_x1_demonhunter_male.png',
		flavor:'"In their last moments, people show you who they really are..." —Unknown'
	},
	{
		name: "Pig Sticker",
		type: "Dagger",
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
			BeastDamage:{
				min:15,
				max:30
			},
			HumanDamage:{
				min:15,
				max:30
			},
			PigSticker:null
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_dagger_007_x1_demonhunter_male.png',
		flavor:'Slaughters man and beast alike.'
	},
	{
		name: "The Barber",
		type: "Dagger",
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
			FlatDamage:null,
			CritDamage:{
				min:20,
				max:25
			}
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_dagger_003_x1_demonhunter_male.png',
		flavor:'A precision instrument for a master of the blade.'
	},
	{
		name: "Wizardspike",
		type: "Dagger",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{
			WEAPON_DAMAGE:null,
			RANDOM:3
		},
		secondary:{
			Wizardspike:{
				min:20,
				max:25
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_dagger_010_x1_210_demonhunter_male.png',
		flavor:'The energies of forbidden magics course through this blade.'
	},
	{
		name: "Crystal Fist",
		type: "Fist Weapon",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dmg_Holy:null,
			FlatDamage:null,
			Dexterity:null,
			RANDOM:1
		},
		secondary:{
			IgnoreDura:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_fist_008_x1_demonhunter_male.png',
		flavor:'Indestructible, pure and clear. So the body follows the mind.'
	},
	{
		name: "Fleshrake",
		type: "Fist Weapon",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dmg_Black:null,
			Dexterity:null,
			LifePerSpirit:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_fist_007_x1_demonhunter_male.png',
		flavor:'The very sight of this weapon is enough to settle disputes that would otherwise lead to war.'
	},
	{
		name: "Jawbreaker",
		type: "Fist Weapon",
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
			Jawbreaker:{
				min:30,
				max:35
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_fist_101_x1_demonhunter_male.png',
		flavor:'Those who speak wicked words must be silenced.'
	},
	{
		name: "Logan's Claw",
		type: "Fist Weapon",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dmg_Poison:null,
			Dexterity:null,
			LifePerHit:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_fist_005_x1_demonhunter_male.png',
		flavor:'Bearing this weapon can release the feral beast within.'
	},
	{
		name: "Rabid Strike",
		type: "Fist Weapon",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dmg_Poison:null,
			Dexterity:null,
			CritDamage:{
				min:20,
				max:25
			},
			RANDOM:1
		},
		secondary:{
			SlowHit:{
				min:150,
				max:250
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_fist_003_x1_demonhunter_male.png',
		flavor:'Those who survive the winter fever retain the strength of the madness it brings.'
	},
	{
		name: "Scarbringer",
		type: "Fist Weapon",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dmg_Holy:null,
			Bleed:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_fist_013_x1_demonhunter_male.png',
		flavor:'Each scar left in its wake is a sin forgiven.'
	},
	{
		name: "Shenlong's Fist of Legend",
		type: "Fist Weapon",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dmg_Lightning:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Shenlong\'s Spirit',
		image:'//media.blizzard.com/d3/icons/items/large/unique_fist_011_x1_demonhunter_male.png',
		flavor:'Many claim Shenlong is but a myth. Those who have felt the unrelenting fury of his wrath would argue otherwise.'
	},
	{
		name: "Shenlong's Relentless Assault",
		type: "Fist Weapon",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dmg_Lightning:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Shenlong\'s Spirit',
		image:'//media.blizzard.com/d3/icons/items/large/unique_fist_010_x1_demonhunter_male.png',
		flavor:'"Your blows must flow from one to the next in an endless succession to overwhelm a superior foe." —Master Shenlong'
	},
	{
		name: "Sledge Fist",
		type: "Fist Weapon",
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
			StunHit:{
				min:300,
				max:500
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_fist_012_x1_demonhunter_male.png',
		flavor:'"The Mighty Bear brought low the great house of the guild with a single blow. Their greed was laid bare in the ruination." —Chronicles of the North'
	},
	{
		name: "The Fist of Az'Turrasq",
		type: "Fist Weapon",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			WEAPON_DAMAGE:null,
			SpiritRegen:null,
			RANDOM:2
		},
		secondary:{
			AzTurrasq:{
				min:75,
				max:100
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_fist_009_x1_demonhunter_male.png',
		flavor:'The corrupt magistrate of Az\'Turrasq punished petty crime at a whim in the name of order. Innocent and guilty alike were crippled or killed by the hundreds during his terrible reign.'
	},
	{
		name: "Vengeful Wind",
		type: "Fist Weapon",
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
			VengefulWind:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p1_fistweapon_norm_unique_02_demonhunter_male.png',
		flavor:'"Some learned people say that evil cannot be overcome through violence. I say there is no other way." -Akyev the Unyielding'
	},
	{
		name: "Won Khim Lau",
		type: "Fist Weapon",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk"
		],
		primary:{
			Dmg_Lightning:null,
			LightningDamage:{
				min:15,
				max:25
			},
			Dexterity:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_fist_006_x1_demonhunter_male.png',
		flavor:'Directs the wayward\'s gaze to the heavens that he may benefit from the glory of the gods.'
	},
	{
		name: "Darklight",
		type: "Flail",
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
		name: "Gyrfalcon's Foote",
		type: "Flail",
		weight: 25,
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
		name: "Inviolable Faith",
		type: "Flail",
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
		name: "Justinian's Mercy",
		type: "Flail",
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
		name: "Kassar's Retribution",
		type: "Flail",
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
		name: "Swiftmount",
		type: "Flail",
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
		name: "Balefire Caster",
		type: "Hand Crossbow",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Calamity",
		type: "Hand Crossbow",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Danetta's Revenge",
		type: "Hand Crossbow",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Danetta's Spite",
		type: "Hand Crossbow",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Dawn",
		type: "Hand Crossbow",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Izzuccob",
		type: "Hand Crossbow",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "K'mar Tenclip",
		type: "Hand Crossbow",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Natalya's Slayer",
		type: "Hand Crossbow",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Demon Hunter"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Echoing Fury",
		type: "Mace",
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
		name: "Jace's Hammer of Vigilance",
		type: "Mace",
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
		name: "Nailbiter",
		type: "Mace",
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
		name: "Neanderthal",
		type: "Mace",
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
		name: "Nutcracker",
		type: "Mace",
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
		name: "Odyn Son",
		type: "Mace",
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
		name: "Solanium",
		type: "Mace",
		weight: 50,
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
		name: "Sun Keeper",
		type: "Mace",
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
		name: "Telranden's Hand",
		type: "Mace",
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
		name: "Ambo's Pride",
		type: "Mighty Weapon",
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
		name: "Blade of the Warlord",
		type: "Mighty Weapon",
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
		name: "Bul-Kathos's Solemn Vow",
		type: "Mighty Weapon",
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
		name: "Bul-Kathos's Warrior Blood",
		type: "Mighty Weapon",
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
		name: "Fjord Cutter",
		type: "Mighty Weapon",
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
		name: "Remorseless",
		type: "Mighty Weapon",
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
		name: "Akanesh, the Herald of Righteousness",
		type: "Spear",
		weight: 100,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Crusader"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Arreat's Law",
		type: "Spear",
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
		name: "Empyrean Messenger",
		type: "Spear",
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
		name: "Scrimshaw",
		type: "Spear",
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
		name: "The Three Hundredth Spear",
		type: "Spear",
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
		name: "Azurewrath",
		type: "Sword",
		weight: 100,
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
		name: "Devil Tongue",
		type: "Sword",
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
		name: "Doombringer",
		type: "Sword",
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
		name: "Exarian",
		type: "Sword",
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
		name: "Fulminator",
		type: "Sword",
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
		name: "Gift of Silaria",
		type: "Sword",
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
		name: "Little Rogue",
		type: "Sword",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Monster Hunter",
		type: "Sword",
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
		name: "Rimeheart",
		type: "Sword",
		weight: 25,
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
		name: "Sever",
		type: "Sword",
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
		name: "Shard of Hate",
		type: "Sword",
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
		name: "Skycutter",
		type: "Sword",
		weight: 50,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Crusader"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "The Ancient Bonesaber of Zumakalis",
		type: "Sword",
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
		name: "The Slanderer",
		type: "Sword",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Monk",
			"Barbarian"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	},
	{
		name: "Thunderfury, Blessed Blade of the Windseeker",
		type: "Sword",
		weight: 50,
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
		name: "Wildwood",
		type: "Sword",
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
		name: "Aether Walker",
		type: "Wand",
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
		name: "Blackhand Key",
		type: "Wand",
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
		name: "Chantodo's Will",
		type: "Wand",
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
		name: "Fragment of Destiny",
		type: "Wand",
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
		name: "Gesture of Orpheus",
		type: "Wand",
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
		name: "Serpent's Sparker",
		type: "Wand",
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
		name: "Slorak's Madness",
		type: "Wand",
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
		name: "Starfire",
		type: "Wand",
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
		name: "Wand of Woh",
		type: "Wand",
		weight: 25,
		hc: false,
		season: false,
		smartLoot: [
			"Wizard"
		],
		primary:{},
		secondary:{},
		image:'',
		flavor:''
	}
];

module.exports = onehand;