var affixMap = {
	//Main stats
	'Dexterity': {
		text_en:'{+$} Dexterity',
		exclude:['Barbarian','Crusader','Wizard','Witch Doctor','Mojo','Wizard Hat','Mighty Belt','Source','Voodoo Mask','Crusader Shield'],
		suffix_en:'of Pain'
	},
	'Intelligence': {
		text_en:'{+$} Intelligence',
		exclude:['Demon Hunter','Monk','Barbarian','Crusader','Mighty Belt','Spirit Stone','Crusader Shield'],
		suffix_en:'of Far Sight'
	},
	'Strength': {
		text_en:'{+$} Strength',
		exclude:['Demon Hunter','Monk','Wizard','Witch Doctor','Mojo','Wizard Hat','Spirit Stone','Source','Voodoo Mask'],
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
		exclude:['ArcaneDamage','ColdDamage','FireDamage','PoisonDamage','HolyDamage','LightningDamage','Wizard']
	},
	'ArcaneDamage': {
		text_en: 'Arcane Skills deal {$%} more damage',
		exclude:['Demon Hunter','Monk','Barbarian','Crusader','Witch Doctor','PhysDamage','ColdDamage','FireDamage','PoisonDamage','HolyDamage','LightningDamage']
	},
	'ColdDamage': {
		text_en: 'Cold Skills deal {$%} more damage',
		exclude:['Crusader','PhysDamage','ArcaneDamage','FireDamage','PoisonDamage','HolyDamage','LightningDamage']
	},
	'FireDamage': {
		text_en: 'Fire Skills deal {$%} more damage',
		exclude:['PhysDamage','ArcaneDamage','ColdDamage','PoisonDamage','HolyDamage','LightningDamage']
	},
	'PoisonDamage': {
		text_en: 'Poison Skills deal {$%} more damage',
		exclude:['Demon Hunter','Monk','Barbarian','Crusader','Wizard','PhysDamage','ArcaneDamage','ColdDamage','FireDamage','HolyDamage','LightningDamage']
	},
	'HolyDamage': {
		text_en: 'Holy Skills deal {$%} more damage',
		prefix_en:'Hallowed',
		exclude:['Demon Hunter','Barbarian','Wizard','Witch Doctor','PhysDamage','ArcaneDamage','ColdDamage','FireDamage','PoisonDamage','LightningDamage']
	},
	'LightningDamage': {
		text_en: 'Lightning Skills deal {$%} more damage',
		exclude:['Witch Doctor','PhysDamage','ArcaneDamage','ColdDamage','FireDamage','PoisonDamage','HolyDamage'],
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
	'FlatDamage':{
		text_en:'{+$%} Damage'
	},

	//Utility
	'AreaDamage': {
		text_en:'Chance to Deal {$%} Area Damage on Hit.',
		prefix_en:'Inundating',
		exclude:['Shield']
	},
	'CostReduc': {
		text_en:'Reduces All Resource Costs by {$%}',
		prefix_en:'Masterful',
		exclude:['Shield']
	},
	'CdReduc': {
		text_en:'Reduces cooldown of all skills by {$%}.',
		prefix_en:'Insightful',
		exclude:['Shield']
	},
	'LifePerHit': {
		text_en:'{+$} Life per Hit',
		suffix_en:'of Gore',
		exclude:['LifeAfterKill']
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
	'EliteDamage':{
		text_en:'Increases damage against elites by {$%}',
		prefix_en:'Executing'
	},
	'BeastDamage':{
		text_en:'{+$%} Damage to Beasts'
	},
	'HumanDamage':{
		text_en:'{+$%} Damage to Humans'
	},
	'UndeadDamage':{
		text_en:'{+$%} Damage to Undead'
	},
	'Bleed':{
		text_en:'{$%} chance to inflict Bleed for {$%} weapon damage over {5} seconds'
	},

	//Secondary Resists
	'PhysRes': {
		text_en:'{+$} Physical Resistance',
		exclude:['AllResist','ColdRes','FireRes','LightRes','ArcRes','PoisRes'],
		prefix_en:'Hermetic'
	},
	'ColdRes': {
		text_en:'{+$} Cold Resistance',
		exclude:['AllResist','PhysRes','FireRes','LightRes','ArcRes','PoisRes'],
		prefix_en:'Sheltering'
	},
	'FireRes': {
		text_en:'{+$} Fire Resistance',
		exclude:['AllResist','PhysRes','ColdRes','LightRes','ArcRes','PoisRes'],
		prefix_en:'Charred'
	},
	'LightRes': {
		text_en:'{+$} Lightning Resistance',
		exclude:['AllResist','PhysRes','ColdRes','FireRes','ArcRes','PoisRes'],
		prefix_en:'Tranquil'
	},
	'ArcRes': {
		text_en:'{+$} Arcane Resistance',
		exclude:['AllResist','PhysRes','ColdRes','FireRes','LightRes','PoisRes'],
		prefix_en:'Beguiling'
	},
	'PoisRes': {
		text_en:'{+$} Poison Resistance',
		exclude:['AllResist','PhysRes','ColdRes','FireRes','LightRes','ArcRes'],
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
	'MagicFind':{
		text_en:'{$%} Better Chance of Finding Magical Items'
	},
	'BonusXp': {
		text_en:'Monster kills grant {+$} experience.',
		prefix_en:'Restless'
	},
	'BonusXpPerc':{
		text_en:'Increases Bonus Experience by {$%}'
	},
	'CcReduc': {
		text_en:'Reduces duration of control impairing effects by {$%}',
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
		text_en:'Increases Gold and Health Pickup by {$} Yards.',
		prefix_en:'Avaricious'
	},	
	'IgnoreDura':{
		text_en:'Ignores Durability Loss'
	},
	'LifeAfterKill':{
		suffix_en:'of Extermination',
		text_en:'{+$} Life After Each Kill',
		exclude:['LifePerHit','Mighty Belt']
	},
	'LevelReduc':{
		suffix_en:'of Courage',
		text_en:'Level Requirement Reduced by {$}.'
	},
	'Block':{
		text_en:'{+$%} Chance to Block'
	},


	//onhit
	'FreezeHit':{
		text_en:'{$%} Chance to Freeze on Hit',
		exclude:['BlindHit','FearHit','ChillHit','SlowHit','KnockHit','StunHit','ImmobHit']
	},
	'BlindHit': {
		text_en:'{$%} Chance to Blind on Hit',
		prefix_en:'Perplexing',
		exclude:['FreezeHit','FearHit','ChillHit','SlowHit','KnockHit','StunHit','ImmobHit']
	},
	'FearHit':{
		text_en:'{$%} Chance to Fear on Hit',
		suffix_en:'of Horror',
		exclude:['FreezeHit','BlindHit','ChillHit','SlowHit','KnockHit','StunHit','ImmobHit']
	},
	'ChillHit':{
		text_en:'{$%} Chance to Chill on Hit',
		prefix_en:'Glacial',
		exclude:['FreezeHit','BlindHit','FearHit','SlowHit','KnockHit','StunHit','ImmobHit']
	},
	'SlowHit':{
		text_en:'{$%} Chance to Slow on Hit',
		prefix_en:'Persecuting',
		exclude:['FreezeHit','BlindHit','FearHit','ChillHit','KnockHit','StunHit','ImmobHit']
	},
	'KnockHit':{
		text_en:'{$%} Chance to Knockback on Hit',
		prefix_en:'Smashing',
		exclude:['FreezeHit','BlindHit','FearHit','ChillHit','SlowHit','StunHit','ImmobHit']
	},
	'StunHit':{
		text_en:'{$%} Chance to Stun on Hit',
		suffix_en:'of Ruin',
		exclude:['FreezeHit','BlindHit','FearHit','ChillHit','SlowHit','KnockHit','ImmobHit']
	},
	'ImmobHit':{
		text_en:'{$%} Chance to Immobolize on Hit',
		exclude:['FreezeHit','BlindHit','FearHit','ChillHit','SlowHit','KnockHit','StunHit']
	},

	//Class based
	'SpiritRegen':{
		text_en:'Increases Spirit Regeneration by {$} per Second (Monk Only)',
		prefix_en:'Avaricious',
		exclude:['Barbarian','Crusader','Demon Hunter','Witch Doctor','Helm','Wizard Hat','Voodoo Mask','Wizard','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Flail','Mighty Weapon','Hand Crossbow','Wand']
	},
	'MaxSpirit':{
		text_en:'{+$} Maximum Spirit (Monk Only)',
		exclude:['Barbarian','Crusader','Demon Hunter','Witch Doctor','Wizard','Helm','Wizard Hat','Voodoo Mask','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Flail','Mighty Weapon','Hand Crossbow','Wand']
	},
	'LifePerSpirit':{
		text_en:'Gain {$} Life per Spirit Spent (Monk Only)',
		exclude:['Barbarian','Crusader','Demon Hunter','Witch Doctor','Wizard','Helm','Wizard Hat','Voodoo Mask','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Flail','Mighty Weapon','Hand Crossbow','Wand']
	},

	'MaxFury':{
		text_en:'{+$} Maximum Fury (Barbarian Only)',
		exclude:['Crusader','Demon Hunter','Monk','Witch Doctor','Wizard','Belt','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Flail','Fist Weapon','Hand Crossbow','Wand']
	},
	'LifePerFury':{
		text_en:'Gain {$} Life per Fury Spent (Barbarian Only)',
		exclude:['Crusader','Demon Hunter','Monk','Witch Doctor','Wizard','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Flail','Fist Weapon','Hand Crossbow','Wand']
	},

	'LifePerWrath':{
		prefix_en:'Dedicated',
		text_en:'Gain {$} Life per Wrath Spent (Crusader Only)',
		exclude:['Shield','Barbarian','Demon Hunter','Monk','Witch Doctor','Wizard','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Mighty Weapon','Hand Crossbow','Wand']
	},
	'WrathRegen':{
		text_en:'Increases Wrath Regeneration by {$} per Second (Crusader Only)',
		exclude:['Shield','Barbarian','Demon Hunter','Monk','Witch Doctor','Wizard','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Mighty Weapon','Hand Crossbow','Wand']
	},
	'MaxWrath':{
		text_en:'{+$} Maximum Wrath (Crusader Only)',
		exclude:['Shield','Barbarian','Demon Hunter','Monk','Witch Doctor','Wizard','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Mighty Weapon','Hand Crossbow','Wand']
	},

	'MaxDisc':{
		prefix_en:'Confident',
		text_en:'{+$} Maximum Discipline (Demon Hunter Only)',
		exclude:['Monk','Barbarian','Witch Doctor','Wizard','Crusader','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Flail','Mighty Weapon','Fist Weapon','Wand'],
	},
	'HatredRegen':{
		prefix_en:'Vengeful',
		text_en:'Increases Hatred Regeneration by {$} per Second (Demon Hunter Only)',
		exclude:['Chest Armor','Monk','Barbarian','Witch Doctor','Wizard','Crusader','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Flail','Mighty Weapon','Fist Weapon','Wand']
	},

	'MaxAp':{
		prefix_en:'Mental',
		text_en:'{+$} Maximum Arcane Power (Wizard Only)',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor','Helm','Spirit Stone','Voodoo Mask','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Flail','Mighty Weapon','Hand Crossbow','Fist Weapon']
	},
	'APOC':{
		text_en:'Critical Hits grant {$} Arcane Power (Wizard Only)',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor']
	},

	'MaxMana':{
		text_en:'{+$} Maximum Mana (Witch Doctor Only)',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard','Helm','Spirit Stone','Wizard Hat','Axe','Dagger','Mace','Spear','Sword','Fist Weapon','Flail','Mighty Weapon','Hand Crossbow','Wand']
	},
	'ManaRegen':{
		text_en:'Increases Mana Regeneration by {$} per Second (Witch Doctor Only)',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard','Helm','Wizard Hat','Spirit Stone','Axe','Dagger','Mace','Spear','Sword','Fist Weapon','Flail','Mighty Weapon','Hand Crossbow','Wand']
	},

	//weapon damages
	Dmg_Black:{
		text_en:'{+$}-{$} Damage',
		suffix_en:'of Death',
		exclude:['Dmg_Cold','Dmg_Fire','Dmg_Lightning','Dmg_Poison','Dmg_Arcane','Dmg_Holy','Dagger','Hand Crossbow','Bow','Crossbow']
	},
	Dmg_Cold:{
		text_en:'{+$}-{$} Cold Damage',
		suffix_en:'of the Avalanche',
		exclude:['Dmg_Black','Dmg_Fire','Dmg_Lightning','Dmg_Poison','Dmg_Arcane','Dmg_Holy','Dagger','Hand Crossbow','Bow','Crossbow']
	},
	Dmg_Fire:{
		text_en:'{+$}-{$} Fire Damage',
		suffix_en:'of Incineration',
		exclude:['Dmg_Black','Dmg_Cold','Dmg_Lightning','Dmg_Poison','Dmg_Arcane','Dmg_Holy','Dagger','Hand Crossbow','Bow','Crossbow']
	},
	Dmg_Lightning:{
		text_en:'{+$}-{$} Lightning Damage',
		suffix_en:'of Conflagration',
		exclude:['Dmg_Black','Dmg_Cold','Dmg_Fire','Dmg_Poison','Dmg_Arcane','Dmg_Holy','Dagger','Hand Crossbow','Bow','Crossbow']
	},
	Dmg_Poison:{
		text_en:'{+$}-{$} Poison Damage',
		suffix_en:'of Blight',
		exclude:['Dmg_Black','Dmg_Cold','Dmg_Fire','Dmg_Lightning','Dmg_Arcane','Dmg_Holy','Dagger','Hand Crossbow','Bow','Crossbow']
	},
	Dmg_Arcane:{
		text_en:'{+$}-{$} Arcane Damage',
		suffix_en:'from Beyond',
		exclude:['Dmg_Black','Dmg_Cold','Dmg_Fire','Dmg_Lightning','Dmg_Poison','Dmg_Holy','Dagger','Hand Crossbow','Bow','Crossbow']
	},
	Dmg_Holy:{
		text_en:'{+$}-{$} Holy Damage',
		suffix_en:'of the Heavens',
		exclude:['Dmg_Black','Dmg_Cold','Dmg_Fire','Dmg_Lightning','Dmg_Poison','Dmg_Arcane','Dagger','Hand Crossbow','Bow','Crossbow']
	},
	Dmg_Black_hc:{
		text_en:'{+$}-{$} Damage',
		suffix_en:'of Death',
		exclude:['Dmg_Cold_hc','Dmg_Fire_hc','Dmg_Lightning_hc','Dmg_Poison_hc','Dmg_Arcane_hc','Dmg_Holy_hc','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Flail','Mighty Weapon','Wand']
	},
	Dmg_Cold_hc:{
		text_en:'{+$}-{$} Cold Damage',
		suffix_en:'of the Avalanche',
		exclude:['Dmg_Black_hc','Dmg_Fire_hc','Dmg_Lightning_hc','Dmg_Poison_hc','Dmg_Arcane_hc','Dmg_Holy_hc','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Flail','Mighty Weapon','Wand']
	},
	Dmg_Fire_hc:{
		text_en:'{+$}-{$} Fire Damage',
		suffix_en:'of Incineration',
		exclude:['Dmg_Black_hc','Dmg_Cold_hc','Dmg_Lightning_hc','Dmg_Poison_hc','Dmg_Arcane_hc','Dmg_Holy_hc','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Flail','Mighty Weapon','Wand']
	},
	Dmg_Lightning_hc:{
		text_en:'{+$}-{$} Lightning Damage',
		suffix_en:'of Conflagration',
		exclude:['Dmg_Black_hc','Dmg_Cold_hc','Dmg_Fire_hc','Dmg_Poison_hc','Dmg_Arcane_hc','Dmg_Holy_hc','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Flail','Mighty Weapon','Wand']
	},
	Dmg_Poison_hc:{
		text_en:'{+$}-{$} Poison Damage',
		suffix_en:'of Blight',
		exclude:['Dmg_Black_hc','Dmg_Cold_hc','Dmg_Fire_hc','Dmg_Lightning_hc','Dmg_Arcane_hc','Dmg_Holy_hc','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Flail','Mighty Weapon','Wand']
	},
	Dmg_Arcane_hc:{
		text_en:'{+$}-{$} Arcane Damage',
		suffix_en:'from Beyond',
		exclude:['Dmg_Black_hc','Dmg_Cold_hc','Dmg_Fire_hc','Dmg_Lightning_hc','Dmg_Poison_hc','Dmg_Holy_hc','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Flail','Mighty Weapon','Wand']
	},
	Dmg_Holy_hc:{
		text_en:'{+$}-{$} Holy Damage',
		suffix_en:'of the Heavens',
		exclude:['Dmg_Black_hc','Dmg_Cold_hc','Dmg_Fire_hc','Dmg_Lightning_hc','Dmg_Poison_hc','Dmg_Arcane_hc','Axe','Dagger','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Flail','Mighty Weapon','Wand']
	},
	Dmg_Black_dagger:{
		text_en:'{+$}-{$} Damage',
		suffix_en:'of Death',
		exclude:['Dmg_Cold_dagger','Dmg_Fire_dagger','Dmg_Lightning_dagger','Dmg_Poison_dagger','Dmg_Arcane_dagger','Dmg_Holy_dagger','Axe','Hand Crossbow','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Flail','Mighty Weapon','Wand']
		},
	Dmg_Cold_dagger:{
		text_en:'{+$}-{$} Cold Damage',
		suffix_en:'of the Avalanche',
		exclude:['Dmg_Black_dagger','Dmg_Fire_dagger','Dmg_Lightning_dagger','Dmg_Poison_dagger','Dmg_Arcane_dagger','Dmg_Holy_dagger','Axe','Hand Crossbow','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Flail','Mighty Weapon','Wand']
	},
	Dmg_Fire_dagger:{
		text_en:'{+$}-{$} Fire Damage',
		suffix_en:'of Incineration',
		exclude:['Dmg_Black_dagger','Dmg_Cold_dagger','Dmg_Lightning_dagger','Dmg_Poison_dagger','Dmg_Arcane_dagger','Dmg_Holy_dagger','Axe','Hand Crossbow','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Flail','Mighty Weapon','Wand']
	},
	Dmg_Lightning_dagger:{
		text_en:'{+$}-{$} Lightning Damage',
		suffix_en:'of Conflagration',
		exclude:['Dmg_Black_dagger','Dmg_Cold_dagger','Dmg_Fire_dagger','Dmg_Poison_dagger','Dmg_Arcane_dagger','Dmg_Holy_dagger','Axe','Hand Crossbow','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Flail','Mighty Weapon','Wand']
	},
	Dmg_Poison_dagger:{
		text_en:'{+$}-{$} Poison Damage',
		suffix_en:'of Blight',
		exclude:['Dmg_Black_dagger','Dmg_Cold_dagger','Dmg_Fire_dagger','Dmg_Lightning_dagger','Dmg_Arcane_dagger','Dmg_Holy_dagger','Axe','Hand Crossbow','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Flail','Mighty Weapon','Wand']
	},
	Dmg_Arcane_dagger:{
		text_en:'{+$}-{$} Arcane Damage',
		suffix_en:'from Beyond',
		exclude:['Dmg_Black_dagger','Dmg_Cold_dagger','Dmg_Fire_dagger','Dmg_Lightning_dagger','Dmg_Poison_dagger','Dmg_Holy_dagger','Axe','Hand Crossbow','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Flail','Mighty Weapon','Wand']
	},
	Dmg_Holy_dagger:{
		text_en:'{+$}-{$} Holy Damage',
		suffix_en:'of the Heavens',
		exclude:['Dmg_Black_dagger','Dmg_Cold_dagger','Dmg_Fire_dagger','Dmg_Lightning_dagger','Dmg_Poison_dagger','Dmg_Arcane_dagger','Axe','Hand Crossbow','Mace','Spear','Sword','Ceremonial Knife','Fist Weapon','Flail','Mighty Weapon','Wand']
	},
	Dmg_Black_ranged:{
		text_en:'{+$}-{$} Damage',
		suffix_en:'of Death',
		exclude:['Dmg_Cold_ranged','Dmg_Fire_ranged','Dmg_Lightning_ranged','Dmg_Poison_ranged','Dmg_Arcane_ranged','Dmg_Holy_ranged','Daibo','Two-Handed Mace','Two-Handed Axe','Two-Handed Sword','Polearm','Staff','Two-Handed Mighty Weapon','Two-Handed Flail']
		},
	Dmg_Cold_ranged:{
		text_en:'{+$}-{$} Cold Damage',
		suffix_en:'of the Avalanche',
		exclude:['Dmg_Black_ranged','Dmg_Fire_ranged','Dmg_Lightning_ranged','Dmg_Poison_ranged','Dmg_Arcane_ranged','Dmg_Holy_ranged','Daibo','Two-Handed Mace','Two-Handed Axe','Two-Handed Sword','Polearm','Staff','Two-Handed Mighty Weapon','Two-Handed Flail']
	},
	Dmg_Fire_ranged:{
		text_en:'{+$}-{$} Fire Damage',
		suffix_en:'of Incineration',
		exclude:['Dmg_Black_ranged','Dmg_Cold_ranged','Dmg_Lightning_ranged','Dmg_Poison_ranged','Dmg_Arcane_ranged','Dmg_Holy_ranged','Daibo','Two-Handed Mace','Two-Handed Axe','Two-Handed Sword','Polearm','Staff','Two-Handed Mighty Weapon','Two-Handed Flail']
	},
	Dmg_Lightning_ranged:{
		text_en:'{+$}-{$} Lightning Damage',
		suffix_en:'of Conflagration',
		exclude:['Dmg_Black_ranged','Dmg_Cold_ranged','Dmg_Fire_ranged','Dmg_Poison_ranged','Dmg_Arcane_ranged','Dmg_Holy_ranged','Daibo','Two-Handed Mace','Two-Handed Axe','Two-Handed Sword','Polearm','Staff','Two-Handed Mighty Weapon','Two-Handed Flail']
	},
	Dmg_Poison_ranged:{
		text_en:'{+$}-{$} Poison Damage',
		suffix_en:'of Blight',
		exclude:['Dmg_Black_ranged','Dmg_Cold_ranged','Dmg_Fire_ranged','Dmg_Lightning_ranged','Dmg_Arcane_ranged','Dmg_Holy_ranged','Daibo','Two-Handed Mace','Two-Handed Axe','Two-Handed Sword','Polearm','Staff','Two-Handed Mighty Weapon','Two-Handed Flail']
	},
	Dmg_Arcane_ranged:{
		text_en:'{+$}-{$} Arcane Damage',
		suffix_en:'from Beyond',
		exclude:['Dmg_Black_ranged','Dmg_Cold_ranged','Dmg_Fire_ranged','Dmg_Lightning_ranged','Dmg_Poison_ranged','Dmg_Holy_ranged','Daibo','Two-Handed Mace','Two-Handed Axe','Two-Handed Sword','Polearm','Staff','Two-Handed Mighty Weapon','Two-Handed Flail']
	},
	Dmg_Holy_ranged:{
		text_en:'{+$}-{$} Holy Damage',
		suffix_en:'of the Heavens',
		exclude:['Dmg_Black_ranged','Dmg_Cold_ranged','Dmg_Fire_ranged','Dmg_Lightning_ranged','Dmg_Poison_ranged','Dmg_Arcane_ranged','Daibo','Two-Handed Mace','Two-Handed Axe','Two-Handed Sword','Polearm','Staff','Two-Handed Mighty Weapon','Two-Handed Flail']
	},
	//SkillEffects
	'RainOfVengeanceDmg':{
		text_en:'Increases {Rain of Vengeance} Damage by {$%}',
		suffix_en:'of Dark Skies',
		exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
		'FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg','ElementalArrowDmg','ChakramDmg','ClusterArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg','BolasDmg','EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg']
	},
	'FanOfKnivesDmg':{
		text_en:'Increases {Fan of Knives} Damage by {$%}',
		suffix_en:'of Concealed Blades',
		exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
		'RainOfVengeanceDmg','CompanionDmg','SpikeTrapDmg','SentryDmg','ElementalArrowDmg','ChakramDmg','ClusterArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg','BolasDmg','EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg']
	},
	'CompanionDmg':{
		text_en:'Increases {Companion} Damage by {$%}',
		suffix_en:'Companion',
		exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
		'RainOfVengeanceDmg','FanOfKnivesDmg','SpikeTrapDmg','SentryDmg','ElementalArrowDmg','ChakramDmg','ClusterArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg','BolasDmg','EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg']
	},
	'SpikeTrapDmg':{
		text_en:'Increases {Spike Trap} Damage by {$%}',
		suffix_en:'of Spines',
		exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
		'RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SentryDmg','ElementalArrowDmg','ChakramDmg','ClusterArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg','BolasDmg','EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg']
	},
	'SentryDmg':{
		text_en:'Increases {Sentry} Damage by {$%}',
		suffix_en:'of Sentry',
		exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
		'RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','ElementalArrowDmg','ChakramDmg','ClusterArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg','BolasDmg','EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg']
	},
	'AvalancheDmg':{
		text_en:'Increases {Avalanche} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard',
		'CallOfTheAncientsDmg','EarthquakeDmg','FuriousChargeDmg','OverpowerDmg','RendDmg','RevengeDmg']
	},
	'CallOfTheAncientsDmg':{
		text_en:'Increases {Call of the Ancients} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard',
		'AvalancheDmg','EarthquakeDmg','FuriousChargeDmg','OverpowerDmg','RendDmg','RevengeDmg']
	},
	'EarthquakeDmg':{
		text_en:'Increases {Earthquake} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard',
		'AvalancheDmg','CallOfTheAncientsDmg','FuriousChargeDmg','OverpowerDmg','RendDmg','RevengeDmg']
	},
	'FuriousChargeDmg':{
		text_en:'Increases {Furious Charge} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard',
		'AvalancheDmg','CallOfTheAncientsDmg','EarthquakeDmg','OverpowerDmg','RendDmg','RevengeDmg']
	},
	'OverpowerDmg':{
		text_en:'Increases {Overpower} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard',
		'AvalancheDmg','CallOfTheAncientsDmg','EarthquakeDmg','FuriousChargeDmg','RendDmg','RevengeDmg']
	},
	'RendDmg':{
		text_en:'Increases {Rend} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard',
		'AvalancheDmg','CallOfTheAncientsDmg','EarthquakeDmg','FuriousChargeDmg','OverpowerDmg','RevengeDmg']
	},
	'RevengeDmg':{
		text_en:'Increases {Revenge} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Crusader','Witch Doctor','Wizard',
		'AvalancheDmg','CallOfTheAncientsDmg','EarthquakeDmg','FuriousChargeDmg','OverpowerDmg','RendDmg']
	},
	'BombardmentDmg':{
		text_en:'Increases {Bombardment} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Barbarian','Witch Doctor','Wizard',
		'CondemnDmg','FallingSwordDmg','HeavensFuryDmg']
	},
	'CondemnDmg':{
		text_en:'Increases {Condemn} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Barbarian','Witch Doctor','Wizard',
		'BombardmentDmg','FallingSwordDmg','HeavensFuryDmg']
	},
	'FallingSwordDmg':{
		text_en:'Increases {Falling Sword} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Barbarian','Witch Doctor','Wizard',
		'BombardmentDmg','CondemnDmg','HeavensFuryDmg']
	},
	'HeavensFuryDmg':{
		text_en:'Increases {Heaven\'s Fury} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Barbarian','Witch Doctor','Wizard',
		'BombardmentDmg','CondemnDmg','FallingSwordDmg']
	},
	'CycloneDmg':{
		text_en:'Increases {Cyclone} Damage by {$%}',
		exclude:['Crusader','Demon Hunter','Barbarian','Witch Doctor','Wizard',
		'DashingStrikeDmg','MysticAllyDmg','SevenSidedStrikeDmg','SweepingWindDmg']
	},
	'DashingStrikeDmg':{
		text_en:'Increases {Dashing Strike} Damage by {$%}',
		exclude:['Crusader','Demon Hunter','Barbarian','Witch Doctor','Wizard',
		'CycloneDmg','MysticAllyDmg','SevenSidedStrikeDmg','SweepingWindDmg']
	},
	'MysticAllyDmg':{
		text_en:'Increases {Mystic Ally} Damage by {$%}',
		exclude:['Crusader','Demon Hunter','Barbarian','Witch Doctor','Wizard',
		'CycloneDmg','DashingStrikeDmg','SevenSidedStrikeDmg','SweepingWindDmg']
	},
	'SevenSidedStrikeDmg':{
		text_en:'Increases {Seven Sided Strike} Damage by {$%}',
		exclude:['Crusader','Demon Hunter','Barbarian','Witch Doctor','Wizard',
		'CycloneDmg','DashingStrikeDmg','MysticAllyDmg','SweepingWindDmg']
	},
	'SweepingWindDmg':{
		text_en:'Increases {Sweeping Wing} Damage by {$%}',
		exclude:['Crusader','Demon Hunter','Barbarian','Witch Doctor','Wizard',
		'CycloneDmg','DashingStrikeDmg','MysticAllyDmg','SevenSidedStrikeDmg']
	},
	'WallOfZombiesDmg':{
		text_en:'Increases {Wall of Zombies} Damage by {$%}',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg','CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg','AcidCloudDmg','FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'GraspOfTheDeadDmg':{
		text_en:'Increases {Grasp of the Dead} Damage by {$%}',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'WallOfZombiesDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg','CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg','AcidCloudDmg','FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'GargantuanDmg':{
		text_en:'Increases {Gargantuan} Damage by {$%}',
		suffix_en:'of the Great Hulk',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'WallOfZombiesDmg','GraspOfTheDeadDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg','CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg','AcidCloudDmg','FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'HauntDmg':{
		text_en:'Increases {Haunt} Damage by {$%}',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg','CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg','AcidCloudDmg','FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'PiranhasDmg':{
		text_en:'Increases {Piranhas} Damage by {$%}',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg','CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg','AcidCloudDmg','FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'LocustSwarmDmg':{
		text_en:'Increases {Locust Swarm} Damage by {$%}',
		suffix_en:'of Pestilence',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','FetishArmyDmg','SummonZombieDogsDmg','CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg','AcidCloudDmg','FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'FetishArmyDmg':{
		text_en:'Increases {Fetish Army} Damage by {$%}',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','SummonZombieDogsDmg','CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg','AcidCloudDmg','FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'SummonZombieDogsDmg':{
		text_en:'Increases {Summon Zombie Dogs} Damage by {$%}',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg','AcidCloudDmg','FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'BlackHoleDmg':{
		text_en:'Increases {Black Hole} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
		'BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg','ElectrocuteDmg','MagicMissleDmg','ShockPulseDmg','SpectralBladeDmg','ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg']
	},
	'BlizzardDmg':{
		text_en:'Increases {Blizzard} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
		'BlackHoleDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg','ElectrocuteDmg','MagicMissleDmg','ShockPulseDmg','SpectralBladeDmg','ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg']
	},
	'ExplosiveBlastDmg':{
		text_en:'Increases {Explosive Blast} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
		'BlackHoleDmg','BlizzardDmg','FamiliarDmg','HydraDmg','ElectrocuteDmg','MagicMissleDmg','ShockPulseDmg','SpectralBladeDmg','ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg']
	},
	'FamiliarDmg':{
		text_en:'Increases {Familiar} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
		'BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','HydraDmg','ElectrocuteDmg','MagicMissleDmg','ShockPulseDmg','SpectralBladeDmg','ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg']
	},
	'HydraDmg':{
		text_en:'Increases {Hydra} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
		'BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','ElectrocuteDmg','MagicMissleDmg','ShockPulseDmg','SpectralBladeDmg','ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg']
	},

	'AncientSpearDmg':{
		text_en:'Increases {Ancient Spear} Damage by {$%}',
		exclude:['Crusader','Monk','Demon Hunter','Witch Doctor','Wizard',
		'AncientSpearDmg','HammerOfTheAncientsDmg','SeismicSlamDmg','WhirlwindDmg']
	},
	'HammerOfTheAncientsDmg':{
		text_en:'Increases {Hammer of the Ancients} Damage by {$%}',
		exclude:['Crusader','Monk','Demon Hunter','Witch Doctor','Wizard',
		'AncientSpearDmg','SeismicSlamDmg','WhirlwindDmg']
	},
	'SeismicSlamDmg':{
		text_en:'Increases {Seismic Slam} Damage by {$%}',
		exclude:['Crusader','Monk','Demon Hunter','Witch Doctor','Wizard',
		'AncientSpearDmg','HammerOfTheAncientsDmg','WhirlwindDmg']
	},
	'WhirlwindDmg':{
		text_en:'Increases {Weapon Throw} Damage by {$%}',
		exclude:['Crusader','Monk','Demon Hunter','Witch Doctor','Wizard',
		'AncientSpearDmg','HammerOfTheAncientsDmg','SeismicSlamDmg']
	},
	'BlessedHammerDmg':{
		text_en:'Increases {Blessed Hammer} Damage by {$%}',
		exclude:['Barbarian','Monk','Demon Hunter','Witch Doctor','Wizard',
		'BlessedShieldDmg','FistOfTheHeavensDmg','PhalanxDmg','ShieldBashDmg','SweepAttackDmg']
	},
	'BlessedShieldDmg':{
		text_en:'Increases {Blessed Shield} Damage by {$%}',
		exclude:['Barbarian','Monk','Demon Hunter','Witch Doctor','Wizard',
		'BlessedHammerDmg','FistOfTheHeavensDmg','PhalanxDmg','ShieldBashDmg','SweepAttackDmg']
	},
	'FistOfTheHeavensDmg':{
		text_en:'Increases {Fist of the Heavens} Damage by {$%}',
		exclude:['Barbarian','Monk','Demon Hunter','Witch Doctor','Wizard',
		'BlessedHammerDmg','BlessedShieldDmg','PhalanxDmg','ShieldBashDmg','SweepAttackDmg']
	},
	'PhalanxDmg':{
		text_en:'Increases {Phalanx} Damage by {$%}',
		exclude:['Barbarian','Monk','Demon Hunter','Witch Doctor','Wizard',
		'BlessedHammerDmg','BlessedShieldDmg','FistOfTheHeavensDmg','ShieldBashDmg','SweepAttackDmg']
	},
	'ShieldBashDmg':{
		text_en:'Increases {Shield Bash} Damage by {$%}',
		exclude:['Barbarian','Monk','Demon Hunter','Witch Doctor','Wizard',
		'BlessedHammerDmg','BlessedShieldDmg','FistOfTheHeavensDmg','PhalanxDmg','SweepAttackDmg']
	},
	'SweepAttackDmg':{
		text_en:'Increases {Sweep Attack} Damage by {$%}',
		exclude:['Barbarian','Monk','Demon Hunter','Witch Doctor','Wizard',
		'BlessedHammerDmg','BlessedShieldDmg','FistOfTheHeavensDmg','PhalanxDmg','ShieldBashDmg']
	},
	'ChakramDmg':{
		text_en:'Increases {Chakram} Damage by {$%}',
		suffix_en:'of the Boomerang',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'ClusterArrowDmg','ElementalArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg','BolasDmg','EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg','RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg']
	},
	'ClusterArrowDmg':{
		text_en:'Increases {Cluster Arrow} Damage by {$%}',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'ChakramDmg','ElementalArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg','BolasDmg','EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg','RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg']
	},
	'ElementalArrowDmg':{
		text_en:'Increases {Elemental Arrow} Damage by {$%}',
		suffix_en:'of Blasting',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'ChakramDmg','ClusterArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg','BolasDmg','EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg','RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg']
	},
	'ImpaleDmg':{
		text_en:'Increases {Impale} Damage by {$%}',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'ChakramDmg','ClusterArrowDmg','ElementalArrowDmg','MultishotDmg','RapidFireDmg','StrafeDmg','BolasDmg','EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg','RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg']
	},
	'MultishotDmg':{
		text_en:'Increases {Multishot} Damage by {$%}',
		suffix_en:'of Volleys',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'ChakramDmg','ClusterArrowDmg','ElementalArrowDmg','ImpaleDmg','RapidFireDmg','StrafeDmg','BolasDmg','EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg','RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg']
	},
	'RapidFireDmg':{
		text_en:'Increases {Rapid Fire} Damage by {$%}',
		suffix_en:'of Salvos',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'ChakramDmg','ClusterArrowDmg','ElementalArrowDmg','ImpaleDmg','MultishotDmg','StrafeDmg','BolasDmg','EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg','RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg']
	},
	'StrafeDmg':{
		text_en:'Increases {Strafe} Damage by {$%}',
		suffix_en:'of Prowess',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'ChakramDmg','ClusterArrowDmg','ElementalArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','BolasDmg','EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg','RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg']
	},
	'ExplodingPalmDmg':{
		text_en:'Increases {Exploding Palm} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Witch Doctor','Wizard',
		'LashingTailKickDmg','TempestRushDmg','WaveOfLightDmg']
	},
	'LashingTailKickDmg':{
		text_en:'Increases {Lashing Tail Kick} Damage by {$%}',
		suffix_en:'of the Scorpion',
		exclude:['Barbarian','Crusader','Demon Hunter','Witch Doctor','Wizard',
		'ExplodingPalmDmg','TempestRushDmg','WaveOfLightDmg']
	},
	'TempestRushDmg':{
		text_en:'Increases {Tempest Rush} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Witch Doctor','Wizard',
		'ExplodingPalmDmg','LashingTailKickDmg','WaveOfLightDmg']
	},
	'WaveOfLightDmg':{
		text_en:'Increases {Wave of Light} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Witch Doctor','Wizard',
		'ExplodingPalmDmg','LashingTailKickDmg','TempestRushDmg']
	},
	'AcidCloudDmg':{
		text_en:'Increases {Acid Cloud} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg','CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg','WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
	},
	'FirebatsDmg':{
		text_en:'Increases {Firebats} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'AcidCloudDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg','CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg','WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
	},
	'SacrificeDmg':{
		text_en:'Increases {Sacrifice} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'AcidCloudDmg','FirebatsDmg','SpiritBarrageDmg','ZombieChargerDmg','CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg','WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
	},
	'SpiritBarrageDmg':{
		text_en:'Increases {Spirit Barrage} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'AcidCloudDmg','FirebatsDmg','SacrificeDmg','ZombieChargerDmg','CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg','WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
	},
	'ZombieChargerDmg':{
		text_en:'Increases {Zombie Charger} Damage by {$%}',
		suffix_en:'of Blind Rage',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'AcidCloudDmg','FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg','WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
	},
	'ArcaneOrbDmg':{
		text_en:'Increases {Arcane Orb} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg','BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg','ElectrocuteDmg','MagicMissleDmg','ShockPulseDmg','SpectralBladeDmg']
	},
	'ArcaneTorrentDmg':{
		text_en:'Increases {Arcane Torrent} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ArcaneOrbDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg','BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg','ElectrocuteDmg','MagicMissleDmg','ShockPulseDmg','SpectralBladeDmg']
	},
	'DisintegrateDmg':{
		text_en:'Increases {Disintegrate} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ArcaneOrbDmg','ArcaneTorrentDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg','BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg','ElectrocuteDmg','MagicMissleDmg','ShockPulseDmg','SpectralBladeDmg']
	},
	'EnergyTwisterDmg':{
		text_en:'Increases {Energy Twister} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg','BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg','ElectrocuteDmg','MagicMissleDmg','ShockPulseDmg','SpectralBladeDmg']
	},
	'MeteorDmg':{
		text_en:'Increases {Meteor} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','RayOfFrostDmg','WaveOfForceDmg','BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg','ElectrocuteDmg','MagicMissleDmg','ShockPulseDmg','SpectralBladeDmg']
	},
	'RayOfFrostDmg':{
		text_en:'Increases {Ray of Frost} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','WaveOfForceDmg','BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg','ElectrocuteDmg','MagicMissleDmg','ShockPulseDmg','SpectralBladeDmg']
	},
	'WaveOfForceDmg':{
		text_en:'Increases {Wave of Force} Damage by {$%}',
		suffix_en:'of Repulsion',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg','ElectrocuteDmg','MagicMissleDmg','ShockPulseDmg','SpectralBladeDmg']
	},

	'BashDmg':{
		text_en:'Increases {Bash} Damage by {$%}',
		exclude:['Crusader','Demon Hunter','Monk','Witch Doctor','Wizard',
		'CleaveDmg','FrenzyDmg','WeaponThrowDmg']
	},
	'CleaveDmg':{
		text_en:'Increases {Cleave} Damage by {$%}',
		exclude:['Crusader','Demon Hunter','Monk','Witch Doctor','Wizard',
		'BashDmg','FrenzyDmg','WeaponThrowDmg']
	},
	'FrenzyDmg':{
		text_en:'Increases {Frenzy} Damage by {$%}',
		exclude:['Crusader','Demon Hunter','Monk','Witch Doctor','Wizard',
		'BashDmg','CleaveDmg','WeaponThrowDmg']
	},
	'WeaponThrowDmg':{
		text_en:'Increases {Weapon Throw} Damage by {$%}',
		exclude:['Crusader','Demon Hunter','Monk','Witch Doctor','Wizard',
		'BashDmg','CleaveDmg','FrenzyDmg']
	},
	'JusticeDmg':{
		text_en:'Increases {Justice} Damage by {$%}',
		exclude:['Barbarian','Demon Hunter','Monk','Witch Doctor','Wizard',
		'PunishDmg','SlashDmg','SmiteDmg']
	},
	'PunishDmg':{
		text_en:'Increases {Punish} Damage by {$%}',
		exclude:['Barbarian','Demon Hunter','Monk','Witch Doctor','Wizard',
		'JusticeDmg','SlashDmg','SmiteDmg']
	},
	'SlashDmg':{
		text_en:'Increases {Slash} Damage by {$%}',
		exclude:['Barbarian','Demon Hunter','Monk','Witch Doctor','Wizard',
		'JusticeDmg','PunishDmg','SmiteDmg']
	},
	'SmiteDmg':{
		text_en:'Increases {Smite} Damage by {$%}',
		exclude:['Barbarian','Demon Hunter','Monk','Witch Doctor','Wizard',
		'JusticeDmg','PunishDmg','SlashDmg']
	},
	'BolasDmg':{
		text_en:'Increases {Bolas} Damage by {$%}',
		suffix_en:'of the Bounty Hunter',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg','RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg','ChakramDmg','ClusterArrowDmg','ElementalArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg']
	},
	'EntanglingShotDmg':{
		text_en:'Increases {Entangling Shot} Damage by {$%}',
		suffix_en:'of Binding',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'BolasDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg','RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg','ChakramDmg','ClusterArrowDmg','ElementalArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg']
	},
	'EvasiveFireDmg':{
		text_en:'Increases {Evasive Fire} Damage by {$%}',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'BolasDmg','EntanglingShotDmg','GrenadeDmg','HungeringArrowDmg','RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg','ChakramDmg','ClusterArrowDmg','ElementalArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg']
	},
	'GrenadeDmg':{
		text_en:'Increases {Grenade} Damage by {$%}',
		suffix_en:'of the Grenadier',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'BolasDmg','EntanglingShotDmg','EvasiveFireDmg','HungeringArrowDmg','RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg','ChakramDmg','ClusterArrowDmg','ElementalArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg']
	},
	'HungeringArrowDmg':{
		text_en:'Increases {Hungering Arrow} Damage by {$%}',
		suffix_en:'of the Predator',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'BolasDmg','EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg','ChakramDmg','ClusterArrowDmg','ElementalArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg']
	},
	'CripplingWaveDmg':{
		text_en:'Increases {Crippling Wave} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Witch Doctor','Wizard',
		'DeadlyReachDmg','FistsOfThunderDmg','HundredFistsDmg']
	},
	'DeadlyReachDmg':{
		text_en:'Increases {Deadly Reach} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Witch Doctor','Wizard',
		'CripplingWaveDmg','FistsOfThunderDmg','HundredFistsDmg']
	},
	'FistsOfThunderDmg':{
		text_en:'Increases {Fists of Thunder} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Witch Doctor','Wizard',
		'CripplingWaveDmg','DeadlyReachDmg','HundredFistsDmg']
	},
	'HundredFistsDmg':{
		text_en:'Increases {Way of the Hundred Fists} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Witch Doctor','Wizard',
		'CripplingWaveDmg','DeadlyReachDmg','FistsOfThunderDmg']
	},
	'CorpseSpidersDmg':{
		text_en:'Increases {Corpse Spiders} Damage by {$%}',
		suffix_en:'of the Black Widow',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg','WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg','AcidCloudDmg','FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'FirebombDmg':{
		text_en:'Increases {Firebomb} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'CorpseSpidersDmg','PlagueOfToadsDmg','PoisonDartDmg','WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg','AcidCloudDmg','FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'PlagueOfToadsDmg':{
		text_en:'Increases {Plague of Toads} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'CorpseSpidersDmg','FirebombDmg','PoisonDartDmg','WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg','AcidCloudDmg','FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'PoisonDartDmg':{
		text_en:'Increases {Poison Dart} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg','WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg','AcidCloudDmg','FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'ElectrocuteDmg':{
		text_en:'Increases {Electrocute} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'MagicMissileDmg','ShockPulseDmg','SpectralBladeDmg','BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg','ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg']
	},
	'MagicMissileDmg':{
		text_en:'Increases {Magic Missile} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ElectrocuteDmg','ShockPulseDmg','SpectralBladeDmg','BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg','ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg']
	},
	'ShockPulseDmg':{
		text_en:'Increases {Shock Pulse} Damage by {$%}',
		suffix_en:'of Ruin',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ElectrocuteDmg','MagicMissileDmg','SpectralBladeDmg','BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg','ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg']
	},
	'SpectralBladeDmg':{
		text_en:'Increases {Spectral Blade} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ElectrocuteDmg','MagicMissileDmg','ShockPulseDmg','BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg','ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg']
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
	},
	'Frenzy':{
		type:'legendary',
		text_en:'Frenzy gains the effect of every rune.'
	},
	'Punish':{
		type:'legendary',
		text_en:'Punish gains the effect of every rune.'
	},
	'Bombard':{
		type:'legendary',
		text_en:'Every {$} seconds, call down Bombardment on a random nearby enemy.'
	},
	'ShermaBlind':{
		type:'legendary',
		text_en:'Chance on hit to create a chaos field that Blinds and Slows enemies inside for {$} seconds.'
	},
	'Goldwrap':{
		type:'legendary',
		text_en:'On gold pickup: Gain armor for 5 seconds equal to the amount picked up.'
	},
	'Harrington':{
		type:'legendary',
		text_en:'Opening a chest grants {$%} increased damage for 10 seconds.'
	},
	'HwojWrap':{
		type:'legendary',
		text_en:'Locust Swarm also Slows enemies by {$%}'
	},
	'Jangs':{
		type:'legendary',
		text_en:'Enemies damaged by Black Hole are also slowed by {$%} for 3 seconds.'
	},
	'KrelmBelt':{
		type:'legendary',
		text_en:'Gain {25%} run speed. This effect is lost for 5 seconds after taking damage.'
	},
	'RazorStrop':{
		type:'legendary',
		text_en:'Picking up a Health Globe releases an explosion that deals {$%} weapon damage as Fire to enemies within 20 yards.'
	},
	'SashOfKnives':{
		type:'legendary',
		text_en:'With every attack, you throw a dagger at a nearby enemy for {$%} weapon damage as Physical.'
	},
	'Sebors':{
		type:'legendary',
		text_en:'Haunt is cast on all nearby enemies when you open a chest.'
	},
	'Thundergod':{
		type:'legendary',
		text_en:'Blocking,dodging or being hit causes you to discharge bolts of electricity that deal {$%} weapon damage as Lightning.'
	},
	'FireWalker':{
		type:'legendary',
		text_en:'Burn the ground you walk on, dealing {$%} weapon damage each second.'
	},
	'ColdReduc':{
		text_en:'Reduces damage from Cold attacks by {$%}.'
	},
	'FreezeImmune':{
		type:'legendary',
		text_en:'Gain immunity to Freeze and Immobilize effects.'
	},
	'Irontoe':{
		type:'legendary',
		text_en:'Gain up to {$%} increased movement speed based on amount of Life missing.'
	},
	'LutSocks':{
		type:'legendary',
		text_en:'Leap can be cast again within 2 seconds before the cooldown begins.'
	},
	'Crudest':{
		type:'legendary',
		text_en:'Mystic Ally summons two Mystic Allies that fight by your side.'
	},
	'ParthanDefenders':{
		type:'legendary',
		text_en:'Each stunned enemy within 25 yards reduces your damage taken by {$%}'
	},
	'Custerian':{
		type:'legendary',
		text_en:'Picking up gold grants experience'
	},
	'Gungdo':{
		type:'legendary',
		text_en:'Exploding Palm\'s on-death explosion applies Exploding Palm.'
	},
	'KrelmBracer':{
		type:'legendary',
		text_en:'You are immune to Knockback and Stun effects.'
	},
	'Nemesis':{
		type:'legendary',
		text_en:'Shrines and Pylons will spawn an enemy champion'
	},
	'PromiseOfGlory':{
		type:'legendary',
		text_en:'{$%} chance to spawn a Nephalem Glory globe when you Blind an enemy.'
	},
	'Strongarm':{
		type:'legendary',
		text_en:'Enemies hit by knockbacks suffer {$%} more damage for 5 seconds when they land.'
	},
	'Tragoul':{
		type:'legendary',
		text_en:'Healing wells replenish all resources and reduce all cooldowns by {$} seconds.'
	},
	'Warzechian':{
		type:'legendary',
		text_en:'Every time you destroy a wreckable object, you gain a short burst of speed.'
	},
	'KindRegent':{
		type:'legendary',
		text_en:'Smite will now also be cast at a second nearby enemy.'
	},
	'Chaingmail':{
		type:'legendary',
		text_en:'After earning a survival bonus, quickly heal to full Life.'
	},
	'FireReduc':{
		type:'legendary',
		text_en:'Reduces the resource cost of Fire skills by {$%}.'
	},
	'Goldskin':{
		type:'legendary',
		text_en:'Chance for enemies to drop gold when you hit them.'
	},
	'ShiMizu':{
		type:'legendary',
		text_en:'While below {$%} Life, all attacks are guaranteed Critical Hits.'
	},
	'DemonDamage':{
		text_en:'{+$%} Damage to Demons'
	},
	'BeckonSail':{
		type:'legendary',
		text_en:'When receiving fatal damage, you instead automatically cast Smoke Screen and are healed to {25%} Life. This effect may occur once every {120} seconds.'
	},
	'Blackfeather':{
		type:'legendary',
		text_en:'Dodging or getting hit by a ranged attack automatically shoots a homing rocket back at the attacker for {$%} weapon damage as Physical.'
	},
	'DarkNight':{
		type:'legendary',
		text_en:'Automatically drop Caltrops when you are hit. This effect may only occur once every 6 seconds.'
	},
	'Garwulf':{
		type:'legendary',
		text_en:'Companion - Wolf Companion now summons 3 wolves.'
	},
	'Frostburn':{
		type:'legendary',
		text_en:'Your Cold damage has up to a {$%} chance to Freeze enemies.'
	},
	'GladGaunts':{
		type:'legendary',
		text_en:'After earning a massacre bonus, gold rains from sky.'
	},
	'Archew':{
		type:'legendary',
		text_en:'The first time an elite pack damages you, gain an absorb shield equal to {$%} of your maximum Life for 10 seconds.'
	},
	'Tasker':{
		type:'legendary',
		text_en:'Increase attack speed of your pets by {$%}.'
	},
	'PoisonNova':{
		type:'legendary',
		text_en:'Attacks release a Poison Nova that deals {$%} weapon damage as Poison to enemies within 10 yards.'
	},
	'FireTaken':{
		text_en:'{$%} more fire damage taken.'
	},
	'BrokenCrown':{
		type:'legendary',
		text_en:'Whenever a gem drops, a gem of the type socketed into this item also drops.'
	},
	'Deathseer':{
		type:'legendary',
		text_en:'{$%} chance on being hit by an Undead enemy to charm it for 2 seconds.'
	},
	'LeoricsCrown':{
		type:'legendary',
		text_en:'Increase the effect of any gem socketed into this item by {$%}.'
	},
	'SkullResonance':{
		type:'legendary',
		text_en:'Threatening Shout has a chance to Charm enemies and cause them to join your side.'
	},
	'Peshkov':{
		type:'legendary',
		text_en:'Reduce the cooldown of Breath of Heaven by {$%}.'
	},
	'Gyana':{
		type:'legendary',
		text_en:'Lashing Tail Kick releases a piercing fireball that deals {$%} weapon damage as Fire to enemies within 10 yards on impact.'
	},
	'Kekegi':{
		type:'legendary',
		text_en:'Damaging enemies has a chance to grant you an effect that removes the Spirit cost of your abilities for {$} seconds.'
	},
	'Madstone':{
		type:'legendary',
		text_en:'Your Seven-Sided Strike applies Exploding Palm.'
	},
	'Seph':{
		type:'legendary',
		text_en:'Using Blinding Flash restores {$} Spirit.'
	},
	'MindsEye':{
		type:'legendary',
		text_en:'Inner Sanctuary increases Spirit Regeneration per second by {$}.'
	},
	'TzoKrin':{
		type:'legendary',
		text_en:'Wave of Light is now cast at your enemy.'
	},
	'Carnevil':{
		type:'legendary',
		text_en:'Your Fetishes shoot a Poison Dart every time you do.'
	},
	'Jeram':{
		type:'legendary',
		text_en:'Pets deal {$%} more damage.'
	},
	'Quetzalcoatl':{
		type:'legendary',
		text_en:'Locust Swarm and Haunt now deal their damage in half of the normal duration.'
	},
	'GrinReaper':{
		type:'legendary',
		text_en:'Chance to summon horrific Mimics when attacking.'
	},
	'Tiklandian':{
		type:'legendary',
		text_en:'Horrify causes you to Fear and Root enemies around you for {$} seconds.'
	},
	'Giyua':{
		type:'legendary',
		text_en:'Summon a Fetish Army after you kill 2 Elites.'
	},
	'Vicalyke':{
		type:'legendary',
		text_en:'Your Mirror Images have a chance to multiply when killed by enemies.'
	},
	'DarkMage':{
		type:'legendary',
		text_en:'Automatically cast Diamond Skin when you fall below 35% Life. This effect may occur once every 15–20 seconds.'
	},
	'Magistrate':{
		type:'legendary',
		text_en:'Frost Hydra now periodically casts Frost Nova.'
	},
	'Swami':{
		type:'legendary',
		text_en:'The damage bonus from kills while in Archon form now lasts for {$} seconds after Archon expires.'
	},
	'Camaral':{
		type:'legendary',
		text_en:'Double the number of enemies your Electrocute jumps to.'
	},
	'DepthDiggers':{
		type:'legendary',
		text_en:'Primary skills that generate resource deal {$%} additional damage.'
	},
	'HexingPants':{
		type:'legendary',
		text_en:'Your resource generation and damage is increased by {25%} while moving and decreased by {$%} while standing still.'
	},
	'PoxFaulds':{
		type:'legendary',
		text_en:'When 3 or more enemies are within 12 yards, you release a vile stench that deals {$%} weapon damage as Poison every second for 5 seconds to enemies within 15 yards.'
	},
	'Rucksack':{
		type:'legendary',
		text_en:'You may have 2 additional Sentries.'
	},
	'DeadMans':{
		type:'legendary',
		text_en:'Multishot hits enemies below {$%} health twice.'
	},
	'Emimei':{
		type:'legendary',
		text_en:'Bolas now explode instantly.'
	},
	'Meticulous':{
		type:'legendary',
		text_en:'Elemental Arrow - Ball Lightning now travels at {$%} speed.'
	},
	'SeethingHatred':{
		type:'legendary',
		text_en:'Chakram now generates {$} Hatred.'
	},
	'NinthCirri':{
		type:'legendary',
		text_en:'Hungering Arrow has {$%} additional chance to pierce.'
	},
	'HollowWhispers':{
		type:'legendary',
		text_en:'This ring occasionally haunts nearby enemies.'
	},
	'Nagelring':{
		type:'legendary',
		text_en:'Summons a Fallen Lunatic to your side every {$} seconds.'
	},
	'RechelsRing':{
		type:'legendary',
		text_en:'Gain {$%} increased movement speed for 4 seconds after Fearing an enemy.'
	},
	'RueChambers':{
		type:'legendary',
		text_en:'Your Spirit Generators generate {$%} more Spirit.'
	},
	'BrokenPromises':{
		type:'legendary',
		text_en:'After 5 consecutive non-critical hits, your chance to critically hit is increased to {100%} for {3} seconds.'
	},
	'WeddingBand':{
		type:'legendary',
		text_en:'You drain life from enemies around you.'
	},
	'EternalUnion':{
		type:'legendary',
		text_en:'Increases the duration of Phalanx avatars by {200%}.'
	},
	'Arlyse':{
		type:'legendary',
		text_en:'Your Ice Armor now reduces damage from melee attacks by {$%} and automatically casts Frost Nova whenever you take {10%} of your Life in damage.'
	},
	'Kredes':{
		type:'legendary',
		text_en:'Taking Fire damage restores your primary resource.'
	},
	'ObsidianRing':{
		type:'legendary',
		text_en:'Reduce the remaining cooldown of one of your skills by {1} seconds when you hit with a resource-spending attack.'
	},
	'OculusRing':{
		type:'legendary',
		text_en:'Chance to create an area of focused power on killing a monster. Damage is increased by {$%} while standing in the area.'
	},
	'PuzzleRing':{
		type:'legendary',
		text_en:'Summon a treasure goblin who picks up normal-quality items for you. After picking up {$} items, he drops a rare item with a chance for a legendary.'
	},
	'Rogars':{
		type:'legendary',
		text_en:'Increase your Life per Second by up to {$%} based on your missing Life.'
	},
	'SkullGrasp':{
		type:'legendary',
		text_en:'Increase the damage of Whirlwind by {$%} weapon damage.'
	},
	'TallMans':{
		type:'legendary',
		text_en:'Zombie Dogs instead summons a single gargantuan dog with more damage and health than all other dogs combined.'
	},
	'Unity':{
		type:'legendary',
		text_en:'All damage taken is split between wearers of this item.'
	},
	'Wyrdward':{
		type:'legendary',
		text_en:'Lightning damage has a {$%} chance to Stun for 1.5 seconds.'
	},
	'DeathWatch':{
		type:'legendary',
		text_en:'{$%} chance to explode in a fan of knives for {$%} weapon damage when hit.'
	},
	'HomingPads':{
		type:'legendary',
		text_en:'Your Town Portal is no longer interrupted by taking damage. While casting Town Portal you gain a protective bubble that reduces damage taken by {$%}.'
	},
	'Zakara':{
		type:'legendary',
		text_en:'Your items become indestructible.'
	},
	'VileWard':{
		type:'legendary',
		text_en:'Furious Charge deals {$%} increased damage for every enemy hit while charging.'
	},
	'Nilfur':{
		type:'legendary',
		text_en:'Increases the damage of Meteor by {100%}. When your Meteor hits 3 or less enemies, the damage is increased by {$%}'
	},
	'Drakon':{
		type:'legendary',
		text_en:'When your Shield Bash hits 3 or less enemies, its damage is increased by {$%} and {25%} of its Wrath Cost is refunded.'
	},
	'Ranslor':{
		type:'legendary',
		text_en:'Energy Twister periodically pulls in enemies within {30} yards.'
	},
	'SpiritGuard':{
		type:'legendary',
		text_en:'Your Spirit Generators reduce your damage taken by {$%} for 3 seconds.'
	},
	'TransBelt':{
		type:'legendary',
		text_en:'Summon a Fetish Sycophant when you hit with a Mana spender.'
	},
	'Haull':{
		type:'legendary',
		text_en:'Justice spawns a Blessed Hammer when it hits an enemy.'
	},
	'CrashingRain':{
		type:'legendary',
		text_en:'Rain of Vengeance also summons a crashing beast that deals {$%} weapon damage.'
	},
	'HauntingGirdle':{
		type:'legendary',
		text_en:'Haunt releases {1} extra spirit.'
	},
	'Omnislash':{
		type:'legendary',
		text_en:'Slash attacks in all directions.'
	},
	'Omryns':{
		type:'legendary',
		text_en:'Drop Caltrops when using Vault.'
	},
	'Arcstone':{
		type:'legendary',
		text_en:'Lightning pulses periodically between all wearers of this item, dealing {$%} weapon damage.'
	},
	'Convention':{
		type:'legendary',
		text_en:'Gain {$%} increased damage to a single element for 4 seconds. This effect rotates through the elements available to your class in the following order: Arcane, Cold, Fire, Holy, Lightning, Physical, Poison.'
	},
	'ShortMan':{
		type:'legendary',
		text_en:'Gargantuan instead summons three smaller gargantuans each more powerful than before.'
	},
	'Primus':{
		type:'legendary',
		text_en:'Slow Time gains the effect of every rune.'
	},
	'Homunculus':{
		type:'legendary',
		text_en:'A Zombie Dog is automatically summoned to your side every {2} seconds.'
	},
	'Shukrani':{
		type:'legendary',
		text_en:'Spirit Walk lasts until you attack or until an enemy is within 30 yards of you.'
	},
	'Uhkapian':{
		type:'legendary',
		text_en:'{$%} of the damage you take is redirected to your Zombie Dogs.'
	},
	'AkaratShield':{
		type:'legendary',
		text_en:'Every successful block has a {$%} chance to reduce all cooldowns by 1 second.'
	},
	'Frydehr':{
		type:'legendary',
		text_en:'Condemn has no cooldown but instead costs 40 Wrath.'
	},
	'HallowedBulwark':{
		type:'legendary',
		text_en:'Iron Skin also increases your Block Amount by {$%}.'
	},
	'Hellskull':{
		type:'legendary',
		text_en:'Gain {10%} increased damage while wielding a two-handed weapon.'
	},
	'Jekangbord':{
		type:'legendary',
		text_en:'Blessed Shield ricochets to {$} additional enemies.'
	},
	'FinalWitness':{
		type:'legendary',
		text_en:'When you block, you have up to a {$%} chance to Stun the attacker for 1.5 seconds based on your current Wrath.'
	},
	'UnrelentingPhalanx':{
		type:'legendary',
		text_en:'Phalanx now casts twice.'
	},
	'Westmarch':{
		type:'legendary',
		text_en:'Blocks have a chance of summoning a charging wolf that deals {$%} weapon damage to all enemies it passes through.'
	},
	'Denial':{
		type:'legendary',
		text_en:'Each enemy hit by your Sweep Attack increases the damage of your next Sweep Attack by {$%}, stacking up to 5 times.'
	},
	'Eberli':{
		type:'legendary',
		text_en:'Reduces the cooldown of Heaven\'s Fury by {$%}'
	},
	'FreezeShield':{
		type:'legendary',
		text_en:'Blocking an attack has a chance to Freeze the attacker for {$} seconds.'
	},
	'IvoryTower':{
		type:'legendary',
		text_en:'Blocks release forward a Fires of Heaven.'
	},
	'Votoyias':{
		type:'legendary',
		text_en:'Enemies affected by Provoke take double damage from Thorns.'
	},
	'Genzaniku':{
		type:'legendary',
		text_en:'Chance to summon a ghostly Fallen Champion when attacking.'
	},
	'HackAxe':{
		type:'legendary',
		text_en:'{$%} of your Thorns damage is applied on every attack.'
	},
	'Sankis':{
		type:'legendary',
		text_en:'Chance to fight through the pain when enemies hit you.'
	},
	'Sickle':{
		type:'legendary',
		text_en:'{$%} chance to drag enemies to you when attacking.'
	},
	'Anessazi':{
		type:'legendary',
		text_en:'Zombie Dogs stuns enemies around them for 1.5 seconds when summoned.'
	},
	'DeadlyRebirth':{
		type:'legendary',
		text_en:'Grasp of the Dead gains the effect of the Rain of Corpses rune.'
	},
	'LastBreath':{
		text_en:'Reduces cooldown of {Mass Confusion} by {$} seconds. (Witch Doctor Only)'
	},
	'Rhenho':{
		type:'legendary',
		text_en:'Plague of Toads now seek out enemies and can explode twice.'
	},
	'SacredHarv':{
		type:'legendary',
		text_en:'Soul Harvest now stacks up to 10 times.'
	},
	'Starmetal':{
		type:'legendary',
		text_en:'Reduce the cooldown of Fetish Army and Big Bad Voodoo by 1 second each time your fetishes deal damage.'
	},
	'DartsDagger':{
		type:'legendary',
		text_en:'Your Poison Darts and your Fetishes\' Poison Darts now pierce.'
	},
	'Gidbinn':{
		type:'legendary',
		text_en:'Chance to summon a Fetish when attacking.'
	},
	'SpiderQueen':{
		type:'legendary',
		text_en:'Corpse Spiders releases a web on impact that Slows enemies by {$%}.'
	},
	'Eunjang':{
		type:'legendary',
		text_en:'Attacking enemies below {$%} Life freezes them for 3 seconds.'
	},
	'PigSticker':{
		type:'legendary',
		text_en:'Squeal!'
	},
	'Wizardspike':{
		type:'legendary',
		text_en:'Performing an attack has a {$%} chance to hurl a Frozen Orb.'
	},
	'Jawbreaker':{
		type:'legendary',
		text_en:'When Dashing Strike hits an enemy more than {$} yards away, its Charge cost is refunded.'
	},
	'AzTurrasq':{
		type:'legendary',
		text_en:'Exploding Palm\'s on-death explosion damage is increased by {$%}.'
	},
	'VengefulWind':{
		type:'legendary',
		text_en:'Increases the maximum stack count of Sweeping Wind by 3.'
	},
	'Darklight':{
		type:'legendary',
		text_en:'Fist of the Heavens has a {$%} chance to also be cast at your location.'
	},
	'Gyrfalcon':{
		type:'legendary',
		text_en:'Removes the resource cost of Blessed Shield.'
	},
	'Inviolable':{
		type:'legendary',
		text_en:'Casting Consecration also casts Consecration beneath all of your allies.'
	},
	'Justinian':{
		type:'legendary',
		text_en:'Blessed Hammer gains the effect of the Dominion rune.'
	},
	'Kassar':{
		type:'legendary',
		text_en:'Casting Justice increases your movement speed by {$%} for 2 seconds.'
	},
	'Swiftmount':{
		type:'legendary',
		text_en:'Doubles the duration of Steed Charge.'
	},
	'Calamity':{
		type:'legendary',
		text_en:'Enemies you hit become Marked for Death.'
	},
	'DanettaR':{
		type:'legendary',
		text_en:'Vault gains the effect of the Rattling Roll rune.'
	},
	'DanettaS':{
		type:'legendary',
		text_en:'Leave a clone of yourself behind after using Vault.'
	},
	'Kmar':{
		type:'legendary',
		text_en:'Strafe gains the effect of the Drifting Shadow rune.'
	},
	'JaceHammer':{
		type:'legendary',
		text_en:'Increase the size of your Blessed Hammers.'
	},
	'OdynSon':{
		type:'legendary',
		text_en:'{$%} chance to Chain Lightning enemies when you hit them.'
	},
	'Solanium':{
		type:'legendary',
		text_en:'Critical Hits have a {$%} chance to spawn a health globe.'
	},
	'Fjord':{
		type:'legendary',
		text_en:'{$%} chance to be surrounded by a Chilling Aura when attacking.'
	},
	'Remorseless':{
		type:'legendary',
		text_en:'Hammer of the Ancients has a {$%} chance to summon an Ancient for 20 seconds.'
	},
	'Azurewrath':{
		type:'legendary',
		text_en:'Undead enemies within 25 yards take {$%} weapon damage as Holy every second and are sometimes knocked back.'
	},
	'Fulminator':{
		type:'legendary',
		text_en:'Lightning damage has a chance to turn enemies into lightning rods, causing them to pulse {$%} weapon damage as Lightning every second to nearby enemies for 6 seconds.'
	},
	'Rimeheart':{
		type:'legendary',
		text_en:'{10%} chance on hit to instantly deal {10000%} weapon damage as Cold to enemies that are Frozen.'
	},
	'Sever':{
		type:'legendary',
		text_en:'Slain enemies rest in pieces.'
	},
	'ShardHate':{
		type:'legendary',
		text_en:'Elemental skills have a chance to trigger a powerful attack that deals {$%} weapon damage.'
	},
	'Skycutter':{
		type:'legendary',
		text_en:'Chance to summon angelic assistance when attacking.'
	},
	'Thunderfury':{
		type:'legendary',
		text_en:'Chance on hit to blast your enemy with Lightning, dealing {$%} weapon damage as Lightning and then jumping to additional nearby enemies. Each enemy hit has their attack speed and movement speed reduced by {30%} for 3 seconds. Jumps up to 5 targets.'
	},
	'Ingeom':{
		type:'legendary',
		text_en:'Your skill cooldowns are reduced by {$} seconds for 15 seconds after killing an elite pack.'
	},
	'Aether':{
		type:'legendary',
		text_en:'Teleport no longer has a cooldown but costs 25 Arcane Power.'
	},
	'Gesture':{
		type:'legendary',
		text_en:'Reduces the cooldown of Slow Time by {$%}.'
	},
	'Serpent':{
		type:'legendary',
		text_en:'You may have one extra Hydra active at a time.'
	},
	'Slorak':{
		type:'legendary',
		text_en:'This wand finds your death humorous.'
	},
	'WandWoh':{
		type:'legendary',
		text_en:'3 additional Explosive Blasts are triggered after casting Explosive Blast.'
	},
	'LightGrace':{
		type:'legendary',
		text_en:'Ray of Frost now pierces.'
	},
	'Mirrorball':{
		type:'legendary',
		text_en:'Magic Missile fires {$} extra missiles.'
	},
	'Myken':{
		type:'legendary',
		text_en:'Electrocute can chain to enemies that have already been hit.'
	},
	'Oculus':{
		type:'legendary',
		text_en:'Reduces cooldown of Teleport by {$} seconds. (Wizard Only)'
	},
	'OculusT':{
		type:'legendary',
		text_en:'Taking damage has up to a {$%} chance to reset the cooldown on Teleport.'
	},
	'WinterFlurry':{
		type:'legendary',
		text_en:'Enemies killed by Cold damage have a {$%} chance to release a Frost Nova.'
	},
	'Trium':{
		type:'legendary',
		text_en:'Your Signature Spells increase the damage of Arcane Orb by {$%} for 6 seconds, stacking up to 3 times.'
	},
	'Butcher':{
		type:'legendary',
		text_en:'The Butcher still inhabits his carver.'
	},
	'Cluckeye':{
		type:'legendary',
		text_en:'{$%} chance to cluck when attacking.'
	},
	'Krider':{
		type:'legendary',
		text_en:'Elemental Arrow now generates {$} Hatred.'
	},
	'Leonine':{
		type:'legendary',
		text_en:'Bola Shot has a {$%} chance on explosion to pull in all enemies within 24 yards.'
	},
	'Odyssey':{
		type:'legendary',
		text_en:'Enemies snared by your Entangling Shot take {$%} increased damage from all sources.'
	},
	'Raven':{
		type:'legendary',
		text_en:'A raven flies to your side.'
	},
	'FlyingD':{
		type:'legendary',
		text_en:'Chance to double your attack speed when attacking.'
	},
	'IncenseTorch':{
		type:'legendary',
		text_en:'Reduces the Spirit cost of Wave of Light by {$%}.'
	},
	'FlowEternity':{
		type:'legendary',
		text_en:'Reduces the cooldown of Seven-Sided Strike by {$%}.'
	},
	'Paddle':{
		type:'legendary',
		text_en:'Slap!'
	},
	'Quang':{
		type:'legendary',
		text_en:'Tempest Rush gains the effect of the Tailwind rune.'
	},
	'Buriza':{
		type:'legendary',
		text_en:'Your projectiles pierce {$} additional times.'
	},
	'Chanon':{
		type:'legendary',
		text_en:'Your Spike Traps lure enemies to them. Enemies may be taunted once every {$} seconds.'
	},
	'DemonMachine':{
		type:'legendary',
		text_en:'{$%} chance to shoot explosive bolts when attacking.'
	},
	'Hellrack':{
		type:'legendary',
		text_en:'Chance to root enemies to the ground when you hit them.'
	},
	'PusSpitter':{
		type:'legendary',
		text_en:'{$%} chance to lob an acid blob when attacking.'
	},
	'Wojahnni':{
		type:'legendary',
		text_en:'Rapid Fire deals {$%} more damage for every second that you channel. Stacks up to 4 times.'
	},
	'Baleful':{
		type:'legendary',
		text_en:'Enemies killed while Akarat\'s Champion is active turn into Phalanx Avatars for 10 seconds.'
	},
	'FateFell':{
		type:'legendary',
		text_en:'Gain two additional rays of Heaven’s Fury.'
	},
	'Flense':{
		type:'legendary',
		text_en:'Sweep Attack restores {$} Wrath for each enemy hit.'
	},
	'MortalDrama':{
		type:'legendary',
		text_en:'Double the number of Bombardment impacts.'
	},
	'Arthef':{
		type:'legendary',
		text_en:'Heal for {$%} of your missing Life when you kill an Undead enemy.'
	},
	'Schaefer':{
		type:'legendary',
		text_en:'Casting a Lightning skill charges you with Lightning, causing you to deal {$%} weapon damage as Lightning every second for 5 seconds to nearby enemies.'
	},
	'Skywarden':{
		type:'legendary',
		text_en:'Every 60 seconds, gain a random Law for 60 seconds.'
	},
	'Furnace':{
		type:'legendary',
		text_en:'Increases damage against elites by {$%}.'
	},
	'BastionRevered':{
		type:'legendary',
		text_en:'Frenzy now stacks up to {10} times.'
	},
	'Madawc':{
		type:'legendary',
		text_en:'Stun enemies for 2 seconds the first time you hit them.'
	},
	'GavelJudgment':{
		type:'legendary',
		text_en:'Hammer of the Ancients returns {$} Fury if it hits 3 or less enemies.'
	},
	'Bovine':{
		type:'legendary',
		text_en:'Chance on hit to summon a herd of murderous cows.'
	},
	'Vigilance':{
		type:'legendary',
		text_en:'Getting hit has a chance to automatically cast Inner Sanctuary.'
	},
	'Ahavarion':{
		type:'legendary',
		text_en:'Chance on killing a demon to gain a random Shrine effect.'
	},
	'Maloth':{
		type:'legendary',
		text_en:'Enemies occasionally flee at the sight of this staff.'
	},
	'Vizier':{
		type:'legendary',
		text_en:'Reduces the Arcane Power cost of Meteor by {$%}.'
	},
	'SmolderingCore':{
		type:'legendary',
		text_en:'Lesser enemies are now lured to your Meteor impact areas.'
	},
	'Tormenter':{
		type:'legendary',
		text_en:'Chance to charm enemies when you hit them.'
	},
	'Valthek':{
		type:'legendary',
		text_en:'Energy Twister now travels in a straight path.'
	},
	'Wormwood':{
		type:'legendary',
		text_en:'Locust Swarm continuously plagues enemies around you.'
	},
	'Prophecy':{
		type:'legendary',
		text_en:'Two Condemned enemies also trigger Condemn\'s explosion.'
	},
	'CamRebuttal':{
		type:'legendary',
		text_en:'Falling Sword can be used again within 4 seconds before the cooldown is triggered.'
	},
	'Ashbringer':{
		type:'legendary',
		text_en:'Chance on kill to raise a skeleton to fight for you. Upon accumulating 5 skeletons, they each explode for {1000%} weapon damage and the sword transforms into Ashbringer for a short time. Attacking with Ashbringer burns your enemy for {$%} weapon damage as Holy.'
	},
	'Maximus':{
		type:'legendary',
		text_en:'Chance on hit to summon a Demonic Slave.'
	},
	'Scourge':{
		type:'legendary',
		text_en:'{$%} chance when attacking to explode with demonic fury for {$%} weapon damage as Fire.'
	},
	'Stalgard':{
		type:'legendary',
		text_en:'Your melee attacks throw a piercing axe at a nearby enemy, dealing {$%} weapon damage as Physical.'
	},
	'VanishedPeak':{
		type:'legendary',
		text_en:'Reduces the Fury cost of Seismic Slam by {$%}.'
	},
	'BloodBrother':{
		type:'legendary',
		text_en:'Grants a {$%} chance to block attacks. Blocked attacks inflict {30%} less damage. After blocking an attack, your next attack inflicts {30%} additional damage.'
	},
	'Sublime':{
		type:'legendary',
		text_en:'When you block, you have up to a {$%} chance to Stun the attacker for 1.5 seconds based on your current Wrath.'
	},
	'ReapersWraps':{
		type:'legendary',
		text_en:'Health globes restore {$%} of your primary resource.'
	},
	'CosmicStrand':{
		type:'legendary',
		text_en:'Teleport gains the effect of the Wormhole rune.'
	},
	'Sunder':{
		type:'legendary',
		text_en:'{$%} chance to sunder the ground your enemies walk on when you attack.'
	},
	'CinderSwitch':{
		type:'legendary',
		text_en:'{$%} chance to cast a fireball when attacking.'
	},
	'PiroMarella':{
		type:'legendary',
		text_en:'Reduces the Wrath cost of Shield Bash by {$%}.'
	},
	'WallOfMan':{
		type:'legendary',
		text_en:'{$%} chance to be protected by a shield of bones when you are hit.'
	},
	'BloodMagicEdge':{
		type:'legendary',
		text_en:'Blood oozes from you.'
	},
	'GoldenScourge':{
		type:'legendary',
		text_en:'Smite now jumps to 3 additional enemies.'
	}



/*

,
	'':{
		type:'legendary',
		text_en:''
	}

*/

};

module.exports = affixMap;