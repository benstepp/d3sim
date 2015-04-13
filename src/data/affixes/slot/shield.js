var shield = {
	slot_en:'Off-Hand',
	type:{
		'Shield':{
			name_en:'Ascended Shield',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/shield_209_demonhunter_male.png'
			}
		},
		'Crusader Shield':{
			name_en:'Stalwart Guardian',
			image:{
				default:'//media.blizzard.com/d3/icons/items/large/crusadershield_207_demonhunter_male.png'
			},
			exclude:['Demon Hunter','Monk','Barbarian','Witch Doctor','Wizard']
		}
	},
	primary:{},
	secondary:{
		PhysRes:{},
		ColdRes:{},
		FireRes:{},
		LightRes:{},
		ArcRes:{},
		PoisRes:{},
		RangeReduc:{},
		MeleeReduc:{},
		LifeAfterKill:{},
		GoldFind:{},
		PickupRadius:{},
		BonusXp:{},
		Globes:{},
		IgnoreDura:{},
		LevelReduc:{},
		Thorns:{}
	}
};

module.exports = shield;