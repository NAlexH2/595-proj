import { GroupFooter, NavBar } from "../components/general";

export const SpeciesSpacecraft = () => {
  return (
    <div data-testid="spacecraft-test">
      <NavBar title={window.location.href} />
      <h1>Species Spacecraft</h1>
      <GroupFooter />
    </div>
  );
};
