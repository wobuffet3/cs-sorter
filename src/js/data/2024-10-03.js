dataSetVersion = "2024-10-03"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Race",
    key: "race",
    tooltip: "Check this to restrict to certain races.",
    checked: false,
    sub: [
      { name: "Human", key: "human" },
      { name: "Elf", key: "elf" },
      { name: "Dwarf", key: "dwarf" },
      { name: "Ork", key: "ork" },
      { name: "Lizardman", key: "liz" },
      { name: "Gessy", tooltip: "Furries", key: "gessy" },
      { name: "Jipangese", tooltip: "Foreign humans", key: "jip" },
      { name: "Ancient", tooltip: "Long-lived dragon-like beings", key: "anc" },
    ]
  },
  {
    name: "Filter by Starting Rarity",
    key: "star",
    tooltip: "Check this to restrict to characters of certain base star levels.",
    checked: false,
    sub: [ { name: "1★", key: "1" }, { name: "2★", key: "2" }, { name: "3★", key: "3" }, { name: "4★", key: "4" }, { name: "5★", key: "5" }, { name: "6★", key: "6" }
    ]
  },
  {
    name: "Filter by Attribute",
    key: "ele",
    tooltip: "Check this to restrict to certain elements.",
    checked: false,
    sub: [
      { name: "Fire", key: "fire" },
      { name: "Water", key: "water" },
      { name: "Wind", key: "wind" },
      { name: "Earth", key: "earth" },
      { name: "Dark", key: "dark" },
      { name: "Light", key: "light" },
      { name: "Origin", key: "org" },
    ]
  },
  {
    name: "Filter by Class",
    key: "class",
    tooltip: "Check this to restrict to certain classes.",
    checked: false,
    sub: [
      { name: "Tank", key: "tank" },
      { name: "Attacker", key: "dps" },
      { name: "Magic Knight", key: "mk" },
      { name: "Shooter", key: "sh" },
      { name: "Magician", key: "mage" },
      { name: "Healer", key: "heal" },
      { name: "Buffer", key: "buff" },
      { name: "Debuffer", key: "deb" },
      { name: "Trickster", key: "tri" },
    ]
  },
  {
    name: "Filter by Gender",
    key: "gender",
    tooltip: "Check this to restrict to men or women.",
    checked: false,
    sub: [
      { name: "Male", key: "m" },
      { name: "Female", key: "f" },
    ]
  },
  {
    name: "Disable Alt Forms",
    key: "alt",
    tooltip: "Check this to stop showing characters with alternate forms, such as Psychopomp Sophia or Moon Bunny Mimi.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Abel",
    img: "abel.png",
    opts: {
      race: ["human"],
      star: ["1"],
      ele: ["light"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Adel",
    img: "adel.png",
    opts: {
      race: ["human"],
      star: ["1"],
      ele: ["light"],
      class: ["tank"],
      gender: ["f"]
    }
  },
  {
    name: "Alfred",
    img: "alfred.png",
    opts: {
      race: ["human"],
      star: ["3"],
      ele: ["earth"],
      class: ["buff"],
      gender: ["m"]
    }
  },
  {
    name: "Amelia",
    img: "amelia.png",
    opts: {
      race: ["human"],
      star: ["1"],
      ele: ["fire"],
      class: ["heal"],
      gender: ["f"]
    },
  },
  {
    name: "Hamham Amelia",
    img: "ameliaAlt.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["fire"],
      class: ["tank"],
      gender: ["f"],
      alt: true
    }
  },
  {
    name: "Arman",
    img: "arman.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["wind"],
      class: ["mk"],
      gender: ["f"]
    }
  },
  {
    name: "Armidal",
    img: "armidal.png",
    opts: {
      race: ["human"],
      star: ["3"],
      ele: ["wind"],
      class: ["buff"],
      gender: ["m"]
    }
  },
  {
    name: "Azzaria",
    img: "azzaria.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["water"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Berneka",
    img: "berneka.png",
    opts: {
      race: ["human"],
      star: ["2"],
      ele: ["fire"],
      class: ["mk"],
      gender: ["f"]
    }
  },
  {
    name: "Bret",
    img: "bret.png",
    opts: {
      race: ["human"],
      star: ["1"],
      ele: [""],
      class: [""],
      gender: ["m"]
    }
  },
  {
    name: "Calamity",
    img: "calamity.png",
    opts: {
      race: ["human", "jip"],
      star: ["4"],
      ele: ["dark"],
      class: ["mk"],
      gender: ["m"]
    }
  },
  {
    name: "Dylan",
    img: "dylan.png",
    opts: {
      race: ["human"],
      star: ["2"],
      ele: ["water"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Edda",
    img: "edda.png",
    opts: {
      race: ["human"],
      star: ["1"],
      ele: ["dark"],
      class: ["deb"],
      gender: ["f"]
    }
  },
  {
    name: "Sorrowful Swordswoman Edda",
    img: "eddaAlt.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["light"],
      class: ["mk"],
      gender: ["f"],
      alt: true
    }
  },
  {
    name: "Eirich",
    img: "eirich.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["light"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Emily",
    img: "emily.png",
    opts: {
      race: ["human"],
      star: ["4"],
      ele: ["light"],
      class: ["sh"],
      gender: ["f"]
    }
  },
  {
    name: "Regent Emily",
    img: "emilyAlt.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["dark"],
      class: ["sh"],
      gender: ["f"],
      alt: true
    }
  },
  {
    name: "Felix",
    img: "felix.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["dark"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Fholk",
    img: "fholk.png",
    opts: {
      race: ["human"],
      star: ["1"],
      ele: ["light"],
      class: ["heal"],
      gender: ["m"]
    }
  },
  {
    name: "Fitzwalt",
    img: "fitzwalt.png",
    opts: {
      race: ["human"],
      star: ["4"],
      ele: ["earth"],
      class: ["mk"],
      gender: ["m"]
    }
  },
  {
    name: "Gao",
    img: "gao.png",
    opts: {
      race: ["human", "jip"],
      star: ["3"],
      ele: ["earth"],
      class: ["tri"],
      gender: ["f"]
    }
  },
  {
    name: "Garrett Han",
    img: "garrett.png",
    opts: {
      race: ["human"],
      star: ["4"],
      ele: ["earth"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Valorous Sword Garrett Han",
    img: "garrettAlt.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["dark"],
      class: ["mk"],
      gender: ["m"],
      alt: true
    }
  },
  {
    name: "Garstan",
    img: "garstan.png",
    opts: {
      race: ["human"],
      star: ["3"],
      ele: ["light"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Gavin Break",
    img: "gavin.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["dark"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Glucan",
    img: "glucan.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["light"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Hannah",
    img: "hannah.png",
    opts: {
      race: ["human"],
      star: ["1"],
      ele: [],
      class: [],
      gender: ["f"]
    }
  },
  {
    name: "Hattan",
    img: "hattan.png",
    opts: {
      race: ["human", "jip"],
      star: ["4"],
      ele: ["dark"],
      class: ["sh"],
      gender: ["m"]
    }
  },
  {
    name: "Hayami",
    img: "hayami.png",
    opts: {
      race: ["human", "jip"],
      star: ["5"],
      ele: ["light"],
      class: ["tri"],
      gender: ["f"]
    }
  },
  {
    name: "Itsuki",
    img: "itsuki.png",
    opts: {
      race: ["human", "jip"],
      star: ["5"],
      ele: ["light"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Jillian",
    img: "jillian.png",
    opts: {
      race: ["human"],
      star: ["3"],
      ele: ["water"],
      class: ["sh"],
      gender: ["m"]
    }
  },
  {
    name: "Kaito",
    img: "kaito.png",
    opts: {
      race: ["human", "jip"],
      star: ["3"],
      ele: ["water"],
      class: ["mk"],
      gender: ["m"]
    }
  },
  {
    name: "Kilian",
    img: "kilian.png",
    opts: {
      race: ["human"],
      star: ["3"],
      ele: ["fire"],
      class: ["mk"],
      gender: ["m"]
    }
  },
  {
    name: "Klea",
    img: "klea.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["wind"],
      class: ["dps"],
      gender: ["f"]
    }
  },
  {
    name: "Lena",
    img: "lena.png",
    opts: {
      race: ["human"],
      star: ["1"],
      ele: ["wind"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Leuvre",
    img: "leuvre.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["fire"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Lombarde",
    img: "lombarde.png",
    opts: {
      race: ["human"],
      star: ["4"],
      ele: ["earth"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Great General Lombarde",
    img: "lombardeAlt.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["fire"],
      class: ["dps"],
      gender: ["m"],
      alt: true
    }
  },
  {
    name: "Ludmila",
    img: "ludmila.png",
    opts: {
      race: ["human"],
      star: ["2"],
      ele: ["dark"],
      class: ["deb"],
      gender: ["f"]
    }
  },
  {
    name: "Marbas",
    img: "marbas.png",
    opts: {
      race: ["human"],
      star: ["2"],
      ele: ["wind"],
      class: ["sh"],
      gender: ["m"]
    }
  },
  {
    name: "Martha",
    img: "martha.png",
    opts: {
      race: ["human", "jip"],
      star: ["2"],
      ele: ["water"],
      class: ["tri"],
      gender: ["f"]
    }
  },
  {
    name: "Mimi",
    img: "mimi.png",
    opts: {
      race: ["human"],
      star: ["2"],
      ele: ["fire"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Moon Bunny Mimi",
    img: "mimiAlt.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["fire"],
      class: ["tri"],
      gender: ["f"],
      alt: true
    }
  },
  {
    name: "Misakura",
    img: "misakura.png",
    opts: {
      race: ["human", "jip"],
      star: ["5"],
      ele: ["dark"],
      class: ["mk"],
      gender: ["f"]
    }
  },
  {
    name: "Kyubi Misakura",
    img: "misakuraAlt.png",
    opts: {
      race: ["human", "jip"],
      star: ["6"],
      ele: ["fire"],
      class: ["dps"],
      gender: ["f"],
      alt: true
    }
  },
  {
    name: "Molly",
    img: "molly.png",
    opts: {
      race: ["human"],
      star: ["1"],
      ele: ["fire"],
      class: ["sh"],
      gender: ["f"]
    }
  },
  {
    name: "Odysseia",
    img: "odysseia.png",
    opts: {
      race: ["human"],
      star: ["3"],
      ele: ["water"],
      class: ["deb"],
      gender: ["f"]
    }
  },
  {
    name: "Piet",
    img: "piet.png",
    opts: {
      race: ["human"],
      star: ["3"],
      ele: ["water"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Ralph",
    img: "ralph.png",
    opts: {
      race: ["human"],
      star: ["4"],
      ele: ["wind"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Sword Sage Ralph",
    img: "ralphAlt.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["fire"],
      class: ["dps"],
      gender: ["m"],
      alt: true
    }
  },
  {
    name: "Ranvold",
    img: "ranvold.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["fire"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Reaumur",
    img: "reaumur.png",
    opts: {
      race: ["human"],
      star: ["3"],
      ele: ["light"],
      class: ["mage"],
      gender: ["m"]
    }
  },
  {
    name: "Holy Flash Reaumur",
    img: "reaumurAlt.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["light"],
      class: ["mk"],
      gender: ["m"],
      alt: true
    }
  },
  {
    name: "Rien",
    img: "rien.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["wind"],
      class: ["sh"],
      gender: ["m"]
    }
  },
  {
    name: "Riot",
    img: "riot.png",
    opts: {
      race: ["human"],
      star: ["2"],
      ele: ["earth"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Roddie",
    img: "roddie.png",
    opts: {
      race: ["human"],
      star: ["4"],
      ele: ["water"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Rolomeu",
    img: "rolomeu.png",
    opts: {
      race: ["human"],
      star: ["1"],
      ele: ["fire"],
      class: ["buff"],
      gender: ["f"]
    }
  },
  {
    name: "Dreamflyer Rolomeu",
    img: "rolomeuAlt.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["fire"],
      class: ["deb"],
      gender: ["f"],
      alt: true
    }
  },
  {
    name: "Sanada Yukimura",
    img: "sanada.png",
    opts: {
      race: ["human"],
      star: ["4"],
      ele: ["fire"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Sophia",
    img: "sophia.png",
    opts: {
      race: ["human"],
      star: ["3"],
      ele: ["light"],
      class: ["tank"],
      gender: ["f"]
    }
  },
  {
    name: "Psychopomp Sophia",
    img: "sophiaAlt.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["light"],
      class: ["dps"],
      gender: ["f"],
      alt: true
    }
  },
  {
    name: "Trick",
    img: "trick.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["dark"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Veronica",
    img: "veronica.png",
    opts: {
      race: ["human"],
      star: ["3"],
      ele: ["dark"],
      class: ["tri"],
      gender: ["f"]
    }
  },
  {
    name: "Volf",
    img: "volf.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["earth"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Vongyra",
    img: "vongyra.png",
    opts: {
      race: ["human"],
      star: ["4"],
      ele: ["earth"],
      class: ["buff"],
      gender: ["m"]
    }
  },
  {
    name: "Worwick",
    img: "worwick.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["light"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Unbound King Worwick",
    img: "worwickAlt.png",
    opts: {
      race: ["human"],
      star: ["6"],
      ele: ["dark"],
      class: ["mk"],
      gender: ["m"],
      alt: true
    }
  },
  {
    name: "Wyngaard",
    img: "wyngaard.png",
    opts: {
      race: ["human"],
      star: ["3"],
      ele: ["dark"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Yoldo",
    img: "yoldo.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["light"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Lord Yoldo",
    img: "yoldoAlt.png",
    opts: {
      race: ["human"],
      star: ["5"],
      ele: ["dark"],
      class: ["tank"],
      gender: ["m"],
      alt: true
    }
  },
  {
    name: "Akari",
    img: "akari.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["dark"],
      class: ["tri"],
      gender: ["f"]
    }
  },
  {
    name: "Alfaro",
    img: "alfaro.png",
    opts: {
      race: ["elf"],
      star: ["3"],
      ele: ["dark"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Andario",
    img: "andario.png",
    opts: {
      race: ["elf"],
      star: ["3"],
      ele: ["light"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Angie",
    img: "angie.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["dark"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Arbo Judas",
    img: "arbo.png",
    opts: {
      race: ["elf"],
      star: ["3"],
      ele: ["org"],
      class: ["tri"],
      gender: ["f"]
    }
  },
  {
    name: "Astos",
    img: "astos.png",
    opts: {
      race: ["elf"],
      star: ["4"],
      ele: ["wind"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Axion",
    img: "axion.png",
    opts: {
      race: ["elf"],
      star: ["4"],
      ele: ["dark"],
      class: ["heal"],
      gender: ["m"]
    }
  },
  {
    name: "Cains",
    img: "cains.png",
    opts: {
      race: ["elf"],
      star: ["3"],
      ele: ["dark"],
      class: ["dps"],
      gender: ["f"]
    }
  },
  {
    name: "Oathbound Cains",
    img: "cainsAlt.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["earth"],
      class: ["tri"],
      gender: ["f"],
      alt: true
    }
  },
  {
    name: "Cecilia",
    img: "cecilia.png",
    opts: {
      race: ["elf"],
      star: ["1"],
      ele: ["wind"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Cecilio",
    img: "cecilio.png",
    opts: {
      race: ["elf"],
      star: ["1"],
      ele: ["wind"],
      class: ["mage"],
      gender: ["m"]
    }
  },
  {
    name: "Ebis",
    img: "ebis.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["org"],
      class: ["sh"],
      gender: ["f"]
    }
  },
  {
    name: "Eldova",
    img: "eldova.png",
    opts: {
      race: ["elf"],
      star: ["3"],
      ele: ["dark"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Emmett",
    img: "emmett.png",
    opts: {
      race: ["elf"],
      star: ["4"],
      ele: ["earth"],
      class: ["deb"],
      gender: ["f"]
    }
  },
  {
    name: "Estella",
    img: "estella.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["earth"],
      class: ["mk"],
      gender: ["f"]
    }
  },
  {
    name: "Galiola",
    img: "galiola.png",
    opts: {
      race: ["elf"],
      star: ["3"],
      ele: ["earth"],
      class: ["sh"],
      gender: ["m"]
    }
  },
  {
    name: "Gardiros",
    img: "gardiros.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["wind"],
      class: ["mage"],
      gender: ["m"]
    }
  },
  {
    name: "Hollande",
    img: "hollande.png",
    opts: {
      race: ["elf"],
      star: ["3"],
      ele: ["earth"],
      class: ["mk"],
      gender: ["f", "m"]
    }
  },
  {
    name: "Hoaglande",
    img: "hollandeAlt.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["wind"],
      class: ["mk"],
      gender: ["f", "m"],
      alt: true
    }
  },
  {
    name: "Kaella",
    img: "kaella.png",
    opts: {
      race: ["elf"],
      star: ["4"],
      ele: ["wind"],
      class: ["dps"],
      gender: ["f"]
    }
  },
  {
    name: "Leriora",
    img: "leriora.png",
    opts: {
      race: ["elf"],
      star: ["4"],
      ele: ["fire"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Littaria",
    img: "littaria.png",
    opts: {
      race: ["elf"],
      star: ["2"],
      ele: ["water"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Logion",
    img: "logion.png",
    opts: {
      race: ["elf"],
      star: ["2"],
      ele: ["dark"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Marion",
    img: "marion.png",
    opts: {
      race: ["elf"],
      star: ["3"],
      ele: ["water"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Miria",
    img: "miria.png",
    opts: {
      race: ["elf"],
      star: ["1"],
      ele: ["wind"],
      class: ["heal"],
      gender: ["f"]
    }
  },
  {
    name: "Nicolo",
    img: "nicolo.png",
    opts: {
      race: ["elf"],
      star: ["4"],
      ele: ["earth"],
      class: ["buff"],
      gender: ["m"]
    }
  },
  {
    name: "Noah",
    img: "noah.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["org"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Padanoa",
    img: "padanoa.png",
    opts: {
      race: ["elf"],
      star: ["2"],
      ele: ["earth"],
      class: ["deb"],
      gender: ["f"]
    }
  },
  {
    name: "Netherworld Padanoa",
    img: "padanoaAlt.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["water"],
      class: ["dps"],
      gender: ["f"],
      alt: true
    }
  },
  {
    name: "Philomena",
    img: "philomena.png",
    opts: {
      race: ["elf"],
      star: ["1"],
      ele: ["earth"],
      class: ["buff"],
      gender: ["f"]
    }
  },
  {
    name: "Pollux",
    img: "pollux.png",
    opts: {
      race: ["elf"],
      star: ["1"],
      ele: ["water"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Priya",
    img: "priya.png",
    opts: {
      race: ["elf"],
      star: ["2"],
      ele: ["light"],
      class: ["mk"],
      gender: ["f"]
    }
  },
  {
    name: "Rakell",
    img: "rakell.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["earth"],
      class: ["mage"],
      gender: ["m"]
    }
  },
  {
    name: "Fairy King Rakell",
    img: "rakellAlt.png",
    opts: {
      race: ["elf"],
      star: ["6"],
      ele: ["light"],
      class: ["mage"],
      gender: ["m"],
      alt: true
    }
  },
  {
    name: "Rasbell",
    img: "rasbell.png",
    opts: {
      race: ["elf"],
      star: ["3"],
      ele: ["wind"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Riardo",
    img: "riardo.png",
    opts: {
      race: ["elf"],
      star: ["3"],
      ele: ["org"],
      class: ["mage"],
      gender: ["m"]
    }
  },
  {
    name: "Rufus",
    img: "rufus.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["wind"],
      class: ["sh"],
      gender: ["m"]
    }
  },
  {
    name: "Rufus of the Blue Moon",
    img: "rufusAlt.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["light"],
      class: ["tri"],
      gender: ["m"],
      alt: true
    }
  },
  {
    name: "Sirvane",
    img: "sirvane.png",
    opts: {
      race: ["elf"],
      star: ["3"],
      ele: ["wind"],
      class: ["mage"],
      gender: ["m"]
    }
  },
  {
    name: "Slaveia",
    img: "slaveia.png",
    opts: {
      race: ["elf"],
      star: ["2"],
      ele: ["light"],
      class: ["heal"],
      gender: ["f"]
    }
  },
  {
    name: "Solo",
    img: "solo.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["origin"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Solveig",
    img: "solveig.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["dark"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Valiant",
    img: "valiant.png",
    opts: {
      race: ["elf"],
      star: ["4"],
      ele: ["fire"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Willow",
    img: "willow.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["wind"],
      class: ["mage"],
      gender: ["m"]
    }
  },
  { 
    name: "Xuanzang",
    img: "xuanzang.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["dark"],
      class: ["heal"],
      gender: ["m"]
    } 
  },
  {
    name: "Polka",
    img: "polka.png",
    opts: {
      race: [],
      star: [],
      ele: [],
      class: [],
      gender: ["m"]
    }
  },
  {
    name: "Bajie",
    img: "bajie.png",
    opts: {
      race: ["dwarf"],
      star: ["4"],
      ele: ["earth"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Borodin",
    img: "borodin.png",
    opts: {
      race: ["dwarf"],
      star: ["5"],
      ele: ["light"],
      class: ["sh"],
      gender: ["m"]
    }
  },
  {
    name: "Bustral",
    img: "bustral.png",
    opts: {
      race: ["dwarf"],
      star: ["3"],
      ele: ["dark"],
      class: ["sh"],
      gender: ["m"]
    }
  },
  {
    name: "Canal",
    img: "canal.png",
    opts: {
      race: ["dwarf"],
      star: ["1"],
      ele: ["water"],
      class: ["heal"],
      gender: ["f"]
    }
  },
  {
    name: "Beargirl Canal",
    img: "canalAlt.png",
    opts: {
      race: ["dwarf"],
      star: ["5"],
      ele: ["water"],
      class: ["tank"],
      gender: ["f"],
      alt: true
    }
  },
  {
    name: "Clevis",
    img: "clevis.png",
    opts: {
      race: ["dwarf"],
      star: ["3"],
      ele: ["wind"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Eduardo",
    img: "eduardo.png",
    opts: {
      race: ["dwarf"],
      star: ["3"],
      ele: ["org"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Garad",
    img: "garad.png",
    opts: {
      race: ["dwarf"],
      star: ["5"],
      ele: ["wind"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Shadow Garad",
    img: "garadAlt.png",
    opts: {
      race: ["dwarf"],
      star: ["5"],
      ele: ["earth"],
      class: ["tri"],
      gender: ["m"],
      alt: true
    }
  },
  {
    name: "Gil",
    img: "gil.png",
    opts: {
      race: ["dwarf"],
      star: ["4"],
      ele: ["earth"],
      class: ["mage"],
      gender: ["m"]
    }
  },
  {
    name: "Helmondus",
    img: "helmondus.png",
    opts: {
      race: ["dwarf"],
      star: ["5"],
      ele: ["earth"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Irene",
    img: "irene.png",
    opts: {
      race: ["dwarf"],
      star: ["2"],
      ele: ["wind"],
      class: ["sh"],
      gender: ["f"]
    }
  },
  {
    name: "Isaiah",
    img: "isaiah.png",
    opts: {
      race: ["dwarf"],
      star: ["4"],
      ele: ["earth"],
      class: ["heal"],
      gender: ["f"]
    }
  },
  {
    name: "Jarilo",
    img: "jarilo.png",
    opts: {
      race: ["dwarf"],
      star: ["1"],
      ele: ["light"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Karin",
    img: "karin.png",
    opts: {
      race: ["dwarf"],
      star: ["4"],
      ele: ["fire"],
      class: ["tank"],
      gender: ["f"]
    }
  },
  {
    name: "Karl Dane",
    img: "karl.png",
    opts: {
      race: ["dwarf"],
      star: ["1"],
      ele: ["earth"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Kiehl Dane",
    img: "kiehl.png",
    opts: {
      race: ["dwarf"],
      star: ["4"],
      ele: ["fire"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  { 
    name: "Luca",
    img: "luca.png",
    opts: {
      race: ["dwarf"],
      star: ["1"],
      ele: ["earth"],
      class: ["sh"],
      gender: ["m"]
    } 
  },
  {
    name: "Lucky",
    img: "lucky.png",
    opts: {
      race: ["dwarf"],
      star: ["5"],
      ele: ["fire"],
      class: ["sh"],
      gender: ["m"]
    }
  },
  {
    name: "Lulu",
    img: "lulu.png",
    opts: {
      race: ["dwarf"],
      star: ["1"],
      ele: ["earth"],
      class: ["sh"],
      gender: ["f"]
    }
  },
  {
    name: "Melhiol",
    img: "melhiol.png",
    opts: {
      race: ["dwarf"],
      star: ["2"],
      ele: ["fire"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Milcosta",
    img: "milcosta.png",
    opts: {
      race: ["dwarf"],
      star: ["4"],
      ele: ["dark"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Myla",
    img: "myla.png",
    opts: {
      race: ["dwarf"],
      star: ["3"],
      ele: ["dark"],
      class: ["buff"],
      gender: ["f"]
    }
  },
  {
    name: "Olga",
    img: "olga.png",
    opts: {
      race: ["dwarf"],
      star: ["5"],
      ele: ["fire"],
      class: ["tri"],
      gender: ["f"]
    }
  },
  {
    name: "Palyan",
    img: "palyan.png",
    opts: {
      race: ["dwarf"],
      star: ["2"],
      ele: ["earth"],
      class: ["heal"],
      gender: ["m"]
    }
  },
  {
    name: "Polmul",
    img: "polmul.png",
    opts: {
      race: ["dwarf"],
      star: ["5"],
      ele: ["earth"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Skourad",
    img: "skourad.png",
    opts: {
      race: ["dwarf"],
      star: ["4"],
      ele: ["fire"],
      class: ["buff"],
      gender: ["m"]
    }
  },
  {
    name: "Smiroff",
    img: "smiroff.png",
    opts: {
      race: ["dwarf"],
      star: ["3"],
      ele: ["water"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Snegurochka",
    img: "snegurochka.png",
    opts: {
      race: ["dwarf"],
      star: ["2"],
      ele: ["water"],
      class: ["tri"],
      gender: ["f"]
    }
  },
  {
    name: "Snegurochka of the Radiant Snow",
    img: "snegurochkaAlt.png",
    opts: {
      race: ["dwarf"],
      star: ["5"],
      ele: ["light"],
      class: ["buff"],
      gender: ["f"],
      alt: true
    }
  },
  {
    name: "Tachenka",
    img: "tachenka.png",
    opts: {
      race: ["dwarf"],
      star: ["5"],
      ele: ["dark"],
      class: ["dps"],
      gender: ["f"]
    }
  },
  {
    name: "Tatara",
    img: "tatara.png",
    opts: {
      race: ["dwarf"],
      star: ["5"],
      ele: ["earth"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Theo",
    img: "theo.png",
    opts: {
      race: ["dwarf"],
      star: ["3"],
      ele: ["fire"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Tiger King",
    img: "tigerking.png",
    opts: {
      race: ["dwarf"],
      star: ["5"],
      ele: ["earth"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  { 
    name: "Trophim",
    img: "trophim.png",
    opts: {
      race: ["dwarf"],
      star: ["4"],
      ele: ["dark"],
      class: ["tri"],
      gender: ["m"]
    } 
  },
  {
    name: "Alban",
    img: "alban.png",
    opts: {
      race: ["ork"],
      star: ["5"],
      ele: ["earth"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Amritah",
    img: "amritah.png",
    opts: {
      race: ["ork"],
      star: ["5"],
      ele: ["earth"],
      class: ["dps"],
      gender: ["f"]
    }
  },
  {
    name: "Angheera",
    img: "angheera.png",
    opts: {
      race: ["ork"],
      star: ["1"],
      ele: ["earth"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Baaz",
    img: "baaz.png",
    opts: {
      race: ["ork"],
      star: ["3"],
      ele: ["wind"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Baronga",
    img: "baronga.png",
    opts: {
      race: ["ork"],
      star: ["5"],
      ele: ["dark"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Bhairava",
    img: "bhairava.png",
    opts: {
      race: ["ork"],
      star: ["5"],
      ele: ["fire"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Bogguz",
    img: "bogguz.png",
    opts: {
      race: ["ork"],
      star: ["1"],
      ele: ["fire"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Dilla",
    img: "dilla.png",
    opts: {
      race: ["ork"],
      star: ["2"],
      ele: ["dark"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Dracoute",
    img: "dracoute.png",
    opts: {
      race: ["ork"],
      star: ["5"],
      ele: ["earth"],
      class: ["sh"],
      gender: ["m"]
    }
  },
  {
    name: "Drehd",
    img: "drehd.png",
    opts: {
      race: ["ork"],
      star: ["5"],
      ele: ["light"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Eruvii",
    img: "eruvii.png",
    opts: {
      race: ["ork"],
      star: ["4"],
      ele: ["wind"],
      class: ["dps"],
      gender: ["f"]
    }
  },
  {
    name: "Futaba",
    img: "futaba.png",
    opts: {
      race: ["ork"],
      star: ["5"],
      ele: ["earth"],
      class: ["mk"],
      gender: ["f"]
    }
  },
  {
    name: "Gada",
    img: "gada.png",
    opts: {
      race: ["ork"],
      star: ["4"],
      ele: ["fire"],
      class: ["sh"],
      gender: ["f"]
    }
  },
  {
    name: "Gaezhar",
    img: "gaezhar.png",
    opts: {
      race: ["ork"],
      star: ["3"],
      ele: ["fire"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Gaines",
    img: "gaines.png",
    opts: {
      race: ["ork"],
      star: ["4"],
      ele: ["earth"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Galga",
    img: "galga.png",
    opts: {
      race: ["ork"],
      star: ["3"],
      ele: ["dark"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Gamuhl",
    img: "gamuhl.png",
    opts: {
      race: ["ork"],
      star: ["1"],
      ele: ["water"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Gamuhla",
    img: "gamuhla.png",
    opts: {
      race: ["ork"],
      star: ["1"],
      ele: ["water"],
      class: ["tank"],
      gender: ["f"]
    }
  },
  {
    name: "Gando",
    img: "gando.png",
    opts: {
      race: ["ork"],
      star: ["3"],
      ele: ["fire"],
      class: ["heal"],
      gender: ["m"]
    }
  },
  {
    name: "Ghizarru",
    img: "ghizarru.png",
    opts: {
      race: ["ork"],
      star: ["4"],
      ele: ["water"],
      class: ["mk"],
      gender: ["m"]
    }
  },
  {
    name: "Ghuldoh",
    img: "ghuldoh.png",
    opts: {
      race: ["ork"],
      star: ["4"],
      ele: ["wind"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Jhala",
    img: "jhala.png",
    opts: {
      race: ["ork"],
      star: ["1"],
      ele: ["wind"],
      class: ["buff"],
      gender: ["f"]
    }
  },
  {
    name: "Kaida",
    img: "kaida.png",
    opts: {
      race: ["ork"],
      star: ["5"],
      ele: ["dark"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Kirughabaa",
    img: "kirughabaa.png",
    opts: {
      race: ["ork"],
      star: ["5"],
      ele: ["earth"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Kwaralu",
    img: "kwaralu.png",
    opts: {
      race: ["ork"],
      star: ["3"],
      ele: ["water"],
      class: ["buff"],
      gender: ["m"]
    }
  },
  {
    name: "Lasharna",
    img: "lasharna.png",
    opts: {
      race: ["ork"],
      star: ["5"],
      ele: ["water"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Mamba",
    img: "mamba.png",
    opts: {
      race: ["ork"],
      star: ["5"],
      ele: ["light"],
      class: ["sh"],
      gender: ["f"]
    }
  },
  {
    name: "Melah",
    img: "melah.png",
    opts: {
      race: ["ork"],
      star: ["1"],
      ele: ["fire"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Moga",
    img: "moga.png",
    opts: {
      race: ["ork"],
      star: ["2"],
      ele: ["water"],
      class: ["heal"],
      gender: ["f"]
    }
  },
  {
    name: "Novaar",
    img: "novaar.png",
    opts: {
      race: ["ork"],
      star: ["3"],
      ele: ["dark"],
      class: ["mk"],
      gender: ["m"]
    }
  },
  {
    name: "Virginia",
    img: "virginia.png",
    opts: {
      race: ["ork"],
      star: ["5"],
      ele: ["earth"],
      class: ["dps"],
      gender: ["f"]
    }
  },
  {
    name: "Zaktl",
    img: "zaktl.png",
    opts: {
      race: ["ork"],
      star: ["2"],
      ele: ["earth"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Zhorbaa",
    img: "zhorbaa.png",
    opts: {
      race: ["ork"],
      star: ["5"],
      ele: ["fire"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Zonelli",
    img: "zoneli.png",
    opts: {
      race: ["ork"],
      star: ["4"],
      ele: ["dark"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Abefero",
    img: "abefero.png",
    opts: {
      race: ["liz"],
      star: ["2"],
      ele: ["light"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Aliaro",
    img: "aliaro.png",
    opts: {
      race: ["liz"],
      star: ["3"],
      ele: ["earth"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Alvaro",
    img: "alvaro.png",
    opts: {
      race: ["liz"],
      star: ["5"],
      ele: ["wind"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Antares",
    img: "antares.png",
    opts: {
      race: ["liz"],
      star: ["4"],
      ele: ["dark"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Ascro",
    img: "ascro.png",
    opts: {
      race: ["liz"],
      star: ["3"],
      ele: ["dark"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Balroa",
    img: "balroa.png",
    opts: {
      race: ["liz"],
      star: ["5"],
      ele: ["earth"],
      class: ["tri"],
      gender: ["f"]
    }
  },
  {
    name: "Dolbiro",
    img: "dolbiro.png",
    opts: {
      race: ["liz"],
      star: ["3"],
      ele: ["light"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Emetro",
    img: "emetro.png",
    opts: {
      race: ["liz"],
      star: ["1"],
      ele: ["water"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Harlequin",
    img: "harlequin.png",
    opts: {
      race: ["liz"],
      star: ["2"],
      ele: ["dark"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Lamelaiza",
    img: "lamelaiza.png",
    opts: {
      race: ["liz"],
      star: ["5"],
      ele: ["water"],
      class: ["dps"],
      gender: ["f"]
    }
  },
  {
    name: "Mero",
    img: "mero.png",
    opts: {
      race: ["liz"],
      star: ["1"],
      ele: ["water"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Miro",
    img: "miro.png",
    opts: {
      race: ["liz"],
      star: ["1"],
      ele: ["water"],
      class: ["sh"],
      gender: ["f"]
    }
  },
  {
    name: "Norn",
    img: "norn.png",
    opts: {
      race: ["liz"],
      star: ["4"],
      ele: ["fire"],
      class: ["mk"],
      gender: ["m"]
    }
  },
  {
    name: "Oberon",
    img: "oberon.png",
    opts: {
      race: ["liz"],
      star: ["2"],
      ele: ["wind"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Dragon Warrior Mero",
    img: "meroAlt.png",
    opts: {
      race: ["liz"],
      star: ["5"],
      ele: ["earth"],
      class: ["mk"],
      gender: ["m"],
      alt: true
    }
  },
  {
    name: "Sadioro",
    img: "sadioro.png",
    opts: {
      race: ["liz"],
      star: ["5"],
      ele: ["water"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Sullivan",
    img: "sullivan.png",
    opts: {
      race: ["liz"],
      star: ["3"],
      ele: ["fire"],
      class: ["sh"],
      gender: ["m"]
    }
  },
  {
    name: "Theria",
    img: "theria.png",
    opts: {
      race: ["liz"],
      star: ["1"],
      ele: ["fire"],
      class: ["dps"],
      gender: ["f"]
    }
  },
  {
    name: "Therio",
    img: "therio.png",
    opts: {
      race: ["liz"],
      star: ["1"],
      ele: ["fire"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Wujing",
    img: "wujing.png",
    opts: {
      race: ["liz"],
      star: ["4"],
      ele: ["water"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Yuri",
    img: "yuri.png",
    opts: {
      race: ["liz"],
      star: ["2"],
      ele: ["water"],
      class: ["buff"],
      gender: ["f"]
    }
  },
  {
    name: "Adrias",
    img: "adrias.png",
    opts: {
      race: ["gessy"],
      star: ["3"],
      ele: ["wind"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Scarlet Fang Adrias",
    img: "adriasAlt.png",
    opts: {
      race: ["gessy"],
      star: ["5"],
      ele: ["org"],
      class: ["tri"],
      gender: ["m"],
      alt: true
    }
  },
  {
    name: "Almimi",
    img: "almimi.png",
    opts: {
      race: ["gessy"],
      star: ["3"],
      ele: ["dark"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Alotie",
    img: "alotie.png",
    opts: {
      race: ["gessy"],
      star: ["1"],
      ele: ["dark"],
      class: ["deb"],
      gender: ["f"]
    }
  },
  {
    name: "Deogigi",
    img: "deogigi.png",
    opts: {
      race: ["gessy"],
      star: ["2"],
      ele: ["fire"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Gargogo",
    img: "gargogo.png",
    opts: {
      race: ["gessy"],
      star: ["4"],
      ele: ["dark"],
      class: ["mage"],
      gender: ["m"]
    }
  },
  {
    name: "Undying Gargogo",
    img: "gargogoAlt.png",
    opts: {
      race: ["gessy"],
      star: ["5"],
      ele: ["dark"],
      class: ["mk"],
      gender: ["m"],
      alt: true
    }
  },
  {
    name: "Jawokiki",
    img: "jawokiki.png",
    opts: {
      race: ["gessy"],
      star: ["3"],
      ele: ["light"],
      class: ["mk"],
      gender: ["m"]
    }
  },
  {
    name: "Jinjiao and Yinjiao",
    img: "jinjiao&yinjiao.png",
    opts: {
      race: ["gessy"],
      star: ["5"],
      ele: ["water"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Joynas",
    img: "joynas.png",
    opts: {
      race: ["gessy"],
      star: ["3"],
      ele: ["earth"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Lili",
    img: "lili.png",
    opts: {
      race: ["gessy"],
      star: ["4"],
      ele: ["earth"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Aquamirror Lili",
    img: "liliAlt.png",
    opts: {
      race: ["gessy"],
      star: ["5"],
      ele: ["water"],
      class: ["tri"],
      gender: ["f"],
      alt: true
    }
  },
  {
    name: "Magugra",
    img: "magugra.png",
    opts: {
      race: ["gessy"],
      star: ["4"],
      ele: ["light"],
      class: ["buff"],
      gender: ["m"]
    }
  },
  {
    name: "Malma",
    img: "malma.png",
    opts: {
      race: ["gessy"],
      star: ["2"],
      ele: ["wind"],
      class: ["buff"],
      gender: ["f"]
    }
  },
  {
    name: "Mignono",
    img: "mignono.png",
    opts: {
      race: ["gessy"],
      star: ["1"],
      ele: ["earth"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Myarol",
    img: "myarol.png",
    opts: {
      race: ["gessy"],
      star: ["2"],
      ele: ["light"],
      class: ["tri"],
      gender: ["f"]
    }
  },
  {
    name: "BFF Myarol",
    img: "myarolAlt.png",
    opts: {
      race: ["gessy"],
      star: ["5"],
      ele: ["org"],
      class: ["tri"],
      gender: ["f"],
      alt: true
    }
  },
  {
    name: "Nerul",
    img: "nerul.png",
    opts: {
      race: ["gessy"],
      star: ["3"],
      ele: ["dark"],
      class: ["tri"],
      gender: ["f"]
    }
  },
  {
    name: "Oki and Fuka",
    img: "oki.png",
    opts: {
      race: ["gessy"],
      star: ["5"],
      ele: ["water"],
      class: ["dps"],
      gender: ["f"]
    }
  },
  {
    name: "Patton",
    img: "patton.png",
    opts: {
      race: ["gessy"],
      star: ["3"],
      ele: ["light"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Pawatoto",
    img: "pawatoto.png",
    opts: {
      race: ["gessy"],
      star: ["3"],
      ele: ["light"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Pitsch",
    img: "pitsch.png",
    opts: {
      race: ["gessy"],
      star: ["4"],
      ele: ["earth"],
      class: ["buff"],
      gender: ["m"]
    }
  },
  {
    name: "Pook",
    img: "pook.png",
    opts: {
      race: ["gessy"],
      star: ["5"],
      ele: ["org"],
      class: ["buff"],
      gender: ["m"]
    }
  },
  {
    name: "Rorotata",
    img: "rorotata.png",
    opts: {
      race: ["gessy"],
      star: ["1"],
      ele: ["wind"],
      class: ["heal"],
      gender: ["f"]
    }
  },
  {
    name: "Tartarin",
    img: "tartarin.png",
    opts: {
      race: ["gessy"],
      star: ["1"],
      ele: ["dark"],
      class: ["deb"],
      gender: ["f"]
    }
  },
  {
    name: "Tartaris",
    img: "tartaris.png",
    opts: {
      race: ["gessy"],
      star: ["1"],
      ele: ["dark"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Tuffle",
    img: "tuffle.png",
    opts: {
      race: ["gessy"],
      star: ["5"],
      ele: ["earth"],
      class: ["deb"],
      gender: ["m"]
    }
  },
  {
    name: "Waugogo",
    img: "waugogo.png",
    opts: {
      race: ["gessy"],
      star: ["2"],
      ele: ["wind"],
      class: ["sh"],
      gender: ["f"]
    }
  },
  {
    name: "Sun Wukong",
    img: "wukong.png",
    opts: {
      race: ["gessy"],
      star: ["3"],
      ele: ["light"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Zonkaka",
    img: "zonkaka.png",
    opts: {
      race: ["gessy"],
      star: ["5"],
      ele: ["earth"],
      class: ["sh"],
      gender: ["m"]
    }
  },
  {
    name: "Amabie",
    img: "amabie.png",
    opts: {
      race: ["anc"],
      star: ["5"],
      ele: ["water"],
      class: ["heal"],
      gender: ["f"]
    }
  },
  {
    name: "Pilatus Amabie",
    img: "amabieAlt.png",
    opts: {
      race: ["anc"],
      star: ["5"],
      ele: ["water"],
      class: ["mk"],
      gender: ["f"],
      alt: true
    }
  },
  {
    name: "Fafnir",
    img: "fafnir.png",
    opts: {
      race: ["anc"],
      star: ["5"],
      ele: ["wind"],
      class: ["deb"],
      gender: ["f"]
    }
  },
  {
    name: "Shukk",
    img: "shukk.png",
    opts: {
      race: ["anc"],
      star: ["5"],
      ele: ["earth"],
      class: ["sh"],
      gender: ["m"]
    }
  },
  {
    name: "Siobhan",
    img: "siobahn.png",
    opts: {
      race: ["anc"],
      star: ["5"],
      ele: ["light"],
      class: ["mk"],
      gender: ["f"]
    }
  },
  {
    name: "Zirnitra",
    img: "zirnitra.png",
    opts: {
      race: ["anc"],
      star: ["6"],
      ele: ["dark"],
      class: ["dps"],
      gender: ["m"]
    }
  },
  {
    name: "Callie",
    img: "callie.png",
    opts: {
      race: ["jip"],
      star: ["5"],
      ele: ["water"],
      class: ["mage"],
      gender: ["f"]
    }
  },
  {
    name: "Kogabo",
    img: "kogabo.png",
    opts: {
      race: ["jip"],
      star: ["5"],
      ele: ["wind"],
      class: ["tri"],
      gender: ["m"]
    }
  },
  {
    name: "Mozuku",
    img: "mozuku.png",
    opts: {
      race: ["jip"],
      star: ["5"],
      ele: ["dark"],
      class: ["deb"],
      gender: ["f"]
    }
  },
  {
    name: "Tadamatsu",
    img: "tada.png",
    opts: {
      race: ["jip"],
      star: ["5"],
      ele: ["earth"],
      class: ["tank"],
      gender: ["m"]
    }
  },
  {
    name: "Usugumo",
    img: "usugumo.png",
    opts: {
      race: ["jip"],
      star: ["5"],
      ele: ["light"],
      class: ["mk"],
      gender: ["f"]
    }
  },
  {
    name: "Crown Prince Isirion",
    img: "valiantAlt.png",
    opts: {
      race: ["elf"],
      star: ["5"],
      ele: ["light"],
      class: ["sh"],
      gender: ["m"],
      alt: true
    }
  },
  {
    name: "Mr. Reincarnation",
    img: "uncle.png",
    opts: {
      race: ["human"],
      star: ["3"],
      ele: ["org"],
      class: ["mk"],
      gender: ["m"]
    },
    {
    name: "Princess Lena",
    img: "lenaAlt.png",
    opts: {
      race: ["human"],
      star: ["6"],
      ele: ["org"],
      class: ["heal"],
      gender: ["f"],
      alt: true
    }
  }
];
