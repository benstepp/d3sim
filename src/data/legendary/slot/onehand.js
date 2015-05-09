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
		name:"Hallowed Breach",
		type:"Axe",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2,db:5
		},
		smartLoot:[
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			Dmg_Holy:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		set:'Hallowed Protectors',
		image:'//media.blizzard.com/d3/icons/items/large/unique_axe_1h_013_x1_demonhunter_male.png',
		flavor:'This axe derives its awesome and majestic power from the High Heavens.'
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
		name:"Utar's Roar",
		type:"Axe",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2,db:4
		},
		smartLoot:[
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			Dmg_Cold:null,
			ColdDamage:{
				min:15,
				max:20
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_axe_1h_004_x1_demonhunter_male.png',
		flavor:'"Utar\'s mighty blade was colder than the bitterest winter chill, hewn from the never-melting ice of the summit of Mount Paolarr." —Chronicles of the North'
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
		name:"Hallowed Sufferance",
		type:"Ceremonial Knife",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2,db:5
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
			Dmg_Holy:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		set:'Hallowed Protectors',
		image:'//media.blizzard.com/d3/icons/items/large/unique_ceremonialdagger_011_x1_demonhunter_male.png',
		flavor:'An angelic weapon re-forged to suit the needs of a hero wielding the powers of the nephalem.'
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
		name:"Living Umbral Oath",
		type:"Ceremonial Knife",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2
		},
		smartLoot:[
			"Witch Doctor"
		],
		primary:{
			Dmg_Black:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_ceremonialdagger_006_x1_demonhunter_male.png',
		flavor:'The Umbral Oath exists in both the living and spirit worlds.'
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
		name:"Blood-Magic Edge",
		type:"Dagger",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2
		},
		smartLoot:[
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			Dmg_Black_dagger:null,
			AttackSpeed:null,
			RANDOM:2
		},
		secondary:{
			BloodMagicEdge:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_dagger_006_x1_demonhunter_male.png',
		flavor:'The taste of blood unleashes a magic few can control.'
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
		name:"Demon Claw",
		type:"Fist Weapon",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2
		},
		smartLoot:[
			"Monk"
		],
		primary:{
			Dmg_Fire:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_fist_004_x1_demonhunter_male.png',
		flavor:'The only student to survive the Demon Road returned with her hand cut off. A smoldering claw was sewn in its place.'
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
		name:"Hallowed Hold",
		type:"Fist Weapon",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2,db:5
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
			Dmg_Holy:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		set:'Hallowed Protectors',
		image:'//media.blizzard.com/d3/icons/items/large/unique_fist_015_x1_demonhunter_male.png',
		flavor:'An angelic weapon re-forged to suit the needs of a hero wielding the powers of the nephalem.'
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
		primary:{
			Dmg_Lightning:null,
			Strength:null,
			RANDOM:2
		},
		secondary:{
			Darklight:{
				min:45,
				max:60
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_flail_1h_106_x1_demonhunter_male.png',
		flavor:'The cold-tempered steel of this weapon cradles a mote of pale light. Ancient beyond measure, its creator and original purpose is unknown, but the flail is now revered by the crusaders as a symbol for the role they play in the world: a light to pierce the darkness.'
	},
	{
		name:"Golden Scourge",
		type:"Flail",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2,db:4
		},
		smartLoot:[
			"Crusader"
		],
		primary:{
			Dmg_Holy:null,
			HolyDamage:{
				min:15,
				max:20
			},
			RANDOM:2
		},
		secondary:{
			GoldenScourge:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_flail_1h_101_x1_demonhunter_male.png',
		flavor:'Originally wielded by the crusader Anajinn, the Golden Scourge has felled numerous enemies of the Light. At one point, Anajinn\'s apprentice tried to count them all, and determined that their corpses would span the distance from Kurast to Westmarch—twice.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Strength:null,
			RANDOM:2
		},
		secondary:{
			Gyrfalcon:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_flail_1h_105_x1_demonhunter_male.png',
		flavor:'Clearly a weapon of great renown, this flail once belonged to Sir Tomas, the Gyrfalcon. This knight was heralded for his bravery and speed, and he took the gyrfalcon as his coat of arms, soaring to victory many times beneath its wings.'
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
		primary:{
			Dmg_Holy:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Inviolable:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_flail_1h_107_x1_demonhunter_male.png',
		flavor:'Such a heavy, unwieldy object would ordinarily be impractical for the battlefield. However, this weapon has been blessed to slam into its targets with unusual force-wrecking doors, bodies, and even barricades—while also offering superior protection to the faithful.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Justinian:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_flail_1h_102_x1_demonhunter_male.png',
		flavor:'Passed down among the executioners of the Justinian dynasty, this flail was lost during the chaos of the Cartolus Insurrection. Peasants stormed the palace, grabbing anything they could find, and killing the more oppressive members of the royal retinue. It didn\'t take them long to find the executioners.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Strength:null,
			RANDOM:2
		},
		secondary:{
			Kassar:{
				min:15,
				max:20
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_flail_1h_104_x1_demonhunter_male.png',
		flavor:'"Crusaders must be stronger than other warriors. We cannot trudge homeward after a victory, instead we return to the open road. We bend into the wind, the rain, the snow. Our search will not end until our faith is redeemed." —Kassar'
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
		primary:{
			WEAPON_DAMAGE:null,
			Strength:null,
			RANDOM:2
		},
		secondary:{
			Swiftmount:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_flail_1h_103_x1_demonhunter_male.png',
		flavor:'Bearers of this flail ride like the wind when they call upon their celestial steeds. This fact may cause extreme envy when used around horseless nephalem.'
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
		primary:{
			Dmg_Fire_hc:null,
			FireDamage:{
				min:15,
				max:20
			},
			Dexterity:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_handxbow_004_p1_demonhunter_male.png',
		flavor:'"Use fire to fight fire, I always say." —Demon Hunter Raykal'
	},
	{
		name:"Blitzbolter",
		type:"Hand Crossbow",
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
			Dmg_Holy_hc:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_handxbow_006_x1_demonhunter_male.png',
		flavor:'Good for putting the dead back in the ground.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			Calamity:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_handxbow_012_x1_demonhunter_male.png',
		flavor:'Slender and refined, this weapon is the antithesis of a traditional, rough-hewn and unwieldy crossbow. Obviously the result of loving craftsmanship by a master armsmaker.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			DanettaR:null,
			RANDOM:1
		},
		set:'Danetta\'s Hatred',
		image:'//media.blizzard.com/d3/icons/items/large/unique_handxbow_002_x1_demonhunter_male.png',
		flavor:'Danetta\'s vengeance is written in the corpses of the spawn of Hell.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			DanettaS:null,
			RANDOM:1
		},
		set:'Danetta\'s Hatred',
		image:'//media.blizzard.com/d3/icons/items/large/unique_handxbow_001_x1_demonhunter_male.png',
		flavor:'The creed of the demon hunters was born from the blood of Danetta\'s people.'
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
		primary:{
			Dmg_Holy_hc:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			StunHit:{
				min:10,
				max:50
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_handxbow_007_x1_demonhunter_male.png',
		flavor:'Energy that shimmers in the morning light leaps from the surface of this crossbow.'
	},
	{
		name:"Hallowed Condemnation",
		type:"Hand Crossbow",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2,db:5
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
			Dmg_Holy_hc:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		set:'Hallowed Protectors',
		image:'//media.blizzard.com/d3/icons/items/large/unique_handxbow_016_x1_demonhunter_male.png',
		flavor:'An angelic weapon re-forged to suit the needs of a hero wielding the powers of the nephalem.'
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
		primary:{
			Dmg_Black_hc:null,
			Dexterity:null,
			RANDOM:2
		},
		secondary:{
			MaxDisc:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_handxbow_005_x1_demonhunter_male.png',
		flavor:'What fevered mind conceived of this vicious device that sends spikes hurling towards one\'s enemies at incredible speeds?'
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
		primary:{
			WEAPON_DAMAGE:null,
			Dexterity:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			Kmar:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_handxbow_101_x1_demonhunter_male.png',
		flavor:'Featuring a unique loading mechanism and clip designed in Xiansai, this hand crossbow can unleash an entire volley of bolts before it needs to be reloaded, making it ideal for maintaining sustained fire while in motion.'
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
		primary:{
			Dmg_Cold_hc:null,
			FlatDamage:null,
			Dexterity:null,
			RainOfVengeanceDmg:{
				min:20,
				max:25
			},
			RANDOM:1
		},
		secondary:{
			RANDOM:1
		},
		set:'Natalya\'s Vengeance',
		image:'//media.blizzard.com/d3/icons/items/large/unique_handxbow_003_x1_demonhunter_male.png',
		flavor:'Natalya turned from the ways of the Viz-Jaq\'taar and sought redemption in the weapons of the demon hunters.'
	},
	{
		name:"Devastator",
		type:"Mace",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2,db:4
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
			FireDamage:{
				min:15,
				max:20
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_1h_009_x1_demonhunter_male.png',
		flavor:'The ground cracks and disintegrates with each strike.'
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
		primary:{
			Dmg_Black:null,
			FlatDamage:null,
			AttackSpeed:null,
			MAIN:null,
		},
		secondary:{
			FearHit:{
				min:10,
				max:20
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_1h_001_x1_demonhunter_male.png',
		flavor:'The sound of each strike instills terror in the hearts of those who hear it.'
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
		primary:{
			Dmg_Holy:null,
			BlessedHammerDmg:{
				min:15,
				max:20
			},
			RANDOM:2
		},
		secondary:{
			JaceHammer:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_1h_103_x1_demonhunter_male.png',
		flavor:'Kingsport\'s Wield Warriors was a group of paladins whose members were all famed for their mastery of their weapons of choice. Jace Adama was the leader of these holy warriors and a prodigy with the warhammer. As a reward for his aid in the defense of Eastgate Keep, Jace was gifted with this enchanted hammer, which displays a prominent eye motif of grave significance to the sisterhood based there.'
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
		primary:{
			Dmg_Black:null,
			FlatDamage:null,
			RANDOM:2
		},
		secondary:{
			Thorns:{
				min:2667,
				max:3498
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_1h_008_x1_demonhunter_male.png',
		flavor:'Simple, but effective.'
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
		primary:{
			Dmg_Black:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			Thorns:{
				min:2667,
				max:3498
			},
			BonusXp:null
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_1h_003_x1_demonhunter_male.png',
		flavor:'It\'s big. It\'s heavy. It\'s wood.'
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
		primary:{
			Dmg_Black:null,
			CritDamage:{
				min:31,
				max:35
			},
			RANDOM:2
		},
		secondary:{
			StunHit:{
				min:50,
				max:100
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_1h_005_x1_demonhunter_male.png',
		flavor:'Each strike lands with enough force to crush a boulder.'
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
		primary:{
			Dmg_Lightning:null,
			LightningDamage:{
				min:15,
				max:20
			},
			RANDOM:2
		},
		secondary:{
			OdynSon:{
				min:20,
				max:40
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_1h_002_x1_demonhunter_male.png',
		flavor:'This hammer rumbles with the sound of distant thunder.'
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
		primary:{
			Dmg_Holy:null,
			Socket:null,
			RANDOM:2
		},
		secondary:{
			Solanium:{
				min:3,
				max:4
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_1h_102_x1_demonhunter_male.png',
		flavor:'This mace once belonged to a holy man who reluctantly took up arms against a demon invasion. As a worshiper of the sun, Graham called his weapon Solanium, meaning "bearer of the sun\'s light." The longer Graham struggled against the forces of darkness, the more his faith grew infused within the mace, until the mundane object became an item of immense righteous power.'
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
		primary:{
			Dmg_Holy:null,
			MAIN:null,
			EliteDamage:{
				min:15,
				max:30
			},
			RANDOM:1
		},
		secondary:{
			GoldFind:{
				min:51,
				max:60
			},
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_1h_011_x1_demonhunter_male.png',
		flavor:'Long years before men civilized the land that would come to be known as Kurast, primitive shamans bludgeoned their human sacrifices with hellish devices.'
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
		primary:{
			Dmg_Arcane:null,
			AttackSpeed:null,
			MAIN:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mace_1h_007_x1_demonhunter_male.png',
		flavor:'As the battle between Horazon and the Warlord of Blood raged, and the walls of Viz-jun fell, Telranden led the fight against Bartuc\'s demon hordes and saved many from certain death.'
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
		primary:{
			Dmg_Black:null,
			Strength:null,
			Bleed:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mighty_1h_012_x1_demonhunter_male.png',
		flavor:'There are longswords and there are greatswords. And then there is this sword.'
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
		primary:{
			Dmg_Holy:null,
			Strength:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mighty_1h_005_x1_demonhunter_male.png',
		flavor:'Awrak led the people of the Bear tribe to a great many victories in his all-too-short life. His name is still highly revered among his people.'
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
		primary:{
			Dmg_Holy:null,
			Strength:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		set:'Bul-Kathos\'s Oath',
		image:'//media.blizzard.com/d3/icons/items/large/unique_mighty_1h_010_x1_demonhunter_male.png',
		flavor:'Bul-Kathos strode as a giant among the ancients, and was the forefather to the barbarian tribes. This sword represents the sacred vow he made to protect Mount Arreat and the Worldstone.'
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
		primary:{
			Dmg_Holy:null,
			Strength:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		set:'Bul-Kathos\'s Oath',
		image:'//media.blizzard.com/d3/icons/items/large/unique_mighty_1h_011_x1_demonhunter_male.png',
		flavor:'A barbarian knows that Bul-Kathos\'s blood runs through his veins. It is what gives him his power and binds him to his people.'
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
		primary:{
			Dmg_Cold:null,
			Strength:null,
			RANDOM:2
		},
		secondary:{
			FreezeHit:{
				min:75,
				max:100
			},
			Fjord:{
				min:20,
				max:30
			}
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mighty_1h_006_x1_demonhunter_male.png',
		flavor:'It takes a sturdy weapon to survive on the shores of the Frozen Sea.'
	},
	{
		name:"Hallowed Nemesis",
		type:"Mighty Weapon",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2,db:5
		},
		smartLoot:[
			"Barbarian",
		],
		primary:{
			Dmg_Holy:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		set:'Hallowed Protectors',
		image:'//media.blizzard.com/d3/icons/items/large/unique_mighty_1h_015_x1_demonhunter_male.png',
		flavor:'An angelic weapon re-forged to suit the needs of a hero wielding the powers of the nephalem.'
	},
	{
		name:"Night's Reaping",
		type:"Mighty Weapon",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2
		},
		smartLoot:[
			"Barbarian"
		],
		primary:{
			Dmg_Cold:null,
			PercLife:{
				min:14,
				max:18
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mighty_1h_001_x1_demonhunter_male.png',
		flavor:'The righteous must cull the corrupt from this world just as a farmer would separate the wheat from the chaff.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Strength:null,
			RANDOM:2
		},
		secondary:{
			Remorseless:{
				min:20,
				max:30
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_mighty_1h_102_x1_demonhunter_male.png',
		flavor:'Murkolt, a giant even among the Ancients, was known for many feats and qualities. Remorse was not among these. This weapon is said to embody his ethos, and some even believe it can summon him for a brief time.'
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
		primary:{
			Dmg_Holy:null,
			MAIN:null,
			HolyDamage:{
				min:15,
				max:25
			},
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spear_101_x1_demonhunter_male.png',
		flavor:'Akanesh was the favored weapon of the Grand Maester of the templar order. Immaculate and gleaming, it is said to possess the sharpest blade ever forged. That may well be true—Akanesh has cut down innumerable evils... and perhaps a few innocents as well.'
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
		primary:{
			Dmg_Black:null,
			MAIN:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spear_001_x1_demonhunter_male.png',
		flavor:'A relic from the time before the fall of Arreat.'
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
		primary:{
			Dmg_Holy:null,
			EliteDamage:{
				min:4,
				max:7
			},
			MAIN:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spear_003_x1_demonhunter_male.png',
		flavor:'This spear has seen many a battle during the Eternal Conflict.'
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
		primary:{
			Dmg_Lightning:null,
			FlatDamage:null,
			MAIN:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spear_004_x1_demonhunter_male.png',
		flavor:'The head of this spear was carved from the tusk of a great horned goliath and is decorated with fine carvings depicting the Battle of Viz-jun.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Strength:null,
			WeaponThrowDmg:{
				min:35,
				max:50
			},
			AncientSpearDmg:{
				min:35,
				max:50
			},
			RANDOM:1
		},
		secondary:{
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_spear_002_x1_demonhunter_male.png',
		flavor:'They fought against incredible odds, down to the last warrior.'
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
		primary:{
			Dmg_Cold:null,
			ColdDamage:{
				min:15,
				max:20
			},
			RANDOM:2
		},
		secondary:{
			FreezeHit:{
				min:200,
				max:250
			},
			Azurewrath:{
				min:30,
				max:40
			}
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_012_x1_demonhunter_male.png',
		flavor:'Before he fell, Izual was the bearer of the runeblade Azurewrath, an ancient sword blessed by the Song of the Arch as an instrument of the righteous.'
	},
	{
		name:"Born's Furious Wrath",
		type:"Sword",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2,db:5
		},
		smartLoot:[
			"Monk",
			"Barbarian",
			"Crusader",
			"Wizard",
			"Witch Doctor"
		],
		primary:{
			Dmg_Holy:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		set:'Born\'s Command',
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_018_x1_demonhunter_male.png',
		flavor:'Born often carried the day on nothing more than his unrelenting fury.'
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
		primary:{
			Dmg_Fire:null,
			FlatDamage:null,
			MAIN:null,
			RANDOM:1
		},
		secondary:{
			GoldFind:{
				min:51,
				max:60
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_011_x1_demonhunter_male.png',
		flavor:'The awful, intricate contours of this imposing sword are the key to its unbridled power.'
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
		primary:{
			WEAPON_DAMAGE:null,
			PhysDamage:{
				min:15,
				max:20
			},
			MAIN:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_014_x1_demonhunter_male.png',
		flavor:'A mysterious blade shall appear to the mighty warrior when his lands are ripped asunder, ushering in a new epoch from the ashes of the old.'
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
		primary:{
			WEAPON_DAMAGE:null,
			CritDamage:{
				min:31,
				max:35
			},
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_102_x1_demonhunter_male.png',
		flavor:'In days long past, the now-ruined city of Khamhalla was ruled by a wise nephalem king. The symbol of his authority was the sword Exarian, gifted to him by the Lady of Light. Legend has it that, though betrayed and gravely wounded during Khamhalla\'s fall, the king did not die, but was borne away across the sea to return when Sanctuary needs him again. The reappearance of Exarian heralds his return.'
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
		primary:{
			Dmg_Lightning:null,
			AttackSpeed:null,
			RANDOM:2
		},
		secondary:{
			Fulminator:{
				min:167,
				max:222
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_104_x1_demonhunter_male.png',
		flavor:'The Quinblades are the only surviving weapons forged by master swordsmith Morad Peerse, each a unique expression of his craft. Made during Peerse\'s Early Period, Fulminator expresses, through blinding speed and arcing lightning strikes, its maker\'s youthful exuberance and the joy he found in his craft.'
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
		primary:{
			WEAPON_DAMAGE:null,
			MoveSpeed:{
				min:10,
				max:12
			},
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_103_x1_demonhunter_male.png',
		flavor:'Silaria, a renowned explorer, traveled the length and breadth of Sanctuary in search of adventure. This sword was designed with her compact build and lethally efficient fighting style in mind, and it is reputed to imbue its wielder with Silaria\'s prowess.'
	},
	{
		name:"Griswold's Perfection",
		type:"Sword",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2
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
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_019_x1_demonhunter_male.png',
		flavor:'Griswold labored and studied for years to devise the perfect sword. Sadly, he died a horrible death before he himself could forge it.'
	},
	{
		name:'In-geom',
		type:"Sword",
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
			WEAPON_DAMAGE:null,
			FlatDamage:null,
			MAIN:null,
			RANDOM:1
		},
		secondary:{
			Ingeom:{
				min:8,
				max:10
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_113_x1_demonhunter_male.png',
		flavor:'Carried by the kings of Xiansai in antiquity, this sword was said to harness the speed and lethality of four tiger spirits. One king claimed to have “exorcised” a thousand demons from their hapless victims, using only this blade.'
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
		primary:{
			WEAPON_DAMAGE:null,
			AttackSpeed:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Istvan\'s Paired Blades',
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_set_03_x1_demonhunter_male.png',
		flavor:'"Istvan would face his enemies with the Slanderer in one hand and Little Rogue in the other. He was so swift that his opponents seldom saw the swords move before they fell." —Deckard Cain'
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
		primary:{
			Dmg_Fire:null,
			RANDOM:3
		},
		secondary:{
			BeastDamage:{
				min:9,
				max:15
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_017_x1_demonhunter_male.png',
		flavor:'Be wary when you fight monsters, lest you become one.'
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
		primary:{
			Dmg_Cold:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			Rimeheart:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_109_x1_demonhunter_male.png',
		flavor:'The Quinblades are the only surviving weapons forged by master swordsmith Morad Peerse, each a unique expression of his craft. Made during Peerse\'s Low Period, which followed the loss of his family, Rimeheart, with the blistering chill it radiates and its cold-forged iron blade, reflects both the hardening of its creator in the wake of tragedy and his consummate skill.'
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
		primary:{
			Dmg_Black:null,
			MAIN:null,
			FlatDamage:null,

		},
		secondary:{
			DemonDamage:{
				min:5,
				max:10
			},
			Sever:null
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_007_x1_demonhunter_male.png',
		flavor:'Jayesh smiled to himself. He had never seen a blade so perfectly suited for dismembering demons.'
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
		primary:{
			WEAPON_DAMAGE:null,
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			ShardHate:{
				min:200,
				max:250
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_promo_02_x1_demonhunter_male.png',
		flavor:'"Would that all the misbegotten spawn of my wayward daughter had but one heart I might plunge this through, so that they all might enjoy the gift of my pitiless ire." -Mephisto to Hephasto, Chief Weaponsmith of the Burning Hells, upon the delivery of this blade'
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
		primary:{
			Dmg_Holy:null,
			HolyDamage:{
				min:15,
				max:20
			},
			MAIN:null,
			RANDOM:2
		},
		secondary:{
			Skycutter:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_004_x1_demonhunter_male.png',
		flavor:'"The demons could not stand before the swords of the angelic Host, and their blood ran upon the fields of eternity." —The Books of Jarl, Volume III'
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
		primary:{
			Dmg_Arcane:null,
			MAIN:null,
			AttackSpeed:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_003_x1_demonhunter_male.png',
		flavor:'A mythical weapon, forged in a remote region to slay a monster of unspeakable power. The scrimshaw markings "Em Ryog Elth\'orp" are nearly worn away.'
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
		primary:{
			WEAPON_DAMAGE:null,
			MAIN:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		set:'Istvan\'s Paired Blades',
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_set_02_x1_demonhunter_male.png',
		flavor:'"Istvan was a daring swordsman known for taunting his enemies with this wicked, gleaming longsword." —Deckard Cain.'
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
		primary:{
			Dmg_Lightning:null,
			MAIN:null,
			Socket:null,
			RANDOM:1
		},
		secondary:{
			Thunderfury:{
				min:279,
				max:372
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_101_x1_demonhunter_male.png',
		flavor:'This ancient blade, imbued with unpredictable elemental energies, crossed vast universes and hidden dimensions before arriving in Sanctuary. Thunderfury seeks the hand of a true hero, one capable of safely wielding its awesome power.'
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
		primary:{
			Dmg_Poison:null,
			MAIN:null,
			FlatDamage:null,
			RANDOM:1
		},
		secondary:{
			BonusXp:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_sword_1h_002_x1_demonhunter_male.png',
		flavor:'A heavy and mysterious sword, once carried by the rangers of Wildwood.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Intelligence:null,
			RANDOM:2
		},
		secondary:{
			Aether:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p1_wand_norm_unique_01_demonhunter_male.png',
		flavor:'Virgil quickly lashed together remnants of his old broken wands and an unidentified artifact and sanctified them with his own blood, allowing him to teleport to safety and to begin formulating his revenge.'
	},
	{
		name:"Atrophy",
		type:"Wand",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ap:38,vc:30,fs:2
		},
		smartLoot:[
			"Wizard"
		],
		primary:{
			Dmg_Fire:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_wand_009_x1_demonhunter_male.png',
		flavor:'Crafted by demonic hands.'
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
		primary:{
			Dmg_Arcane:null,
			Intelligence:null,
			RANDOM:2
		},
		secondary:{
			MaxAp:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_wand_006_x1_demonhunter_male.png',
		flavor:'The spine of the urdar is known to possess unique magical properties that unlock arcane secrets for those brave enough to wield it.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Intelligence:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		set:'Chantodo\'s Resolve',
		image:'//media.blizzard.com/d3/icons/items/large/unique_wand_012_x1_demonhunter_male.png',
		flavor:'When the demons walk this world once again, so shall the power of the archmage Chantodo.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Intelligence:null,
			SpectralBladeDmg:{
				min:15,
				max:30
			},
			RANDOM:1
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_wand_010_x1_demonhunter_male.png',
		flavor:'Thought to contain a shard of the Worldstone itself.'
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
		primary:{
			WEAPON_DAMAGE:null,
			ELEMENTAL:{
				min:10,
				max:15
			},
			Intelligence:null,
			RANDOM:1
		},
		secondary:{
			Gesture:{
				min:30,
				max:40
			},
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/p2_unique_wand_002_demonhunter_male.png',
		flavor:'An old Skartaran legend tells of Orpheus rescuing his wife from the underworld using this wand.'
	},
	{
		name:"Hallowed Baton",
		type:"Wand",
		weight:0,
		hc:false,
		season:false,
		craft:{
			rp:40,ad:38,vc:30,fs:2,db:5
		},
		smartLoot:[
			"Wizard"
		],
		primary:{
			Dmg_Holy:null,
			RANDOM:3
		},
		secondary:{
			RANDOM:2
		},
		set:'Hallowed Protectors',
		image:'//media.blizzard.com/d3/icons/items/large/unique_wand_018_x1_demonhunter_male.png',
		flavor:'An angelic artifact re-forged to suit the needs of a hero wielding the powers of the nephalem.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Intelligence:null,
			RANDOM:2
		},
		secondary:{
			Serpent:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_wand_102_x1_demonhunter_male.png',
		flavor:'Legend says this wand was fashioned from a fang of the original Hydra, defeated centuries ago by the hero Bul-Kathos. The great serpent was said to spawn two heads for every one that was severed. In order to defeat it, the mighty nephalem supposedly pitched the beast into a roaring bonfire, wresting the fang loose in the process.'
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
		primary:{
			Dmg_Arcane:null,
			Intelligence:null,
			DisintegrateDmg:{
				min:15,
				max:30
			},
			RANDOM:2
		},
		secondary:{
			Slorak:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_wand_013_x1_demonhunter_male.png',
		flavor:'Slorak saved himself by channeling his madness—and his power—into this wand.'
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
		primary:{
			Dmg_Cold:null,
			Intelligence:null,
			RANDOM:2
		},
		secondary:{
			RANDOM:2
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_wand_003_x1_demonhunter_male.png',
		flavor:'Crafted around a shard that fell from the sky during the Festival of Lights.'
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
		primary:{
			WEAPON_DAMAGE:null,
			Intelligence:null,
			RANDOM:2
		},
		secondary:{
			WandWoh:null,
			RANDOM:1
		},
		image:'//media.blizzard.com/d3/icons/items/large/unique_wand_101_x1_demonhunter_male.png',
		flavor:'Long before Xiansai\'s unification, in a time of legend, the mercurial mage Woh and his companions whisked their way across the land in a magical pagoda, righting wrongs and putting an end to strife. Woh has since been reincarnated many times, but in each incarnation, this wand invariably finds its way back to its master\'s hand.'
	}
];

module.exports = onehand;