import axios from "axios";
interface ActorStapiResponse {
  uid: string;
  name: string;
  birthName?: string | null;
  gender?: string | null;
  dateOfBirth?: string | null;
  placeOfBirth?: string | null;
  dateOfDeath?: string | null;
  placeOfDeath?: string | null;
  animalPerformer?: boolean;
  audiobookPerformer?: boolean;
  cutPerformer?: boolean;
  disPerformer?: boolean;
  ds9Performer?: boolean;
  entPerformer?: boolean;
  filmPerformer?: boolean;
  ldPerformer?: boolean;
  picPerformer?: boolean;
  proPerformer?: boolean;
  puppeteer?: boolean;
  snwPerformer?: boolean;
  standInPerformer?: boolean;
  stPerformer?: boolean;
  stuntPerformer?: boolean;
  tasPerformer?: boolean;
  tngPerformer?: boolean;
  tosPerformer?: boolean;
  videoGamePerformer?: boolean;
  voicePerformer?: boolean;
  voyPerformer?: boolean;
}

export const actorsArray: ActorStapiResponse[] = [];

export default async function actorsData() {
  for (let i = 0; i < 69; i += 1) {
    await axios
      .get(
        "http://stapi.co/api/v2/rest/performer/search?pageSize=100&pageNumber=" +
          i,
      )
      .then(response => {
        filterActors(response.data.performers);
      });
  }
  return;
}

function isActorFromShow(data: ActorStapiResponse): boolean {
  const showData = [
    data.tngPerformer,
    data.voyPerformer,
    data.tosPerformer,
    data.disPerformer,
    data.entPerformer,
    data.picPerformer,
    data.snwPerformer,
    data.ldPerformer,
    data.ds9Performer,
    data.proPerformer,
    data.standInPerformer,
    data.tasPerformer,
  ];
  if (
    showData.some(item => {
      item === true;
    })
  )
    return true;
  return false;
}

function filterActors(response: ActorStapiResponse[]) {
  for (let i = 0; i < response.length; i += 1) {
    if (!isActorFromShow(response[i])) {
      delete response[i];
      i -= 1;
    } else {
      delete response[i].cutPerformer;
      delete response[i].puppeteer;
      delete response[i].audiobookPerformer;
      delete response[i].animalPerformer;
      delete response[i].stPerformer;
      delete response[i].stuntPerformer;
      delete response[i].videoGamePerformer;
      delete response[i].voicePerformer;
      delete response[i].filmPerformer;
      actorsArray.push(response[i]);
    }
  }
}
