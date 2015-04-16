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
		exclude:['PhysDamage','ArcaneDamage','ColdDamage','FireDamage','PoisonDamage','HolyDamage','LightningDamage']
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
	'BonusXp': {
		text_en:'Monster kills grant{+$} experience.',
		prefix_en:'Restless'
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
		text_en:'Increases Gold and Health Pickup by {} Yards.',
		prefix_en:'Avaricious'
	},	
	'IgnoreDura':{
		text_en:'Ignores Durability Loss'
	},
	'LifeAfterKill':{
		suffix_en:'of Extermination'

	},
	'LevelReduc':{
		suffix_en:'of Courage'
	},


	//onhit
	'FreezeHit':{},
	'BlindHit': {
		text_en:'{$%} Chance to Blind on Hit',
		prefix_en:'Perplexing'
	},
	'FearHit':{
		suffix_en:'of Horror'
	},
	'ChillHit':{
		prefix_en:'Glacial'
	},
	'SlowHit':{
		prefix_en:'Persecuting'
	},
	'KnockHit':{
		prefix_en:'Smashing'
	},
	'StunHit':{
		suffix_en:'of Ruin'
	},
	'ImmobHit':{
		text_en:'{$%} Chance to Immobolize on Hit'
	},

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

	'LifePerWrath':{
		prefix_en:'Dedicated'
	},

	'MaxDisc':{
		prefix_en:'Confident',
		exclude:['Monk','Barbarian','Witch Doctor','Wizard','Crusader'],
	},
	'HatredRegen':{
		prefix_en:'Vengeful',
		exclude:['Chest Armor','Monk','Barbarian','Witch Doctor','Wizard','Crusader']
	},

	'MaxAp':{
		prefix_en:'Mental'
	},

	'MaxMana':{
		text_en:'{+$} Maximum Mana (Witch Doctor Only)'
	}

	//SkillEffects
	'RainOfVengeanceDmg':{
		text_en:'Increases {Rain of Vengeance} Damage by {$%}',
		suffix_en:'of Dark Skies',
		exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
		'FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg','SentryDmg']
	},
	'FanOfKnivesDmg':{
		text_en:'Increases {Fan of Knives} Damage by {$%}',
		suffix_en:'of Concealed Blades',
		exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
		'RainOfVengeanceDmg','CompanionDmg','SpikeTrapDmg','SentryDmg']
	},
	'CompanionDmg':{
		text_en:'Increases {Companion} Damage by {$%}',
		suffix_en:'Companion',
		exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
		'RainOfVengeanceDmg','FanOfKnivesDmg','SpikeTrapDmg','SentryDmg']
	},
	'SpikeTrapDmg':{
		text_en:'Increases {Spike Trap} Damage by {$%}',
		suffix_en:'of Spines',
		exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
		'RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SentryDmg']
	},
	'SentryDmg':{
		text_en:'Increases {Sentry} Damage by {$%}',
		suffix_en:'of Sentry',
		exclude:['Monk','Crusader','Barbarian','Witch Doctor','Wizard',
		'RainOfVengeanceDmg','FanOfKnivesDmg','CompanionDmg','SpikeTrapDmg']
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
		'GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
	},
	'GraspOfTheDeadDmg':{
		text_en:'Increases {Grasp of the Dead} Damage by {$%}',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'WallOfZombiesDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
	},
	'GargantuanDmg':{
		text_en:'Increases {Gargantuan} Damage by {$%}',
		suffix_en:'of the Great Hulk',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'WallOfZombiesDmg','GraspOfTheDeadDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
	},
	'HauntDmg':{
		text_en:'Increases {Haunt} Damage by {$%}',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
	},
	'PiranhasDmg':{
		text_en:'Increases {Piranhas} Damage by {$%}',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','LocustSwarmDmg','FetishArmyDmg','SummonZombieDogsDmg']
	},
	'LocustSwarmDmg':{
		text_en:'Increases {Locust Swarm} Damage by {$%}',
		suffix_en:'of Pestilence',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','FetishArmyDmg','SummonZombieDogsDmg']
	},
	'FetishArmyDmg':{
		text_en:'Increases {Fetish Army} Damage by {$%}',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','SummonZombieDogsDmg']
	},
	'SummonZombieDogsDmg':{
		text_en:'Increases {Summon Zombie Dogs} Damage by {$%}',
		exclude:['Monk','Barbarian','Demon Hunter','Wizard','Crusader',
		'WallOfZombiesDmg','GraspOfTheDeadDmg','GargantuanDmg','HauntDmg','PiranhasDmg','LocustSwarmDmg','FetishArmyDmg']
	},
	'BlackHoleDmg':{
		text_en:'Increases {Black Hole} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
		'BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg']
	},
	'BlizzardDmg':{
		text_en:'Increases {Blizzard} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
		'BlackHoleDmg','ExplosiveBlastDmg','FamiliarDmg','HydraDmg']
	},
	'ExplosiveBlastDmg':{
		text_en:'Increases {Explosive Blast} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
		'BlackHoleDmg','BlizzardDmg','FamiliarDmg','HydraDmg']
	},
	'FamiliarDmg':{
		text_en:'Increases {Familiar} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
		'BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','HydraDmg']
	},
	'HydraDmg':{
		text_en:'Increases {Hydra} Damage by {$%}',
		exclude:['Monk','Demon Hunter','Barbarian','Crusader','Witch Doctor',
		'BlackHoleDmg','BlizzardDmg','ExplosiveBlastDmg','FamiliarDmg']
	},

	'AncientSpearDmg':{
		text_en:'Increases {Ancient Spear} Damage by {$%}',
		exclude:['Crusader','Monk','Demon Hunter','Witch Doctor','Wizard',
		'AncientSpearDmg','AncientsHammerDmg','SeismicSlamDmg','WhirlwindDmg']
	},
	'AncientsHammerDmg':{
		text_en:'Increases {Ancient\'s Hammer} Damage by {$%}',
		exclude:['Crusader','Monk','Demon Hunter','Witch Doctor','Wizard',
		'AncientSpearDmg','SeismicSlamDmg','WhirlwindDmg']
	},
	'SeismicSlamDmg':{
		text_en:'Increases {Seismic Slam} Damage by {$%}',
		exclude:['Crusader','Monk','Demon Hunter','Witch Doctor','Wizard',
		'AncientSpearDmg','AncientsHammerDmg','WhirlwindDmg']
	},
	'WhirlwindDmg':{
		text_en:'Increases {Weapon Throw} Damage by {$%}',
		exclude:['Crusader','Monk','Demon Hunter','Witch Doctor','Wizard',
		'AncientSpearDmg','AncientsHammerDmg','SeismicSlamDmg']
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
		'ClusterArrowDmg','ElementalArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg']
	},
	'ClusterArrowDmg':{
		text_en:'Increases {Cluster Arrow} Damage by {$%}',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'ChakramDmg','ElementalArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg']
	},
	'ElementalArrowDmg':{
		text_en:'Increases {Elemental Arrow} Damage by {$%}',
		suffix_en:'of Blasting',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'ChakramDmg','ClusterArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg','StrafeDmg']
	},
	'ImpaleDmg':{
		text_en:'Increases {Impale} Damage by {$%}',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'ChakramDmg','ClusterArrowDmg','ElementalArrowDmg','MultishotDmg','RapidFireDmg','StrafeDmg']
	},
	'MultishotDmg':{
		text_en:'Increases {Multishot} Damage by {$%}',
		suffix_en:'of Volleys',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'ChakramDmg','ClusterArrowDmg','ElementalArrowDmg','ImpaleDmg','RapidFireDmg','StrafeDmg']
	},
	'RapidFireDmg':{
		text_en:'Increases {Rapid Fire} Damage by {$%}',
		suffix_en:'of Salvos',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'ChakramDmg','ClusterArrowDmg','ElementalArrowDmg','ImpaleDmg','MultishotDmg','StrafeDmg']
	},
	'StrafeDmg':{
		text_en:'Increases {Strafe} Damage by {$%}',
		suffix_en:'of Prowess',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'ChakramDmg','ClusterArrowDmg','ElementalArrowDmg','ImpaleDmg','MultishotDmg','RapidFireDmg']
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
		'FirebatsDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'FirebatsDmg':{
		text_en:'Increases {Firebats} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'AcidCloudDmg','SacrificeDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'SacrificeDmg':{
		text_en:'Increases {Sacrifice} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'AcidCloudDmg','FirebatsDmg','SpiritBarrageDmg','ZombieChargerDmg']
	},
	'SpiritBarrageDmg':{
		text_en:'Increases {Spirit Barrage} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'AcidCloudDmg','FirebatsDmg','SacrificeDmg','ZombieChargerDmg']
	},
	'ZombieChargerDmg':{
		text_en:'Increases {Zombie Charger} Damage by {$%}',
		suffix_en:'of Blind Rage',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'AcidCloudDmg','FirebatsDmg','SacrificeDmg','SpiritBarrageDmg']
	},
	'ArcaneOrbDmg':{
		text_en:'Increases {Arcane Orb} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg']
	},
	'ArcaneTorrentDmg':{
		text_en:'Increases {Arcane Torrent} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ArcaneOrbDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg']
	},
	'DisintegrateDmg':{
		text_en:'Increases {Disintegrate} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ArcaneOrbDmg','ArcaneTorrentDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg']
	},
	'EnergyTwisterDmg':{
		text_en:'Increases {Energy Twister} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','MeteorDmg','RayOfFrostDmg','WaveOfForceDmg']
	},
	'MeteorDmg':{
		text_en:'Increases {Meteor} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','RayOfFrostDmg','WaveOfForceDmg']
	},
	'RayOfFrostDmg':{
		text_en:'Increases {Ray of Frost} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','WaveOfForceDmg']
	},
	'WaveOfForceDmg':{
		text_en:'Increases {Wave of Force} Damage by {$%}',
		suffix_en:'of Repulsion',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ArcaneOrbDmg','ArcaneTorrentDmg','DisintegrateDmg','EnergyTwisterDmg','MeteorDmg','RayOfFrostDmg']
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
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg']
	},
	'EntanglingShotDmg':{
		text_en:'Increases {Entangling Shot} Damage by {$%}',
		suffix_en:'of Binding',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'BolasDmg','EvasiveFireDmg','GrenadeDmg','HungeringArrowDmg']
	},
	'EvasiveFireDmg':{
		text_en:'Increases {Evasive Fire} Damage by {$%}',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'BolasDmg','EntanglingShotDmg','GrenadeDmg','HungeringArrowDmg']
	},
	'GrenadeDmg':{
		text_en:'Increases {Grenade} Damage by {$%}',
		suffix_en:'of the Grenadier',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'BolasDmg','EntanglingShotDmg','EvasiveFireDmg','HungeringArrowDmg']
	},
	'HungeringArrowDmg':{
		text_en:'Increases {Hungering Arrow} Damage by {$%}',
		suffix_en:'of the Predator',
		exclude:['Barbarian','Crusader','Monk','Witch Doctor','Wizard',
		'BolasDmg','EntanglingShotDmg','EvasiveFireDmg','GrenadeDmg']
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
		'FirebombDmg','PlagueOfToadsDmg','PoisonDartDmg']
	},
	'FirebombDmg':{
		text_en:'Increases {Firebomb} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'CorpseSpidersDmg','PlagueOfToadsDmg','PoisonDartDmg']
	},
	'PlagueOfToadsDmg':{
		text_en:'Increases {Plague of Toads} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'CorpseSpidersDmg','FirebombDmg','PoisonDartDmg']
	},
	'PoisonDartDmg':{
		text_en:'Increases {Poison Dart} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Wizard',
		'CorpseSpidersDmg','FirebombDmg','PlagueOfToadsDmg']
	},
	'ElectrocuteDmg':{
		text_en:'Increases {Electrocute} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'MagicMissleDmg','ShockPulseDmg','SpectralBladeDmg']
	},
	'MagicMissleDmg':{
		text_en:'Increases {Magic Missile} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ElectrocuteDmg','ShockPulseDmg','SpectralBladeDmg']
	},
	'ShockPulseDmg':{
		text_en:'Increases {Shock Pulse} Damage by {$%}',
		suffix_en:'of Ruin',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ElectrocuteDmg','MagicMissleDmg','SpectralBladeDmg']
	},
	'SpectralBladeDmg':{
		text_en:'Increases {Spectral Blade} Damage by {$%}',
		exclude:['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor',
		'ElectrocuteDmg','MagicMissleDmg','ShockPulseDmg']
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
		type:'legendary'
		text_en:'Automatically cast Diamond Skin when you fall below 35% Life. This effect may occur once every 15–20 seconds.'
	},
	'Magistrate':{
		type:'legendary',
		text_en:'Frost Hydra now periodically casts Frost Nova.'
	},
	'Swami':{
		type:'legendary'
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
	'SeetingHatred':{
		type:'legendary',
		text_en:'Chakram now generates {$} Hatred.'
	},
	'NinthCirri':{
		type:'legendary',
		text_en:'Hungering Arrow has {$%} additional chance to pierce.'
	}


};

module.exports = affixMap;