/*
PARAMETERS
name: Name.
family: Family or realm.
classType: Class. 
  Barbarian, Cleric, Druid, Fighter, Monk,
  Paladin, Ranger, Rogue, Sorcerer, Wizard
rarity: Rarity.
  1: Common.
  2: Uncommon.
  3: Rare.
  4: Epic.
  5: Legendary.
element: Element (Fire, Ice, Nature, Holy, Dark).
speed: Speed.
  1: Very Slow.
  2: Slow.
  3: Average.
  4: Fast.
  5: Very Fast.
  6: Slayer.
    Slayer mana speed is below average, but the mana speed increases when the
    family effect activates.
  7: Styx.
    The Hero's mana bar can be filled up to 3 times before casting the special
    skill. The Skill's effect varies based on the amount of times the mana bar
    has been filled.
  8: Changing Tides.
    The mana speed alternates between Fast and Average every time the Hero casts
    the Special Skill.
  9: Magic.
costume: Whether the hero has a costume or not (true/false).
*/

class Hero {
  constructor(name, family, classType, rarity, element, speed, costume) {
    this.name = name;
    this.family = family;
    this.classType = classType;
    this.rarity = rarity;
    this.element = element;
    this.speed = speed;
    this.costume = costume;
  }
}

const heroes = [
  new Hero("Aether Mimic", "Mimic", "Sorcerer", 5, "Ice", 2, false),
  new Hero("Agharoth", "Astral Demons", "Paladin", 3, "Ice", 1, false),
  new Hero("Agnes", "Asgard", "Rogue", 3, "Holy", 4, false),
  new Hero("Agwe", "Lagoon", "Cleric", 4, "Ice", 3, false),
  new Hero(
    "Agwe (Toon Chameleon Shaman)",
    "Lagoon",
    "Cleric",
    4,
    "Ice",
    3,
    true,
  ),
  new Hero("Agwe (Chameleon Alchemist)", "Lagoon", "Wizard", 4, "Ice", 3, true),
  new Hero("Ahhotep", "Moon", "Rogue", 4, "Dark", 3, false),
  new Hero("Ahhotep (Mummy Champion)", "Moon", "Fighter", 4, "Dark", 3, true),
  new Hero("Aife", "Classic", "Fighter", 1, "Nature", 4, false),
  new Hero("Ali", "Mahayoddha", "Ranger", 3, "Nature", 4, false),
  new Hero("Ana-Belle", "Morlovia", "Cleric", 4, "Dark", 3, false),
  new Hero(
    "Ana-Belle (Baroness of Dust)",
    "Morlovia",
    "Sorcerer",
    4,
    "Dark",
    3,
    true,
  ),
  new Hero("Arman", "Sand Empire", "Fighter", 3, "Holy", 2, false),
  new Hero("Azar", "Classic", "Barbarian", 3, "Fire", 4, false),
  new Hero(
    "Azar (Seeker of Style)",
    "Classic",
    "Barbarian",
    3,
    "Fire",
    4,
    true,
  ),
  new Hero(
    "Azar (Seeker of Glass)",
    "Classic",
    "Barbarian",
    3,
    "Fire",
    4,
    true,
  ),
  new Hero(
    "Azar (Seeker of Toons)",
    "Classic",
    "Barbarian",
    3,
    "Fire",
    4,
    true,
  ),
  new Hero("Azar (Seeker of Gods)", "Classic", "Ranger", 3, "Fire", 4, true),
  new Hero("Azlar", "Classic", "Barbarian", 5, "Fire", 2, false),
  new Hero("Bagreg", "Nightmares of Atlantis", "Ranger", 3, "Fire", 8, false),
  new Hero(
    "Bagreg (Fishboy Scout)",
    "Nightmares of Atlantis",
    "Rogue",
    3,
    "Fire",
    8,
    true,
  ),
  new Hero("Balthazar", "Classic", "Wizard", 3, "Dark", 4, false),
  new Hero("Bane", "Classic", "Monk", 3, "Holy", 4, false),
  new Hero("Bane (Glass Brawler)", "Classic", "Monk", 3, "Holy", 4, true),
  new Hero("Bane (Toon Brawler)", "Classic", "Monk", 3, "Holy", 4, true),
  new Hero("Bane (Noble Brawler)", "Classic", "Ranger", 3, "Holy", 4, true),
  new Hero("Belith", "Classic", "Druid", 3, "Nature", 3, false),
  new Hero("Berden", "Classic", "Ranger", 3, "Nature", 4, false),
  new Hero("Betty", "Gargoyle", "Rogue", 3, "Dark", 3, false),
  new Hero("Bjorn", "Midgard", "Monk", 3, "Dark", 3, false),
  new Hero("Bjorn (Brave Toon)", "Midgard", "Monk", 3, "Dark", 3, true),
  new Hero("Bjorn (Brave Soldier)", "Midgard", "Rogue", 3, "Dark", 3, true),
  new Hero("Boldtusk", "Classic", "Fighter", 4, "Fire", 3, false),
  new Hero("Boots", "Goblin", "Barbarian", 3, "Fire", 3, false),
  new Hero("Boril", "Classic", "Cleric", 4, "Ice", 3, false),
  new Hero("Boril (Glass Defender)", "Classic", "Cleric", 4, "Ice", 3, true),
  new Hero("Boril (Toon Defender)", "Classic", "Cleric", 4, "Ice", 3, true),
  new Hero("Boril (Tavern Defender)", "Classic", "Fighter", 4, "Ice", 3, true),
  new Hero(
    "Boril (Heavyweight Defender)",
    "Classic",
    "Paladin",
    4,
    "Ice",
    3,
    true,
  ),
  new Hero("Brand", "Classic", "Fighter", 1, "Ice", 3, false),
  new Hero("Brienne", "Classic", "Druid", 3, "Nature", 3, false),
  new Hero("Brogan", "Classic", "Fighter", 2, "Nature", 3, false),
  new Hero("Bryggvir", "Myrkheim", "Barbarian", 3, "Ice", 3, false),
  new Hero("Brynhild", "Midgard", "Rogue", 4, "Nature", 4, false),
  new Hero("Buddy", "Winter", "Ranger", 4, "Nature", 3, false),
  new Hero("Buster", "Winter", "Barbarian", 3, "Fire", 2, false),
  new Hero("Caedmon", "Classic", "Druid", 4, "Nature", 4, false),
  new Hero("Carver", "Classic", "Rogue", 3, "Nature", 3, false),
  new Hero("Chao", "Classic", "Ranger", 4, "Holy", 4, false),
  new Hero("Chao (Glass Tactician)", "Classic", "Ranger", 4, "Holy", 4, true),
  new Hero("Chao (Toon Tactician)", "Classic", "Ranger", 4, "Holy", 4, true),
  new Hero("Chao (Tiger Master)", "Classic", "Barbarian", 4, "Holy", 4, true),
  new Hero("Chao (Master Conservator)", "Classic", "Druid", 4, "Holy", 4, true),
  new Hero("Chick Jr.", "Springvale", "Paladin", 3, "Ice", 3, false),
  new Hero("Chires", "Astral Dwarfs", "Rogue", 3, "Nature", 3, false),
  new Hero("Chochin", "Sakura", "Sorcerer", 3, "Dark", 3, false),
  new Hero("Cillian", "Slayer", "Fighter", 4, "Fire", 6, false),
  new Hero("Colen", "Classic", "Fighter", 4, "Fire", 2, false),
  new Hero("Cordelia", "Legends 2026", "Sorcerer", 5, "Dark", 2, false),
  new Hero("Cyprian", "Classic", "Paladin", 4, "Dark", 3, false),
  new Hero("Dante", "Styx", "Rogue", 3, "Fire", 7, false),
  new Hero("Dawa", "Classic", "Rogue", 3, "Holy", 3, false),
  new Hero("Dawa (Vitrail of Shaguad)", "Classic", "Rogue", 3, "Holy", 3, true),
  new Hero("Dawa (Toon of Shaguad)", "Classic", "Rogue", 3, "Holy", 3, true),
  new Hero(
    "Dawa (Shaguadian Guardian)",
    "Classic",
    "Barbarian",
    3,
    "Holy",
    3,
    true,
  ),
  new Hero("Derric", "Classic", "Fighter", 1, "Nature", 3, false),
  new Hero("Dvalin", "Legends 2026", "Fighter", 5, "Ice", 3, false),
  new Hero("Ei-Dunn", "Niflheim", "Paladin", 3, "Fire", 3, false),
  new Hero(
    "Ei-Dunn (Cursed Viking Toon)",
    "Niflheim",
    "Paladin",
    3,
    "Fire",
    3,
    true,
  ),
  new Hero(
    "Ei-Dunn (Ferocious Viking Battler)",
    "Niflheim",
    "Barbarian",
    3,
    "Fire",
    3,
    true,
  ),
  new Hero("Eron", "Owl", "Sorcerer", 5, "Fire", 4, false),
  new Hero("Fafnir", "Myrkheim", "Fighter", 5, "Nature", 4, false),
  new Hero("Farid", "Classic", "Barbarian", 2, "Fire", 3, false),
  new Hero("Fianna", "Plains Hunter", "Ranger", 3, "Nature", 3, false),
  new Hero("Fjalar", "Nidavellir", "Fighter", 4, "Holy", 3, false),
  new Hero("Fletcher", "Classic", "Rogue", 1, "Dark", 4, false),
  new Hero("Friar Tuck", "Classic", "Monk", 3, "Nature", 3, false),
  new Hero("Frosty", "Winter", "Rogue", 3, "Ice", 3, false),
  new Hero("Fura", "Svartalfheim", "Wizard", 4, "Dark", 3, false),
  new Hero(
    "Fura (Herbalist of Svartalfheim)",
    "Svartalfheim",
    "Druid",
    4,
    "Dark",
    3,
    true,
  ),
  new Hero("Gan Ju", "Classic", "Monk", 3, "Holy", 4, false),
  new Hero("General Yin", "Journey", "Barbarian", 3, "Nature", 2, false),
  new Hero("Gill-Ra", "Lagoon", "Sorcerer", 3, "Dark", 2, false),
  new Hero("Gill-Ra (Shallows Pursuer)", "Lagoon", "Rogue", 3, "Dark", 2, true),
  new Hero("Goopy", "Morlovia", "Barbarian", 3, "Nature", 3, false),
  new Hero("Gormek", "Classic", "Barbarian", 4, "Fire", 3, false),
  new Hero("Graymane", "Classic", "Sorcerer", 3, "Ice", 3, false),
  new Hero(
    "Graymane (The Ferocious Glass)",
    "Classic",
    "Sorcerer",
    3,
    "Ice",
    3,
    true,
  ),
  new Hero(
    "Graymane (The Ferocious Toon)",
    "Classic",
    "Sorcerer",
    3,
    "Ice",
    3,
    true,
  ),
  new Hero(
    "Graymane (Garlic Thief)",
    "Classic",
    "Barbarian",
    3,
    "Ice",
    3,
    true,
  ),
  new Hero("Greel", "Abyss Hunter", "Barbarian", 3, "Dark", 1, false),
  new Hero("Grimm", "Classic", "Barbarian", 4, "Ice", 3, false),
  new Hero(
    "Grimm (Heir of Evil Style)",
    "Classic",
    "Barbarian",
    4,
    "Ice",
    3,
    true,
  ),
  new Hero("Grimm (Dark Vitrail)", "Classic", "Barbarian", 4, "Ice", 3, true),
  new Hero("Grimm (Dark Toon)", "Classic", "Barbarian", 4, "Ice", 3, true),
  new Hero("Grimm (Dark Messenger)", "Classic", "Ranger", 4, "Ice", 3, true),
  new Hero("Grimm (Heir of Evil)", "Classic", "Rogue", 4, "Ice", 3, true),
  new Hero("Gunnar", "Classic", "Paladin", 3, "Ice", 2, false),
  new Hero("Gunnar (Glass Knight)", "Classic", "Paladin", 3, "Ice", 2, true),
  new Hero("Gunnar (Toon Knight)", "Classic", "Paladin", 3, "Ice", 2, true),
  new Hero("Gunnar (Brave Blacksmith)", "Classic", "Druid", 3, "Ice", 2, true),
  new Hero("Harubo", "Slime", "Fighter", 3, "Holy", 3, false),
  new Hero("Hawkmoon", "Classic", "Cleric", 3, "Fire", 3, false),
  new Hero("Heifeng Guai", "Journey", "Rogue", 4, "Dark", 4, false),
  new Hero("Helgi", "Nidavellir", "Paladin", 3, "Fire", 2, false),
  new Hero("Helo", "Underwild", "Druid", 3, "Ice", 3, false),
  new Hero("Helo (Eloi Baker)", "Underwild", "Paladin", 3, "Ice", 3, true),
  new Hero("Hikaru", "Classic", "Rogue", 1, "Holy", 4, false),
  new Hero("Hisan", "Sand Empire", "Wizard", 3, "Nature", 4, false),
  new Hero("Holly", "Winter", "Cleric", 4, "Holy", 2, false),
  new Hero("Hou", "Classic", "Monk", 2, "Holy", 3, false),
  new Hero("Isshtak", "Classic", "Ranger", 3, "Nature", 3, false),
  new Hero(
    "Isshtak (Glass Fighter)",
    "Classic",
    "Ranger",
    3,
    "Nature",
    3,
    true,
  ),
  new Hero("Isshtak (Toon Fighter)", "Classic", "Ranger", 3, "Nature", 3, true),
  new Hero(
    "Isshtak (Lizardfolk Ancestor)",
    "Classic",
    "Monk",
    3,
    "Nature",
    3,
    true,
  ),
  new Hero("Jabbar", "Sand Empire", "Monk", 4, "Dark", 3, false),
  new Hero("Jack", "Morlovia", "Wizard", 3, "Dark", 4, false),
  new Hero("Jaco", "Defenders of Atlantis", "Sorcerer", 3, "Holy", 8, false),
  new Hero(
    "Jaco (Dodgy Alchemist of the Deep)",
    "Defenders of Atlantis",
    "Wizard",
    3,
    "Holy",
    8,
    true,
  ),
  new Hero("Jahangir", "Classic", "Sorcerer", 3, "Fire", 2, false),
  new Hero("Jarvur", "Svartalfheim", "Druid", 3, "Ice", 4, false),
  new Hero("Jenneh", "Classic", "Druid", 2, "Nature", 3, false),
  new Hero("Jill", "Classic", "Fighter", 2, "Fire", 3, false),
  new Hero("Jott", "Jotunheim", "Barbarian", 4, "Ice", 2, false),
  new Hero("Joukahainen", "Kalevala", "Monk", 3, "Ice", 3, false),
  new Hero(
    "Joukahainen (Frozen Hunter)",
    "Kalevala",
    "Rogue",
    3,
    "Ice",
    3,
    true,
  ),
  new Hero("Julius", "Classic", "Fighter", 2, "Dark", 4, false),
  new Hero("Junaid", "Moon", "Fighter", 4, "Fire", 4, false),
  new Hero("Junaid (Sworn Champion)", "Moon", "Paladin", 4, "Fire", 4, true),
  new Hero("Kailani", "Classic", "Cleric", 3, "Holy", 2, false),
  new Hero("Kalø", "Gargoyle", "Sorcerer", 4, "Nature", 1, false),
  new Hero("Karil", "Classic", "Barbarian", 3, "Ice", 3, false),
  new Hero("Kelile", "Classic", "Rogue", 4, "Fire", 4, false),
  new Hero(
    "Kelile (Stylish Priestess)",
    "Classic",
    "Rogue",
    4,
    "Fire",
    4,
    true,
  ),
  new Hero(
    "Kelile (Vitrail of Dragonia)",
    "Classic",
    "Rogue",
    4,
    "Fire",
    4,
    true,
  ),
  new Hero("Kelile (Dance of Toons)", "Classic", "Rogue", 4, "Fire", 4, true),
  new Hero(
    "Kelile (Sorceress of Dragonia)",
    "Classic",
    "Sorcerer",
    4,
    "Fire",
    4,
    true,
  ),
  new Hero(
    "Kelile (Shaman of Dragonia)",
    "Classic",
    "Druid",
    4,
    "Fire",
    4,
    true,
  ),
  new Hero("Kenjiro", "Classic", "Fighter", 1, "Holy", 3, false),
  new Hero("Kiril", "Classic", "Wizard", 4, "Ice", 3, false),
  new Hero("Kiril (Stylish Taster)", "Classic", "Wizard", 4, "Ice", 3, true),
  new Hero("Kiril (Brewer Vitrail)", "Classic", "Wizard", 4, "Ice", 3, true),
  new Hero("Kiril (Toon Brewer)", "Classic", "Wizard", 4, "Ice", 3, true),
  new Hero(
    "Kiril (Master Wood Carver)",
    "Classic",
    "Barbarian",
    4,
    "Ice",
    3,
    true,
  ),
  new Hero("Kiril (Master Shredder)", "Classic", "Sorcerer", 4, "Ice", 3, true),
  new Hero("Kornel", "Magic", "Druid", 3, "Fire", 9, false),
  new Hero("Kvasir", "Alfheim", "Druid", 3, "Holy", 4, false),
  new Hero("Kvasir (Toon Beekeeper)", "Alfheim", "Druid", 3, "Holy", 4, true),
  new Hero(
    "Kvasir (Bee Captain of Alfheim)",
    "Alfheim",
    "Paladin",
    3,
    "Holy",
    4,
    true,
  ),
  new Hero("Layla", "Classic", "Rogue", 2, "Dark", 4, false),
  new Hero("Li Xiu", "Classic", "Monk", 4, "Holy", 3, false),
  new Hero("Mael", "Astral Demons", "Rogue", 4, "Fire", 4, false),
  new Hero("Magni", "Classic", "Fighter", 5, "Ice", 4, false),
  new Hero("Melia", "Atlantis", "Druid", 3, "Holy", 4, false),
  new Hero(
    "Melia (Emissary of Atlantis)",
    "Atlantis",
    "Fighter",
    3,
    "Holy",
    4,
    true,
  ),
  new Hero("Mnesseus", "Atlantis", "Cleric", 3, "Nature", 4, false),
  new Hero(
    "Mnesseus (Lieutenant of Atlantis)",
    "Atlantis",
    "Paladin",
    3,
    "Nature",
    4,
    true,
  ),
  new Hero("Morris", "Underwild", "Fighter", 3, "Dark", 3, false),
  new Hero(
    "Morris (Moleman Potter)",
    "Underwild",
    "Paladin",
    3,
    "Dark",
    3,
    true,
  ),
  new Hero("Muggy", "Lagoon", "Fighter", 3, "Nature", 4, false),
  new Hero("Mulgog", "Nightmares of Atlantis", "Rogue", 4, "Nature", 8, false),
  new Hero(
    "Mulgog (Fishman Bard)",
    "Nightmares of Atlantis",
    "Monk",
    4,
    "Nature",
    8,
    true,
  ),
  new Hero("Namahage", "Sakura", "Fighter", 3, "Fire", 4, false),
  new Hero("Nash", "Classic", "Wizard", 2, "Holy", 4, false),
  new Hero("Nashgar", "Classic", "Barbarian", 3, "Fire", 4, false),
  new Hero(
    "Nashgar (Last to Shatter)",
    "Classic",
    "Barbarian",
    3,
    "Fire",
    4,
    true,
  ),
  new Hero(
    "Nashgar (First Toon in Battle)",
    "Classic",
    "Barbarian",
    3,
    "Fire",
    4,
    true,
  ),
  new Hero("Nashgar (Last to Retreat)", "Classic", "Rogue", 3, "Fire", 4, true),
  new Hero("Needler", "Classic", "Ranger", 2, "Nature", 4, false),
  new Hero("Nightshade", "Classic", "Ranger", 1, "Dark", 4, false),
  new Hero("Nordri", "Jotunheim", "Barbarian", 3, "Ice", 3, false),
  new Hero(
    "Nordri (Dwarf Explorer of Jotunheim)",
    "Jotunheim",
    "Monk",
    3,
    "Ice",
    3,
    true,
  ),
  new Hero("Oberon", "Classic", "Fighter", 3, "Dark", 2, false),
  new Hero(
    "Oberon (Relentless Vitrail)",
    "Classic",
    "Fighter",
    3,
    "Dark",
    2,
    true,
  ),
  new Hero(
    "Oberon (Relentless Toon)",
    "Classic",
    "Fighter",
    3,
    "Dark",
    2,
    true,
  ),
  new Hero(
    "Oberon (Jester Remnant)",
    "Classic",
    "Sorcerer",
    3,
    "Dark",
    2,
    true,
  ),
  new Hero("Olaf", "Classic", "Paladin", 2, "Ice", 3, false),
  new Hero("Para", "Kalevala", "Rogue", 3, "Dark", 3, false),
  new Hero("Pineon", "Valiant Vegetable", "Wizard", 4, "Holy", 3, false),
  new Hero("Prisca", "Classic", "Paladin", 3, "Dark", 3, false),
  new Hero("Proteus", "Atlantis", "Wizard", 4, "Dark", 3, false),
  new Hero(
    "Proteus (Toon Mage of Atlantis)",
    "Atlantis",
    "Wizard",
    4,
    "Dark",
    3,
    true,
  ),
  new Hero(
    "Proteus (Farseer of Atlantis)",
    "Atlantis",
    "Sorcerer",
    4,
    "Dark",
    3,
    true,
  ),
  new Hero("Rafeeq", "Mahayoddha", "Rogue", 4, "Ice", 3, false),
  new Hero("Ragnhild", "Classic", "Fighter", 2, "Ice", 3, false),
  new Hero("Rekhetre", "Sun", "Wizard", 3, "Holy", 3, false),
  new Hero("Rekhetre (Young Artist)", "Sun", "Cleric", 3, "Holy", 3, true),
  new Hero("Renfeld", "Classic", "Fighter", 3, "Dark", 3, false),
  new Hero("Rigard", "Classic", "Cleric", 4, "Dark", 3, false),
  new Hero("Rudolph", "Winter", "Fighter", 3, "Fire", 4, false),
  new Hero(
    "Rudolph (Santa's Knightly Steed)",
    "Winter",
    "Barbarian",
    3,
    "Fire",
    4,
    true,
  ),
  new Hero("Sabina", "Classic", "Sorcerer", 4, "Dark", 3, false),
  new Hero("Scarlett", "Classic", "Rogue", 4, "Fire", 4, false),
  new Hero("Sha Ji", "Classic", "Cleric", 2, "Holy", 3, false),
  new Hero("Shaarkot", "Classic", "Sorcerer", 2, "Fire", 3, false),
  new Hero("Shadereave", "Helheim", "Fighter", 4, "Fire", 2, false),
  new Hero(
    "Shar'Khai",
    "Nightmares of Atlantis",
    "Paladin",
    4,
    "Dark",
    8,
    false,
  ),
  new Hero(
    "Shar'Khai (Jagged Butcher)",
    "Nightmares of Atlantis",
    "Barbarian",
    4,
    "Dark",
    8,
    true,
  ),
  new Hero("Sharan", "Classic", "Ranger", 1, "Fire", 3, false),
  new Hero("Sigrunn", "Classic", "Fighter", 1, "Ice", 4, false),
  new Hero("Silthus", "Classic", "Barbarian", 2, "Dark", 3, false),
  new Hero("Sir Casmir", "Legends 2024", "Paladin", 5, "Dark", 2, false),
  new Hero("Skittleskull", "Classic", "Sorcerer", 4, "Nature", 2, false),
  new Hero("Skrekok", "Villain", "Rogue", 3, "Fire", 3, false),
  new Hero("Squire Wabbit", "Springvale", "Ranger", 3, "Fire", 4, false),
  new Hero(
    "Squire Wabbit (Junior Knight of Springvale)",
    "Springvale",
    "Fighter",
    3,
    "Fire",
    4,
    true,
  ),
  new Hero("Tettukh", "Underwild", "Monk", 4, "Nature", 3, false),
  new Hero(
    "Tettukh (Morlock Cheerleader)",
    "Underwild",
    "Barbarian",
    4,
    "Nature",
    3,
    true,
  ),
  new Hero("Thorne", "Classic", "Paladin", 5, "Ice", 3, false),
  new Hero("Tiburtus", "Classic", "Ranger", 4, "Dark", 3, false),
  new Hero("Toril", "Classic", "Barbarian", 2, "Ice", 3, false),
  new Hero("Treevil", "Avalon", "Wizard", 3, "Dark", 1, false),
  new Hero("Tudan", "Classic", "Rogue", 1, "Fire", 4, false),
  new Hero("Tyrum", "Classic", "Paladin", 3, "Dark", 4, false),
  new Hero("Ulmer", "Classic", "Wizard", 3, "Ice", 2, false),
  new Hero(
    "Ulmer (Vitrail of Glaceholm)",
    "Classic",
    "Wizard",
    3,
    "Ice",
    2,
    true,
  ),
  new Hero("Ulmer (Toon of Glaceholm)", "Classic", "Wizard", 3, "Ice", 2, true),
  new Hero("Ulmer (Hermit of Glaceholm)", "Classic", "Monk", 3, "Ice", 2, true),
  new Hero("Unferth", "Beowulf", "Rogue", 3, "Dark", 5, false),
  new Hero("Vaishali", "Magic", "Cleric", 5, "Holy", 9, false),
  new Hero("Valen", "Classic", "Fighter", 3, "Ice", 4, false),
  new Hero("Valeria", "Morlovia", "Monk", 4, "Ice", 5, false),
  new Hero("Vlad", "Morlovia", "Rogue", 3, "Dark", 5, false),
  new Hero("Vodnik", "Pirate", "Paladin", 3, "Ice", 4, false),
  new Hero("Voluptas", "Cupid", "Druid", 4, "Holy", 3, false),
  new Hero("Voluptas (Cupid of Painters)", "Cupid", "Monk", 4, "Holy", 3, true),
  new Hero("Waqas", "Sun", "Paladin", 3, "Fire", 2, false),
  new Hero("Waqas (Pharaoh's Blade)", "Sun", "Barbarian", 3, "Fire", 2, true),
  new Hero("Wu Kong", "Classic", "Monk", 4, "Holy", 3, false),
  new Hero("Xiaoqing", "Lunar Year", "Cleric", 5, "Nature", 3, false),
  new Hero("Xiang Shanjun", "Journey", "Paladin", 5, "Dark", 3, false),
  new Hero("Yao", "Kingdom", "Ranger", 3, "Ice", 3, false),
  new Hero("Zarel", "Bard", "Paladin", 3, "Nature", 2, false),
  new Hero("Zarola", "Cupid", "Ranger", 3, "Nature", 4, false),
  new Hero(
    "Zarola (Cupid of Lone Rangers)",
    "Cupid",
    "Cleric",
    3,
    "Nature",
    4,
    true,
  ),
  new Hero("Zerfain", "Legends 2026", "Ranger", 5, "Fire", 3, false),
  new Hero("Zudak", "Classic", "Barbarian", 2, "Fire", 3, false),
];

