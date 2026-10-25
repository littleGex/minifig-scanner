// Minifigure box codes, one entry per series.
// To add a series: append a new object to the list. Keep each figure's `id` stable
// (want/have marks on phones are stored against it).
// `codes` are the first 7 digits of the Data Matrix on the box bottom; list every
// known regional/batch run for that figure.
window.SERIES = [
  {
    key: "s29",
    name: "Series 29",
    set: "71052",
    source: "ColleX, cross-checked with BrickNav and Minifigure Scanner",
    checked: "2026-10-18",
    figures: [
      { id: "s29-1",  name: "Robot T. rex",       extra: "battery brick",          codes: ["6603331", "6605257"] },
      { id: "s29-2",  name: "Marine Biologist",   extra: "clownfish, anemone",     codes: ["6603321", "6605247"] },
      { id: "s29-3",  name: "Bionicle Cosplayer", extra: "Bionicle canister",      codes: ["6603325", "6605251"] },
      { id: "s29-4",  name: "Monster Hunter",     extra: "gunblade, reward poster",codes: ["6603328", "6605254"] },
      { id: "s29-5",  name: "Boba Cup Fan",       extra: "bubble tea costume",     codes: ["6603324", "6605250"] },
      { id: "s29-6",  name: "Trash Monster",      extra: "pizza box, fishbone, fly", codes: ["6603330", "6605256"] },
      { id: "s29-7",  name: "Chocolatier",        extra: "chocolate dragon",       codes: ["6603323", "6605249"] },
      { id: "s29-8",  name: "Tuba Player",        extra: "tuba",                   codes: ["6603322", "6605248"] },
      { id: "s29-9",  name: "Soccer Goalkeeper",  extra: "football",               codes: ["6603320", "6605246"] },
      { id: "s29-10", name: "Cute Witch",         extra: "grey cat",               codes: ["6603329", "6605255"] },
      { id: "s29-11", name: "Mysterious Ronin",   extra: "gold katana (Lloyd)",    codes: ["6603327", "6605253"] },
      { id: "s29-12", name: "Unicorn Elf",        extra: "white unicorn",          codes: ["6603326", "6605252"] }
    ]
  },
  {
    key: "shrek",
    name: "Shrek Series",
    set: "71053",
    source: "ColleX, cross-checked with Brickbank, brick'em and Jay's Brick Blog",
    checked: "2026-10-22",
    // first code = North America (Mexico), others = EU/UK (Czech Republic)
    figures: [
      { id: "sh-1",  name: "Thelonious",       extra: "microphone, cue card", codes: ["6634903", "6627608", "6634882"] },
      { id: "sh-2",  name: "Puss in Boots",    extra: "sack, Blind Mouse",    codes: ["6634905", "6627610", "6634884"] },
      { id: "sh-3",  name: "Gingy",            extra: "lollipop",             codes: ["6634906", "6627611", "6634885"] },
      { id: "sh-4",  name: "Shrek",            extra: "storybook",            codes: ["6634901", "6627606", "6634880"] },
      { id: "sh-5",  name: "Dragon",           extra: "no accessory",         codes: ["6634900", "6627605", "6634879"] },
      { id: "sh-6",  name: "Fiona and Donkey", extra: "Donkey",               codes: ["6634902", "6627607", "6634881"] },
      { id: "sh-7",  name: "Merlin",           extra: "magic blasts",         codes: ["6634907", "6627612", "6634886"] },
      { id: "sh-8",  name: "Pinocchio",        extra: "Blind Mouse",          codes: ["6634910", "6627615", "6634889"] },
      { id: "sh-9",  name: "Big Bad Wolf",     extra: "Blind Mouse",          codes: ["6634904", "6627609", "6634883"] },
      { id: "sh-10", name: "Lord Farquaad",    extra: "Magic Mirror",         codes: ["6634908", "6627613", "6634887"] },
      { id: "sh-11", name: "Fairy Godmother",  extra: "wand, business card",  codes: ["6634909", "6627614", "6634888"] },
      { id: "sh-12", name: "Prince Charming",  extra: "sword",                codes: ["6634911", "6627616", "6634890"] }
    ]
  },
  {
    key: "s28",
    name: "Series 28: Animals",
    set: "71051",
    source: "ColleX, cross-checked with BrickNav and Minifigure Scanner",
    checked: "2026-10-18",
    // Crocodile's second code is disputed between sources (6584375 vs 6584376), so only one is listed
    figures: [
      { id: "s28-1",  name: "Peacock Costume Fan",     extra: "sunflower",            codes: ["6584394", "6584381"] },
      { id: "s28-2",  name: "Fluffy Cat Costume Fan",  extra: "ball of yarn",         codes: ["6584395", "6584382"] },
      { id: "s28-3",  name: "Goldfish Costume Fan",    extra: "jar of fish food",     codes: ["6584392", "6584379"] },
      { id: "s28-4",  name: "Monkey Costume Fan",      extra: "banana",               codes: ["6584398", "6584385"] },
      { id: "s28-5",  name: "Frog Costume Fan",        extra: "bubble wand",          codes: ["6584390", "6584377"] },
      { id: "s28-6",  name: "Koala Costume Fan",       extra: "boomerang",            codes: ["6584396", "6584383"] },
      { id: "s28-7",  name: "Dalmatian Costume Fan",   extra: "frisbee",              codes: ["6584391", "6584378"] },
      { id: "s28-8",  name: "Crocodile Costume Fan",   extra: "life ring, rubber duck", codes: ["6584389"] },
      { id: "s28-9",  name: "Dolphin Costume Fan",     extra: "shell with a pearl",   codes: ["6584397", "6584384"] },
      { id: "s28-10", name: "Cute Bunny Costume Fan",  extra: "Easter egg, basket",   codes: ["6584393", "6584380"] },
      { id: "s28-11", name: "Lion Costume Fan",        extra: "chicken drumstick",    codes: ["6584388", "6584375"] },
      { id: "s28-12", name: "Parrot Costume Fan",      extra: "snack box",            codes: ["6584387", "6584374"] }
    ]
  },
  {
    key: "spiderverse",
    name: "Spider-Man: Across the Spider-Verse",
    set: "71050",
    source: "ColleX, cross-checked with BrickNav and Minifigure Scanner",
    checked: "2026-10-20",
    figures: [
      { id: "sv-1",  name: "Miles Morales",          extra: "",                     codes: ["6568959", "6615990"] },
      { id: "sv-2",  name: "Spider-Punk",            extra: "guitar",               codes: ["6568964", "6615995"] },
      { id: "sv-3",  name: "Prowler (Miles G.)",     extra: "vinyl record",         codes: ["6568963", "6615994"] },
      { id: "sv-4",  name: "Spider-Gwen",            extra: "",                     codes: ["6568962", "6615993"] },
      { id: "sv-5",  name: "Spider-Man 2099",        extra: "LYLA",                 codes: ["6568960", "6615991"] },
      { id: "sv-6",  name: "Spider-Man India",       extra: "masked cat, teacup",   codes: ["6568965", "6615996"] },
      { id: "sv-7",  name: "Cyborg Spider-Woman",    extra: "",                     codes: ["6568968", "6615999"] },
      { id: "sv-8",  name: "Sun-Spider",             extra: "",                     codes: ["6568961", "6615992"] },
      { id: "sv-9",  name: "Spider-Byte",            extra: "",                     codes: ["6568967", "6615998"] },
      { id: "sv-10", name: "Peter B. Parker & Mayday", extra: "baby carrier",       codes: ["6568966", "6615997"] },
      { id: "sv-11", name: "Web-Slinger",            extra: "masked foal, lasso",   codes: ["6568969", "6616000"] },
      { id: "sv-12", name: "Werewolf Spider-Man",    extra: "",                     codes: ["6568970", "6616001"] }
    ]
  },
  {
    key: "s27",
    name: "Series 27",
    set: "71048",
    source: "ColleX, cross-checked with BrickNav and Minifigure Scanner",
    checked: "2026-10-20",
    figures: [
      { id: "s27-1",  name: "Hamster Costume Fan",     extra: "", codes: ["6522982", "6522994"] },
      { id: "s27-2",  name: "Wolfpack Beastmaster",    extra: "grey wolf", codes: ["6522981", "6522993"] },
      { id: "s27-3",  name: "Jetpack Racer",           extra: "", codes: ["6522986", "6522998"] },
      { id: "s27-4",  name: "Astronomer Kid",          extra: "", codes: ["6522989", "6523001"] },
      { id: "s27-5",  name: "Plush Toy Collector",     extra: "", codes: ["6522991", "6523003"] },
      { id: "s27-6",  name: "Pterodactyl Costume Fan", extra: "", codes: ["6522988", "6523000"] },
      { id: "s27-7",  name: "Longboarder",             extra: "longboard", codes: ["6522983", "6522995"] },
      { id: "s27-8",  name: "Bogeyman",                extra: "", codes: ["6522992", "6523004"] },
      { id: "s27-9",  name: "Cupid",                   extra: "wings", codes: ["6522985", "6522997"] },
      { id: "s27-10", name: "Pirate Quartermaster",    extra: "cockatoo", codes: ["6522987", "6522999"] },
      { id: "s27-11", name: "Cat Lover",               extra: "cat, ball of yarn", codes: ["6522990", "6523002"] },
      { id: "s27-12", name: "Steampunk Inventor",      extra: "", codes: ["6522984", "6522996"] }
    ]
  },
  {
    key: "dnd",
    name: "Dungeons & Dragons",
    set: "71047",
    source: "ColleX, cross-checked with Jay's Brick Blog and Minifigure Scanner (EU boxes only; some 2024 batches carry wrong codes)",
    checked: "2026-10-20",
    figures: [
      { id: "dnd-1",  name: "Dwarf Barbarian",       extra: "", codes: ["6502839", "6506740"] },
      { id: "dnd-2",  name: "Gith Warlock",          extra: "", codes: ["6502842", "6506743"] },
      { id: "dnd-3",  name: "Tiefling Sorcerer",     extra: "", codes: ["6502836", "6506737"] },
      { id: "dnd-4",  name: "Dragonborn Paladin",    extra: "", codes: ["6502840"] },
      { id: "dnd-5",  name: "Halfling Druid",        extra: "", codes: ["6502838"] },
      { id: "dnd-6",  name: "Aarakocra Ranger",      extra: "", codes: ["6502841", "6506742"] },
      { id: "dnd-7",  name: "Mind Flayer",           extra: "", codes: ["6502843"] },
      { id: "dnd-8",  name: "Strahd von Zarovich",   extra: "", codes: ["6502845", "6506746"] },
      { id: "dnd-9",  name: "Elf Bard",              extra: "", codes: ["6502837", "6506738"] },
      { id: "dnd-10", name: "The Lady of Pain",      extra: "", codes: ["6502844", "6506745"] },
      { id: "dnd-11", name: "Szass Tam",             extra: "", codes: ["6506748"] },
      { id: "dnd-12", name: "Tasha the Witch Queen", extra: "", codes: ["6502846", "6506747"] }
    ]
  },
  {
    key: "s26",
    name: "Series 26: Space",
    set: "71046",
    source: "ColleX, cross-checked with BrickNav, Minifigure Scanner and Jay's Brick Blog",
    checked: "2026-10-20",
    // first two codes = EU/UK (Czech, S), third = North America (Mexico, R)
    figures: [
      { id: "s26-1",  name: "Spacewalking Astronaut",    extra: "", codes: ["6484696", "6484916", "6484928"] },
      { id: "s26-2",  name: "Imposter",                  extra: "", codes: ["6484687", "6484906", "6484919"] },
      { id: "s26-3",  name: "Alien Tourist",             extra: "", codes: ["6484694", "6484914", "6484926"] },
      { id: "s26-4",  name: "Retro Space Heroine",       extra: "", codes: ["6484690", "6484909", "6484922"] },
      { id: "s26-5",  name: "M-Tron Powerlifter",        extra: "", codes: ["6484693", "6484912", "6484925"] },
      { id: "s26-6",  name: "Nurse Android",             extra: "", codes: ["6484691", "6484910", "6484923"] },
      { id: "s26-7",  name: "Flying Saucer Costume Fan", extra: "", codes: ["6484692", "6484911", "6484924"] },
      { id: "s26-8",  name: "Ice Planet Explorer",       extra: "saw, robot penguin", codes: ["6484686", "6484905", "6484918"] },
      { id: "s26-9",  name: "Robot Butler",              extra: "", codes: ["6484688", "6484907", "6484920"] },
      { id: "s26-10", name: "Alien Beetlezoid",          extra: "", codes: ["6484689", "6484908", "6484921"] },
      { id: "s26-11", name: "Orion",                     extra: "", codes: ["6484695", "6484915", "6484927"] },
      { id: "s26-12", name: "Blacktron Mutant",          extra: "", codes: ["6484685", "6484904", "6484917"] }
    ]
  }
];
