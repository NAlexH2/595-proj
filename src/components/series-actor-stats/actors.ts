import axios from "axios";
import ActorStapiResponse from "./actorStapiResponse";

export const actorsArray: ActorStapiResponse[] = [];

export default function actorsData() {
  for (let i = 0; i < 69; i += 1) {
    axios
      .get(
        "http://stapi.co/api/v2/rest/performer/search?pageSize=100&pageNumber=" +
          i,
      )
      .then(response => {
        filterActors(response.data.performers);
      });
    console.log(i + 1 + " of 69 complete.");
  }
  return actorsArray;
}

function filterActors(response: ActorStapiResponse[]) {
  for (let i = 0; i < response.length; i += 1) {
    if (isActorFromShow(response[i])) {
      delete response[i].cutPerformer;
      delete response[i].puppeteer;
      delete response[i].audiobookPerformer;
      delete response[i].animalPerformer;
      delete response[i].stPerformer;
      delete response[i].stuntPerformer;
      delete response[i].videoGamePerformer;
      delete response[i].voicePerformer;
      delete response[i].dateOfBirth;
      delete response[i].dateOfDeath;
      delete response[i].uid;
      delete response[i].placeOfBirth;
      delete response[i].placeOfDeath;
      actorsArray.push(response[i]);
    }
  }
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
      return item === true;
    })
  )
    return true;
  return false;
}
