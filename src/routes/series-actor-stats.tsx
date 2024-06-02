import { useEffect, useRef, useState } from "react";
import { GroupFooter, NavBar } from "../components/general";
import { actData } from "../components/series-actor-stats";

export default function SeriesActorStats() {
  const hasFetched = useRef(false);
  const [loading, setLoading] = useState(true);
  const [actorData, setActorData] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      (async () => {
        const data = await actData();
        setActorData(data);
        setLoading(false);
      })();
    }
  }, []);

  return (
    <>
      <NavBar title={window.location.href} />

      {loading ? (
        <section className="text-center mt-10 mb-20 text-2xl animate-pulse">
          There is <div className="font-extrabold inline-block">a lot</div> of
          data to collect, please wait...
        </section>
      ) : (
        Object.entries(actorData).map(([show]) => (
          <div key={show}>
            <h2>{show}</h2>
            {show.length}
          </div>
        ))
      )}
      <GroupFooter />
    </>
  );
}
