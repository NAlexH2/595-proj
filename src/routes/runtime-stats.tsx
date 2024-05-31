import { Banner, NavBar } from "../components/general";

export default function RuntimeStats() {
  return (
    <>
      <Banner />
      <NavBar title={window.location.href} />
      <h1>Runtime Stats</h1>
    </>
  );
}
