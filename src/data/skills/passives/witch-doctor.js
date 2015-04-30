var witchDoctor = [
	{
		name_en:'Jungle Fortitude',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_junglefortitude.png',
		text_en:'Reduce all damage taken by you and your pets by {15}%.',
		flavor_en:'To be one with the jungle is to take what you need and endure what you must.'
	},
	{
		name_en:'Circle of Life',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_circleoflife.png',
		text_en:'When an enemy dies within {20} yards, there is a {15%} chance that a Zombie Dog will automatically emerge.\n\nThe range of this effect is increased by your gold pickup radius.',
		flavor_en:'"The heads hanging in the village had their eyes sewn shut with thick thread. Whatever wicked magic held the frightful hound-beasts together was considerably stronger." —Abner Lockridge'
	},
	{
		name_en:'Spiritual Attunement',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_spiritualattunement.png',
		text_en:'Maximum Mana is increased by {10%}. Regenerate {1%} of your maximum Mana per second.\n\nMana fuels your offensive and defensive skills.',
		flavor_en:'"The pool is deep and still, cool and silent. Now a fountain, now a whirlpool. Drink and be renewed." —Runic carvings on the Shallow Stone'
	},
	{
		name_en:'Gruesome Feast',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_gruesomefeast.png',
		text_en:'When you are healed by a health globe, gain {10%} of your maximum Mana and {10%} Intelligence for {15} seconds. The Intelligence bonus stacks up to {5} times.',
		flavor_en:'"We are all connected in life and in death. Partake of the spirits of the dead and flourish like the jungle that grows wild after the fire." —Shadewalker Zunimassa'
	},
	{
		name_en:'Blood Ritual',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_bloodritual.png',
		text_en:'{10%} of Mana costs are paid with Life. In addition, you regenerate {1%} of your maximum Life per second.',
		flavor_en:'"To give of one\'s self... Is there any greater gift?" —Final words spoken at the Ritual of Blood'
	},
	{
		name_en:'Bad Medicine',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_badmedicine.png',
		text_en:'When you deal Poison damage to an enemy, its damage is reduced by {20%} for {3} seconds.',
		flavor_en:'"Their mastery of paralytic agents is astounding. The jungle, they say, provides ample demonstration of its wonders." —Abner Lockridge'
	},
	{
		name_en:'Zombie Handler',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_zombiehandler.png',
		text_en:'You can have {1} additional Zombie Dog summoned at one time. Your Life, and that of your Zombie Dogs and Gargantuan are increased by {20%}.',
		flavor_en:'The dead are willing minions. Death to them is not unknown, therefore need not be feared.'
	},
	{
		name_en:'Pierce the Veil',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_piercetheveil.png',
		text_en:'All of your damage is increased by {20%}, but your Mana costs are increased by {30%}.',
		flavor_en:'"The spirits take their toll. Best to be ready to pay." —Shadewalker Zunimassa'
	},
	{
		name_en:'Spirit Vessel',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_spiritvessel.png',
		text_en:'Reduce the cooldown of your Horrify, Spirit Walk, and Soul Harvest spells by {2} seconds.\n\nIn addition, the next time you receive fatal damage, you automatically enter the spirit realm for {2} seconds and heal to {15%} of your maximum Life.\n\nThis effect may occur once every {90} seconds.',
		flavor_en:'Everyone dies. Sometimes we must return to finish what we started.'
	},
	{
		name_en:'Fetish Sycophants',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_fetishsycophants.png',
		text_en:'When you hit enemies with your spells, you have up to a {15%} chance to summon a dagger-wielding Fetish to fight by your side for {60} seconds.',
		flavor_en:'The denizens of the Unformed Land are mischievous and drawn to power, always seeking to intrude upon our world, but too fickle to stay for long.'
	},
	{
		name_en:'Rush of Essence',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_rushofessence.png',
		text_en:'Spirit spells return {100} Mana over {10} seconds.\n\nSpirit spells are:\nHaunt\nHorrify\nMass Confusion\nSoul Harvest\nSpirit Barrage\nSpirit Walk',
		flavor_en:'All spirits must move onward if they wish to return to their origins. There is no going back.'
	},
	{
		name_en:'Vision Quest',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_visionquest.png',
		text_en:'When you deal damage with Corpse Spiders, Firebomb, Plague of Toads, or Poison Dart, your Mana regeneration is increased by {30%} for {5} seconds.',
		flavor_en:'"You sense but do not see. Walk beside yourself in the Unformed Land. Walk until you find yourself again, or wander lost forever." —Chant of Ordeal'
	},
	{
		name_en:'Fierce Loyalty',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_fierceloyalty.png',
		text_en:'You can have {1} additional Zombie Dog summoned at one time. While you have a Zombie Dog, Gargantuan, or Fetish following you and not in combat, your movement speed is increased by {30%}.',
		flavor_en:'Establish dominance. They will obey.'
	},
	{
		name_en:'Grave Injustice',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_graveinjustice.png',
		text_en:'Gain {1%} of your maximum Life and Mana and reduce the cooldown of all of your skills by {1} second when an enemy dies within {20} yards.\n\nThe range is extended by items that increase your gold pickup radius.',
		flavor_en:'Only a fool tries to cheat death. The wise offer a fair trade.'
	},
	{
		name_en:'Tribal Rites',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_tribalrites.png',
		text_en:'Reduce the cooldowns of your Fetish Army, Big Bad Voodoo, Hex, Gargantuan, Summon Zombie Dogs and Mass Confusion skills by {25%}.',
		flavor_en:'"Befriend those who come from the Unformed Land, and they will befriend you." —Zuwadza of the Tribe of the Five Hills'
	},
	{
		name_en:'Creeping Death',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_creepingdeath.png',
		text_en:'Your Haunt, Locust Swarm and the damage amplification from Piranhas last almost forever.',
		flavor_en:'There are some terrors that cannot be outrun. Bit by bit, second by second, they consume you.'
	},
	{
		name_en:'Physical Attunement',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_physicalattunement.png',
		text_en:'You gain {70} Physical Resistance for every enemy within {20} yards.\n\nThe range of this effect is increased by your gold pickup radius.',
		flavor_en:'Know your enemies. Know their strength. Make it your own.'
	},
	{
		name_en:'Midnight Feast',
		image:'//media.blizzard.com/d3/icons/skills/64/witchdoctor_passive_midnightfeast.png',
		text_en:'You can have {1} additional Zombie Dog summoned at one time. The damage of your Zombie Dogs and Gargantuan is increased {50%}.',
		flavor_en:'In the deepest hour of night, they emerge for the hunt.'
	}
];

module.exports = witchDoctor;