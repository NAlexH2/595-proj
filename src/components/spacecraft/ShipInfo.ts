import axios from 'axios';
import getLetterList from './SpeciesArrays';

export interface StapiResponse {
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
  Object.values(speciesToShipMap).map(shipOfSpecies => shipOfSpecies.length=0);
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

function filterShips(response: StapiResponse[]) {
  spaceCraftArray.length=0;
  for (let i=0; i<response.length; i+=1) {
    if (response[i].species!==null) {
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

const mapShips =(spacecrafts: StapiResponse[]) => {
  if (spacecrafts!== null){
    for( const craft of spacecrafts){
      if (craft!== null && craft.species!==null) {
        if (getLetterList('A').includes(craft.species.name)) {
          speciesToShipMap['A'].push(craft)
        }
        else if (getLetterList('B').includes(craft.species.name)) {
          speciesToShipMap['B'].push(craft)
        }
        else if (getLetterList('C').includes(craft.species.name)) {
          speciesToShipMap['C'].push(craft)
        }
        else if (getLetterList('D').includes(craft.species.name)) {
          speciesToShipMap['D'].push(craft)
        }
        else if (getLetterList('E').includes(craft.species.name)) {
          speciesToShipMap['E'].push(craft)
        }
        else if (getLetterList('F').includes(craft.species.name)) {
          speciesToShipMap['F'].push(craft)
        }
        else if (getLetterList('G').includes(craft.species.name)) {
          speciesToShipMap['G'].push(craft)
        }
        else if (getLetterList('H').includes(craft.species.name)) {
          speciesToShipMap['H'].push(craft)
        }
        else if (getLetterList('I').includes(craft.species.name)) {
          speciesToShipMap['I'].push(craft)
        }
        else if (getLetterList('J').includes(craft.species.name)) {
          speciesToShipMap['J'].push(craft)
        }
        else if (getLetterList('K').includes(craft.species.name)) {
          speciesToShipMap['K'].push(craft)
        }
        else if (getLetterList('L').includes(craft.species.name)) {
          speciesToShipMap['L'].push(craft)
        }
        else if (getLetterList('M').includes(craft.species.name)) {
          speciesToShipMap['M'].push(craft)
        }
        else if (getLetterList('N').includes(craft.species.name)) {
          speciesToShipMap['N'].push(craft)
        }
        else if (getLetterList('O').includes(craft.species.name)) {
          speciesToShipMap['O'].push(craft)
        }
        else if (getLetterList('P').includes(craft.species.name)) {
          speciesToShipMap['P'].push(craft)
        }
        else if (getLetterList('Q').includes(craft.species.name)) {
          speciesToShipMap['Q'].push(craft)
        }
        else if (getLetterList('R').includes(craft.species.name)) {
          speciesToShipMap['R'].push(craft)
        }
        else if (getLetterList('S').includes(craft.species.name)) {
          speciesToShipMap['S'].push(craft)
        }
        else if (getLetterList('T').includes(craft.species.name)) {
          speciesToShipMap['T'].push(craft)
        }
        else if (getLetterList('V').includes(craft.species.name)) {
          speciesToShipMap['V'].push(craft)
        }
        else if (getLetterList('W').includes(craft.species.name)) {
          speciesToShipMap['W'].push(craft)
        }
        else if (getLetterList('X').includes(craft.species.name)) {
          speciesToShipMap['X'].push(craft)
        }
        else if (getLetterList('Y').includes(craft.species.name)) {
          speciesToShipMap['Y'].push(craft)
        }
        else if (getLetterList('Z').includes(craft.species.name)) {
          speciesToShipMap['Z'].push(craft)
        }
      }
    }
  }
}
