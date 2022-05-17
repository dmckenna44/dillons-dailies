// ---------------------------- DATA ARRAYS ---------------------------- //

const allWeapons = [
  {
    name: "Longsword",
    rarity: "common",
    type: "melee",
    damage: "1d8",
    dmgType: "slashing",
    range: 5,
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: "1d10",
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Dagger",
    rarity: "common",
    type: "melee",
    damage: "1d4",
    dmgType: "piercing",
    range: 5,
    reach: false,
    finesse: true,
    light: true,
    thrown: "20/60",
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Club",
    rarity: "common",
    type: "melee",
    damage: "1d6",
    dmgType: "bludgeoning",
    range: 5,
    reach: false,
    finesse: false,
    light: true,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Spear",
    rarity: "common",
    type: "melee",
    damage: "1d6",
    dmgType: "piercing",
    range: 10,
    reach: true,
    finesse: false,
    light: false,
    thrown: "20/60",
    versatile: "1d8",
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Quarterstaff",
    rarity: "common",
    type: "melee",
    damage: "1d6",
    dmgType: "bludgeoning",
    range: 5,
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: "1d8",
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Handaxe",
    rarity: "common",
    type: "melee",
    damage: "1d6",
    dmgType: "slashing",
    range: 5,
    reach: false,
    finesse: false,
    light: true,
    thrown: "20/60",
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Shortsword",
    rarity: "common",
    type: "melee",
    damage: "1d6",
    dmgType: "piercing",
    range: 5,
    reach: false,
    finesse: true,
    light: true,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Mace",
    rarity: "common",
    type: "melee",
    damage: "1d8",
    dmgType: "bludgeoning",
    range: 5,
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Warhammer",
    rarity: "common",
    type: "melee",
    damage: "1d8",
    dmgType: "bludgeoning",
    range: 5,
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: "1d10",
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Bastard Sword",
    rarity: "common",
    type: "melee",
    damage: "1d6",
    dmgType: "slashing",
    range: 5,
    reach: false,
    finesse: true,
    light: false,
    thrown: false,
    versatile: "1d8",
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Halberd",
    rarity: "common",
    type: "melee",
    damage: "1d10",
    dmgType: "slashing",
    range: 10,
    reach: true,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: true,
    twoHanded: true,
  },
  {
    name: "Pike",
    rarity: "common",
    type: "melee",
    damage: "1d10",
    dmgType: "piercing",
    range: 10,
    reach: true,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: true,
    twoHanded: true,
  },
  {
    name: "Morningstar",
    rarity: "common",
    type: "melee",
    damage: "1d8",
    dmgType: "piercing",
    range: 5,
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Scimitar",
    rarity: "common",
    type: "melee",
    damage: "1d6",
    dmgType: "slashing",
    range: 5,
    reach: false,
    finesse: true,
    light: true,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Battleaxe",
    rarity: "common",
    type: "melee",
    damage: "1d8",
    dmgType: "slashing",
    range: 5,
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: "1d10",
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Rapier",
    rarity: "common",
    type: "melee",
    damage: "1d8",
    dmgType: "piercing",
    range: 5,
    reach: false,
    finesse: true,
    light: false,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Nunchaku",
    rarity: "uncommon",
    type: "melee",
    damage: "1d4",
    dmgType: "bludgeoning",
    range: 5,
    reach: false,
    finesse: true,
    light: true,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Wakizashi",
    rarity: "uncommon",
    type: "melee",
    damage: "1d6",
    dmgType: "slashing",
    range: 5,
    reach: false,
    finesse: true,
    light: true,
    thrown: false,
    versatile: "1d8",
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Glaive",
    rarity: "uncommon",
    type: "melee",
    damage: "1d10",
    dmgType: "slashing",
    range: 10,
    reach: true,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: true,
    twoHanded: true,
  },
  {
    name: "Maul",
    rarity: "uncommon",
    type: "melee",
    damage: "2d6",
    dmgType: "bludgeoning",
    range: 5,
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: true,
    twoHanded: true,
  },
  {
    name: "Greatsword",
    rarity: "uncommon",
    type: "melee",
    damage: "2d6",
    dmgType: "slashing",
    range: 5,
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: true,
    twoHanded: true,
  },
  {
    name: "Bardiche",
    rarity: "uncommon",
    type: "melee",
    damage: "1d10",
    dmgType: "slashing",
    range: 10,
    reach: true,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: true,
    twoHanded: true,
  },
  {
    name: "Greataxe",
    rarity: "uncommon",
    type: "melee",
    damage: "1d12",
    dmgType: "slashing",
    range: 5,
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: true,
    twoHanded: true,
  },
  {
    name: "Katana",
    rarity: "uncommon",
    type: "melee",
    damage: "1d10",
    dmgType: "slashing",
    range: 5,
    reach: false,
    finesse: true,
    light: true,
    thrown: false,
    versatile: "1d12",
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Sabre",
    rarity: "uncommon",
    type: "melee",
    damage: "1d8",
    dmgType: "slashing",
    range: 5,
    reach: false,
    finesse: true,
    light: false,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Cutlass",
    rarity: "uncommon",
    type: "melee",
    damage: "1d8",
    dmgType: "slashing",
    range: 5,
    reach: false,
    finesse: false,
    light: true,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Breakstaff",
    rarity: "uncommon",
    type: "melee",
    damage: "1d6",
    dmgType: "bludgeoning",
    range: 10,
    reach: true,
    finesse: true,
    light: true,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: true,
  },
  {
    name: "Whip",
    rarity: "uncommon",
    type: "melee",
    damage: "1d4",
    dmgType: "slashing",
    range: 10,
    reach: true,
    finesse: true,
    light: true,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Flail",
    rarity: "uncommon",
    type: "melee",
    damage: "1d8",
    dmgType: "bludgeoning",
    range: 5,
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Kama",
    rarity: "uncommon",
    type: "melee",
    damage: "1d4",
    dmgType: "slashing",
    range: 5,
    reach: false,
    finesse: false,
    light: true,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Sai",
    rarity: "uncommon",
    type: "melee",
    damage: "1d4",
    dmgType: "piercing",
    range: 5,
    reach: false,
    finesse: true,
    light: true,
    thrown: "20/60",
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Butterfly Swords",
    rarity: "uncommon",
    type: "melee",
    damage: "1d4",
    dmgType: "slashing",
    range: 5,
    reach: false,
    finesse: true,
    light: true,
    thrown: false,
    versatile: "1d6",
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Tonfas",
    rarity: "uncommon",
    type: "melee",
    damage: "1d4",
    dmgType: "bludgeoning",
    range: 5,
    reach: false,
    finesse: true,
    light: true,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Katar",
    rarity: "uncommon",
    type: "melee",
    damage: "1d6",
    dmgType: "piercing",
    range: 5,
    reach: false,
    finesse: true,
    light: true,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Trident",
    rarity: "uncommon",
    type: "melee",
    damage: "1d6",
    dmgType: "piercing",
    range: 5,
    reach: false,
    finesse: false,
    light: false,
    thrown: "20/60",
    versatile: "1d8",
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Net",
    rarity: "uncommon",
    type: "melee",
    damage: "None",
    dmgType: "",
    range: 5,
    reach: false,
    finesse: true,
    light: false,
    thrown: "15/30",
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Stiletto",
    rarity: "uncommon",
    type: "melee",
    damage: "1d6",
    dmgType: "piercing",
    range: 5,
    reach: false,
    finesse: true,
    light: true,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Shortbow",
    rarity: "common",
    type: "ranged",
    damage: "1d6",
    dmgType: "piercing",
    range: "80/320",
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: true,
  },
  {
    name: "Longbow",
    rarity: "common",
    type: "ranged",
    damage: "1d8",
    dmgType: "piercing",
    range: "150/600",
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: true,
    twoHanded: true,
  },
  {
    name: "Composite Bow",
    rarity: "common",
    type: "ranged",
    damage: "1d10",
    dmgType: "piercing",
    range: "100/400",
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: true,
  },
  {
    name: "Light Crossbow",
    rarity: "common",
    type: "ranged",
    damage: "1d8",
    dmgType: "piercing",
    range: "80/320",
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: true,
  },
  {
    name: "Heavy Crossbow",
    rarity: "common",
    type: "ranged",
    damage: "1d10",
    dmgType: "piercing",
    range: "100/400",
    reach: false,
    finesse: false,
    light: false,
    thrown: false,
    versatile: false,
    heavy: true,
    twoHanded: true,
  },
  {
    name: "Throwing Knives",
    rarity: "common",
    type: "ranged",
    damage: "1d4",
    dmgType: "piercing",
    range: "20/60",
    reach: false,
    finesse: true,
    light: true,
    thrown: "20/60",
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Darts",
    rarity: "common",
    type: "ranged",
    damage: "1d4",
    dmgType: "piercing",
    range: "20/60",
    reach: false,
    finesse: true,
    light: false,
    thrown: "20/60",
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Sling",
    rarity: "common",
    type: "ranged",
    damage: "1d4",
    dmgType: "bludgeoning",
    range: "40/120",
    reach: false,
    finesse: true,
    light: true,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Blowgun",
    rarity: "uncommon",
    type: "ranged",
    damage: "1",
    dmgType: "piercing",
    range: "25/50",
    reach: false,
    finesse: false,
    light: true,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Shuriken",
    rarity: "uncommon",
    type: "ranged",
    damage: "1d4",
    dmgType: "piercing",
    range: "35/120",
    reach: false,
    finesse: true,
    light: true,
    thrown: "35/120",
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Boomerang",
    rarity: "uncommon",
    type: "ranged",
    damage: "1d6",
    dmgType: "bludgeoning",
    range: "60/120",
    reach: false,
    finesse: false,
    light: true,
    thrown: "60/120",
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Javelin",
    rarity: "uncommon",
    type: "ranged",
    damage: "1d6",
    dmgType: "piercing",
    range: "30/120",
    reach: false,
    finesse: false,
    light: false,
    thrown: "30/120",
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
  {
    name: "Hand Crossbow",
    rarity: "uncommon",
    type: "ranged",
    damage: "1d6",
    dmgType: "piercing",
    range: "30/120",
    reach: false,
    finesse: false,
    light: true,
    thrown: false,
    versatile: false,
    heavy: false,
    twoHanded: false,
  },
];

const primaryNameList = [
  "Smoke",
  "Collapsible",
  "Indestructible",
  "Resistance - Cold/Ice",
  "Resistance - Heat/Fire",
  "Resistance - Lightning",
  "Resistance - Acid",
  "Resistance - Poison",
  "Resistance - Pychic/Psionic",
  "Venom/Poison",
  "Flame (damage)",
  "Light",
  "Thunder",
  "Cold / Ice (damage)",
  "Acid (damage)",
  "Haste/Speed",
  "Luck",
  "Hungry",
  "Life-Stealing",
  "Shadowed",
  "Fearsome",
  "Cursed (Pain)",
  "Slaying (creature type)",
  "Throwing",
  "Distance",
  "Warning",
  "Sharpness",
  "Wounding/Bleeding",
  "Defense/Defender",
  "Cursed (Beserk)",
  "Dancing",
  "Blur",
  "Animals/Monster Friendship",
  "Shrinking",
  "Resistance - Necrotic",
  "Necrotic (damage)",
  "Bravery",
  "Cursed (Fumbling)",
  "Toughness",
  "Vengeful",
  "Ghost-touch",
  "Purity",
  "Accuracy",
  "Unerring Accuracy",
  "Holy/Unholy",
  "Rebuke / Punishment",
  "Blood drinking / tracing",
  "Hidden magic",
  "Slowing",
  "Blink",
  "Filth ",
  "Radiant (damage)",
  "Lightning (damage)",
  "Levitation",
  "Planar-sense",
  "Reflective",
  "Beautiful",
  "Cursed (Ascetic/Tallying)",
  "Alarm",
  "Banishment",
  "Dazzling",
  "Wizard-slaying",
  "Cursed (mute)",
  "Orientation",
  "Forest-walk",
  "Vorpal",
  "Smashing",
  "Giantkiller",
  "Sure-handed",
  "Non-detection",
  "of the Wolf",
  "Rainbow Hues",
  "of Leaping",
  "Light-eater",
  "Melodic",
  "Deflection",
  "Morality",
  "Holding",
  "Keen",
  "Splintering",
  "Power Word",
  "Cursed (targeting)",
  "of the Sun",
  "of the Moon",
  "Misty",
  "Oathsworn",
  "of the Rabbit",
  "Cursed (Madness)",
  "Invisbility",
  "Slashburn",
  "Clarity",
  "Animal Friendship",
  "Free Action",
  "Interruption",
  "Throwing",
  "Speed",
  "Telekinesis",
  "Telepathy",
  "Healing",
];

const primaryDecList = [
  "On command weapon can emit a smoky haze that can obsucre vision as in fog spell for 5' radius",
  "Weapon can collapse into smaller size and extend upon command",
  "Cannot be destroyed by physical force, magic or extreme temperatures",
  "This item grants the user resistance to cold/ice damage",
  "This item grants the user resistance to heat/fire damage",
  "This item grants the user resistance to lightning damage",
  "This item grants the user resistance to acid damage",
  "This item grants the user resistance to poison damage",
  "This item grants the user resistance to psionic damage",
  "On a hit the victim must make a DC15 Con save or become poisoned for an additional 1d4 damage for the next three rounds, doesn't stack",
  "On each hit deals an additional 1d4 fire damage, weapon can be wreathed in flame on command",
  "This item can emit light on command, up to a 15' radius of bright light",
  "On a crit this weapon causes a thunderclap centered on the victim, with the wielder immune",
  "On each hit deals an additional 1d4 ice damage, weapon emits cold",
  "On each hit deals an additional 1d4 acid damage",
  "1/day this item can grant an additional 1 attack per round (for one fight) or increase movement rate for an hour",
  "This item grants the user the ability to cast Luck 1/day",
  "This weapon grants an additional +1 on attack and damage rolls against creatures of the same type that was killed by the item (first creature killed per day determines creature type)",
  "Each time it is used in combat, this weapon grants the user 1d6+1 temporary hp after the first time it damages an opponent",
  "This item grants the user advantage on Hide in Shadows/stealth. This weapon can hit shadow creatures.",
  "On roles of 18-20 that hit, the target must make a DC 13 Charisma save or flee from the wielder",
  "This weapon causes the wielder to feel intense pain while using it, causing a penalty of -2 to all skill and ability checks",
  "This weapon has an additional +2 hit / +2 dam against certain creature types. On critical hits the creature must save vs Death or be slain",
  "Will return to wielders hand if thrown (only for daggers, hammers, hatchets, small melee weapons or thrown weapons)",
  "This ranged weapon can target creatures up to twice its normal range without penalty",
  "Glows when certain creature type is within 50' of user",
  "On a critical hit this weapon severs a limb and causes bleeding. DM will decide how the loss of limb affects the victim",
  "On a critical hit this weapon causes the victim to bleed, for the next 4 rounds they must succeed a Con save or take 1d4+1 bleeding damage",
  "While wielding this weapon the user gets a +2 AC bonus",
  "This weapon, when drawn for battle, immediately grips the user in a beserk rage, where they will attack the nearest creature to them until they are reduced to negative hp",
  "This weapon, upon a command word, can float and attack any target it's user wishes once per round, using the users attack bonus. The weapon clatters inanimate to the ground if the attuned user moves more than 20' away",
  "1/day can cast blur on user",
  "This weapon grants the user advantage in reaction checks with a certain creature type, and the ability to understand the language of that creature type",
  "With an action this weapon can be shrunk down to pocket size, and with an action it can be brought back to normal size",
  "This item grants the user resistance to necrotic damage",
  "On each hit deals an additional 1d4 necrotic damage",
  "Immunity to fear/panic, also discourages user from making cowardly choices",
  "This weapon seems to be a normal magic weapon, but on attack rolls of 1-2 and 19-20 it slips out of the hand of the user",
  "Grants the user 1d4+1 temporary HP in each fight it is used in",
  "This weapon grants a temporary +1 to hit against any creature that deals you damage, lasting for one round after the damage is dealt",
  "Can cause damage against incorporeal opponents, affects them as if they were corporeal",
  "Grants user resistance to poison and disease. 1/day can touch against a substance and remove any poison/rot",
  "This weapon has an additional +1 to hit (not to damage) on top of its other enchantment",
  "1/day this weapon will automatically hit its target",
  "Wielder gains Protection from Evil/Good effects while gripping this weapon",
  "If the wielder of this weapon takes damage, 1/day can instantly cast magic missile at the causer of the damage, shooting 3 1d4+1 magic missiles",
  "After a successful hit, this weapon can detect the general whereabouts of the creature it hit for the next 24 hrs",
  "Can suppress the magic aura of the item so it cannot be detected by detect magic",
  "On a hit this weapon has a 5% chance of causing the slow spell effects on its victim, no save",
  "On a critical hit this weapon has a 20% chance of teleporting the user directly behind the creature it just hit",
  "Causes disease on critical hits. This weapon has a foul odor",
  "On each hit deals an additional 1d4 radiant damage",
  "On each hit deals an additional 1d4 lightning damage",
  "While gripping/wielding this weapon the user can levitate up to 10' vertically",
  "This weapon vibrates with energy when within 10' of a portal or extraplanar being or artifact",
  "1/day when a creature deals flame/radiant/lightning damage to you you can reflect a portion of it to deal 2d10 damage (same damage type) to that creature",
  "This weapon is impressive to the eye, and 1/day gives you advantage (or +2 in 2e) to a Charisma check",
  "Each time this weapon kills a creature a hash-mark cut is magically sliced into the user's arm for 1 damage, causing a scar that cannot be healed without remove curse and lesser restoration",
  "This weapon emits a sound of warning when certain powerful creature types are near",
  "On a critical hit, an extrapalanar creature must save vs spell or be instantly sent back to its plane of origin",
  "On a critical hit, this weapon casts the spell color spray",
  "If struck by this weapon the victim suffers 20% chance of spell failure on their next casting",
  "This weapon causes the user to be unable to speak or make vocal sounds while wielding it",
  "When laid on the ground this weapon orients itselt business end north, handle/grip south.",
  "2/day the wielder of this weapon can cast pass without trace on self, only in natural settings",
  "On a critical hit this weapon severs the head of the victim, instantly killing them and making it difficult to resurrect them",
  "On a crit this weapon knocks the target back 5' and they must make a Dex check or be knocked prone",
  "This weapon deals an additional 1d8 damage to creatures larger than the user",
  "This weapon cannot be disarmed from the user",
  "While wielding this weapon the user cannot be detected by divination or scrying magic",
  "You gain improved hearing and smell, and enhanced movement, and +1 to initiative while wielding this weapon",
  "You can change the color of this item at will",
  "Wielder can cast jump 2/day",
  "This weapon can diminish the brightness of non-magical light within 30' and cast darkness 1/day",
  "This weapon creates musical sounds as it is swung, and makes the user immune to sonic or voice effects",
  "This weapon can automatically parry missile attacks, if the user substitutes one of their attacks for a parry",
  "This weapon can cast detect alignment 3/day",
  "On a critical hit this weapon has a 15% chance of casting hold person on the victim, save sv spell at -2 to avoid",
  "This weapon criticals on rolls of 19 and 20",
  "On a critical this weapon deals and additional 1d4 damage of splinters for the following 2 rds, but on each critical it has a 15% chance of shattering permanently",
  "This weapon has a rune of a power word on its surface, when spoken the weapon glows and emits a loud boom, all creatures within 20' radius must save vs spell or be stunned 1 rd (allies get +2 to save)",
  "When wielded this weapon causes faerie fire to envelop the user, making the user very visible and -1 to AC",
  "When this weapon is drawn and held in full sunlight it glows and for the next 24 hrs it retains a slight glow and warmth, granting the user 1d4 temp hp and +1 to hit the next undead target",
  "When this weapon is drawn and held in the moonlight it gently hums and has a pale silver glow, granting the wielder darkvision and +1 to initiative in the next combat",
  "1/day this weapon can cast fog",
  "An oath is engraved into this weapon, and it's magical properties only function if the wielder first speaks and then obeys the oath",
  "This weapon grants the wielder clairaudience ",
  "This weapon, when gripped, will cause the wielder to be affected by confusion until heal, restoration or wish spell is used to undo it",
  "Can cast invisibility 1/day",
  "This weapon grants the wielder protection from plants and can cut through wood and plant material easily",
  "Grants the wielder immunity to charm and suggestion and domination",
  "Animals within 20' of wielder must save vs spell or come to the aid of the wielder as they see fit",
  "this weapon grants immunity from hold, entangle and web",
  "User can substitute an attack to clang this weapon against a hard surface, causing a disruptive sound and anyone casting a spell within 30' must save vs bw or their spell is lost that round",
  "This weapon (melee) can be thrown a distance of up to 50' and on a hit deals max damage. Does not return to wielder when thrown",
  "this weapon grants one extra attack per round",
  "1/day as the spell",
  "1/day this weapon allows the user to either communicate telepathically with one creature whose location is known, or deal 1d6 psychic damage no save",
  "2/day this weapon can cast cure wounds on target of wielder's choice",
  "",
];

const secondNameList = [
  "Holding",
  "Etherealness",
  "Absorption",
  "Soul-Stealing",
  "Beckoning",
  "Disruption",
  "Life Drinking",
  "Summonable",
  "Spirit Binding",
  "Starfallen",
  "Elemental origin - Fire",
  "Elemental origin - Water",
  "Elemental origin - Air",
  "Elemental origin - Earth",
  "Truth",
  "Turning",
  "Detection",
  "Death Dealing",
  "Fire/Frostbrand",
  "Sentience",
];

const secondDecList = [
  "Has a hidden mini pocket plane in handle that can store 1-2 potion sized objects",
  "1/day can make the wielder ethereal, during which they can pass through corporeal objects and cannot receive or deal corporeal damage",
  "Can absorb 2d3 spell levels per day. If the wielder can cast spells they can use the absorbed spell levels to cast one of their spells of equivalent level without using a spell slot",
  "If this weapon kills it can trap the soul of the victim in a gem on hits hilt. This prevents resurrection. The user can communicate with the trapped soul. This item can hold up to 2 souls, but if holding 2 souls the souls have a 35% chance each day to break free and damage the item",
  "If the item is separated from the bearer, the bearer instinctively knows the item's direction and rough distance. Requires attunement",
  "When this item kills a creature, it destroys their soul, preventing resurrection. When this item strikes an undead on a Crit they must save vs spell or be destroyed. This weapon can hit any undead being.",
  "This item does an additional 1d3 damge on every hit and heals the user that same amount of hp. If this weapon kills a creature, it grants the wielder +1 Con (doesn't stack) for the next 12 hours and incrementally lengthens the life of its wielder",
  "Once attuned, this weapon can be stored in a pocket plane and summoned instantly to the wielders hand. If the weapon is stolen or separated from the user, the user can summon it back to their hand for 24 hrs after separation, if they are concsious and have use of their hands",
  "2/day this weapon can raise two creatures it has slain as ghosts at the users command, after 24 hrs the ghosts are released and dissipate",
  "This weapon is partly made from meteorite metal, it has a 10% chance of breaking non-magical weapons or armor. On a hit this weapon crackls with purple-blue electricity and on a third consecutive hit can release one ball lightning 4d4 damage",
  "Fire-breath, pyrotechnics, wall of fire, fire resistance, penalties from earth/wind",
  "Water-breathing, wall of ice, create water, cold resistance, penalties from air/lightning",
  "Gust of wind, fly, invisibility, lightning resistance, penalties from fire/poison",
  "Stoneshape, passwall, spike growth, necrotic resistance, penalties from water/acid",
  "This weapon grants the wielder True Sight. When this weapon's business end is pressed against the bare flesh of a creature that creature is magically compelled to tell the truth, without saving throw",
  "This weapon reflects a certain energy type back at the cause/caster as spell turning. roll 1d6 - 1 fire 2 lightning 3 magic/force 4 radiant 5 pscionic/psychic 6 spells",
  "This weapon can detect certain things, roll on 2e DM guide table 115 to determine",
  "On a 20 this weapon strikes at the life-force of the target who must save vs death or die. This weapon gives the wielder a -1 penalty in saves vs death",
  "This weapon grants the user 50% resistance to cold/flame, and deals max damage to creatures of the opposite element",
  "This weapon has a mind and life of it's own, with its own agenda and personality, and can communicate with the wielder, and may try to dominate the wielder",
];
// ----------------------------------------------------------------------------------------------------------------------------- //

// ------------------------------ FUNCTIONAL ARRAYS ----------------------------------- //

const secEnchObjs = [];
for (let i = 0; i < secondDecList.length; i++) {
  secEnchObjs.push({
    roll: i + 1,
    name: secondNameList[i],
    desc: secondDecList[i],
  });
}
const primEnchObjs = [];
for (let i = 0; i < primaryNameList.length; i++) {
  primEnchObjs.push({
    roll: i + 1,
    name: primaryNameList[i],
    desc: primaryDecList[i],
  });
}
// -----------------------------------------------------------------------------------------------------//

// --------------------------- DOCUMENT CONSTANTS -------------------------- //

const chosenRarity = document.getElementById("rarity");
const chosenType = document.getElementById("type");
const bonusDisplay = document.getElementById("bonus");
const firstEnchant = document.getElementById("firstEnchant");
const secondEnchant = document.getElementById("secondEnchant");

const weaponImage = document.getElementById("weaponImg");
const weaponChoices = document.getElementById("weapons");
const submit = document.getElementById("getWeapon");
const resultDisplay = document.querySelector(".results");
const result = document.getElementById("result");

const primaryEnchantmentDescription = document.getElementById("primEnchDesc");
const secondaryEnchantmentDescription = document.getElementById("secEnchDesc");
const bonusDescription = document.getElementById("bonusDesc");
const weaponDescription = document.getElementById("weaponDesc");
const firstEnchantName = document.getElementById("firstEnchantName");
const firstResultDescription = document.getElementById("firstDesc");
const secondEnchantName = document.getElementById("secondEnchantName");
const secondResultDescription = document.getElementById("secondDesc");
const bonusResult = document.getElementById("bonusResult");

let usableWeapons = allWeapons;

primEnchObjs.forEach((ench) => {
  const newOption = document.createElement("option");
  newOption.value = ench.name;
  newOption.innerText = ench.name;
  firstEnchant.appendChild(newOption);
});

secEnchObjs.forEach((ench) => {
  const newOption = document.createElement("option");
  newOption.value = ench.name;
  newOption.textContent = ench.name;
  secondEnchant.appendChild(newOption);
});

function restoreWeaponList(arr) {
  const all = document.createElement("option");
  all.value = "all";
  all.textContent = "All";
  weaponChoices.appendChild(all);
  arr.forEach((weapon) => {
    const newOption = document.createElement("option");
    newOption.value = weapon.name;
    newOption.textContent = weapon.name;
    weaponChoices.appendChild(newOption);
  });
}

function clearWeaponList() {
  while (weaponChoices.firstChild)
    weaponChoices.removeChild(weaponChoices.firstChild);
}

// ------------------------------------------------------------------ //

// ------------------------------ LISTENERS ------------------------- //

firstEnchant.onchange = function () {
  if (firstEnchant.value !== "all") {
    let desc;
    primEnchObjs.forEach((obj) => {
      if (obj.name === firstEnchant.value) desc = obj.desc;
    });
    primaryEnchantmentDescription.textContent = desc;
    primaryEnchantmentDescription.classList.remove("hidden");
  } else primaryEnchantmentDescription.classList.add("hidden");
};

secondEnchant.onchange = function () {
  if (secondEnchant.value !== "all") {
    let desc;
    secEnchObjs.forEach((obj) => {
      if (obj.name === secondEnchant.value) desc = obj.desc;
    });
    secondaryEnchantmentDescription.textContent = desc;
    secondaryEnchantmentDescription.classList.remove("hidden");
  } else secondaryEnchantmentDescription.classList.add("hidden");
};

bonus.onchange = function () {
  if (bonus.value !== "none" && bonus.value !== "all") {
    let desc = `Grants a ${bonus.value} bonus to attack and damage rolls.`;
    bonusDescription.textContent = desc;
    bonusDescription.classList.remove("hidden");
  } else bonusDescription.classList.add("hidden");
};

chosenRarity.onchange = function () {
  filterWeapons(chosenType.value, chosenRarity.value);
};

chosenType.onchange = function () {
  filterWeapons(chosenType.value, chosenRarity.value);
};

function showWeaponImg(weapon) {
  weaponImage.src = `images/forge-images/${weapon.name.toLowerCase()}.png`;
  weaponImage.classList.remove("hidden");
  // console.log(weaponImage.childNodes);
}

weaponChoices.onchange = function () {
  if (weaponChoices.value !== "all") {
    let desc;
    let weapon;
    allWeapons.forEach((obj) => {
      if (obj.name === weaponChoices.value) {
        weapon = obj;
        desc = `Damage: ${obj.damage} ${obj.dmgType} Range: ${obj.range}ft  
                  Properties: ${obj.reach ? "Reach," : ""} ${
          obj.finesse ? "Finesse," : ""
        } ${obj.light ? "Light," : ""} ${
          obj.thrown ? "Thrown (" + obj.thrown + ")" : ""
        } ${obj.versatile ? "Versatile  (" + obj.versatile + ")" : ""}
                              ${obj.heavy ? "Heavy," : ""} ${
          obj.twoHanded ? "Two-Handed," : ""
        }`;
      }
    });
    desc = desc.trim();
    if (desc[desc.length - 1] === ",") desc = desc.slice(0, -1);
    weaponDescription.textContent = desc;
    showWeaponImg(weapon);
    weaponDescription.classList.remove("hidden");
    document.getElementById("secondOptions").classList.add("hidden");
    usableWeapons = [weapon];
  } else {
    document.getElementById("secondOptions").classList.remove("hidden");
    weaponDescription.classList.add("hidden");
    weaponImage.classList.add("hidden");
  }
};

// ----------------------------------------------------------------- //

// ------------------------- FUNCTIONS ----------------------- //

function filterWeapons(type, rarity) {
  let filteredList;
  if (type === "all" && rarity === "all") {
    filteredList = allWeapons;
  } else if (type === "all") {
    filteredList = allWeapons.filter((weapon) => weapon.rarity === rarity);
  } else if (rarity === "all") {
    filteredList = allWeapons.filter((weapon) => weapon.type === type);
  } else {
    filteredList = allWeapons.filter(
      (weapon) => weapon.type === type && weapon.rarity === rarity
    );
  }
  usableWeapons = filteredList;
  clearWeaponList();
  restoreWeaponList(filteredList);
}

const d20 = function () {
  return Math.floor(Math.random() * 20) + 1;
};

const d100 = function () {
  return Math.floor(Math.random() * 100) + 1;
};

function usableOptions(docList, baseList) {
  let nodeList = [];
  let optionList;
  docList.childNodes.forEach((node) => {
    if (node.nodeName === "OPTION") nodeList.push(node.innerHTML);
  });
  optionList = baseList.filter((ele) => nodeList.includes(ele.name));
  console.log(optionList);
  usableWeapons = optionList;
  console.log(usableWeapons);
}

function createWeapon(...args) {
  const category = d20();
  const bonusRoll = d20();
  const extraRoll = d20();
  let bonus;
  let primary;
  let secondary;
  let final = "";
  let choicelist = [];
  if (usableWeapons !== allWeapons) {
    choicelist = usableWeapons;
  } else {
    if (category <= 10) {
      allWeapons.forEach((weapon) => {
        if (weapon.rarity === "common" && weapon.type === "melee")
          choicelist.push(weapon);
      });
    } else if (category > 10 && category <= 15) {
      allWeapons.forEach((weapon) => {
        if (weapon.rarity === "common" && weapon.type === "ranged")
          choicelist.push(weapon);
      });
    } else if (category > 15 && category <= 18) {
      allWeapons.forEach((weapon) => {
        if (weapon.rarity === "uncommon" && weapon.type === "melee")
          choicelist.push(weapon);
      });
    } else {
      allWeapons.forEach((weapon) => {
        if (weapon.rarity === "uncommon" && weapon.type === "ranged")
          choicelist.push(weapon);
      });
    }
  }

  const baseWeapon = choicelist[Math.floor(Math.random() * choicelist.length)];

  if (bonusDisplay.value !== "all" && bonusDisplay.value !== "none") {
    bonus = bonusDisplay.value;
  } else if (bonusDisplay.value === "none") {
    bonus = "";
  } else {
    if (bonusRoll <= 3) bonus = false;
    else if (bonusRoll >= 4 && bonusRoll <= 11) bonus = "+1";
    else if (bonusRoll >= 12 && bonusRoll <= 17) bonus = "+2";
    else if (bonusRoll >= 18 && bonusRoll <= 19) bonus = "+3";
    else {
      if (d20() === 20) bonus = "+4";
      else bonus = "+3";
    }
  }

  if (firstEnchant.value !== "all" || secondEnchant.value !== "all") {
    if (firstEnchant.value === "none") primary = "";
    if (secondEnchant.value === "none") secondary = "";
    if (firstEnchant.value === "all")
      primary = extraRoll > 12 ? primEnchObjs[d100() - 1] : "";
    if (secondEnchant.value === "all")
      secondary = extraRoll > 18 ? secEnchObjs[d20()] : "";
    if (firstEnchant.value !== "all" && firstEnchant.value !== "none") {
      primEnchObjs.forEach((obj) => {
        if (obj.name === firstEnchant.value) {
          primary = obj;
          console.log(primary);
        }
      });
    }
    if (secondEnchant.value !== "all" && secondEnchant.value !== "none") {
      secEnchObjs.forEach((obj) => {
        if (obj.name === secondEnchant.value) secondary = obj;
      });
    }
  } else {
    if (extraRoll < 13) {
      primary = "";
      secondary = "";
    } else if (extraRoll >= 13 && extraRoll <= 18) {
      primary = primEnchObjs[d100() - 1];
    } else {
      primary = primEnchObjs[d100() - 1];
      secondary = secEnchObjs[d20()];
    }
  }
  final = `${bonus ? bonus : ""} ${baseWeapon.name} ${
    primary ? "- " + primary.name : ""
  } ${secondary ? "- " + secondary.name : ""}`;

  bonusResult.innerHTML = bonus
    ? `${bonus} bonus to attack and damage rolls.`
    : "";

  firstEnchantName.innerHTML = primary ? `${primary.name}: ` : "";
  firstResultDescription.innerHTML = primary ? `${primary.desc}: ` : "";
  secondEnchantName.innerHTML = secondary ? `${secondary.name}: ` : "";
  secondResultDescription.innerHTML = secondary ? `${secondary.desc}: ` : "";
  result.innerHTML = final;
  resultDisplay.classList.add("fade-in");
  resultDisplay.classList.remove("fade-in");
  void resultDisplay.offsetWidth;
  resultDisplay.classList.add("fade-in");
}

restoreWeaponList(allWeapons);
submit.addEventListener("click", createWeapon);
