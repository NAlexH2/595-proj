import speciesSpacecraft, { spaceCraftArray } from "./ShipInfo";
import getLetterList from "./SpeciesArrays";

const alpha = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

speciesSpacecraft();

for(const letter in alpha){
    const currentLetter = getLetterList(letter)
    const specMap: Map<string, string[]> = new Map(currentLetter.map((e,i) => [e, spaceCraftArray[i]]));
}
