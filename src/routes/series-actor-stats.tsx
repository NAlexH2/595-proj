import { useEffect, useState } from "react";
import { GroupFooter, NavBar } from "../components/general";
import {
  ActorStapiResponse,
  actorsData,
} from "../components/series-actor-stats";

export default function SeriesActorStats() {
  const [actorData, setActorData] = useState<ActorStapiResponse[]>();
  useEffect(() => {
    const data = actorsData();
    setActorData(data);
  }, []);
  return (
    <>
      <NavBar title={window.location.href} />
      {actorData ? (
        actorData.map(actor => (
          <div key={actor.name}>
            {actor.birthName !== null ? actor.birthName : actor.name}
          </div>
        ))
      ) : (
        <div className="mt-10">hi</div>
      )}
      <GroupFooter />
    </>
  );
}
