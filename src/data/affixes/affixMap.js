var affixMap = {
	//Main stats
	'Dexterity': {
		text_en:'{+$} Dexterity',
		exclude:['Barbarian','Crusader','Wizard','Witch Doctor'],
		suffix_en:'of Pain'
	},
	'Intelligence': {
		text_en:'{+$} Intelligence',
		exclude:['Demon Hunter','Monk','Barbarian','Crusader'],
		suffix_en:'of Far Sight'
	},
	'Strength': {
		text_en:'{+$} Strength',
		exclude:['Demon Hunter','Monk','Wizard','Witch Doctor'],
		suffix_en:'of War'
	},
	'Vitality': {
		text_en:'{+$} Vitality',
		suffix_en:'of Glory'
	},

	//Defensive
	'AllResist': {
		text_en:'{+$} Resistance to All Elements',
		exclude:['PhysRes','ColdRes','FireRes','LightRes','ArcRes','PoisRes'],
		prefix_en:'Chromatic'
	},
	'PercLife': {
		text_en:'{+$%} Life',
		prefix_en:'Stalwart'
	},
	'Armor': {
		text_en:'{+$} Armor',
		suffix_en:'of the Castle'
	},
	'LifeRegen': {
		text_en:'Regenerates {$} Life per Second',
		prefix_en:'Undying'
	},

	//Elemental
	'PhysDamage': {
		text_en: 'Physical Skills deal {$%} more damage',
	},
	'ArcaneDamage': {
		text_en: 'Arcane Skills deal {$%} more damage',
		exclude:['Demon Hunter','Monk','Barbarian','Crusader','Witch Doctor']
	},
	'ColdDamage': {
		text_en: 'Cold Skills deal {$%} more damage',
		exclude:['Crusader']
	},
	'FireDamage': {
		text_en: 'Fire Skills deal {$%} more damage',
	},
	'PoisonDamage': {
		text_en: 'Poison Skills deal {$%} more damage',
		exclude:['Demon Hunter','Monk','Barbarian','Crusader','Wizard']
	},
	'HolyDamage': {
		text_en: 'Holy Skills deal {$%} more damage',
		prefix_en:'Hallowed',
		exclude:['Demon Hunter','Barbarian','Wizard','Witch Doctor']
	},
	'LightningDamage': {
		text_en: 'Lightning Skills deal {$%} more damage',
		exclude:['Witch Doctor'],
		prefix_en:'Shocking'
	},

	//Offensive
	'CritDamage': {
		text_en:'Critical Hit Damage Increased by {$%}',
		prefix_en:'Deadly'
	},
	'CritChance': {
		text_en:'Critical Hit Chance Increased by {$%}',
		prefix_en:'Lacerating'
	},
	'AttackSpeed': {
		text_en:'Attack Speed Increased by {$%}',
		prefix_en:'Assailing'
	},
	'AvgDamage': {
		text_en:'{$} - {$} Damage',
	},

	//Utility
	'AreaDamage': {
		text_en:'Chance to Deal {$%} Area Damage on Hit.',
		prefix_en:'Inundating'
	},
	'CostReduc': {
		text_en:'Reduces All Resource Costs by {$%}',
		prefix_en:'Masterful'
	},
	'CdReduc': {
		text_en:'Reduces cooldown of all skills by {$%}.',
		prefix_en:'Insightful'
	},
	'LifePerHit': {
		text_en:'{+$} Life per Hit',
		suffix_en:'of Gore'
	},
	'Socket': {
		prefix_en:'Socketed'
	},
	'EliteReduc':{
		text_en:'Reduces damage from elites by {$%}'
	},
	'MoveSpeed':{
		text_en:'{+$%} Movement Speed',
		prefix_en:'Fleet'
	},

	//Secondary Resists
	'PhysRes': {
		text_en:'{+$} Physical Resistance',
		exclude:['AllRes','ColdRes','FireRes','LightRes','ArcRes','PoisRes'],
		prefix_en:'Hermetic'
	},
	'ColdRes': {
		text_en:'{+$} Cold Resistance',
		exclude:['AllRes','PhysRes','FireRes','LightRes','ArcRes','PoisRes'],
		prefix_en:'Sheltering'
	},
	'FireRes': {
		text_en:'{+$} Fire Resistance',
		exclude:['AllRes','PhysRes','ColdRes','LightRes','ArcRes','PoisRes'],
		prefix_en:'Charred'
	},
	'LightRes': {
		text_en:'{+$} Lightning Resistance',
		exclude:['AllRes','PhysRes','ColdRes','FireRes','ArcRes','PoisRes'],
		prefix_en:'Tranquil'
	},
	'ArcRes': {
		text_en:'{+$} Arcane Resistance',
		exclude:['AllRes','PhysRes','ColdRes','FireRes','LightRes','PoisRes'],
		prefix_en:'Beguiling'
	},
	'PoisRes': {
		text_en:'{+$} Poison Resistance',
		exclude:['AllRes','PhysRes','ColdRes','FireRes','LightRes','ArcRes'],
		prefix_en:'Untarnished'
	},

	//Utility
	'RangeReduc':{
		text_en:'Reduces damage from ranged attacks by {$%}',
		prefix_en:'Deflecting'
	},
	'MeleeReduc': {
		text_en:'Reduces damage from melee attacks by {$%}',
		suffix_en:'of the Gladiator'
	},
	'GoldFind': {
		text_en:'{$%} Extra Gold from Monsters',
		prefix_en:'Prosperous'
	},
	'BonusXp': {
		text_en:'Monster kills grant{+$} experience.',
		prefix_en:'Restless'
	},
	'CcReduc': {
		text_en:'Reduces duration of control impairing effects by {$%}',
	},
	'BlindHit': {
		text_en:'{$%} Chance to Blind on Hit',
		prefix_en:'Perplexing'
	},
	'Globes': {
		text_en:'Health Globes and Potions Grant {+$} Life.',
		prefix_en:'Euphoric'
	},
	'Thorns': {
		text_en:'Ranged and melee attackers take {$} per hit',
		suffix_en:'of Razors'
	},
	'PickupRadius': {
		text_en:'Increases Gold and Health Pickup by {} Yards.',
		prefix_en:'Avaricious'
	},	
	'IgnoreDura':{
		text_en:'Ignores Durability Loss'
	},
	'LifeAfterKill':{

	},
	'LevelReduc':{},


	//onhit
	'FreezeHit':{},


	//Class based
	'SpiritRegen':{
		text_en:'Increases Spirit Regeneration by {} per Second (Monk Only)',
		prefix_en:'Avaricious'
	},
	'MaxFury':{
		text_en:'{+$} Maximum Fury'
	},
	'LifePerFury':{

	},

	//Special Effects
	'FatalDmg': {
		type:'legendary',
		text_en:'When receiving fatal damage, you are instead restored to {100%} of maximum Life and resources. This item is destroyed in the process.'
	},
	'PreventArcane': {
		type:'legendary',
		text_en:'Prevent all Arcane damage taken and heal yourself for {$%} of the amount prevented.'
	},
	'PreventCold':{
		type:'legendary',
		text_en:'Prevent all Cold damage taken and heal yourself for {$%} of the amount prevented.'
	},
	'PreventPoison':{
		type:'legendary',
		text_en:'Prevent all Poison damage taken and heal yourself for {$%} of the amount prevented.'
	},
	'PreventFire':{
		type:'legendary',
		text_en:'Prevent all Fire damage taken and heal yourself for {$%} of the amount prevented.'
	},
	'PreventLightning':{
		type:'legendary',
		text_en:'Prevent all Lightning damage taken and heal yourself for {$%} of the amount prevented.'
	},
	'StunDur': {
		type:'legendary',
		text_en:'Increases duration of Stun effects by {$%}.'
	},
	'Halycon': {
		type:'legendary',
		text_en:'When you use abilityname, you mesmerize nearby enemies with your skill, causing them to jump uncontrollably for {$} seconds.'
	},
	'HauntOfVaxo':{
		type:'legendary',
		text_en:'Summons shadow clones to your aid when you Stun an enemy. This effect may occur once every {30} seconds.'
	},
	'KymboGold':{
		type:'legendary',
		text_en:'Picking up gold heals you for an amount equal to the gold that was picked up.'
	},
	'MoonlightWard':{
		type:'legendary',
		text_en:'Hitting an enemy within 15 yards has a chance to ward you with shards of Arcane energy that explode when enemies get close, dealing {$%} weapon damage as Arcane to enemies within 15 yards.'
	},
	'Rakoff':{
		type:'legendary',
		text_en:'Enemies you kill have a {$%} additional chance to drop a health globe.'
	},
	'Johan':{
		type:'legendary',
		text_en:'Chance on hit to pull in enemies toward your target and Slow them by {$%}.'
	},
	'Chilanik':{
		type:'legendary',
		text_en:'Using War Cry increases the movement speed for you and all allies affected by {$%} for 10 seconds.'
	},
	'Lamentation':{
		type:'legendary',
		text_en:'Rend can now stack up to 2 times on an enemy.'
	},
	'Cassius':{
		type:'legendary',
		text_en:'Increases the duration of Ignore Pain by {$} seconds.'
	}


};

module.exports = affixMap;