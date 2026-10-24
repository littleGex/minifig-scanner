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
    source: "ColleX, cross-checked with BrickNav and Minifigure Scanner, 18 Oct 2026",
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
    source: "ColleX, cross-checked with Brickbank, brick'em and Jay's Brick Blog, 22 Oct 2026",
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
  }
];
