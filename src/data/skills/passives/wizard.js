var wizard = [
	{
		name_en:'Power Hungry',
		image:'//media.blizzard.com/d3/icons/skills/64/wizard_passive_powerhungry.png',
		text_en:'Being healed by a health globe causes the next Arcane Power Spender you cast to be cast for free.\n\nYou can have up to {10} charges of Power Hungry.',
		flavor_en:'"It just doesn\'t sit right with me. Some of the things these so-called wizards do... They border on necromancy. Or worse! It\'s just not proper magic." —Venerable Sorcerer Fob Dunar'
	},
	{
		name_en:'Blur',
		image:'//media.blizzard.com/d3/icons/skills/64/wizard_passive_blur.png',
		text_en:'Decrease damage taken by {17%}.',
		flavor_en:'Truly powerful Wizards have been known to turn their magic inward, transmuting the very composition of their own bodies for boundless energy and catlike reflexes.'
	},
	{
		name_en:'Evocation',
		image:'//media.blizzard.com/d3/icons/skills/64/wizard_passive_evocation.png',
		text_en:'Reduce all cooldowns by {20%}.',
		flavor_en:'So long have you focused on twisting reality to your will that time itself seeks to appease you.'
	},
	{
		name_en:'Glass Cannon',
		image:'//media.blizzard.com/d3/icons/skills/64/wizard_passive_glasscannon.png',
		text_en:'Increase all damage done by {15%}, but decrease Armor and resistances by {10%}.',
		flavor_en:'"How will I survive? I don\'t intend to get hit in the first place. If you even touch me, it\'s because I allowed it." —Maloth, renegade wizard'
	},
	{
		name_en:'Prodigy',
		image:'//media.blizzard.com/d3/icons/skills/64/wizard_passive_prodigy.png',
		text_en:'When you cast a Signature spell, you gain {5} Arcane Power.\n\nThe following skills are Signature spells:\nMagic Missile\nShock Pulse\nSpectral Blade\nElectrocute',
		flavor_en:'"Heavy steel armor may turn aside a blade, but let\'s see how well it works against lightning!" —Larra Stormlash\'s infamous faux pas at the Royal Westmarch Joust'
	},
	{
		name_en:'Astral Presence',
		image:'//media.blizzard.com/d3/icons/skills/64/wizard_passive_astralpresence.png',
		text_en:'Increase your maximum Arcane Power by {20} and Arcane Power regeneration by {2.5} per second.',
		flavor_en:'"Feel the power in the veil that surrounds us—a thunder cloud ready to burst... a volcano about to erupt. Harness it, and you will be invincible." —Adria'
	},
	{
		name_en:'Illusionist',
		image:'//media.blizzard.com/d3/icons/skills/64/wizard_passive_illusionist.png',
		text_en:'When you take more than {15%} of your maximum Life in damage within {1} second, the cooldowns on Mirror Image, Slow Time, and Teleport are reset.\n\nWhen you use Mirror Image, Slow Time, or Teleport, your movement speed is increased by {30%} for {3} seconds.',
		flavor_en:'"To be where you are not is the wisest of strategies." —Grand Archmage Ralhys'
	},
	{
		name_en:'Cold Blooded',
		image:'//media.blizzard.com/d3/icons/skills/64/wizard_passive_coldblooded.png',
		text_en:'Enemies chilled or frozen by you take {10%} more damage from all sources for the duration of the chill or Freeze.',
		flavor_en:'"Feel your blood run cold as the water of the Frozen Sea, and know that I can shatter you with a touch." —The Ice Queen\'s Tale'
	},
	{
		name_en:'Conflagration',
		image:'//media.blizzard.com/d3/icons/skills/64/wizard_passive_conflagration.png',
		text_en:'Fire damage dealt to enemies applies a burning effect, increasing their chance to be critically hit by {6%} for {3} seconds.',
		flavor_en:'"The red hot armor seared their flesh and boiled their blood as they tried desperately to pry it from smoldering bodies. We finished the defenseless creatures as an act of mercy." —Tales of Caldeum, Volume XII'
	},
	{
		name_en:'Paralysis',
		image:'//media.blizzard.com/d3/icons/skills/64/wizard_passive_paralysis.png',
		text_en:'Lightning spells have a {15%} chance to Stun all targets hit for {1.5} seconds.',
		flavor_en:'"Some people are shocked by my mastery of magic." —Larra Stormlash'
	},
	{
		name_en:'Galvanizing Ward',
		image:'//media.blizzard.com/d3/icons/skills/64/wizard_passive_galvanizingward.png',
		text_en:'As long as you have not taken damage in the last {5} seconds you gain a protective shield that absorbs the next {81536} damage.',
		flavor_en:'"Power begets power. The excess energy from one spell is absorbed by the other, and so the effect is sustained." —Excerpt from Grand Master Clavaught\'s Lecture on Synergistic Effects in Esoteric Arcane Spheres'
	},
	{
		name_en:'Temporal Flux',
		image:'//media.blizzard.com/d3/icons/skills/64/wizard_passive_temporalflux.png',
		text_en:'Enemies that take Arcane damage are slowed by {80%} for {2} seconds.',
		flavor_en:'"The energies of time and arcane power are jealous consorts. If you caress the one, you neglect the other at great risk." —Ennead Sage Resko'
	},
	{
		name_en:'Dominance',
		image:'//media.blizzard.com/d3/icons/skills/64/x1_wizard_passive_arcaneaegis.png',
		text_en:'Killing an enemy grants a shield that absorbs {16093} damage for {3} seconds. This effect can stack up to {10} times.\n\nRefreshing Dominance will set the shield to its maximum possible potency and each stack will increase its total duration by {0.5} seconds.',
		flavor_en:'"Why waste your own energy? Using your enemy\'s to protect yourself strengthens you while it weakens him. What could be more perfect?" —Ennead Sage Resko'
	},
	{
		name_en:'Arcane Dynamo',
		image:'//media.blizzard.com/d3/icons/skills/64/wizard_passive_arcanedynamo.png',
		text_en:'When you cast a Signature spell, you gain a Flash of Insight. After {5} Flashes of Insight, your next non-Signature spell deals {60%} additional damage.\n\nThe following skills are Signature spells:\nMagic Missile\nShock Pulse\nSpectral Blade\nElectrocute',
		flavor_en:'Dare not to invoke the wrath of a Wizard. You are nothing more than a loose coalescence of dust before their ire, easily scattered at a whim.'
	},
	{
		name_en:'Unstable Anomaly',
		image:'//media.blizzard.com/d3/icons/skills/64/wizard_passive_unstableanomaly.png',
		text_en:'When you receive fatal damage, you heal to {45%} of your maximum Life and release a shockwave that knocks enemies back and slows them by {60%} for {3} seconds.\n\nThis effect may occur once every {60} seconds.',
		flavor_en:''
	},
	{
		name_en:'Unwavering Will',
		image:'//media.blizzard.com/d3/icons/skills/64/x1_wizard_passive_unwaveringwill.png',
		text_en:'Standing still for {1.5} seconds increases the following attributes:\nArmor: {20%}\nAll Resistances: {20%}\nDamage: {10%}',
		flavor_en:'"At times the greatest strategy is to withdraw into yourself, to experience the clarity of mind in the moments before launching your attack." —Archmage Skye'
	},
	{
		name_en:'Audacity',
		image:'//media.blizzard.com/d3/icons/skills/64/x1_wizard_passive_audacity.png',
		text_en:'You deal {15%} additional damage to enemies within {15} yards.',
		flavor_en:'"Those who dare approach you do so at their own peril." —Valthek, High Councilor of the Vizjerei'
	},
	{
		name_en:'Elemental Exposure',
		image:'//media.blizzard.com/d3/icons/skills/64/x1_wizard_passive_elementalexposure.png',
		text_en:'Damaging enemies with Arcane, Cold, Fire or Lightning will cause them to take {5%} more damage from all sources for {5} seconds. Each different damage type applies a stack, stacking up to {4} times.\nElemental damage from your weapon contributes to Elemental Exposure.',
		flavor_en:'Adding insult to injury may be entertaining, but adding increased injury is a more effective tactic.'
	}
];

module.exports = wizard;