export default function getLetterList(letter: string): string[] {
  const craftBuildLists = [
    ACraftBuild,
    BCraftBuild,
    CCraftBuild,
    DCraftBuild,
    ECraftBuild,
    FCraftBuild,
    GCraftBuild,
    HCraftBuild,
    ICraftBuild,
    JCraftBuild,
    KCraftBuild,
    LCraftBuild,
    MCraftBuild,
    NCraftBuild,
    OCraftBuild,
    PCraftBuild,
    QCraftBuild,
    RCraftBuild,
    SCraftBuild,
    TCraftBuild,
    VCraftBuild,
    WCraftBuild,
    XCraftBuild,
    YCraftBuild,
    ZCraftBuild,
  ];
  const alpha = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
  const letterMap: Map<string, string[]> = new Map(alpha.map((e, i) => [e, craftBuildLists[i]]));
  const result = letterMap.get(letter);
  if(result!=undefined){
    return result;
  }
  return [];
}

const ACraftBuild: string[] = [
  "Abronian",
  "Akritirian",
  "Aksani",
  "Andorian",
  "Angosian",
  "Ankari",
  "Annari",
  "Antarian",
  "Antidean",
  "Apergosian",
  "Ardanan",
  "Areore",
  "Arkonian",
  "Arretan",
  "Axanar",
];

const BCraftBuild: string[] = [
  "B'omar",
  "Ba'Neth",
  "Ba'ul",
  "Bajoran",
  "Bardeezan",
  "Barolian",
  "Benkaran",
  "Benthan",
  "Benzite",
  "Bolian",
  "Borg",
  "Boslic",
  "Breen",
  "Brenari",
  "Briori",
  "Brunali",
];

const CCraftBuild: string[] = [
  "Caatati",
  "Cardassian",
  "Chessu",
  "Chokuzan",
  "Corvallen",
  "Coverian",
  "Cravic",
];

const DCraftBuild: string[] = [
  "Dekendi",
  "Deltan",
  "Denebian",
  "Denobulan",
  "Devore",
  "Dralian",
  "Dramen",
  "Drayan",
  "Drookmani",
];

const ECraftBuild: string[] = ["Ekosian", "Elasian", "Enolian", "Etanian"];

const FCraftBuild: string[] = ["Ferengi", "Flaxian"];

const GCraftBuild: string[] = ["Galipotan", "Gelrakian", "Gorn"];

const HCraftBuild: string[] = [
  "Haakonian",
  "Hazari",
  "Hekaran",
  "Hirogen",
  "Human",
  "Husnock",
];

const ICraftBuild: string[] = ["Illyrian", "Imhotep", "Iyaaran"];

const JCraftBuild: string[] = ["J'naii", "Jelinian", "Jem'Hadar"];

const KCraftBuild: string[] = [
  "K'normian",
  "Kaelon",
  "Kalandan",
  "Kantare",
  "Karemma",
  "Kazon",
  "Kelvan",
  "Kinjal",
  "Klaestron",
  "Klingon",
  "Kobali",
  "Kobheerian",
  "Kobliad",
  "Kovaalan",
  "Kraylor",
  "Kreetassan",
  "Krenim",
  "Kressari",
  "Kriosian",
  "Ktarian",
  "Kyrian",
  "Kzinti",
];

const LCraftBuild: string[] = ["Ledosian", "Lissepian", "Lokirrim", "Lysian"];

const MCraftBuild: string[] = [
  "Majalan",
  "Malcorian",
  "Malon",
  "Malosian",
  "Malurian",
  "Mawasi",
  "Mazarite",
  "Medusan",
  "Mislenite",
  "Monean",
];

const NCraftBuild: string[] = [
  "Nausicaan",
  "Nihydron",
  "Numiri",
  "Nuu'Bari",
  "Nygean",
  "Nyria",
];

const OCraftBuild: string[] = ["Orion", "Ornaran", "Osaarian"];

const PCraftBuild: string[] = [
  "Pakled",
  "Pelian",
  "Phylosian",
  "Pralor",
  "Promellian",
  "Provider",
];

const QCraftBuild: string[] = ["Qomar", "Quarren"];

const RCraftBuild: string[] = [
  "R'ongovian",
  "Rakhari",
  "Rakosan",
  "Ramuran",
  "Reptohumanoid",
  "Retellian",
  "Rigelian",
  "Romulan",
  "Rukani",
  "Rutian",
];

const SCraftBuild: string[] = [
  "Satarran",
  "Serosian",
  "Sheliak",
  "Shepherd",
  "Sikarian",
  "Skagaran",
  "Sphere-Builder",
  "Srivani",
  "Subytt",
  "Suliban",
];

const TCraftBuild: string[] = [
  "T'Lani",
  "Takret",
  "Talarian",
  "Talavian",
  "Talaxian",
  "Tandaran",
  "Tarellian",
  "Taresian",
  "Tarkalean",
  "Tellarite",
  "Telsian",
  "Terellian",
  "Terran",
  "Tesnian",
  "Thasian",
  "Tholian",
  "Triannon",
  "Trill",
  "Turei",
  "Tygarian",
  "Tzenkethi",
];

const VCraftBuild: string[] = [
  "Vaadwaur",
  "Valakian",
  "Valerian",
  "Valtese",
  "Varro",
  "Vidiian",
  "Vissian",
  "Voth",
  "Vulcan",
];

const WCraftBuild: string[] = ["Wadi", "Wisp", "Wysanti"];

const XCraftBuild: string[] = [
  "Xantoras",
  "Xarantine",
  "Xepolite",
  "Xindi-Aquatic",
  "Xindi-Arboreal",
  "Xindi-Insectoid",
  "Xindi-Primate",
  "Xindi-Reptilian",
  "Xyrillian",
];

const YCraftBuild: string[] = ["Yridian"];

const ZCraftBuild: string[] = ["Zahl", "Zalkonian", "Zeon", "Zibalian"];
