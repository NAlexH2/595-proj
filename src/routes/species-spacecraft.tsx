import { GroupFooter, NavBar } from "../components/general";
import { useRef, useEffect, useState } from "react";
import speciesSpacecraft, {
  StapiResponse,
} from "../components/spacecraft/ShipInfo";
import getLetterList, { alpha } from "../components/spacecraft/SpeciesArrays";
import { speciesToShipMap } from "../components/spacecraft/ShipInfo";

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

export const SpeciesSpacecraft = () => {
  const hasFetched = useRef(false);
  const alphalinks: JSX.Element[] = [];
  const shipStats: JSX.Element[] = [];
  const [buttonState, setButtonState] = useState<string>("");
  let alien: string[] = [];
  let spaceShip: StapiResponse[] = [];

  function linkAppendage() {
    for (let i = 0; i < alpha.length; i += 1) {
      alphalinks.push(
        <button
          className={alpha[i] === buttonState ? activeButtonStyle : buttonStyle}
          key={alpha[i]}
          onClick={() => handleAlphaButtonClick(alpha[i])}
        >
          {alpha[i]}
        </button>,
      );
    }
    const handleAlphaButtonClick = (letter: string) => {
      letter !== buttonState ? setButtonState(letter) : letter;
      shipStats.length = 0;
      alien = getLetterList(letter);
      spaceShip = speciesToShipMap[letter];
      for (let i = 0; i < spaceShip.length; i += 1) {
        shipStats.push(
          <p>
            Name: {spaceShip[i].name} Warp Capability:{" "}
            {spaceShip[i].warpCapable} Species: {spaceShip[i].species.name}
          </p>,
        );
      }
    };
  }

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      speciesSpacecraft();
    }
  }, []);

  alphalinks.length = 0;
  linkAppendage();

  return (
    <div data-testid="spacecraft-test">
      <NavBar title={window.location.href} />
      <h1 className="text-center mt-2 -mb-2">Species Spacecraft</h1>
      <div id="alphaLinks">{alphalinks}</div>
      <div id="letterSpecs">Displaying ships for these species: {alien}</div>
      <div
        id="letterShips"
        className="row-start-2 row-span-5 col-start-2 col-span-10 border-4 overflow-y-scroll
          rounded-lg max-h-40"
      >
        {shipStats}
      </div>
      <GroupFooter />
    </div>
  );
};
