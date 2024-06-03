import axios from "axios";
import ActorStapiResponse from "./actorStapiResponse";

const actorsToShowsMap: { [key: string]: string[] } = {
  "The Next Generation": [],
  Voyager: [],
  "The Original Series": [],
  Discovery: [],
  Enterprise: [],
  Picard: [],
  "Strange New Worlds": [],
  "Lower Decks": [],
  "Deep Space Nine": [],
  Prodigy: [],
  "The Animated Series": [],
  Extras: [],
};

const pageSize = 69;

export const ActData = async (): Promise<{ [key: string]: string[] }> => {
  const requests = [];
  if (actorsToShowsMap["The Next Generation"].length === 0) {
    for (let i = 0; i < pageSize; i += 1) {
      const url =
        "http://stapi.co/api/v2/rest/performer/search?pageSize=100&pageNumber=" +
        i;
      requests.push(
        axios
          .get(url)
          .then(response => {
            mapActors(response.data.performers);
          })
          .catch(error => console.error(error.message)),
      );
    }
  }

  await Promise.all(requests);
  return actorsToShowsMap;
};

const mapActors = (response: ActorStapiResponse[]) => {
  for (let i = 0; i < response.length; i += 1) {
    const data: ActorStapiResponse = response[i];
    if (data.tngPerformer === true) {
      actorsToShowsMap["The Next Generation"].push(data.name);
    }
    if (data.voyPerformer === true) {
      actorsToShowsMap["Voyager"].push(data.name);
    }
    if (data.tosPerformer === true) {
      actorsToShowsMap["The Original Series"].push(data.name);
    }
    if (data.disPerformer === true) {
      actorsToShowsMap["Discovery"].push(data.name);
    }
    if (data.entPerformer === true) {
      actorsToShowsMap["Enterprise"].push(data.name);
    }
    if (data.picPerformer === true) {
      actorsToShowsMap["Picard"].push(data.name);
    }
    if (data.snwPerformer === true) {
      actorsToShowsMap["Strange New Worlds"].push(data.name);
    }
    if (data.ldPerformer === true) {
      actorsToShowsMap["Lower Decks"].push(data.name);
    }
    if (data.ds9Performer === true) {
      actorsToShowsMap["Deep Space Nine"].push(data.name);
    }
    if (data.proPerformer === true) {
      actorsToShowsMap["Prodigy"].push(data.name);
    }
    if (data.standInPerformer === true) {
      actorsToShowsMap["Extras"].push(data.name);
    }
    if (data.tasPerformer === true) {
      actorsToShowsMap["The Animated Series"].push(data.name);
    }
  }
};
