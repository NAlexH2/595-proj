import { Banner, NavBar } from "../components/general";

export default function SpeciesSpacecraft() {
  return (
    <>
      <Banner />
      <NavBar title={window.location.href} />
      <h1>Species Spacecraft</h1>
    </>
  );
}
