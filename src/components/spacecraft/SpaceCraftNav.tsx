import { StyledLink } from "../general";
import speciesSpacecraft, {StapiResponse, spaceCraftArray}  from "./ShipInfo";
import getLetterList from "./SpeciesArrays";
import React, {useState, useRef, useEffect} from 'react';
import SCraftBody from "./SpaceCraftBody";

const alpha = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

    // for(const letter in alpha){
    //   const currentLetter = getLetterList(letter)
    //   const specMap: Map<string, StapiResponse[]> = new Map(currentLetter.map((e,i) => [e, specShipList(currentLetter[i])]));
    // }

    // function specShipList(specName: string): StapiResponse[]{
    //   const specShips: StapiResponse[]=[];
    //   for(let i=0; i<spaceCraftArray.length; i+=1){
    //       if(spaceCraftArray[i].species.name===specName){
    //           specShips.push(spaceCraftArray[i]);
    //       }
    //   }
    //   return specShips;
    // }

  return (
    <>

    </>
  )
}
