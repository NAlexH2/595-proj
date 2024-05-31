import axios from 'axios';
interface StapiResponse{
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

const spaceCraftArray: StapiResponse[] = [];

export default async function speciesSpacecraft() {
  for (let i = 0; i < 8; i+=1) {
    await axios
      .get(
        "http://stapi.co/api/v2/rest/spacecraftClass/search?pageSize=100&pageNumber=" +
          i
      )
      .then(response => {
        filterShips(response.data.spacecraftClasses);
      });
  }
}

function filterShips(response: StapiResponse[]){
  for (let i=0; i<response.length; i+=1){
    if(response[i].species===null){
      delete response[i];
      i-=1;
    }
    else{
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
