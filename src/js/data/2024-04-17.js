dataSetVersion = "2024-04-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "Magician", key: "mag" },
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
    tooltip: "Uncheck this to stop showing characters with alternate forms, such as Psychopomp Sophia or Moon Bunny Mimi.",
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
      ele: ["org"],
      class: ["dps"],
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
      ele: ["origin"],
      class: ["dps"],
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
    img: "yoldo.png",
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
    name: "Hata no Kokoro",
    img: "fxCGmUk.png",
    opts: {
      series: ["book", "HM", "ULiL", "AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Wakasagihime",
    img: "brWCLVx.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st1"]
    }
  },
  {
    name: "Sekibanki",
    img: "VAMLiJD.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st2"]
    }
  },
  {
    name: "Imaizumi Kagerou",
    img: "qwwL0bB.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st3"]
    }
  },
  {
    name: "Tsukumo Benben",
    img: "vWNeMaH.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Tsukumo Yatsuhashi",
    img: "EJFQHQN.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Kijin Seija",
    img: "16RUacj.png",
    opts: {
      series: ["DDC", "ISC"],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Sukuna Shinmyoumaru",
    img: "Zl2tN7W.png",
    opts: {
      series: ["DDC", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Horikawa Raiko",
    img: "SLLEccR.png",
    opts: {
      series: ["DDC", "ISC", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Usami Sumireko",
    img: "mc7ICW6.png",
    opts: {
      series: ["ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Seiran",
    img: "0ra00WG.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st1"]
    }
  },
  {
    name: "Ringo",
    img: "xQOsFlZ.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st2"]
    }
  },
  {
    name: "Doremy Sweet",
    img: "rGS7dyn.png",
    opts: {
      series: ["LoLK", "AoCF", "VD"],
      stage: ["st3", "ex"]
    }
  },
  {
    name: "Kishin Sagume",
    img: "HLT338X.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Clownpiece",
    img: "9Jje7ZQ.jpg",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Junko",
    img: "NsfLZjY.jpg",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Hecatia Lapislazuli",
    img: "EH3Ulol.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Eternity Larva",
    img: "ql5KxJH.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st1"]
    }
  },
  {
    name: "Sakata Nemuno",
    img: "gYFhJ3Y.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st2"]
    }
  },
  {
    name: "Komano Aunn",
    img: "wWUStkF.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st3"]
    }
  },
  {
    name: "Yatadera Narumi",
    img: "wrPVhAo.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Nishida Satono",
    img: "8w9gAy2.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Teireida Mai",
    img: "DesAqAC.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Matara Okina",
    img: "icWvMyo.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Yorigami Shion",
    img: "LenxXR4.png",
    opts: {
      series: ["AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Yorigami Joon",
    img: "V9OznT1.png",
    opts: {
      series: ["AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Ebisu Eika",
    img: "Ke3316E.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st1"]
    }
  },
  {
    name: "Ushizaki Urumi",
    img: "ru2vIIW.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st2"]
    }
  },
  {
    name: "Niwatari Kutaka",
    img: "QTQt0ZL.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st3"]
    }
  },
  {
    name: "Kicchou Yachie",
    img: "CzcIMxF.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st4"]
    }
  },
  {
    name: "Joutouguu Mayumi",
    img: "GxeziYO.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st5"]
    }
  },
  {
    name: "Haniyasushin Keiki",
    img: "Z4jclTi.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st6"]
    }
  },
  {
    name: "Kurokoma Saki",
    img: "H2v2GPy.png",
    opts: {
      series: ["WBaWC"],
      stage: ["ex"]
    }
  },
  {
    name: "Goutokuji Mike",
    img: "FltSdtv.png",
    opts: {
      series: ["UM"],
      stage: ["st1"]
    }
  },
  {
    name: "Yamashiro Takane",
    img: "Aaq99GQ.png",
    opts: {
      series: ["UM"],
      stage: ["st2"]
    }
  },
  {
    name: "Komakusa Sannyo",
    img: "DKupiv1.png",
    opts: {
      series: ["UM"],
      stage: ["st3"]
    }
  },
  {
    name: "Tamatsukuri Misumaru",
    img: "BHwfCAQ.png",
    opts: {
      series: ["UM"],
      stage: ["st4"]
    }
  },
  {
    name: "Kudamaki Tsukasa",
    img: "KNy3FZq.png",
    opts: {
      series: ["UM"],
      stage: ["st5", "st6", "ex"]
    }
  },
  {
    name: "Iizunamaru Megumu",
    img: "QA63m27.png",
    opts: {
      series: ["UM"],
      stage: ["st5"]
    }
  },
  {
    name: "Tenkyuu Chimata",
    img: "Ga4AYtv.png",
    opts: {
      series: ["UM"],
      stage: ["st6"]
    }
  },
  {
    name: "Himemushi Momoyo",
    img: "iH2wqbd.png",
    opts: {
      series: ["UM"],
      stage: ["ex"]
    }
  },
  {
    name: "Hieda no Akyuu",
    img: "ogONuLZ.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  { 
    name: "Tokiko",
    img: "Y4maOc8.png", 
    opts: {
      series: ["book"],
      stage: [],
      nameless: true
    } 
  },
  {
    name: "Reisen (Manga)",
    img: "cWjCo2j.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Toyohime",
    img: "uEBxsEX.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Yorihime",
    img: "Txu2P7S.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Maribel Hearn",
    img: "XUI9vPo.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Usami Renko",
    img: "1P5EXRt.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Ibaraki Kasen",
    img: "dQHnPPe.png",
    opts: {
      series: ["book", "ULiL", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Motoori Kosuzu",
    img: "jEsJJo8.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Okunoda Miyoi",
    img: "a5V63gx.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Hakurei Reimu (PC-98)",
    img: "IZsGAMS.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  {
    name: "Shingyoku (Female)",
    img: "KuPiR2k.png",
    opts: {
      series: ["HRtP"],
      stage: ["st1"]
    }
  },
  {
    name: "Mima",
    img: "odH03t2.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "MS"],
      stage: ["st3", "st5", "st6"]
    }
  },
  {
    name: "Elis",
    img: "ytnL1xd.png",
    opts: {
      series: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Kikuri",
    img: "fX2Kqik.png",
    opts: {
      series: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Sariel",
    img: "Wyc7YFw.png",
    opts: {
      series: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Konngara",
    img: "dg9jLHv.png",
    opts: {
      series: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Rika",
    img: "02Xb4pU.png",
    opts: {
      series: ["SoEW"],
      stage: ["st1", "ex"]
    }
  },
  {
    name: "Meira",
    img: "p529JgT.png",
    opts: {
      series: ["SoEW"],
      stage: ["st2"]
    }
  },
  {
    name: "Kirisame Marisa (PC-98)",
    img: "wxE7cBm.png",
    opts: {
      series: ["SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  { name: "Ellen", img: "3iNNL0c.png", opts: {
      series: ["PoDD"],
      stage: []
    } },
  {
    name: "Kotohime",
    img: "kRSGtpq.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kana Anaberal",
    img: "rBvKMk5.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Asakura Rikako",
    img: "VIf5gUK.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kitashirakawa Chiyuri",
    img: "tZFBycy.png",
    opts: {
      series: ["PoDD"],
      stage: ["st5"]
    }
  },
  {
    name: "Okazaki Yumemi",
    img: "c9rnG3n.png",
    opts: {
      series: ["PoDD"],
      stage: ["st6"]
    }
  },
  {
    name: "Ruukoto",
    img: "dko67SJ.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Orange",
    img: "m8wXE5U.png",
    opts: {
      series: ["LLS"],
      stage: ["st1"]
    }
  },
  {
    name: "Kurumi",
    img: "0rvq1ph.png",
    opts: {
      series: ["LLS"],
      stage: ["st2"]
    }
  },
  {
    name: "Elly",
    img: "iIPftHn.png",
    opts: {
      series: ["LLS"],
      stage: ["st3"]
    }
  },
  {
    name: "Yuuka (PC-98)",
    img: "ivUSwxp.png",
    opts: {
      series: ["LLS", "MS"],
      stage: ["st5", "st6"],
      pc98: true
    }
  },
  {
    name: "Mugetsu",
    img: "bYA9E16.png",
    opts: {
      series: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Gengetsu",
    img: "TIOTtV9.png",
    opts: {
      series: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Sara",
    img: "2QUbCrU.png",
    opts: {
      series: ["MS"],
      stage: ["st1"]
    }
  },
  {
    name: "Louise",
    img: "nDM5aB6.png",
    opts: {
      series: ["MS"],
      stage: ["st2", "st4"]
    }
  },
  {
    name: "Alice (PC-98)",
    img: "KaBuRTW.png",
    opts: {
      series: ["MS"],
      stage: ["st3", "ex"],
      pc98: true
    }
  },
  {
    name: "Yuki",
    img: "FfcmDgp.png",
    opts: {
      series: ["MS"],
      stage: ["st4"]
    }
  },
  { name: "Mai", img: "r6w7TX1.png", opts: {
      series: ["MS"],
      stage: ["st4"]
    } },
  {
    name: "Yumeko",
    img: "PcPqkdO.png",
    opts: {
      series: ["MS"],
      stage: ["st5"]
    }
  },
  {
    name: "Shinki",
    img: "gPE95S7.png",
    opts: {
      series: ["MS"],
      stage: ["st6"]
    }
  },
  {
    name: "Mimi-chan",
    img: "zBl2zlv.png",
    opts: {
      series: ["PoDD"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Unzan",
    img: "r5eWREh.png",
    opts: {
      series: ["UFO", "DS", "HM", "ULiL", "AoCF"],
      stage: ["st3"],
      notgirl: true
    }
  },
  {
    name: "Genji",
    img: "LoUqOuH.png",
    opts: {
      series: ["SoEW", "PoDD", "LLS", "MS"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Shingyoku (Male)",
    img: "a5uwlgN.png",
    opts: {
      series: ["HRtP"],
      stage: ["st1"],
      notgirl: true 
    }
  },
  {
    name: "YuugenMagan",
    img: "IOW8GdU.png",
    opts: {
      series: ["HRtP"],
      stage: ["st3"],
      notgirl: true 
    }
  },
  {
    name: "Evil Eye Sigma",
    img: "rAFUMwE.png",
    opts: {
      series: ["SoEW"],
      stage: ["ex"],
      notgirl: true 
    }
  },
  {
    name: "Great Catfish",
    img: "BgRi9Oh.png",
    opts: {
      series: ["soku", "AoCF"],
      stage: ["st6"],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Morichika Rinnosuke",
    img: "ITUhsGj.png",
    opts: {
      series: ["book", "HM"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Fortune Teller",
    img: "BYot23O.png",
    opts: {
      series: ["book"],
      stage: [],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Hisoutensoku",
    img: "P4JZ2it.png",
    opts: {
      series: ["soku"],
      stage: [],
      notgirl: true 
    }
  }
];
