#d3sim
A collection of data used to simulate Kadala gambling and random item generation of the game Diablo III by Blizzard Entertainment. Based on the data collected by:
[데이터를거두는자](https://docs.google.com/spreadsheets/d/1Ne3aqWO_UyE3yQhtbBPm1BcoRK3OsNMwwmDTbYLefzY/edit#gid=1902649360), [bumbalump](http://www.reddit.com/user/bumbalump), [d07RiV](http://www.reddit.com/user/d07RiV), and [p0d3x](http://www.reddit.com/user/p0d3x)


##Usage
require/run in browser


##Methods
* [d3sim.setKadala()](#d3simsetkadalaclassseasonalhardcore)
* [d3sim.kadalaRoll()](#d3simkadalarollslot)
* [d3sim.craftItem()](#d3simcraftitemslotclassname)
* [d3sim.getCraftable()](#d3simgetcraftableclass)
* [d3sim.createItem()](#d3simcreateitemrarityclassname)

---

####d3sim.setKadala(class,seasonal,hardcore)

This sets the basis of gambling for items off of Kadala.

*Arguments*

1. `class` (string): The Diablo III class to use. Must be one of: 'Barbarian', 'Crusader, 'Demon Hunter', 'Monk', 'Witch Doctor', or 'Wizard'
2. `seasonal` (bool): Whether the not the character is seasonal
3. `hardcore` (bool): Whether the not the character is hardcore

*Example*

```javascript
d3sim.setKadala('Demon Hunter',true,false);
```

---
####d3sim.kadalaRoll(slot)

Rolls for a random item from Kadala based on slot.

*Arguments*

1. `slot` (string): The Diablo III slot to roll. Must be one of: 'amulet', 'belt', 'boots', 'bracers', 'chest', 'gloves', 'helm', 'mojo', 'onehand', 'pants', 'quiver', 'ring', 'shield', 'shoulders', 'source', or 'twohand'

*Example*

```javascript
d3sim.kadalaRoll('twohand');
```

---
####d3sim.craftItem(slot,class,name)

This crafts any item and rolls the rarity for a chance at ancient.

*Arguments*

1. `slot` (string): The Diablo III slot to roll. Must be one of: 'amulet', 'belt', 'boots', 'bracers', 'chest', 'gloves', 'helm', 'mojo', 'onehand', 'pants', 'quiver', 'ring', 'shield', 'shoulders', 'source', or 'twohand'
2. `class` (string): The Diablo III class to use. Must be one of: 'Barbarian', 'Crusader, 'Demon Hunter', 'Monk', 'Witch Doctor', or 'Wizard'
3. `name` (string): The name of the item to craft

*Example*

```javascript
d3sim.craftItem('amulet','Demon Hunter','Hellfire Amulet');
```

---
####d3sim.getCraftable(class)

This returns an object which defines what items are craftable by a given class. Only legendary crafting is currently supported.

*Arguments*

1. `class` (string): The Diablo III class to use. Must be one of: 'Barbarian', 'Crusader, 'Demon Hunter', 'Monk', 'Witch Doctor', or 'Wizard'

*Example*
```javascript
d3sim.getCraftable('Barbarian');
```

---
####d3sim.createItem(rarity,slot,class,name)

Creates a new randomly generated item with given parameters. This is the internal method used to generate items from all sources (crafted/kadala).

*Arguments*

1. `rarity` (string): The rarity of the item to be created. Must be one of: 'magic', 'rare','legendary', or 'ancient'
2. `slot` (string): The slot of the item to be created. Must be one of: 'amulet', 'belt', 'boots', 'bracers', 'chest', 'gloves', 'helm', 'mojo', 'onehand', 'pants', 'quiver', 'ring', 'shield', 'shoulders', 'source', or 'twohand'
3. `class` (string): The Diablo III class to use. Must be one of: 'Barbarian', 'Crusader, 'Demon Hunter', 'Monk', 'Witch Doctor', or 'Wizard'
4. `name` (string,optional): The name of a specific legendary item to be rolled

*Example*

```javascript
d3sim.createItem('ancient','twohand','Monk','Flying Dragon');
```

---
##Data still needed:

###Suffixes/Prefixes
Having more suffixes and prefixes will allow a larger variety of blue items to roll
```
Physical Skills deal {$%} more damage
Arcane Skills deal {$%} more damage
Cold Skills deal {$%} more damage
Fire Skills deal {$%} more damage
Poison Skills deal {$%} more damage
{$} - {$} Damage (Jewelry)
{+$%} Damage (Weapon)
{$%} chance to inflict Bleed for {$%} weapon damage over {5} seconds

Reduces damage from elites by {$%}
Reduces duration of control impairing effects by {$%}
Ignores Durability Loss
{+$%} Chance to Block
{$%} Chance to Freeze on Hit
{$%} Chance to Immobolize on Hit

{+$} Maximum Spirit (Monk Only)
{+$} Maximum Fury (Barbarian Only)
Gain {$} Life per Fury Spent (Barbarian Only)
Gain {$} Life per Spirit Spent (Monk Only)
Increases Wrath Regeneration by {$} per Second (Crusader Only)
{+$} Maximum Wrath (Crusader Only)
{+$} Maximum Mana (Witch Doctor Only
Increases Mana Regeneration by {$} per Second (Witch Doctor Only)

pretty much every non-demon hunter skill based affix
```

###other
```
slave bonds life after kill value unknown
faithful memory 2h sword needs thorns value
```