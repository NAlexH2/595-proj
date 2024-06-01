import { GroupFooter, NavBar } from "../components/general";

export default function SpeciesSpacecraft() {
  return (
    <>
      <NavBar title={window.location.href} />
      <h1 className="text-center mt-2 -mb-2">Species Spacecraft</h1>
      <GroupFooter />
    </>
  );
}