function format(hero) {
  let color;
  let rarity = "";
  let italic = hero.costume ? "italic" : "normal";

  for (let i = 0; i < hero.rarity; i++) {
    rarity += "★";
  }

  return `<span class=${hero.element.toLowerCase()} style="font-style: ${italic}">${hero.name} (${rarity})</span>`;
}

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getSelectedFilterValues(keys, map) {
  const selected = keys
    .filter((key) => document.getElementById(key)?.checked)
    .map((key) => map[key])
    .flat();

  return selected.length === 0 ? null : selected;
}

function getFamilySelection() {
  const selected = Array.from(
    document.querySelectorAll('input[name="family"]:checked'),
  ).map((input) => input.value);

  return selected.length === 0 ? null : selected;
}

function getDisplayMode() {
  return document.querySelector('input[name="mode"]:checked')?.value || "any";
}

function renderHeroes() {
  const rarityMap = {
    common: [1],
    uncommon: [2],
    rare: [3],
    epic: [4],
    legendary: [5],
  };

  const classMap = {
    barbarian: ["Barbarian"],
    cleric: ["Cleric"],
    druid: ["Druid"],
    fighter: ["Fighter"],
    monk: ["Monk"],
    paladin: ["Paladin"],
    ranger: ["Ranger"],
    rogue: ["Rogue"],
    sorcerer: ["Sorcerer"],
    wizard: ["Wizard"],
  };

  const elementMap = {
    fire: ["Fire"],
    nature: ["Nature"],
    ice: ["Ice"],
    holy: ["Holy"],
    dark: ["Dark"],
  };

  const speedMap = {
    verySlow: [1],
    slow: [2],
    average: [3],
    fast: [4],
    veryFast: [5],
    other: [6, 7, 8, 9],
  };

  const rarities = getSelectedFilterValues(
    ["common", "uncommon", "rare", "epic", "legendary"],
    rarityMap,
  );

  const classes = getSelectedFilterValues(
    [
      "barbarian",
      "cleric",
      "druid",
      "fighter",
      "monk",
      "paladin",
      "ranger",
      "rogue",
      "sorcerer",
      "wizard",
    ],
    classMap,
  );

  const elements = getSelectedFilterValues(
    ["fire", "nature", "ice", "holy", "dark"],
    elementMap,
  );

  const speeds = getSelectedFilterValues(
    ["verySlow", "slow", "average", "fast", "veryFast", "other"],
    speedMap,
  );

  const families = getFamilySelection();
  const displayMode = getDisplayMode();

  const hasActiveFilter =
    rarities !== null ||
    classes !== null ||
    elements !== null ||
    speeds !== null ||
    families !== null;

  const results = heroes
    .map((hero) => {
      const matches = {
        rarity: rarities !== null && rarities.includes(hero.rarity),
        classType: classes !== null && classes.includes(hero.classType),
        element: elements !== null && elements.includes(hero.element),
        speed: speeds !== null && speeds.includes(hero.speed),
        family: families !== null && families.includes(hero.family),
      };

      const matchCount = Object.values(matches).filter(Boolean).length;
      const matchesAll =
        (!rarities || matches.rarity) &&
        (!classes || matches.classType) &&
        (!elements || matches.element) &&
        (!speeds || matches.speed) &&
        (!families || matches.family);

      return { hero, matchCount, matchesAll };
    })
    .filter(({ matchCount, matchesAll }) => {
      if (!hasActiveFilter) return true;
      return displayMode === "all" ? matchesAll : matchCount > 0;
    })
    .sort((a, b) => {
      if (displayMode === "any") {
        if (b.matchCount !== a.matchCount) return b.matchCount - a.matchCount;
      }
      if (b.hero.rarity !== a.hero.rarity) return b.hero.rarity - a.hero.rarity;
      return a.hero.name.localeCompare(b.hero.name);
    })
    .map(({ hero }) => hero);

  const list = document.getElementById("heroes-list");
  list.innerHTML = results.map((hero) => `<li>${format(hero)}</li>`).join("");
}

function populateFamilies() {
  const families = new Set(heroes.map((hero) => hero.family));
  const sortedFamilies = Array.from(families).sort();
  const familiesNode = document.getElementById("families");

  for (const family of sortedFamilies) {
    const id = `family-${family.toLowerCase().replace(/\s+/g, "-")}`;
    familiesNode.innerHTML += `<label><input type="checkbox" name="family" id="${id}" value="${family}" /> ${titleCase(family)}</label>`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  populateFamilies();

  const inputs = document.querySelectorAll(
    "form input[type=checkbox], form input[type=radio]",
  );
  inputs.forEach((input) => input.addEventListener("change", renderHeroes));

  renderHeroes();
});
