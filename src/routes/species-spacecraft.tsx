import { GroupFooter, NavBar } from "../components/general";
import { useRef, useEffect } from "react";
import speciesSpacecraft, {
  StapiResponse,
  spaceCraftArray,
} from "../components/spacecraft/ShipInfo";
import { craftBuildLists, alpha } from "../components/spacecraft/SpeciesArrays";
import { Link } from "react-router-dom";


const linkStyle =
"bg-clip-text text-transparent \
transition-all duration-500 bg-gradient-to-tl to-orange-300 to-[75%] \
via-purple-800 from-blue-200 from-20% bg-size-200 bg-pos-0 \
hover:bg-pos-100";

function linkAppendage(){
  for(const item; alpha){
    document.getElementById("alphaLinks").innerHTML= <Link className="linkStyle" to="/SpaceCraftBody">{item}</Link>
  }
}

export default function SpeciesSpacecraft() {
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      speciesSpacecraft();
    }
  }, []);

  return (
    <>
      <NavBar title={window.location.href} />
      <h1 className="text-center mt-2 -mb-2">Species Spacecraft</h1>
      <div id="alphaLinks"></div>
      <GroupFooter />
    </>
  );
}
