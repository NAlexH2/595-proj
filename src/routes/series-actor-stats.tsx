import { useEffect, useRef, useState } from "react";
import { GroupFooter, NavBar } from "../components/general";
import { ActData, ActorStatsGraph } from "../components/series-actor-stats";

const activeButtonStyle =
  "border-3 text-black rounded-2xl p-2 text-sm font-semibold lg:font-bold \
  transition-all duration-500 bg-gradient-to-tl to-orange-300 to-[80%] \
  via-purple-800 from-blue-200 from-20% bg-size-200 bg-pos-0 \
  hover:bg-pos-100 uppercase";

const buttonStyle =
  "border-3 text-black me-4 rounded-2xl p-2 text-sm font-semibold \
  lg:font-bold transition-all duration-500 bg-gradient-to-tl via-orange-300 \
  from-purple-800 from-20% to-blue-200 to-[90%] bg-size-200 bg-pos-0 \
  hover:bg-pos-100";

export const SeriesActorStats = () => {
  const hasFetched = useRef(false);
  const [loading, setLoading] = useState(true);
  const [actorData, setActorData] = useState<{ [key: string]: string[] }>({});
  const [buttonState, setButtonState] = useState<string>("");

  const handleSeriesButtonClick = (series: string) => {
    series !== buttonState ? setButtonState(series) : series;
    const actorListElement = document.getElementById("actorList");
    const h2SeriesName = document.getElementById("seriesName");
    if (actorListElement && h2SeriesName) {
      h2SeriesName.innerText = `Actors credited in ${series}`;
      actorListElement.innerText = actorData[series].join(", ");
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      (async () => {
        const data = await ActData();
        setActorData(data);
        setLoading(false);
      })();
    }
  }, []);

  return (
    <>
      <NavBar title={window.location.href} />

      {loading ? (
        <section className="text-center mt-10 mb-20 text-2xl animate-pulse ">
          There is <div className="font-extrabold inline-block">a lot</div> of
          data to collect, please wait...
        </section>
      ) : (
        <main className="mt-4 mb-16">
          <section className="grid grid-cols-12">
            <section className="col-start-2 col-end-12 bg-black bg-opacity-25 my-2 pl-5 pb-5 pr-5">
              <ActorStatsGraph actorData={actorData} />
            </section>
          </section>
          <section className="grid grid-cols-12">
            <div className="gap-4 row-span-1 col-start-2 col-end-12 flex flex-wrap place-content-center">
              {Object.keys(actorData).map(series => (
                <button
                  className={
                    series === buttonState ? activeButtonStyle : buttonStyle
                  }
                  key={series}
                  onClick={() => handleSeriesButtonClick(series)}
                >
                  {series}
                </button>
              ))}
            </div>
          </section>
          <section className="grid grid-cols-12 grid-rows-5 mt-5">
            <h2
              id="seriesName"
              className="col-start-2 col-span-10 row-start-1 mb-2"
            ></h2>
            <div
              className="row-start-2 row-span-5 col-start-2 col-span-10 border-4 overflow-y-scroll
                rounded-lg max-h-40"
            >
              <div
                id="actorList"
                className="ml-7 mr-7 my-4 text-justify text-lg"
              ></div>
            </div>
          </section>
        </main>
      )}
      <GroupFooter />
    </>
  );
};
