import { Banner, NavBar } from "../components/general";

export default function SeriesActorStats() {
  return (
    <>
      <Banner />
      <NavBar title={window.location.href} />
      <h1>Series Actor Stats</h1>
    </>
  );
}
