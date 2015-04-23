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

###Values