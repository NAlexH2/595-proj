import { GroupFooter, NavBar } from "../components/general";

export const RuntimeStats = () => {
  return (
    <>
      <NavBar title={window.location.href} />
      <h1>Runtime Stats</h1>
      <GroupFooter />
    </>
  );
};
