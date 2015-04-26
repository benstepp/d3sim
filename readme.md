#d3sim
A collection of data used to simulate Kadala rolling and random item generation based on the data collected by:
[데이터를거두는자](https://docs.google.com/spreadsheets/d/1Ne3aqWO_UyE3yQhtbBPm1BcoRK3OsNMwwmDTbYLefzY/edit#gid=1902649360), [bumbalump](http://www.reddit.com/user/bumbalump), and [p0d3x](http://www.reddit.com/user/p0d3x)


##Usage
require/run in browser

```javascript
d3sim.setKadala(class,seasonal,hardcore);
```
sets the basis for the rolls. 
class can be one of ['Barbarian','Crusader','Demon Hunter','Monk','Witch Doctor','Monk']
seasonal and hardcore are booleans.

```javascript
d3sim.kadalaRoll(slot);
```
rolls a single item from kadala. 
slot is a string and must be one of ['amulet','belt','boots','bracers','chest','gloves','helm','mojo','onehand','pants','quiver','ring','shield','shoulders','source','twohand']


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
Increases Mana Regeneration by {$} per Second(Witch Doctor Only)
```
###Values

####Helmet
Max Spirit Rare
Max Spirit Ancient

####Pants
Thorns Ancient

####Shoulders
Secondary Resists Ancient
Bonus Experience Ancient
Chill on Hit Ancient

####Shield
Rare All Resist
Ancient Life%
Ancient All Resist
Ancient Life Regen
Ancient Block
Ancient Area Damag
Ancient Elite Reduction
Ancient Elite Damage
Ancient Life per Wrath
Ancient Wrath Regen
Ancient Bleed
Ancient Globes
Ancient onHit
Ancient Max Wrath