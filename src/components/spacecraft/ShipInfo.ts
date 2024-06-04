import axios from 'axios';
import getLetterList from './SpeciesArrays';

export interface StapiResponse{
  uid: string;
  name: string;
  numberOfDecks?: number | null;
  crew?: string | null;
  warpCapable: boolean;
  mirror?: boolean;
  alternateReality?: boolean;
  activeFrom?: string | null;
  activeTo?: string | null;
  species: {
    uid: string;
    name: string;
  } | null;
}

export const spaceCraftArray: StapiResponse[] = [];

export default async function speciesSpacecraft() {
  for (let i = 0; i < 8; i+=1) {
    await axios
      .get(
        "https://stapi.co/api/v2/rest/spacecraftClass/search?pageSize=100&pageNumber=" +
          i
      )
      .then(response => {
        filterShips(response.data.spacecraftClasses);
        mapShips(spaceCraftArray);
      });
  }
  return speciesToShipMap
}

function filterShips(response: StapiResponse[]){
  for (let i=0; i<response.length; i+=1){
    if(response[i].species!==null){
      delete response[i].activeFrom;
      delete response[i].activeTo;
      delete response[i].alternateReality;
      delete response[i].mirror;
      delete response[i].crew;
      delete response[i].numberOfDecks;
      spaceCraftArray.push(response[i]);
    }
  }
}

export const speciesToShipMap: { [key: string]: StapiResponse[] } = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
  K: [],
  L: [],
  M: [],
  N: [],
  O: [],
  P: [],
  Q: [],
  R: [],
  S: [],
  T: [],
  V: [],
  W: [],
  X: [],
  Y: [],
  Z: []
};

const mapShips =(spacecrafts: StapiResponse[]) =>{
  for(let i=0; i<spacecrafts.length; i+=1){
    if(getLetterList('A').includes(spacecrafts[i].species.name)){
      speciesToShipMap['A'].push(spacecrafts[i])
    }
    else if(getLetterList('B').includes(spacecrafts[i].species.name)){
      speciesToShipMap['B'].push(spacecrafts[i])
    }
    else if(getLetterList('C').includes(spacecrafts[i].species.name)){
      speciesToShipMap['C'].push(spacecrafts[i])
    }
    else if(getLetterList('D').includes(spacecrafts[i].species.name)){
      speciesToShipMap['D'].push(spacecrafts[i])
    }
    else if(getLetterList('E').includes(spacecrafts[i].species.name)){
      speciesToShipMap['E'].push(spacecrafts[i])
    }
    else if(getLetterList('F').includes(spacecrafts[i].species.name)){
      speciesToShipMap['F'].push(spacecrafts[i])
    }
    else if(getLetterList('G').includes(spacecrafts[i].species.name)){
      speciesToShipMap['G'].push(spacecrafts[i])
    }
    else if(getLetterList('H').includes(spacecrafts[i].species.name)){
      speciesToShipMap['H'].push(spacecrafts[i])
    }
    else if(getLetterList('I').includes(spacecrafts[i].species.name)){
      speciesToShipMap['I'].push(spacecrafts[i])
    }
    else if(getLetterList('J').includes(spacecrafts[i].species.name)){
      speciesToShipMap['J'].push(spacecrafts[i])
    }
    else if(getLetterList('K').includes(spacecrafts[i].species.name)){
      speciesToShipMap['K'].push(spacecrafts[i])
    }
    else if(getLetterList('L').includes(spacecrafts[i].species.name)){
      speciesToShipMap['L'].push(spacecrafts[i])
    }
    else if(getLetterList('M').includes(spacecrafts[i].species.name)){
      speciesToShipMap['M'].push(spacecrafts[i])
    }
    else if(getLetterList('N').includes(spacecrafts[i].species.name)){
      speciesToShipMap['N'].push(spacecrafts[i])
    }
    else if(getLetterList('O').includes(spacecrafts[i].species.name)){
      speciesToShipMap['O'].push(spacecrafts[i])
    }
    else if(getLetterList('P').includes(spacecrafts[i].species.name)){
      speciesToShipMap['P'].push(spacecrafts[i])
    }
    else if(getLetterList('Q').includes(spacecrafts[i].species.name)){
      speciesToShipMap['Q'].push(spacecrafts[i])
    }
    else if(getLetterList('R').includes(spacecrafts[i].species.name)){
      speciesToShipMap['R'].push(spacecrafts[i])
    }
    else if(getLetterList('S').includes(spacecrafts[i].species.name)){
      speciesToShipMap['S'].push(spacecrafts[i])
    }
    else if(getLetterList('T').includes(spacecrafts[i].species.name)){
      speciesToShipMap['T'].push(spacecrafts[i])
    }
    else if(getLetterList('V').includes(spacecrafts[i].species.name)){
      speciesToShipMap['V'].push(spacecrafts[i])
    }
    else if(getLetterList('W').includes(spacecrafts[i].species.name)){
      speciesToShipMap['W'].push(spacecrafts[i])
    }
    else if(getLetterList('X').includes(spacecrafts[i].species.name)){
      speciesToShipMap['X'].push(spacecrafts[i])
    }
    else if(getLetterList('Y').includes(spacecrafts[i].species.name)){
      speciesToShipMap['Y'].push(spacecrafts[i])
    }
    else if(getLetterList('Z').includes(spacecrafts[i].species.name)){
      speciesToShipMap['Z'].push(spacecrafts[i])
    }
  }
}
