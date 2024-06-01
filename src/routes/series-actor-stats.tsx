import { useEffect, useRef, useState } from "react";
import { GroupFooter, NavBar } from "../components/general";
import {
  ActorStapiResponse,
  actorsData,
} from "../components/series-actor-stats";

export default function SeriesActorStats() {
  const hasFetched = useRef(false);
  const [actorData, setActorData] = useState<ActorStapiResponse[]>();
  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      const data = actorsData();
      setActorData(data);
    }
  }, []);
  return (
    <>
      <NavBar title={window.location.href} />
      {actorData ? (
        actorData.map(actor => (
          <div key={actor.uid}>
            {actor.birthName !== null
              ? "Actor Name: " +
                actor.name +
                " ---- Actor Birth Name: " +
                actor.birthName
              : "Actor Name: " + actor.name}
          </div>
        ))
      ) : (
        <div className="mt-10">hi</div>
      )}
      <GroupFooter />
    </>
  );
}
