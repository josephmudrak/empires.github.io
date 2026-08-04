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

import { heroes } from "./heroList.js";

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
